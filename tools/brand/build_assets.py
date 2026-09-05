"""Regenerate every OMX Lab brand asset from the source artwork.

Run it after changing the artwork in ``source/`` or the brand colours below;
it rewrites the logo SVGs, the favicon set and the two React components in
one pass, so those never drift apart.

    python3 tools/brand/build_assets.py

The source JPEGs are flat black on a checkerboard, so a luminance threshold
gives an exact mask. The mark's facets are genuinely straight and stay
polygons; the wordmark's letterforms get corner-preserving Bezier fitting so
they stay round at any size. Both lockup variants are composed from one mark
path set and one wordmark path set, so the artwork is identical between them
-- only the relative scale and the gap differ.
"""
import argparse
import pathlib

import numpy as np
from PIL import Image, ImageDraw

import contours as T
import smooth

ROOT = pathlib.Path(__file__).resolve().parents[2]

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--src', type=pathlib.Path,
                    default=pathlib.Path(__file__).resolve().parent / 'source',
                    help='directory holding the two source JPEGs')
parser.add_argument('--out', type=pathlib.Path, default=ROOT / 'public',
                    help='where the logo and icon files are written')
parser.add_argument('--components', type=pathlib.Path,
                    default=ROOT / 'src' / 'components' / 'common',
                    help='where OmxMark.tsx and OmxLockup.tsx are written')
args = parser.parse_args()
SRC, OUT, CMP = str(args.src), str(args.out), str(args.components)

# Logo files ship in Deep Space for light grounds; the app icon is a solid
# Electric Violet tile with a Soft White mark, which is what survives 16px.
INK, TILE, GLYPH = '#0B1020', '#7C3AED', '#F8FAFC'

def poly_d(pts, prec=2):
    return 'M' + 'L'.join(f'{x:.{prec}f} {y:.{prec}f}' for x, y in pts) + 'Z'

def rings(path, eps):
    """Shapes, each a list of subpath loops (outer contour first, then holes)."""
    return [[l[:-1] if l[0] == l[-1] else l for l in group]
            for group in T.to_svg_paths(T.mask_of(path), eps)]

def bbox(shapes):
    pts = [q for g in shapes for l in g for q in l]
    xs = [q[0] for q in pts]; ys = [q[1] for q in pts]
    return min(xs), min(ys), max(xs), max(ys)

def scale_shapes(shapes, ox, oy, k):
    return [[[((x - ox) * k, (y - oy) * k) for x, y in l] for l in g] for g in shapes]

# --- mark: traced from the hi-res standalone art, straight facets kept ------
mark = rings(f'{SRC}/omx_lab.jpeg', 2.0)
mx0, my0, mx1, my1 = bbox(mark)
# Normalise so the mark's ink is exactly 100 units tall, x origin at its left.
K = 100.0 / (my1 - my0)
mark_n = scale_shapes(mark, mx0, my0, K)
MARK_W = (mx1 - mx0) * K
mark_d = [''.join(poly_d(l) for l in g) for g in mark_n]

# --- wordmark: letterforms lifted out of the lockup art, smoothed ----------
lock = rings(f'{SRC}/omx_lab_textual_logo.jpeg', 2.2)
def left_of(g):
    return min(q[0] for l in g for q in l)
lmx0, lmy0, lmx1, lmy1 = bbox([g for g in lock if left_of(g) < 1000])
word = [g for g in lock if left_of(g) >= 1000]
wx0, wy0, wx1, wy1 = bbox(word)
# Normalise the wordmark to 100 units tall so a variant can scale it freely.
WK = 100.0 / (wy1 - wy0)
word_n = scale_shapes(word, wx0, wy0, WK)
WORD_W = (wx1 - wx0) * WK
word_d = [''.join(smooth.smooth_path(l) for l in g) for g in word_n]

# Proportions of the supplied lockup, expressed against the mark's ink height.
MARK_H_SRC = lmy1 - lmy0
EXACT_WORD_H = (wy1 - wy0) / MARK_H_SRC * 100
EXACT_GAP = (wx0 - lmx1) / MARK_H_SRC * 100
EXACT_DY = ((wy0 + wy1) / 2 - (lmy0 + lmy1) / 2) / MARK_H_SRC * 100

# The compact lockup keeps the same artwork but lifts the wordmark to a
# cap height that stays legible beside 14px navigation links.
COMPACT_WORD_H, COMPACT_GAP, COMPACT_DY = 44.0, 12.0, 1.5

def layout(word_h, gap, dy):
    """viewBox and wordmark transform for a variant, in mark-height units."""
    x = MARK_W + gap
    w = x + WORD_W * word_h / 100
    return w, x, (100 - word_h) / 2 + dy, word_h / 100

