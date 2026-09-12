import type { CSSProperties } from 'react';

/* ---------------------------------------------------------------------------
   SpecimenPlate

   The Stitch page filled its large panels with photography. The design system
   itself, though, draws with hairlines and forbids decoration -- so rather than
   leave those panels as empty grey wells, they carry a technical plate: a
   ruled field, a plotted trace and registration marks, in the idiom of a
   laboratory chart recording.

   Everything is deterministic. The trace is generated from a small integer seed
   so the server and client render identical markup, and each plate on a page
   gets a different seed and therefore a different -- but stable -- reading.
   --------------------------------------------------------------------------- */

export type SpecimenPlateProps = {
  /** Stable per-instance seed; identical seeds produce identical plates. */
  seed?: number;
  /** Code shown in the plate's caption strip, e.g. "PLATE 01 / HELIOS". */
  code?: string;
  /** Short reading shown on the right of the caption strip. */
  reading?: string;
  /** Plot shape. `trace` is a running signal, `matrix` a density field. */
  variant?: 'trace' | 'matrix';
  className?: string;
  style?: CSSProperties;
};

const VIEW_W = 480;
const VIEW_H = 270;
const PLOT_TOP = 28;
const PLOT_BOTTOM = 214;

/* A small deterministic PRNG -- mulberry32. Keeps the plates stable across
   renders without pulling in a dependency. */
function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildTrace(seed: number) {
  const next = rng(seed);
  const points: string[] = [];
  const steps = 64;
  let value = 0.5;
  let peak = { x: 0, y: PLOT_BOTTOM, v: -1 };

  for (let i = 0; i <= steps; i += 1) {
    // A drifting walk with an occasional spike, clamped to the plot band.
    const drift = (next() - 0.5) * 0.18;
    const spike = next() > 0.94 ? (next() - 0.5) * 0.5 : 0;
    value = Math.min(0.94, Math.max(0.06, value + drift + spike));

    const x = (i / steps) * VIEW_W;
    const y = PLOT_BOTTOM - value * (PLOT_BOTTOM - PLOT_TOP);
    if (value > peak.v) peak = { x, y, v: value };
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }

  return { points: points.join(' '), peak };
}

function buildMatrix(seed: number) {
  const next = rng(seed);
  const cols = 24;
  const rows = 9;
  const cells: { x: number; y: number; o: number }[] = [];
  const cw = VIEW_W / cols;
  const ch = (PLOT_BOTTOM - PLOT_TOP) / rows;

  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      const v = next();
      if (v < 0.42) continue;
      cells.push({
        x: c * cw,
        y: PLOT_TOP + r * ch,
        // Quantised so the field reads as discrete specimen density.
        o: v > 0.88 ? 0.82 : v > 0.66 ? 0.4 : 0.16,
      });
    }
  }

  return { cells, cw, ch };
}

export function SpecimenPlate({
  seed = 1,
  code,
  reading,
  variant = 'trace',
  className = '',
  style,
}: SpecimenPlateProps) {
  const gridId = `plate-grid-${seed}`;
  const matrix = variant === 'matrix' ? buildMatrix(seed) : null;
  const trace = variant === 'trace' ? buildTrace(seed) : null;

  return (
    <div
      className={`relative w-full border border-grid-hairline bg-paper-white ${className}`}
      style={style}
    >
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="block w-full h-auto"
        role="img"
        aria-label={
          code
            ? `Technical specimen plate ${code}`
            : 'Technical specimen plate'
        }
      >
        <defs>
          <pattern
            id={gridId}
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M20 0H0V20"
              fill="none"
              stroke="var(--color-grid-hairline)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        {/* Ruled field */}
        <rect width={VIEW_W} height={VIEW_H} fill="var(--color-paper-white)" />
        <rect
          y={PLOT_TOP}
          width={VIEW_W}
          height={PLOT_BOTTOM - PLOT_TOP}
          fill={`url(#${gridId})`}
        />

        {/* Baseline and ceiling rules */}
        <line
          x1="0"
          y1={PLOT_TOP}
          x2={VIEW_W}
          y2={PLOT_TOP}
          stroke="var(--color-border-subtle)"
          strokeWidth="1"
        />
        <line
          x1="0"
          y1={PLOT_BOTTOM}
          x2={VIEW_W}
          y2={PLOT_BOTTOM}
          stroke="var(--color-text-primary)"
          strokeWidth="1"
        />

        {/* Axis ticks along the baseline */}
        {Array.from({ length: 13 }).map((_, i) => {
          const x = (i / 12) * VIEW_W;
          const major = i % 3 === 0;
          return (
            <line
              key={i}
              x1={x}
              y1={PLOT_BOTTOM}
              x2={x}
              y2={PLOT_BOTTOM + (major ? 8 : 4)}
              stroke="var(--color-text-primary)"
              strokeWidth="1"
            />
          );
        })}

        {matrix ? (
          matrix.cells.map((cell, i) => (
            <rect
              key={i}
              x={cell.x + 1}
              y={cell.y + 1}
              width={matrix.cw - 2}
              height={matrix.ch - 2}
              fill="var(--color-text-primary)"
              opacity={cell.o}
            />
          ))
        ) : (
          <>
            <polyline
              points={trace!.points}
              fill="none"
              stroke="var(--color-text-primary)"
              strokeWidth="1.25"
              strokeLinejoin="round"
            />
            {/* Peak reading, marked the way an instrument marks one: a flat
                square in Signal Orange, the plate's single accent. */}
            <rect
              x={trace!.peak.x - 3}
              y={trace!.peak.y - 3}
              width="6"
              height="6"
              fill="var(--color-signal-orange)"
            />
          </>
        )}

        {/* Registration marks, one per corner */}
        {[
          [8, 8, 1, 1],
          [VIEW_W - 8, 8, -1, 1],
          [8, VIEW_H - 8, 1, -1],
          [VIEW_W - 8, VIEW_H - 8, -1, -1],
        ].map(([x, y, dx, dy], i) => (
          <g key={i} stroke="var(--color-text-primary)" strokeWidth="1">
            <line x1={x} y1={y} x2={x + dx * 10} y2={y} />
            <line x1={x} y1={y} x2={x} y2={y + dy * 10} />
          </g>
        ))}
      </svg>

      {(code || reading) && (
        <div className="flex items-center justify-between border-t border-grid-hairline px-space-sm py-1.5">
          {code && (
            <span className="text-label-code uppercase text-text-muted">
              {code}
            </span>
          )}
          {reading && (
            <span className="text-label-code uppercase text-text-primary tabular-nums">
              {reading}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default SpecimenPlate;
