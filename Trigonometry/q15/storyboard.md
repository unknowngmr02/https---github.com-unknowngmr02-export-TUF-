# Storyboard - Trigonometry q15 (13m ladder, 12m window height, find distance of foot from wall)

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0.10-1.52 | "So welcome back again." | Intro | Center screen | Question card begins entrance |
| 2 | 2.08-4.54 | "It's time to solve one more problem." | Hook | Question card | Card settling |
| 3 | 4.98-11.22 | "Now in this problem, a 13-meter ladder is touching a window which is 12 meters above the ground." | State the given | Question card + illustration | Full question text visible; wall + ladder + window begin drawing |
| 4 | 11.82-15.76 | "The question is asking us to find how far the foot of the ladder is from the wall." | State the ask | Question card | Ground segment (base) drawn; "find distance" phrase readable |
| 5 | 16.12-20.52 | "Here, the ladder, the wall, and the ground make a right angle triangle." | Frame the triangle | Illustration | Right-angle mark fades in at wall/ground corner |
| 6 | 20.84-25.10 | "The ladder will be the hypotenuse because it is the slant side." | Name hypotenuse | Illustration | "Hypotenuse" role tag fades in near ladder line |
| 7 | 25.50-27.28 | "The wall height is the perpendicular," | Name perpendicular | Illustration | "Perpendicular" role tag fades in near wall line |
| 8 | 27.72-31.08 | "and the distance from the wall to the foot of the ladder is the base." | Name base | Illustration | "Base" role tag fades in near ground line |
| 9 | 31.80-33.26 | "Let the base be x meter." | Introduce unknown | Illustration | "x m" label fades in on ground segment (replacing/next to numeric gap) |
| 10 | 33.82-45.62 | "Using Pythagoras theorem, hypotenuse square is equal to base square plus perpendicular square. So we can write 13 square is equal to x square plus 12 square." | State theorem + substitute | Given card | Pythagoras formula, then numeric substitution |
| 11 | 46.00-52.04 | "That means 169 is equal to x square plus 144." | Simplify squares | Step 1 card | 169 = x² + 144 |
| 12 | 52.52-63.10 | "So x square is equal to 169 minus 144. After subtracting, x square is equal to 25." | Isolate x² | Step 2 card | x² = 169 - 144 = 25 |
| 13 | 63.52-66.46 | "So x is equal to the square root of 25, which is five." | Solve for x | Step 3 card | x = √25 = 5 |
| 14 | 67.22-73.34 | "Hence, the foot of the ladder is five meters from the wall. So the correct option is option C." | Reveal answer | Options grid | Option C pulses green |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Question Reveal (0.0s-4.98s)
- TIMESTAMP: 0.3
- VOICEOVER: "So welcome back again. It's time to solve one more problem."
- VISUAL OBJECTIVE: Establish the question card as the sole focal point before any numbers are spoken.
- SCREEN LAYOUT: `#q-full-card` centered top per template, `#serial-num` badge top-left.
- ON-SCREEN ELEMENTS: QuestionCard (text: "A 13 m ladder reaches a window 12 m above the ground. How far is the foot of the ladder from the wall?"), SerialNum badge "Q", dotted grid, bottom strip, topic name, logo.
- ANIMATION DETAILS: `apt.questionEnter(tl, "#q-full-card", 0.3)`; `apt.serialEnter(tl, "#serial-num", 0.8)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: fade+scale in.
- EDUCATIONAL PURPOSE: orient viewer before the diagram appears.
- VISUAL HIERARCHY: question card > badge > background.
- ATTENTION MANAGEMENT: single focal card, no illustration yet.
- MOTION NOTES: standard `apt.questionEnter` (0.7s, back.out(1.4)).
- CONTINUITY FROM PREVIOUS SCENE: opening scene, no prior state.

### Scene 2 - Illustration Build: Wall, Ladder, Window (4.98s-16.12s)
- TIMESTAMP: 4.98
- VOICEOVER: "Now in this problem, a 13-meter ladder is touching a window which is 12 meters above the ground. The question is asking us to find how far the foot of the ladder is from the wall."
- VISUAL OBJECTIVE: Draw the wall (vertical), the window at its top, and the ladder (diagonal) leaning against it, with numeric labels "12 m" and "13 m" appearing as those values are spoken; then draw the ground segment (base) as the "find the distance" phrase is spoken.
- SCREEN LAYOUT: `#illustration` centered below question card, SVG viewBox `0 0 340 320`. Wall vertical line at x=220 from y=280 (ground) to y=100 (window sill). Window rect sits atop the wall (205,78)-(238,100). Ladder diagonal from ground point (145,280) to window corner (220,100). Ground line drawn from ladder foot (145,280) to wall base (220,280).
- ON-SCREEN ELEMENTS: `#wall-line` (stroke-draw), `#window-rect` (fade in), `#ladder-line` (stroke-draw), `#gnd-line` (stroke-draw), `#wall-label` ("12 m"), `#ladder-label` ("13 m").
- ANIMATION DETAILS: `#wall-line` strokeDashoffset 0 over 0.6s at 6.5 (right after "13-meter ladder" is spoken); `#window-rect` opacity 1 over 0.3s at 7.1; `#ladder-line` strokeDashoffset 0 over 0.7s at 8.3 (as "touching a window" is spoken); `#wall-label` ("12 m") opacity 1 over 0.4s at 9.9 (when "12 meters" is spoken); `#ladder-label` ("13 m") opacity 1 over 0.4s at 7.5 (right after "13-meter" is spoken); `#gnd-line` strokeDashoffset 0 over 0.5s at 13.4 (as "find how far the foot of the ladder is from the wall" is spoken).
- CAMERA MOVEMENT: none.
- TRANSITIONS: sequential stroke-draw reveals, no cuts.
- EDUCATIONAL PURPOSE: ground the spoken numbers (13m ladder, 12m height) directly in the geometry as they're mentioned.
- VISUAL HIERARCHY: wall+window first (fixed structure), ladder next (the given diagonal), ground last (the unknown to be found).
- ATTENTION MANAGEMENT: one element animates at a time, matched to its own spoken word.
- MOTION NOTES: drawing is to true scale (wall:base:ladder = 12:5:13, scale factor 15 -> wall 180px, base 75px, ladder 195px) so the diagram itself is geometrically accurate.
- CONTINUITY FROM PREVIOUS SCENE: question card has just settled from its Scene 1 entrance; illustration area (already visible but empty) now populates beneath it without a hard cut.

