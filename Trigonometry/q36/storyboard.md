# q36 Storyboard - Building & Tower (Angle of Depression 60deg / Elevation 30deg)

transcript.json duration = 163.459s. All timestamps below are pulled directly from transcript.json words/phrases - none invented.

## PART 1 - Narration Beat Analysis (condensed)

| Beat | Time | Narration | Purpose | Visual objective |
|---|---|---|---|---|
| Intro | 0-3.44 | "welcome back...solve one more problem" | Hook | Question card rises in |
| Question read | 4.26-23.72 | building 12m, depression 60deg to tower base, elevation 30deg to tower top, find tower height | Setup | Illustration builds stroke-by-stroke: building, observer, tower, both sight lines, both arcs |
| Pin | 23.8 | (silent beat) | Reorganize | pinFlow to top |
| Define x | 24.30-42.94 | "let distance...be x...same horizontal distance...everything is clear" | Setup shared variable | Given card: "Let horizontal distance = x"; baseline arrow + x chip; confirm-pulse both arcs together |
| 60deg triangle | 43.88-92.94 | recap building=12,x; angle-equality reasoning; tan60=12/x=root3; x=12/root3=4root3 | Solve x | Step1 card grows term by term; LINK x-chip crossfade "x"->"4root3 m" |
| Define h | 98.88-102.72 | "let extra height...be h" | Setup 2nd unknown | h arrow pops in illustration |
| 30deg triangle | 103.48-126.14 | tan30=h/4root3=1/root3; h=4 | Solve h | Step2 card grows; LINK h-chip crossfade "h"->"4 m" |
| The trap | 127.00-137.10 | "not complete height...only extra height above building" | Prevent common mistake | h-bracket recolors distinct from building-bracket; card clarifies |
| Combine | 137.88-155.84 | building 12 + extra 4 = tower height 16 | Final answer | Step3 card; total-height bracket LINK reveal "16 m" |
| Recap+answer | 156.74-163.459 | "height of tower is 16 meter...option D" | Confirm | Options reveal, correct pulse timed to "option D" |

## PART 2 - Scene-by-Scene Storyboard

### Scene 1 (0-23.8s) - Phase 1: Question + Illustration
- `apt.heroEnterLowered("#q-full-card", 180, 3.6)`; badge mirrors same rise.
- Illustration draws in order: ground line (4.5), building rect grows 6.3-7.0 ("building...twelve"), "12 m" arrow+chip pop 7.32/7.64, observer eye pops on rooftop 8.58, tower rect grows 11.0-11.7 ("From there...tower"), right-angle markers pop 12.2/13.5, depression sight-line (dashed) fades 12.24, depression arc + "60 deg" chip pop 14.88-15.38, elevation sight-line fades 16.38, elevation arc + "30 deg" chip pop 20.02-20.40, tower flag pops 13.6, emphasize tower rect 21.4 ("asking to find height of tower").
- Continuity: nothing before this scene; it opens the video.

### Scene 2 (23.8-42.9s) - Phase 2 opening + Given
- `PIN_TIME=23.8`: `apt.pinFlow` on q-full-card->q-pinned and illustration->illus-pinned.
- `GIVEN_TIME=24.3`: `apt.cardEnter("#card-given .solution-card")`; `apt.textReveal`.
- Given card: L1 "Let horizontal distance = x" (word-level 25.84-28.92), L2 "(same x in both triangles)" (line-level 31.10).
- Illustration: baseline dashed A-B reveals 24.3, "x" chip pops 28.92, confirm-pulse both arcs green together at 31.10/57.86/61.06 (equal alternate angles), emphasize x-chip 37.20 and 39.08, gentle emphasize on whole pinned illustration 41.50.
- `GIVEN_MORPH=42.9` -> `apt.morphToStack` Given into stack.
- Continuity: the pinFlow glide from Scene 1 is still finishing its opacity settle as the Given card's cardEnter begins; illustration keeps building beats through this scene rather than sitting idle.

### Scene 3 (43.88-97.5s) - Step 1: solve x (60deg triangle)
- `STEP1_TIME=43.88`: cardEnter + textReveal.
- Step1 lines (word/line-level): "Building = 12 m" (46.90), "Horizontal distance = x" (50.72), "angle-dep = angle-elev (alternate angles)" (53.78), "tan 60 deg = 12/x" (66.70-69.46, word chain), "= root3" (72.42), "x = 12/root3" (80.64-82.20), "= 4root3 m" (84.56-85.56), "(used to find tower's extra height)" (92.34).
- Illustration LINK beats: arc-depression pulse 44.5, confirm-pulse both arcs 53.78/57.86/61.06 (equal-angle reasoning), pop/pulse "60 deg" chip 65.10, LINK 12m-chip<->equation "12" at 68.64, root3 pop 72.42, x-chip crossfade "x"->"4root3 m" + baseline recolor green pulse at 87.14 (restating distance).
- `STEP1_MORPH=97.5` -> morph Step1 into stack; `apt.stackLineGrow("#line-g-1")` same time.
- Continuity: Given's stack card is already resting in the column; Step1 enters center at 43.88 the instant Given's morph settle-fade completes.

