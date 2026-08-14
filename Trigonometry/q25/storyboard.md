# Storyboard - Trigonometry q25 (tan θ = 3/4, find sin θ + cos θ)

Narration duration: 72.479s. All timestamps below are synced to the final `index.html`.

## PART 1 - Narration Beat Analysis

| Beat | Time | Narration | Purpose | Visual objective |
|---|---|---|---|---|
| 1 | 0.1-2.84 | "So welcome back again. It's time to solve one more problem." | Hook | Question card + serial badge rise in |
| 2 | 3.32-6.78 | "...tan theta is equal to three by four," | State given ratio | Growing equation: `tan θ =` |
| 3 | 7.26-9.54 | "...we need to find sine theta plus cos theta." | State goal | `Find: sin θ + cos θ` line fades in |
| 4 | 10.02-11.24 | "What does this mean in simple words?" | Rhetorical bridge | Re-emphasize `tan θ` |
| 5 | 11.66-15.10 | "Tan theta tells us the ratio of opposite side to adjacent side." | Define tan | `Opposite/Adjacent` fraction fades in |
| 6 | 15.64-17.74 | "So if tan theta is equal to three by four," | Recap | Re-emphasize fraction, `= 3/4` term appears |
| 7 | 18.24-23.52 | "...right-angled triangle where opposite side is three and adjacent side is four." | Build the figure | Triangle sides draw in, chips pop, LINK to equation |
| 8 | 23.96-28.32 | "A three-four right triangle immediately reminds us of one famous triangle," | Foreshadow 3-4-5 | Triangle fill wash + pulse |
| 9 | 28.70-30.18 | "the three-four-five triangle." | Reveal hypotenuse value | `Hypotenuse = 5` chip pops |
| 10 | 30.50-32.28 | "So the hypotenuse will be five." | Confirm | Hyp side + chip flash green |
| 11 | 32.64-33.64 | "Got it? Perfect." | Close Phase 1 | Whole triangle pulse, then pin glide |
| 12 | 34.44-39.84 | "Now that we know all three sides, finding sine theta and cos theta becomes very easy." | Transition to solving | Given card recap (Opposite/Adjacent/Hyp/Find) |
| 13 | 40.36-43.84 | "Sine theta means opposite side divided by hypotenuse." | Define sin | Step 1 card: `sin θ = Opposite/Hypotenuse` |
| 14 | 44.24-50.28 | "So sine theta is equal to three by five, and cos theta means adjacent side divided by hypotenuse." | sin value + define cos | Step 1 result `3/5`; Step 2 card opens |
| 15 | 50.64-52.88 | "So cos theta is equal to four by five." | cos value | Step 2 result `4/5` |
| 16 | 53.28-55.62 | "Now these values will help us find the required answer." | Bridge | Pulse the two completed stack results |
| 17 | 56.10-60.64 | "We need sine theta plus cos theta, so three by five plus four by five." | Set up the sum | Step 3 card: `sin θ + cos θ = 3/5 + 4/5` |
| 18 | 61.04-64.28 | "Since the denominators are the same, we simply add the numerators." | Explain the arithmetic | Line-level reveal, no new figure |
| 19 | 64.70-66.10 | "This becomes seven by five." | Final value | `= 7/5` (ans) reveals |
| 20 | 66.54-67.32 | "Done and dusted." | Close solving | Step 3 emphasize -> morph to stack |
| 21 | 68.12-72.48 | "Hence, the final answer will be seven by five. So the correct option is A." | Reveal answer | Options grid stagger, correct pulse on A |

## PART 2 - Scene-by-Scene Storyboard

### Scene 1 - Question Reveal (0-2.9s)
- **Layout:** Question card centered top (`heroEnterLowered`, offset 180px, rises at 2.9s), serial badge "Q" pops in tandem at 0.8s.
- **On-screen:** `q-full-card` with "In a 3-4-5 right-triangle setup where tan θ = 3/4, calculate sin θ + cos θ." Numbers in `--primary`.
- **Animation:** `apt.heroEnterLowered`, parallel serial-num tween.
- **Continuity:** Opens cold - first scene.