### Scene 3 - Right Triangle + Role Labels (16.12s-31.80s)
- TIMESTAMP: 16.12
- VOICEOVER: "Here, the ladder, the wall, and the ground make a right angle triangle. The ladder will be the hypotenuse because it is the slant side. The wall height is the perpendicular, and the distance from the wall to the foot of the ladder is the base."
- VISUAL OBJECTIVE: Confirm the right angle at the wall/ground corner, then label each side with its trigonometric role (Hypotenuse / Perpendicular / Base) as each is named.
- SCREEN LAYOUT: same illustration, right-angle mark at (220,280) corner.
- ON-SCREEN ELEMENTS: `#right-angle-mark`, `#role-hyp` ("Hypotenuse" tag near ladder), `#role-perp` ("Perpendicular" tag near wall), `#role-base` ("Base" tag near ground).
- ANIMATION DETAILS: `#right-angle-mark` opacity 1 over 0.3s at 19.5 ("right angle triangle"); `#role-hyp` opacity 1 over 0.4s at 20.9 ("the ladder will be the hypotenuse"); `#role-perp` opacity 1 over 0.4s at 25.6 ("wall height is the perpendicular"); `#role-base` opacity 1 over 0.4s at 28.0 ("distance ... is the base").
- CAMERA MOVEMENT: none.
- TRANSITIONS: none, sequential fades only.
- EDUCATIONAL PURPOSE: map the spoken hypotenuse/perpendicular/base terminology directly onto the drawn sides, one at a time.
- VISUAL HIERARCHY: right-angle mark first (proves the triangle is right-angled), then the three role tags in narration order.
- ATTENTION MANAGEMENT: only one tag fades in per phrase, matching narration pace.
- MOTION NOTES: role tags use small `.num`-colored text, not new components.
- CONTINUITY FROM PREVIOUS SCENE: the fully-drawn triangle from Scene 2 holds in place; only labels layer on top, no geometry changes.

