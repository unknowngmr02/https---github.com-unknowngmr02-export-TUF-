# q18 - Trigonometry & Height n Distance - Storyboard

Question: acute angle, opposite = 8, hypotenuse = 17. Find tan theta.
Options: A) 15/8  B) 8/15  C) 8/17  D) 15/17. Correct: B
Duration: 69.36s

---

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0.12-3.68 | "welcome back again, it's time to solve one more problem" | Hook | Center screen | QuestionCard full enter |
| 2 | 4.38-13.74 | "Now in this problem, we are given an acute angle... opposite side is eight and hypotenuse is 17" | State givens visually | Illustration | Right triangle draws in, opposite=8 and hyp=17 labels reveal |
| 3 | 14.26-19.60 | "question asking to find its tan... tan theta = opposite by adjacent" | Set up goal | Formula | tan theta formula fades in near triangle |
| 4 | 20.14-28.68 | "Opposite already given, adjacent not given, let adjacent side be X" | Identify unknown | Adjacent side | Adjacent side (base) labeled "X", pulsing emphasis |
| 5 | 29.22-40.10 (PIN_TIME ~28.5) | "Using Pythagoras theorem... hyp^2 = opp^2 + adj^2... 17^2 = 8^2 + X^2" | Solve start | Given card | Pin question+illustration, Given card enters with Pythagoras setup |
| 6 | 40.52-48.36 | "289 = 64 + X^2, X^2 = 289 - 64" | Step 1 math | Step1 card | Step1: substitute and rearrange |
| 7 | 48.82-56.38 | "X^2 = 225, so X = 15, now find tan theta" | Step 1 result / bridge | Step1 -> Step2 | Step1 morphs to stack, Step2 opens with X=15 |
| 8 | 56.90-61.94 | "tan theta = opposite by adjacent = 8 by 15" | Step 2 math | Step2 card | Fraction 8/15 forms, highlighted |
| 9 | 62.76-67.00 | "Hence, the tan of the angle is 8 by 15" | Confirm result | Result | Step2 morphs to stack, result emphasized |
| 10 | 67.80-69.36 | "correct option is option B" | Reveal answer | Options grid | Options reveal, B pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Question Intro
- TIMESTAMP: 0.3 - 8.0
- VOICEOVER: "welcome back again, it's time to solve one more problem. Now in this problem, we are given an acute angle."
- VISUAL OBJECTIVE: Establish question card and topic context.
- SCREEN LAYOUT: QuestionCard centered per template.html full-card position; SerialNum top-left; bottomStrip + topic name + logo always visible.
- ON-SCREEN ELEMENTS: `#q-full-card` (question text), `#serial-num` (badge "Q"), background dotted grid + bottom strip.
- ANIMATION DETAILS: `apt.questionEnter(tl, "#q-full-card", 0.3)`. `apt.serialEnter(tl, "#serial-num", 0.8)`.
- CAMERA MOVEMENT: none (static frame).
- TRANSITIONS: fade+scale entrance only.
- EDUCATIONAL PURPOSE: orient viewer to the problem before visuals appear.
- VISUAL HIERARCHY: question text primary, serial badge secondary.
- ATTENTION MANAGEMENT: single focal point (question card).
- MOTION NOTES: standard entrance, no extra flourish.
- CONTINUITY FROM PREVIOUS SCENE: video start, no prior scene.