### Scene 2 - Growing Equation (3.32-17.74s)
- **Layout:** Empty illustration canvas (viewBox 0 0 580 500) hosts a centered equation row above where the triangle will land (y 5-150).
- **On-screen:** `tan θ` (4.74s) `=` (5.62s) `Find: sin θ + cos θ` sub-line (7.74s), emphasize `tan θ` (10.4s), `Opposite/Adjacent` fraction (13.42s), emphasize (15.64s), `=` (16.68s), `3/4` fraction (17.08s).
- **Animation:** `apt.fadeIn`/`apt.emphasize` on each `#eq-*` span, plain opacity only.
- **Educational purpose:** Establishes tan θ = opposite/adjacent = 3/4 in words before any geometry exists, so the triangle that follows reads as a direct visualization of a ratio the viewer already has in hand.
- **Continuity:** Serial badge and question card are already at rest; this scene owns the empty canvas below them.

### Scene 3 - Triangle Build (18.24-33.64s)
- **Layout:** Right triangle A(140,340) angle vertex, B(360,340) right angle, C(360,175) apex, inside the same SVG. `viewBox="0 0 580 500"`.
- **On-screen:** Adjacent side draws in (18.24s, 0.7s), right-angle marker (18.9s), opposite side draws in (20.66s), `Opposite = 3` chip pops + LINK flashes the equation's `3` (21.54s), hypotenuse draws in (22.0s), angle arc + `θ` chip (23.0-23.35s), `Adjacent = 4` chip pops + LINK flashes equation's `4` (23.28s), triangle fill wash (23.7s), equation row fades out (23.9s) now that the figure carries the same information, fill-wash pulse for "famous triangle" (25.32s), `Hypotenuse = 5` chip pops (28.86s), hypotenuse side + chip flash green to confirm (30.72s), whole-triangle pulse on "Got it? Perfect." (32.64s).
- **Animation:** `strokeDashoffset` draw-ins (`power2.out`), `back.out(1.6)` chip pops, `apt.emphasize`, transient green recolor-pulse per the palette's confirm convention.
- **Educational purpose:** The 3-4-5 triangle is derived, not asserted - every side is drawn to its exact scaled length (55x the 3-4-5 ratio) and the angle arc is computed via atan2, matching the geometry pre-flight checklist.
- **Continuity:** Directly follows Scene 2; the equation's `3` and `4` visually hand off into the triangle's own chips via the LINK color-flash before the equation retires.

### Scene 4 - Pin + Given Recap (33.9-38.5s)
- **Layout:** `apt.pinFlow` glides question + illustration into the Phase-2 slots (`PIN_TIME = 33.9`). Given card enters center at its own timestamp (`GIVEN_TIME = 34.439`).
- **On-screen:** Given card lines: `Opposite side = 3` (34.44s), `Adjacent side = 4` (35.3s), `Hypotenuse = 5` (36.1s), `Find: sin θ + cos θ` (36.9s).
- **Animation:** `apt.cardEnter` + `apt.textReveal` (line-level, paraphrased recap of what Phase 1 already established).
- **Continuity:** The pinned triangle is now static in the top band; Given card recaps it directly beneath.

### Scene 5 - Step 1, sin θ (40.36-46.43s)
- **Layout:** Given card morphs to stack at 38.5s (`apt.morphToStack`, 0.8s). Step 1 card enters at 40.36s.
- **On-screen:** `sin θ = Opposite/Hypotenuse` (40.36-41.18s word-level), `sin θ = 3/5` (44.42-45.68s). LINK: pinned `Opposite`/`Hypotenuse` chips emphasize at 41.18s, then flash green at 45.68s when the result lands.
- **Animation:** `apt.textReveal`, `apt.emphasize`, transient stroke/color recolor.
- **Continuity:** Given's stack card is now visible top-left with connector line `line-g-1` pending until Step 1 itself joins the stack.

