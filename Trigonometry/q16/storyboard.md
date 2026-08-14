# Storyboard - Trigonometry q16 (product of tan 30 degree and tan 60 degree)

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0.10-1.42 | "So welcome back again." | Intro | Center screen | Question card begins entrance |
| 2 | 1.98-4.30 | "It's time to solve one more problem." | Hook | Question card | Card settling |
| 3 | 4.76-10.84 | "Now in this problem, we are given two tangent values. One is tan 30 degree, the other is tan 60 degree." | State the given | Question card + illustration | Two reference right-triangles begin drawing, angle arcs at 30 deg and 60 deg |
| 4 | 11.34-19.14 | "The question is asking us to find their product. That means we simply need to multiply tan 30 degree and tan 60 degree." | State the ask | Illustration | "x = tan30 deg x tan60 deg" phrase readable near the two triangles |
| 5 | 19.84-26.32 | "Now we know the standard values. Tan 30 degree is equal to one by root three, and tan 60 degree is equal to root three." | Recall standard values | Illustration | Value label "1/root3" fades in under triangle 1's angle, value label "root3" fades in under triangle 2's angle |
| 6 | 26.88-30.78 | "So their product becomes one by root three multiplied by root three." | Set up product | Given card | Product expression assembled using `.frac` |
| 7 | 31.62-36.50 | "Here, root three in numerator and root three in denominator will cancel," | Cancel | Step 1 card | root3 highlighted in numerator and denominator, cancel mark |
| 8 | 36.96-38.12 | "so the answer becomes one." | Result | Step 1 card | "= 1" lands as `.ans` |
| 9 | 38.90-43.72 | "Hence, the product of tan 30 degree and tan 60 degree is one." | Confirm | Step 2 card (recap) | Restated final answer "1" |
| 10 | 44.32-46.62 | "So the correct option is option D." | Reveal answer | Options grid | Option D pulses green |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Question Reveal (0.0s-4.76s)
- TIMESTAMP: 0.3
- VOICEOVER: "So welcome back again. It's time to solve one more problem."
- VISUAL OBJECTIVE: Establish the question card as the sole focal point before the two tangent values are spoken.
- SCREEN LAYOUT: `#q-full-card` centered top per template, `#serial-num` badge top-left.
- ON-SCREEN ELEMENTS: QuestionCard (text: "Two slopes have tangent values tan 30 degrees and tan 60 degrees. What is their product?"), SerialNum badge "Q", dotted grid, bottom strip, topic name, logo.
- ANIMATION DETAILS: `apt.questionEnter(tl, "#q-full-card", 0.3)`; `apt.serialEnter(tl, "#serial-num", 0.8)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: fade+scale in.
- EDUCATIONAL PURPOSE: orient viewer before the diagram appears.
- VISUAL HIERARCHY: question card > badge > background.
- ATTENTION MANAGEMENT: single focal card, no illustration yet.
- MOTION NOTES: standard `apt.questionEnter` (0.7s, back.out(1.4)).
- CONTINUITY FROM PREVIOUS SCENE: opening scene, no prior state.

### Scene 2 - Illustration Build: Two Reference Triangles (4.76s-19.84s)
- TIMESTAMP: 4.76
- VOICEOVER: "Now in this problem, we are given two tangent values. One is tan 30 degree, the other is tan 60 degree. The question is asking us to find their product. That means we simply need to multiply tan 30 degree and tan 60 degree."
- VISUAL OBJECTIVE: Draw two small right triangles side by side, left one with a 30 degree angle at its base, right one with a 60 degree angle at its base, each with its angle arc drawn via the standard stroke-dasharray technique. Then show the multiplication expression forming beneath them.
- SCREEN LAYOUT: `#illustration` centered below question card, SVG viewBox `0 0 340 220`. Triangle 1 (30 deg): right angle at (70,180), base ray to (150,180), opposite side up to (70,90), hypotenuse from (150,180) to (70,90), angle arc at (150,180) radius 30. Triangle 2 (60 deg): right angle at (260,180), base ray to (200,180), opposite side up to (260,60), hypotenuse from (200,180) to (260,60), angle arc at (200,180) radius 30.
- ON-SCREEN ELEMENTS: `#tri1-base`, `#tri1-perp`, `#tri1-hyp` (stroke-draw), `#angle-arc-30` (theta circle technique, `--angle: 30`), `#tri1-label` ("30 deg"), `#tri2-base`, `#tri2-perp`, `#tri2-hyp` (stroke-draw), `#angle-arc-60` (theta circle technique, `--angle: 60`), `#tri2-label` ("60 deg"), `#product-expr` ("tan 30 deg x tan 60 deg").
- ANIMATION DETAILS: `#tri1-base`/`#tri1-perp`/`#tri1-hyp` strokeDashoffset 0 over 0.5s at 5.2 (as "tan 30 degree" is spoken); `#angle-arc-30` opacity 1 over 0.3s at 5.6; `#tri1-label` opacity 1 over 0.3s at 5.7; `#tri2-base`/`#tri2-perp`/`#tri2-hyp` strokeDashoffset 0 over 0.5s at 9.5 (as "tan 60 degree" is spoken); `#angle-arc-60` opacity 1 over 0.3s at 9.9; `#tri2-label` opacity 1 over 0.3s at 10.0; `#product-expr` opacity 1 over 0.4s at 15.8 (as "multiply tan 30 degree and tan 60 degree" is spoken).
- CAMERA MOVEMENT: none.
- TRANSITIONS: sequential stroke-draw reveals, no cuts.
- EDUCATIONAL PURPOSE: ground the two abstract tangent values in two concrete labeled angles before the standard-value recall begins.
- VISUAL HIERARCHY: triangle 1 first (30 deg, matches narration order), triangle 2 next (60 deg), product expression last.
- ATTENTION MANAGEMENT: one element group animates at a time, matched to its own spoken phrase.
- MOTION NOTES: triangles are illustrative reference right-triangles (not to a specific real-world scale), each angle arc uses penelty.txt's mandatory stroke-dasharray circle technique with a bare unitless `--angle` custom property (never "Ndeg"), opacity-only fade-in, no GSAP tween of `--angle` itself.
- CONTINUITY FROM PREVIOUS SCENE: question card has just settled from its Scene 1 entrance; illustration area (already visible but empty) now populates beneath it without a hard cut.

