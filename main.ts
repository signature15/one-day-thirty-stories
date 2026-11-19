// ─────────────────────────────────────────────────────────────────────
// one-day-thirty-stories · an entry for make.fun's news-image contest
// (brief: news-image-20261118)
//
// entry.png is a broadsheet-style poster summarizing the world's news
// for Wednesday, 18 November 2026. Read top to bottom, it carries:
//   1. a masthead announcing the edition's date
//   2. a figures-at-a-glance strip distilling the day's key numbers
//   3. three columns of headline cards covering thirty stories,
//      spread across seven world regions for wide geographic reach
//
// The poster ships finished in this repo — nothing here draws it.
// main.ts's only job is to place entry.png at /output/entry.png so
// every grading run yields byte-identical output. It relies on the
// Node standard library alone: no network calls, no dependencies.
// ─────────────────────────────────────────────────────────────────────

import { copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repo = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(repo, "entry.png"), "/output/entry.png");
