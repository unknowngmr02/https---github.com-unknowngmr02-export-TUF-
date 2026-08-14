# Storyboard - Trigonometry & Height n Distance Q4 (Angle of Elevation)

## PART 1: Narration Beat Analysis

| Beat | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.10-3.42 | "So welcome back again. It's time to solve one more problem." | Cold open | Question card | Question card + SerialNum enter |
| 2 | 3.94-16.28 | "Now in this problem we have a pole whose height is 12 meter, and the shadow of the pole is 12 root three meter. The question is asking us to find the angle of elevation of the sun." | State the problem | Question text numbers | Numbers highlighted in primary blue as spoken |
| 3 | 17.02-25.74 | "First let us draw the situation. Here is the pole. Here is its shadow on the ground. Now join the top of the pole to the end of the shadow." | Build the mental picture | Illustration | Pole draws upward, shadow extends along ground, hypotenuse (sun ray) line draws in |
| 4 | 26.20-33.52 | "This forms a right triangle, and this angle with the ground is the angle of elevation that we need to find." | Name the target unknown | Right-angle marker + theta | Right-angle marker pops at base, theta arc glows at shadow-end vertex |
| 5 | 33.88-46.48 | "Now let us identify the sides. The height of the pole becomes the opposite side, so opposite is 12. The shadow becomes the adjacent side, so adjacent is 12 root three." | Map triangle to trig labels | Pinned illustration + Given card | Pin flow to top; Given card enters with Opposite/Adjacent values |
| 6 | 46.88-71.00 | "Since we know opposite and adjacent, tan theta is the correct ratio. Tan theta = opposite/adjacent. Putting values, tan theta = 12/12 root three. The 12s cancel, so tan theta = 1/root three." | Derive and simplify the equation | Step 1 card | Formula reveals, substitutes, cancels, simplifies line by line |
| 7 | 73.52-88.22 | "Now we only need one standard value: tan 30 degree = 1/root three. Both values match, so theta = 30 degree. Hence the angle of elevation is 30 degree. So the correct option is option D." | Match to standard value, conclude | Step 2 card, then options | Standard-value line reveals, theta = 30 answer reveals, options grid appears, D pulses green |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Cold Open (0.0-3.6s)
- TIMESTAMP: 0.0
- VOICEOVER: "So welcome back again. It's time to solve one more problem."
- VISUAL OBJECTIVE: Establish the question card as the anchor of the frame.
- SCREEN LAYOUT: `#q-full-card` centered, lowered by 180px (`apt.heroEnterLowered`), SerialNum badge top-left of the card.
- ON-SCREEN ELEMENTS: dotted-grid, bottom-strip, topic-name "Trigonometry & Height n Distance", logo, `#q-full-card`, `#serial-num`.
- ANIMATION DETAILS: `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)` at 0.3s; SerialNum pops in parallel at 0.8s (scale 0->1, rotation -45->0), rises with card at 3.6s.
- CAMERA MOVEMENT: none (static frame, motion is internal to elements).
- TRANSITIONS: fade+scale entrance (`back.out(1.4)`).
- EDUCATIONAL PURPOSE: orient viewer to the exact question being solved.
- VISUAL HIERARCHY: question card dominant, badge secondary accent.
- ATTENTION MANAGEMENT: nothing else on screen competes.
- MOTION NOTES: card starts low/centered, holds until 3.6s.
- CONTINUITY FROM PREVIOUS SCENE: opening scene, no prior state.

