# Brand asset generator

Every logo file, favicon and logo React component in this repo is generated
from the two JPEGs in `source/`. Nothing here is hand-drawn, and nothing
downstream should be hand-edited — rerun the generator instead, so the SVGs,
the icon set and the components cannot drift apart.

```sh
pip install -r tools/brand/requirements.txt
npm run brand:assets          # or: python3 tools/brand/build_assets.py
```

## What it writes

| Output | Notes |
| --- | --- |
| `public/logo-mark.svg` | mark alone, Deep Space fill |
| `public/logo-lockup.svg` | the supplied lockup proportions |
| `public/logo-lockup-compact.svg` | wordmark lifted for tight spots |
| `public/favicon.svg` | violet tile, Soft White mark |
| `public/favicon.ico` | packed by hand with 16/32/48 |
| `public/favicon-{16,32,48}.png` | |
| `public/apple-touch-icon.png` | 180px, square |
| `public/icon-{192,512}.png` | |
| `src/components/common/OmxMark.tsx` | traced mark, `currentColor` |
| `src/components/common/OmxLockup.tsx` | mark + wordmark, both variants |

## How it works

The artwork is flat black on a checkerboard, so a luminance threshold at 128
gives an exact mask — no alpha channel needed, and no raster ever ships.

`contours.py` labels the connected components of that mask, walks each one's
boundary edges on the pixel lattice, and simplifies the resulting loops with
Douglas–Peucker. Loops are grouped **per component**, because `fill-rule`
applies within a single SVG `<path>` and not between sibling paths — split the
outer contour from its holes and the counters in `O`, `a` and `b` fill solid.

The mark's facets are genuinely straight, so it stays polygons at `eps=2.0`
(99 points total, an exact trace). The wordmark is curved, so `smooth.py`
detects corners by turn angle and fits Catmull-Rom-derived cubics to the runs
between them — round letterforms at a fraction of the vertex count.

Both lockup variants compose one mark path set with one wordmark path set, so
the two differ only in the wordmark's scale and the gap after the mark. The
`exact` numbers are measured off the source artwork; `compact` lifts the
wordmark to a cap height that still reads beside 14px navigation links.

## Editing

- **New artwork:** replace the files in `source/`, keeping the names.
- **New colours:** `INK`, `TILE` and `GLYPH` near the top of `build_assets.py`.
- **Lockup proportions:** `COMPACT_WORD_H`, `COMPACT_GAP`, `COMPACT_DY`.
- **Icon detail:** below ~40px the mark's four concentric bands blur into a
  blob, so those sizes draw only the outer arm (`OUTER_ARM`). Raise the
  threshold in `icon()` if the artwork ever gets simpler.

Rerunning on unchanged input is a no-op — the output is byte-stable, so a
dirty `git status` after a run means the artwork or the settings changed.
