# Storyboard - Trigonometry q12 (tan 45 degrees = Opposite/Adjacent, tower height 20m)

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|------|------|-----------|---------|-------|-------------------|
| 1 | 0.10-4.60 | "So welcome back again. It's time to solve one more problem." | Intro | Center screen | Question card enters, serial badge pops |
| 2 | 5.06-19.14 | "Now in this problem, we have a 20-meter tower. From a point on the ground, the angle of elevation to the top of the tower is 45 degrees, and we need to find the distance from that point to the tower." | State the question | Illustration | Tower + ground-point + elevation-angle triangle draws in, "20 m" and "45 deg" labels reveal in narrated order |
| 3 | 19.70-24.22 | "Before solving, let us quickly draw the right triangle in our mind." | Bridge to solving | Pinned question | Question + illustration pin to top |
| 4 | 24.68-35.88 | "The height of the tower becomes the opposite side, which is 20 meters. The distance from the person to the tower becomes the adjacent side. Let us call it X." | Label sides | Given card | Given card recaps Opposite = 20 m, Adjacent = x |
| 5 | 36.56-45.10 | "Now, which trigonometric ratio connects the opposite side and the adjacent side? It is 10 (tan), because tan theta equals opposite by adjacent." | Formula | Step 1 card | Formula card: tan(theta) = Opposite/Adjacent |
| 6 | 45.42-51.08 | "So we can write tan 45 degrees equals 20 over X. Now, this is where the question becomes easy." | Substitute | Step 2 card | tan 45 deg = 20/x |
| 7 | 51.56-58.12 | "We already know one standard value, tan 45 degrees equals one, so one equals 20 divided by X." | Standard value | Step 2 card continues | tan 45 deg = 1 shown, then 1 = 20/x |
| 8 | 58.44-61.94 | "Now cross-multiply, we get X equals 20." | Solve | Step 3 card | x = 20 |
| 9 | 62.64-65.70 | "So the distance from the point to the tower is 20 meters." | Confirm answer | Step 3 answer | Answer stays highlighted |
| 10 | 66.14-70.06 | "Hence, the correct answer is option D, 20 meters." | Reveal correct option | Options grid | Option D pulses green |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Question Reveal (0.0s-9.0s)
- TIMESTAMP: 0.3
- VOICEOVER: "So welcome back again. It's time to solve one more problem."
- VISUAL OBJECTIVE: Establish the question on screen, calm opening beat.
- SCREEN LAYOUT: `#q-full-card` centered top (per template), `#serial-num` badge top-left overlapping card corner.
- ON-SCREEN ELEMENTS: QuestionCard with full question text (20 m tower, 45 deg angle of elevation, find distance to tower), SerialNum badge "Q", dotted grid, bottom strip, topic name, logo.
- ANIMATION DETAILS: `apt.heroEnterLowered(tl, "#q-full-card", 180, 4.6)` - card starts lowered, rises at 4.6 (end of "one more problem"). Badge mirrors the same lowered-rise motion via the parallel tween in the template script.
- CAMERA MOVEMENT: none (static frame, motion is via element position only).
- TRANSITIONS: none yet.
- EDUCATIONAL PURPOSE: Let the viewer read the full question once before any solving starts.
- VISUAL HIERARCHY: Question card > serial badge > background.
- ATTENTION MANAGEMENT: Nothing else on screen competes with the question text.
- MOTION NOTES: Card rise is the only motion; no illustration yet.
- CONTINUITY FROM PREVIOUS SCENE: Opening scene, no prior state.

