import { useCountUp } from '../../hooks/useCountUp';

interface ProgressRingProps {
  value: number;
  active: boolean;
  label: string;
}

const SIZE = 64;
const STROKE = 5;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/** Circular gauge that fills, and counts up, when `active` becomes true. */
export default function ProgressRing({ value, active, label }: ProgressRingProps) {
  const shown = useCountUp(value, active, 1400);
  const offset = CIRCUMFERENCE * (1 - shown / 100);

  return (
    <div
      role="meter"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      className="relative h-16 w-16 shrink-0"
    >
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="-rotate-90" aria-hidden="true">
        <circle cx={SIZE / 2} cy={SIZE / 2} r={RADIUS} fill="none" strokeWidth={STROKE} className="stroke-ink-700" />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          className="stroke-glow"
        />
      </svg>
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center font-display text-sm font-semibold tabular-nums text-glow"
      >
        {shown}%
      </span>
    </div>
  );
}
