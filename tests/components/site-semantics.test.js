import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readSource = (path) =>
  readFile(new URL(`../../${path}`, import.meta.url), "utf8");

const [
  header,
  copyEmail,
  photosTeaser,
  gameActivity,
  photosPage,
  bookmarksPage,
  techsPage,
] = await Promise.all([
  readSource("components/layout/site-header.jsx"),
  readSource("components/page/home/copy-email.jsx"),
  readSource("components/page/home/photos-teaser.jsx"),
  readSource("components/page/home/activity/game-activity.jsx"),
  readSource("app/photos/page.js"),
  readSource("app/bookmarks/page.jsx"),
  readSource("app/techs/page.js"),
]);

test("uses native navigation semantics with a mobile link row", () => {
  assert.doesNotMatch(header, /role="menubar"|role="menuitem"/);
  assert.match(header, /grid-cols-4/);
  assert.match(header, /sm:hidden/);
  assert.doesNotMatch(header, /setMounted|useEffect|useState/);
});

test("uses visible, descriptive control labels", () => {
  assert.doesNotMatch(copyEmail, /aria-label=/);
  assert.match(photosTeaser, /view all photos/);
  assert.match(gameActivity, /Last played/);
  assert.doesNotMatch(gameActivity, />\s*Playing\s*</);
});

test("uses Steam's verified store artwork without a failing cover probe", () => {
  assert.doesNotMatch(gameActivity, /library_600x900_2x/);
  assert.match(gameActivity, /gameDetail\?\.header_image/);
});

test("content routes do not add redundant hidden h1 elements", () => {
  for (const source of [photosPage, bookmarksPage, techsPage]) {
    assert.doesNotMatch(source, /className="sr-only"/);
  }
});
