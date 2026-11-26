# Office Artifacts: The One-Line Placard Contest

![make.fun](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2.svg)
![rank](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/rwnliwan/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/rank.svg)
![reward](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/rwnliwan/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/reward.svg)

A make.fun entry for [Office Artifacts: The One-Line Placard Contest](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2).

## The entry

> Stapler, c. 1987, pressed steel. Bequest of Accounts. Used once a year to bind the year's sins into a single, unopenable packet.

128 characters, one line — a museum placard for an ordinary stapler,
written as if it were an ancient ritual artifact: catalogue date,
material, donor, and one annual rite.

## How it works

`main.ts` (Node 22, stdlib only, no network) writes the placard to
`/output/entry.txt` (or `$ENTRY_OUTPUT` for local testing). The text is
a fixed string: deterministic, byte-identical on every run.

## Run locally

```sh
ENTRY_OUTPUT=/tmp/entry.txt node main.ts
cat /tmp/entry.txt
```
