# Storyboard - Trigonometry q13 (sin 30 degrees = Opposite/Hypotenuse, kite height 25m)

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|------|------|-----------|---------|-------|-------------------|
| 1 | 0.10-3.56 | "So welcome back again. It's time to solve one more problem." | Intro | Center screen | Question card enters, serial badge pops |
| 2 | 4.02-15.62 | "Now in this problem, a kite string is fifty meters long, and this string makes an angle of thirty degrees with the ground. The question is asking us to find the height of the kite." | State the question | Illustration | Kite-string triangle draws in, "50 m" and "30 deg" labels reveal in narrated order |
| 3 | 16.04-21.46 | "Just imagine a right triangle here. The string is the slant side, so it is the hypotenuse." | Name hypotenuse | Illustration | Hypotenuse edge highlighted/labeled |
| 4 | 21.92-27.90 | "The height of the kite is the vertical side, so it is the opposite side to thirty degree." | Name opposite | Illustration | Vertical (height) edge highlighted/labeled |
| 5 | 28.58-31.54 | "For opposite side and hypotenuse, we use sine theta." | Bridge to formula | Pinned question | Question + illustration pin to top |
| 6 | 31.90-38.92 | "Sine theta is equal to opposite side by hypotenuse. So here, sine thirty degree is equal to height by fifty." | Formula + substitute | Given/Step 1 card | sin(theta) = Opposite/Hypotenuse, then sin 30 = height/50 |
| 7 | 39.42-45.78 | "We know that sine thirty degree is equal to one by two. So one by two is equal to height by fifty." | Standard value | Step 2 card | sin 30 deg = 1/2 shown, then 1/2 = height/50 |
| 8 | 46.26-52.92 | "After cross multiplying, height is equal to fifty multiplied by one half. That gives us twenty-five meter." | Solve | Step 3 card | height = 25 m |
| 9 | 53.72-58.58 | "So the final answer will be twenty-five meter. Correct option is A." | Reveal correct option | Options grid | Option A pulses green |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Question Reveal (0.0s-4.0s)
- TIMESTAMP: 0.3
- VOICEOVER: "So welcome back again. It's time to solve one more problem."
- VISUAL OBJECTIVE: Establish the question on screen, calm opening beat.
- SCREEN LAYOUT: `#q-full-card` centered top (per template), `#serial-num` badge top-left overlapping card corner.
- ON-SCREEN ELEMENTS: QuestionCard with full question text (50 m kite string, 30 deg angle with ground, find height of kite), SerialNum badge "Q", dotted grid, bottom strip, topic name, logo.
- ANIMATION DETAILS: `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.56)` - card starts lowered, rises at 3.56 (end of "one more problem"). Badge mirrors the same lowered-rise motion via the parallel tween in the template script.
- CAMERA MOVEMENT: none (static frame, motion is via element position only).
- TRANSITIONS: none yet.
- EDUCATIONAL PURPOSE: Let the viewer read the full question once before any solving starts.
- VISUAL HIERARCHY: Question card > serial badge > background.
- ATTENTION MANAGEMENT: Nothing else on screen competes with the question text.
- MOTION NOTES: Card rise is the only motion; no illustration yet.
- CONTINUITY FROM PREVIOUS SCENE: Opening scene, no prior state.

