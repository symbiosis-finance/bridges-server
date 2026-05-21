# Vulnerability Report

**Scan date:** 2026-05-21  
**Ecosystem:** npm  

## Summary

| Metric | Count |
|--------|-------|
| Pre-patch vulnerable (package, version) instances | 62 |
| Post-patch vulnerable instances | 10 |
| **Resolved** | **52** |

## Manifest Changes

```
@solana/web3.js: ^1.87.3 → ^1.87.7 (HIGH)
esbuild: 0.23.1 → 0.25.0 (MODERATE)
fastify: ^4.26.2 → 5.8.3 (HIGH)
lodash: ^4.17.21 → ^4.18.0 (HIGH)
vite: ^6.0.1 → ^6.4.2 (HIGH)
```

## Remaining Vulnerabilities

| Package | Version | Severity | Advisory IDs |
|---------|---------|----------|-------------|
| ws | 8.17.1 | MODERATE | GHSA-58qx-3vcg-4xpx |
| aws-sdk | 2.1693.0 | LOW | GHSA-j965-2qgj-vjmq |
| axios | 0.21.4 | HIGH | GHSA-3p68-rc4w-qgx5, GHSA-43fc-jf86-j433, GHSA-5c9x-8gcm-mpgx |
| elliptic | 6.6.1 | LOW | GHSA-848j-6mx2-7j84 |
| fast-xml-parser | 5.2.5 | CRITICAL | GHSA-37qj-frw5-hhjh, GHSA-8gc5-j5rx-235r, GHSA-fj3w-jwp8-x2g3 |
| fastify | 5.8.3 | UNKNOWN | GHSA-247c-9743-5963 |
| file-type | 16.5.4 | MODERATE | GHSA-5v7r-6r5c-r473 |
| jsonpath-plus | 7.2.0 | CRITICAL | GHSA-hw8r-x6gr-5gjp, GHSA-pppg-cpfq-h7wr |
| tar | 6.2.1 | HIGH | GHSA-34x7-hfp2-rc4v, GHSA-83g3-92jg-28cx, GHSA-8qq5-rm4j-mr97 |
| ws | 8.18.0 | MODERATE | GHSA-58qx-3vcg-4xpx |

## Escalations

### @smithy/config-resolver@4.0.1 (LOW)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.@smithy/config-resolver = "4.4.0"`

### @babel/runtime@7.23.4 (MODERATE)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.@babel/runtime = "7.26.10"`

### axios@1.6.8 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.axios = "1.15.2"`

### form-data@4.0.0 (CRITICAL)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.form-data = "4.0.4"`

### ws@8.5.0 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.ws = "8.20.1"`

### ajv@6.12.6 (MODERATE)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.ajv = "8.18.0"`

### @hapi/content@6.0.0 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.@hapi/content = "6.0.1"`

### js-yaml@3.14.1 (MODERATE)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.js-yaml = "4.1.1"`

### base-x@3.0.9 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.base-x = "3.0.11"`

### bigint-buffer@1.1.5 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.bigint-buffer = "?"`

### bn.js@5.2.1 (MODERATE)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.bn.js = "5.2.3"`

### brace-expansion@1.1.11 (MODERATE)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.brace-expansion = "2.0.3"`

### braces@3.0.2 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.braces = "3.0.3"`

### cookiejar@2.1.3 (MODERATE)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.cookiejar = "2.1.4"`

### luxon@1.28.0 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.luxon = "1.28.1"`

### cross-spawn@6.0.5 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.cross-spawn = "7.0.5"`

### semver@5.7.1 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.semver = "5.7.2"`

### effect@3.10.19 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.effect = "3.20.0"`

### elliptic@6.5.4 (CRITICAL)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.elliptic = "6.6.1"`

### es5-ext@0.10.62 (LOW)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.es5-ext = "0.10.63"`

### fast-uri@2.4.0 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.fast-uri = "3.1.2"`

### fast-xml-parser@4.4.1 (CRITICAL)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.fast-xml-parser = "5.7.0"`

### file-type@16.5.4 (MODERATE)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.file-type = "21.3.1"`

### flatted@3.2.7 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.flatted = "3.4.2"`

### follow-redirects@1.15.6 (MODERATE)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.follow-redirects = "1.16.0"`

### qs@6.9.3 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.qs = "6.14.2"`

### http-cache-semantics@4.1.0 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.http-cache-semantics = "4.1.1"`

### jsonpath-plus@7.2.0 (CRITICAL)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.jsonpath-plus = "10.3.0"`

### micromatch@4.0.5 (MODERATE)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.micromatch = "4.0.8"`

### minimatch@3.1.2 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.minimatch = "5.1.8"`

### picomatch@2.3.1 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.picomatch = "2.3.2"`

### postcss@8.4.49 (MODERATE)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.postcss = "8.5.10"`

### rollup@4.27.4 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.rollup = "4.59.0"`

### aws-sdk@2.1687.0 (LOW)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.aws-sdk = "?"`

### simple-git@3.11.0 (CRITICAL)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.simple-git = "3.36.0"`

### tar@6.1.11 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.tar = "7.5.11"`

### tmp@0.0.33 (LOW)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.tmp = "0.2.4"`

### undici@6.21.0 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.undici = "6.24.0"`

### valibot@0.36.0 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.valibot = "1.2.0"`

### velocityjs@2.0.6 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.velocityjs = "?"`

### word-wrap@1.2.3 (MODERATE)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.word-wrap = "1.2.4"`