### Scene 4 - Unknown x Labeled (31.80s-33.30s)
- TIMESTAMP: 31.80
- VOICEOVER: "Let the base be x meter."
- VISUAL OBJECTIVE: Replace the bare base segment with an explicit "x m" label, marking the unknown the video will solve for.
- SCREEN LAYOUT: same illustration, ground segment.
- ON-SCREEN ELEMENTS: `#base-x-label` ("x m") appears just below the ground line.
- ANIMATION DETAILS: `#base-x-label` opacity 1 over 0.35s at 32.0 (synced to "base be x meter").
- CAMERA MOVEMENT: none.
- TRANSITIONS: none.
- EDUCATIONAL PURPOSE: give the unknown its own visible symbol before the algebra begins.
- VISUAL HIERARCHY: "x m" label now the most emphasized element (matches `.num` accent color).
- ATTENTION MANAGEMENT: single small label fade, nothing else competes.
- MOTION NOTES: none beyond opacity fade.
- CONTINUITY FROM PREVIOUS SCENE: same static triangle from Scene 3, now with its final label added.

### Scene 5 - Pin (33.30s-33.90s)
- PIN_TIME: 33.3
- GIVEN_TIME: 33.9
- VOICEOVER: "...meter. Using Pythagoras theorem..." (transition point)
- VISUAL OBJECTIVE: Pin the question and the completed triangle diagram into their Phase 2 slots, clearing center stage for the Pythagoras formula.
- SCREEN LAYOUT: `#q-pinned` top strip; `#illus-pinned` smaller icon below-left.
- ON-SCREEN ELEMENTS: `#q-full-card` -> `#q-pinned`, `#illustration` -> `#illus-pinned`, `#serial-num` fades out.
- ANIMATION DETAILS: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 33.3)`; `apt.pinFlow(tl, "#illustration", "#illus-pinned", 33.3)`; `apt.fadeOut(tl, "#serial-num", 33.3, 0.5)`.
- CAMERA MOVEMENT: none, elements glide.
- TRANSITIONS: real glide, not fade swap.
- EDUCATIONAL PURPOSE: keep the labeled triangle visible as a reference while solving begins.
- VISUAL HIERARCHY: pinned elements shrink in importance; Given card takes center next.
- ATTENTION MANAGEMENT: single simultaneous glide.
- MOTION NOTES: `apt.ambientLoop` on `#illus-pinned-icon` from 34.7 to 66.6 (small bob) so the pinned triangle stays alive through the long solving stretch.
- CONTINUITY FROM PREVIOUS SCENE: the same triangle elements from Scenes 2-4 continue moving as one unit into the pinned slot.

### Scene 6 - Given: Pythagoras Theorem + Substitution (33.90s-46.00s)
- GIVEN_TIME: 33.9
- VOICEOVER: "Using Pythagoras theorem, hypotenuse square is equal to base square plus perpendicular square. So we can write 13 square is equal to x square plus 12 square."
- VISUAL OBJECTIVE: State the general theorem, then substitute the known values directly.
- SCREEN LAYOUT: Given `.solution-card` centered per template.
- ON-SCREEN ELEMENTS: Given chip, math lines: "Hypotenuse² = Base² + Perpendicular²" then "13² = x² + 12²".
- ANIMATION DETAILS: `apt.cardEnter(tl, "#card-given .solution-card", 33.9)`; `apt.textReveal(tl, "#card-given .math")` - line-level for the paraphrased theorem line (data-t=33.9), word-level for the verbatim numeric line "13² = x² + 12²" synced to 42.8/43.3/44.3/45.0.
- CAMERA MOVEMENT: none.
- TRANSITIONS: card pop-in only.
- EDUCATIONAL PURPOSE: connect the named triangle roles (Hypotenuse/Base/Perpendicular from Scene 3) to the algebraic identity before any numbers are crunched.
- VISUAL HIERARCHY: Given card (center) > pinned question + pinned triangle.
- ATTENTION MANAGEMENT: only actively narrated element; pinned triangle bobs gently via ambient loop.
- MOTION NOTES: standard `apt.cardEnter` (0.55s, back.out(1.4)).
- CONTINUITY FROM PREVIOUS SCENE: the pin glide from Scene 5 has just settled as the Given card grows in at center.