### Scene 2 - Kite Illustration Builds In (4.0s-16.0s)
- TIMESTAMP: 4.0
- VOICEOVER: "Now in this problem, a kite string is fifty meters long, and this string makes an angle of thirty degrees with the ground. The question is asking us to find the height of the kite."
- VISUAL OBJECTIVE: Draw a right triangle: a slanted string line rising from a ground-level hand/anchor point up to a kite icon, a vertical dashed drop-line from the kite down to the ground (the height), and a horizontal ground line - then reveal the "50 m" string label and "30 deg" ground angle label in narrated order.
- SCREEN LAYOUT: `#illustration` region (left:50%, top:480px, 1400x300, centered flex) per template.
- ON-SCREEN ELEMENTS: SVG right triangle - slanted string line (primary-blue `#6373db` stroke, 4px) from ground anchor to a small flat 2D kite icon at the top-right, vertical dashed line (height, the unknown) dropping from the kite straight down to the ground, horizontal ground line, right-angle square marker where the vertical line meets the ground, angle arc + "30 deg" label at the ground anchor vertex, "50 m" label along the string.
- ANIMATION DETAILS: Triangle path stroke-draws in (stroke-dashoffset 0->length, 1.0s, `power2.out`) starting at 6.2 (right after "kite string is"). Kite icon fades+rises in at 6.9 ("fifty meters long"). "30 deg" arc + label fade in at 10.2 (word timestamp for "thirty"). Vertical dashed height line fades in at 13.9 ("find the height"), pulsing gently since it is not yet solved.
- CAMERA MOVEMENT: none.
- TRANSITIONS: none (labels are simple fade/rise, not a card transition).
- EDUCATIONAL PURPOSE: Anchor the abstract "kite string" and "angle with the ground" language to a concrete drawn triangle before the given values are formally stated.
- VISUAL HIERARCHY: Triangle outline first, then kite icon, then angle label, then unsolved-height line layer on top in narration order.
- ATTENTION MANAGEMENT: Each label appears only when its value is spoken, so the eye is guided label-by-label.
- MOTION NOTES: Same triangle SVG persists through pin (Scene 5) and stays visible (smaller) through the rest of the video - object continuity.
- CONTINUITY FROM PREVIOUS SCENE: The question card has finished rising into its resting position from Scene 1; the illustration area below it was empty and now fills with the kite-string triangle drawing while the card stays static.

### Scene 3 - Name the Hypotenuse (16.0s-22.0s)
- TIMESTAMP: 16.04
- VOICEOVER: "Just imagine a right triangle here. The string is the slant side, so it is the hypotenuse."
- VISUAL OBJECTIVE: Emphasize the slanted string edge as the hypotenuse.
- SCREEN LAYOUT: same `#illustration` region, triangle already fully drawn from Scene 2.
- ON-SCREEN ELEMENTS: "Hypotenuse" text label fading in beside the string line; the string edge briefly emphasized (`apt.emphasize`, subtle scale-pulse).
- ANIMATION DETAILS: `apt.emphasize(tl, "#string-edge", 19.68)` (synced to "hypotenuse"); "Hypotenuse" label fade-in at same time.
- CAMERA MOVEMENT: none.
- TRANSITIONS: none.
- EDUCATIONAL PURPOSE: Bridge from the everyday word "string" to the formal trig term "hypotenuse" while looking directly at the edge it names.
- VISUAL HIERARCHY: Emphasized string edge + new label > rest of static triangle.
- ATTENTION MANAGEMENT: Only the string edge and its new label pulse; nothing else changes.
- MOTION NOTES: `apt.emphasize` is 0.3s yoyo, `power2.out`, per standard durations table.
- CONTINUITY FROM PREVIOUS SCENE: The fully-drawn triangle from Scene 2 sits static as this scene adds only the "Hypotenuse" label and a brief pulse on the same string edge, no new geometry.

### Scene 4 - Name the Opposite Side (22.0s-28.6s)
- TIMESTAMP: 21.92
- VOICEOVER: "The height of the kite is the vertical side, so it is the opposite side to thirty degree."
- VISUAL OBJECTIVE: Emphasize the vertical dashed height line as the opposite side to the 30 deg angle.
- SCREEN LAYOUT: same `#illustration` region.
- ON-SCREEN ELEMENTS: "Opposite" text label fading in beside the vertical dashed height line; the height line briefly emphasized.
- ANIMATION DETAILS: `apt.emphasize(tl, "#height-edge", 25.30)` (synced to "opposite side"); "Opposite" label fade-in at same time.
- CAMERA MOVEMENT: none.
- TRANSITIONS: none.
- EDUCATIONAL PURPOSE: Anchor the unknown quantity (height) to its formal trig role (opposite side to the given angle) before the ratio is introduced.
- VISUAL HIERARCHY: Emphasized height line + new label > rest of static triangle.
- ATTENTION MANAGEMENT: Only the height line and its new label pulse.
- MOTION NOTES: same `apt.emphasize` treatment as Scene 3, keeping the two side-naming beats visually parallel.
- CONTINUITY FROM PREVIOUS SCENE: The "Hypotenuse" label from Scene 3 stays on screen (persistent) as this scene adds the "Opposite" label and pulses the height edge, building the vocabulary side by side.

