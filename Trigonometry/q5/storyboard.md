# Storyboard - Trigonometry & Height n Distance Q5 (Ladder Angle of Elevation)

## PART 1: Narration Beat Analysis

| Beat | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.10-3.72 | "So welcome back again. It's time to solve one more problem." | Cold open | Question card | Question card + SerialNum enter |
| 2 | 4.36-17.76 | "Now in this problem, we have a ladder of length ten meters. The ladder is making an angle of sixty degrees with the ground. The question is asking us to find how high the ladder reaches on the wall." | State the problem | Question text numbers | "10 meters" and "sixty degrees" highlighted in primary blue |
| 3 | 18.56-26.74 | "First, let us understand the picture. Draw the ground. Now draw the wall. Place the ladder leaning against the wall." | Build the mental picture | Illustration | Ground draws in, wall draws in, ladder slides and leans against wall, "10 m" label appears |
| 4 | 27.56-43.62 | "Since the wall and the ground are perpendicular, this forms a right triangle. The ladder is the longest side, so it becomes the hypotenuse. The height on the wall is the opposite side, and the ground is the adjacent side." | Name triangle sides in trig vocabulary | Right-angle marker, side highlights | Right-angle marker pops, ladder highlights yellow "Hypotenuse", wall side highlights green "Opposite", ground highlights blue "Adjacent" |
| 5 | 44.08-47.44 | "We already know the hypotenuse, and we need the opposite side." | Frame the unknown | Pinned illustration + Given card | Pin flow to top; Given card enters with Hypotenuse=10, Angle=60°, Height=? |
| 6 | 47.98-63.08 | "So sine theta is the correct trigonometric ratio. Sine theta is equal to opposite side divided by hypotenuse. Putting the values, sine sixty degree is equal to height divided by ten." | Set up the equation | Step 1 card | Formula reveals, then substitutes numbers |
| 7 | 63.68-77.46 | "We also know one standard trigonometric value. Sine sixty degree is equal to root three divided by two. So the root three divided by two is equal to height divided by ten. Multiply both sides by ten." | Substitute standard value and solve | Step 2 card | sin 60 replaced by root3/2, then cross-multiply |
| 8 | 78.34-90.42 | "After simplifying, the height becomes five root three meter. Hence, the ladder reaches a height of five root three meter on the wall. So the correct option is option A." | Conclude | Step 3 card, then options | Height = 5√3 m answer reveal, options grid appears, A pulses green |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Cold Open (0.0-3.6s)
- TIMESTAMP: 0.0
- VOICEOVER: "So welcome back again. It's time to solve one more problem."
- VISUAL OBJECTIVE: establish the question card as the anchor of the frame.
- SCREEN LAYOUT: `#q-full-card` centered, lowered by 180px (`apt.heroEnterLowered`), SerialNum badge top-left of the card.
- ON-SCREEN ELEMENTS: dotted-grid, bottom-strip, topic-name "Trigonometry & Height n Distance", logo, `#q-full-card`, `#serial-num`.
- ANIMATION DETAILS: `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)` at 0.3s; SerialNum pops at 0.8s, rises with card at 3.6s.
- CAMERA MOVEMENT: none.
- TRANSITIONS: fade+scale entrance (`back.out(1.4)`).
- EDUCATIONAL PURPOSE: orient viewer to the exact question.
- VISUAL HIERARCHY: question card dominant.
- ATTENTION MANAGEMENT: nothing else competes.
- MOTION NOTES: card starts low/centered, holds until 3.6s.
- CONTINUITY FROM PREVIOUS SCENE: opening scene, no prior state.

