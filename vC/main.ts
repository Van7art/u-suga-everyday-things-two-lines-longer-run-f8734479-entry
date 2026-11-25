import { mkdirSync, writeFileSync } from "node:fs";

// One deterministic entry line (no network, no randomness, no input).
const ENTRY: string = "Rain is the sky tipping over a giant watering can because the clouds got too heavy to hold it anymore.\nThe watering can maps where the water comes from and why it falls, but it leaves out the wind that blows it sideways into your shoes.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