### Scene 5 - Pin (28.6s-31.9s)
- PIN_TIME: 28.9
- GIVEN_TIME: 32.0
- VOICEOVER: "For opposite side and hypotenuse, we use sine theta."
- VISUAL OBJECTIVE: Shrink question+illustration to the pinned top slot, clearing center stage for the Given/formula card that opens as soon as the ratio is named.
- SCREEN LAYOUT: `#q-pinned` (left:385px,top:30px,width:1275px), `#illus-pinned` (shrunk triangle, centered per design.md pinned-illustration rule since it's a single-figure recap).
- ON-SCREEN ELEMENTS: Pinned question text, shrunk kite-triangle icon with "Hypotenuse"/"Opposite" labels retained at readable size (>=21px).
- ANIMATION DETAILS: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 28.9)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 28.9)` (0.8s glide); `apt.fadeOut(tl, "#serial-num", 28.9, 0.5)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: pinFlow glide (not a cut).
- EDUCATIONAL PURPOSE: Move the fully-stated question and labeled triangle out of the way while the sine-ratio formula gets the full center stage next.
- VISUAL HIERARCHY: Pinned question (small, top) < pinned illustration recap.
- ATTENTION MANAGEMENT: No new content competes during this beat; it is a deliberate breathing/transition moment matching "we use sine theta."
- MOTION NOTES: none beyond the glide itself.
- CONTINUITY FROM PREVIOUS SCENE: The full-size question card and labeled triangle from Scenes 2-4 glide into the top slot exactly as the narration names the ratio to be used; the serial badge fades out in step with the same glide instead of hard-cutting.

### Scene 6 - Given: Formula and Substitution (31.9s-39.4s)
- GIVEN_TIME: 32.0
- VOICEOVER: "Sine theta is equal to opposite side by hypotenuse. So here, sine thirty degree is equal to height by fifty."
- VISUAL OBJECTIVE: State the sine formula as a clean fraction, then substitute the known angle and sides.
- SCREEN LAYOUT: Given `.solution-card` centered per template (left:640px,top:480px).
- ON-SCREEN ELEMENTS: Given chip, math lines: "sin(theta) = " + `.frac` (top: Opposite, bottom: Hypotenuse), then "sin 30 deg = " + `.frac` (top: height, bottom: 50).
- ANIMATION DETAILS: `apt.cardEnter(tl, "#card-given .solution-card", 32.0)`; `apt.textReveal(tl, "#card-given .math")` - word-level for "sin(theta) = Opposite/Hypotenuse" (synced to "sine theta is equal to opposite side by hypotenuse", 31.90-34.90), word-level for "sin 30 deg = height/50" (verbatim numeric line, synced to "sine thirty degree is equal to height by fifty", 36.18-38.92).
- CAMERA MOVEMENT: none.
- TRANSITIONS: none (card entrance only, no morph yet).
- EDUCATIONAL PURPOSE: Teach the general sine rule before applying the specific numbers, then substitute in one continuous card so the viewer sees the formula immediately made concrete.
- VISUAL HIERARCHY: Given card (center, prominent) > pinned question > pinned illustration.
- ATTENTION MANAGEMENT: Given card is the only actively narrated element in this window; each line reveals exactly when its content is spoken.
- MOTION NOTES: Given card entrance uses standard `apt.cardEnter` (0.55s, back.out(1.4)). `.frac` component used per math-notation rule (never a bare divide character).
- CONTINUITY FROM PREVIOUS SCENE: The pinned question and illustration from Scene 5 have just settled into their top slot as this scene's Given card grows in at center, continuing the same downward reading flow.

