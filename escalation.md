# Escalation Report — Vulnerabilities Without Clean Fix Paths

**Date:** 2026-05-21

The following packages cannot be patched by bumping a manifest entry alone.
Overrides would mechanically resolve them but were NOT applied automatically.
Review each item and decide whether to apply the suggested override.

---

## Item 1 — @smithy/config-resolver (LOW)

| Field | Value |
|-------|-------|
| Package | `@smithy/config-resolver@4.0.1` |
| Severity | LOW |
| Advisory IDs | GHSA-6475-r3vj-m8vf |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.@smithy/config-resolver = "4.4.0"` |

- **GHSA-6475-r3vj-m8vf**: AWS SDK for JavaScript v3 adopted defense in depth enhancement for region parameter value

## Item 2 — @babel/runtime (MODERATE)

| Field | Value |
|-------|-------|
| Package | `@babel/runtime@7.23.4` |
| Severity | MODERATE |
| Advisory IDs | GHSA-968p-4wvh-cqc8 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.@babel/runtime = "7.26.10"` |

- **GHSA-968p-4wvh-cqc8**: Babel has inefficient RegExp complexity in generated code with .replace when transpiling named captu

## Item 3 — axios (HIGH)

| Field | Value |
|-------|-------|
| Package | `axios@1.6.8` |
| Severity | HIGH |
| Advisory IDs | GHSA-q8qp-cvcw-x6jj, GHSA-vf2m-468p-8v99, GHSA-pf86-5x62-jrwf, GHSA-fvcv-3m26-pcqx, GHSA-5c9x-8gcm-mpgx |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.axios = "1.15.2"` |

- **GHSA-q8qp-cvcw-x6jj**: Axios has prototype pollution read-side gadgets in HTTP adapter that allow credential injection and 
- **GHSA-vf2m-468p-8v99**: Axios: HTTP adapter streamed responses bypass maxContentLength
- **GHSA-pf86-5x62-jrwf**: Axios: Prototype Pollution Gadgets - Response Tampering, Data Exfiltration, and Request Hijacking

## Item 4 — form-data (CRITICAL)

| Field | Value |
|-------|-------|
| Package | `form-data@4.0.0` |
| Severity | CRITICAL |
| Advisory IDs | GHSA-fjxv-7rqg-78g4 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.form-data = "4.0.4"` |

- **GHSA-fjxv-7rqg-78g4**: form-data uses unsafe random function in form-data for choosing boundary

## Item 5 — ws (HIGH)

| Field | Value |
|-------|-------|
| Package | `ws@8.5.0` |
| Severity | HIGH |
| Advisory IDs | GHSA-3h5v-q93c-6h6q, GHSA-58qx-3vcg-4xpx |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.ws = "8.20.1"` |

- **GHSA-3h5v-q93c-6h6q**: ws affected by a DoS when handling a request with many HTTP headers
- **GHSA-58qx-3vcg-4xpx**: ws: Uninitialized memory disclosure

## Item 6 — ajv (MODERATE)

| Field | Value |
|-------|-------|
| Package | `ajv@6.12.6` |
| Severity | MODERATE |
| Advisory IDs | GHSA-2g4f-4pwh-qvx6 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.ajv = "8.18.0"` |

- **GHSA-2g4f-4pwh-qvx6**: ajv has ReDoS when using `$data` option

## Item 7 — @hapi/content (HIGH)

| Field | Value |
|-------|-------|
| Package | `@hapi/content@6.0.0` |
| Severity | HIGH |
| Advisory IDs | GHSA-jg4p-7fhp-p32p |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.@hapi/content = "6.0.1"` |

- **GHSA-jg4p-7fhp-p32p**: @hapi/content: Regular Expression Denial of Service (ReDoS) in HTTP header parsing

## Item 8 — js-yaml (MODERATE)

| Field | Value |
|-------|-------|
| Package | `js-yaml@3.14.1` |
| Severity | MODERATE |
| Advisory IDs | GHSA-mh29-5h37-fv8m |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.js-yaml = "4.1.1"` |

- **GHSA-mh29-5h37-fv8m**: js-yaml has prototype pollution in merge (<<)

## Item 9 — base-x (HIGH)

