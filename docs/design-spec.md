# Design Spec

## Mode: Card Deck Shuffle

### Iteration 1 (Entry Flow + Core Interaction)

- Goal: Replace bingo board flow with a minimal card-draw flow.
- User path: Open app → Start Deck → Tap Draw Card → See one random question card.
- Interaction model: Questions are drawn from a shuffled deck so cards do not repeat until the deck is exhausted.
- Visual direction: Keep existing vaporwave sunset shell and tokenized styling; simplify gameplay surface to one prominent card and one primary CTA.

### Implemented in Iteration 1

- Start screen copy and CTA updated for card deck behavior.
- In-game layout now shows:
  - card counter (`remaining / total`)
  - current card text
  - primary `Draw Card` button
  - reset/back action
- Local storage persists:
  - game state (`start` / `playing`)
  - current card text
  - shuffled deck order
  - current draw index

### Notes

- This first pass prioritizes functional clarity and tap-driven flow over advanced motion/details.
- Next iteration candidates: visual card flip treatment, stronger draw-state transitions, optional host/player framing text.
