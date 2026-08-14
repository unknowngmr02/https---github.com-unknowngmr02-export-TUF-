# Storyboard - Trigonometry q8 (tan 60 deg = h / 10root3)

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|------|------|-----------|---------|-------|-------------------|
| 1 | 0.10-4.34 | "So welcome back again. It's time to solve one more problem." | Intro | Center screen | Question card rises into place |
| 2 | 4.72-13.42 | "Now in this problem, we are standing at a point which is 10 root 3 meters away from a tower. The angle of elevation to the top of the tower is 60 degrees." | Set up scene | Illustration | Point, ground line (10root3), tower, angle arc (60 deg) draw in |
| 3 | 13.86-19.30 | "The question is asking us to find the height of the tower. Let the height of the tower be h." | State unknown | Illustration | Tower height labeled "h" (unknown) |
| 4 | 19.80-30.66 | "Also imagine a right-angled triangle here. The height of the tower becomes the opposite side. The horizontal distance, which is 10 root 3 meters, becomes the adjacent side." | Map triangle roles | Illustration | "Opposite" tag on tower, "Adjacent" tag on ground line |
| 5 | 31.44-37.12 | "Since we know the opposite side and the adjacent side, the trigonometric ratio we should use is tan." | Ratio choice | Pinned + Given | Pin to top, Given card recaps Angle=60 deg, Adjacent=10root3, Height h=Opposite(unknown) |
| 6 | 37.76-49.96 | "We know tan theta is equal to opposite side upon adjacent side. So here, tan 60 degree is equal to h upon 10 root 3. Now we already know one important value, tan 60 degree is equal to root 3." | Formula + known value | Step 1 card | tan theta = Opposite/Adjacent, tan 60 deg = h/10root3, tan 60 deg = root3 |
| 7 | 50.46-58.54 | "Putting this value into the equation, we get root 3 is equal to h upon 10 root 3. Now multiply both sides by 10 root 3." | Substitute | Step 2 card | root3 = h/10root3, cross-multiply |
| 8 | 58.88-68.46 | "This gives us h is equal to root 3 multiplied by 10 root 3. After simplifying this, h is equal to 10 multiplied by 3, which is 30 meters." | Simplify | Step 3 card | h = root3 x 10root3 = 10x3 = 30 m (answer highlighted) |
| 9 | 69.24-75.44 | "Hence, the height of the tower is 30 meter. So the correct option is option D." | Confirm answer | Options grid | Option D pulses green |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Question Reveal (0.0s-4.7s)
- TIMESTAMP: 0.3
- VOICEOVER: "So welcome back again. It's time to solve one more problem."
- VISUAL OBJECTIVE: Establish the question, calm opening beat.
- SCREEN LAYOUT: `#q-full-card` centered top, `#serial-num` badge top-left overlapping card corner.
- ON-SCREEN ELEMENTS: QuestionCard (full question text, 10root3 m and 60 degrees highlighted), SerialNum badge "Q", dotted grid, bottom strip, topic name, logo.
- ANIMATION DETAILS: `apt.heroEnterLowered(tl, "#q-full-card", 180, 4.3)` - card starts lowered, rises at 4.3 (end of intro line). Badge mirrors via parallel tween.
- CAMERA MOVEMENT: none.
- TRANSITIONS: none yet.
- EDUCATIONAL PURPOSE: Let viewer read the full question once before solving starts.
- VISUAL HIERARCHY: Question card > serial badge > background.
- ATTENTION MANAGEMENT: Nothing competes with question text.
- MOTION NOTES: Card rise is only motion; illustration not yet drawn.
- CONTINUITY FROM PREVIOUS SCENE: Opening scene, no prior state.

