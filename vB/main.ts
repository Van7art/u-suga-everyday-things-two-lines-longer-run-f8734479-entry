import { mkdirSync, writeFileSync } from "node:fs";

// One deterministic entry line (no network, no randomness, no input).
const ENTRY: string = "A traffic jam is a parking lot that forgot it was a road, where every car waits its turn like kids lining up for ice cream that never comes.\nThe line maps the waiting and the impatience, but it leaves out that nobody is actually handing out ice cream at the front.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
