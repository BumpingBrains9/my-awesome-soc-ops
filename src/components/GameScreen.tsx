interface GameScreenProps {
  currentCard: string | null;
  remainingCards: number;
  totalCards: number;
  onDrawCard: () => void;
  onReset: () => void;
}

export function GameScreen({
  currentCard,
  remainingCards,
  totalCards,
  onDrawCard,
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
        <h1 className="font-display text-2xl text-ink">Card Deck Shuffle</h1>
        <div className="w-[72px]" />
      </header>

      <p className="relative z-10 px-4 py-1 text-center text-sm font-bold text-ink-muted">
        Tap the button to draw a random icebreaker card.
      </p>

      <div className="relative z-10 mx-4 mt-2 rounded-xl border border-ink/20 bg-surface/80 py-2 text-center text-xs font-extrabold uppercase tracking-[0.12em] text-ink-muted shadow-[0_8px_18px_#1b073466] backdrop-blur-sm">
        {remainingCards} / {totalCards} cards left in this shuffle
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-5 p-4 pb-6">
        <div className="w-full max-w-md rounded-3xl border border-accent-light/40 bg-surface-elevated/90 p-6 text-center shadow-[0_18px_45px_#0b0219a8,0_0_0_1px_#ffffff1f] backdrop-blur-sm">
          <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.24em] text-accent-light">
            Drawn Card
          </p>

          <p className="min-h-[110px] text-pretty text-xl font-extrabold leading-tight text-ink sm:min-h-[130px] sm:text-2xl">
            {currentCard ?? "Tap DRAW CARD to reveal your first question."}
          </p>

          <button
            onClick={onDrawCard}
            className="mt-5 w-full rounded-2xl border border-accent-light/70 bg-accent px-6 py-4 text-lg font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_12px_28px_#ff4da674] transition-all duration-150 active:scale-[0.99] active:bg-accent-light"
          >
            Draw Card
          </button>
        </div>

        <p className="max-w-xs text-center text-xs font-bold uppercase tracking-[0.16em] text-ink-muted/85">
          Each tap flips the next card from a shuffled question deck.
        </p>
      </div>
    </div>
  );
}