### Scene 7 - Step 1: Standard Value (39.4s-46.3s)
- VOICEOVER: "We know that sine thirty degree is equal to one by two. So one by two is equal to height by fifty."
- VISUAL OBJECTIVE: Swap in the standard value sin 30 deg = 1/2 to collapse the equation to 1/2 = height/50, morphing the Given card into the stack first.
- SCREEN LAYOUT: Given card morphs into `#stack-given` (left:100px,top:140px). Step 1 solution card takes center (left:640px,top:460px).
- ON-SCREEN ELEMENTS: Step 1 chip, math lines: "sin 30 deg = " + `.frac`(1/2) (standard value), then "1/2 = " + `.frac`(height/50) as `.frac` component.
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 39.4)` (0.8s); `apt.cardEnter(tl, "#card-step1 .solution-card", 40.5)`; `apt.textReveal(tl, "#card-step1 .math")` - line-level for "sin 30 deg = 1/2 (standard value)" (paraphrase, synced to 39.42-42.32), word-level for "1/2 = height/50" (verbatim numeric line, synced to 42.78-45.78).
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph.
- EDUCATIONAL PURPOSE: Show the standard-value lookup explicitly (sin 30 deg = 1/2) rather than jumping straight to cross-multiplication.
- VISUAL HIERARCHY: Step 1 card (center, active) > Given stack card (left, collapsed) > pinned question.
- ATTENTION MANAGEMENT: The standard-value line is visually called out (`apt.emphasize`) since it is the key insight that unlocks the problem.
- MOTION NOTES: `.frac` component used throughout, never a bare divide character.
- CONTINUITY FROM PREVIOUS SCENE: The Given card is still completing its slide-and-shrink morph into the left stack as this scene's Step 1 card begins its own `cardEnter` fade-scale-in at center, so the eye naturally moves from "given settling top-left" to "new card growing center".

### Scene 8 - Step 2: Cross-Multiply and Solve (46.3s-53.7s)
- VOICEOVER: "After cross multiplying, height is equal to fifty multiplied by one half. That gives us twenty-five meter."
- VISUAL OBJECTIVE: Cross-multiply 1/2 = height/50 to isolate height, landing on the highlighted final answer height = 25 m.
- SCREEN LAYOUT: Step 1 morphs into `#stack-step1` (left:100px,top:290px). Step 2 card center (left:640px,top:440px).
- ON-SCREEN ELEMENTS: Step 2 chip, math lines: "height = 50 x 1/2" (using `.frac` for 1/2), then "height = 25 m" in `.ans` styling on the final line.
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 46.3)`; `apt.stackLineGrow(tl, "#line-g-1", 46.3)` (grows the Given->Step1 connector, both circles now on screen); `apt.cardEnter(tl, "#card-step2 .solution-card", 47.4)`; `apt.textReveal(tl, "#card-step2 .math")` - word-level for "height = 50 x 1/2" (verbatim numeric line, synced to 46.26-50.82), word-level for final "height = 25 m" line (synced to 51.20-52.92).
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph.
- EDUCATIONAL PURPOSE: Show the final algebraic step (cross-multiply) explicitly and land on the answer in the problem's own units (meters) before the options reveal.
- VISUAL HIERARCHY: Step 2 card (center, active, answer highlighted) > Step 1 + Given stack (left) > pinned question.
- ATTENTION MANAGEMENT: Only the final `.ans` span ("25 m") uses the answer highlight color, keeping the eye on the destination number.
- MOTION NOTES: `apt.emphasize` optionally on "height = 25 m" the moment it lands.
- CONTINUITY FROM PREVIOUS SCENE: Step 1's formula/standard-value card is still sliding into the stack (with its connector line to Given growing in) as Step 2's card grows in at center, carrying the equation motif forward from "1/2 = height/50" to the isolated "height = 25 m".

### Scene 9 - Options Reveal (53.7s-58.6s)
- VOICEOVER: "So the final answer will be twenty-five meter. Correct option is A."
- VISUAL OBJECTIVE: Confirm 25 m against the four options, land on Option A in green.
- SCREEN LAYOUT: Step 2 morphs into `#stack-step2` (left:100px,top:440px). `#options-reveal` on `.pinned-col` (right side).
- ON-SCREEN ELEMENTS: 2x2 options grid (A:25 m, B:50 m, C:25 sqrt(3) m, D:100 m), Option A marked `.correct`.
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 53.7)`; `apt.stackLineGrow(tl, "#line-1-2", 53.7)`; `apt.fadeOut(tl, "#illus-pinned", 53.7)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 53.7)`; `apt.fadeIn(tl, "#options-reveal", 54.4)`; `apt.optionsStagger(tl, ".opt-btn", 54.8)`; `apt.correctPulse(tl, ".opt-btn.correct", 56.3)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph, then recenter (0.5s), then stagger reveal.
- EDUCATIONAL PURPOSE: Let the viewer match the computed 25 m against listed options and confirm Option A.
- VISUAL HIERARCHY: Options grid (active reveal) > stack column (Given + Step1 + Step2, still fully visible) > pinned question.
- ATTENTION MANAGEMENT: Only Option A pulses green; B/C/D stay neutral so the eye lands on A.
- MOTION NOTES: Pinned illustration clears out (its job is done) while stack column and connector lines remain visible throughout, per continuity rule.
- CONTINUITY FROM PREVIOUS SCENE: Step 2's card is still completing its morph into the stack (with the Step1->Step2 connector line growing) as the pinned illustration fades and the question recenters for the options grid, so the layout settles into its final state as one continuous rearrangement rather than a hard cut.

