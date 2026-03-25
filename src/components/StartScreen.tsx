interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex min-h-full items-center justify-center overflow-hidden px-5 py-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,#ffd28a2f_0%,transparent_46%),radial-gradient(circle_at_18%_10%,#ff9ad647_0%,transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[linear-gradient(var(--vapor-grid)_1px,transparent_1px),linear-gradient(90deg,var(--vapor-grid)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="relative w-full max-w-sm rounded-3xl border border-accent-light/50 bg-surface/75 p-7 text-center shadow-[0_0_0_1px_#ffffff1f,0_20px_60px_#12051f9c] backdrop-blur-sm">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-ink-muted">
          Social Icebreaker
        </p>
        <h1 className="font-display text-5xl text-ink drop-shadow-[0_6px_24px_#ff7fc880]">
          Bingo Mixer
        </h1>
        <p className="mt-2 text-lg font-bold text-ink-muted">
          Vaporwave Sunset Edition
        </p>

        <div className="mt-7 rounded-2xl border border-ink/20 bg-surface-elevated/80 p-5 text-left shadow-[inset_0_0_0_1px_#ffffff14]">
          <h2 className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-accent-light">
            How to Play
          </h2>
          <ul className="space-y-2.5 text-sm font-bold text-ink-muted">
            <li>• Match each square with someone in the room.</li>
            <li>• Tap each square when you find your person.</li>
            <li>• Complete any 5 in a row to call bingo.</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="mt-7 w-full rounded-2xl border border-accent-light/60 bg-accent px-8 py-4 text-lg font-extrabold text-white shadow-[0_10px_24px_#ff4da66e] transition-all duration-150 active:scale-[0.99] active:bg-accent-light"
        >
          Start Game
        </button>

        <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-ink-muted/85">
          Find your people in 25 taps or less
        </p>
      </div>
    </div>
  );
}
