# Storyboard - Trigonometry q3 (tan theta = 5/12, find sin theta)

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual |
|------|------|-----------|---------|-------|--------|
| 1 | 0.10-3.96 | "So welcome back again, it's time to solve one more problem." | Intro | Whole frame | Question card rises into view |
| 2 | 4.42-12.52 | "Now in this problem, we are given that tan of theta is equal to five divided by 12, and theta is an acute angle." | State problem | Question text | Question stays centered, illustration begins |
| 3 | 13.00-16.38 | "The question is asking us to find the value of sine theta." | State goal | Question text | Illustration continues building |
| 4 | 17.28-21.80 | "Tan of theta means opposite side divided by adjacent side." | Concept reminder | Triangle labels | tan formula label appears on illustration |
| 5 | 22.28-27.80 | "So we can say opposite side divided by adjacent side is equal to five divided by 12." | Restate with ratio | Illustration | Triangle sides get numeric labels |
| 6 | 28.30-34.14 | "This means we can take the opposite side as five units and the adjacent side as 12 units." | Assign values | Given card | Question+illustration pin, Given card enters |
| 7 | 34.74-40.00 | "Since we know these two sides, we can find the hypotenuse using the Pythagoras theorem." | Bridge to computation | Step 1 card | Given morphs to stack, Step 1 card enters |
| 8 | 40.34-49.08 | "The hypotenuse is equal to the square root of five square plus 12 square. After simplifying this, the hypotenuse is equal to 13." | Compute hypotenuse | Step 1 card | Formula reveals word by word, ends in 13 |
| 9 | 49.50-56.16 | "We needed this value because sine theta means opposite side divided by hypotenuse." | Bridge to final ratio | Step 2 card | Step 1 morphs to stack, Step 2 card enters |
| 10 | 56.64-60.30 | "So sine theta is equal to five divided by 13." | Final answer | Step 2 card | Fraction reveals, answer highlighted |
| 11 | 61.14-67.64 | "Hence, the value of sine theta is five by 13, so the correct option is option C." | Reveal answer | Options grid | Step 2 morphs to stack, options fade in, C pulses green |

Total video length: ~68.6s (voiceover duration 67.639s + end fade). Phase 1 illustration: a right triangle with angle theta at bottom-left, right angle at bottom-right, opposite side (vertical) and adjacent side (horizontal) drawn via stroke-draw, then labeled 5 and 12 as the narration restates the ratio.

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Question Enter (0.0-3.96s)
- VOICEOVER: "So welcome back again, it's time to solve one more problem."
- VISUAL OBJECTIVE: Establish the question, calm open.
- SCREEN LAYOUT: `#q-full-card` centered per template.html, `#serial-num` top-left.
- ON-SCREEN ELEMENTS: Question text "If tan theta is equal to 5/12 for an acute angle, find sin theta." with `tan theta`, `5/12`, `sin theta` in `.num` accent. Serial badge "Q".
- ANIMATION DETAILS: `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.96)`. Serial badge fromTo at 0.8 (scale/rotation pop, mirrors hero offset), rises with card at 3.96.
- CAMERA MOVEMENT: none.
- TRANSITIONS: n/a (first scene).
- EDUCATIONAL PURPOSE: orient viewer to the exact question before any math.
- VISUAL HIERARCHY: question card dominant, badge secondary.
- ATTENTION MANAGEMENT: single focal element, no competing motion.
- MOTION NOTES: back.out(1.4) ease reads as a confident settle.
- CONTINUITY FROM PREVIOUS SCENE: n/a, opening frame.

