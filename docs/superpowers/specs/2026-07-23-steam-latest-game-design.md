# Steam Latest Game Selection Design

## Problem

The homepage Steam activity card treats the first item returned by
`GetRecentlyPlayedGames` as the latest played game. Steam's response does not
include `rtime_last_played` and, for this account, places Counter-Strike 2 ahead
of the more recently played Assassin's Creed Revelations.

## Goal

The card must show the game with the greatest Steam `rtime_last_played` value.
Refresh latency is not a product constraint, so the existing one-hour cache can
remain.

## Design

`getGameActivity` will request `IPlayerService/GetOwnedGames/v1` with app
information and free games included. It will select the game with the greatest
numeric `rtime_last_played` value and return that game in a small,
component-oriented result.

The game selection will live in a pure function so its ordering behavior can be
tested without making a Steam request. Missing or invalid game collections will
produce no selected game. Games without a valid last-played timestamp will not
outrank games with a valid timestamp.

`GameActivity` will consume the selected game directly. The existing details,
achievement, image, and playtime rendering will remain unchanged.

## Error Handling

Network failures and non-successful Steam responses will continue to return
`null`, causing the activity card to render nothing. An empty library or a
library with no usable last-played timestamps will behave the same way.

## Testing

A regression test will provide Counter-Strike 2 first with a lower
`rtime_last_played` value and Assassin's Creed Revelations second with a higher
value. The selector must return Assassin's Creed. Additional focused cases will
cover an empty collection and invalid timestamps.

After the unit test passes, the production build will verify that the server
component and Next.js integration still compile.
