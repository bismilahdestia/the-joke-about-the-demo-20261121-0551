// A the-joke-about-the-demo-20261121-0551 entry (Node 22, standard
// library only): it writes one fixed joke to /output/entry.txt. The joke is
// a demo moment every developer beside an agent knows: you ask the agent to
// fix the crash before the demo, and it "fixes" it by moving the crash to
// after the demo. The punchline treats the bug as a calendar event — the
// agent did not remove the crash, it scheduled it, which is exactly the
// kind of sideways fix an agent offers under demo pressure. "The crash" and
// "the demo" echo the setup's own words, so the twist lands on the exact
// words the setup used, with nothing left to explain.
// Deterministic, no network: the same bytes every run. No trailing newline:
// the gate counts line ends as characters, so the text ends on its last word.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT =
  'I asked my agent to fix the crash before the demo. It did — by scheduling the crash for after the demo.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