| Field | Value |
|-------|-------|
| Package | `base-x@3.0.9` |
| Severity | HIGH |
| Advisory IDs | GHSA-xq7p-g2vc-g82p |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.base-x = "3.0.11"` |

- **GHSA-xq7p-g2vc-g82p**: Homograph attack allows Unicode lookalike characters to bypass validation.

## Item 10 — bigint-buffer (HIGH)

| Field | Value |
|-------|-------|
| Package | `bigint-buffer@1.1.5` |
| Severity | HIGH |
| Advisory IDs | GHSA-3gc7-fjrx-p6mg |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.bigint-buffer = "?"` |

- **GHSA-3gc7-fjrx-p6mg**: bigint-buffer Vulnerable to Buffer Overflow via toBigIntLE() Function

## Item 11 — bn.js (MODERATE)

| Field | Value |
|-------|-------|
| Package | `bn.js@5.2.1` |
| Severity | MODERATE |
| Advisory IDs | GHSA-378v-28hj-76wf |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.bn.js = "5.2.3"` |

- **GHSA-378v-28hj-76wf**: bn.js affected by an infinite loop

## Item 12 — brace-expansion (MODERATE)

| Field | Value |
|-------|-------|
| Package | `brace-expansion@1.1.11` |
| Severity | MODERATE |
| Advisory IDs | GHSA-f886-m6hf-6m8v, GHSA-v6h2-p8h4-qcjw |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.brace-expansion = "2.0.3"` |

- **GHSA-f886-m6hf-6m8v**: brace-expansion: Zero-step sequence causes process hang and memory exhaustion
- **GHSA-v6h2-p8h4-qcjw**: brace-expansion Regular Expression Denial of Service vulnerability

## Item 13 — braces (HIGH)

| Field | Value |
|-------|-------|
| Package | `braces@3.0.2` |
| Severity | HIGH |
| Advisory IDs | GHSA-grv7-fg5c-xmjg |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.braces = "3.0.3"` |

- **GHSA-grv7-fg5c-xmjg**: Uncontrolled resource consumption in braces

## Item 14 — cookiejar (MODERATE)

| Field | Value |
|-------|-------|
| Package | `cookiejar@2.1.3` |
| Severity | MODERATE |
| Advisory IDs | GHSA-h452-7996-h45h |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.cookiejar = "2.1.4"` |

- **GHSA-h452-7996-h45h**: cookiejar Regular Expression Denial of Service via Cookie.parse function

## Item 15 — luxon (HIGH)

| Field | Value |
|-------|-------|
| Package | `luxon@1.28.0` |
| Severity | HIGH |
| Advisory IDs | GHSA-3xq5-wjfh-ppjc |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.luxon = "1.28.1"` |

- **GHSA-3xq5-wjfh-ppjc**: Luxon Inefficient Regular Expression Complexity vulnerability

## Item 16 — cross-spawn (HIGH)

| Field | Value |
|-------|-------|
| Package | `cross-spawn@6.0.5` |
| Severity | HIGH |
| Advisory IDs | GHSA-3xgq-45jj-v275 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.cross-spawn = "7.0.5"` |

- **GHSA-3xgq-45jj-v275**: Regular Expression Denial of Service (ReDoS) in cross-spawn

## Item 17 — semver (HIGH)

| Field | Value |
|-------|-------|
| Package | `semver@5.7.1` |
| Severity | HIGH |
| Advisory IDs | GHSA-c2qf-rxjj-qqgw |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.semver = "5.7.2"` |

- **GHSA-c2qf-rxjj-qqgw**: semver vulnerable to Regular Expression Denial of Service

## Item 18 — effect (HIGH)

| Field | Value |
|-------|-------|
| Package | `effect@3.10.19` |
| Severity | HIGH |
| Advisory IDs | GHSA-38f7-945m-qr2g |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.effect = "3.20.0"` |

- **GHSA-38f7-945m-qr2g**: Effect `AsyncLocalStorage` context lost/contaminated inside Effect fibers under concurrent load with

## Item 19 — elliptic (CRITICAL)