### Scene 2 - Question Read (4.36-17.76s)
- TIMESTAMP: 4.36
- VOICEOVER: "Now in this problem, we have a ladder of length ten meters. The ladder is making an angle of sixty degrees with the ground. The question is asking us to find how high the ladder reaches on the wall."
- VISUAL OBJECTIVE: reinforce the two given numbers directly in the question text.
- SCREEN LAYOUT: same as Scene 1, card at rest position (top:80px).
- ON-SCREEN ELEMENTS: `#q-full-card` with "10 meters" and "sixty degrees" wrapped in `<span class="num">`.
- ANIMATION DETAILS: no new entrance; card already visible from Scene 1.
- CAMERA MOVEMENT: none.
- TRANSITIONS: none, holding shot.
- EDUCATIONAL PURPOSE: viewer reads the full problem before solving starts.
- VISUAL HIERARCHY: numbers in blue draw the eye first.
- ATTENTION MANAGEMENT: illustration area still empty.
- MOTION NOTES: static hold.
- CONTINUITY FROM PREVIOUS SCENE: direct continuation of Scene 1's risen card.

### Scene 3 - Illustration Build (18.56-26.74s)
- TIMESTAMP: 18.56
- VOICEOVER: "First, let us understand the picture. Draw the ground. Now draw the wall. Place the ladder leaning against the wall."
- VISUAL OBJECTIVE: construct the ground/wall/ladder scene piece by piece.
- SCREEN LAYOUT: `#illustration` area (left:50%, top:480px, 1400x300) hosts ground baseline, vertical wall on the right, diagonal ladder leaning from ground to wall-top.
- ON-SCREEN ELEMENTS: ground line (CSS div, draws left-to-right), wall (CSS div, draws bottom-to-top), ladder (SVG diagonal stroke-drawn line with rung marks), "10 m" label beside ladder.
- ANIMATION DETAILS: ground `scaleX` 0->1 from left (21.30s, `apt.roadSweep`-style); wall `scaleY` 0->1 from bottom (22.54s); ladder stroke-draws from ground to wall-top (24.22-26.74s) via stroke-dashoffset; "10 m" label fades up at 25.60s.
- CAMERA MOVEMENT: none.
- TRANSITIONS: sequential draw-in, no cuts.
- EDUCATIONAL PURPOSE: builds spatial intuition before naming triangle sides.
- VISUAL HIERARCHY: ground first, then wall, then ladder last (matches spoken order).
- ATTENTION MANAGEMENT: one new stroke draws at a time.
- MOTION NOTES: each draw ~0.7-1s, timed to its phrase.
- CONTINUITY FROM PREVIOUS SCENE: illustration area was empty through Scenes 1-2; this is its first content.

### Scene 4 - Right Triangle + Side Naming (27.56-43.62s)
- TIMESTAMP: 27.56
- VOICEOVER: "Since the wall and the ground are perpendicular, this forms a right triangle. The ladder is the longest side, so it becomes the hypotenuse. The height on the wall is the opposite side, and the ground is the adjacent side."
- VISUAL OBJECTIVE: label all three triangle sides in trig vocabulary before pinning.
- SCREEN LAYOUT: same illustration area, triangle fully drawn.
- ON-SCREEN ELEMENTS: small square right-angle marker at ground-wall corner; ladder highlights yellow with "Hypotenuse" label (34.34s); wall side highlights green with "Height = ?" label (38.84s); ground highlights blue with "Adjacent" label (41.76s).
- ANIMATION DETAILS: right-angle marker pops in (scale 0->1, 30.54s); ladder color tween to highlight + label fade at 34.34s; wall side color tween + label at 38.84s; ground color tween + label at 41.76s.
- CAMERA MOVEMENT: none.
- TRANSITIONS: sequential highlight pops, no cuts.
- EDUCATIONAL PURPOSE: viewer now has all three sides named before algebra starts.
- VISUAL HIERARCHY: each highlight is the single brightest new element in its moment.
- ATTENTION MANAGEMENT: one side highlights at a time, matching spoken order.
- MOTION NOTES: ~1s breathing gap after the last highlight (adjacent) before Scene 5's pin.
- CONTINUITY FROM PREVIOUS SCENE: the same ground/wall/ladder drawn in Scene 3 simply gain highlights and labels here, no new geometry.

