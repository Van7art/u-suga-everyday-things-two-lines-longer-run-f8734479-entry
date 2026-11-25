import { mkdirSync, writeFileSync } from "node:fs";

// One deterministic entry line (no network, no randomness, no input).
const ENTRY: string = "A toaster is a tiny dragon that eats your bread, breathes fire on it, and spits it back out brown and crispy.\nThe dragon maps the heat and the pop-up surprise, but it leaves out that real dragons never burn only one side and blame the bread.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