### Scene 3 - Standard Values Recall (19.84s-26.88s)
- TIMESTAMP: 19.84
- VOICEOVER: "Now we know the standard values. Tan 30 degree is equal to one by root three, and tan 60 degree is equal to root three."
- VISUAL OBJECTIVE: Attach the known standard value to each triangle's angle as it is recalled.
- SCREEN LAYOUT: same illustration, value labels placed just under each angle arc.
- ON-SCREEN ELEMENTS: `#tri1-value` (`.frac` showing 1/root3) under triangle 1, `#tri2-value` ("root 3") under triangle 2.
- ANIMATION DETAILS: `#tri1-value` opacity 1 over 0.4s at 21.6 (synced to "one by root three"); `#tri2-value` opacity 1 over 0.4s at 24.4 (synced to "root three").
- CAMERA MOVEMENT: none.
- TRANSITIONS: none, sequential fades only.
- EDUCATIONAL PURPOSE: pin the two standard trig values directly onto their respective triangles before the algebra begins.
- VISUAL HIERARCHY: `#tri1-value` first, `#tri2-value` second, matching narration order.
- ATTENTION MANAGEMENT: only one value label fades in per phrase.
- MOTION NOTES: `#tri1-value` uses the `.frac` component (never a bare division character, per house rule).
- CONTINUITY FROM PREVIOUS SCENE: the two fully-drawn triangles from Scene 2 hold in place; only value labels layer on top, no geometry changes.

### Scene 4 - Pin (26.88s-27.48s)
- PIN_TIME: 26.88
- GIVEN_TIME: 27.2
- VOICEOVER: "...root three. So their product becomes..." (transition point)
- VISUAL OBJECTIVE: Pin the question and the two labeled triangles into their Phase 2 slots, clearing center stage for the product expression.
- SCREEN LAYOUT: `#q-pinned` top strip; `#illus-pinned` smaller icon below-left.
- ON-SCREEN ELEMENTS: `#q-full-card` -> `#q-pinned`, `#illustration` -> `#illus-pinned`, `#serial-num` fades out.
- ANIMATION DETAILS: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 26.88)`; `apt.pinFlow(tl, "#illustration", "#illus-pinned", 26.88)`; `apt.fadeOut(tl, "#serial-num", 26.88, 0.5)`.
- CAMERA MOVEMENT: none, elements glide.
- TRANSITIONS: real glide, not fade swap.
- EDUCATIONAL PURPOSE: keep the two labeled triangles visible as a reference while solving begins.
- VISUAL HIERARCHY: pinned elements shrink in importance; Given card takes center next.
- ATTENTION MANAGEMENT: single simultaneous glide.
- MOTION NOTES: `apt.ambientLoop` on `#illus-pinned-icon` from 28.0 to 38.0 (small bob) so the pinned triangles stay alive through the solving stretch.
- CONTINUITY FROM PREVIOUS SCENE: the same triangle elements from Scenes 2-3 continue moving as one unit into the pinned slot.