### Scene 5 - Pin + Given Card (PIN_TIME 43.7 / GIVEN_TIME 44.6)
- TIMESTAMP: 43.7 (pin), 44.6 (given)
- VOICEOVER: "We already know the hypotenuse, and we need the opposite side."
- VISUAL OBJECTIVE: shrink question+illustration to pinned slots and open the Given card.
- SCREEN LAYOUT: `#q-pinned` (left:385px, top:30px, width:1275px), `#illus-pinned` (left:280px, top:190px, small triangle recap with hypotenuse/height/adjacent labels), `#card-given .solution-card` centered at left:640px, top:480px.
- ON-SCREEN ELEMENTS: pinned question card, pinned small triangle, Given solution-card with chip "Given".
- ANIMATION DETAILS: `apt.pinFlow(tl,"#q-full-card","#q-pinned",43.7)` and `apt.pinFlow(tl,"#illustration","#illus-pinned",43.7)` glide together (0.8s); `apt.fadeOut(tl,"#serial-num",43.7,0.5)`; `apt.cardEnter(tl,"#card-given .solution-card",44.6)`; `apt.textReveal(tl,"#card-given .math")` reveals "Hypotenuse = 10 m" (word-level, data-t 44.6), "Angle = 60°" (word-level, data-t 44.6), "Height = ?" (line-level, data-t 44.6) - all stated together as the recap line.
- CAMERA MOVEMENT: none.
- TRANSITIONS: pinFlow glide (real motion, not fade swap).
- EDUCATIONAL PURPOSE: formally states what's known vs unknown in trig vocabulary.
- VISUAL HIERARCHY: Given card is now the largest/brightest element.
- ATTENTION MANAGEMENT: pinned elements shrink and quiet down.
- MOTION NOTES: 0.9s gap between PIN_TIME and GIVEN_TIME is a deliberate settle beat.
- CONTINUITY FROM PREVIOUS SCENE: the same ladder/wall/ground triangle from Scene 4 glides into `#illus-pinned` - literal continuation, no new triangle drawn.

### Scene 6 - Step 1: Formula Setup (Step1 enter 47.98, morph to stack 63.5)
- TIMESTAMP: 47.98
- VOICEOVER: "So sine theta is the correct trigonometric ratio. Sine theta is equal to opposite side divided by hypotenuse. Putting the values, sine sixty degree is equal to height divided by ten."
- VISUAL OBJECTIVE: set up the trig equation and substitute known values.
- SCREEN LAYOUT: Given card morphs into `#stack-given` (left:100px, top:140px); `#card-step1 .solution-card` opens centered.
- ON-SCREEN ELEMENTS: stack chip "G" with Hypotenuse/Angle/Height recap; Step 1 chip; two math lines: "sin θ = Opposite/Hypotenuse" (using `.frac`), "sin 60° = Height/10".
- ANIMATION DETAILS: `apt.morphToStack(tl,"#card-given .solution-card","#stack-given .stack-card",43.98)` - wait, Given morph happens once Step1 opens; set morph time to 47.78 (0.2s before Step1 enter, matching q4 pattern). `apt.cardEnter(tl,"#card-step1 .solution-card",47.98)`; `apt.textReveal(tl,"#card-step1 .math")` reveals line 1 at data-t 52.98 (word-level: "Sine/theta/=/opposite/divided/hypotenuse"), line 2 at data-t 59.34 (word-level: "Sine/sixty/degree/=/height/divided/ten").
- CAMERA MOVEMENT: none.
- TRANSITIONS: 0.8s morph then card enter.
- EDUCATIONAL PURPOSE: shows the trig ratio choice and direct substitution.
- VISUAL HIERARCHY: `.frac` fraction is the visual centerpiece.
- ATTENTION MANAGEMENT: one line at a time.
- MOTION NOTES: card holds through 63.08 before Step 2 begins.
- CONTINUITY FROM PREVIOUS SCENE: the Given card is still completing its morph into the stack (0.8s, ends 48.58) as Step 1's `cardEnter` begins 0.2s earlier per pattern, keeping the left column growing continuously.

