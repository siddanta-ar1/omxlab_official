import { MARK_PATHS, MARK_WIDTH } from '@/components/common/OmxMark';

/**
 * The OMX Lab horizontal lockup — the real mark beside the real wordmark,
 * traced from Brand_Identity/omx_lab_textual_logo.jpeg.
 *
 * Two variants share the same artwork and differ only in how the wordmark is
 * scaled against the mark:
 *
 *   "exact"    reproduces the supplied lockup's proportions. Use it wherever
 *              there is room to render the logo large — the footer, exports.
 *   "compact"  lifts the wordmark to a cap height that still reads beside
 *              14px navigation links, for the header and other tight spots.
 *
 * Size either by height and let the width follow (`h-9 w-auto`).
 */

const WORDMARK_PATHS = [
    'M39.9 0.0C45.1 -0.2 50.6 0.6 55.1 1.9C59.5 3.2 63.4 5.5 66.5 7.6C69.5 9.7 71.4 11.8 73.4 14.6C75.4 17.3 77.1 20.0 78.5 24.1C79.9 28.1 81.2 31.5 81.6 38.6C82.1 45.7 82.0 59.3 81.0 66.5C80.1 73.6 78.8 77.0 75.9 81.6C73.1 86.3 69.1 91.2 63.9 94.3C58.8 97.4 50.7 99.3 44.9 100.0C39.1 100.7 34.2 100.1 29.1 98.7C24.1 97.4 18.7 95.1 14.6 91.8C10.4 88.4 6.9 84.3 4.4 78.5C2.0 72.7 0.5 64.9 0.0 57.0C-0.5 49.1 -0.1 38.0 1.3 31.0C2.6 24.1 6.1 18.9 8.2 15.2C10.3 11.5 11.4 10.9 13.9 8.9C16.5 6.9 19.1 4.6 23.4 3.2C27.7 1.7 34.6 0.2 39.9 0.0ZM36.7 14.6C33.2 15.5 27.6 17.8 24.7 20.3C21.7 22.7 20.3 26.4 19.0 29.1C17.7 31.9 17.4 31.2 17.1 36.7C16.8 42.2 16.5 55.7 17.1 62.0C17.7 68.4 19.2 71.4 20.9 74.7C22.6 78.0 25.0 80.0 27.2 81.6C29.4 83.3 31.2 84.2 34.2 84.8C37.1 85.4 41.1 86.3 44.9 85.4C48.7 84.6 54.0 82.2 57.0 79.7C59.9 77.3 61.3 74.5 62.7 70.9C64.0 67.3 64.9 64.1 65.2 58.2C65.5 52.3 65.3 41.0 64.6 35.4C63.8 29.9 62.3 27.5 60.8 24.7C59.2 21.8 57.6 20.0 55.1 18.4C52.5 16.7 48.6 15.2 45.6 14.6C42.5 13.9 40.2 13.6 36.7 14.6Z',
    'M489.2 0.0L503.8 0.0L503.8 36.7L513.3 29.1C516.5 28.8 527.4 26.9 532.3 27.2C537.1 27.5 539.3 29.0 542.4 31.0C545.5 33.0 548.3 35.0 550.6 39.2C553.0 43.5 555.5 50.5 556.3 56.3C557.2 62.1 556.5 69.0 555.7 74.1C554.9 79.1 553.5 83.1 551.3 86.7C549.1 90.3 545.5 93.5 542.4 95.6C539.3 97.7 536.6 98.7 532.9 99.4C529.2 100.0 523.6 99.8 520.3 99.4C516.9 98.9 515.5 98.6 512.7 96.8C509.8 95.0 504.7 90.0 503.2 88.6L502.5 98.1L488.6 98.1L489.2 0.0ZM519.0 40.5C516.6 40.8 515.2 41.1 513.3 42.4C511.4 43.7 509.1 45.8 507.6 48.1C506.1 50.4 505.0 52.7 504.4 56.3C503.9 59.9 503.9 66.0 504.4 69.6C505.0 73.2 506.2 75.6 507.6 77.8C509.0 80.1 510.5 81.5 512.7 82.9C514.8 84.3 517.8 85.5 520.3 86.1C522.7 86.6 524.9 86.6 527.2 86.1C529.5 85.5 533.0 83.4 534.2 82.9C534.9 81.8 537.7 80.4 538.6 75.9C539.6 71.5 540.6 61.7 539.9 56.3C539.1 50.9 535.1 45.8 534.2 43.7C533.1 43.1 530.4 41.0 527.8 40.5C525.3 40.0 521.4 40.2 519.0 40.5Z',
    'M98.1 1.9L125.9 2.5L148.1 82.3L170.9 2.5L198.7 1.9L199.4 97.5L183.5 97.5L183.5 15.8L160.1 97.5L138.0 96.8L113.3 16.5L113.3 97.5L97.5 97.5L98.1 1.9Z',
    'M211.4 1.9L229.7 1.9L251.9 37.3L274.7 1.9L293.0 1.9L263.9 50.0L294.3 97.5L274.7 97.5L251.9 60.8L229.1 97.5L210.1 98.1L240.5 50.6L211.4 1.9Z',
    'M339.2 1.9L355.7 2.5L355.1 82.9L400.6 82.9L400.6 97.5L339.9 97.5L339.2 1.9Z',
    'M437.3 26.6C442.3 26.6 450.8 27.2 455.7 29.1C460.5 31.0 464.1 35.1 466.5 38.0C468.8 40.8 469.1 39.1 469.6 46.2C470.1 53.3 469.2 73.8 469.6 80.4C470.0 86.9 471.7 84.6 472.2 85.4L477.8 86.1L477.2 98.1L462.0 97.5L455.7 88.6L445.6 98.1C443.0 98.4 434.9 100.3 430.4 100.0C425.8 99.7 421.5 98.0 418.4 96.2C415.2 94.4 413.0 91.5 411.4 89.2C409.8 87.0 409.3 85.4 408.9 82.9C408.4 80.4 407.9 77.4 408.9 74.1C409.8 70.7 413.6 64.6 414.6 62.7C416.8 61.7 421.2 58.0 427.8 57.0C434.5 55.9 450.0 56.4 454.4 56.3L453.8 45.6C453.3 44.9 452.4 42.8 450.6 41.8C448.8 40.7 446.2 39.3 443.0 39.2C439.9 39.1 433.5 40.8 431.6 41.1L425.3 50.6L411.4 48.1C411.5 47.3 410.9 45.5 412.0 43.0C413.2 40.6 416.0 35.9 418.4 33.5C420.7 31.2 422.8 30.3 425.9 29.1C429.1 28.0 432.4 26.6 437.3 26.6ZM434.8 67.7C430.5 68.0 429.5 69.3 428.5 69.6L424.7 74.7L427.2 84.2C428.1 84.6 429.7 86.3 432.3 86.7C434.8 87.1 440.7 86.7 442.4 86.7L451.9 80.4L454.4 67.7C451.2 67.7 439.1 67.4 434.8 67.7Z',
];

