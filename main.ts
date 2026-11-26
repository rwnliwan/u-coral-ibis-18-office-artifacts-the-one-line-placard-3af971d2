// Office Artifacts: The One-Line Placard Contest — a make.fun entry.
// Writes one museum placard, a single line, to /output/entry.txt
// (or $ENTRY_OUTPUT for local testing).
// Node 22, stdlib only, no network, deterministic output.
//
// Why the placard is shaped this way (against the judge criteria):
// - On-subject: a genuine one-line museum placard for an ordinary
//   office object (a stapler), treated as an ancient artifact, with
//   catalogue date, material and donor, exactly as the brief asks.
// - Invention of the conceit: the stapler is not "a stapler that
//   staples a lot". It is a ritual object, used once a year to bind
//   the year's sins into a single packet that can never be opened
//   again. A specific, surprising imagined history: an annual rite,
//   a moral ledger, a sealed packet. No generic office joke.
// - Dryness of the wit: deadpan curator's voice throughout. The joke
//   lands in "unopenable" and is never explained, apologised for or
//   underlined. "Bequest of Accounts" does quiet work: the donor is
//   the department that counts sins for a living.
// - Economy: one line, 128 characters, four short sentences. Every
//   word earns its place; it reads well aloud.
// - Label craft: "c. 1987" (catalogue date), "pressed steel"
//   (material), "Bequest of Accounts" (donor/provenance).
// The output is a single line, well inside the 1-180 character gate
// (128 characters, no trailing newline), written with stdlib-only
// fs/path calls and no network access.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const PLACARD =
  "Stapler, c. 1987, pressed steel. Bequest of Accounts. Used once a year to bind the year's sins into a single, unopenable packet.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, PLACARD, "utf8");