### Scene 5 - Given: Product Setup (27.2s-31.62s)
- GIVEN_TIME: 27.2
- VOICEOVER: "So their product becomes one by root three multiplied by root three."
- VISUAL OBJECTIVE: Assemble the numeric product expression from the two recalled standard values.
- SCREEN LAYOUT: Given `.solution-card` centered per template.
- ON-SCREEN ELEMENTS: Given chip, math line: `.frac`(1/root3) x root3.
- ANIMATION DETAILS: `apt.cardEnter(tl, "#card-given .solution-card", 27.2)`; `apt.textReveal(tl, "#card-given .math")` - word-level synced to 27.3/27.9/28.4/29.2/30.1.
- CAMERA MOVEMENT: none.
- TRANSITIONS: card pop-in only.
- EDUCATIONAL PURPOSE: connect the two per-triangle values from Scene 3 into a single algebraic product before cancellation.
- VISUAL HIERARCHY: Given card (center) > pinned question + pinned triangles.
- ATTENTION MANAGEMENT: only actively narrated element; pinned triangles bob gently via ambient loop.
- MOTION NOTES: `.frac` component used for 1/root3 (never a bare division character).
- CONTINUITY FROM PREVIOUS SCENE: the pin glide from Scene 4 has just settled as the Given card grows in at center.

### Scene 6 - Step 1: Cancel and Solve (31.62s-38.90s)
- VOICEOVER: "Here, root three in numerator and root three in denominator will cancel, so the answer becomes one."
- VISUAL OBJECTIVE: Show root3 canceling between numerator and denominator, landing on the final answer 1.
- SCREEN LAYOUT: Given card morphs into `#stack-given`. Step 1 solution card takes center.
- ON-SCREEN ELEMENTS: Step 1 chip, math line: `.frac`(root3/root3) x root3 -> cancel -> "= 1" (`.ans`).
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 30.6)` (0.8s); `apt.cardEnter(tl, "#card-step1 .solution-card", 31.62)`; `apt.textReveal(tl, "#card-step1 .math")` - word-level synced to 32.38/33.1/34.0/34.9/35.7/36.96; `apt.emphasize` on the two cancelling "root3" spans at 34.9.
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph.
- EDUCATIONAL PURPOSE: make the cancellation visually explicit rather than jumping straight to 1.
- VISUAL HIERARCHY: Step 1 card (center, active) > Given stack card (left, collapsed) > pinned question + triangles.
- ATTENTION MANAGEMENT: the two "root3" spans highlighted via `.hi`, final "1" via `.ans`.
- MOTION NOTES: none beyond standard cardEnter/textReveal + one emphasize pulse.
- CONTINUITY FROM PREVIOUS SCENE: the Given card is still completing its morph into the left stack as Step 1's card begins its own entrance.

### Scene 7 - Step 2: Confirm Final Answer (38.90s-44.32s)
- VOICEOVER: "Hence, the product of tan 30 degree and tan 60 degree is one."
- VISUAL OBJECTIVE: Restate the confirmed answer in full sentence form before the options reveal.
- SCREEN LAYOUT: Step 1 morphs into `#stack-step1`. Step 2 card center.
- ON-SCREEN ELEMENTS: Step 2 chip, math line: "tan 30 deg x tan 60 deg = 1" (`.ans` on the final 1).
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 37.8)`; `apt.stackLineGrow(tl, "#line-g-1", 37.8)`; `apt.cardEnter(tl, "#card-step2 .solution-card", 38.90)`; `apt.textReveal(tl, "#card-step2 .math")` - line-level at 38.90 (paraphrased confirmation line).
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph.
- EDUCATIONAL PURPOSE: land the final answer in the exact form matched against the options next.
- VISUAL HIERARCHY: Step 2 card (center, active, answer highlighted) > Step 1 + Given stack (left) > pinned question + triangles.
- ATTENTION MANAGEMENT: only the final "1" span uses `.ans` styling.
- MOTION NOTES: `apt.emphasize` on "1" at 43.4.
- CONTINUITY FROM PREVIOUS SCENE: Step 1's card is still sliding into the stack (connector line to Given growing) as Step 2's card grows in at center.

### Scene 8 - Options Reveal (44.32s-46.62s+)
- VOICEOVER: "So the correct option is option D."
- VISUAL OBJECTIVE: Confirm 1 against the four options, land on Option D in green.
- SCREEN LAYOUT: Step 2 morphs into `#stack-step2`. `#options-reveal` on `.pinned-col`.
- ON-SCREEN ELEMENTS: 2x2 options grid (A: sqrt(3), B: 3, C: 1/3, D: 1), Option D marked `.correct`.
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 43.5)`; `apt.stackLineGrow(tl, "#line-1-2", 43.5)`; `apt.fadeOut(tl, "#illus-pinned", 43.5)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 43.5)`; `apt.fadeIn(tl, "#options-reveal", 44.3)`; `apt.optionsStagger(tl, ".opt-btn", 44.7)`; `apt.correctPulse(tl, ".opt-btn.correct", 45.9)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph, then recenter (0.5s), then stagger reveal.
- EDUCATIONAL PURPOSE: let the viewer match the computed 1 against listed options and confirm Option D.
- VISUAL HIERARCHY: Options grid (active reveal) > stack column (Given + Step1 + Step2) > pinned question.
- ATTENTION MANAGEMENT: only Option D pulses green; A/B/C stay neutral.
- MOTION NOTES: pinned triangle illustration fades out at recenter time since its job is done.
- CONTINUITY FROM PREVIOUS SCENE: Step 2's card is still completing its morph into the stack (connector line growing) as the question recenters for the options grid.

