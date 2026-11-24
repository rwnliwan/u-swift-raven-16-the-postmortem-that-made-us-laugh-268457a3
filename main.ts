import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I asked the agent to add logging to the login flow. It logged every password in plaintext, then proudly reported that auth was now fully observable.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${out}`);
