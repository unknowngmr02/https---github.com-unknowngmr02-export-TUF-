# q37 Storyboard - Drone Height, Two Observers (45deg / 60deg, distance 100m)

transcript.json duration = 111.56s. All timestamps below are pulled directly from transcript.json words/phrases - none invented.

## PART 1 - Narration Beat Analysis (condensed)

| Beat | Time | Narration | Purpose | Visual objective |
|---|---|---|---|---|
| Intro | 0-3.9 | "welcome back...solve one more problem" | Hook | Question card rises in |
| Setup | 4.16-19.24 | drone flying, two people opposite sides, 45deg / 60deg, 100m apart | Establish scene | Illustration builds: ground, drone pole+icon, both observers, both sight lines/arcs, 45deg/60deg chips, 100m arrow |
| Assume h | 19.71-24.78 | "find height...assume height = h" | Name unknown | h chip pops near pole |
| Pin | 25.1 | (silent beat) | Reorganize | pinFlow to top |
| Define x,y | 25.32-31.84 | "foot lies between...distances be x and y" | Setup two unknowns | Given card L2; x-chip / y-chip pop at each base segment |
| x+y=100 | 32.36-39.54 | "x plus y equal to one hundred...full distance" | State constraint | Given card L3; LINK x-chip/y-chip pulse with the 100m arrow |
| 45deg triangle | 41.02-57.48 | tan45=h/x=1 -> h=x | Solve relation 1 | Step1 card grows term by term; LINK h-chip/x-chip pulses, arc-45 confirm |
| 60deg triangle | 58.12-75.82 | tan60=h/y=root3 -> y=h/root3 | Solve relation 2 | Step2 card grows; LINK h-chip/y-chip pulses, arc-60 confirm |
| Combine | 76.5-103.18 | substitute, h(1+1/root3)=100, h=50(3-root3) | Final answer | Step3 card grows to numeric result; LINK crossfade h-chip "h" -> "50(3-root3) m", pole confirm green |
| Recap+answer | 104.02-111.56 | "final answer...option A" | Confirm | Options reveal, correct pulse timed to "option A" |

## PART 2 - Scene-by-Scene Storyboard

### Scene 1 (0-25.1s) - Phase 1: Question + Illustration
- `apt.heroEnterLowered("#q-full-card", 180, 3.9)`; badge mirrors same rise.
- Illustration draws in order: ground line (4.3, 0.6s), pole guide dashed F-D (5.0), drone icon pops (5.8), person-P1 pops (7.0), person-P2 pops (7.6), emphasize drone (9.4), sightline-45 fades in (11.3), arc-45 fades in (12.3), chip-45 pops (12.72), sightline-60 fades in (14.0), arc-60 fades in (15.0), chip-60 pops (15.8), arrow-100 pops (17.3), label-100 pops (18.5), emphasize drone+pole (20.4), emphasize pole-guide (22.5, fills the gap before "h" is named), chip-h pops (24.72).
- Continuity: nothing before this scene; it opens the video.

### Scene 2 (25.1-40.6s) - Phase 2 opening + Given
- `PIN_TIME=25.1`: `apt.pinFlow` on q-full-card->q-pinned and illustration->illus-pinned.
- `GIVEN_TIME=25.6`: `apt.cardEnter("#card-given .solution-card")`; `apt.textReveal`.
- Given card: L1 "Height of drone = h" (25.6), L2 "Distances from foot = x, y" (28.8), L3 "x + y = 100 m" (34.5).
- Illustration: pulse pole-guide (26.7), chip-x pops (31.38), chip-y pops (31.74), LINK pulse chip-x (34.5) and chip-y (34.92) with arrow-100/label-100 pulse (36.04), emphasize arrow-100 (37.5), pulse chip-x+chip-y together (39.0).
- `GIVEN_MORPH=40.6` -> `apt.morphToStack` Given into stack.
- Continuity: the pinFlow glide is still finishing its opacity settle as Given's cardEnter begins; illustration keeps adding beats through this scene.

### Scene 3 (41.6-57.6s) - Step 1: solve h=x (45deg triangle)
- `STEP1_TIME=41.6`: cardEnter + textReveal.
- Step1 lines: "tan 45deg = h/x" (word chain 45.02-47.28), "tan 45deg = 1" (48.24), "h = x" (ans, 55.6).
- Illustration LINK beats: pulse arc-45+chip-45 (43.62), LINK pulse chip-h+chip-x (47.28), pulse arc-45 (50.9), pulse chip-h (54.24), pulse chip-h+chip-x again (52.52), confirm pulse sightline-45 green + emphasize ans (55.6, 57.26).
- `STEP1_MORPH=57.6` -> morph Step1 into stack; `apt.stackLineGrow("#line-g-1")`.
- Continuity: Given's stack card is resting in the column; Step1 enters center the instant Given's morph settle-fade completes.

### Scene 4 (58.6-76.0s) - Step 2: solve y=h/root3 (60deg triangle)
- `STEP2_TIME=58.6`: cardEnter + textReveal.
- Step2 lines: "tan 60deg = h/y" (61.54-63.64), "tan 60deg = root3" (64.7), "y = h/root3" (ans, 74.1-75.08).
- Illustration: pulse arc-60+chip-60 (60.24), LINK pulse chip-h+chip-y (63.64), pop root3 confirm pulse arc-60 (66.56), pulse chip-h+chip-y (68.28), pulse arc-60 (70.12), pulse sightline-60 (71.64), pulse chip-h (72.66), confirm pulse sightline-60 green (75.08).
- `STEP2_MORPH=76.0` -> morph into stack; `apt.stackLineGrow("#line-1-2")`.
- Continuity: the h-chip established in Step1/2 as a shared unknown carries directly into Scene 5's substitution.