### Scene 2 - Tower Illustration Builds In (5.0s-19.7s)
- TIMESTAMP: 5.0
- VOICEOVER: "Now in this problem, we have a 20-meter tower. From a point on the ground, the angle of elevation to the top of the tower is 45 degrees, and we need to find the distance from that point to the tower."
- VISUAL OBJECTIVE: Draw a vertical tower rising from the ground, a ground point some distance away, the line of sight from that point to the tower top, and the elevation angle at the ground point - then reveal the "20 m" height label and "45 deg" angle label in narrated order.
- SCREEN LAYOUT: `#illustration` region (left:50%, top:480px, 1400x300, centered flex) per template.
- ON-SCREEN ELEMENTS: SVG right triangle - vertical tower (primary-blue `#6373db` stroke, 4px) as the opposite side, horizontal ground line as the adjacent side, hypotenuse as the line of sight, right-angle square marker at the tower's base, angle arc + "45 deg" label at the ground-point vertex, small flat 2D person icon standing at the ground point, "20 m" label beside the vertical tower side, "x" label beside the horizontal ground side.
- ANIMATION DETAILS: Triangle path stroke-draws in (stroke-dashoffset 0->length, 1.0s, `power2.out`) starting at 7.5 (right after "we have a"). Person icon fades+rises in at 9.1 ("From a point on the ground"). "45 deg" arc + label fade in at 14.2 (word timestamp for "45"). "20 m" label fades+rises in at 28.7 is too late for this beat - instead show "x" label (the unknown distance being asked for) fading in at 16.8 (word timestamp for "distance"), pulsing gently since it is not yet solved.
- CAMERA MOVEMENT: none.
- TRANSITIONS: none (labels are simple fade/rise, not a card transition).
- EDUCATIONAL PURPOSE: Anchor the abstract "angle of elevation" and "distance to tower" language to a concrete drawn triangle before the given values are formally stated.
- VISUAL HIERARCHY: Triangle outline first, then person icon, then angle label, then unknown-distance label layer on top in narration order.
- ATTENTION MANAGEMENT: Each label appears only when its value is spoken, so the eye is guided label-by-label.
- MOTION NOTES: Same triangle SVG persists through pin (Scene 3) and stays visible (smaller) through the rest of the video - object continuity. The "20 m" height label for the tower itself is deferred to Scene 4 (Given card) since the script narrates the height value again explicitly at that point ("which is 20 meters") - avoid a duplicate premature label here beyond the tower's visual presence.
- CONTINUITY FROM PREVIOUS SCENE: The question card has finished rising into its resting position from Scene 1; the illustration area below it was empty and now fills with the tower-and-triangle drawing while the card stays static.

### Scene 3 - Pin (19.7s-24.7s)
- PIN_TIME: 20.9
- GIVEN_TIME: 25.5
- VOICEOVER: "Before solving, let us quickly draw the right triangle in our mind."
- VISUAL OBJECTIVE: Shrink question+illustration to the pinned top slot, clearing center stage for the Given card that opens as soon as side-labeling narration begins.
- SCREEN LAYOUT: `#q-pinned` (left:385px,top:30px,width:1275px), `#illus-pinned` (shrunk triangle, centered per design.md pinned-illustration rule since it's a single-figure recap).
- ON-SCREEN ELEMENTS: Pinned question text, shrunk tower-triangle icon with person marker (>=21px labels).
- ANIMATION DETAILS: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 20.9)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 20.9)` (0.8s glide); `apt.fadeOut(tl, "#serial-num", 20.9, 0.5)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: pinFlow glide (not a cut).
- EDUCATIONAL PURPOSE: Move the fully-stated question out of the way while the viewer mentally holds "right triangle" per the narration cue.
- VISUAL HIERARCHY: Pinned question (small, top) < pinned illustration recap.
- ATTENTION MANAGEMENT: No new content competes during this beat; it is a deliberate breathing/transition moment matching "let us quickly draw the right triangle in our mind."
- MOTION NOTES: none beyond the glide itself.
- CONTINUITY FROM PREVIOUS SCENE: The full-size question card and triangle from Scene 2 glide into the top slot exactly as the narration shifts from stating the problem to inviting the viewer to visualize the triangle; the serial badge fades out in step with the same glide instead of hard-cutting.