def svg_file(word_h, gap, dy, fill):
    w, wx, wy, s = layout(word_h, gap, dy)
    return ('<svg xmlns="http://www.w3.org/2000/svg" '
            f'viewBox="0 0 {w:.2f} 100">'
            f'<g fill="{fill}" fill-rule="evenodd">'
            + ''.join(f'<path d="{d}"/>' for d in mark_d)
            + f'<g transform="translate({wx:.2f} {wy:.2f}) scale({s:.5f})">'
            + ''.join(f'<path d="{d}"/>' for d in word_d)
            + '</g></g></svg>\n')

open(f'{OUT}/logo-mark.svg', 'w').write(
    '<svg xmlns="http://www.w3.org/2000/svg" '
    f'viewBox="0 0 {MARK_W:.2f} 100"><g fill="{INK}" fill-rule="evenodd">'
    + ''.join(f'<path d="{d}"/>' for d in mark_d) + '</g></svg>\n')
open(f'{OUT}/logo-lockup.svg', 'w').write(
    svg_file(EXACT_WORD_H, EXACT_GAP, EXACT_DY, INK))
open(f'{OUT}/logo-lockup-compact.svg', 'w').write(
    svg_file(COMPACT_WORD_H, COMPACT_GAP, COMPACT_DY, INK))

# --- favicon.svg: navy tile keeps the silhouette legible at 16px ------------
sc, padx = 0.74, (100 - 0.74 * MARK_W) / 2
tiled = [[[(x * sc + padx, y * sc + 13.0) for x, y in l] for l in g] for g in mark_n]
open(f'{OUT}/favicon.svg', 'w').write(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">'
    f'<rect width="100" height="100" rx="18" fill="{TILE}"/>'
    f'<g fill="{GLYPH}" fill-rule="evenodd">'
    + ''.join('<path d="' + ''.join(poly_d(l) for l in g) + '"/>' for g in tiled) + '</g></svg>\n')

# --- raster icons -----------------------------------------------------------
# Below ~40px the mark's four concentric bands blur into a blob, so the small
# sizes draw only the outer arm — MARK_PATHS[1] plus its two tails.
OUTER_ARM = (0, 1, 4)

def render(size, ss=8, radius=0.18, pad=0.13, subset=None):
    S = size * ss
    tile = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    ImageDraw.Draw(tile).rounded_rectangle([0, 0, S - 1, S - 1],
                                           radius=int(S * radius), fill=TILE + 'ff')
    k = S * (1 - 2 * pad) / 100.0
    ox, oy = (S - MARK_W * k) / 2, S * pad
    shape = np.zeros((S, S), bool)
    for i in (subset if subset is not None else range(len(mark_n))):
        for loop in mark_n[i]:
            layer = Image.new('1', (S, S), 0)
            ImageDraw.Draw(layer).polygon([(x * k + ox, y * k + oy) for x, y in loop],
                                          fill=1)
            shape ^= np.asarray(layer, bool)
    tile.paste(Image.new('RGBA', (S, S), GLYPH + 'ff'), (0, 0),
               Image.fromarray((shape * 255).astype('uint8')))
    return tile.resize((size, size), Image.LANCZOS)

def icon(size, ss=8, radius=0.18, pad=0.13):
    """Small sizes get the simplified arm; large ones get the whole mark."""
    if size < 40:
        return render(size, ss=16, radius=0.16, pad=0.05, subset=OUTER_ARM)
    return render(size, ss=ss, radius=radius, pad=pad)

for n in (16, 32, 48):
    icon(n, ss=16, radius=0.16, pad=0.10).save(f'{OUT}/favicon-{n}.png')
render(180, radius=0.0, pad=0.16).save(f'{OUT}/apple-touch-icon.png')
render(192).save(f'{OUT}/icon-192.png')
render(512).save(f'{OUT}/icon-512.png')
# .ico carries its own 16/32/48, so build each at the right level of detail
# and pack them by hand -- Pillow's ICO writer only downscales one source.
def write_ico(path, images):
    import struct, io
    blobs = []
    for im in images:
        b = io.BytesIO(); im.save(b, 'PNG'); blobs.append((im.width, b.getvalue()))
    head = struct.pack('<HHH', 0, 1, len(blobs))
    offset = 6 + 16 * len(blobs)
    entries, data = b'', b''
    for w, blob in blobs:
        entries += struct.pack('<BBBBHHII', w % 256, w % 256, 0, 0, 1, 32,
                               len(blob), offset)
        offset += len(blob); data += blob
    open(path, 'wb').write(head + entries + data)

