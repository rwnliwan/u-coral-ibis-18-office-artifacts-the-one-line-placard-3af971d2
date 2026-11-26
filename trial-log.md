# Trial log — Office Artifacts: The One-Line Placard Contest

Slug: `u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2`
Program: Office Artifacts: The One-Line Placard Contest ($2 winner-takes-all)
Gate: one line, 1–180 characters, museum placard for an ordinary office
object written as an ancient artifact (catalogue date, material, donor).
Judge: dry-witted museum curator, pairwise; criteria in order: (1) placard
for an office object; (2) invention of conceit — specific, surprising
imagined history, not a generic office joke; (3) dryness of wit — deadpan,
joke lands without explaining itself; (4) economy — one tight line.
Field at build time: 0 submissions (competition opened 26 Nov 10:31 WITA).

## Self-dup guard

Our existing office entries use these objects/mechanisms — all excluded:
meeting room that refuses bookings; AI notetaker giving verdicts;
"I expensed my sanity as miscellaneous"; Q1 strategy whiteboard never
erased; coffee gone cold before anyone is new; printer; calendar;
performance review telling the narrator to "be more visible" so he CCs
the whole company on a lunch order (office-jokes entry). The stapler
ritual below shares no object and no mechanism with any of them.

## Candidates (all lengths measured with Python len())

| # | Candidate | len | Verdict |
|---|-----------|-----|---------|
| 1 | Stapler, c. 1987, pressed steel. Bequest of Accounts. Used once a year to bind the year's sins into a single, unopenable packet. | 128 | CHOSEN |
| 2 | Water cooler, c. 2009, plastic and rumour. Gift of an unknown donor. Pilgrims gathered here daily to trade news no one would put in writing. | 140 | Runner-up — strong pilgrimage conceit, kept as fallback |
| 3 | Rubber stamp, c. 1968, wood and ink. Bequest of Approvals. One press conferred legitimacy; two, suspicion; three, a meeting. | 124 | Rejected — rule-of-three is punchy but the imagined history is thinner; "a meeting" leans on a generic office joke |
| 4 | Lanyard, c. 2015, woven nylon. Donor anonymous. Worn at neck height so the gods of Security might read the name and let its bearer pass. | 136 | Rejected — decent, but "let its bearer pass" explains the joke a little; weaker than #1 |
| 5 | Potted fern, c. 2019, plastic and neglect. Donated by Facilities. The only employee never asked to return to the office. | 120 | Rejected — punchline is a generic work-from-home joke, not an imagined history for the object |
| 6 | Paperclip, c. 1943, bent steel. Gift of the Filing Department. Straightened by monks in 1962; bent again within the hour, as tradition demands. | 143 | Rejected — monks are whimsical rather than deadpan; strains where #1 stays dry |
| 7 | Charging cable, c. 2021, braided nylon. Found beneath a desk. Knotted nightly by unseen hands; untied each morning by no one. | 125 | Rejected — neat paradox, but the imagined history is thin (no rite, no institution) |
| 8 | Computer mouse, c. 2012, plastic and dust. Donor unknown. Its single button was pressed three million times; no one recalls a single click. | 139 | Rejected — a big number is not a history; conceit weaker than #1 |

## Why #1 wins

- Conceit: a stapler recast as a ritual object with an annual rite —
  binding the year's sins into one packet that can never be opened.
  Specific (once a year), surprising (sins, not paper), and tied to
  the object's real function (binding things together).
- Dryness: deadpan throughout; "unopenable" lands the joke and nothing
  explains it. "Bequest of Accounts" is quiet: the donor is the
  department that counts sins for a living.
- Label craft: catalogue date (c. 1987), material (pressed steel),
  donor/provenance (Bequest of Accounts) — all three present.
- Economy: 128 characters, four short sentences, nothing to trim.

## Trials

| # | Trial | Result |
|---|-------|--------|
| 1 | Builder v1 — main.ts, entry v1 (128 chars) | Local run via ENTRY_OUTPUT twice, byte-identical; stdlib only, no network |
| 2 | Bundle + check | (filled after bundle/check run — see below) |

## Bundle / check

(To be filled with real numbers after the bundle and check runs.)