### Scene 2 - Right Triangle Illustration Builds In
- TIMESTAMP: 5.76 - 19.60
- VOICEOVER: "we are given an acute angle. For this angle, the opposite side is eight and the hypotenuse is 17. The question is asking us to find its tan. For tan theta, we need opposite by adjacent."
- VISUAL OBJECTIVE: Draw the right triangle (true to scale: tan=8/15, angle=28.07deg) with theta at the left vertex, opposite (right vertical side) and hypotenuse (slanted side) labeled with CHIP pills (not bare svg text, per feedback), right-angle mark at bottom-right vertex, then reveal a large, clear tan-theta formula row beneath it.
- SCREEN LAYOUT: Illustration is a larger 700x480 wrapper (per feedback: bigger + better aligned), centered below the question card.
- ON-SCREEN ELEMENTS: `#illustration > .figure` containing the SVG triangle (theta-vertex, right-angle-vertex, apex - see coordinate comment in HTML), theta arc (stroke-dasharray circle technique per penelty.txt standard), chip-pill labels `#chip-theta` (theta), `#chip-opp` ("8"), `#chip-hyp` ("17") absolutely positioned against the same scaled coordinates the svg uses; `#chip-adj` ("X") exists in the DOM but stays hidden here (revealed only on the pinned copy in Scene 4, once the narration actually names the unknown). Below the figure, `#formula-row` - a large 40px text line "tan-theta = " + a big `.frac` (opposite/adjacent) - not a small chip, per feedback.
  - Geometry (comment-documented in HTML): theta-vertex=(96,352), right-angle-vertex=(336,352), apex=(336,224) at display scale 1.6x. base=240, perp=128, hyp=272, atan2(128,240)=28.07deg -> --angle:28.07 (matches the true 8/15 triangle exactly, drawn to true scale from the start since the actual answer is already known to the composition).
