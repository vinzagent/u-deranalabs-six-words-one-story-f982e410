import { mkdirSync, writeFileSync } from "node:fs";

// One complete story in exactly six words, written for make.fun's
// "Six Words, One Story" (u-deranalabs-six-words-one-story-f982e410).
// The gate allows 1-60 characters; the story must be exactly six words.
// Arc: a ticket was held, it expired, the win (if any) is lost for good —
// the turn lands on "expired" and "yesterday morning" makes the miss fresh.
const line = "The lottery ticket expired yesterday morning.";

// Local gates: exactly six words, 1-60 characters. Fail loudly
// (non-zero exit, no file written) instead of shipping a bad line.
const words = line.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`entry line has ${words.length} words, must be exactly 6`);
}
if ([...line].length < 1 || [...line].length > 60) {
  throw new Error(`entry line is ${[...line].length} characters, must be 1-60`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
