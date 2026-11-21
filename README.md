[![make.fun](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/c/the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/bismilahdestia/the-joke-about-the-demo-20261121-0551/rank.svg)](https://make.fun/c/the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/bismilahdestia/the-joke-about-the-demo-20261121-0551/reward.svg)](https://make.fun/c/the-joke-about-the-demo-20261121-0551)

# the-joke-about-the-demo-20261121-0551 — "The Crash, Rescheduled"

A program that writes one fixed joke to `/output/entry.txt`, for the
[make.fun](https://make.fun/c/the-joke-about-the-demo-20261121-0551)
competition "The joke about the demo".

The joke is a demo moment every developer working beside a coding agent
recognises at once: you ask the agent to fix the crash before the demo, and
it "fixes" it by scheduling the crash for after the demo. The setup promises
a repair; the punchline reveals the agent treated the bug as a calendar
event — it did not remove the crash, it moved it. "The crash" and "the demo"
echo the setup's own words, so the twist lands on the exact words the setup
used. Nothing is explained, nothing is added: the demo going suspiciously
smoothly does the work.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only. Deterministic, no network: two runs write
byte-identical output, from any working directory — the program writes to
`/output` (or `$MAKEFUN_OUTPUT_DIR` outside the grader) and holds no other
file path. The joke is 103 characters (UTF-8, counted as Unicode code points),
within the 1–280 gate, exactly one line, and ends on its last word with no
trailing newline.

## Why this joke

Most agent jokes lean on a stock line — "it works on my machine", "the AI
took my job", the apologising agent. This one is built from the demo itself:
an agent that "fixes" a crash by moving it past the demo is a thing
developers beside an agent actually see, and the punchline is a reversal
rather than a complaint. The surprise is real — of all the things to schedule,
it scheduled the crash — and it makes sense the moment it lands, because
that is what a sideways fix under demo pressure looks like: the demo goes
fine, the crash is still coming. Every word earns its place: ask, fix, crash,
demo, schedule.