- ANIMATION DETAILS: `apt.fadeIn(tl, "#illustration", 5.76, 0.6)` reveals the whole figure (lines are static, already fully drawn - no invented stroke-draw animation, per the "don't introduce animations the helpers don't cover" rule). `apt.fadeIn(tl, "#theta-arc", 8.30)` + `apt.fadeIn(tl, "#chip-theta", 8.30)`. `apt.fadeIn(tl, "#chip-opp", 9.46)`. `apt.fadeIn(tl, "#chip-hyp", 11.52)`. `apt.fadeIn(tl, "#formula-row", 16.72, 0.6)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: sequential fade-ins, no cuts.
- EDUCATIONAL PURPOSE: ground abstract terms (opposite, hypotenuse, tan) in the concrete triangle using clear chip labels, then state the formula prominently before the solving phase begins.
- VISUAL HIERARCHY: triangle geometry first, chip labels second, formula row third (largest single text element in Phase 1).
- ATTENTION MANAGEMENT: labels appear exactly when spoken to avoid overload.
- MOTION NOTES: theta arc must only opacity-fade, never GSAP-tween `--angle` (penelty.txt standard). Chip labels use the existing `.chip` component (pill, primary-blue bg, white text) - not a new component.
- CONTINUITY FROM PREVIOUS SCENE: question card is settled and static; illustration builds directly beneath it in the empty lower frame, no motion carried over.

### Scene 3 - Identify Missing Adjacent Side (now plays out on the PINNED figure)
- TIMESTAMP: 20.14 - 26.86 (after PIN_TIME=19.6 - the full illustration has already glided into `#illus-pinned` by this point)
- VOICEOVER: "Opposite is already given, but adjacent is not given. So first, we have to find the adjacent side. Let the adjacent side be X."
- VISUAL OBJECTIVE: Draw viewer's eye to the base (adjacent) side on the pinned figure and reveal its "X" chip.
- SCREEN LAYOUT: pinned figure position (`#illus-pinned`, left:290px top:170px), no further layout change.
- ON-SCREEN ELEMENTS: pinned figure's base line, `#chip-adj-pinned` ("X" chip, hidden until 26.86).
- ANIMATION DETAILS: `apt.emphasize(tl, "#illus-pinned line:nth-of-type(1)", 20.14)` (pulse the base line), `apt.fadeIn(tl, "#chip-adj-pinned", 26.86)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: none, continuous.
- EDUCATIONAL PURPOSE: frame the unknown that Step 1's Pythagoras will solve; runs in parallel with the Given card (Scene 4) stating the same "Adjacent = X" line.
- VISUAL HIERARCHY: base side + X chip become a secondary focus point beside the Given card.
- ATTENTION MANAGEMENT: emphasize pulse draws eye without moving anything else.
- MOTION NOTES: single emphasize pulse (0.3s yoyo per animations.js), not repeated.
- CONTINUITY FROM PREVIOUS SCENE: this is the same triangle from Scene 2, now living in the pinned slot after Scene 4's pinFlow; only the base line/X chip receive new attention, everything else holds position.

### Scene 4 - Pin to Phase 2 + Given Card (plain recap, not the formula)
- TIMESTAMP: PIN_TIME = 19.6, GIVEN_TIME = 20.14
- VOICEOVER: "Opposite is already given, but adjacent is not given. So first, we have to find the adjacent side. Let the adjacent side be X."
- VISUAL OBJECTIVE: Pin question+illustration right after the tan formula is introduced, open a Given card that plainly recaps the known values and names the unknown (X) - Pythagoras itself is deferred to Step 1, not stated here.
- SCREEN LAYOUT: `#q-pinned` top area, `#illus-pinned` pinned figure (exact CSS-scaled copy of the full illustration, transform:scale(0.45), per penelty.txt rule 5), `#card-given .solution-card` centered.
- ON-SCREEN ELEMENTS: pinned question text, pinned triangle figure with chip labels (theta/8/17 already visible, "X" chip still hidden), Given SolutionCard chip "Given" with math `Opposite = 8` / `Hypotenuse = 17` / `Adjacent = X`.
- ANIMATION DETAILS: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 19.6)`, `apt.pinFlow(tl, "#illustration", "#illus-pinned", 19.6)`, `apt.cardEnter(tl, "#card-given .solution-card", 20.14)`, `apt.textReveal(tl, "#card-given .math")`. On the pinned figure: `apt.emphasize(tl, "#illus-pinned line:nth-of-type(1)", 20.14)` pulses the still-unlabeled base line exactly as the narration calls out the unknown, then `apt.fadeIn(tl, "#chip-adj-pinned", 26.86)` reveals the "X" chip verbatim with "let the adjacent side be X".
- CAMERA MOVEMENT: glide of question/illustration into pinned slot (real position glide, not fade swap).
- TRANSITIONS: pinFlow glide (0.8s).
- EDUCATIONAL PURPOSE: separate "what we know" (Given) from "how we solve it" (Step 1's Pythagoras), so the Given card doesn't front-load the formula before the viewer has even named the unknown.
- VISUAL HIERARCHY: Given card becomes new focal point; pinned figure recedes but stays visible for reference, its "X" chip lighting up in sync with the Given card's own "Adjacent = X" line.
- ATTENTION MANAGEMENT: single glide motion, then card enter, then one pulse + one chip reveal - no simultaneous competing motion.
- MOTION NOTES: data-duration on `#q-full-card`/`#illustration` clips extended ~1.5-2s past 19.6+0.8=20.4 completion (penelty.txt q9 buffer rule) to avoid mid-glide cutoff.
- CONTINUITY FROM PREVIOUS SCENE: the triangle built in Scene 2-3 (theta/opposite/hypotenuse chips already lit, base side still unlabeled) glides directly into the pinned figure; the Given card's three lines land in the same order the pinned figure already displays them (8, 17, then X).

