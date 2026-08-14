# Storyboard - Trigonometry q1 (tan A = Opposite/Adjacent)

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|------|------|-----------|---------|-------|-------------------|
| 1 | 0.10-7.68 | "So welcome back... time to solve some problems." | Intro | Center screen | Question card enters, serial badge pops |
| 2 | 8.48-21.66 | "Now in this problem, we are given a right triangle. The side opposite to angle A is 9 centimeter, and the side adjacent to angle A is 12 centimeter." | Set up given data | Illustration | Right triangle draws in, opposite side (9cm) and adjacent side (12cm) labels reveal in sequence |
| 3 | 22.48-25.78 | "The question is asking us to find the value of tan A." | Restate the ask | Pinned question | Question + illustration pin to top; Given card recaps opposite/adjacent |
| 4 | 26.42-33.24 | "Now, what does tan actually mean? For any right triangle, tan A is equal to opposite side divided by adjacent side." | Formula | Step 1 card | Formula card enters center |
| 5 | 33.90-45.52 | "Now let us put the given values into the formula. Tangent A equals nine divided by 12. Both nine and 12 are divisible by three. After simplifying, we get tangent A equals three by four." | Substitution + simplification | Step 2 card | Substitute values, show simplification, land on answer |
| 6 | 46.08-49.02 | "Done. So the final answer will be three by four." | Confirm answer | Step 2 answer | Answer stays highlighted |
| 7 | 49.40-52.26 | "Hence, the correct option is option A." | Reveal correct option | Options grid | Option A pulses green |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Question Reveal (0.0s-22.0s)
- TIMESTAMP: 0.3
- VOICEOVER: "So welcome back. I hope you have gone through the theory part for this topic. Now it's time to solve some problems."
- VISUAL OBJECTIVE: Establish the question on screen, calm opening beat.
- SCREEN LAYOUT: `#q-full-card` centered top (per template), `#serial-num` badge top-left overlapping card corner.
- ON-SCREEN ELEMENTS: QuestionCard with full question text (opposite 9cm, adjacent 12cm, find tan A), SerialNum badge "Q", dotted grid, bottom strip, topic name, logo.
- ANIMATION DETAILS: `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)` - card starts lowered, rises at 3.6s (end of "welcome back" line). Badge mirrors the same lowered->rise motion via the parallel tween in the template script.
- CAMERA MOVEMENT: none (static frame, motion is via element position only).
- TRANSITIONS: none yet.
- EDUCATIONAL PURPOSE: Let the viewer read the full question once before any solving starts.
- VISUAL HIERARCHY: Question card > serial badge > background.
- ATTENTION MANAGEMENT: Nothing else on screen competes with the question text.
- MOTION NOTES: Card rise is the only motion; no illustration yet.
- CONTINUITY FROM PREVIOUS SCENE: Opening scene, no prior state.

### Scene 2 - Triangle Illustration Builds In (8.48s-21.66s)
- TIMESTAMP: 8.5
- VOICEOVER: "Now in this problem, we are given a right triangle. The side opposite to angle A is 9 centimeter, and the side adjacent to angle A is 12 centimeter."
- VISUAL OBJECTIVE: Draw a right triangle with angle A marked at bottom-left, right angle at bottom-right, and reveal the two known side labels in the order they are narrated.
- SCREEN LAYOUT: `#illustration` region (left:50%, top:480px, 1400x300, centered flex) per template.
- ON-SCREEN ELEMENTS: SVG right triangle (primary-blue `#6373db` stroke, 4px), angle arc + "A" label at bottom-left vertex, right-angle square marker at bottom-right vertex, "9 cm" label beside the vertical (opposite) side, "12 cm" label beside the horizontal (adjacent) side.
- ANIMATION DETAILS: Triangle path stroke-draws in (stroke-dashoffset 0->length, 1.0s, `power2.out`) starting at 9.9 (right after "we are given a right triangle"). "9 cm" label fades+rises in at 15.24 (word timestamp for "nine centimeter"). "12 cm" label fades+rises in at 20.22 (word timestamp for "12").
- CAMERA MOVEMENT: none.
- TRANSITIONS: none (labels are simple fade/rise, not a card transition).
- EDUCATIONAL PURPOSE: Anchor the abstract "opposite"/"adjacent" language to a concrete drawn triangle before the formula appears.
- VISUAL HIERARCHY: Triangle outline first, then labels layer on top in narration order.
- ATTENTION MANAGEMENT: Each label appears only when its value is spoken, so the eye is guided label-by-label.
- MOTION NOTES: Same triangle SVG persists through pin (Scene 3) and stays visible (smaller) through the rest of the video - object continuity.
- CONTINUITY FROM PREVIOUS SCENE: The question card has finished rising into its resting position from Scene 1; the illustration area below it was empty and now fills with the triangle drawing while the card stays static.

