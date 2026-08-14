# Storyboard - Trigonometry q33 (window height, elevation + depression to a tower)

Re-synced to the final `index.html` build. Duration 126.2s (transcript), timeline end 128.2s.

## PART 1 - Narration Beat Analysis

| Beat | Time | Text | Purpose | Visual objective |
|---|---|---|---|---|
| 1 | 0.10-3.94 | "So welcome back again, it's time to solve one more problem." | Hook | Question card hero-enters lowered, rises at 3.9 |
| 2 | 4.42-9.46 | Person standing at window 10 m above ground | Establish observer | Ground draws, building grows, window marker pops, 10 m arrow+label pop |
| 3 | 9.95-13.18 | From that window, angle of elevation to tower top | Introduce elevation | Window re-emphasized; tower grows; flag pops |
| 4 | 13.84-19.96 | ...is 30 deg, and angle of depression to foot ...is 45 deg | Name both angles | Reference line, elevation sight+arc+chip(30deg), depression sight+arc+chip(45deg), right-angle marks |
| 5 | 20.38-24.12 | What do we need to find? Total height of tower | State the ask | Tower pulses, h-arrow+label pop |
| 6 | 24.56-44.84 | "A small diagram..." re-describes the same build | Reinforce | Confirm-pulses on every element named (no redraw - keeps canvas alive through the repeat) |
| 7 | 45.74-48.74 | Let horizontal distance be x | Introduce unknown | Pin to top; "x m" placeholder pops on pinned figure |
| 8 | 45.9-48.9 | (Given restated) | Recap givens | Given card: window height, both angles, find-total-height |
| 9 | 49.96-70.14 | Use the 45 deg triangle -> x = 10 m | Solve x | Step 1 card: tan45=Opp/Adj -> Opposite=10, Adjacent=x -> 1=10/x -> x=10m; LINK recolors ref-line green |
| 10 | 72.84-98.62 | Use distance to find extra height h -> h = 10/root3 m | Solve h | Step 2 card: tan30=h/10=1/root3 -> h=10/root3 m; LINK recolors tower green |
| 11 | 99.96-116.96 | Caution: h isn't total height; total = window + h | Combine | Step 3 card: total = 10 + 10/root3 m; total-height bracket pops on pinned figure |
| 12 | 117.8-126.2 | Final answer, correct option A | Reveal | Options grid, correct pulse on A |

## PART 2 - Scene-by-Scene (key timestamps, matches `index.html` GSAP calls)

**Scene 1 (0-3.9s):** `apt.heroEnterLowered` on `#q-full-card` (offsetY 180, rise 3.9), parallel serial-num tween. Continuity: opens cold on dotted-grid background.

**Scene 2 (4.6-24.68s), Phase 1 illustration build:**
- 4.6 ground-line draw-in (0.6s)
- 5.2 building-rect grows (attr height/y, 0.6s)
- 6.62 window-mark pops (back.out)
- 7.86 arrow-10m pops, 8.1 label-10m pops
- 9.95 emphasize window-mark
- 11.3 tower-rect grows to full height (0.9s)
- 12.4 tower-flag fades in
- 13.6 ref-line (horizontal construction line) fades in
- 14.2 sight-elev fades in, 14.6 arc-elev opacity in, 14.84 chip-elev pops, 15.2 right-angle-elev
- 15.8 sight-dep fades in, 16.42 arc-dep opacity in, 17.28 right-angle-dep + foot-mark pop, 18.84 chip-dep pops
- 20.56 emphasize tower-rect
- 22.48 arrow-h pops, 22.72 label-h pops, 24.68 emphasize arrow-h
Continuity: every element drawn stays on screen; nothing is removed.

**Scene 3 (27.86-43.78s), re-statement pass:** confirm-pulses only (emphasize / stroke-recolor yoyo) on arrow-10m, window-mark, sight-dep, foot-mark, arc-dep, chip-dep, sight-elev, tower-flag, arc-elev, chip-elev - one beat every 2-3s, timed to the matching re-spoken word. Continuity: same objects as Scene 2, now reacting to the recap narration instead of re-entering.

