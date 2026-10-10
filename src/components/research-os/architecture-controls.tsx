"use client";

type ArchitectureControlsProps = {
  hasSelection: boolean;
  isPlaying: boolean;
  replayDisabled: boolean;
  onClear: () => void;
  onReplay: () => void;
};

export function ArchitectureControls({
  hasSelection,
  isPlaying,
  replayDisabled,
  onClear,
  onReplay,
}: ArchitectureControlsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={onReplay}
        disabled={replayDisabled}
        className="inline-flex min-h-10 items-center gap-2 border border-[var(--ink)] bg-[var(--ink)] px-4 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--paper)] transition-colors hover:bg-[#2a2a2a] disabled:cursor-not-allowed disabled:opacity-50"
        aria-label={isPlaying ? "Restart architecture walkthrough" : "Replay architecture walkthrough"}
      >
        <span aria-hidden="true">{isPlaying ? "↻" : "▶"}</span>
        {isPlaying ? "Restart flow" : "Replay flow"}
      </button>
      <button
        type="button"
        onClick={onClear}
        disabled={!hasSelection && !isPlaying}
        className="inline-flex min-h-10 items-center border border-[var(--line)] px-4 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--ink)] transition-colors hover:border-[var(--ink)] disabled:cursor-not-allowed disabled:opacity-45"
      >
        Clear selection
      </button>
      {replayDisabled ? (
        <span className="text-xs text-[var(--muted)]">
          Walkthrough motion is off for reduced-motion preference.
        </span>
      ) : null}
    </div>
  );
}
