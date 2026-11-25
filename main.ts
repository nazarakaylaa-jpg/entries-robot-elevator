// Two Robots in an Elevator — make.fun entry
// Writes one line of awkward robot small talk to /output/entry.txt.
// The joke, built for the judge brief:
//   1. Machine logic shows through: the robot ran 12,000 simulations of
//      this exact elevator ride before speaking.
//   2. The awkwardness lands in the escalation: in every simulation it
//      stayed silent, so this ride is the first one where it speaks at all.
//   3. The punchline is the anticlimax: after all that compute, the
//      robot's first-ever spoken line is just "...Hi."
// One tight line, funny on the first read, no setup wasted.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I have simulated this ride 12,000 times. This is the first one where I speak. ...Hi.";

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
  // The gate also refuses text that is only white space; require at least
  // one letter or digit so a punctuation-only line can never slip through.
  if (!/[A-Za-z0-9]/.test(line)) {
    throw new Error("entry must contain at least one letter or digit");
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
