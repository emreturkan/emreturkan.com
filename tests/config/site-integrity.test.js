import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const sitemapConfig = require("../../next-sitemap.config.js");
const packageJson = JSON.parse(
  await readFile(new URL("../../package.json", import.meta.url), "utf8")
);
const manifest = JSON.parse(
  await readFile(new URL("../../public/manifest.json", import.meta.url), "utf8")
);
const sitemapXml = await readFile(
  new URL("../../public/sitemap-0.xml", import.meta.url),
  "utf8"
);
const homeSource = await readFile(
  new URL("../../app/(home)/page.js", import.meta.url),
  "utf8"
);
const headerSource = await readFile(
  new URL("../../components/layout/site-header.jsx", import.meta.url),
  "utf8"
);

test("uses the supported ESLint CLI", () => {
  assert.equal(packageJson.scripts.lint, "eslint .");
});

test("references only existing manifest assets and current identity copy", () => {
  assert.equal(manifest.name, "Emre Turkan - Full Stack Developer");
  assert.match(manifest.description, /Full Stack Developer/);
  assert.doesNotMatch(manifest.description, /Senior Frontend Developer/);
  assert.deepEqual(
    manifest.icons.map((icon) => icon.src),
    ["/favicon.ico", "/apple-icon"]
  );
  assert.equal(manifest.screenshots, undefined);
});

test("generates a deterministic single-language sitemap", async () => {
  assert.ok(sitemapConfig.exclude.includes("/apple-icon"));
  assert.equal(sitemapConfig.additionalPaths, undefined);

  const photosEntry = await sitemapConfig.transform(sitemapConfig, "/photos");
  assert.equal(photosEntry.loc, "/photos");
  assert.equal(photosEntry.alternateRefs, undefined);
  assert.equal(photosEntry.lastmod, undefined);
});

test("keeps crawler policies consistent with the published allow policy", () => {
  for (const userAgent of [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "PerplexityBot",
    "Google-Extended",
    "anthropic-ai",
    "ClaudeBot",
  ]) {
    const policy = sitemapConfig.robotsTxtOptions.policies.find(
      (item) => item.userAgent === userAgent
    );
    assert.equal(policy?.allow, "/", `${userAgent} should be allowed`);
    assert.equal(policy?.disallow, undefined);
  }
});

test("publishes only real routes without duplicated alternate paths", () => {
  const locations = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    ([, location]) => location
  );

  assert.deepEqual(locations, [
    "https://emreturkan.com",
    "https://emreturkan.com/bookmarks",
    "https://emreturkan.com/photos",
    "https://emreturkan.com/techs",
  ]);
  assert.doesNotMatch(sitemapXml, /hreflang|games|i-like-it|\/photos\/photos/);
});

test("keeps Spendwise out of the public site", async () => {
  assert.doesNotMatch(homeSource, /Spendwise|\/spendwise/i);
  assert.doesNotMatch(headerSource, /Spendwise|\/spendwise/i);
  assert.doesNotMatch(sitemapXml, /\/spendwise/i);
  assert.doesNotMatch(JSON.stringify(sitemapConfig), /\/spendwise/i);
  for (const route of [
    "../../app/spendwise/page.jsx",
    "../../app/spendwise/privacy/page.jsx",
    "../../app/spendwise/terms/page.jsx",
    "../../app/spendwise/data-deletion/page.jsx",
  ]) {
    await assert.rejects(access(new URL(route, import.meta.url)));
  }
});
