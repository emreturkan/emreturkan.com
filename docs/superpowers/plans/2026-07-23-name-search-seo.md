# Name Search SEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Strengthen `Emre Turkan` as the site's canonical identity while associating the accented search query `Emre Türkan` with the same person.

**Architecture:** Keep identity values in the shared site configuration, consume them from the homepage metadata and `Person` JSON-LD, and remove the invalid Turkish alternate URL from root metadata. Test the metadata contract with Node's built-in runner and verify the rendered result with a production build.

**Tech Stack:** Next.js 16.1.1 App Router Metadata API, JavaScript ES modules, JSON-LD, Node.js built-in test runner

## Global Constraints

- `Emre Turkan` remains the only visible and canonical name.
- `Emre Türkan` is used only as a structured alternate name.
- Do not add hidden SEO text or keyword stuffing.
- Do not add a Turkish route in this change.
- Preserve the canonical URL `https://emreturkan.com`.

---

### Task 1: Correct the name entity and homepage metadata

**Files:**
- Create: `tests/config/name-search-seo.test.js`
- Modify: `config/site.js`
- Modify: `app/layout.js`
- Modify: `app/(home)/page.js`

**Interfaces:**
- Consumes: `siteConfig.name`, `siteConfig.homeTitle`, and `siteConfig.alternateNames`.
- Produces: a concise absolute homepage title, a `Person.alternateName` JSON-LD property, and canonical-only root alternates.

- [x] **Step 1: Write the failing metadata contract test**

```js
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { siteConfig } from "../../config/site.js";

const layoutSource = await readFile(
  new URL("../../app/layout.js", import.meta.url),
  "utf8"
);
const homeSource = await readFile(
  new URL("../../app/(home)/page.js", import.meta.url),
  "utf8"
);

test("keeps Turkan canonical and exposes the accented spelling as an alternate", () => {
  assert.equal(siteConfig.name, "Emre Turkan");
  assert.deepEqual(siteConfig.alternateNames, ["Emre Türkan", "emreturkan"]);
  assert.match(layoutSource, /alternateName: siteConfig\\.alternateNames/);
});

test("uses a concise absolute homepage title", () => {
  assert.equal(
    siteConfig.homeTitle,
    "Emre Turkan — Full Stack Developer in Istanbul"
  );
  assert.match(homeSource, /title: \\{ absolute: siteConfig\\.homeTitle \\}/);
});

test("does not advertise a Turkish page that does not exist", () => {
  assert.doesNotMatch(layoutSource, /siteConfig\\.url}\\/tr/);
  assert.match(layoutSource, /alternates: \\{\\s*canonical: siteConfig\\.url,?\\s*\\}/);
});
```

- [x] **Step 2: Run the test and verify RED**

Run:

```bash
node --no-warnings --test tests/config/name-search-seo.test.js
```

Expected: FAIL because `alternateNames` and `homeTitle` do not exist and the root metadata still advertises `/tr`.

- [x] **Step 3: Add canonical and alternate identity values**

Add to `siteConfig`:

```js
homeTitle: "Emre Turkan — Full Stack Developer in Istanbul",
alternateNames: ["Emre Türkan", "emreturkan"],
```

Add to `personJsonLd`:

```js
alternateName: siteConfig.alternateNames,
```

Replace root alternates with:

```js
alternates: {
  canonical: siteConfig.url,
},
```

Replace the homepage metadata title with:

```js
title: { absolute: siteConfig.homeTitle },
```

- [x] **Step 4: Run the metadata test and verify GREEN**

Run:

```bash
node --no-warnings --test tests/config/name-search-seo.test.js
```

Expected: 3 tests pass.

- [x] **Step 5: Run all tests and build**

Run:

```bash
node --no-warnings --test tests/**/*.test.js
./node_modules/.bin/next build
```

Expected: all tests pass and the Next.js production build completes.

- [x] **Step 6: Verify rendered metadata**

Run:

```bash
rg -n 'Emre Turkan — Full Stack Developer in Istanbul|Emre Türkan|hreflang="tr-TR"|href="https://emreturkan.com/tr"' .next/server/app
```

Expected: the absolute title and JSON-LD alternate appear; no Turkish `hreflang` or `/tr` alternate appears.

- [x] **Step 7: Review and commit**

Run:

```bash
git diff --check
git add config/site.js app/layout.js 'app/(home)/page.js' tests/config/name-search-seo.test.js docs/superpowers/plans/2026-07-23-name-search-seo.md
git commit -m "fix: strengthen name search SEO signals"
```
