interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex min-h-full flex-col overflow-hidden">
      {/* ── Atmospheric grid overlay ── */}
      <div className="pointer-events-none absolute inset-0 opacity-50 bg-[linear-gradient(var(--vapor-grid)_1px,transparent_1px),linear-gradient(90deg,var(--vapor-grid)_1px,transparent_1px)] bg-size-[38px_38px]" />

      {/* ── Top hero region ── */}
      <div className="relative flex min-h-[42vh] flex-col items-center justify-center px-6 pb-6 pt-10">
        {/* Scanlines */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute left-0 right-0 top-[18%] h-px bg-accent-light/7" />
          <div className="absolute left-0 right-0 top-[32%] h-px bg-accent-light/10" />
          <div className="absolute left-0 right-0 top-[46%] h-px bg-accent-light/12" />
          <div className="absolute left-0 right-0 top-[60%] h-px bg-accent-light/10" />
          <div className="absolute left-0 right-0 top-[74%] h-px bg-accent-light/7" />
        </div>

        <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.38em] text-ink-muted">
          Social Icebreaker
        </p>
        <h1 className="font-display text-center text-6xl leading-none text-ink drop-shadow-[0_10px_32px_#ff7fc8a0] sm:text-7xl">
          Card Deck
          <br />
          Shuffle
        </h1>
        <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.22em] text-accent-light drop-shadow-[0_2px_12px_#ff7fc860]">
          Vaporwave Sunset
        </p>
        <p className="mt-3 max-w-[22ch] text-center text-sm font-bold text-ink-muted">
          Open the game, tap to draw, and get one instant question card to spark
          conversation.
        </p>
      </div>

      {/* ── Bottom info panel — rises like a bottom sheet ── */}
      <div className="relative z-10 flex-1 rounded-t-3xl border-t border-accent-light/40 bg-surface/90 px-6 pb-8 pt-6 shadow-[0_-16px_48px_#0c031880] backdrop-blur-sm">
        {/* Stat chips */}
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-xl border border-ink/20 bg-surface-elevated/85 px-3 py-2 text-center">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-ink-muted">
              Mode
            </p>
            <p className="mt-1 text-sm font-extrabold text-ink">Card draw</p>
          </div>
          <div className="rounded-xl border border-ink/20 bg-surface-elevated/85 px-3 py-2 text-center">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-ink-muted">
              Questions
            </p>
            <p className="mt-1 text-sm font-extrabold text-ink">Shuffled</p>
          </div>
          <div className="rounded-xl border border-ink/20 bg-surface-elevated/85 px-3 py-2 text-center">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-ink-muted">
              Flow
            </p>
            <p className="mt-1 text-sm font-extrabold text-ink">Tap to draw</p>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-5 rounded-2xl border border-ink/20 bg-surface-elevated/80 p-5 text-left shadow-[inset_0_0_0_1px_#ffffff14]">
          <h2 className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-accent-light">
            How It Works
          </h2>
          <ul className="space-y-2.5 text-sm font-bold text-ink-muted">
            <li>• Start the deck for your group.</li>
            <li>• Tap the draw button to flip one random card.</li>
            <li>• Use the question to kick off a quick intro chat.</li>
          </ul>
        </div>

        {/* CTA */}
        <button
          onClick={onStart}
          className="mt-6 w-full rounded-2xl border border-accent-light/70 bg-accent px-8 py-4 text-lg font-extrabold text-white shadow-[0_12px_28px_#ff4da47a] transition-all duration-150 active:scale-[0.99] active:bg-accent-light"
        >
          Start Deck
        </button>

        <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-ink-muted/80">
          One tap • One question • One new connection
        </p>
      </div>
    </div>
  );
}