### Scene 7 - Step 2: Standard Value and Solve (Step2 enter 64.5, morph 78.14)
- TIMESTAMP: 63.68 (Step 1 morphs to stack at 63.7), 64.5 (Step 2 enters)
- VOICEOVER: "We also know one standard trigonometric value. Sine sixty degree is equal to root three divided by two. So the root three divided by two is equal to height divided by ten. Multiply both sides by ten."
- VISUAL OBJECTIVE: substitute the standard value and cross-multiply to isolate height.
- SCREEN LAYOUT: Step 1 morphs into `#stack-step1` (left:100px, top:290px); `#card-step2 .solution-card` opens centered.
- ON-SCREEN ELEMENTS: stack circle "1"; Step 2 chip; two math lines: "sin 60° = √3/2" and "√3/2 = Height/10 → Height = 10 × √3/2".
- ANIMATION DETAILS: `apt.morphToStack(tl,"#card-step1 .solution-card","#stack-step1 .stack-card",63.7)`; `apt.stackLineGrow(tl,"#line-g-1",63.7)`; `apt.cardEnter(tl,"#card-step2 .solution-card",64.5)`; `apt.textReveal(tl,"#card-step2 .math")` reveals line 1 at data-t 67.16 (word-level: "Sine/sixty/degree/=/root/three/divided/two"), line 2 at data-t 71.50 (line-level: "root three divided by two equals height divided by ten, multiply both sides by ten").
- CAMERA MOVEMENT: none.
- TRANSITIONS: morph + card enter.
- EDUCATIONAL PURPOSE: connects the trig ratio to a memorized standard value and solves for height.
- VISUAL HIERARCHY: substituted `.frac` values are the centerpiece.
- ATTENTION MANAGEMENT: two lines only, deliberately sparse.
- MOTION NOTES: card holds through 77.46 before Step 3 begins.
- CONTINUITY FROM PREVIOUS SCENE: Step 1's card is still completing its 0.8s morph into `#stack-step1` (ends 64.5) exactly as Step 2's `cardEnter` begins, and the G-1 connector line grows in the same instant.

### Scene 8 - Step 3: Final Answer + Options (Step3 enter 78.34, morph 87.94, options 88.7-90.42)
- TIMESTAMP: 78.14 (Step 2 morphs to stack), 78.34 (Step 3 enters)
- VOICEOVER: "After simplifying, the height becomes five root three meter. Hence, the ladder reaches a height of five root three meter on the wall. So the correct option is option A."
- VISUAL OBJECTIVE: land on the final answer and reveal options with A highlighted.
- SCREEN LAYOUT: Step 2 morphs into `#stack-step2` (left:100px, top:460px); `#card-step3 .solution-card` opens centered; `#illus-pinned` fades out; `#q-pinned` recenters; options grid appears.
- ON-SCREEN ELEMENTS: stack circle "2"; Step 3 chip; single answer line "Height = 5√3 m" (`.ans` styled); stack column (G/1/2 circles + connector lines); pinned+recentered question card; 2x2 options grid with A in `.correct` green state.
- ANIMATION DETAILS: `apt.morphToStack(tl,"#card-step2 .solution-card","#stack-step2 .stack-card",78.14)`; `apt.stackLineGrow(tl,"#line-1-2",78.14)`; `apt.cardEnter(tl,"#card-step3 .solution-card",78.34)`; `apt.textReveal(tl,"#card-step3 .math")` reveals data-t 78.34 (line-level: "after simplifying, the height becomes five root three meter"); `apt.fadeOut(tl,"#illus-pinned",87.74)`; `apt.recenterForOptions(tl,"#q-pinned",160,180,87.74)`; `apt.morphToStack(tl,"#card-step3 .solution-card","#stack-step3 .stack-card",87.94)`; `apt.stackLineGrow(tl,"#line-2-3",87.94)`; `apt.fadeIn(tl,"#options-reveal",88.7)`; `apt.optionsStagger(tl,".opt-btn",89.1)`; `apt.correctPulse(tl,".opt-btn.correct",89.6)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: illustration drops out, question recenters, grid staggers in.
- EDUCATIONAL PURPOSE: connects the derived answer back to the multiple-choice options.
- VISUAL HIERARCHY: green pulse on option A is the final visual beat.
- ATTENTION MANAGEMENT: stack column stays put, only right side of frame changes.
- MOTION NOTES: card holds on "Height = 5√3 m" through the "hence... on the wall" restatement (confirmation narration, no new visual) until the morph-to-stack begins at 87.94.
- CONTINUITY FROM PREVIOUS SCENE: Step 2's card is mid-morph into `#stack-step2` as Step 3's `cardEnter` begins right after, keeping the left column's growth continuous into the options reveal.

