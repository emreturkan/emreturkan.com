import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readSource = (path) =>
  readFile(new URL(`../../${path}`, import.meta.url), "utf8");

const [layoutSource, homeSource, structuredDataSource] = await Promise.all([
  readSource("app/layout.js"),
  readSource("app/(home)/page.js"),
  readSource("lib/seo/home-structured-data.js").catch(() => ""),
]);

test("renders profile structured data from the homepage only", () => {
  assert.doesNotMatch(
    layoutSource,
    /application\/ld\+json|ProfessionalService/
  );
  assert.match(homeSource, /homeJsonLd/);
  assert.match(homeSource, /application\/ld\+json/);
});

test("publishes only Person, WebSite, and ProfilePage entities", () => {
  assert.match(structuredDataSource, /"@type": "Person"/);
  assert.match(structuredDataSource, /"@type": "WebSite"/);
  assert.match(structuredDataSource, /"@type": "ProfilePage"/);
  assert.doesNotMatch(structuredDataSource, /ProfessionalService|priceRange/);
  assert.match(
    structuredDataSource,
    /alternateName: siteConfig\.alternateNames/
  );
});
