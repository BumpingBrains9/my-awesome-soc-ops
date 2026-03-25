import type { BingoSquareData } from "../types";
import { BingoBoard } from "./BingoBoard";

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="relative flex min-h-full flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_96%,#ffd18830_0%,transparent_46%),radial-gradient(circle_at_86%_4%,#9f84ff36_0%,transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-50 bg-[linear-gradient(var(--vapor-grid)_1px,transparent_1px),linear-gradient(90deg,var(--vapor-grid)_1px,transparent_1px)] bg-[size:34px_34px]" />

      <header className="relative z-10 m-3 mb-2 flex items-center justify-between rounded-2xl border border-ink/20 bg-surface/80 px-3 py-2 shadow-[0_12px_28px_#13032266] backdrop-blur-sm">
        <button
          onClick={onReset}
          className="rounded-lg border border-ink/20 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.15em] text-ink-muted transition-colors active:bg-surface-soft"
        >
          ← Back
        </button>
        <h1 className="font-display text-2xl text-ink">Bingo Mixer</h1>
        <div className="w-[72px]" />
      </header>

      <p className="relative z-10 px-4 py-1 text-center text-sm font-bold text-ink-muted">
        Tap each prompt when you find your match.
      </p>

      {hasBingo && (
        <div className="relative z-10 mx-4 mt-2 rounded-xl border border-bingo-border/80 bg-bingo/95 py-2 text-center text-sm font-extrabold uppercase tracking-[0.12em] text-bingo-ink shadow-[0_8px_18px_#ffb35c80]">
          🎉 BINGO! You got a line!
        </div>
      )}

      <div className="relative z-10 flex flex-1 items-center justify-center p-3 pb-5">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