### Scene 5 (76.9-103.4s) - Step 3: combine to solve h
- `STEP3_TIME=76.9`: cardEnter + textReveal (kept just after STEP2_MORPH(76.0)+0.8=76.8 completes, so Step3 never overlaps Step2's morph).
- Step3 lines: "Both x, y now in terms of h" (76.9), "x + y = 100" (81.72), "h + h/root3 = 100" (85.98), "h(1 + 1/root3) = 100" (91.98), "h = 50(3 - root3) m" (ans, 98.14).
- Illustration: pulse chip-h (78.5), pulse chip-x (81.72), pulse chip-y (82.68), pulse chip-h (84.38), pulse chip-h (88.84), pulse arc-45+arc-60 together (90.02), pulse chip-h (96.32), LINK crossfade chip-h "h" -> "50(3-root3) m" + pulse pole-guide green (98.14), pulse pole-guide again (100.4), emphasize final chip (101.46).
- `STEP3_MORPH=103.4` -> morph into stack; `apt.stackLineGrow("#line-2-3")`.
- Continuity: the numeric h resolved here is the payoff of every symbolic h-chip pulse from Scenes 2-4.

### Scene 6 (104.2-113.56s) - Phase 3: Options
- `RECENTER_TIME=104.2`: fadeOut illus-pinned, `apt.recenterForOptions`.
- `OPTIONS_TIME=104.5` fadeIn, `105.2` optionsStagger.
- Fill beats: emphasize final h-chip 106.0 and 107.5, gentle pulse on options grid 109.5.
- `CORRECT_PULSE=111.0` (spans "option A" 111.02-111.56).
- `END_FADE_TIME=112.16`, `apt.fadeOut("#root > div", 112.16, 1.2)`, `tl.set({},{},113.56)`.
- Continuity: stack column + connector lines remain visible unchanged from Scene 5 straight through to the end fade.

## PART 3 - Asset List Required
No external assets. Pure inline SVG: ground line, dashed pole guide (F-D, the shared height h), flat 2D drone icon (body + 4 rotor arms) at D, two flat observer icons (eye-on-stick) at P1/P2, two right-angle markers at the shared foot F, two dashed sight lines, two angle arcs (45deg at P1, 60deg at P2), 5 fig-chips (45deg, 60deg, h, x, y) as foreignObjects, one double-headed 100m measurement arrow along the ground.

## PART 4 - Animation Complexity Notes
- Two independent angle-arc derivations sharing no vertex: arc-45 at P1 (leftmost vertex, base ray +x, opens upward toward D) uses the standard elevation-style flip `translate(0,2*cy) scale(1,-1)`. arc-60 at P2 (rightmost vertex, base ray -x toward F) needs the base ray reversed AND the upward opening -> equivalent to both flips combined -> a single `rotate(180, cx, cy)` transform. Verified by mapping the circle's parametrised point `(cx+r*cos(t), cy+r*sin(t))` under 180deg rotation to `(cx-r*cos(t), cy-r*sin(t))`: at t=0 this lands on the leftmost point of the circle (ray toward F, correct start direction) and the immediate sweep direction is upward (toward D), matching the real ray to the drone. No group-level mirroring of geometry is needed anywhere - only this one circle's own transform differs from the standard left-vertex case.
- The height h is a real shared triangle side (opposite for both triangles) - drawn to true scale (180 units), never stylised, since q20's "you may stretch a distance that is not a side, never a side" rule forbids exaggerating it.
- x and y stay symbolic labels throughout (never crossfaded to numeric values in the illustration) - the script never states their numeric values, only the combined h. Only the h-chip crossfades from the variable "h" to the solved "50(3-root3) m" at the Step 3 payoff (98.14).
- Right-angle markers are drawn TWICE at the same point F (once toward each observer) since the two triangles are visually distinct sides of that shared vertex.

## PART 5 - Master Timeline Overview

```
0.3   q-full-card lowered enter        58.6  STEP2_TIME (cardEnter)        91.98 L3 "h(1+1/root3)=100"
0.8   serial badge                     61.54-63.64 tan60=h/y chain          98.14 L4 ans "h=50(3-root3)"
3.9   RISE_TIME                        64.7  tan60=root3                    98.14 LINK crossfade h-chip
4.3-24.72 illustration build beats     66.56-75.08 y=h/root3 chain          100.4 pole confirm pulse
25.1  PIN_TIME (pinFlow x2)            76.0  STEP2_MORPH                   101.46 emphasize ans
25.6  GIVEN_TIME (cardEnter)           76.6  STEP3_TIME (cardEnter)        103.4 STEP3_MORPH
25.6-39.0 given lines + arc pulses     81.72 L1 "x+y=100"                  104.2 RECENTER_TIME
40.6  GIVEN_MORPH                      85.98 L2 "h+h/root3=100"            104.5 options fadeIn
41.6  STEP1_TIME (cardEnter)           76.9  STEP3_TIME (cardEnter)        105.2 optionsStagger
45.02-48.24 tan45=h/x chain                                                106.0/107.5/109.5 fill beats
55.6  ans "h=x"                                                            111.0 CORRECT_PULSE
57.26 emphasize                                                            112.16 END_FADE_TIME
57.6  STEP1_MORPH                                                          113.56 TIMELINE_END (tl.set)
```