### Scene 9 - End Hold (90.42-91.9s)
- TIMESTAMP: 90.42
- VOICEOVER: (silence, tail of voiceover)
- VISUAL OBJECTIVE: settle on the final answer state before fade-out.
- SCREEN LAYOUT: unchanged from Scene 8.
- ON-SCREEN ELEMENTS: full stack column, pinned question, options grid with green A.
- ANIMATION DETAILS: `apt.fadeOut(tl,"#root > div",90.9,1.2)` fades every top-level element together.
- CAMERA MOVEMENT: none.
- TRANSITIONS: single synchronized fade-out.
- EDUCATIONAL PURPOSE: gives viewer a clean beat to register the final answer.
- VISUAL HIERARCHY: n/a, fading uniformly.
- ATTENTION MANAGEMENT: nothing new, pure hold then fade.
- MOTION NOTES: matches template's END_FADE pattern.
- CONTINUITY FROM PREVIOUS SCENE: direct continuation of Scene 8's settled state, held ~1s before the fade begins.

## PART 3: Asset List Required

- No separate SVG asset files - ground, wall, ladder (with rung marks), right-angle marker, and highlight labels are all CSS/SVG-drawn inline in `index.html`
- Shared assets from `_template/assets/` (serial-num-badge.svg, logo.png) copied locally per Step 5B

## PART 4: Animation Complexity Notes

- One build sequence (Scene 3 ground/wall/ladder draw) plus one sequential-highlight sequence (Scene 4 side naming), everything else reuses standard `apt.*` helpers.
- Three `morphToStack` beats (Given->stack, Step1->stack, Step2->stack), matching the Given/Step1/Step2/Step3 card structure (Step3 also morphs to stack right before options).
- No `apt.stepFlow` used anywhere (deprecated per README).
- `apt.ambientLoop` not used - the pinned illustration is small and mostly covered by an active card for its whole pinned lifetime.
- Ballpark timeline length: 91.9s (voiceover ends 90.42s + ~1.5s end-fade hold).

## PART 5: Master Timeline Overview

```
0.0     Question card + SerialNum enter (heroEnterLowered)
3.6     Card rises to rest position
18.56   Illustration begins drawing (ground -> wall -> ladder -> "10 m" label)
27.56   Right-angle marker + sequential side highlights (hypotenuse/opposite/adjacent)
43.7    PIN_TIME - question + illustration glide to pinned slots
44.6    GIVEN_TIME - Given card enters (Hypotenuse=10, Angle=60°, Height=?)
47.78   Given -> stack (morphToStack)
47.98   Step 1 card enters (sin θ = Opposite/Hypotenuse -> sin 60° = Height/10)
63.7    Step 1 -> stack (morphToStack) + line-g-1 grows
64.5    Step 2 card enters (sin 60° = √3/2 -> Height = 10×√3/2)
78.14   Step 2 -> stack (morphToStack) + line-1-2 grows
78.34   Step 3 card enters (Height = 5√3 m)
87.74   RECENTER_TIME - illustration fades, question recenters
87.94   Step 3 -> stack (morphToStack) + line-2-3 grows
88.7    Options grid fades in
89.1    Options stagger in
89.6    Option A correct-pulse
90.9    END_FADE_TIME - full frame fades out
91.9    End
```
