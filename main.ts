// entry.png presents a newspaper-style broadsheet documenting the world's news
// from Wednesday 18 November 2026. The design captures thirty major stories
// across seven global regions on a single page, following the editorial principle
// that every story either broke or occurred on that specific date.
//
// The layout flows from top to bottom with a typographic hierarchy:
// - Masthead at the top reads "THE DAY IN WORLD NEWS" with a date box marked
//   NOV 18, anchored by the tagline "30 STORIES · 7 REGIONS · ONE PAGE"
// - A regional summary bar tracks story distribution: Middle East leads with
//   seven stories, followed by seven in the US, six across Asia, four in Europe,
//   three global developments, two Ukraine items, and one African story
// - The day-in-numbers section highlights four key metrics: the Yemen crisis
//   measured at 64 children killed and 330,000 displaced; Voyager 1's historic
//   25.9 billion kilometer distance from Earth; and the EU's 45 billion euro
//   financial commitment to Ukraine
// - Three overnight lead stories anchor the coverage: Xi and Trump's tarmac
//   meeting in Shenzhen, an Iranian drone interception by Kuwait and Bahrain,
//   and Voyager 1's crossing into a full light-day of cosmic distance
// - Morning section cards state: 141 Russian drones targeting Ukraine, the
//   Democratic 56-44 Senate victory, 19 fatalities from a Siberian aviation
//   incident, and 46 injuries from a Prague rail collision
// - Afternoon numbered stories fill three columns with developments ranging from
//   Ukraine's defensive position to the EU loan authorization, an NSANet outage,
//   Anthropic reaching trillion-dollar valuation, Ethiopia-Eritrea border tension,
//   and the GTA VI gaming release
// - Evening briefs compress stories 15-30 into a wire-service format spanning
//   from American air operations to Israeli military movements in Gaza
// - The footer credits sources (Reuters, AP, AFP, BBC, NASA, WHO, UN News) and
//   contains an explicit note distinguishing this coverage from Tuesday's news
//
// The image file is production-ready and ships with the repository. This script
// performs a straightforward copy operation to the output directory—no generation,
// no network calls, deterministic byte-for-byte reproduction across all runs.

import { copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repo = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(repo, "entry.png"), "/output/entry.png");