### Scene 6 - Step 2, cos θ (47.5-52.8s)
- **Layout:** Step 1 morphs to stack at 46.43s, growing `line-g-1`. Step 2 card enters 47.5s.
- **On-screen:** `cos θ = Adjacent/Hypotenuse` (47.5-48.1s), `cos θ = 4/5` (50.78-52.02s). LINK: pinned `Adjacent`/`Hypotenuse` chips emphasize at 48.1s, flash green at 52.02s.
- **Continuity:** Stack column now shows G and 1; Step 2 mirrors Step 1's structure exactly (parallel construction reinforces the sin/cos symmetry).

### Scene 7 - Bridge + Step 3, the sum (52.8-66.6s)
- **Layout:** Step 2 morphs to stack at 52.8s. Bridge pulse on both completed stack results at 54.5s fills the narration's transitional line. Step 3 card enters 56.099s.
- **On-screen:** `sin θ + cos θ` (56.46-57.88s), `= 3/5 + 4/5` (58.62-59.92s), `Same denominator, add numerators` (61.04s), `= 7/5` (64.7-65.26s, `.ans`), final emphasize pulse on the answer (65.6s).
- **Animation:** `apt.textReveal`, `apt.emphasize` (bridge + answer), `apt.morphToStack` at 66.6s (`RECENTER_TIME`) exactly as "Done and dusted" begins.
- **Continuity:** This is the longest active card (~10.5s); internal beats every 1-3.7s keep it from ever sitting idle, per the 3-second law.

### Scene 8 - Options Reveal (66.6-72.48s)
- **Layout:** Illustration fades out and pinned question recenters (`apt.recenterForOptions`) at 66.6s, same moment Step 3 joins the stack. Options grid fades in at 67.8s, staggers at 68.3s.
- **On-screen:** A) 7/5 (correct), B) 1, C) 3/5, D) 4/5.
- **Animation:** `apt.fadeIn`, `apt.optionsStagger`, `apt.correctPulse` on option A at 71.6s, landing under "...correct option is A."
- **Continuity:** Stack column (G, 1, 2, 3) and its connector lines stay fully visible and continuous through this scene, never faded.

### Scene 9 - End Fade (73.08-74.3s)
- Everything (`#root > div`) fades out together at `END_FADE_TIME = 73.079` over 1.2s. Timeline ends at `74.3`.

## PART 3 - Asset List Required
- No external assets. Pure inline SVG (right triangle) + design-system components (`.q-card`, `.solution-card`, `.stack-card`, `.chip`, `.frac`, `.opt-btn`, `.fig-chip`/`.fig-chip-pinned`).

## PART 4 - Animation Complexity Notes
- Angle arc uses the standard `--angle` CSS custom-property stroke-dasharray circle technique, unitless, opacity-only, matching `atan2(165,220) = 36.87deg` exactly (verified against `penelty.txt`'s checker script).
- Triangle is an exact 55x scale of the 3-4-5 ratio (220/165/275), so every `stroke-dasharray` is an exact computed length, not approximated.
- LINK pattern used three times: equation numerator/denominator -> triangle chips (21.54s/23.28s), triangle chips -> pinned figure chips during Step 1/Step 2 (41.18s/45.68s, 48.1s/52.02s).
- Pinned illustration is a coordinate-exact copy of the full-size figure (same viewBox, same internal numbers), only outer width/height and stroke widths shrink, per the canvas contract.

## PART 5 - Master Timeline Overview
```
0.0    Question card + serial badge rise in
3.3    Growing equation: tan θ = Opposite/Adjacent = 3/4 (pre-triangle stretch)
18.2   Triangle draws in stroke-by-stroke, chips LINK to the equation
28.9   Hypotenuse = 5 confirmed, green flash
33.9   PIN_TIME - pinFlow glide to Phase 2
34.4   GIVEN_TIME - Given card recap
38.5   Given -> stack
40.4   Step 1 (sin θ = 3/5), LINK to pinned figure
46.4   Step 1 -> stack
47.5   Step 2 (cos θ = 4/5), LINK to pinned figure
52.8   Step 2 -> stack
56.1   Step 3 (sin θ + cos θ = 7/5)
66.6   Step 3 -> stack, recenter for options
67.8   Options reveal, stagger, correct pulse on A
73.1   End fade
74.5   Timeline end
```
