import type { BingoSquareData } from "../types";

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    "relative flex min-h-[60px] items-center justify-center rounded-lg border p-1 text-center text-[11px] leading-tight font-bold transition-all duration-150 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light/80 focus-visible:ring-offset-1 focus-visible:ring-offset-surface";

  const stateClasses = square.isMarked
    ? isWinning
      ? "bg-bingo border-bingo-border text-bingo-ink shadow-[0_0_20px_#ffb35c8f]"
      : "bg-marked border-marked-border text-marked-ink"
    : "bg-square border-square-border text-square-ink active:bg-square-active";

  const freeSpaceClasses = square.isFreeSpace
    ? "bg-surface-elevated border-accent-light/60 font-extrabold text-[12px] text-ink"
    : "";

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? "Free space" : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute right-0.5 top-0.5 text-[10px] text-accent-light">
          ✓
        </span>
      )}
    </button>
  );
}