**Scene 4 (45.3s) PIN_TIME:** `apt.pinFlow` on `#q-full-card`->`#q-pinned` and `#illustration`->`#illus-pinned`; serial-num fades out. Pinned figure is a coordinate-exact copy (viewBox `0 0 580 500` unchanged, strokes thinned). "x m" placeholder pops on the pinned figure at 46.1.

**Scene 5 (45.9-49.3s) Given:** `apt.cardEnter` + `apt.textReveal` on `#card-given`: window height, both angles, find-total-height (three `.rv` lines). Morph to stack at 49.3.

**Scene 6 (51.3-72.3s) Step 1:** `apt.cardEnter` + `apt.textReveal` on `#card-step1`, word-level `.rv` spans matching transcript almost verbatim (tan 45 deg = Opposite/Adjacent -> Opposite=10m, Adjacent=x -> 1=10/x -> x=10m). LINK pulses: window-mark @59.94, label-x-pinned @64.74, and at 69.56 the pinned figure's "x m" placeholder crossfades to a green "10 m", with ref-line recolor-pulse on the same frame as the card's `x = 10 m` reveal. Morph to stack at 72.3, `line-g-1` grows.

**Scene 7 (74.1-99.6s) Step 2:** `apt.cardEnter` + `apt.textReveal` on `#card-step2` (tan30=h/10, tan30=1/root3, solve h=10/root3m). LINK pulses: label-x-solved-pinned @74.1, label-h-pinned @82.02, and at 97.08 the pinned "h m" placeholder crossfades to green "10/root3 m" with a tower-rect-pinned recolor-pulse on the same frame as the card's `h = 10/root3 m` reveal. Morph to stack at 99.6, `line-1-2` grows.

**Scene 8 (101.4-123.7s) Step 3:** `apt.cardEnter` + `apt.textReveal` on `#card-step3` - caution line ("h is NOT the total height"), then total = window + h, then numeric buildup `10 + 10/root3`. Fill beats during the 105-109 narration gap: tower-rect-pinned stroke-width pulse @105.5, emphasize label-h-solved-pinned @105.5, emphasize label-10m @109.32. Total-height bracket fades in on the pinned figure @112.38, confirmed label @116.50, re-emphasized @118.67 (restated answer - pulse only, no new reveal). Morph to stack at 123.7, `line-2-3` grows.

**Scene 9 (123.9-126.2s) Options:** `apt.recenterForOptions` on `#q-pinned` + fadeOut `#illus-pinned` at 123.9; options fade in 124.4, stagger 125.0, correct pulse (option A) 125.7.

**Scene 10 (126.8-128.2s) Outro:** `apt.fadeOut("#root > div")` at 126.8 (1.2s), `tl.set` marker at 128.2 (no content beyond).

## PART 3 - Asset List
No external assets - pure inline SVG (window building, tower, angle arcs via the `--angle` stroke-dasharray circle technique, `.fig-chip`/`.fig-chip-pinned` foreignObject chips for 30 deg/45 deg).

## PART 4 - Animation Complexity Notes
- Two angle arcs share one vertex O=(100,220): the depression arc (r=45, no transform, sweeps down/clockwise by default) and the elevation arc (r=60, `translate(0,440) scale(1,-1)`, sweeps up). Radii kept apart so the two rings don't overlap.
- Right-angle vertex Q=(280,220) sits on the tower's own near edge (colinear with tower-top C and tower-foot F), so both right-angle triangles share the same vertical line - no separate construction point needed.
- x and h are drawn as "unknown -> confirmed" pairs (`label-x` / `label-x-solved`, `label-h` / `label-h-solved`) that crossfade at the exact word the answer is spoken, both in the full-size illustration and again (LINK pattern) in the pinned copy.

## PART 5 - Master Timeline Overview
`0 -> 3.9` hero enter | `4.6 -> 24.68` diagram build | `27.86 -> 44.84` confirm pass | `45.3` PIN | `45.9 -> 49.3` Given | `51.3 -> 72.3` Step 1 (x=10m) | `74.1 -> 99.6` Step 2 (h=10/root3 m) | `101.4 -> 123.7` Step 3 (total=10+10/root3 m) | `123.9 -> 126.2` options + correct pulse | `126.8 -> 128.2` outro fade.