### Scene 2 - Tower Illustration Builds In (4.7s-30.7s)
- TIMESTAMP: 4.9
- VOICEOVER: "we are standing at a point which is 10 root 3 meters away from a tower. The angle of elevation to the top of the tower is 60 degrees. ... Let the height of the tower be h. Also imagine a right-angled triangle here. The height of the tower becomes the opposite side. The horizontal distance ... becomes the adjacent side."
- VISUAL OBJECTIVE: Draw a ground line from an observation point to the tower base, a vertical tower, a line-of-sight to the top, and the 60 deg angle arc at the point; then tag the two known/unknown roles (Opposite / Adjacent).
- SCREEN LAYOUT: `#illustration` region (left:50%, top:480px, 1400x300).
- ON-SCREEN ELEMENTS: SVG - small dot "observation point" (left), horizontal dashed ground line to tower base, vertical tower line (primary-blue stroke, 4px) with a small flag/rect cap, diagonal line-of-sight from point to tower top, angle arc + "60 deg" label at the point vertex, "10root3 m" label under the ground line, "h" label beside the tower (unknown height), later "Opposite" tag beside tower and "Adjacent" tag beside ground line.
- ANIMATION DETAILS: Ground line + point stroke-draw in (stroke-dashoffset 0->length, 0.7s, `power2.out`) at 4.9. Tower stroke-draws in at 5.8 (0.7s). Line-of-sight stroke-draws at 6.6 (0.6s). "10root3 m" label fades+rises at 7.02 (word "10"). Angle arc + "60 deg" label fades in at 12.7 (word "60"). "h" label (unknown height) fades in beside tower top at 19.24 (word "h."). "Opposite" tag fades in beside tower at 23.08 (word "height...opposite" beat). "Adjacent" tag fades in beside ground line at 25.96 (word "horizontal distance").
- CAMERA MOVEMENT: none.
- TRANSITIONS: none (labels are simple fade/rise).
- EDUCATIONAL PURPOSE: Anchor "opposite"/"adjacent" language to the concrete drawn tower-and-point scene before the formula appears.
- VISUAL HIERARCHY: Ground line + tower first, then angle/height labels, then Opposite/Adjacent role tags layer on top in narration order.
- ATTENTION MANAGEMENT: Each label appears only when its value is spoken.
- MOTION NOTES: Same tower/point SVG persists through pin (Scene 3) and stays visible (smaller) through the rest of the video - object continuity.
- CONTINUITY FROM PREVIOUS SCENE: The question card has finished rising from Scene 1; the illustration area below fills with the tower scene while the card stays static.