### End (58.6s-60.1s)
- END_FADE_TIME: 58.9 - everything (`#root > div`) fades together after the correct-option pulse has settled and narration ends. Narration ends at duration 58.579 with no trailing hold requested by the transcript pause structure; extend audio clip `data-duration` to at least 60.0 (per penelty.txt bug: never let a clip's data-duration end exactly at its own fade start) so the correct-option pulse (56.3 + 0.4s yoyo) and the final options-reveal fade fully complete before unmount.

## PART 3: Asset List Required
- Custom kite-and-string SVG illustration (built inline in `illustration/`, drawn with `--primary` stroke): slanted string line from ground anchor to kite icon, vertical dashed height drop-line, horizontal ground line, right-angle marker at the ground point below the kite, ground-angle arc + "30 deg" label at the anchor vertex (rendered with the standard stroke-dasharray circle technique per penelty.txt, --angle: 30, computed exactly not eyeballed), small flat 2D kite icon, "50 m" string label, "Hypotenuse"/"Opposite" side-name labels sized with generous viewBox margin (per penelty.txt q10 label-clipping fix).
- No other new assets - `serial-num-badge.svg` and `logo.png` reused from `_template/assets/`.

## PART 4: Animation Complexity Notes
- 3 stack cards this question (Given, Step 1, Step 2) - `stack-step3` and `line-2-3` from the template are dropped (matches q1's 3-step pattern), since q13's solution only needs formula+substitution, standard-value+cross-multiply, and options - one fewer step than q12.
- Illustration is a single static triangle-with-kite scene (stroke-draw + angle arc + two side-name label emphasis beats) - no ambient loop needed since no stretch exceeds ~10s of silence.
- All fractions use `.frac` component (never bare divide character), per house rule.
- Every clip whose data-duration would otherwise end exactly at a morphToStack/fadeOut/pinFlow completion gets the standard +1.5-2s buffer (penelty.txt q9 fix) - apply to card-given, card-step1, card-step2, and illus-pinned.
- Angle arc uses the CSS stroke-dasharray full-circle technique (penelty.txt q10 standard, unitless --angle per q12 fix, opacity-only fade per q12 fix - never GSAP-tween --angle), for both the full-size Phase 1 illustration and the shrunk Phase 2 pinned icon.

## PART 5: Master Timeline Overview
```
0.3    Question card rises (heroEnterLowered, rise at 3.56 - end of intro beat)
0.8    Serial badge pops in (lowered)
6.2    Kite-string triangle stroke-draws in
6.9    Kite icon fades in at top of string
10.2   30-degree angle arc + label fade in (CSS stroke-dasharray technique, --angle:30)
13.9   Vertical dashed height line fades in (pulsing, not yet solved)
19.68  "Hypotenuse" label fades in + string edge emphasize pulse
25.30  "Opposite" label fades in + height edge emphasize pulse
28.9   PIN_TIME - pinFlow (question + illustration) to pinned slot; serial badge fades out
32.0   GIVEN_TIME - Given card enters (sin theta = Opposite/Hypotenuse, then sin 30 deg = height/50)
39.4   Given -> stack-given morph
40.5   Step 1 card enters (sin 30 deg = 1/2 standard value, then 1/2 = height/50)
46.3   Step 1 -> stack-step1 morph; line-g-1 grows
47.4   Step 2 card enters (cross-multiply: height = 50 x 1/2, height = 25 m)
53.7   Step 2 -> stack-step2 morph; line-1-2 grows; illustration fades; question recenters
54.4   Options grid fades in
54.8   Options stagger in
56.3   Option A correct pulse
58.9   End fade (all elements), 1.2s
```
