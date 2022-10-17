import { wrapScheduledLambda } from "../utils/wrap";
import { getLatestBlock } from "@defillama/sdk/build/util";
import {
  queryAggregatedHourlyTimestampRange,
  queryAggregatedDailyTimestampRange,
} from "../utils/wrappa/postgres/query";
import { insertErrorRow } from "../utils/wrappa/postgres/write";
import bridgeNetworks from "../data/bridgeNetworkData";
import adapters from "../adapters";
import { getCurrentUnixTimestamp, getTimestampAtStartOfDay, secondsInDay } from "../utils/date";
import { maxBlocksToQueryByChain } from "../utils/constants";
import type { RecordedBlocks } from "../utils/types";
const axios = require("axios");
const retry = require("async-retry");

export default wrapScheduledLambda(async (_event) => {
  const timestampAtStartOfDay = getTimestampAtStartOfDay(getCurrentUnixTimestamp());
  const startTimestamp = timestampAtStartOfDay - secondsInDay + 1;
  const endTimestamp = timestampAtStartOfDay;
  await Promise.all(
    bridgeNetworks.map(async (bridgeNetwork) => {
      const { bridgeDbName } = bridgeNetwork;
      const adapter = adapters[bridgeDbName];
      if (!adapter) {
        throw new Error(`Adapter for ${bridgeDbName} not found, check it is exported correctly.`);
      }
      await Promise.all(
        Object.keys(adapter).map(async (chain) => {
          const hourlyEntries = await queryAggregatedHourlyTimestampRange(
            startTimestamp,
            endTimestamp,
            bridgeDbName,
            chain
          );
          const dailyEntries = await queryAggregatedDailyTimestampRange(
            startTimestamp,
            endTimestamp,
            bridgeDbName,
            chain
          );
          console.info(bridgeDbName, hourlyEntries.length);
          console.info(bridgeDbName, dailyEntries.length);
          if (hourlyEntries.length < 24) {
            await insertErrorRow({
              ts: getCurrentUnixTimestamp() * 1000,
              target_table: "hourly_aggregated",
              keyword: "data",
              error: `Bridge ${bridgeDbName} on chain ${chain} has ${hourlyEntries.length} hourly entries from ${startTimestamp} to ${endTimestamp}`,
            });
          }
          if (!dailyEntries.length) {
            await insertErrorRow({
              ts: getCurrentUnixTimestamp() * 1000,
              target_table: "daily_aggregated",
              keyword: "data",
              error: `Bridge ${bridgeDbName} on chain ${chain} has NO daily entry for ${endTimestamp}.`,
            });
          }
        })
      );
    })
  );

  const recordedBlocks = (
    await retry(
      async (_bail: any) =>
        await axios.get("https://llama-bridges-data.s3.eu-central-1.amazonaws.com/recordedBlocks.json")
    )
  ).data as RecordedBlocks;
  let adaptersBehind = [] as string[];
  let latestChainBlocks = {} as any;
  const getBlocksPromises = Promise.all(
    Object.keys(recordedBlocks).map(async (adapter) => {
      const chain = adapter.split(":")[1];
      if (!latestChainBlocks[chain]) {
        latestChainBlocks[chain] = (await getLatestBlock(chain)).number;
      }
    })
  );
  await getBlocksPromises;
  Object.entries(recordedBlocks).map(([adapter, recordedBlocks]) => {
    const chain = adapter.split(":")[1];
    const maxBlocksToBeBehindBy = maxBlocksToQueryByChain[chain]
      ? maxBlocksToQueryByChain[chain]
      : maxBlocksToQueryByChain.default;
    if (Math.abs(recordedBlocks.endBlock - latestChainBlocks[chain]) > maxBlocksToBeBehindBy) {
      adaptersBehind.push(adapter);
    }
  });
  if (adaptersBehind.length > 0) {
    await insertErrorRow({
      ts: getCurrentUnixTimestamp() * 1000,
      target_table: "transactions",
      keyword: "data",
      error: `These adapters are currently running behind: ${adaptersBehind}.`,
    });
  }
});