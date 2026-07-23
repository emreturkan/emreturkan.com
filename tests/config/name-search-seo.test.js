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
  assert.match(layoutSource, /alternateName: siteConfig\.alternateNames/);
});

test("uses a concise absolute homepage title", () => {
  assert.equal(
    siteConfig.homeTitle,
    "Emre Turkan — Full Stack Developer in Istanbul"
  );
  assert.match(homeSource, /title: { absolute: siteConfig\.homeTitle }/);
});

test("does not advertise a Turkish page that does not exist", () => {
  assert.equal(layoutSource.includes("`${siteConfig.url}/tr`"), false);
  assert.match(
    layoutSource,
    /alternates: {\s*canonical: siteConfig\.url,\s*}/
  );
});
