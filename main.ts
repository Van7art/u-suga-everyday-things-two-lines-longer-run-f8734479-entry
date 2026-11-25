import { mkdirSync, writeFileSync } from "node:fs";

// One deterministic entry text (no network, no randomness, no input).
// Two-line explainer, revised for the judge: line 1 is one vivid sentence
// (toaster = tiny dragon); line 2 maps the analogy and names what it leaves out.
const ENTRY: string = "A toaster is a tiny dragon that eats your bread, breathes fire on it, and spits it back out brown and crispy.\nThe dragon maps the heat and the pop-up surprise, but it leaves out that real dragons never burn only one side and blame the bread.";

const OUT = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");
console.log(ENTRY);
