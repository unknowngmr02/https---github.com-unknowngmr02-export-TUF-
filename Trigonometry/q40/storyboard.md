# Storyboard - Trigonometry Q40 (tan θ + cot θ = 10/3, find sin θ cos θ)

Voiceover duration: 102.459s. No physical object in this question - it is a pure
identity/algebra problem, so per VIDEO_BUILD_PROMPT.md Section 6 the Phase 1
illustration is a **geometric interpretation**: a labelled right triangle (P, B, H)
that stands in as the visual proof-object for the whole derivation, built while the
narrator introduces the P/B/H method, then pinned and referenced (LINK pulses) through
every algebra step.

---

## PART 1 - Narration Beat Analysis

| # | Time | Narration | Purpose | Focus | Visual objective |
|---|------|-----------|---------|-------|-------------------|
| 1 | 0.10-3.08 | "So welcome back again. It's time to solve one more problem." | Hook | Center | Question card rises into frame |
| 2 | 3.48-9.22 | "...we are given that tan theta plus cot theta is equal to ten by three" | State given | Question text | `.num` spans on the q-card pop individually as each is spoken |
| 3 | 9.78-13.92 | "...we need to find sine theta into cos theta." | State goal | Question text | goal `.num` span pops |
| 4 | 15.28-19.48 | "instead of using formulas directly, let us solve this using P, B, and H." | Method framing | Center | Illustration area primed (empty triangle skeleton begins) |
| 5 | 20.16-27.34 | "Suppose in a right triangle, perpendicular is P, base is B, and hypotenuse is H." | Build the reference object | Triangle | Base/perp/hyp stroke-draw in, right-angle marker, angle arc, P/B/H chips pop on their own word |
| 6 | 27.76-34.86 | "We know that tan theta = P/B and cot theta = B/P" | Definitions | Given card | Pin question+triangle, Given card enters with the two definitions |
| 7 | 35.26-48.62 | "So putting these into the given equation... take the LCM... P²+B² / PB = 10/3" | Substitution + LCM | Step 1 | Step 1 card grows term by term, LINK pulse on P/B chips |
| 8 | 49.08-63.56 | "important observation... Pythagoras Theorem... P²+B² = H²... H²/PB = 10/3" | Key insight | Step 2 | Step 2 card, LINK pulse on triangle hypotenuse + H chip turning green |
| 9 | 64.04-79.98 | "sine theta = P/H, cos theta = B/H... sin θ·cos θ = PB/H²" | Build target expression | Step 3 | Step 3 card, LINK pulses on P, H then B, H chips |
| 10 | 80.40-99.56 | "...reciprocal... PB/H² = 3/10... = sin θ cos θ... 3/10" | Final answer | Step 4 | Step 4 card, whole triangle pulses green on confirm |
| 11 | 100.06-102.46 | "the correct option is option D." | Reveal | Options grid | Options stagger in, D pulses green |

---

## PART 2 - Scene-by-Scene Storyboard

### Scene 1 - Question hero (0.3s - 15.28s)
- **Screen layout:** Question card centered top (`apt.heroEnterLowered`, RISE_TIME 3.4), serial badge top-left.
- **On-screen elements:** `#q-full-card` with the question text, four `.num` spans (`tan θ + cot θ`, `10/3`, `sin θ · cos θ`) individually id'd so each can pop on its own transcript word instead of arriving as one flat block.
- **Animation:** `apt.emphasize` on `#num-tanCot` at 5.42, `#num-103` at 8.66, `#num-find` at 10.36 - one pulse every ~2-3s, satisfying the 3-second law before the triangle exists.
- **Transitions:** none yet, card holds.
- **Continuity from previous scene:** opening beat, no prior scene.

### Scene 2 - Triangle build (15.28s - 27.34s)
- **Visual objective:** the right triangle (P, B, H) draws itself in stroke by stroke as the narrator names each part, becoming the object that carries the rest of the video.
- **On-screen elements:** `#illustration` SVG - base line A-B, perpendicular line B-C, hypotenuse A-C, right-angle marker at B, angle arc at A (theta), four bordered `.fig-chip`s (`θ`, `P`, `B`, `H`).
- **Animation details:**
  - 18.3 base line strokeDashoffset draw-in (0.6s)
  - 19.0 perp line draw-in (0.6s)
  - 19.6 hyp line draw-in (0.6s)
  - 20.3 right-angle marker fades in
  - 20.6 angle arc opacity-fades in (never tweens `--angle`)
  - 21.0 theta chip pops (`back.out(1.6)`)
  - 22.58 "perpendicular is P" - chip-P pops, perp line pulses to `--success` and back
  - 24.26 "base is B" - chip-B pops, base line pulses
  - 25.66 "hypotenuse is H" - chip-H pops, hyp line pulses
- **Camera:** static, single centered composition.
- **Continuity:** the question card is still resting at the top from Scene 1; the triangle grows directly beneath it in the same frame, no cut.

### Scene 3 - Pin + Given (27.8s - 35.26s)
- **PIN_TIME = 27.8** (0.46s after "H." finishes at 27.34) - `apt.pinFlow` glides the question card and the full triangle into their pinned slots together.
- **GIVEN_TIME = 27.86** - Given card enters center: `tan θ = P/B` (28.8) then `cot θ = B/P` (32.42), each line an `.rv` reveal on its own transcript word.
- **Continuity:** triangle pinned copy is a coordinate-exact shrink of the Scene 2 figure - same P/B/H chips, same arc, just smaller and thinner-stroked.