/** Wordmark ink width when it is scaled to 100 units tall. */
const WORDMARK_WIDTH = 556.33;

/* Wordmark height, gap after the mark, and vertical nudge — all in units of
   the mark's ink height. The "exact" row is measured off the source artwork. */
const VARIANTS = {
    exact: { height: 18.68, gap: 15.72, dy: 2.13 },
    compact: { height: 44.0, gap: 12.0, dy: 1.5 },
};

export type OmxLockupProps = {
    className?: string;
    variant?: keyof typeof VARIANTS;
    /** Accessible name. Omit for decorative instances. */
    title?: string;
};

export const OmxLockup = ({
    className = 'h-9 w-auto',
    variant = 'compact',
    title,
}: OmxLockupProps) => {
    const { height, gap, dy } = VARIANTS[variant];
    const x = MARK_WIDTH + gap;
    const scale = height / 100;

    return (
        <svg
            viewBox={`0 0 ${x + WORDMARK_WIDTH * scale} 100`}
            className={className}
            role={title ? 'img' : 'presentation'}
            aria-label={title}
            aria-hidden={title ? undefined : true}
        >
            <g fill="currentColor" fillRule="evenodd">
                {MARK_PATHS.map((d, i) => (
                    <path key={`m${i}`} d={d} />
                ))}
                <g transform={`translate(${x} ${(100 - height) / 2 + dy}) scale(${scale})`}>
                    {WORDMARK_PATHS.map((d, i) => (
                        <path key={`w${i}`} d={d} />
                    ))}
                </g>
            </g>
        </svg>
    );
};