| Field | Value |
|-------|-------|
| Package | `elliptic@6.5.4` |
| Severity | CRITICAL |
| Advisory IDs | GHSA-fc9h-whq2-v747, GHSA-848j-6mx2-7j84, GHSA-434g-2637-qmqr, GHSA-vjh7-7g9h-fjfh, GHSA-977x-g7h5-7qgw |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.elliptic = "6.6.1"` |

- **GHSA-fc9h-whq2-v747**: Valid ECDSA signatures erroneously rejected in Elliptic
- **GHSA-848j-6mx2-7j84**: Elliptic Uses a Cryptographic Primitive with a Risky Implementation
- **GHSA-434g-2637-qmqr**: Elliptic's verify function omits uniqueness validation

## Item 20 — es5-ext (LOW)

| Field | Value |
|-------|-------|
| Package | `es5-ext@0.10.62` |
| Severity | LOW |
| Advisory IDs | GHSA-4gmj-3p3h-gm8h |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.es5-ext = "0.10.63"` |

- **GHSA-4gmj-3p3h-gm8h**: es5-ext vulnerable to Regular Expression Denial of Service in `function#copy` and `function#toString

## Item 21 — fast-uri (HIGH)

| Field | Value |
|-------|-------|
| Package | `fast-uri@2.4.0` |
| Severity | HIGH |
| Advisory IDs | GHSA-v39h-62p7-jpjc, GHSA-q3j6-qgpj-74h6 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.fast-uri = "3.1.2"` |

- **GHSA-v39h-62p7-jpjc**: fast-uri vulnerable to host confusion via percent-encoded authority delimiters
- **GHSA-q3j6-qgpj-74h6**: fast-uri vulnerable to path traversal via percent-encoded dot segments

## Item 22 — fast-xml-parser (CRITICAL)

| Field | Value |
|-------|-------|
| Package | `fast-xml-parser@4.4.1` |
| Severity | CRITICAL |
| Advisory IDs | GHSA-8gc5-j5rx-235r, GHSA-m7jm-9gc2-mpf2, GHSA-gh4j-gqv2-49f6, GHSA-fj3w-jwp8-x2g3, GHSA-jp2q-39xq-3w4g |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.fast-xml-parser = "5.7.0"` |

- **GHSA-8gc5-j5rx-235r**: fast-xml-parser affected by numeric entity expansion bypassing all entity expansion limits (incomple
- **GHSA-m7jm-9gc2-mpf2**: fast-xml-parser has an entity encoding bypass via regex injection in DOCTYPE entity names
- **GHSA-gh4j-gqv2-49f6**: fast-xml-parser XMLBuilder: XML Comment and CDATA Injection via Unescaped Delimiters

## Item 23 — file-type (MODERATE)

| Field | Value |
|-------|-------|
| Package | `file-type@16.5.4` |
| Severity | MODERATE |
| Advisory IDs | GHSA-5v7r-6r5c-r473 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.file-type = "21.3.1"` |

- **GHSA-5v7r-6r5c-r473**: file-type affected by infinite loop in ASF parser on malformed input with zero-size sub-header

## Item 24 — flatted (HIGH)

| Field | Value |
|-------|-------|
| Package | `flatted@3.2.7` |
| Severity | HIGH |
| Advisory IDs | GHSA-rf6f-7fwh-wjgh, GHSA-25h7-pfq9-p65f |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.flatted = "3.4.2"` |

- **GHSA-rf6f-7fwh-wjgh**: Prototype Pollution via parse() in NodeJS flatted
- **GHSA-25h7-pfq9-p65f**: flatted vulnerable to unbounded recursion DoS in parse() revive phase

## Item 25 — follow-redirects (MODERATE)

| Field | Value |
|-------|-------|
| Package | `follow-redirects@1.15.6` |
| Severity | MODERATE |
| Advisory IDs | GHSA-r4q5-vmmm-2653 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.follow-redirects = "1.16.0"` |

- **GHSA-r4q5-vmmm-2653**: follow-redirects leaks Custom Authentication Headers to Cross-Domain Redirect Targets

## Item 26 — qs (HIGH)

