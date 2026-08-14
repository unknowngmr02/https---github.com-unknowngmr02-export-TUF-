# Illustration Reference

Reference build: **`Trigonometry/q20/index.html`** (approved). Every value below is read
straight out of that file. When building a new question's illustration, copy these
conventions rather than re-inventing them.

This file covers the ILLUSTRATION only (the inline SVG figure in Phase 1 and its pinned
Phase 2 copy). Cards, stack, options, and timeline tail are covered by `README.md` /
`design.md`. Topic-specific bug fixes stay in `<Topic>/penelty.txt`, which still must be
read before every build.

---

## 1. Canvas contract

| Thing | Full-size (Phase 1) | Pinned (Phase 2+) |
|---|---|---|
| `viewBox` | `0 0 580 500` | `0 0 580 500` (IDENTICAL) |
| rendered `width` x `height` | `1005` x `866` | `500` x `431` |
| scale factor (rendered / viewBox) | **1.733** | **0.862** |
| wrapper | `left:50%; top:230px; transform:translateX(-50%)` | `left:230px; top:50px; width:1400px; height:450px; display:flex; align-items:center; justify-content:center` |
| `overflow` | `visible` on the `<svg>` | `visible` on the `<svg>` |

Rules:

- The pinned copy is an **exact coordinate copy**: same `viewBox`, same every internal
  number. Only the outer `width`/`height` shrink, plus slightly thinner strokes (table 4).
  Never redraw it smaller by hand.
- Keep the wrapper aspect ratio equal to the viewBox aspect (580/500 = 1.16). `1005/866`
  and `500/431` both equal 1.16. If you change one dimension, recompute the other.
- **Do not use a `gsap.set(..., {scale, x, y})` hack to fix a mis-sized pinned icon.**
  Earlier questions (q17) did this; q20 replaced it by sizing the pinned wrapper and the
  `<svg>` render size correctly. Size it properly instead of transforming it afterwards.

---

## 2. Colour palette

Only design-system tokens. No invented colours.

| Hex | Token | Used for |
|---|---|---|
| `#6373db` | `--primary` | ground baseline, the "adjacent" pointer arrow (line + both heads), person stick / eye outline / pupil, pole outline stroke, apex flag fill, `.fig-chip` border + text |
| `#000000` | `--text` | every measurement arrow (1.5 m, 18 m, h m) and its label, the dashed sight line (hypotenuse), the right-angle marker, `.fig-chip.role` border + text |
| `#4eb85f` | `--success` | the angle arc, and only the angle arc. Also the transient confirm-pulse recolour on a stroke when narration confirms it |
| `#FFFFFF` | `--bg` | eye ellipse fill, `.fig-chip` background |
| `none` | - | the pole/building `fill`. Outline only. Do **not** fill it with `--primary-light` |

Semantic split worth keeping:

- **Blue (`--primary`) = the physical scene.** Ground, object, observer, and the side the
  question hands you.
- **Black (`--text`) = annotation on top of the scene.** Measurements, sight line, right
  angle, role labels.
- **Green (`--success`) = the angle, and confirmation.** Never use green for a scene object.

---

## 3. Typography

Font family is always `Google Sans Flex, Inter, sans-serif` in SVG `<text>`, and
`var(--font)` inside chips.

| Element | Declared size | Effective full-size (x1.733) | Effective pinned (x0.862) |
|---|---|---|---|
| Primary measurement label (`1.5 m`) | `34` | 58.9px | 29.3px |
| Secondary measurement labels (`18 m`, `h m`) | `30` | 52.0px | 25.9px |
| `.fig-chip` (value chip, e.g. `45°`) | `24px` | 41.6px | - |
| `.fig-chip.role` (`Opposite`, `Adjacent`) | `22px` | 38.1px | - |
| `.fig-chip-pinned` (and `.role` variant) | `32px` | - | 27.6px |

Floors from `design.md`: >= 22px effective in the Phase-1 figure, >= 21px effective when
pinned. Every value above clears both. If you change a render size, re-run the effective
math before shipping.

`text-anchor` is chosen so the label never overlaps its own arrow:

- label left of a vertical arrow: `text-anchor="end"`, x = arrow_x - 7
- label right of a vertical arrow: `text-anchor="start"`, x = arrow_x + 18
- label above a horizontal arrow: `text-anchor="middle"`, y = arrow_y - 9

### Chip CSS (paste into the question's `<style>` block)

`.chip` in `design-system.css` is scoped to `.solution-card`/`.stack-card`, so figure
labels need their own rule:

```css
.fig-chip {
  display: inline-block;
  background: #FFFFFF;
  border: 2px solid var(--primary);
  color: var(--primary);
  padding: 4px 12px;
  border-radius: 8px;
  font-family: var(--font);
  font-weight: 400;
  font-size: 24px;
  line-height: 1.2;
  white-space: nowrap;
}
.fig-chip.role { border-color: #000000; color: #000000; font-size: 22px; }

.fig-chip-pinned {
  display: inline-block;
  background: #FFFFFF;
  border: 2px solid var(--primary);
  color: var(--primary);
  padding: 3px 9px;
  border-radius: 6px;
  font-family: var(--font);
  font-weight: 400;
  font-size: 32px;
  line-height: 1.2;
  white-space: nowrap;
}
.fig-chip-pinned.role { border-color: #000000; color: #000000; }
```

Chips are placed with `<foreignObject ... style="overflow:visible;opacity:0;">` wrapping a
`<div xmlns="http://www.w3.org/1999/xhtml" class="fig-chip">`. They then scale and move
with the figure through `pinFlow` automatically.

---

## 4. Stroke weights

| Element | Full-size | Pinned |
|---|---|---|
| pole / main object outline | `5` | `4` |
| ground baseline | `4` | `3` |
| adjacent pointer arrow | `3.5` | `3` |
| primary measurement arrow (1.5 m) | `3.5` | `3` |
| dashed sight line (hypotenuse) | `3.5` | `3` |
| person stick | `3.5` | `3` |
| person eye outline | `2.5` | `2` |
| secondary measurement arrows (18 m, h m) | `3` | `2.5` |
| right-angle marker | `3` | (omitted when pinned) |
| angle arc | `8` | `7` |

Everything uses `stroke-linecap="round"`. Dash patterns: `6 6` full-size, `5 5` pinned.

---

## 5. Geometry contract

Write this comment block above every figure, filled in with real numbers, before drawing
anything. This is the q20 version verbatim in structure.

```
VERTICES (defined once, reused literally everywhere):
  A = (160,310)  angle vertex (observer eye) - MUST be leftmost of the two base vertices
  B = (370,310)  right-angle vertex
  C = (370,100)  apex
  D = (370,400)  object base, on the ground
  observer ground point = (160,400)
GROUND: y = 400
RATIO CHECK:  adjacent(A-B) = 210, opposite(B-C) = 210 -> tan45 = 1 exact
ANGLE CHECK:  atan2(210,210) = 45.00deg -> --angle: 45 matches (within 1deg)
LENGTH CHECK: hyp(A-C) = sqrt(210^2 + 210^2) = 296.98 -> dasharray 297
VIEWBOX:      x[0..580], y[0..500] -> "0 0 580 500"
```

### The stylised-elevation rule (q20's key decision)

A strictly to-scale eye height would have been 23px against a 300px pole. That is
invisible. q20 draws the eye vertex **genuinely elevated 90px** above the ground instead,
and says so in the comment.

This is legal **only** because the exaggeration is confined to the offset between the
ground and the angle vertex. `adjacent` and `opposite` still measure exactly equal, so the
45deg triangle itself stays mathematically exact and the arc still passes the atan2 check.

```
pole_full(300) = eye_offset(90, stylised) + opposite(210, exact)
```

Generalised: **you may stretch a distance that is not a side of the triangle. You may never
stretch a side of the triangle.** State which one you stretched, in the comment.

The measurement bracket for a stylised distance must still terminate at the real drawn
coordinate (the 1.5 m arrow spans exactly y=400 to y=310, the true eye height), so it reads
as an aligned measurement instead of a floating decoration.

---

## 6. Component recipes

### 6.1 Double-headed measurement arrow

The workhorse. One `<g>` holding a line plus two triangle heads.

```html
<!-- vertical, head half-width 13, head length 18 -->
<g id="arrow-15" opacity="0">
  <line x1="105" y1="400" x2="105" y2="310" stroke="#000000" stroke-width="3.5" stroke-linecap="round" />
  <path d="M 92,328 L 105,310 L 118,328 Z" fill="#000000" />
  <path d="M 92,382 L 105,400 L 118,382 Z" fill="#000000" />
</g>
```

Head sizes actually used, scaled to the arrow's importance:

| Arrow | half-width | length | stroke |
|---|---|---|---|
| primary vertical (1.5 m) | 13 | 18 | 3.5 |
| object height (h m) | 10 | 15 | 3 |
| ground distance (18 m) | 9 | 15 | 3 |
| adjacent pointer (in-figure, blue) | 8 | 14 | 3.5 |

Placement:

- vertical measurement of a left-side quantity: x = vertex_x - 55
- object-height arrow: x = object_right_edge + 40
- ground-distance arrow: y = ground_y + 64, spanning exactly the true A-to-B x range

### 6.2 Angle arc

Unchanged from `penelty.txt`. The full constitution still applies: `cx`/`cy` exactly the
angle vertex, `translate(0, 2*cy)` written as the literal doubled number, `--angle` a bare
unitless number, opacity-only animation, value matching `atan2` within 1deg.

```html
<!-- r=90, C = 2*PI*90 = 565.5; cy=310 so translate = 620 -->
<circle id="angle-arc" cx="160" cy="310" r="90"
        fill="transparent" stroke="#4eb85f" stroke-width="8" stroke-linecap="round"
        transform="translate(0, 620) scale(1,-1)"
        style="--angle: 45; stroke-dasharray: calc((var(--angle) / 360) * 565.5) 565.5; opacity:0;" />
```

Radius 90 against a 210px adjacent side is a good ratio (~43%). Do not go below ~30% or the
arc reads as a dot.

### 6.3 Observer (eye on a stick)

Flat, 3 shapes, centred exactly on the angle vertex. Replaces the head-and-body figure,
which drifted off the true measurement point.

```html
<g id="person-icon" opacity="0">
  <line x1="160" y1="400" x2="160" y2="310" stroke="#6373db" stroke-width="3.5" stroke-linecap="round" />
  <ellipse cx="160" cy="310" rx="13" ry="7" fill="#FFFFFF" stroke="#6373db" stroke-width="2.5" />
  <circle cx="160" cy="310" r="3" fill="#6373db" />
</g>
```

The eye centre IS vertex A. No separate "eye dot" marker is needed.

### 6.4 Object (pole / building / tower)

Outline only, grown from the ground by animating `attr`.

```html
<rect id="pole-rect" x="357" y="400" width="26" height="0" fill="none" stroke="#6373db" stroke-width="5" />
```
```js
tl.to("#pole-rect", { attr: { height: 300, y: 100 }, duration: 0.7, ease: "power2.out" }, 8.98);
```

Width 26 against a 300 height. Optional apex marker (flag, 4-point path) at C:

```html
<path id="pole-flag" d="M 370 100 L 370 66 L 402 82 L 370 92 Z" fill="#6373db" opacity="0" />
```

### 6.5 Right-angle marker

Derived from the two real ray directions at the corner, inset 30, never hand-guessed. Check
it does not collide with the adjacent-arrow head: keep a >= 15px gap.

```html
<!-- at B=(370,310): rays -x toward A and -y toward C, inset 30 -->
<path id="right-angle" d="M 340 310 L 340 280 L 360 280" fill="none" stroke="#000000" stroke-width="3" opacity="0" />
```

---

## 7. Which labels are static vs animated

Full-size figure: everything starts at `opacity:0` and is revealed on its own narration
timestamp.

Pinned copy: the measurement labels (`1.5 m`, `h m`) and all scene geometry are **static and
always visible** (no `opacity:0`), because the pinned figure only appears after that
narration has already happened. Only the role chips (`Adjacent`, `Opposite`) start hidden,
since they are revealed later during the ratio step.

---

## 8. Animation build order

Draw in the order a person would draw it, one beat per narration phrase, every timestamp
pulled from `transcript.json`. q20's Phase 1 for reference:

```js
tl.fromTo("#person-icon", { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.6)" }, 5.78);
tl.to("#ground-line", { strokeDashoffset: 0, duration: 0.6, ease: "power2.out" }, 7.40);
tl.fromTo("#arrow-18", { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.35, ease: "back.out(1.6)" }, 8.2);
tl.fromTo("#label-18", { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.35, ease: "back.out(1.6)" }, 8.2);
tl.to("#pole-rect", { attr: { height: 300, y: 100 }, duration: 0.7, ease: "power2.out" }, 8.98);
tl.fromTo("#arrow-15", { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(1.8)" }, 9.70);
tl.fromTo("#label-15", { opacity: 0, x: -6 }, { opacity: 1, x: 0, duration: 0.35, ease: "back.out(1.6)" }, 11.0);
tl.fromTo("#arrow-adjacent", { opacity: 0, scaleX: 0.6 }, { opacity: 1, scaleX: 1, duration: 0.4, ease: "back.out(1.6)" }, 12.4);
tl.to("#right-angle", { opacity: 1, duration: 0.3 }, 13.3);
tl.to("#tri-hyp", { strokeDashoffset: 0, opacity: 1, duration: 0.7, ease: "power2.out" }, 14.58);
tl.to("#angle-arc", { opacity: 1, duration: 0.4 }, 16.5);
tl.to("#chip-45", { opacity: 1, duration: 0.35, ease: "back.out(1.6)" }, 17.58);
tl.to("#pole-flag", { opacity: 1, duration: 0.3 }, 19.36);
tl.fromTo("#arrow-h", { opacity: 0, x: 6 }, { opacity: 1, x: 0, duration: 0.35, ease: "back.out(1.6)" }, 19.36);
tl.fromTo("#label-h", { opacity: 0, x: 6 }, { opacity: 1, x: 0, duration: 0.35, ease: "back.out(1.6)" }, 19.6);
apt.emphasize(tl, "#pole-rect", 21.5);
```