write_ico(f'{OUT}/favicon.ico',
          [icon(16), icon(32), icon(48, ss=16, radius=0.16, pad=0.10)])

# --- React components -------------------------------------------------------
def arr(name, ds):
    return f'const {name} = [\n' + ',\n'.join(f"    '{d}'" for d in ds) + ',\n];\n'

open(f'{CMP}/OmxMark.tsx', 'w').write(f'''/**
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

{arr('MARK_PATHS', mark_d)}
export {{ MARK_PATHS }};

/** Width of the mark's ink, in the same units as its 100-unit height. */
export const MARK_WIDTH = {MARK_W:.2f};

/* Rings bloom from the innermost outwards when animated. Index order matches
   MARK_PATHS: [top tail, outer ring, middle ring, inner ring, bottom tail]. */
const BLOOM_DELAY = [0.24, 0.16, 0.08, 0, 0.24];

export type OmxMarkProps = {{
    className?: string;
    /** Assemble the rings on mount instead of appearing all at once. */
    animated?: boolean;
    /** Accessible name. Omit for decorative instances. */
    title?: string;
}};

export const OmxMark = ({{
    className = 'w-full h-full',
    animated = false,
    title,
}}: OmxMarkProps) => (
    <svg
        viewBox={{`0 0 ${{MARK_WIDTH}} 100`}}
        className={{className}}
        role={{title ? 'img' : 'presentation'}}
        aria-label={{title}}
        aria-hidden={{title ? undefined : true}}
    >
        <g fill="currentColor" fillRule="evenodd">
            {{MARK_PATHS.map((d, i) => (
                <path
                    key={{i}}
                    d={{d}}
                    className={{animated ? 'omx-mark-piece' : undefined}}
                    style={{animated ? {{ animationDelay: `${{BLOOM_DELAY[i]}}s` }} : undefined}}
                />
            ))}}
        </g>
    </svg>
);
''')

open(f'{CMP}/OmxLockup.tsx', 'w').write(f'''import {{ MARK_PATHS, MARK_WIDTH }} from '@/components/common/OmxMark';

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

{arr('WORDMARK_PATHS', word_d)}
/** Wordmark ink width when it is scaled to 100 units tall. */
const WORDMARK_WIDTH = {WORD_W:.2f};

/* Wordmark height, gap after the mark, and vertical nudge — all in units of
   the mark's ink height. The "exact" row is measured off the source artwork. */
const VARIANTS = {{
    exact: {{ height: {EXACT_WORD_H:.2f}, gap: {EXACT_GAP:.2f}, dy: {EXACT_DY:.2f} }},
    compact: {{ height: {COMPACT_WORD_H}, gap: {COMPACT_GAP}, dy: {COMPACT_DY} }},
}};

export type OmxLockupProps = {{
    className?: string;
    variant?: keyof typeof VARIANTS;
    /** Accessible name. Omit for decorative instances. */
    title?: string;
}};

export const OmxLockup = ({{
    className = 'h-9 w-auto',
    variant = 'compact',
    title,
}}: OmxLockupProps) => {{
    const {{ height, gap, dy }} = VARIANTS[variant];
    const x = MARK_WIDTH + gap;
    const scale = height / 100;

    return (
        <svg
            viewBox={{`0 0 ${{x + WORDMARK_WIDTH * scale}} 100`}}
            className={{className}}
            role={{title ? 'img' : 'presentation'}}
            aria-label={{title}}
            aria-hidden={{title ? undefined : true}}
        >
            <g fill="currentColor" fillRule="evenodd">
                {{MARK_PATHS.map((d, i) => (
                    <path key={{`m${{i}}`}} d={{d}} />
                ))}}
                <g transform={{`translate(${{x}} ${{(100 - height) / 2 + dy}}) scale(${{scale}})`}}>
                    {{WORDMARK_PATHS.map((d, i) => (
                        <path key={{`w${{i}}`}} d={{d}} />
                    ))}}
                </g>
            </g>
        </svg>
    );
}};
''')

print(f'mark  w={MARK_W:.2f} paths={len(mark_d)} chars={sum(map(len, mark_d))}')
print(f'word  w={WORD_W:.2f} paths={len(word_d)} chars={sum(map(len, word_d))}')
print(f'exact  h={EXACT_WORD_H:.2f} gap={EXACT_GAP:.2f} dy={EXACT_DY:.2f} '
      f'-> viewBox w={layout(EXACT_WORD_H, EXACT_GAP, EXACT_DY)[0]:.2f}')
print(f'compact                          '
      f'-> viewBox w={layout(COMPACT_WORD_H, COMPACT_GAP, COMPACT_DY)[0]:.2f}')
