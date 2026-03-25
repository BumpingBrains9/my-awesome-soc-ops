interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex min-h-full items-center justify-center overflow-hidden px-5 py-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,#ffd28a38_0%,transparent_48%),radial-gradient(circle_at_15%_8%,#ff9ad659_0%,transparent_36%),radial-gradient(circle_at_85%_8%,#9f84ff59_0%,transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-55 bg-[linear-gradient(var(--vapor-grid)_1px,transparent_1px),linear-gradient(90deg,var(--vapor-grid)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative w-full max-w-md rounded-3xl border border-accent-light/60 bg-surface/75 p-6 shadow-[0_0_0_1px_#ffffff1c,0_24px_70px_#10041f9f] backdrop-blur-sm sm:p-7">
        <div className="text-center">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.35em] text-ink-muted">
            Social Icebreaker
          </p>
          <h1 className="font-display text-5xl leading-none text-ink drop-shadow-[0_8px_26px_#ff7fc880] sm:text-6xl">
            Bingo Mixer
          </h1>
          <p className="mt-3 text-base font-extrabold uppercase tracking-[0.2em] text-accent-light">
            Vaporwave Sunset
          </p>
          <p className="mt-3 text-sm font-bold text-ink-muted">
            Turn small talk into instant connections in one fast round.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2">
          <div className="rounded-xl border border-ink/20 bg-surface-elevated/85 px-3 py-2 text-center">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink-muted">
              Grid
            </p>
            <p className="mt-1 text-sm font-extrabold text-ink">5×5</p>
          </div>
          <div className="rounded-xl border border-ink/20 bg-surface-elevated/85 px-3 py-2 text-center">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink-muted">
              Players
            </p>
            <p className="mt-1 text-sm font-extrabold text-ink">Any size</p>
          </div>
          <div className="rounded-xl border border-ink/20 bg-surface-elevated/85 px-3 py-2 text-center">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink-muted">
              Win
            </p>
            <p className="mt-1 text-sm font-extrabold text-ink">5 in row</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-ink/20 bg-surface-elevated/80 p-5 text-left shadow-[inset_0_0_0_1px_#ffffff14]">
          <h2 className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-accent-light">
            How It Works
          </h2>
          <ul className="space-y-2.5 text-sm font-bold text-ink-muted">
            <li>• Find someone who matches each prompt.</li>
            <li>• Tap the square to lock in your match.</li>
            <li>• Hit any full line to trigger bingo.</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="mt-6 w-full rounded-2xl border border-accent-light/70 bg-accent px-8 py-4 text-lg font-extrabold text-white shadow-[0_12px_28px_#ff4da67d] transition-all duration-150 active:scale-[0.99] active:bg-accent-light"
        >
          Start Mixer
        </button>

        <p className="mt-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-ink-muted/85">
          Meet people faster • Keep it playful • Celebrate every line
        </p>
      </div>
    </div>
  );
}
