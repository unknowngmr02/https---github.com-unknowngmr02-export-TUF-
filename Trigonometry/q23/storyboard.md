# Storyboard - Trigonometry Q23 (Building + Flagstaff, two angles of elevation)

Duration (transcript.json): **79.319s**. All timestamps below are pulled directly from `transcript.json` words/phrases.

---

## PART 1 - Narration Beat Analysis

| # | Time | Narration | Purpose | Attention | Visual objective |
|---|------|-----------|---------|-----------|-------------------|
| 1 | 0.10-4.30 | "So welcome back again, it's time to solve one more problem." | Cold open | Question card | Hero question card rises into view |
| 2 | 4.82-8.44 | "Now in this problem, a point is thirty meters away from a building." | Set the scene | Ground + observer | Observer marker pops, ground line draws, "30 m" arrow |
| 3 | 8.94-14.44 | "From that same point, the angle of elevation to the top of the building is thirty degrees," | Building angle | Building | Building rect grows, dashed sight-line 1, arc(30°), chip "30°" |
| 4 | 14.88-18.34 | "and the angle of elevation to the top of the flagstaff is sixty degrees." | Flagstaff angle | Flagstaff pole | Pole grows on roof, dashed sight-line 2, arc(60°), chip "60°" |
| 5 | 18.66-21.28 | "We need to find only the height of the flagstaff." | State the ask | Flagstaff segment | Flagstaff segment recolors to `--success`, pulses |
| 6 | 21.62-23.84 | "Let the height of the building be h meter." | Name h | Building height arrow | "h m" arrow + label pop on building |
| 7 | 24.20-26.64 | "Let the height of the flagstaff be x meter." | Name x | Flagstaff height arrow | "x m" arrow + label pop on flagstaff |
| 8 | 27.06-30.88 | "So the total height up to the top of the flagstaff will be h plus x." | Define total | Whole structure | "h" and "x" labels both emphasize together |
| 9 | 31.68-36.12 | "Using the tangent formula, tan theta is equal to opposite by adjacent." | Formula recap | Formula | Layout pins to top (PIN_TIME 31.7); Given card recaps facts (GIVEN_TIME 32.6) |
| 10 | 36.56-46.40 | "First, for the building, tan 30° = h/30. So h = 30/root3 = 10 root3 m." | Solve h | Step 1 card | tan30 = h/30 -> h = 10√3 m |
| 11 | 46.78-59.58 | "Now for the flagstaff, tan60° = (h+x)/30. So h+x = 30 root3. This is the total height." | Solve total | Step 2 card | tan60 = (h+x)/30 -> h+x = 30√3 m |
| 12 | 59.98-73.10 | "We need only the flagstaff height. x = total - building = 30root3 - 10root3 = 20 root3 m." | Solve x | Step 3 card | x = 30√3 - 10√3 = 20√3 m |
| 13 | 73.92-79.32 | "So the final answer will be 20 root3 meters. Option C is correct." | Reveal answer | Options grid | Options stagger in, C pulses green |

---

## PART 2 - Scene-by-Scene Storyboard

### Scene 1 (0-4.3s) - Cold open
SCREEN LAYOUT: centered question card, serial badge top-left, dotted grid + bottom strip.
ON-SCREEN: `#q-full-card`, `#serial-num`.
ANIMATION: `apt.heroEnterLowered` on `#q-full-card` (HERO_OFFSET_Y 180, RISE_TIME 4.3 = end of "one more problem."); badge mirrors the same lowered->rise motion, `back.out(2)` pop at 0.8s.
CONTINUITY FROM PREVIOUS SCENE: opening scene, nothing precedes it.

### Scene 2 (4.9-8.44s) - Observer + ground
VISUAL OBJECTIVE: establish the point on the ground, 30 m from the building.
ON-SCREEN: `#person-icon` (flat 2-shape marker at vertex A), `#ground-line` (draw-in), `#arrow-30`/`#label-30`.
ANIMATION: person pops (`back.out(1.6)`, 4.9s); ground line strokeDashoffset draw-in (6.08s); arrow-30 + label pop together (7.3s).
CONTINUITY: hero card has just settled at its resting slot; the illustration begins building directly beneath it in the same breath.

### Scene 3 (8.94-14.44s) - Building + 30° angle
ON-SCREEN: `#building-rect` (grows from ground), `#sight-line-1` (dashed, fades in), `#angle-arc-30`, `#chip-30`.
ANIMATION: building rect attr height 0->100 grow (10.34s, `power2.out`); sight-line-1 opacity fade (12.6s); arc-30 opacity fade (13.46s, exact -> `--angle:30`); chip-30 pop (14.0s).
CONTINUITY: ground line and observer from Scene 2 remain fully visible; the building rises directly from the ground line's right end.