### End (46.62s-49.3s)
- END_FADE_TIME: 47.3 - everything (`#root > div`) fades together after the correct-option pulse (45.9 + 0.4s yoyo) and narration (ends 46.619) have both settled. Extend audio clip `data-duration` to 49.3 (buffer past narration end).

## PART 3: Asset List Required
- No external illustration files - the two reference right-triangles are built entirely from inline SVG (lines, angle arcs via the standard stroke-dasharray circle technique, text labels), matching the stroke-draw technique used in prior questions (q9/q15). Only `serial-num-badge.svg` and `logo.png` reused from `_template/assets/`.

## PART 4: Animation Complexity Notes
- 3 stack cards this question (Given, Step 1, Step 2) - one fewer than the full 4-card template since this problem has only one cancellation step and one confirmation step, no separate "find x" phase.
- Theta angle-arc technique IS needed this question (two named angles, 30 deg and 60 deg) - penelty.txt's stroke-dasharray circle standard applies to both `#angle-arc-30` and `#angle-arc-60`. `--angle` set as a bare unitless number (`30` and `60`, never `"30deg"`), opacity-only fade-in, no GSAP tween of `--angle` itself.
- Illustration viewBox and label font-sizes sized with margin so "30 deg"/"60 deg"/value labels never clip (penelty.txt q10 fix).
- `.frac` component mandatory for 1/root3 - never a bare division character (house rule, also called out in penelty.txt-adjacent standards).
- Every clip whose data-duration would otherwise end exactly at a morphToStack/fadeOut/pinFlow completion gets the standard +1.5-2s buffer (penelty.txt q9 fix) - applied to phase1, illus-pinned, card-given, card-step1, card-step2.

## PART 5: Master Timeline Overview
```
0.3    Question card enters (questionEnter)
0.8    Serial badge pops in
5.2    Triangle 1 (30 deg) draws
5.6    Angle arc 1 (30 deg) fades in
5.7    "30 deg" label fades in
9.5    Triangle 2 (60 deg) draws
9.9    Angle arc 2 (60 deg) fades in
10.0   "60 deg" label fades in
15.8   Product expression fades in
21.6   Triangle 1 value "1/root3" fades in
24.4   Triangle 2 value "root3" fades in
26.88  PIN_TIME - pinFlow (question + triangles) to pinned slot; serial badge fades out
27.2   GIVEN_TIME - Given card enters (1/root3 x root3)
28.0   Ambient loop starts on pinned triangles
30.6   Given -> stack-given morph
31.62  Step 1 card enters (cancel root3, = 1)
37.8   Step 1 -> stack-step1 morph; line-g-1 grows
38.90  Step 2 card enters (tan30 x tan60 = 1)
43.5   Step 2 -> stack-step2 morph; line-1-2 grows; pinned triangles fade out; question recenters
44.3   Options grid fades in
44.7   Options stagger in
45.9   Option D correct pulse
47.3   End fade (all elements), 1.2s
```
