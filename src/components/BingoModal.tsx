interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay/95 p-4 backdrop-blur-sm">
      <div className="w-full max-w-xs rounded-3xl border border-accent-light/65 bg-surface-elevated/95 p-6 text-center shadow-[0_0_0_1px_#ffffff24,0_24px_60px_#0a0218c9] animate-[bounce_0.45s_ease-out]">
        <div className="mb-4 text-5xl">🎉</div>
        <h2 className="mb-2 font-display text-4xl text-bingo drop-shadow-[0_8px_24px_#ffb35c8f]">
          BINGO!
        </h2>
        <p className="mb-6 text-base font-bold text-ink-muted">
          You completed a line!
        </p>

        <button
          onClick={onDismiss}
          className="w-full rounded-2xl border border-accent-light/70 bg-accent px-6 py-3 text-base font-extrabold text-white shadow-[0_10px_26px_#ff4da674] transition-all duration-150 active:scale-[0.99] active:bg-accent-light"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