### Scene 4 - Step 1: substitute + LCM (35.26s - 49.08s)
- Given card morphs to stack (`apt.morphToStack`, 35.26).
- Step 1 card enters same time: `P/B + B/P = 10/3` (35.26) -> `P²+B² / PB = 10/3` (43.86, LCM).
- LINK: `chip-P-pinned` and `chip-B-pinned` pulse together at 35.26 as the equation names them.

### Scene 5 - Step 2: Pythagoras (49.08s - 64.04s)
- Step 1 morphs to stack (49.08), Step 2 card enters same beat (fills the "important observation" pause).
- `.rv` reveals: `P² + B² = H²` (51.94), `H²/PB = 10/3` (58.5).
- LINK: hypotenuse line on the pinned triangle recolors to `--success` and back at 51.94 exactly as "Pythagoras Theorem" is spoken; `chip-H-pinned` pulses at the same beat.
- Filler beat at 62.32 (`apt.emphasize` on the H²/PB line) covers the "what do we have to find?" narration gap.

### Scene 6 - Step 3: sin·cos in P/B/H (64.04s - 80.4s)
- Step 2 morphs to stack (64.04), Step 3 card enters.
- `.rv` reveals: `sin θ = P/H` (67.02), `cos θ = B/H` (71.56), `sin θ·cos θ = PB/H²` (75.42).
- LINK: `chip-P-pinned` + `chip-H-pinned` pulse at 67.02; `chip-B-pinned` + `chip-H-pinned` pulse at 71.56.

### Scene 7 - Step 4: reciprocal, final answer (80.4s - 99.9s)
- Step 3 morphs to stack (80.4), Step 4 card enters.
- `.rv` reveals: `H²/PB = 10/3` (80.4, recap), `PB/H² = 3/10` (86.04, reciprocal), `= sin θ cos θ` (90.6), `sin θ · cos θ = 3/10` (95.8, answer, `.ans`).
- LINK: the entire pinned triangle (all three sides + arc) pulses `--success` together at 90.6, the moment the narrator says "this is exactly sin theta cos theta" - the geometric object visibly confirms the algebra.

### Scene 8 - Options reveal (99.9s - 102.459s)
- Step 4 morphs to stack (99.9), triangle fades out, question recenters (`apt.recenterForOptions`).
- Options grid fades in (100.3), stagger (100.7), option D correct-pulses at 101.8 exactly on the word "option" (D.).
- END_FADE_TIME 103.059, TIMELINE_END 104.459.

---

## PART 3 - Asset List Required

None external. Entire illustration is hand-authored inline SVG (right triangle, angle arc,
right-angle marker, four `.fig-chip` labels via `foreignObject`). No image assets beyond
the shared `logo.png` / `serial-num-badge.svg` from `_template/assets/`.

---

## PART 4 - Animation Complexity Notes

- Triangle geometry: A=(150,470) angle vertex (leftmost), B=(350,470) right-angle vertex,
  C=(350,302) apex. adjacent=200, opposite=168, tan(angle)=0.84 -> 40.03deg -> `--angle:40`.
  hyp = sqrt(200²+168²) = 261.20.
- All strokes kept thin/sleek per standing note: base/perp/hyp = 3 full-size (2 pinned),
  right-angle marker = 2.5 (omitted pinned), angle arc = 6 full-size (4.5 pinned).
- Right-angle marker at B derived directly from the two real rays (-x toward A, -y toward
  C), inset 22px: `M 328 470 L 328 448 L 350 448` - verified against B's real coordinates,
  no arbitrary x-shift.
- No numeric side lengths are ever assigned (P, B, H stay symbolic throughout - this is an
  identity, not a numeric triangle), so no result chip with a computed value is needed; the
  "confirm" beat is a color pulse on the whole triangle instead.
- Two long-narration stretches (Step 2's Pythagoras explanation, Step 4's reciprocal
  explanation) are filled with `apt.emphasize` beats on the currently-relevant equation line
  and matching pinned-chip pulses so no region sits static past 3s.

---

## PART 5 - Master Timeline Overview

```
0.0    background + audio
0.3    q-full-card rises (heroEnterLowered, RISE_TIME 3.4)
0.8    serial-num pop
5.42   num-tanCot pulse
8.66   num-103 pulse
10.36  num-find pulse
18.3   triangle base draw-in
19.0   triangle perp draw-in
19.6   triangle hyp draw-in
20.3   right-angle marker
20.6   angle arc fade-in
21.0   chip-theta pop
22.58  chip-P pop + perp pulse
24.26  chip-B pop + base pulse
25.66  chip-H pop + hyp pulse
27.8   PIN_TIME - pinFlow (question + triangle)
27.86  GIVEN_TIME - Given card enters
35.26  Given -> stack, Step 1 enters
49.08  Step 1 -> stack, Step 2 enters
64.04  Step 2 -> stack, Step 3 enters
80.4   Step 3 -> stack, Step 4 enters
99.9   Step 4 -> stack, RECENTER_TIME, triangle fades
100.3  options-reveal fade in
100.7  options stagger
101.8  correct pulse (option D)
103.059 END_FADE_TIME (NARR_END 102.459 + 0.6)
104.459 tl.set marker - nothing beyond this
```
