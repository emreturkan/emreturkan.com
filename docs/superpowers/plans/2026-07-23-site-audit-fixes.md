# Site Audit Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Resolve all confirmed production audit findings and deploy the verified result.

**Architecture:** Treat generated SEO files, UI semantics, and structured data as three independently testable units. Keep site identity in `siteConfig`, generate deterministic crawl artifacts from `next-sitemap`, and render profile JSON-LD only from the homepage.

**Tech Stack:** Next.js 16.1.1, React 19, Tailwind CSS, ESLint 9 flat config, Node.js test runner, next-sitemap, Chrome DevTools/Lighthouse

## Global Constraints

- Preserve the current visual style and existing content sections.
- Keep `Emre Turkan` canonical and `Emre Türkan` machine-readable only.
- Keep the site single-language.
- Do not advertise freelance services through structured data.
- Do not commit secrets or generated `.next` output.

---

### Task 1: Repair SEO artifacts, manifest, and lint

**Files:**
- Create: `tests/config/site-integrity.test.js`
- Create: `eslint.config.mjs`
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Modify: `next-sitemap.config.js`
- Modify: `public/manifest.json`
- Regenerate: `public/sitemap.xml`
- Regenerate: `public/sitemap-0.xml`
- Regenerate: `public/robots.txt`

**Interfaces:**
- Consumes: Next.js route manifests and the existing `/apple-icon` metadata route.
- Produces: deterministic crawl files, a manifest with only valid assets, and a working `pnpm lint` command.

- [ ] **Step 1: Write a failing integrity test**

The test reads `package.json`, `public/manifest.json`,
`next-sitemap.config.js`, and `public/sitemap-0.xml`. It asserts:

```js
assert.equal(pkg.scripts.lint, "eslint .");
assert.equal(manifest.name, "Emre Turkan - Full Stack Developer");
assert.deepEqual(
  manifest.icons.map((icon) => icon.src),
  ["/favicon.ico", "/apple-icon"]
);
assert.equal(manifest.screenshots, undefined);
assert.ok(sitemapConfig.exclude.includes("/apple-icon"));
assert.equal(sitemapConfig.additionalPaths, undefined);
assert.doesNotMatch(sitemapXml, /games|i-like-it|\\/bookmarks\\/bookmarks/);
```

- [ ] **Step 2: Run the test and verify RED**

Run:

```bash
node --no-warnings --test tests/config/site-integrity.test.js
```

Expected: FAIL for the broken lint script, stale manifest, and stale sitemap.

- [ ] **Step 3: Implement the SEO and manifest fixes**

Use an ESLint flat config:

```js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
```

Set `lint` to `eslint .`, install `eslint@^9` and
`eslint-config-next@16.1.1`, remove sitemap language alternates and
`additionalPaths`, exclude `/apple-icon`, disable automatic `lastmod`, align
robots policies with the currently published allow policy, and reference only
`/favicon.ico` and `/apple-icon` in the manifest.

- [ ] **Step 4: Regenerate artifacts and verify GREEN**

Run:

```bash
pnpm sitemap
node --no-warnings --test tests/config/site-integrity.test.js
pnpm lint
```

Expected: the integrity test and ESLint pass with no errors.

### Task 2: Repair navigation and page semantics

**Files:**
- Create: `tests/components/site-semantics.test.js`
- Modify: `components/layout/site-header.jsx`
- Modify: `components/page/home/copy-email.jsx`
- Modify: `components/page/home/photos-teaser.jsx`
- Modify: `components/page/home/activity/game-activity.jsx`
- Modify: `app/photos/page.js`
- Modify: `app/bookmarks/page.jsx`
- Modify: `app/techs/page.js`

**Interfaces:**
- Consumes: the existing `navLinks` list and visible page headings.
- Produces: desktop and mobile navigation using native semantics, descriptive labels, one `h1` per content page, and accurate Steam wording.

- [ ] **Step 1: Write a failing source-contract test**

The test asserts:

```js
assert.doesNotMatch(header, /role="menubar"|role="menuitem"/);
assert.match(header, /sm:hidden/);
assert.doesNotMatch(copyEmail, /aria-label=/);
assert.match(photosTeaser, /view all photos/);
assert.match(gameActivity, /Last played/);
assert.doesNotMatch(photosPage, /className="sr-only"/);
assert.doesNotMatch(bookmarksPage, /className="sr-only"/);
assert.doesNotMatch(techsPage, /className="sr-only"/);
```

- [ ] **Step 2: Run the test and verify RED**

Run:

```bash
node --no-warnings --test tests/components/site-semantics.test.js
```

Expected: FAIL for every currently confirmed semantic issue.

- [ ] **Step 3: Implement the minimal UI fixes**

Render the same navigation list twice: the existing desktop row and a compact
four-column row with 48px links below it on mobile. Remove application-menu
ARIA roles, remove the copy button's overriding `aria-label`, change the photo
link to `view all photos`, change Steam status to `Last played`, and remove the
redundant hidden `h1` from each content route.

- [ ] **Step 4: Run the test and lint**

Run:

```bash
node --no-warnings --test tests/components/site-semantics.test.js
pnpm lint
```

Expected: the semantic contract and lint pass.

### Task 3: Scope structured data to the homepage

**Files:**
- Create: `lib/seo/home-structured-data.js`
- Create: `tests/config/structured-data.test.js`
- Modify: `app/layout.js`
- Modify: `app/(home)/page.js`
- Modify: `tests/config/name-search-seo.test.js`

**Interfaces:**
- Produces: `homeJsonLd`, an array containing exactly `Person`, `WebSite`, and `ProfilePage`.
- Consumes: `homeJsonLd` from the homepage JSON-LD script.

- [ ] **Step 1: Write a failing placement test**

The test reads the layout and homepage sources and asserts:

```js
assert.doesNotMatch(layoutSource, /application\\/ld\\+json|ProfessionalService/);
assert.match(homeSource, /homeJsonLd/);
assert.match(homeSource, /application\\/ld\\+json/);
```

It also verifies after implementation that `homeJsonLd` has exactly three
types and retains `Person.alternateName`.

- [ ] **Step 2: Run the test and verify RED**

Run:

```bash
node --no-warnings --test tests/config/structured-data.test.js
```

Expected: FAIL because JSON-LD is still global.

- [ ] **Step 3: Move and simplify JSON-LD**

Move `Person`, `WebSite`, and `ProfilePage` objects to
`lib/seo/home-structured-data.js`, omit `dateModified`, delete
`ProfessionalService`, and render the JSON-LD script inside the homepage
article.

- [ ] **Step 4: Run all verification**

Run:

```bash
node --no-warnings --test tests/**/*.test.js
pnpm lint
pnpm build
```

Expected: all tests, lint, Next.js build, and sitemap postbuild pass.

- [ ] **Step 5: Verify browser output**

Start the production server and audit desktop/mobile output. Confirm:

- no console errors,
- Lighthouse accessibility, best-practices, and SEO scores are 100,
- mobile navigation links are visible,
- every sitemap URL returns 200,
- manifest assets return 200,
- content pages contain one `h1`,
- `ProfilePage` appears only on `/`.

- [ ] **Step 6: Commit, push, and verify production**

Run:

```bash
git diff --check
git add app components config lib public tests package.json pnpm-lock.yaml eslint.config.mjs next-sitemap.config.js docs/superpowers/plans/2026-07-23-site-audit-fixes.md
git commit -m "fix: resolve site audit findings"
git push origin main
```

Poll the deployment until the live homepage exposes the new title, then rerun
the production sitemap, manifest, console, mobile navigation, and Lighthouse
checks.