### Scene 4 (14.88-18.34s) - Flagstaff + 60° angle
ON-SCREEN: `#flagstaff-rect` (grows on the building's roof), `#flag-marker`, `#sight-line-2` (dashed), `#angle-arc-60`, `#chip-60`.
ANIMATION: flagstaff rect attr height 0->200 grow (15.3s); flag marker pop (16.0s); sight-line-2 fade (16.6s); arc-60 fade (17.3s, `--angle:60`); chip-60 pop (17.8s).
CONTINUITY: the building from Scene 3 is untouched; the flagstaff visibly continues upward from the same vertical edge the building just finished growing along.

### Scene 5 (18.66-21.28s) - Naming the ask
ON-SCREEN: `#flagstaff-rect` recolor pulse.
ANIMATION: `tl.to("#flagstaff-rect", {stroke:"#4eb85f", ...yoyo})` at 18.9s - the flagstaff itself (not the building) briefly turns green, telling the viewer this is the piece being asked for.
CONTINUITY: same static figure, only a recolor pulse - no new geometry enters.

### Scene 6 (21.62-26.64s) - Naming h and x
ON-SCREEN: `#arrow-h`/`#label-h` (building height bracket), `#arrow-x`/`#label-x` (flagstaff height bracket).
ANIMATION: arrow-h + label-h pop (`back.out(1.6)`, 22.0s); arrow-x + label-x pop (24.5s).
CONTINUITY: figure unchanged; two measurement brackets stack on the right edge, terminating exactly at the real drawn coordinates (ground/roof/top).

### Scene 7 (27.06-30.88s) - Total height beat
ON-SCREEN: emphasize `#label-h` and `#label-x` together.
ANIMATION: `apt.emphasize` on both labels at 27.4s, restating "h plus x is the total height."
CONTINUITY: closes out Phase 1's illustration build - the figure is now fully labeled and will be pinned next.

### Scene 8 (31.68-36.12s) - Pin + Given recap
PIN_TIME = 31.7s: `apt.pinFlow` glides `#q-full-card` -> `#q-pinned` and `#illustration` -> `#illus-pinned` together; serial badge fades out.
GIVEN_TIME = 32.6s: `#card-given` enters center; `apt.textReveal` fires its `.rv` spans, all timestamped to when those facts were FIRST spoken in Scenes 2-5 (already resolved by 32.6s, so the card reads as fully formed on entry).
CONTINUITY: the full-size figure from Scenes 2-7 visibly shrinks and slides into its pinned slot; nothing new is drawn, only repositioned.

### Scene 9 (36.56-46.40s) - Step 1 (solve h)
`#card-given` morphs to `#stack-given` at 35.0s (`apt.morphToStack`, 0.8s).
`#card-step1` enters at 36.56s. `.rv` reveals: "tan30° = h/30" (38.18s), "h = 30/√3" (41.22s), "h = 10√3 m" (43.94s, `.ans`).
LINK: pinned building outline + `#label-h-pinned` pulse green together with the last reveal (44.2s).
CONTINUITY: Given card has just folded into the stack column on the left; Step 1 opens in the vacated center slot while the pinned figure keeps the building visible for reference.

### Scene 10 (46.78-59.58s) - Step 2 (solve total)
`#card-step1` morphs to `#stack-step1` at 45.0s; `#line-g-1` grows.
`#card-step2` enters at 46.78s. `.rv` reveals: "tan60° = (h+x)/30" (48.84s), "h+x = 30√3 m" (52.80s, `.ans`); `apt.emphasize` on the last line restating "total height" (56.28s).
LINK: pinned flagstaff outline + `#label-x-pinned` pulse (57.0s).
CONTINUITY: Step 1's stack card is now fixed in the left column with its connector line; Step 2 continues directly from the same tangent-formula pattern just used.

### Scene 11 (59.98-73.10s) - Step 3 (solve x)
`#card-step2` morphs to `#stack-step2` at 57.4s; `#line-1-2` grows.
`#card-step3` enters at 59.98s. `.rv` reveals: "x = Total - Building" (62.56s), "x = 30√3 - 10√3" (66.36s), "x = 20√3 m" (69.92s, `.ans`).
LINK: pinned flagstaff segment turns green and pulses one final time (71.0s) as the answer lands.
CONTINUITY: Step 2's result (h+x=30√3) is still visible in the stack; Step 3 visibly reuses it in its own subtraction line.

### Scene 12 (73.90-79.32s) - Options reveal
`#card-step3` morphs to `#stack-step3` at 71.1s; `#line-2-3` grows.
RECENTER_TIME = 73.9s: `apt.fadeOut` on `#illus-pinned`, `apt.recenterForOptions` on `#q-pinned`.
`#options-reveal` fades in (74.2s), `apt.optionsStagger` (74.7s), `apt.correctPulse` on option C (77.6s).
CONTINUITY: the illustration has finished its job and steps aside; the stack column stays fully visible and continuous while the options grid takes the vacated space.

### Scene 13 (79.92-81.3s) - End fade
END_FADE_TIME = 79.92 (NARR_END 79.319 + 0.6). `apt.fadeOut` on `#root > div` (1.2s). `tl.set({},{},81.3)` - nothing beyond this.

---

## PART 3 - Asset List Required

- No external SVG/PNG assets. Illustration is hand-authored inline SVG (viewBox `0 0 580 500`, per `illustration_reference.md`):
  - Ground line, observer marker (flat 2-shape: stick + ellipse eye)
  - Building: `<rect>` outline, `--primary` stroke, `--primary-light` fill, growing from height 0
  - Flagstaff: thin `<rect>` pole on the building's roof + small flag `<path>` marker
  - Two dashed sight-lines (`stroke-dasharray:"6 6"`), two angle arcs (`--angle:30` / `--angle:60`, stroke-dasharray-circle technique, both centered at the same observer vertex A)
  - Two `.fig-chip` angle labels ("30°", "60°"), two measurement brackets ("h m", "x m"), one ground-distance bracket ("30 m")
- `design-system.css`, `animations.js`, `assets/` copied from `_template/` per README Step 5B.

---

## PART 4 - Animation Complexity Notes

- Two angle arcs share ONE vertex (A) but two independent radii (r=60 for 30°, r=95 for 60°) so they don't visually collide; each is its own atan2 derivation (per `penelty.txt` rule 5).
- Building and flagstaff sit on the exact same vertical edge (x=320, the near edge facing the observer) so the right-angle marker and both sight-lines land on real drawn geometry, not a centerline.
- `h` and `x` measurement brackets stack vertically on the same x-offset, terminating at the true ground(400)/roof(300)/top(100) coordinates - no invented distances.
- All two-decimal "root3" values are rendered with the `.frac`/`<span>√3</span>` glyph, never the word "root" or a bare `÷`.
- No new animation helpers introduced; every motion is `apt.*` or an inline `tl.to()`/`fromTo()` restricted to opacity/attr/stroke per the illustration cookbook.

---

## PART 5 - Master Timeline Overview

```
0.3   #q-full-card hero rise begins (lowered)                 heroEnterLowered
0.8   #serial-num pop (lowered)
4.3   RISE_TIME - card + badge rise to resting slot
4.9   #person-icon pop
6.08  #ground-line draw-in
7.3   #arrow-30 + #label-30 pop
10.34 #building-rect grows (h_px=100)
12.6  #sight-line-1 fade (dashed, 30deg)
13.46 #angle-arc-30 fade (--angle:30)
14.0  #chip-30 pop
15.3  #flagstaff-rect grows (x_px=200, total=300)
16.0  #flag-marker pop
16.6  #sight-line-2 fade (dashed, 60deg)
17.3  #angle-arc-60 fade (--angle:60)
17.8  #chip-60 pop
18.9  #flagstaff-rect confirm-pulse (green) - "find only the flagstaff"
22.0  #arrow-h + #label-h pop
24.5  #arrow-x + #label-x pop
27.4  emphasize #label-h + #label-x together (h + x = total)
PIN_TIME    31.7  pinFlow (question + illustration -> pinned)
GIVEN_TIME  32.6  card-given enters, textReveal (already-resolved facts)
35.0  Given -> stack (morphToStack)
36.56 card-step1 enters
38.18 / 41.22 / 43.94  Step 1 reveals (tan30 -> h = 10√3 m)
44.2  LINK: pinned building + label-h pulse green
45.0  Step1 -> stack (morphToStack), line-g-1 grows
46.78 card-step2 enters
48.84 / 52.80 / 56.28  Step 2 reveals (tan60 -> h+x = 30√3 m)
57.0  LINK: pinned flagstaff + label-x pulse
57.4  Step2 -> stack (morphToStack), line-1-2 grows
59.98 card-step3 enters
62.56 / 66.36 / 69.92  Step 3 reveals (x = 30√3-10√3 = 20√3 m)
71.0  LINK: pinned flagstaff segment final confirm pulse
71.1  Step3 -> stack (morphToStack), line-2-3 grows
73.9  RECENTER_TIME - illus-pinned fades out, q-pinned recenters
74.2  options-reveal fadeIn
74.7  optionsStagger
77.6  correctPulse on option C
END_FADE_TIME 79.92  fadeOut #root > div (1.2s)
TIMELINE_END  81.3   tl.set({},{},81.3) - nothing beyond
AUDIO_DURATION 81.3
```
