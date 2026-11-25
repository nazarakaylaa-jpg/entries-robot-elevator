// Two Robots in an Elevator — make.fun entry
// Writes one line of awkward robot small talk to /output/entry.txt.
// The line: a robot that ran 12,000 simulations of this elevator ride and
// still could not think of anything to say, so it says the only thing left.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I simulated this ride 12,000 times. In every one, I said nothing. So... hi.";

const MAX_CHARS = 200;

function buildEntry(): string {
  const line = ENTRY.trim();
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  return line;
}

function main(): void {
  const entry = buildEntry();
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry, "utf8");
  console.log(`wrote /output/entry.txt (${entry.length} chars)`);
}

main();