### Scene 4 - Given: Opposite and Adjacent (24.7s-36.6s)
- GIVEN_TIME: 25.5
- VOICEOVER: "The height of the tower becomes the opposite side, which is 20 meters. The distance from the person to the tower becomes the adjacent side. Let us call it X."
- VISUAL OBJECTIVE: Formally label the two known/unknown sides against the trig vocabulary (Opposite, Adjacent) before the ratio is introduced.
- SCREEN LAYOUT: Given `.solution-card` centered per template (left:640px,top:480px).
- ON-SCREEN ELEMENTS: Given chip + math (`Opposite = 20 m`, `Adjacent = x`).
- ANIMATION DETAILS: `apt.cardEnter(tl, "#card-given .solution-card", 25.5)`; `apt.textReveal(tl, "#card-given .math")` - word-level: "Opposite = 20 m" line reveals in step with "opposite side, which is 20 meters" (24.68-29.32), "Adjacent = x" line reveals in step with "adjacent side. Let us call it X." (33.60-35.88).
- CAMERA MOVEMENT: none.
- TRANSITIONS: none (card entrance only, no morph yet).
- EDUCATIONAL PURPOSE: Confirm the two known/unknown values in the standard Opposite/Adjacent trig-ratio vocabulary before the formula appears.
- VISUAL HIERARCHY: Given card (center, prominent) > pinned question > pinned illustration.
- ATTENTION MANAGEMENT: Given card is the only actively narrated element in this window; each line reveals exactly when its side is named.
- MOTION NOTES: Given card entrance uses standard `apt.cardEnter` (0.55s, back.out(1.4)).
- CONTINUITY FROM PREVIOUS SCENE: The pinned question and illustration from Scene 3 have just settled into their top slot as this scene's Given card grows in at center, continuing the same downward reading flow.