| Field | Value |
|-------|-------|
| Package | `qs@6.9.3` |
| Severity | HIGH |
| Advisory IDs | GHSA-w7fw-mjwx-w883, GHSA-6rw7-vpxm-498p, GHSA-hrpp-h998-j3pp |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.qs = "6.14.2"` |

- **GHSA-w7fw-mjwx-w883**: qs's arrayLimit bypass in comma parsing allows denial of service
- **GHSA-6rw7-vpxm-498p**: qs's arrayLimit bypass in its bracket notation allows DoS via memory exhaustion
- **GHSA-hrpp-h998-j3pp**: qs vulnerable to Prototype Pollution

## Item 27 — http-cache-semantics (HIGH)

| Field | Value |
|-------|-------|
| Package | `http-cache-semantics@4.1.0` |
| Severity | HIGH |
| Advisory IDs | GHSA-rc47-6667-2j5j |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.http-cache-semantics = "4.1.1"` |

- **GHSA-rc47-6667-2j5j**: http-cache-semantics vulnerable to Regular Expression Denial of Service

## Item 28 — jsonpath-plus (CRITICAL)

| Field | Value |
|-------|-------|
| Package | `jsonpath-plus@7.2.0` |
| Severity | CRITICAL |
| Advisory IDs | GHSA-pppg-cpfq-h7wr, GHSA-hw8r-x6gr-5gjp |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.jsonpath-plus = "10.3.0"` |

- **GHSA-pppg-cpfq-h7wr**: JSONPath Plus Remote Code Execution (RCE) Vulnerability
- **GHSA-hw8r-x6gr-5gjp**: JSONPath Plus allows Remote Code Execution

## Item 29 — micromatch (MODERATE)

| Field | Value |
|-------|-------|
| Package | `micromatch@4.0.5` |
| Severity | MODERATE |
| Advisory IDs | GHSA-952p-6rrq-rcjv |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.micromatch = "4.0.8"` |

- **GHSA-952p-6rrq-rcjv**: Regular Expression Denial of Service (ReDoS) in micromatch

## Item 30 — minimatch (HIGH)

| Field | Value |
|-------|-------|
| Package | `minimatch@3.1.2` |
| Severity | HIGH |
| Advisory IDs | GHSA-23c5-xmqv-rm74, GHSA-3ppc-4f35-3m26, GHSA-7r86-cg39-jmmj |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.minimatch = "5.1.8"` |

- **GHSA-23c5-xmqv-rm74**: minimatch ReDoS: nested *() extglobs generate catastrophically backtracking regular expressions
- **GHSA-3ppc-4f35-3m26**: minimatch has a ReDoS via repeated wildcards with non-matching literal in pattern
- **GHSA-7r86-cg39-jmmj**: minimatch has ReDoS: matchOne() combinatorial backtracking via multiple non-adjacent GLOBSTAR segmen

## Item 31 — picomatch (HIGH)

| Field | Value |
|-------|-------|
| Package | `picomatch@2.3.1` |
| Severity | HIGH |
| Advisory IDs | GHSA-c2c7-rcm5-vvqj, GHSA-3v7f-55p6-f55p |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.picomatch = "2.3.2"` |

- **GHSA-c2c7-rcm5-vvqj**: Picomatch has a ReDoS vulnerability via extglob quantifiers
- **GHSA-3v7f-55p6-f55p**: Picomatch: Method Injection in POSIX Character Classes causes incorrect Glob Matching

## Item 32 — postcss (MODERATE)

| Field | Value |
|-------|-------|
| Package | `postcss@8.4.49` |
| Severity | MODERATE |
| Advisory IDs | GHSA-qx2v-qp2m-jg93 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.postcss = "8.5.10"` |

- **GHSA-qx2v-qp2m-jg93**: PostCSS has XSS via Unescaped </style> in its CSS Stringify Output

## Item 33 — rollup (HIGH)

| Field | Value |
|-------|-------|
| Package | `rollup@4.27.4` |
| Severity | HIGH |
| Advisory IDs | GHSA-mw96-cpmx-2vgc |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.rollup = "4.59.0"` |

- **GHSA-mw96-cpmx-2vgc**: Rollup 4 has Arbitrary File Write via Path Traversal

## Item 34 — aws-sdk (LOW)