### Scene 7 - Step 1: Simplify Squares (46.00s-52.20s)
- VOICEOVER: "That means 169 is equal to x square plus 144."
- VISUAL OBJECTIVE: Simplify 13² and 12² into their numeric squares.
- SCREEN LAYOUT: Given card morphs into `#stack-given`. Step 1 solution card takes center.
- ON-SCREEN ELEMENTS: Step 1 chip, math line: "169 = x² + 144".
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 45.7)` (0.8s); `apt.cardEnter(tl, "#card-step1 .solution-card", 46.0)`; `apt.textReveal(tl, "#card-step1 .math")` - word-level synced to 46.2/47.24/48.24/48.5/49.08/49.94/51.0.
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph.
- EDUCATIONAL PURPOSE: show the squares evaluated numerically before isolating x².
- VISUAL HIERARCHY: Step 1 card (center, active) > Given stack card (left, collapsed) > pinned question + triangle.
- ATTENTION MANAGEMENT: "169" and "144" highlighted via `.hi`.
- MOTION NOTES: none beyond standard cardEnter/textReveal.
- CONTINUITY FROM PREVIOUS SCENE: the Given card is still completing its morph into the left stack as Step 1's card begins its own entrance.

### Scene 8 - Step 2: Isolate x² (52.52s-63.30s)
- VOICEOVER: "So x square is equal to 169 minus 144. After subtracting, x square is equal to 25."
- VISUAL OBJECTIVE: Rearrange to isolate x² on one side, then subtract to land on 25.
- SCREEN LAYOUT: Step 1 morphs into `#stack-step1`. Step 2 card center.
- ON-SCREEN ELEMENTS: Step 2 chip, math lines: "x² = 169 - 144" then "x² = 25" (`.ans`).
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 51.2)`; `apt.stackLineGrow(tl, "#line-g-1", 51.2)`; `apt.cardEnter(tl, "#card-step2 .solution-card", 52.52)`; `apt.textReveal(tl, "#card-step2 .math")` - word-level synced to 52.82/55.22/56.92/57.52 for the first line, line-level at 60.78 for "x² = 25".
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph.
- EDUCATIONAL PURPOSE: carry the subtraction through explicitly so 25 doesn't appear as an unexplained jump.
- VISUAL HIERARCHY: Step 2 card (center, active) > Step 1 + Given stack (left) > pinned question + triangle.
- ATTENTION MANAGEMENT: "25" gets `.ans` styling the moment it lands.
- MOTION NOTES: `apt.emphasize` on "25" at 60.9.
- CONTINUITY FROM PREVIOUS SCENE: Step 1's card is still sliding into the stack (connector line to Given growing) as Step 2's card grows in at center.

### Scene 9 - Step 3: Solve for x (63.52s-67.22s)
- VOICEOVER: "So x is equal to the square root of 25, which is five."
- VISUAL OBJECTIVE: Take the square root to land on the final numeric answer x = 5.
- SCREEN LAYOUT: Step 2 morphs into `#stack-step2`. Step 3 card center.
- ON-SCREEN ELEMENTS: Step 3 chip, math line: "x = sq root(25) = 5" (`.ans` on the final 5 m).
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 62.3)`; `apt.stackLineGrow(tl, "#line-1-2", 62.3)`; `apt.cardEnter(tl, "#card-step3 .solution-card", 63.52)`; `apt.textReveal(tl, "#card-step3 .math")` - word-level synced to 63.66/63.94/64.12/64.6/65.34/66.12.
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph.
- EDUCATIONAL PURPOSE: land the final answer in the exact form matched against the options next.
- VISUAL HIERARCHY: Step 3 card (center, active, answer highlighted) > Step 1/Step 2/Given stack (left) > pinned question + triangle.
- ATTENTION MANAGEMENT: only the final "5 m" span uses `.ans` styling.
- MOTION NOTES: `apt.emphasize` on "5 m" at 66.2.
- CONTINUITY FROM PREVIOUS SCENE: Step 2's card is still sliding into the stack (connector line growing) as Step 3's card grows in at center.

### Scene 10 - Options Reveal (67.22s-73.34s+)
- VOICEOVER: "Hence, the foot of the ladder is five meters from the wall. So the correct option is option C."
- VISUAL OBJECTIVE: Confirm 5m against the four options, land on Option C in green.
- SCREEN LAYOUT: Step 3 morphs into `#stack-step3`. `#options-reveal` on `.pinned-col`.
- ON-SCREEN ELEMENTS: 2x2 options grid (A: 1 m, B: 7 m, C: 5 m, D: 25 m), Option C marked `.correct`.
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 66.4)`; `apt.stackLineGrow(tl, "#line-2-3", 66.4)`; `apt.fadeOut(tl, "#illus-pinned", 66.4)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 66.4)`; `apt.fadeIn(tl, "#options-reveal", 67.2)`; `apt.optionsStagger(tl, ".opt-btn", 67.6)`; `apt.correctPulse(tl, ".opt-btn.correct", 71.9)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph, then recenter (0.5s), then stagger reveal.
- EDUCATIONAL PURPOSE: let the viewer match the computed 5m against listed options and confirm Option C.
- VISUAL HIERARCHY: Options grid (active reveal) > stack column (Given + Step1 + Step2 + Step3) > pinned question.
- ATTENTION MANAGEMENT: only Option C pulses green; A/B/D stay neutral.
- MOTION NOTES: pinned triangle illustration fades out at recenter time since its job is done.
- CONTINUITY FROM PREVIOUS SCENE: Step 3's card is still completing its morph into the stack (connector line growing) as the question recenters for the options grid.