### Scene 5 - Step 1: Pythagoras + Solve for X
- TIMESTAMP: 29.22 - 56.38
- VOICEOVER: "Using Pythagoras theorem, hypotenuse square is equal to opposite square plus adjacent square. So 17 square is equal to eight square plus X square. That means 289 is equal to 64 plus X square. So X square is equal to 289 minus 64. After subtracting, X square is equal to 225, so X is equal to 15. Now we can find tan theta."
- VISUAL OBJECTIVE: State the Pythagoras relation, substitute the real numbers, and simplify all the way to X = 15 - this whole derivation now lives in Step 1 (moved out of the Given card per feedback).
- SCREEN LAYOUT: Given card morphs to stack (left column) just before Step 1 opens; Step 1 card enters center.
- ON-SCREEN ELEMENTS: `#stack-given .stack-card` (step-circle "G"), `#card-step1 .solution-card` chip "Step 1", math `hyp^2=opp^2+adj^2` -> `17^2=8^2+X^2` -> `289=64+X^2` -> `X^2=225` -> `X=<span class="ans">15</span>`.
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 28.4)` (breathing gap before Step1's Pythagoras narration starts at 29.22). `apt.cardEnter(tl, "#card-step1 .solution-card", 29.22)`. `apt.textReveal(tl, "#card-step1 .math")`. `apt.setStackLine("#line-g-1", "#stack-given .step-circle", "#stack-step1 .step-circle")` called before timeline build; `apt.stackLineGrow(tl, "#line-g-1", 55.9)` (fires with Step1's own morph-to-stack, Scene 6).
- CAMERA MOVEMENT: none beyond card morph slide.
- TRANSITIONS: standard 0.8s morphToStack.
- EDUCATIONAL PURPOSE: walk through the full Pythagoras derivation in one continuous step, ending at concrete X=15.
- VISUAL HIERARCHY: active Step1 card primary, Given stack card secondary (receding reference).
- ATTENTION MANAGEMENT: text reveals line-by-line matching each spoken equation line.
- MOTION NOTES: `card-step1` clip data-duration extended past its own morph-to-stack start (in Scene 6) by 1.5-2s per penelty.txt rule.
- CONTINUITY FROM PREVIOUS SCENE: Given card's plain recap (Opposite=8, Hypotenuse=17, Adjacent=X) morphs into the stack right as Step1 opens with the formal Pythagoras relation - the same three quantities the viewer just saw, now assembled into an equation.

### Scene 6 - Step 2: Compute tan theta
- TIMESTAMP: 56.90 - 67.00
- VOICEOVER: "Tan theta is equal to opposite by adjacent. So tan theta is equal to eight by 15. Hence, the tan of the angle is eight by 15."
- VISUAL OBJECTIVE: Step1 morphs to stack (badge "1"), Step2 card opens showing final fraction 8/15.
- SCREEN LAYOUT: `#stack-step1 .stack-card` in left column below Given; `#card-step2 .solution-card` centered.
- ON-SCREEN ELEMENTS: chip "Step 2", math `tan theta = opposite / adjacent` -> `tan theta = ` `.frac` component (top "8" hi, bot "15" hi) -> result span emphasized.
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 55.9)` (breathing gap after X=15 lands at ~55.9, before Step2 opens at 56.90). `apt.cardEnter(tl, "#card-step2 .solution-card", 56.90)`. `apt.textReveal(tl, "#card-step2 .math")`. `apt.setStackLine("#line-1-2", ...)` + `apt.stackLineGrow(tl, "#line-1-2", 55.9)`. `apt.resultReveal(tl, "#result-span", 63.82)` timed to "the tan of the angle is eight by 15" line.
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morphToStack.
- EDUCATIONAL PURPOSE: deliver final answer using the `.frac` component (per math-notation rule, never bare "/").
- VISUAL HIERARCHY: fraction 8/15 is the visual climax, largest emphasis.
- ATTENTION MANAGEMENT: resultReveal pulse draws eye to final fraction exactly on "hence" line.
- MOTION NOTES: `card-step2` clip data-duration extended past its own morph-to-stack start (Scene 7) by 1.5-2s.
- CONTINUITY FROM PREVIOUS SCENE: X=15 result from Step1 is still visible as Scene 6 opens, directly substituted into the tan formula so the value carries over rather than reappearing from nowhere.

### Scene 7 - Options Reveal
- TIMESTAMP: 67.5 - 69.36
- VOICEOVER: "So the correct option is option B."
- VISUAL OBJECTIVE: Step2 morphs to stack, options grid reveals with B highlighted green.
- SCREEN LAYOUT: options grid 2x2 per template.html; pinned question recentred above.
- ON-SCREEN ELEMENTS: `#stack-step2 .stack-card` (badge "2"), `#options-reveal` with `.opt-btn` A (15/8), B (8/15, class `correct`), C (8/17), D (15/17).
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 66.7)`. `apt.fadeOut(tl, "#illus-pinned", 66.7)`. `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 66.7)`. `apt.fadeIn(tl, "#options-reveal", 67.5)`. `apt.optionsStagger(tl, ".opt-btn", 67.8)`. `apt.correctPulse(tl, ".opt-btn.correct", 69.0)`.
- CAMERA MOVEMENT: pinned question recenters as illustration fades, freeing vertical space for options grid.
- TRANSITIONS: morphToStack (0.8s) then fadeIn/stagger.
- EDUCATIONAL PURPOSE: confirm correct answer against all options.
- VISUAL HIERARCHY: option B green pulse is final and strongest focal point.
- ATTENTION MANAGEMENT: all four options appear together (context) then B alone pulses (answer).
- MOTION NOTES: stack lines (`line-g-1`, `line-1-2`) remain visible, never faded, per penelty.txt/README rule.
- CONTINUITY FROM PREVIOUS SCENE: Step2's fraction 8/15 morphs directly into stack badge "2" while the pinned illustration recedes, so the options grid opens into the same space the solving cards just vacated, not a hard cut.

---

## PART 3: Asset List Required
- Custom SVG right triangle illustration (inline SVG, drawn true to scale for tan=8/15): theta-vertex, right-angle-vertex, apex, theta arc (stroke-dasharray circle technique), right-angle marker.
- Chip-pill labels (`.chip` component, per feedback - reused, not a new component): theta, "8", "17", "X".
- Large formula row below the figure (`#formula-row`, 40px text + big `.frac`), per feedback ("write the tan formula bigger").
- Pinned figure: EXACT same inner markup as the full-size figure, wrapped in `transform:scale(0.45)` (CSS scale, not a redraw) - satisfies penelty.txt rule 5 more strictly than a manually resized copy.
- No external images beyond `_template/assets/logo.png` and `serial-num-badge.svg`.