### Scene 3 - Pin + Given Recap (31.0s-37.6s)
- PIN_TIME: 31.0
- GIVEN_TIME: 31.5
- VOICEOVER: "Since we know the opposite side and the adjacent side, the trigonometric ratio we should use is tan."
- VISUAL OBJECTIVE: Shrink question+illustration to the pinned top slot, then open a Given card recapping angle, adjacent side, and the unknown opposite side.
- SCREEN LAYOUT: `#q-pinned` (left:385px,top:30px,width:1275px), `#illus-pinned` (shrunk tower scene, centered - single-figure recap), Given `.solution-card` centered (left:640px,top:480px).
- ON-SCREEN ELEMENTS: Pinned question text, shrunk tower/point icon with "60 deg / 10root3 m" recap label beside it (>=21px), Given chip + math (`Angle = 60 deg`, `Adjacent = 10root3 m`, `Height h = Opposite (unknown)`).
- ANIMATION DETAILS: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 31.0)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 31.0)` (0.8s glide); `apt.fadeOut(tl, "#serial-num", 31.0, 0.5)`; `apt.cardEnter(tl, "#card-given .solution-card", 31.5)`; `apt.textReveal(tl, "#card-given .math")` (word-level for the three value lines, timed near 31.5 since they restate values already spoken).
- CAMERA MOVEMENT: none.
- TRANSITIONS: pinFlow glide (not a cut).
- EDUCATIONAL PURPOSE: Confirm the known values in a clean, permanent format before introducing the formula.
- VISUAL HIERARCHY: Pinned question (small, top) < Given card (center, prominent) < pinned illustration recap.
- ATTENTION MANAGEMENT: Given card is the only actively narrated element in this window.
- MOTION NOTES: Given card entrance uses standard `apt.cardEnter` (0.55s, back.out(1.4)).
- CONTINUITY FROM PREVIOUS SCENE: The full-size question card and tower scene from Scene 2 are still completing their pinFlow glide into the top slot as this scene's Given card fades in; the serial badge fades out in step with the same glide.

### Scene 4 - Step 1: The Formula + Known Value (37.6s-50.5s)
- VOICEOVER: "We know tan theta is equal to opposite side upon adjacent side. So here, tan 60 degree is equal to h upon 10 root 3. Now we already know one important value, tan 60 degree is equal to root 3."
- VISUAL OBJECTIVE: State the tan formula, apply it to this triangle, and recall the known value of tan 60 deg.
- SCREEN LAYOUT: Given card morphs into `#stack-given` (left:100px,top:140px). Step 1 solution card takes center (left:640px,top:440px).
- ON-SCREEN ELEMENTS: Step 1 chip, math lines: "tan theta = " + `.frac`(Opposite Side/Adjacent Side), "tan 60 deg = " + `.frac`(h/10root3), "tan 60 deg = root3" (`.ans` styling on root3).
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 37.6)` (0.8s); `apt.cardEnter(tl, "#card-step1 .solution-card", 38.6)`; `apt.textReveal(tl, "#card-step1 .math")` - line-level for the general formula (paraphrased, 38.6), word-level for "tan 60 deg = h/10root3" (verbatim, 42.52-46.06), word-level for "tan 60 deg = root3" (verbatim, 46.10-49.96).
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph.
- EDUCATIONAL PURPOSE: Teach the general rule, apply it to this triangle's labels, then supply the known trig value needed to solve.
- VISUAL HIERARCHY: Step 1 card (center, active) > Given stack card (left, collapsed) > pinned question.
- ATTENTION MANAGEMENT: only one active card on screen; stack card is visually quieter.
- MOTION NOTES: `.frac` component used per math-notation rule (never a bare / or division sign).
- CONTINUITY FROM PREVIOUS SCENE: The Given card is still completing its slide-and-shrink morph into the left stack as this scene's Step 1 card begins its own cardEnter at center.

### Scene 5 - Step 2: Substitute and Cross-Multiply (50.5s-59.9s)
- VOICEOVER: "Putting this value into the equation, we get root 3 is equal to h upon 10 root 3. Now multiply both sides by 10 root 3."
- VISUAL OBJECTIVE: Substitute root3 into the equation, then set up cross-multiplication.
- SCREEN LAYOUT: Step 1 morphs into `#stack-step1` (left:100px,top:290px). Step 2 card center (left:640px,top:440px).
- ON-SCREEN ELEMENTS: Step 2 chip, math lines: "root3 = " + `.frac`(h/10root3), "root3 x 10root3 = h" (multiply-both-sides restatement).
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 50.46)`; `apt.stackLineGrow(tl, "#line-g-1", 50.46)`; `apt.cardEnter(tl, "#card-step2 .solution-card", 51.46)`; `apt.textReveal(tl, "#card-step2 .math")` - word-level for "root3 = h/10root3" (51.46-55.90), line-level for "multiply both sides by 10root3" (paraphrase, 56.26).
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph.
- EDUCATIONAL PURPOSE: Show the substitution step explicitly before jumping to the numeric answer.
- VISUAL HIERARCHY: Step 2 card (center, active) > Step 1 + Given stack (left) > pinned question.
- ATTENTION MANAGEMENT: Equation stays the visual anchor; no answer yet.
- MOTION NOTES: `.frac` component used throughout, no bare division sign.
- CONTINUITY FROM PREVIOUS SCENE: Step 1's card is still sliding into the stack (with connector line growing) as Step 2's card grows in at center, keeping the fraction/equation motif continuous.

### Scene 6 - Step 3: Simplify to the Answer (59.9s-69.2s)
- VOICEOVER: "This gives us h is equal to root 3 multiplied by 10 root 3. After simplifying this, h is equal to 10 multiplied by 3, which is 30 meters."
- VISUAL OBJECTIVE: Carry out the multiplication and land on h = 30 m.
- SCREEN LAYOUT: Step 2 morphs into `#stack-step2` (left:100px,top:460px). Step 3 card center (left:640px,top:440px).
- ON-SCREEN ELEMENTS: Step 3 chip, math lines: "h = root3 x 10root3", "h = 10 x 3", "h = " + `.ans`("30 m").
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 58.88)`; `apt.stackLineGrow(tl, "#line-1-2", 58.88)`; `apt.cardEnter(tl, "#card-step3 .solution-card", 59.88)`; `apt.textReveal(tl, "#card-step3 .math")` - word-level throughout (58.88-68.46, all verbatim numeric/equation content).
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph.
- EDUCATIONAL PURPOSE: Make the arithmetic simplification explicit (root3 x 10root3 -> 10x3 -> 30) rather than skipping to the result.
- VISUAL HIERARCHY: Step 3 card (center, active, answer highlighted) > Step 1/2 + Given stack (left) > pinned question.
- ATTENTION MANAGEMENT: Only the final `.ans` span ("30 m") uses the answer highlight color.
- MOTION NOTES: No bare division/multiplication oddities; `x` used as plain multiply sign in text.
- CONTINUITY FROM PREVIOUS SCENE: Step 2's card is still completing its morph into the stack (connector line growing) as Step 3's card grows in at center carrying the same equation forward.

### Scene 7 - Options Reveal (69.2s-75.5s)
- VOICEOVER: "Hence, the height of the tower is 30 meter. So the correct option is option D."
- VISUAL OBJECTIVE: Confirm 30 m against the four options, land on Option D in green.
- SCREEN LAYOUT: Step 3 morphs into `#stack-step3` (left:100px,top:660px). `#options-reveal` on `.pinned-col` (right side).
- ON-SCREEN ELEMENTS: 2x2 options grid (A:10 m, B:10root3 m, C:20root3 m, D:30 m), Option D marked `.correct`.
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 69.24)`; `apt.stackLineGrow(tl, "#line-2-3", 69.24)`; `apt.fadeOut(tl, "#illus-pinned", 69.24)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 69.24)`; `apt.fadeIn(tl, "#options-reveal", 69.9)`; `apt.optionsStagger(tl, ".opt-btn", 70.4)`; `apt.correctPulse(tl, ".opt-btn.correct", 74.9)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph, then recenter (0.5s), then stagger reveal.
- EDUCATIONAL PURPOSE: Let the viewer match the computed 30 m against listed options and confirm Option D.
- VISUAL HIERARCHY: Options grid (active reveal) > stack column (all 3 steps + given, still fully visible) > pinned question.
- ATTENTION MANAGEMENT: Only Option D pulses green; A/B/C stay neutral.
- MOTION NOTES: Pinned illustration clears out while stack column and connector lines remain visible, per continuity rule.
- CONTINUITY FROM PREVIOUS SCENE: Step 3's card is still completing its morph into the stack (with the Step2->Step3 connector line growing) as the pinned illustration fades and the question recenters for the options grid.