### Scene 2 - Triangle Draws + Labels (4.42-27.80s)
- VOICEOVER: "...we are given tan theta = 5/12, theta acute. Find sine theta. Tan of theta means opposite side divided by adjacent side. So opposite/adjacent = 5/12."
- VISUAL OBJECTIVE: Build the right triangle geometrically, then reveal opposite/adjacent labels as the ratio is spoken.
- SCREEN LAYOUT: `#illustration` centered below question card (left:50%, top:480px, width:900px height:340px). Triangle: theta vertex at svg-local (40,280), right-angle vertex (400,280), top vertex (400,130) - adjacent=360px, opposite=150px, an exact 12:5 ratio (30px/unit) so the drawn angle is the real atan(5/12) = 22.6199deg.
- ON-SCREEN ELEMENTS: `#tri-path` stroke-draw triangle, `#right-angle-mark` square marker, `#angle-theta-arc` conic-gradient arc (exact 22.6199deg sweep), `#angle-theta-label` "θ", `#label-opposite` "5", `#label-adjacent` "12", `#tan-formula` (formula label "tan θ = Opposite/Adjacent = 5/12" in the clear space above the triangle apex).
- ANIMATION DETAILS: `tl.to("#tri-path", {strokeDashoffset:0, duration:1.0, ease:"power2.out"}, 9.0)` (triangle draws while "tan theta is equal to five divided by 12" is spoken). `#right-angle-mark`, `#angle-theta-arc`, `#angle-theta-label` fade in at 12.6 (right after the ratio is first stated). `#label-opposite` and `#label-adjacent` fade in at 22.6 and 25.0 respectively, timed to "opposite side divided by adjacent side is equal to five divided by 12" restating with real numbers. `#tan-formula` reveals word-by-word via `apt.textReveal`: "tan θ"(17.28) "="(18.38) `.frac` Opposite/Adjacent(19.16) "="(22.28) `.frac ans` 5/12(26.50) - fills the gap where the formula is spoken (17.28-27.80) but nothing was previously shown on screen for it.
- CAMERA MOVEMENT: none, single static frame with internal builds.
- TRANSITIONS: stroke-draw is the entrance; label fades are simple opacity/y tweens.
- EDUCATIONAL PURPOSE: ties the abstract tan-theta definition to a concrete labeled triangle before assigning numeric values.
- VISUAL HIERARCHY: triangle stroke in `--primary`, labels in `--primary`, angle arc + theta label reinforce which angle is theta.
- ATTENTION MANAGEMENT: one visual element builds at a time, matched to the exact narration clause introducing it.
- MOTION NOTES: standard power2.out fades, no bounce (this is a diagram, not a card).
- CONTINUITY FROM PREVIOUS SCENE: question card from Scene 1 stays put while the triangle builds beneath it.

### Scene 2B - Pin + Given Card (28.30-34.14s)
- VOICEOVER: "This means we can take the opposite side as five units and the adjacent side as 12 units."
- VISUAL OBJECTIVE: Pin question + triangle to make room, then surface the Given card restating the two side values.
- SCREEN LAYOUT: `#q-pinned` + `#illus-pinned` (scaled triangle icon, left:280px top:190px). `#card-given .solution-card` centered (left:640px, top:480px).
- ON-SCREEN ELEMENTS: chip "Given", math two lines: "Opposite Side = 5" and "Adjacent Side = 12" (values in `.hi`).
- ANIMATION DETAILS: PIN_TIME=27.8 - `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 27.8)`, `apt.pinFlow(tl, "#illustration", "#illus-pinned", 27.8)`, `apt.fadeOut(tl, "#serial-num", 27.8, 0.5)`. GIVEN_TIME=28.3 - `apt.cardEnter(tl, "#card-given .solution-card", 28.3)`, `apt.textReveal(tl, "#card-given .math")` word-by-word: "Opposite"(28.30) "Side"(28.60) "="(28.90) "5"(29.20, `.hi`) line 1; "Adjacent"(30.60) "Side"(31.00) "="(31.40) "12"(31.80, `.hi`) line 2.
- CAMERA MOVEMENT: question+triangle glide up together at PIN_TIME (real glide, not a cut).
- TRANSITIONS: pinFlow glide, then cardEnter pop for Given.
- EDUCATIONAL PURPOSE: the two facts (opposite=5, adjacent=12) the rest of the solution depends on.
- VISUAL HIERARCHY: both values equally weighted in `.hi`.
- ATTENTION MANAGEMENT: word-sync reveal paces viewer with narration.
- MOTION NOTES: standard cardEnter + textReveal only.
- CONTINUITY FROM PREVIOUS SCENE: the triangle that finished labeling in Scene 2 shrinks and glides into the pinned slot at 27.8, same object continuing.

