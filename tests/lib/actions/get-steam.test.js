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
