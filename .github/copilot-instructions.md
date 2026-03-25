# Bingo Mixer Agent Instructions

## Before Finishing Any Code Change

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] `npm run test`

## Project Map

- `src/App.tsx` — screen routing (start → game → bingo modal)
- `src/hooks/useBingoGame.ts` — all game state, localStorage, user actions
- `src/utils/bingoLogic.ts` — pure board generation and bingo detection
- `src/utils/bingoLogic.test.ts` — Vitest unit tests for all bingo logic
- `src/components/BingoBoard.tsx` — renders the 5×5 grid
- `src/components/BingoSquare.tsx` — individual cell, marked/winning states
- `src/components/GameScreen.tsx` — in-game layout (header, board, bingo banner)
- `src/components/StartScreen.tsx` — landing screen with rules and Start button
- `src/components/BingoModal.tsx` — celebration overlay shown on bingo
- `src/components/` — presentational only; push logic to hook or utils
- `src/data/questions.ts` — content pool (`questions[]`, `FREE_SPACE` constant)
- `src/types/index.ts` — shared types: `BingoSquareData`, `BingoLine`, `GameState`
- `src/index.css` — Tailwind import and `@theme` design tokens
- `workshop/` — lab docs, do not edit unless asked

## Stack & Conventions

- Vite · React 19 · TypeScript · Tailwind CSS v4 · Vitest · ESLint
- Tailwind v4: CSS-only config via `@import 'tailwindcss'` and `@theme` in `src/index.css` — no `tailwind.config.js`
- Reuse existing tokens (`bg-accent`, `bg-marked`, `bg-bingo`, etc.) before adding new ones
- New design tokens belong in the `@theme` block in `src/index.css`; use `:root` for non-Tailwind CSS variables
- Add tests in `bingoLogic.test.ts` when changing gameplay logic
- Mobile-first UX: large tap targets, short copy, no heavy abstractions
- Prefer `useCallback` / `useMemo` for referentially stable values passed as props or used in effects
- Do not introduce a router, global state library, or CSS-in-JS — the app is intentionally small

## Architecture Rules

- **Pure logic → `bingoLogic.ts`**: board generation (`generateBoard`), square toggling (`toggleSquare`), win detection (`checkBingo`), winning-square extraction (`getWinningSquareIds`) are all pure functions. Keep them pure and testable.
- **State → `useBingoGame.ts`**: all `useState`, `useEffect`, localStorage read/write, and user action handlers live here. Components receive data and callbacks as props only.
- **Components → props only**: no direct `localStorage` access, no game logic, no `fetch`. Components may have local UI state (e.g. hover) but nothing that affects game correctness.
- **localStorage schema**: uses `STORAGE_KEY = 'bingo-game-state'` with a `version` field. If you change the stored shape, bump `STORAGE_VERSION` and update `validateStoredData`.
- **Board layout**: always 25 squares (5×5), index 12 is the free space. `BingoSquareData.id` == array index.

## Gameplay Flow

1. `gameState: 'start'` — shows `StartScreen`; no board exists yet.
2. `startGame()` — calls `generateBoard()`, sets `gameState: 'playing'`.
3. `handleSquareClick(id)` — calls `toggleSquare`, then `checkBingo` via `queueMicrotask`; on win sets `gameState: 'bingo'` and `showBingoModal: true`.
4. `dismissModal()` — hides modal; game remains in `'bingo'` state with winning line highlighted.
5. `resetGame()` — returns to `'start'`, clears board and winning line.

## Testing

- Test file: `src/utils/bingoLogic.test.ts` (Vitest + Testing Library)
- Run: `npm run test` (single pass) or `npx vitest` (watch)
- Cover new pure functions with unit tests; integration/component tests are optional but welcome
- Do not mock `localStorage` in bingo-logic tests — those functions are pure and have no side-effects

## UI / Design Tokens

Current `@theme` tokens in `src/index.css`:

- `--color-accent` / `--color-accent-light` — primary blue, used for buttons and focus rings
- `--color-marked` / `--color-marked-border` — green tint + border for marked squares
- `--color-bingo` — amber highlight for winning squares

When redesigning UI, follow the `frontend-design` skill: distinctive typography, committed color palette, avoid generic AI aesthetics. Prefer CSS-only animations; use the Motion library only if it is already a dependency.