### Scene 3 - Given Morphs to Stack + Step 1 (Hypotenuse) (34.74-49.08s)
- VOICEOVER: "Since we know these two sides, we can find the hypotenuse using the Pythagoras theorem. The hypotenuse is equal to the square root of five square plus 12 square. After simplifying this, the hypotenuse is equal to 13."
- VISUAL OBJECTIVE: Archive Given values into the stack, then compute the hypotenuse via Pythagoras.
- SCREEN LAYOUT: `#stack-given .stack-card` at left:100px, top:140px. `#card-step1 .solution-card` centered (left:640px, top:460px).
- ON-SCREEN ELEMENTS: chip "Step 1", math: "Hypotenuse = sqrt(5^2 + 12^2)" then "= 13" (using `.frac`-free plain math with `.hi` on 5, 12, and `.ans` on final 13).
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 34.74)`. `apt.cardEnter(tl, "#card-step1 .solution-card", 34.74)`. `apt.textReveal(tl, "#card-step1 .math")`: "Hypotenuse"(40.34) "="(41.20) "sqrt(5^2 + 12^2)"(42.50, `.hi`) line 1; "="(46.74) "13"(47.30, `.ans`) line 2.
- CAMERA MOVEMENT: none.
- TRANSITIONS: morph then cardEnter pop.
- EDUCATIONAL PURPOSE: the Pythagoras step that produces the hypotenuse needed for sine.
- VISUAL HIERARCHY: final `13` in `.ans` draws the eye.
- ATTENTION MANAGEMENT: Given stack card sits quietly to the left as passive reference.
- MOTION NOTES: standard cardEnter + textReveal only, no extra pulse.
- CONTINUITY FROM PREVIOUS SCENE: Step 1 card enters the same center slot the Given card just vacated via its morph, same beat (34.74).

### Scene 4 - Step 1 Morphs to Stack + Step 2 (Sine) (49.50-60.30s)
- VOICEOVER: "We needed this value because sine theta means opposite side divided by hypotenuse. So sine theta is equal to five divided by 13."
- VISUAL OBJECTIVE: Archive the hypotenuse step, then compute sine theta.
- SCREEN LAYOUT: `#stack-step1 .stack-card` at left:100px, top:290px. `#card-step2 .solution-card` centered (left:640px, top:470px).
- ON-SCREEN ELEMENTS: chip "Step 2", math: "sin theta = Opposite Side / Hypotenuse" then "= 5/13" (using `.frac` component, final fraction in `.ans`).
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 49.5)`, `apt.stackLineGrow(tl, "#line-g-1", 49.5)`. `apt.cardEnter(tl, "#card-step2 .solution-card", 49.5)`. `apt.textReveal(tl, "#card-step2 .math")`: "sin"(49.50) "theta"(50.10) "="(51.20) [`.frac` "Opposite Side"/"Hypotenuse"](52.40) line 1; "="(56.64) [`.frac ans` "5"/"13"](57.60) line 2.
- CAMERA MOVEMENT: none.
- TRANSITIONS: morph then cardEnter pop.
- EDUCATIONAL PURPOSE: the final ratio that answers the question.
- VISUAL HIERARCHY: `5/13` in `.ans` fraction stands out as the answer.
- ATTENTION MANAGEMENT: Step 1 stack card recedes to the left as passive reference.
- MOTION NOTES: standard cardEnter + textReveal only.
- CONTINUITY FROM PREVIOUS SCENE: Step 2 card enters the center slot Step 1 just vacated via its morph, same beat (49.5).

### Scene 5 - Step 2 Morphs to Stack + Options Reveal (60.50-68.84s)
- VOICEOVER: "Hence, the value of sine theta is five by 13, so the correct option is option C."
- VISUAL OBJECTIVE: Archive the final step, then reveal the four options with C highlighted.
- SCREEN LAYOUT: `#stack-step2 .stack-card` at left:100px, top:420px. `#options-reveal` `.pinned-col` per template, options grid 2x2.
- ON-SCREEN ELEMENTS: stack card "5/13" with collapsed math. Connector lines `#line-g-1` (G-1) and `#line-1-2` (1-2). Options A "12/13", B "5/12", C "5/13" (correct), D "13/5".
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 60.5)`, `apt.stackLineGrow(tl, "#line-1-2", 60.5)`. `apt.fadeOut(tl, "#illus-pinned", 60.5)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 60.5)`. `apt.fadeIn(tl, "#options-reveal", 61.2)`. `apt.optionsStagger(tl, ".opt-btn", 61.6)`. `apt.correctPulse(tl, ".opt-btn.correct", 65.5)` (timed to "option C" at 65.72-67.64). End fade `apt.fadeOut(tl, "#root > div", 68.0, 1.2)`.
- CAMERA MOVEMENT: none new, pinned question stays put; illustration clears via recenterForOptions.
- TRANSITIONS: morph, then fadeIn/stagger for options.
- EDUCATIONAL PURPOSE: connects computed sine value (5/13) directly to option C.
- VISUAL HIERARCHY: correct option C pulses green, unambiguous final answer.
- ATTENTION MANAGEMENT: single new focal group (options grid) after stack settles.
- MOTION NOTES: `optionsStagger` 0.12s stagger across 4 buttons; `correctPulse` back.out(1.5) yoyo.
- CONTINUITY FROM PREVIOUS SCENE: Step 2 card mid-morph from Scene 4 lands in the stack exactly as the options container begins fading in.

## PART 3: Asset List Required
- None beyond the shared design system (`design-system.css`, `animations.js`, `assets/`). No external SVG/PNG - the Phase 1 illustration is a pure inline-SVG + CSS right-triangle (stroke-draw path, conic-gradient angle arc), built from design-system tokens, no new colors or components invented.

## PART 4: Animation Complexity Notes
- 1 Given card + 2 Step cards (hypotenuse, then sine). Three stack cards total (G, 1, 2), two connector lines.
- Phase 1 illustration (triangle) uses `apt.pinFlow` like a normal illustration, pinning alongside the question at PIN_TIME=27.8, persists as `#illus-pinned` through Phase 2 until cleared via `apt.fadeOut` + `apt.recenterForOptions` at 60.5 right before Phase 3 (object continuity respected - same triangle throughout, not swapped).
- Angle arc uses the exact atan(5/12)=22.6199deg conic-gradient technique from q1/q2, not a hand-eyeballed sweep.
- No `apt.ambientLoop` needed - narration keeps pace with visual builds throughout, no long idle stretch on the pinned triangle.

