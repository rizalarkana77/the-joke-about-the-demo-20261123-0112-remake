// Don't Touch the Keyboard — a one-line joke about working beside AI coding agents.
// Writes the joke to /output/entry.txt (make.fun: the-joke-about-the-demo-20261123-0112).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "My agent's demo worked perfectly — until I touched the keyboard.";

// Single-line guard: the entry must be 1–280 Unicode code points, not only whitespace.
const len = [...JOKE].length;
if (len < 1 || len > 280 || !JOKE.trim()) throw new Error(`joke length ${len} out of range`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote ${len} code points to /output/entry.txt`);
console.log(JOKE);