### Scene 3 - Pin + Given Recap (22.0s-27.7s)
- PIN_TIME: 22.0
- GIVEN_TIME: 22.6
- VOICEOVER: "The question is asking us to find the value of tan A."
- VISUAL OBJECTIVE: Shrink question+illustration to the pinned top slot, then open a Given card recapping the two known sides.
- SCREEN LAYOUT: `#q-pinned` (left:385px,top:30px,width:1275px), `#illus-pinned` (shrunk triangle, centered per design.md pinned-illustration rule since it's a single-figure recap), Given `.solution-card` centered per template (left:640px,top:480px).
- ON-SCREEN ELEMENTS: Pinned question text, shrunk triangle icon with "9 cm / 12 cm" recap label beside it (>=21px), Given chip + math (`Opposite = 9 cm`, `Adjacent = 12 cm`).
- ANIMATION DETAILS: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 22.0)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 22.0)` (0.8s glide); `apt.fadeOut(tl, "#serial-num", 22.0, 0.5)`; `apt.cardEnter(tl, "#card-given .solution-card", 22.6)`; `apt.textReveal(tl, "#card-given .math")` (line-level, both lines at 22.6 since they simply restate values already spoken).
- CAMERA MOVEMENT: none.
- TRANSITIONS: pinFlow glide (not a cut).
- EDUCATIONAL PURPOSE: Confirm the two known values in a clean, permanent left-stack-bound format before introducing the formula.
- VISUAL HIERARCHY: Pinned question (small, top) < Given card (center, prominent) < pinned illustration recap.
- ATTENTION MANAGEMENT: Given card is the only actively narrated element in this window ("the question is asking us to find tan A" plays while it settles).
- MOTION NOTES: Given card entrance uses standard `apt.cardEnter` (0.55s, back.out(1.4)).
- CONTINUITY FROM PREVIOUS SCENE: The full-size question card and triangle from Scene 2 are still completing their pinFlow glide into the top slot as this scene's Given card fades in; the serial badge fades out in step with the same glide instead of hard-cutting.

### Scene 4 - Step 1: The Formula (27.7s-33.9s)
- VOICEOVER: "Now, what does tan actually mean? For any right triangle, tan A is equal to opposite side divided by adjacent side."
- VISUAL OBJECTIVE: State the tan formula as a clean fraction.
- SCREEN LAYOUT: Given card morphs into `#stack-given` (left:100px,top:140px). Step 1 solution card takes center (left:640px,top:460px).
- ON-SCREEN ELEMENTS: Step 1 chip, math: "tan A = " + `.frac` (top: Opposite Side, bottom: Adjacent Side).
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 27.7)` (0.8s); `apt.cardEnter(tl, "#card-step1 .solution-card", 28.8)`; `apt.textReveal(tl, "#card-step1 .math")` - word-level for "tan A =", line-level single span for the "Opposite Side" / "Adjacent Side" fraction label pair (paraphrased from "opposite side divided by adjacent side").
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph.
- EDUCATIONAL PURPOSE: Teach the general rule before applying numbers - separates "what is tan" from "solve this triangle".
- VISUAL HIERARCHY: Step 1 card (center, active) > Given stack card (left, collapsed) > pinned question.
- ATTENTION MANAGEMENT: only one active card on screen; stack card is visually quieter (light-blue, no shadow).
- MOTION NOTES: `.frac` component used per math-notation rule (never a bare ÷ character).
- CONTINUITY FROM PREVIOUS SCENE: The Given card is still completing its slide-and-shrink morph into the left stack as this scene's Step 1 card begins its own `cardEnter` fade-scale-in at center, so the eye naturally moves from "given settling top-left" to "new card growing center".

### Scene 5 - Step 2: Substitute and Simplify (32.9s-45.5s)
- VOICEOVER: "Now let us put the given values into the formula. Tangent A equals nine divided by 12. Both nine and 12 are divisible by three. After simplifying, we get tangent A equals three by four. Done. So the final answer will be three by four."
- VISUAL OBJECTIVE: Substitute 9 and 12 into the fraction, then simplify to 3/4, ending on the highlighted answer.
- SCREEN LAYOUT: Step 1 morphs into `#stack-step1` (left:100px,top:290px). Step 2 card center (left:640px,top:440px).
- ON-SCREEN ELEMENTS: Step 2 chip, math lines: "tan A = " + `.frac`(9/12), "= " + `.frac`(3/4) with the final `3/4` in `.ans` styling.
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 32.9)`; `apt.stackLineGrow(tl, "#line-g-1", 32.9)` (grows the Given->Step1 connector, both circles now on screen); `apt.cardEnter(tl, "#card-step2 .solution-card", 33.9)`; `apt.textReveal(tl, "#card-step2 .math")` - word-level for "tan A = 9/12" (verbatim numeric line, 33.9-39.06), line-level for "Both 9 and 12 divisible by 3" (paraphrase, 39.52), word-level for "tan A = 3/4" final answer line (42.02-45.52).
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph.
- EDUCATIONAL PURPOSE: Show the arithmetic simplification step explicitly (9/12 -> divide by 3 -> 3/4) rather than jumping straight to the answer.
- VISUAL HIERARCHY: Step 2 card (center, active, answer highlighted) > Step 1 + Given stack (left) > pinned question.
- ATTENTION MANAGEMENT: Only the final `.ans` span ("3/4") uses the answer highlight color, keeping the eye on the destination number.
- MOTION NOTES: No `.frac` bare-÷ ever used; simplification note "Both 9 and 12 divisible by 3" reveals as its own line between the substitution and the answer.
- CONTINUITY FROM PREVIOUS SCENE: Step 1's formula card is still sliding into the stack (with its connector line to Given growing in) as Step 2's card grows in at center carrying the same fraction visual language (a `.frac` component), keeping the fraction motif continuous between scenes.

### Scene 6 - Options Reveal (45.5s-52.5s)
- VOICEOVER: "Done. So the final answer will be three by four. Hence, the correct option is option A."
- VISUAL OBJECTIVE: Confirm 3/4 against the four options, land on Option A in green.
- SCREEN LAYOUT: Step 2 morphs into `#stack-step2` (left:100px,top:460px). `#options-reveal` on `.pinned-col` (right side).
- ON-SCREEN ELEMENTS: 2x2 options grid (A:3/4, B:4/3, C:9/15, D:5/4), Option A marked `.correct`.
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 45.5)`; `apt.stackLineGrow(tl, "#line-1-2", 45.5)`; `apt.fadeOut(tl, "#illus-pinned", 45.5)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 45.5)`; `apt.fadeIn(tl, "#options-reveal", 46.2)`; `apt.optionsStagger(tl, ".opt-btn", 46.6)`; `apt.correctPulse(tl, ".opt-btn.correct", 49.4)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph, then recenter (0.5s), then stagger reveal.
- EDUCATIONAL PURPOSE: Let the viewer match the computed 3/4 against listed options and confirm Option A.
- VISUAL HIERARCHY: Options grid (active reveal) > stack column (all 3 steps, still fully visible) > pinned question.
- ATTENTION MANAGEMENT: Only Option A pulses green; B/C/D stay neutral so the eye lands on A.
- MOTION NOTES: Pinned illustration clears out (its job is done) while stack column and connector lines remain visible throughout, per continuity rule.
- CONTINUITY FROM PREVIOUS SCENE: Step 2's card is still completing its morph into the stack (with the Step1->Step2 connector line growing) as the pinned illustration fades and the question recenters for the options grid, so the layout settles into its final state as one continuous rearrangement rather than a hard cut.