## PART 5: Master Timeline Overview
```
0.0    Background + bottomStrip + topic + logo (always on)
0.3    q-full-card hero enter (lowered)
0.8    serial-num pop (lowered, mirrors card)
3.96   q-full-card + serial-num rise to rest
9.0    tri-path stroke-draws (1.0s)
12.6   right-angle-mark, angle-theta-arc, angle-theta-label fade in
22.6   label-opposite ("5") fades in
25.0   label-adjacent ("12") fades in
27.8   PIN_TIME - q-full-card -> q-pinned, illustration -> illus-pinned (pinFlow), serial-num fades out
28.3   GIVEN_TIME - Given card enters, textReveal (Opposite=5, Adjacent=12)
34.74  Given card morphs to stack-given (0.8s); Step 1 card enters, textReveal (Hypotenuse=sqrt(5^2+12^2)=13)
49.5   Step 1 card morphs to stack-step1 (0.8s), line-g-1 grows; Step 2 card enters, textReveal (sin theta=Opp/Hyp=5/13)
60.5   Step 2 card morphs to stack-step2 (0.8s), line-1-2 grows; illus-pinned fades out, question recenters
61.2   options-reveal fades in
61.6   options stagger in
65.5   correctPulse on option C
68.0   END_FADE_TIME - everything fades out together
```