### Scene 4 (98.9-137.7s) - Step 2: solve h (30deg triangle) + the trap
- `STEP2_TIME=98.9`: cardEnter + textReveal.
- Step2 lines: "Let extra height above building = h" (98.88), "Using tan 30 deg" (103.48), "tan 30 deg = h/4root3" (108.12-111.88, word chain), "= 1/root3" (112.69-115.94), "h = 4 m" (123.72-124.76), "h = only extra height above building" (130.70, the trap clarification).
- Illustration: h-arrow pops 99.56-102.72, arc-elevation pulse 103.48, arc micro-pulse 118 (fill 5s gap), h-chip crossfade "h"->"4 m" at 124.18, "but wait" beat 127.00 - recolor h-bracket green distinct from building-bracket (still blue) to visually separate "extra" from "already built" height, held through 130.70-137.10.
- `STEP2_MORPH=137.7` -> morph into stack; `apt.stackLineGrow("#line-1-2")`.
- Continuity: the h-bracket's green/blue distinction established here carries directly into Scene 5's combination beat.

### Scene 5 (138.6-157.0s) - Step 3: combine to 16m
- `STEP3_TIME=138.6`: cardEnter + textReveal.
- Step3 lines: "Building = 12 m already" (140.00), "Tower extra = 4 m above" (143.08), "Tower height = 12 + 4" (152.00-153.78, word chain), "= 16 m" (155.08-155.58).
- Illustration: building-bracket pulse 140.00, h-bracket pulse 143.08, a "+" glyph pops between the two brackets 146.64-150.26 ("we have to add both of them"), total-height bracket pops in (LINK with card's "=16m") at 155.08-155.58.
- `STEP3_MORPH=156.2` -> morph into stack; `apt.stackLineGrow("#line-2-3")`.
- Continuity: Step2's green h-bracket and the building's blue bracket are still on screen, unchanged, as Step3 opens - the combination beat literally brings the two together.

### Scene 6 (157.0-165.46s) - Phase 3: Options
- `RECENTER_TIME=157.0`: fadeOut illus-pinned, `apt.recenterForOptions`.
- `OPTIONS_TIME=157.3` fadeIn, `158.0` optionsStagger.
- Fill beat: emphasize total-height bracket/chip again 158.2 and 160.0 (aligned to "sixteen meter" recap 159.66).
- `CORRECT_PULSE=162.3` (spans the spoken "option D" 162.88-163.32).
- `END_FADE_TIME=164.06`, `apt.fadeOut("#root > div", 164.06, 1.2)`, `tl.set({},{},165.46)`.
- Continuity: stack column + connector lines remain visible unchanged from Scene 5 straight through to the end fade.

## PART 3 - Asset List Required
- No external assets. Pure inline SVG: building rect + door, tower rect + flag, observer eye icon, two right-angle markers, two angle arcs (60deg/30deg), 4 measurement arrows (12m, x, h, 16m total) each as a fig-chip foreignObject, 2 dashed sight lines, 1 dashed baseline reference, ground line.

## PART 4 - Animation Complexity Notes
- Two independent angle-arc derivations at the SAME vertex A (one flipped for elevation/up-sweep, one unflipped for depression/down-sweep) - each has its own atan2 check per penelty.txt's mandatory geometry checklist.
- Building/tower use `attr {height,y}` grow-in (q20 pattern), not stroke-dashoffset (they're filled-outline rects, not single strokes).
- Ground line uses true stroke-dashoffset draw-in (length 290).
- x-chip and h-chip each use a two-span crossfade (variable-name span fades out, solved-value span fades in) as their LINK moment - this is the only place text content changes are simulated (no live text mutation).

## PART 5 - Master Timeline Overview

```
0.3   q-full-card lowered enter        43.88 STEP1_TIME (cardEnter)      138.6 STEP3_TIME (cardEnter)
0.8   serial badge                     66.70-69.46 tan60=12/x chain      140.00-155.58 combine chain
3.6   RISE_TIME                        72.42 =root3                     155.08 total bracket LINK
4.5-21.4 illustration build beats      80.64-85.56 x=4root3 chain        156.2 STEP3_MORPH
23.8  PIN_TIME (pinFlow x2)            87.14 x-chip crossfade LINK       157.0 RECENTER_TIME
24.3  GIVEN_TIME (cardEnter)           92.34 reasoning tie-in            157.3 options fadeIn
25.84-31.10 given lines                97.5  STEP1_MORPH                 158.0 optionsStagger
31.10/57.86/61.06 arc confirm pulses   98.9  STEP2_TIME (cardEnter)      158.2/160.0 bracket re-emphasis
37.2/39.08 x-chip emphasize            103.48-124.76 tan30=h chain       162.3 CORRECT_PULSE
42.9  GIVEN_MORPH                      124.18 h-chip crossfade LINK      164.06 END_FADE_TIME
                                       127-137.10 the trap beat          165.46 TIMELINE_END (tl.set)
                                       137.7 STEP2_MORPH
```