### Scene 5 - Step 1: The Formula (36.6s-45.4s)
- VOICEOVER: "Now, which trigonometric ratio connects the opposite side and the adjacent side? It is 10 (tan), because tan theta equals opposite by adjacent."
- VISUAL OBJECTIVE: State the tan formula as a clean fraction, morphing the Given card into the stack first.
- SCREEN LAYOUT: Given card morphs into `#stack-given` (left:100px,top:140px). Step 1 solution card takes center (left:640px,top:460px).
- ON-SCREEN ELEMENTS: Step 1 chip, math: "tan(theta) = " + `.frac` (top: Opposite, bottom: Adjacent).
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 36.6)` (0.8s); `apt.cardEnter(tl, "#card-step1 .solution-card", 37.7)`; `apt.textReveal(tl, "#card-step1 .math")` - word-level for "tan(theta) =" (synced to "10 theta equals", 42.20-43.56), line-level single span for the "Opposite / Adjacent" fraction label pair (paraphrased from "opposite by adjacent", 43.64-45.10).
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph.
- EDUCATIONAL PURPOSE: Teach the general tan rule before applying the specific numbers - separates "what is tan" from "solve this triangle".
- VISUAL HIERARCHY: Step 1 card (center, active) > Given stack card (left, collapsed) > pinned question.
- ATTENTION MANAGEMENT: only one active card on screen; stack card is visually quieter (light-blue, no shadow).
- MOTION NOTES: `.frac` component used per math-notation rule (never a bare divide character).
- CONTINUITY FROM PREVIOUS SCENE: The Given card is still completing its slide-and-shrink morph into the left stack as this scene's Step 1 card begins its own `cardEnter` fade-scale-in at center, so the eye naturally moves from "given settling top-left" to "new card growing center".

### Scene 6 - Step 2: Substitute Values (45.4s-58.4s)
- VOICEOVER: "So we can write tan 45 degrees equals 20 over X. Now, this is where the question becomes easy. We already know one standard value, tan 45 degrees equals one, so one equals 20 divided by X."
- VISUAL OBJECTIVE: Substitute the known angle and sides into the formula, then swap in the standard value tan 45 deg = 1 to collapse the equation to 1 = 20/x.
- SCREEN LAYOUT: Step 1 morphs into `#stack-step1` (left:100px,top:290px). Step 2 card center (left:640px,top:440px).
- ON-SCREEN ELEMENTS: Step 2 chip, math lines: "tan 45 deg = " + `.frac`(20/x), then "tan 45 deg = 1" (standard value), then "1 = " + `.frac`(20/x) in `.ans` styling on the final line.
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 45.4)`; `apt.stackLineGrow(tl, "#line-g-1", 45.4)` (grows the Given->Step1 connector, both circles now on screen); `apt.cardEnter(tl, "#card-step2 .solution-card", 46.5)`; `apt.textReveal(tl, "#card-step2 .math")` - word-level for "tan 45 deg = 20/x" (verbatim numeric line, synced to 46.62-49.44), line-level for "tan 45 deg = 1 (standard value)" (paraphrase, synced to 53.68-56.04), word-level for final "1 = 20/x" line (synced to 56.20-58.12).
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph.
- EDUCATIONAL PURPOSE: Show the standard-value lookup explicitly (tan 45 deg = 1) rather than jumping straight to cross-multiplication.
- VISUAL HIERARCHY: Step 2 card (center, active) > Step 1 + Given stack (left) > pinned question.
- ATTENTION MANAGEMENT: The standard-value line is visually called out (chip-style emphasis via `apt.emphasize`) since it is the key insight that unlocks the problem.
- MOTION NOTES: No `.frac` bare-divide symbol ever used; standard-value note reveals as its own line between the substitution and the final equation.
- CONTINUITY FROM PREVIOUS SCENE: Step 1's formula card is still sliding into the stack (with its connector line to Given growing in) as Step 2's card grows in at center carrying the same fraction visual language (a `.frac` component), keeping the fraction motif continuous between scenes.

### Scene 7 - Step 3: Cross-Multiply and Solve (58.4s-66.1s)
- VOICEOVER: "Now cross-multiply, we get X equals 20. So the distance from the point to the tower is 20 meters."
- VISUAL OBJECTIVE: Cross-multiply 1 = 20/x to isolate x, landing on the highlighted final answer x = 20 m.
- SCREEN LAYOUT: Step 2 morphs into `#stack-step2` (left:100px,top:440px). Step 3 card center (left:640px,top:460px).
- ON-SCREEN ELEMENTS: Step 3 chip, math lines: "x = 20" + " m", final value in `.ans` styling.
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 58.4)`; `apt.stackLineGrow(tl, "#line-1-2", 58.4)`; `apt.cardEnter(tl, "#card-step3 .solution-card", 59.5)`; `apt.textReveal(tl, "#card-step3 .math")` - word-level for "x = 20" (synced to 60.78-61.94), line-level for "Distance = 20 m" confirmation line (paraphrase, synced to 62.64-65.70).
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph.
- EDUCATIONAL PURPOSE: Show the final algebraic step (cross-multiply) explicitly and restate the answer in the problem's own units (meters) before the options reveal.
- VISUAL HIERARCHY: Step 3 card (center, active, answer highlighted) > Step 1/Step 2/Given stack (left) > pinned question.
- ATTENTION MANAGEMENT: Only the final `.ans` span ("20 m") uses the answer highlight color, keeping the eye on the destination number.
- MOTION NOTES: `apt.emphasize` optionally on "x = 20" the moment it lands, before the confirmation line reveals.
- CONTINUITY FROM PREVIOUS SCENE: Step 2's card is still completing its morph into the stack (with the Step1->Step2 connector line growing) as Step 3's card grows in at center, carrying the equation motif forward from "1 = 20/x" to the isolated "x = 20".

### Scene 8 - Options Reveal (66.1s-70.1s)
- VOICEOVER: "Hence, the correct answer is option D, 20 meters."
- VISUAL OBJECTIVE: Confirm 20 m against the four options, land on Option D in green.
- SCREEN LAYOUT: Step 3 morphs into `#stack-step3` (left:100px,top:590px). `#options-reveal` on `.pinned-col` (right side).
- ON-SCREEN ELEMENTS: 2x2 options grid (A:10 m, B:20 sqrt(3) m, C:40 m, D:20 m), Option D marked `.correct`.
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 66.1)`; `apt.stackLineGrow(tl, "#line-2-3", 66.1)`; `apt.fadeOut(tl, "#illus-pinned", 66.1)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 66.1)`; `apt.fadeIn(tl, "#options-reveal", 66.8)`; `apt.optionsStagger(tl, ".opt-btn", 67.2)`; `apt.correctPulse(tl, ".opt-btn.correct", 68.76)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph, then recenter (0.5s), then stagger reveal.
- EDUCATIONAL PURPOSE: Let the viewer match the computed 20 m against listed options and confirm Option D.
- VISUAL HIERARCHY: Options grid (active reveal) > stack column (all 3 steps + Given, still fully visible) > pinned question.
- ATTENTION MANAGEMENT: Only Option D pulses green; A/B/C stay neutral so the eye lands on D.
- MOTION NOTES: Pinned illustration clears out (its job is done) while stack column and connector lines remain visible throughout, per continuity rule.
- CONTINUITY FROM PREVIOUS SCENE: Step 3's card is still completing its morph into the stack (with the Step2->Step3 connector line growing) as the pinned illustration fades and the question recenters for the options grid, so the layout settles into its final state as one continuous rearrangement rather than a hard cut.

