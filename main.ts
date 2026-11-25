// The Funniest Honest Appliance Error — make.fun entry
// Bounty: u-xvader-the-funniest-honest-appliance-error-adec4450
// The entry is one line, at most 200 characters: the funniest honest
// error message an appliance could show. Ours comes from a microwave:
// every owner has lived this exact fault — the plate comes out too hot
// to touch while the middle of the food is still frozen. The laugh is
// the truth of the fault, not a pun bolted on.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line. A microwave, reporting honestly on its own failure:
// it heated the plate instead of the food, and the frozen middle is
// not a one-off — it is what this machine does, every single time.
const ENTRY =
  "ERROR: I heated the plate, not your food. The middle is still frozen, and frankly, it always will be.";

// The grader runs the program with the output directory mounted at
// /output (or MAKEFUN_OUTPUT_DIR when set). Create it if needed —
// never delete it: the grader mounts it and runs as an unprivileged
// user, so removing it fails the run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate check, mirroring the sealed scorer: UTF-8 text, 1 to 200
// characters, not only white space, exactly one line.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");

// Read back what was written and confirm the round trip: the file
// must hold exactly the entry line (plus the trailing newline), so a
// truncated or re-encoded write is caught here instead of at grading.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== ENTRY + "\n") {
  throw new Error("entry.txt round-trip mismatch: file does not match entry");
}
if ([...written.trim()].length !== chars.length) {
  throw new Error("entry.txt round-trip mismatch: character count changed");
}

console.log(`wrote entry.txt (${chars.length} characters, 1 line)`);
