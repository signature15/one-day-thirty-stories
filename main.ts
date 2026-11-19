// one-day-thirty-stories — an entry for make.fun's news-image-20261118.
//
// entry.png is a broadsheet front page for Wednesday 18 November 2026, held
// together by one editorial rule printed in its footer: every story happened,
// or was first reported, on that day. The page reads top to bottom:
//
//   Masthead — "THE DAY IN WORLD NEWS" beside a NOV 18 date block, with the
//   slogan 30 STORIES · 7 REGIONS · ONE PAGE and the full dateline.
//
//   Section rail — the day's coverage tallied by region: Middle East 7,
//   US 7, Asia 6, Europe 4, World 3, Ukraine 2, Africa 1.
//
//   The day in numbers — four figures that size the news: 64 children
//   killed in Yemen, 330K displaced there, Voyager 1 at 25.9 billion km
//   from Earth, and Europe's EUR45B loan to Ukraine.
//
//   Overnight — three leads: Xi greets Trump on the tarmac in Shenzhen,
//   Kuwait and Bahrain intercept Iranian drones, and Voyager 1 crosses a
//   full light-day of distance from Earth.
//
//   Morning — four banner stat cards: 141 drones fired at Ukraine, the
//   Democrats' 56-44 Senate win, 19 dead in the Siberia air crash, and
//   46 hurt when trains collide near Prague.
//
//   Afternoon — numbered cards in three columns, spanning Russia's drone
//   barrage, the EU loan, the NSANet outage, Anthropic's trillion-dollar
//   valuation, Ethiopia-Eritrea tensions, and GTA VI's launch.
//
//   Evening — stories 15-30 compressed into a sixteen-item wire list that
//   runs from US jet strikes to Israeli tanks crossing Gaza's yellow line.
//
//   Footer — sources (Reuters, AP, AFP, BBC, NASA, WHO, UN News) plus the
//   "left out on purpose" note reclaiming Tuesday 17 November's stories.
//
// The artwork ships finished in the repository. This script does nothing
// more than copy it to /output/entry.png unchanged: standard library only,
// no network access, and identical bytes on both grading runs.

import { copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repo = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(repo, "entry.png"), "/output/entry.png");
