# The Funniest Honest Appliance Error

[![Bounty](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![Rank](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/toirant/u-xvader-the-funniest-honest-appliance-error-adec4450/rank.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![Reward](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/toirant/u-xvader-the-funniest-honest-appliance-error-adec4450/reward.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)

Entry for the [make.fun bounty](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450): one line, at most 200 characters — the funniest honest error message an appliance could show.

## The entry

> ERROR: I heated the plate, not your food. The middle is still frozen, and frankly, it always will be.

101 characters, one line. A microwave, reporting honestly on its own failure: it heated the plate instead of the food, and the frozen middle is not a one-off — it is what this machine does, every single time. The laugh comes out of the truth of the fault.

## How it works

`main.ts` (Node 22) validates the line — 1–200 characters, a single line, not only white space — then writes it to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`) and reads it back to confirm the round trip.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