| Field | Value |
|-------|-------|
| Package | `aws-sdk@2.1687.0` |
| Severity | LOW |
| Advisory IDs | GHSA-j965-2qgj-vjmq |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.aws-sdk = "?"` |

- **GHSA-j965-2qgj-vjmq**: JavaScript SDK v2 users should add validation to the region parameter value in or migrate to v3

## Item 35 — simple-git (CRITICAL)

| Field | Value |
|-------|-------|
| Package | `simple-git@3.11.0` |
| Severity | CRITICAL |
| Advisory IDs | GHSA-9p95-fxvg-qgq2, GHSA-hffm-xvc3-vprc, GHSA-jcxm-m3jx-f287, GHSA-9w5j-4mwv-2wj8 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.simple-git = "3.36.0"` |

- **GHSA-9p95-fxvg-qgq2**: simple-git vulnerable to Remote Code Execution when enabling the ext transport protocol
- **GHSA-hffm-xvc3-vprc**: simple-git is vulnerable to Remote Code Execution
- **GHSA-jcxm-m3jx-f287**: simple-git Affected by Command Execution via Option-Parsing Bypass

## Item 36 — tar (HIGH)

| Field | Value |
|-------|-------|
| Package | `tar@6.1.11` |
| Severity | HIGH |
| Advisory IDs | GHSA-r6q2-hw4h-h46w, GHSA-83g3-92jg-28cx, GHSA-8qq5-rm4j-mr97, GHSA-9ppj-qmqm-q256, GHSA-qffp-2rhf-9h96 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.tar = "7.5.11"` |

- **GHSA-r6q2-hw4h-h46w**: Race Condition in node-tar Path Reservations via Unicode Ligature Collisions on macOS APFS
- **GHSA-83g3-92jg-28cx**: Arbitrary File Read/Write via Hardlink Target Escape Through Symlink Chain in node-tar Extraction
- **GHSA-8qq5-rm4j-mr97**: node-tar is Vulnerable to Arbitrary File Overwrite and Symlink Poisoning via Insufficient Path Sanit

## Item 37 — tmp (LOW)

| Field | Value |
|-------|-------|
| Package | `tmp@0.0.33` |
| Severity | LOW |
| Advisory IDs | GHSA-52f5-9888-hmc6 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.tmp = "0.2.4"` |

- **GHSA-52f5-9888-hmc6**: tmp allows arbitrary temporary file / directory write via symbolic link `dir` parameter

## Item 38 — undici (HIGH)

| Field | Value |
|-------|-------|
| Package | `undici@6.21.0` |
| Severity | HIGH |
| Advisory IDs | GHSA-2mjp-6q6p-2qxm, GHSA-g9mf-h72j-4rw9, GHSA-c76h-2ccp-4975, GHSA-f269-vfmq-vjvj, GHSA-vrm6-8vpv-qv8q |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.undici = "6.24.0"` |

- **GHSA-2mjp-6q6p-2qxm**: Undici has an HTTP Request/Response Smuggling issue
- **GHSA-g9mf-h72j-4rw9**: Undici has an unbounded decompression chain in HTTP responses on Node.js Fetch API via Content-Encod
- **GHSA-c76h-2ccp-4975**: Use of Insufficiently Random Values in undici

## Item 39 — valibot (HIGH)

| Field | Value |
|-------|-------|
| Package | `valibot@0.36.0` |
| Severity | HIGH |
| Advisory IDs | GHSA-vqpr-j7v3-hqw9 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.valibot = "1.2.0"` |

- **GHSA-vqpr-j7v3-hqw9**: Valibot has a ReDoS vulnerability in `EMOJI_REGEX`

## Item 40 — velocityjs (HIGH)

| Field | Value |
|-------|-------|
| Package | `velocityjs@2.0.6` |
| Severity | HIGH |
| Advisory IDs | GHSA-j658-c2gf-x6pq |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.velocityjs = "?"` |

- **GHSA-j658-c2gf-x6pq**: Velocity.js has a Prototype Pollution vulnerability through #set path assignment

## Item 41 — word-wrap (MODERATE)

| Field | Value |
|-------|-------|
| Package | `word-wrap@1.2.3` |
| Severity | MODERATE |
| Advisory IDs | GHSA-j8xg-fqg3-53r7 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.word-wrap = "1.2.4"` |

- **GHSA-j8xg-fqg3-53r7**: word-wrap vulnerable to Regular Expression Denial of Service

---

## Decision Required

For the items above, the only mechanical fix is an override.
Reply with package names or advisory IDs to override, or 'none' to leave them unresolved.
