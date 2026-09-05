"""Turn a traced polygon into a path that keeps hard corners but curves the rest.

Corners are vertices where the turn angle exceeds a threshold; runs between
them are fitted with a Catmull-Rom spline converted to cubic Beziers. This gets
the letterforms round again at a fraction of the vertex count.
"""
import numpy as np

def turn_angles(p):
    n = len(p)
    prev = p - np.roll(p, 1, axis=0)
    nxt = np.roll(p, -1, axis=0) - p
    a = np.arctan2(nxt[:, 1], nxt[:, 0]) - np.arctan2(prev[:, 1], prev[:, 0])
    return np.abs((a + np.pi) % (2 * np.pi) - np.pi)

def smooth_path(pts, corner_deg=32.0, tension=0.5, prec=1):
    """pts: closed ring without the repeated last point."""
    p = np.asarray(pts, float)
    n = len(p)
    if n < 4:
        return 'M' + 'L'.join(f'{x:.{prec}f} {y:.{prec}f}' for x, y in p) + 'Z'
    corner = turn_angles(p) > np.deg2rad(corner_deg)
    out = [f'M{p[0][0]:.{prec}f} {p[0][1]:.{prec}f}']
    for i in range(n):
        a, b = p[i], p[(i + 1) % n]
        # a straight run is one whose endpoints are both corners
        if corner[i] and corner[(i + 1) % n]:
            out.append(f'L{b[0]:.{prec}f} {b[1]:.{prec}f}')
            continue
        p0 = p[(i - 1) % n] if not corner[i] else a
        p3 = p[(i + 2) % n] if not corner[(i + 1) % n] else b
        c1 = a + (b - p0) * (tension / 3)
        c2 = b - (p3 - a) * (tension / 3)
        out.append(f'C{c1[0]:.{prec}f} {c1[1]:.{prec}f} {c2[0]:.{prec}f} {c2[1]:.{prec}f} '
                   f'{b[0]:.{prec}f} {b[1]:.{prec}f}')
    return ''.join(out) + 'Z'
