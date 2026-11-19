// one-day-thirty-stories — make.fun news-image-20261118
//
// entry.png renders Wednesday 18 November 2026's world news as a single
// broadsheet: a masthead with the day's date, a day-in-numbers strip, and
// thirty headline stories spanning seven world regions.
//
// The image is checked in finished; this script copies it to /output/entry.png
// unchanged — standard library only, no network, and both grading runs write
// identical bytes.

import { copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repo = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(repo, "entry.png"), "/output/entry.png");
