# Steam Latest Game Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the homepage Steam card select the game with the greatest valid `rtime_last_played` timestamp.

**Architecture:** Fetch the owned-games collection because it includes per-game last-played timestamps, then pass the collection through a pure selector. Keep the selector next to the Steam action and test it with Node's built-in test runner.

**Tech Stack:** Next.js 16, JavaScript ES modules, React server components, Node.js built-in test runner

## Global Constraints

- Keep the existing one-hour Next.js fetch cache.
- Preserve the card's details, achievements, image, and playtime rendering.
- Return no game when the Steam request fails or no valid timestamp exists.

---

### Task 1: Select and render the actual latest Steam game

**Files:**
- Modify: `lib/actions/get-steam.js`
- Modify: `components/page/home/activity/game-activity.jsx`
- Create: `tests/lib/actions/get-steam.test.js`

**Interfaces:**
- Consumes: Steam `GetOwnedGames` response objects containing `response.games`.
- Produces: `selectLatestSteamGame(games)` returning the game with the greatest positive finite `rtime_last_played`, or `null`; `getGameActivity()` returning that selected game or `null`.

- [x] **Step 1: Write the failing regression test**

```js
import assert from "node:assert/strict";
import test from "node:test";
import { selectLatestSteamGame } from "../../../lib/actions/get-steam.js";

test("selects the game with the latest played timestamp instead of the first game", () => {
  const counterStrike = { appid: 730, rtime_last_played: 100 };
  const assassinsCreed = { appid: 201870, rtime_last_played: 200 };

  assert.equal(
    selectLatestSteamGame([counterStrike, assassinsCreed]),
    assassinsCreed
  );
});

test("returns null for an empty or invalid game collection", () => {
  assert.equal(selectLatestSteamGame(), null);
  assert.equal(selectLatestSteamGame([]), null);
  assert.equal(
    selectLatestSteamGame([
      { appid: 1, rtime_last_played: 0 },
      { appid: 2, rtime_last_played: Number.NaN },
    ]),
    null
  );
});
```

- [x] **Step 2: Run the regression test and verify RED**

Run:

```bash
node --no-warnings --test tests/lib/actions/get-steam.test.js
```

Expected: FAIL because `selectLatestSteamGame` is not exported.

- [x] **Step 3: Implement the minimal selector and switch the Steam endpoint**

Add to `lib/actions/get-steam.js`:

```js
export const selectLatestSteamGame = (games) => {
  if (!Array.isArray(games)) return null;

  return games.reduce((latest, game) => {
    const timestamp = game?.rtime_last_played;
    if (!Number.isFinite(timestamp) || timestamp <= 0) return latest;
    if (!latest || timestamp > latest.rtime_last_played) return game;
    return latest;
  }, null);
};
```

Change `getGameActivity()` to request:

```text
https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=...&steamid=...&format=json&include_appinfo=true&include_played_free_games=true
```

After parsing the response, return:

```js
return selectLatestSteamGame(data?.response?.games);
```

Change `GameActivity` to consume the selected game:

```js
const recentGame = await getGameActivity();
```

- [x] **Step 4: Run the regression test and verify GREEN**

Run:

```bash
node --no-warnings --test tests/lib/actions/get-steam.test.js
```

Expected: 2 tests pass.

- [x] **Step 5: Run integration verification**

Run:

```bash
npm run build
```

Expected: Next.js production build completes successfully.

- [x] **Step 6: Review the diff and commit**

Run:

```bash
git diff --check
git diff -- lib/actions/get-steam.js components/page/home/activity/game-activity.jsx tests/lib/actions/get-steam.test.js
git add lib/actions/get-steam.js components/page/home/activity/game-activity.jsx tests/lib/actions/get-steam.test.js docs/superpowers/plans/2026-07-23-steam-latest-game.md
git commit -m "fix: show actual latest Steam game"
```
