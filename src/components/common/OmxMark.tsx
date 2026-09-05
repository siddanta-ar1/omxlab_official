/**
 * The OMX Lab mark, traced from the brand artwork (Brand_Identity/omx_lab.jpeg).
 *
 * Two interleaved octagonal spiral arms. The facets are straight in the source
 * art, so the geometry is plain polygons; `fill-rule: evenodd` keeps the gaps
 * between the arms open. Colour comes from `currentColor`, so the mark inherits
 * whatever text colour it sits in.
 *
 * Coordinates are normalised to an ink height of 100 units; the paths are
 * shared with the lockups so every appearance of the mark is the same artwork.
 */

const MARK_PATHS = [
    'M53.04 0.00L83.13 13.28L90.04 33.13L95.37 49.65L94.61 48.48L90.66 40.25L79.94 16.25L50.35 5.05Z',
    'M48.13 7.81L74.76 20.47L84.92 49.72L84.30 48.82L81.40 42.88L71.99 22.89L47.72 13.55L36.31 17.57L17.63 26.14L6.15 49.17L6.36 49.93L17.70 73.51L34.16 81.19L47.23 86.65L71.65 77.11L84.72 49.93L84.92 49.86L84.51 51.52L79.81 64.80L74.34 79.46L51.94 90.53L48.06 92.39L47.72 92.39L27.25 84.51L24.76 78.63L13.55 77.32L1.18 52.35L0.00 49.52L13.49 22.27L24.62 21.09L27.11 15.42Z',
    'M45.02 16.87L66.53 27.04L75.03 49.52L75.03 49.72L74.83 49.59L74.34 48.76L64.66 29.25L64.38 29.05L44.95 22.34L28.01 28.63L17.50 49.79L28.01 70.89L28.28 71.09L44.12 76.97L45.71 77.39L64.52 70.61L73.37 52.77L75.03 49.79L66.60 72.68L45.71 82.78L24.20 75.31L11.27 49.86L24.20 24.34Z',
    'M43.15 26.21L46.20 27.46L59.27 33.75L65.08 49.72L64.04 48.13L57.47 35.34L43.57 31.12L42.95 31.19L36.45 33.96L28.42 49.59L28.42 49.93L36.45 65.77L43.50 68.53L57.47 64.18L64.38 50.83L64.87 49.93L65.01 50.07L65.15 49.79L59.20 66.11L43.85 73.58L32.85 70.06L22.34 49.86L32.64 30.08Z',
    'M95.23 49.86L95.30 50.48L90.73 64.38L82.71 86.58L53.73 99.72L52.77 100.00L50.35 95.23L50.41 94.95L79.67 83.54Z',
];

export { MARK_PATHS };

/** Width of the mark's ink, in the same units as its 100-unit height. */
export const MARK_WIDTH = 95.37;

/* Rings bloom from the innermost outwards when animated. Index order matches
   MARK_PATHS: [top tail, outer ring, middle ring, inner ring, bottom tail]. */
const BLOOM_DELAY = [0.24, 0.16, 0.08, 0, 0.24];

export type OmxMarkProps = {
    className?: string;
    /** Assemble the rings on mount instead of appearing all at once. */
    animated?: boolean;
    /** Accessible name. Omit for decorative instances. */
    title?: string;
};

export const OmxMark = ({
    className = 'w-full h-full',
    animated = false,
    title,
}: OmxMarkProps) => (
    <svg
        viewBox={`0 0 ${MARK_WIDTH} 100`}
        className={className}
        role={title ? 'img' : 'presentation'}
        aria-label={title}
        aria-hidden={title ? undefined : true}
    >
        <g fill="currentColor" fillRule="evenodd">
            {MARK_PATHS.map((d, i) => (
                <path
                    key={i}
                    d={d}
                    className={animated ? 'omx-mark-piece' : undefined}
                    style={animated ? { animationDelay: `${BLOOM_DELAY[i]}s` } : undefined}
                />
            ))}
        </g>
    </svg>
);
