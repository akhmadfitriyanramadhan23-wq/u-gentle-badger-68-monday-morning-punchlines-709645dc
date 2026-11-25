import { mkdirSync, writeFileSync } from "node:fs";

// A Monday morning joke, 200 characters at most: rule -> literal
// violation -> flat consequence. Three Monday escalations — the
// alarm snoozing itself twice, the laptop updating for an hour,
// the 9 AM "quick sync" with 14 people and no agenda — end on the
// meeting's own countdown timer reading four days to Friday.
const lines = [
  "Monday: my alarm snoozed itself twice, my laptop updated for an hour, and my 9 AM 'quick sync' had 14 people, no agenda, and a countdown timer reading 4 days to Friday.",
];

const text = lines.join("\n") + "\n";

// Guard: the gate requires 1-200 characters and exactly one line.
// Character count is measured on the line itself, without the newline.
const lineChars = [...lines[0]].length;
if (lineChars < 1 || lineChars > 199) {
  throw new Error(`entry must be 1-199 characters, got ${lineChars}`);
}
if (lines.length !== 1 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