### End (52.5s-54.0s)
- END_FADE_TIME: 52.8 - everything (`#root > div`) fades together 1.2s after the correct-option pulse has settled and narration ends.

## PART 3: Asset List Required
- Custom right-triangle SVG illustration (built inline/inline-SVG in `illustration/`, drawn with `--primary` stroke): vertices, angle-A arc + label, right-angle marker, "9 cm" / "12 cm" text labels (>=22px in Phase 1, >=21px in pinned recap).
- No other new assets - `serial-num-badge.svg` and `logo.png` reused from `_template/assets/`.

## PART 4: Animation Complexity Notes
- Only 3 stack cards this question (Given, Step 1, Step 2) - no Step 3, so `stack-step3` and `line-2-3` from the template are dropped entirely.
- Illustration is simpler than a multi-object scene (single static triangle, stroke-draw + two label fades) - no ambient loop needed since the gap between pin and options reveal is short relative to other questions.
- All fractions use `.frac` component (never bare `÷`), per house rule.

## PART 5: Master Timeline Overview
(Re-synced to the regenerated transcript.json - timestamps shifted earlier since the new
voiceover take runs ~49.9s total vs the original ~52.3s. Triangle also redrawn to the exact
12:9 ratio, so the angle-A arc sweeps the real atan(9/12)=36.87deg via a CSS conic-gradient
ring instead of an eyeballed SVG arc.)
```
0.3   Question card rises (heroEnterLowered, rise at 4.3 - end of intro beat)
0.8   Serial badge pops in (lowered)
9.1   Triangle stroke-draws in
10.1  Right-angle marker + angle-A CSS arc + label fade in
11.9  "9 cm" label fades in
15.5  "12 cm" label fades in
16.8  PIN_TIME - pinFlow (question + illustration) to pinned slot; serial badge fades out
17.4  GIVEN_TIME - Given card enters (Opposite=9cm, Adjacent=12cm)
20.5  Given -> stack-given morph
22.36 Step 1 card enters (formula: tan A = Opposite/Adjacent)
27.6  Step 1 -> stack-step1 morph; line-g-1 grows
28.5  Step 2 card enters (substitute 9/12, simplify to 3/4)
43.0  Step 2 -> stack-step2 morph; line-1-2 grows; illustration fades; question recenters
43.9  Options grid fades in
44.3  Options stagger in
47.8  Option A correct pulse
50.3  End fade (all elements), 1.2s
```
