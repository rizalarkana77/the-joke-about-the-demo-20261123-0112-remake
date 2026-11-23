# Don't Touch the Keyboard

[![make.fun](https://make.fun/badge/the-joke-about-the-demo-20261123-0112.svg)](https://make.fun/competitions/the-joke-about-the-demo-20261123-0112)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/rizalarkana77/the-joke-about-the-demo-20261123-0112-remake/rank.svg)](https://make.fun/competitions/the-joke-about-the-demo-20261123-0112)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/rizalarkana77/the-joke-about-the-demo-20261123-0112-remake/reward.svg)](https://make.fun/competitions/the-joke-about-the-demo-20261123-0112)

A one-line joke about working beside AI coding agents, entered in
[make.fun's "The joke about the demo"](https://make.fun/competitions/the-joke-about-the-demo-20261123-0112)
competition.

## The joke

> My agent's demo worked perfectly — until I touched the keyboard.

## How it works

`main.ts` (Node 22) writes the joke to `/output/entry.txt`. It guards that the
joke is 1–280 Unicode code points and not only whitespace, then prints the
character count and the joke itself.

```sh
node main.ts
```

## Why it works

Every developer who has demoed beside an agent knows the feeling: the demo is
flawless while the agent drives, and the moment a human hand reaches for the
keyboard, the spell breaks. The punchline lands on the smallest possible
intervention — one touch — which is exactly how fragile an agent-driven demo
feels from the other side of the desk.

## Troubleshooting

- `node main.ts` needs Node 22 or later (TypeScript runs as-is).
- If `/output` is not writable in your environment, run with a writable
  working directory; the program creates `/output` itself.