### End (76.2s-77.4s)
- END_FADE_TIME: 76.2 - everything (`#root > div`) fades together after the correct-option pulse has settled and narration ends (75.44s).

## PART 3: Asset List Required
- Custom point + tower SVG illustration (built inline in `illustration/`, drawn with `--primary` stroke): observation point dot, dashed ground line, vertical tower with flag cap, diagonal line-of-sight, angle arc + "60 deg" label, "10root3 m" / "h" / "Opposite" / "Adjacent" text labels (>=22px in Phase 1, >=21px in pinned recap).
- No other new assets - `serial-num-badge.svg` and `logo.png` reused from `_template/assets/`.

## PART 4: Animation Complexity Notes
- Full 3-step structure this question (Given, Step 1, Step 2, Step 3) - matches template's max stack depth exactly, no dropped slots.
- Illustration is a single static tower-and-point scene (stroke-draw + several label fades) - no ambient loop needed since the pin-to-options window is fully occupied by the Given/Step cards.
- All fractions use `.frac` component (never bare division sign), per house rule.

## PART 5: Master Timeline Overview
```
0.3    Question card rises (heroEnterLowered, rise at 4.3 - end of intro beat)
0.8    Serial badge pops in (lowered)
4.9    Ground line + observation point stroke-draw in
5.8    Tower stroke-draws in
6.6    Line-of-sight stroke-draws in
7.02   "10root3 m" label fades in
12.7   Angle arc + "60 deg" label fade in
19.24  "h" (unknown height) label fades in
23.08  "Opposite" tag fades in beside tower
25.96  "Adjacent" tag fades in beside ground line
31.0   PIN_TIME - pinFlow (question + illustration) to pinned slot; serial badge fades out
31.5   GIVEN_TIME - Given card enters (Angle=60deg, Adjacent=10root3m, Height h=Opposite unknown)
37.6   Given -> stack-given morph
38.6   Step 1 card enters (formula: tan theta = Opposite/Adjacent; tan60deg = h/10root3 = root3)
50.46  Step 1 -> stack-step1 morph; line-g-1 grows
51.46  Step 2 card enters (substitute: root3 = h/10root3; multiply both sides)
58.88  Step 2 -> stack-step2 morph; line-1-2 grows
59.88  Step 3 card enters (simplify: h = root3x10root3 = 10x3 = 30m)
69.24  Step 3 -> stack-step3 morph; line-2-3 grows; illustration fades; question recenters
69.9   Options grid fades in
70.4   Options stagger in
74.9   Option D correct pulse
76.2   End fade (all elements), 1.2s
```