### End (73.34s-76.0s)
- END_FADE_TIME: 74.0 - everything (`#root > div`) fades together after the correct-option pulse (71.9 + 0.4s yoyo) and narration (ends 73.339) have both settled. Extend audio clip `data-duration` to 76.0 (buffer past narration end).

## PART 3: Asset List Required
- No external illustration files - the ladder/wall/window triangle is built entirely from inline SVG (lines, a rect for the window, a right-angle path, and text labels), matching the stroke-draw technique used in prior questions (q9). Only `serial-num-badge.svg` and `logo.png` reused from `_template/assets/`.

## PART 4: Animation Complexity Notes
- 4 stack cards this question (Given, Step 1, Step 2, Step 3) - matches the full template stack (no cards dropped).
- No theta angle-arc technique needed this question (pure Pythagoras, no trigonometric ratio/angle to measure), so penelty.txt's stroke-dasharray circle standard does not apply here.
- Illustration is drawn to true scale: wall(perpendicular)=180px, base=75px, ladder(hypotenuse)=195px, ratio 12:5:13 x15 - the diagram is a geometrically accurate right triangle, not just illustrative.
- All squares/roots use plain text (13², √25) - no `.frac` needed this question since there's no division; if any fraction had appeared, `.frac` would be mandatory per house rule.
- Every clip whose data-duration would otherwise end exactly at a morphToStack/fadeOut/pinFlow completion gets the standard +1.5-2s buffer (penelty.txt q9 fix) - applied to phase1, illus-pinned, card-given, card-step1, card-step2, card-step3.
- Penelty.txt's SVG label-clipping fix (q10) is applied: illustration viewBox and label font-sizes sized with margin so "Hypotenuse"/"Perpendicular" role tags never clip.

## PART 5: Master Timeline Overview
```
0.3    Question card enters (questionEnter)
0.8    Serial badge pops in
6.5    Wall line draws
7.1    Window rect fades in
7.5    "13 m" ladder label fades in
8.3    Ladder line draws
9.9    "12 m" wall label fades in
13.4   Ground (base) line draws
19.5   Right-angle mark fades in
20.9   "Hypotenuse" role tag fades in
25.6   "Perpendicular" role tag fades in
28.0   "Base" role tag fades in
32.0   "x m" label fades in on base
33.3   PIN_TIME - pinFlow (question + triangle) to pinned slot; serial badge fades out
33.9   GIVEN_TIME - Given card enters (Hyp² = Base² + Perp², then 13² = x² + 12²)
34.7   Ambient loop starts on pinned triangle
45.7   Given -> stack-given morph
46.0   Step 1 card enters (169 = x² + 144)
51.2   Step 1 -> stack-step1 morph; line-g-1 grows
52.52  Step 2 card enters (x² = 169 - 144 = 25)
62.3   Step 2 -> stack-step2 morph; line-1-2 grows
63.52  Step 3 card enters (x = sq root 25 = 5)
66.4   Step 3 -> stack-step3 morph; line-2-3 grows; pinned triangle fades out; question recenters
67.2   Options grid fades in
67.6   Options stagger in
71.9   Option C correct pulse
74.0   End fade (all elements), 1.2s
```