### Scene 2 - Question Read (3.94-16.28s)
- TIMESTAMP: 3.94
- VOICEOVER: "Now in this problem we have a pole whose height is 12 meter, and the shadow of the pole is 12 root three meter. The question is asking us to find the angle of elevation of the sun."
- VISUAL OBJECTIVE: reinforce the two given numbers directly in the question text.
- SCREEN LAYOUT: same as Scene 1, card fully risen at rest position (top:80px).
- ON-SCREEN ELEMENTS: `#q-full-card` with `.q-text`, numbers "12 m" and "12√3 m" and phrase "angle of elevation" wrapped in `<span class="num">`.
- ANIMATION DETAILS: no new entrance; text is static (already visible from Scene 1's fade-in). Numbers are pre-colored primary blue, no separate reveal needed since whole card faded in together.
- CAMERA MOVEMENT: none.
- TRANSITIONS: none, holding shot.
- EDUCATIONAL PURPOSE: viewer reads the full problem before any solving starts.
- VISUAL HIERARCHY: numbers in blue draw the eye first.
- ATTENTION MANAGEMENT: illustration area still empty, keeps focus on text.
- MOTION NOTES: static hold.
- CONTINUITY FROM PREVIOUS SCENE: direct continuation of Scene 1's risen card, no new motion.

### Scene 3 - Illustration Build (17.02-25.74s)
- TIMESTAMP: 17.02
- VOICEOVER: "First let us draw the situation. Here is the pole. Here is its shadow on the ground. Now join the top of the pole to the end of the shadow."
- VISUAL OBJECTIVE: construct the right triangle piece by piece so viewer sees where opposite/adjacent will come from.
- SCREEN LAYOUT: `#illustration` area (left:50%, top:480px, 1400x300) hosts a flat 2D scene: ground line at the bottom, vertical pole on the left third, shadow segment extending right from the pole's base, hypotenuse line connecting pole-top to shadow-end.
- ON-SCREEN ELEMENTS: `pole.svg` (vertical bar with flat top), ground baseline (CSS div), shadow line + "12 m"/"12√3 m" labels (22px+ per design.md floor), hypotenuse stroke-drawn line.
- ANIMATION DETAILS: pole scale/height draws 0->1 from base (17.82s); shadow line draws left-to-right via `scaleX` from pole base (19.44s, matching `apt.roadSweep` pattern); hypotenuse line stroke-draws from pole-top to shadow-end (22.78s-25.74s) using stroke-dashoffset technique.
- CAMERA MOVEMENT: none.
- TRANSITIONS: sequential draw-in per element, no cuts.
- EDUCATIONAL PURPOSE: builds spatial intuition for the triangle before naming sides.
- VISUAL HIERARCHY: pole first, then ground/shadow, then connecting hypotenuse last (matches spoken order).
- ATTENTION MANAGEMENT: one new stroke draws at a time, no simultaneous competing motion.
- MOTION NOTES: each draw takes roughly 0.6-0.8s, timed to its own phrase.
- CONTINUITY FROM PREVIOUS SCENE: illustration area was empty through Scenes 1-2; this is its first content, appearing under the still-large question card.

### Scene 4 - Right Triangle + Angle of Elevation (26.20-33.52s)
- TIMESTAMP: 26.20
- VOICEOVER: "This forms a right triangle, and this angle with the ground is the angle of elevation that we need to find."
- VISUAL OBJECTIVE: label the right angle and the target unknown (theta) before pinning.
- SCREEN LAYOUT: same illustration area, triangle now fully drawn.
- ON-SCREEN ELEMENTS: small square right-angle marker at the pole's base; theta arc + "θ" label at the shadow-end vertex (where hypotenuse meets ground).
- ANIMATION DETAILS: right-angle marker pops in (scale 0->1, 26.20s); theta arc draws in with a soft glow pulse (`apt.emphasize`-style yoyo scale) at 28.52s, label "θ" fades up beside it.
- CAMERA MOVEMENT: none.
- TRANSITIONS: pop + glow, no cut.
- EDUCATIONAL PURPOSE: viewer now has the exact geometric target (theta) fixed in mind before algebra starts.
- VISUAL HIERARCHY: theta glow is the single brightest new element, everything else settled.
- ATTENTION MANAGEMENT: only two small markers added, doesn't crowd the triangle.
- MOTION NOTES: theta glow given ~1s to breathe before Scene 5's pin.
- CONTINUITY FROM PREVIOUS SCENE: theta arc sits exactly at the vertex the hypotenuse (drawn in Scene 3) terminates at, so it reads as the natural next annotation on the same static triangle, not a new element.

### Scene 5 - Pin + Given Card (PIN_TIME 33.88 / GIVEN_TIME 35.78)
- TIMESTAMP: 33.88 (pin), 35.78 (given)
- VOICEOVER: "Now let us identify the sides. The height of the pole becomes the opposite side, so the opposite side is twelve. The shadow becomes the adjacent side, so the adjacent side is twelve root three."
- VISUAL OBJECTIVE: shrink question+illustration to their pinned slots and open the Given card with Opposite/Adjacent values.
- SCREEN LAYOUT: `#q-pinned` (left:385px, top:30px, width:1275px), `#illus-pinned` (left:280px, top:190px, small triangle recap), `#card-given .solution-card` centered at left:640px, top:480px.
- ON-SCREEN ELEMENTS: pinned question card, pinned small triangle with theta marked, Given solution-card with chip "Given".
- ANIMATION DETAILS: `apt.pinFlow(tl,"#q-full-card","#q-pinned",33.88)` and `apt.pinFlow(tl,"#illustration","#illus-pinned",33.88)` glide together (0.8s); `apt.fadeOut(tl,"#serial-num",33.88,0.5)`; `apt.cardEnter(tl,"#card-given .solution-card",35.78)`; `apt.textReveal(tl,"#card-given .math")` reveals "Opposite side = 12" (word-level, data-t 38.82) then "Adjacent side = 12√3" (word-level, data-t 44.30).
- CAMERA MOVEMENT: none (glide is on the elements, not a camera).
- TRANSITIONS: pinFlow glide (real motion, not fade swap).
- EDUCATIONAL PURPOSE: formally labels the triangle's two known sides in trig vocabulary.
- VISUAL HIERARCHY: Given card is now the largest/brightest element in frame.
- ATTENTION MANAGEMENT: pinned elements shrink and quiet down, so the new Given card reads as the active focus.
- MOTION NOTES: 1.9s gap between PIN_TIME and GIVEN_TIME is a deliberate settle beat before the Given card opens.
- CONTINUITY FROM PREVIOUS SCENE: the same pole/shadow/theta triangle from Scene 4 is what glides into `#illus-pinned` - no new triangle is drawn, it is the literal continuation of the Scene 3-4 illustration shrinking into its pinned slot.

### Scene 6 - Step 1: Tan Theta Setup and Simplify (Step1 enter 47.88, morph to stack 72.5)
- TIMESTAMP: 46.88 (Given morphs to stack), 47.88 (Step 1 enters)
- VOICEOVER: "Since we know the opposite side and the adjacent side, tan theta is the correct trigonometric ratio to use. Tan theta is equal to opposite side divided by adjacent side. Putting the values, tan theta is equal to twelve divided by twelve root three. The twelve from the numerator and denominator gets canceled. So now tan theta is equal to one divided by root three."
- VISUAL OBJECTIVE: derive tan theta = 1/root3 in three clean sub-steps.
- SCREEN LAYOUT: Given card morphs into `#stack-given` (left:100px,top:140px); `#card-step1 .solution-card` opens centered (left:640px, top:460px).
- ON-SCREEN ELEMENTS: stack chip "G" with Opposite/Adjacent recap; Step 1 chip; three math lines: "tan θ = Opposite/Adjacent" (using `.frac`), "= 12/12√3", "= 1/√3" (12s struck through before canceling).
- ANIMATION DETAILS: `apt.morphToStack(tl,"#card-given .solution-card","#stack-given .stack-card",46.88)`; `apt.cardEnter(tl,"#card-step1 .solution-card",47.88)`; `apt.textReveal(tl,"#card-step1 .math")` reveals line 1 at data-t 53.18 (word-level: "tan/θ/=/Opposite/Adjacent"), line 2 at data-t 57.20 ("=/12/12√3"), line 3 at data-t 65.00 ("=/1/√3") after a strike-through cancel animation on both "12"s (`apt.emphasize`-style flash, 62.30s).
- CAMERA MOVEMENT: none.
- TRANSITIONS: 0.8s morph then card enter, no hard cuts.
- EDUCATIONAL PURPOSE: shows the full algebraic path from ratio choice to simplified value, not just the final number.
- VISUAL HIERARCHY: `.frac` fraction is the visual centerpiece, cancel animation draws the eye to the "12"s briefly then to the simplified result.
- ATTENTION MANAGEMENT: one line reveals at a time, matching the slow narration pace here (this is the densest math beat).
- MOTION NOTES: 62.30-71.00 has no new element besides the cancel flash and final line - the storyboard leaves that stretch to the flash + line 3 reveal rather than inventing filler motion.
- CONTINUITY FROM PREVIOUS SCENE: Given card's box is still completing its morph into the stack (0.8s, ends 47.68) as Step 1's `cardEnter` begins 0.2s later at 47.88, and the Given circle badge is already visible top-left before Step 1's card even opens, keeping the left column growing continuously.

### Scene 7 - Step 2: Standard Value and Answer (Step2 enter 73.50, morph 84.0)
- TIMESTAMP: 72.50 (Step 1 morphs to stack), 73.50 (Step 2 enters)
- VOICEOVER: "Now we only have to remember one standard trigonometric value. Tan thirty degree is equal to one divided by root three. Both values are exactly the same, so theta must be thirty degree. Hence, the angle of elevation of the sun is thirty degree. So the correct option is option D."
- VISUAL OBJECTIVE: match the derived value to the standard angle and land on the final answer.
- SCREEN LAYOUT: Step 1 morphs into `#stack-step1` (left:100px, top:290px); `#card-step2 .solution-card` opens centered.
- ON-SCREEN ELEMENTS: stack circle "1"; Step 2 chip; two math lines: "tan 30° = 1/√3" and "θ = 30°" (`.ans` styled).
- ANIMATION DETAILS: `apt.morphToStack(tl,"#card-step1 .solution-card","#stack-step1 .stack-card",72.50)`; `apt.stackLineGrow(tl,"#line-g-1",72.50)`; `apt.cardEnter(tl,"#card-step2 .solution-card",73.50)`; `apt.textReveal(tl,"#card-step2 .math")` reveals line 1 at data-t 73.52 (line-level, matches standard-value phrase) and line 2 "θ = 30°" at data-t 80.60 (line-level, "theta must be thirty degree").
- CAMERA MOVEMENT: none.
- TRANSITIONS: morph + card enter, then recenter before options.
- EDUCATIONAL PURPOSE: closes the logical loop - the derived ratio matches a memorized standard value, giving the angle directly.
- VISUAL HIERARCHY: "θ = 30°" in `.ans` green-adjacent primary color is the visual endpoint of the whole video.
- ATTENTION MANAGEMENT: only two lines, deliberately sparse so the answer lands cleanly.
- MOTION NOTES: after `.ans` reveals at 80.60, the card holds through "Hence the angle of elevation..." restatement (no new visual, this is confirmation narration) until the morph-to-stack and recenter begin at 83.70/84.0.
- CONTINUITY FROM PREVIOUS SCENE: Step 1's card is still completing its 0.8s morph into `#stack-step1` (ends 73.30) as Step 2's `cardEnter` begins 0.2s later at 73.50, and the G-1 connector line grows in the same instant the "1" circle joins, keeping the stack column's continuous downward growth unbroken.

### Scene 8 - Recenter and Options Reveal (RECENTER_TIME 83.70, options 84.8-88.22)
- TIMESTAMP: 83.70
- VOICEOVER: "...so the correct option is option D." (tail of Scene 7's phrase, options grid lands under it)
- VISUAL OBJECTIVE: reveal all four options with D highlighted green.
- SCREEN LAYOUT: `#illus-pinned` fades out; `#q-pinned` recenters (`xShift:160,yShift:180`) to align with `.pinned-col`; `#options-reveal` grid appears at `.pinned-col` top:400px.
- ON-SCREEN ELEMENTS: stack column (G/1/2 circles + connector lines, still fully visible), pinned+recentered question card, 2x2 options grid, option D in `.correct` green state.
- ANIMATION DETAILS: `apt.morphToStack(tl,"#card-step2 .solution-card","#stack-step2 .stack-card",84.0)`; `apt.stackLineGrow(tl,"#line-1-2",84.0)`; `apt.fadeOut(tl,"#illus-pinned",83.70)`; `apt.recenterForOptions(tl,"#q-pinned",160,180,83.70)`; `apt.fadeIn(tl,"#options-reveal",84.8)`; `apt.optionsStagger(tl,".opt-btn",85.3)`; `apt.correctPulse(tl,".opt-btn.correct",87.0)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: illustration drops out, question recenters, grid staggers in.
- EDUCATIONAL PURPOSE: connects the derived answer (θ=30°) back to the original multiple-choice options.
- VISUAL HIERARCHY: green pulse on option D is the final visual beat of the video.
- ATTENTION MANAGEMENT: stack column stays put (unchanged, anchoring continuity) while only the right side of frame changes.
- MOTION NOTES: `apt.correctPulse` yoyo scale is the last new motion; everything else holds static after.
- CONTINUITY FROM PREVIOUS SCENE: Step 2's card is mid-morph into `#stack-step2` (0.8s, ends 84.8) exactly as the options grid begins its fadeIn, so the left column finishes filling in at the same beat the right side starts revealing - one continuous handoff rather than two separate events.

### Scene 9 - End Hold (89.0-90.5s)
- TIMESTAMP: 89.0
- VOICEOVER: (silence, tail of voiceover)
- VISUAL OBJECTIVE: settle on the final answer state before fade-out.
- SCREEN LAYOUT: unchanged from Scene 8.
- ON-SCREEN ELEMENTS: full stack column, pinned question, options grid with green D.
- ANIMATION DETAILS: `apt.fadeOut(tl,"#root > div",89.0,1.2)` fades every top-level element together.
- CAMERA MOVEMENT: none.
- TRANSITIONS: single synchronized fade-out.
- EDUCATIONAL PURPOSE: gives viewer a clean beat to register the final answer.
- VISUAL HIERARCHY: n/a, fading uniformly.
- ATTENTION MANAGEMENT: nothing new, pure hold then fade.
- MOTION NOTES: matches template's END_FADE pattern.
- CONTINUITY FROM PREVIOUS SCENE: direct continuation of Scene 8's settled state, held ~1s before the fade begins.

## PART 3: Asset List Required

- `illustration/pole.svg` - flat 2D vertical pole (matches primary/blue-grey palette)
- `illustration/right-angle-marker.svg` - small square right-angle glyph
- No other custom assets; ground line, shadow line, hypotenuse line, and theta arc are CSS/SVG-drawn inline (no separate asset files needed)
- Shared assets from `_template/assets/` (serial-num-badge.svg, logo.png) copied locally per Step 5B

## PART 4: Animation Complexity Notes

- Only one true "build" sequence (Scene 3-4 triangle draw), everything else reuses standard `apt.*` helpers.
- Two `morphToStack` beats before Given (Given->stack, Step1->stack) plus Step2->stack right before options - three total, matching the Given/Step1/Step2 card structure.
- No `apt.stepFlow` used anywhere (deprecated per README).
- `apt.ambientLoop` not used - the pinned illustration area is small and covered by an active Given/Step card for nearly its whole pinned lifetime, no long dead stretch to fill.
- Ballpark timeline length: 90.5s (voiceover ends 88.22s + ~2.3s end-fade hold).

## PART 5: Master Timeline Overview

```
0.0     Question card + SerialNum enter (heroEnterLowered)
3.6     Card rises to rest position
17.0    Illustration begins drawing (pole -> shadow -> hypotenuse)
26.2    Right-angle marker + theta arc
33.88   PIN_TIME - question + illustration glide to pinned slots
35.78   GIVEN_TIME - Given card enters (Opposite=12, Adjacent=12√3)
46.88   Given -> stack (morphToStack)
47.88   Step 1 card enters (tan θ = Opposite/Adjacent -> 12/12√3 -> 1/√3)
72.50   Step 1 -> stack (morphToStack) + line-g-1 grows
73.50   Step 2 card enters (tan30° = 1/√3 -> θ = 30°)
83.70   RECENTER_TIME - illustration fades, question recenters
84.00   Step 2 -> stack (morphToStack) + line-1-2 grows
84.80   Options grid fades in
85.30   Options stagger in
87.00   Option D correct-pulse
89.00   END_FADE_TIME - full frame fades out
90.5    End
```
