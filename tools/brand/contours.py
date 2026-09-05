"""Trace the brand artwork into clean SVG path geometry.

The artwork is flat black on a checkerboard, so a luminance threshold gives an
exact mask. Contours come from a boundary walk on the pixel grid, then get
Douglas-Peucker simplified -- the logo is all straight facets, so this recovers
the original polygon corners almost exactly.
"""
import sys, numpy as np
from PIL import Image
from collections import deque

def mask_of(path):
    a = np.asarray(Image.open(path).convert('L')).astype(int)
    return a < 128

def components(mask):
    """4-connected labelling of the foreground."""
    h, w = mask.shape
    lab = np.zeros((h, w), np.int32)
    n = 0
    for sy in range(h):
        for sx in range(w):
            if mask[sy, sx] and not lab[sy, sx]:
                n += 1
                q = deque([(sy, sx)]); lab[sy, sx] = n
                while q:
                    y, x = q.popleft()
                    for dy, dx in ((1,0),(-1,0),(0,1),(0,-1)):
                        ny, nx = y+dy, x+dx
                        if 0 <= ny < h and 0 <= nx < w and mask[ny, nx] and not lab[ny, nx]:
                            lab[ny, nx] = n; q.append((ny, nx))
    return lab, n

def trace_boundary(m):
    """Walk every closed edge loop of the binary region on the pixel lattice.

    Edges run between lattice points; a boundary edge is one where the pixel on
    one side is inside and the other is out. Chaining them yields both the outer
    contour and any holes.
    """
    h, w = m.shape
    p = np.zeros((h+2, w+2), bool); p[1:h+1, 1:w+1] = m
    edges = {}
    def add(a, b):
        edges.setdefault(a, []).append(b)
    H, W = p.shape
    for y in range(H):
        for x in range(W):
            if not p[y, x]:
                continue
            # directed so the inside stays on the left: gives CW outer, CCW holes
            if not (y > 0 and p[y-1, x]):   add((x, y), (x+1, y))
            if not (x+1 < W and p[y, x+1]): add((x+1, y), (x+1, y+1))
            if not (y+1 < H and p[y+1, x]): add((x+1, y+1), (x, y+1))
            if not (x > 0 and p[y, x-1]):   add((x, y+1), (x, y))
    loops = []
    while edges:
        start = next(iter(edges))
        loop = [start]; cur = start
        while True:
            nxts = edges.get(cur)
            if not nxts:
                break
            nxt = nxts.pop()
            if not nxts:
                del edges[cur]
            loop.append(nxt); cur = nxt
            if cur == start:
                break
        if len(loop) > 8:
            loops.append([(x-1, y-1) for x, y in loop])
    return loops

def rdp(pts, eps):
    if len(pts) < 3:
        return pts
    p = np.asarray(pts, float)
    keep = np.zeros(len(p), bool); keep[0] = keep[-1] = True
    stack = [(0, len(p)-1)]
    while stack:
        i, j = stack.pop()
        if j <= i+1:
            continue
        a, b = p[i], p[j]
        seg = b-a; L = np.hypot(*seg)
        if L == 0:
            d = np.hypot(*(p[i+1:j]-a).T)
        else:
            d = np.abs(np.cross(seg, p[i+1:j]-a))/L
        k = int(np.argmax(d))
        if d[k] > eps:
            k += i+1; keep[k] = True; stack += [(i, k), (k, j)]
    return [tuple(v) for v in p[keep]]

def to_svg_paths(mask, eps=2.0, min_area=200):
    """Group loops by connected component.

    A component's outer contour and its holes have to end up as subpaths of one
    SVG <path>: fill-rule applies within a single path element, not between
    sibling paths, so splitting them would fill the holes in.
    """
    lab, n = components(mask)
    out = []
    for i in range(1, n+1):
        m = lab == i
        if m.sum() < min_area:
            continue
        ys, xs = np.nonzero(m)
        sub = m[ys.min():ys.max()+1, xs.min():xs.max()+1]
        group = []
        for loop in trace_boundary(sub):
            loop = [(x+xs.min(), y+ys.min()) for x, y in loop]
            s = rdp(loop, eps)
            if len(s) > 3 and abs(area(s)) >= min_area:
                group.append(s)
        if group:
            out.append(group)
    return out

def area(p):
    x = np.array([q[0] for q in p]); y = np.array([q[1] for q in p])
    return 0.5*np.sum(x*np.roll(y, -1) - np.roll(x, -1)*y)

def fmt(loops, ox, oy, scale, prec=2):
    parts = []
    for lp in loops:
        pts = [((x-ox)*scale, (y-oy)*scale) for x, y in lp[:-1]]
        d = 'M' + ' L'.join(f'{x:.{prec}f} {y:.{prec}f}' for x, y in pts) + 'Z'
        parts.append(d)
    return ''.join(parts)