## PART 4: Animation Complexity Notes
- Theta arc: static unitless `--angle` custom property, computed via atan2 from true triangle coordinates, opacity-fade only (penelty.txt q12 standard).
- All morphToStack calls fixed at 0.8s; ~1s breathing gap enforced before next card entrance.
- Clip data-duration buffers: `q-full-card`, `illustration`, `card-given`, `card-step1`, `card-step2` all extended 1.5-2s past their respective morph/pinFlow completion times (penelty.txt q9 standard) to avoid mid-transition cutoff.
- Stack connector lines (`line-g-1`, `line-1-2`) computed via `apt.setStackLine` from real rendered circle centers, never hand-guessed, and never faded out later including during options recenter.
- Given card content restructured per feedback: it now states only the plain given values + names the unknown (no formula); the full Pythagoras derivation lives entirely in Step 1.

## PART 5: Master Timeline Overview

```
0.3   QuestionCard full enter
0.8   SerialNum badge pop
5.76  Illustration figure fades in (triangle, true to scale)
8.30  Theta arc + theta chip fade in
9.46  "8" opposite chip fades in
11.52 "17" hypotenuse chip fades in
16.72 Formula row fades in - large "tan-theta = opposite/adjacent"
19.6  PIN_TIME - pinFlow glide (question + illustration -> pinned slot)
20.14 GIVEN_TIME - Given card enters: Opposite=8, Hypotenuse=17, Adjacent=X
20.14 Pinned figure's base line emphasize-pulses (unknown named)
26.86 Pinned figure's "X" chip fades in
28.4  Given -> stack morph (badge "G")
29.22 Step1 card enters: hyp^2=opp^2+adj^2 -> 17^2=8^2+X^2 -> 289=64+X^2 -> X^2=225 -> X=15
55.9  Step1 -> stack morph (badge "1"), line-g-1 grows
56.90 Step2 card enters: tan theta = opp/adj -> frac 8/15
66.7  Step2 -> stack morph (badge "2"), line-1-2 grows; illus-pinned fades; question recenters
67.5  Options grid fades in
67.8  Options stagger reveal (A/B/C/D)
69.0  Correct option B pulse
69.9  End fade begins (1.2s)
69.36 Voiceover ends
```