Ease and duration vocabulary:

| Motion | from -> to | duration | ease |
|---|---|---|---|
| stroke draw-in (line, ground, hypotenuse) | `strokeDashoffset: len -> 0` | 0.6 to 0.7 | `power2.out` |
| object grow | `attr {height, y}` | 0.7 | `power2.out` |
| arrow pop (vertical) | `opacity 0, scale 0.7 -> 1` | 0.35 | `back.out(1.8)` |
| arrow pop (horizontal) | `opacity 0, scaleX 0.6 -> 1` | 0.4 | `back.out(1.6)` |
| label / chip pop | `opacity 0, x or y +/-6 -> 0` | 0.35 | `back.out(1.6)` |
| icon entrance | `scale 0.6 -> 1` | 0.4 | `back.out(1.6)` |
| arc, right-angle marker, flag | opacity only | 0.3 to 0.4 | default |
| re-emphasis | `apt.emphasize` | 0.3 yoyo | - |

A measurement arrow and its label enter at the same timestamp when the narration says the
value in one breath ("eighteen meters"); they split by ~0.2s when the arrow is establishing
and the label lands on the spoken number.

The angle arc is **opacity-only, always**. Never tween `--angle`.

LINK pattern into Phase 2: when a figure value enters the equation, pulse the figure element
and the equation term on the same frame.

```js
apt.emphasize(tl, "#chip-opp-pinned", 35.24);
apt.fadeIn(tl, "#chip-opp-pinned", 35.24);
tl.to("#pole-rect-pinned", { stroke: "#4eb85f", duration: 0.3, yoyo: true, repeat: 1 }, 44.14);
```

---

## 9. Pre-ship checklist

- [ ] vertex list comment written, with RATIO / ANGLE / LENGTH / VIEWBOX checks
- [ ] angle vertex is the leftmost base vertex
- [ ] arc `cx`/`cy` equal the angle vertex exactly; `translate(0, N)` where `N == 2*cy`
- [ ] `--angle` unitless, matches `atan2(opposite, adjacent)` within 1deg, opacity-only
- [ ] every `stroke-dasharray` on a draw-in line equals that line's true `sqrt(dx^2+dy^2)`, arithmetic in a trailing comment
- [ ] any stylised (not-to-scale) distance is named in the comment, and is not a side of the triangle
- [ ] right-angle marker derived from the real ray directions, >= 15px clear of the nearest arrowhead
- [ ] measurement brackets terminate at real drawn coordinates
- [ ] labels do not overlap their own arrows (check `text-anchor` and offset)
- [ ] `viewBox` covers all geometry, arrowheads, and label extents, plus 30 to 40px margin
- [ ] pinned copy is a coordinate-exact copy; only outer `width`/`height` and stroke widths differ
- [ ] pinned wrapper aspect ratio matches the viewBox aspect; no `gsap.set` scale hack
- [ ] effective font sizes recomputed: >= 22px full-size, >= 21px pinned
- [ ] every colour is a design-system token; the object is `fill="none"`; green is used only for the arc
- [ ] no gap > 3s between illustration beats during Phase 1 narration

---

## 10. Known drift in the reference file

One inconsistency survives in `q20/index.html`, recorded here so it is not copied blindly:

The sight line was nudged to end at `(360,100)` (the pole's left edge) instead of the true
apex `C = (370,100)`, but its `stroke-dasharray`/`stroke-dashoffset` still reads `297`,
which was correct for the original endpoint. True length to `(360,100)` is
`sqrt(200^2 + 210^2) = 290`, and the apparent angle becomes `atan2(210,200) = 46.4deg`.

Visually it is fine at this scale. Mathematically it breaks two checklist items above
(dasharray equals true length, arc within 1deg). For a new question, either terminate the
hypotenuse at the true apex and keep `297`, or terminate at the object edge and recompute
the dasharray to `290` and re-derive the angle.