### End (70.1s-71.6s)
- END_FADE_TIME: 70.4 - everything (`#root > div`) fades together after the correct-option pulse has settled and narration ends. Since narration ends at duration 70.06 with no trailing hold requested by the transcript pause structure, extend audio clip `data-duration` to at least 71.5 (per penelty.txt bug: never let a clip's data-duration end exactly at its own fade start) so the correct-option pulse (68.76 + 0.4s yoyo) and the final options-reveal fade fully complete before unmount.

## PART 3: Asset List Required
- Custom tower-and-elevation-angle SVG illustration (built inline in `illustration/`, drawn with `--primary` stroke): vertical tower, horizontal ground line, hypotenuse line-of-sight, right-angle marker at tower base, elevation-angle arc + "45 deg" label at ground-point vertex (rendered with the standard stroke-dasharray circle technique per penelty.txt, --angle: 45, computed exactly not eyeballed), small flat 2D person icon at ground point, "20 m" / "x" text labels sized with generous viewBox margin (per penelty.txt q10 label-clipping fix).
- No other new assets - `serial-num-badge.svg` and `logo.png` reused from `_template/assets/`.

## PART 4: Animation Complexity Notes
- 4 stack cards this question (Given, Step 1, Step 2, Step 3) - full stack column, `stack-step3` and `line-2-3` from the template are used (not dropped, unlike q1's 3-step version).
- Illustration is a single static triangle-with-person scene (stroke-draw + angle arc + two label fades) - no ambient loop needed since no stretch exceeds ~10s of silence.
- All fractions use `.frac` component (never bare divide character), per house rule.
- Every clip whose data-duration would otherwise end exactly at a morphToStack/fadeOut/pinFlow completion gets the standard +1.5-2s buffer (penelty.txt q9 fix) - apply to card-given, card-step1, card-step2, card-step3, and illus-pinned.
- Angle arc uses the CSS stroke-dasharray full-circle technique (penelty.txt q10 standard), not a hand-built path arc, for both the full-size Phase 1 illustration and the shrunk Phase 2 pinned icon.

## PART 5: Master Timeline Overview
```
0.3   Question card rises (heroEnterLowered, rise at 4.6 - end of intro beat)
0.8   Serial badge pops in (lowered)
7.5   Tower-triangle stroke-draws in
9.1   Person icon fades in at ground point
14.2  45-degree angle arc + label fade in (CSS stroke-dasharray technique, --angle:45)
16.8  "x" unknown-distance label fades in (pulsing, not yet solved)
20.9  PIN_TIME - pinFlow (question + illustration) to pinned slot; serial badge fades out
25.5  GIVEN_TIME - Given card enters (Opposite = 20 m, Adjacent = x)
36.6  Given -> stack-given morph
37.7  Step 1 card enters (formula: tan(theta) = Opposite/Adjacent)
45.4  Step 1 -> stack-step1 morph; line-g-1 grows
46.5  Step 2 card enters (substitute tan45deg = 20/x, standard value tan45deg=1, collapse to 1=20/x)
58.4  Step 2 -> stack-step2 morph; line-1-2 grows
59.5  Step 3 card enters (cross-multiply, x = 20 m)
66.1  Step 3 -> stack-step3 morph; line-2-3 grows; illustration fades; question recenters
66.8  Options grid fades in
67.2  Options stagger in
68.76 Option D correct pulse
70.4  End fade (all elements), 1.2s
```
