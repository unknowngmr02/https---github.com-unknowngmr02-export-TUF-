# Trigonometry & Height n Distance - Question 9 - Storyboard

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0.10-4.94 | Welcome back, time to solve one more problem | Hook | Question card | Question fades/scales in |
| 2 | 5.34-16.86 | Vertical stick, shadow equal to height, find sun's angle of elevation | Setup | Question text + serial badge | Full question visible, badge pops |
| 3 | 17.38-19.96 | Let angle of elevation be theta | Notation | Illustration | Stick + shadow diagram begins, theta introduced |
| 4 | 20.70-34.36 | Understand picture: stick=opposite, shadow=adjacent | Concept mapping | Illustration labels | Stick draws, shadow draws, labels "Height"/"Shadow" appear, right-angle mark, theta arc |
| 5 | 34.36 | Pin | Transition | Question+illustration | pinFlow glide to pinned slot |
| 6 | 35.04-42.30 | Since we know opposite & adjacent sides, ratio to use is tan | Given | Given card | States Opposite=Height, Adjacent=Shadow |
| 7 | 42.92-47.18 | tan theta = Opposite/Adjacent | Step 1 | Step 1 card | Formula written |
| 8 | 49.70-61.02 | Height=Shadow, so tan theta = Height/Shadow = 1/1 = 1 | Step 2 | Step 2 card | Substitution, tan theta = 1 |
| 9 | 64.26-72.38 | tan45deg=1, so theta=45deg | Step 3 | Step 3 card | Standard value match, theta solved |
| 10 | 72.46-78.24 | Got it? Perfect. Sun's angle of elevation is 45deg | Confirm | Recap | Reinforcement beat |
| 11 | 78.34-82.70 | Hence correct option is A, 45deg | Reveal | Options grid | Option A pulses green |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Question Entry (0.0s-2.5s)
TIMESTAMP: 0.3-2.5
VOICEOVER: "So welcome back again, it's time to solve one more problem."
VISUAL OBJECTIVE: Establish question card and serial badge.
SCREEN LAYOUT: Centered `.q-card` top area, `.serial-num` badge top-left, dotted-grid + bottom-strip always visible.
ON-SCREEN ELEMENTS: `#q-full-card` (text: "A vertical stick has a shadow equal to its height. What is the sun's angle of elevation?"), `#serial-num` (digit "Q").
ANIMATION DETAILS: `apt.heroEnterLowered` on `#q-full-card` (0.7s rise + 0.6s settle), `serialEnter`-style pop on badge at 0.8s.
CAMERA MOVEMENT: none (static frame, motion is internal).
TRANSITIONS: fade+scale in.
EDUCATIONAL PURPOSE: orient viewer to the problem.
VISUAL HIERARCHY: question text primary, badge secondary.
ATTENTION MANAGEMENT: single focal card, no competing motion.
MOTION NOTES: `back.out(1.4)` ease on rise.
CONTINUITY FROM PREVIOUS SCENE: first scene, no prior motion.

### Scene 2 - Illustration Build (2.5s-34.36s)
TIMESTAMP: 4.9-34.36
VOICEOVER: "...vertical stick... shadow of stick equal to height... angle of elevation be theta... stick standing straight so height becomes opposite side... shadow on ground becomes adjacent side."
VISUAL OBJECTIVE: Draw a right-triangle diagram: vertical stick (opposite), ground shadow (adjacent), sun's line-of-sight (hypotenuse), theta arc at the ground observation point.
SCREEN LAYOUT: `#illustration` centered below question card, 340x300 viewBox SVG.
ON-SCREEN ELEMENTS: `#gnd-line` (shadow, stroke-draw), `#stick-line` (vertical stick, stroke-draw), `#stick-cap` (small flat top marker), `#los-line` (line of sight from ground point to stick top), `#obs-point`, `#right-angle-mark`, `#angle-arc` + `#angle-label` ("θ"), `#height-label` ("Height"), `#shadow-label` ("Shadow").
ANIMATION DETAILS: ground line draws first (0.7s), stick draws next (0.7s), line-of-sight draws (0.6s), right-angle mark fades in (0.3s), theta arc + label fade in together (0.4s) once both sides are established, then Height/Shadow text labels fade in sequentially.
CAMERA MOVEMENT: none.
TRANSITIONS: sequential stroke-draw reveals, no cuts.
EDUCATIONAL PURPOSE: map narrated concept (stick=opposite, shadow=adjacent) directly onto geometry so the ratio makes visual sense before any formula appears.
VISUAL HIERARCHY: stick + shadow lines first (structure), then theta arc (the unknown), then text labels (naming).
ATTENTION MANAGEMENT: only one element animates in at a time.
MOTION NOTES: stick height equals shadow length in the drawing (both 140 units) so the diagram itself is already a visual proof of the 45 degree answer.
CONTINUITY FROM PREVIOUS SCENE: illustration area was already visible (empty) since Scene 1; elements populate it without a hard cut.

### Scene 3 - Pin Transition (34.36s)
TIMESTAMP: 34.36 (PIN_TIME)
VOICEOVER: "That is all we need for this question." (tail)
VISUAL OBJECTIVE: Move question + illustration into their pinned Phase 2 slots.
SCREEN LAYOUT: `#q-pinned` top strip, `#illus-pinned` smaller icon below-left.
ON-SCREEN ELEMENTS: `#q-full-card` -> `#q-pinned`, `#illustration` -> `#illus-pinned`, `#serial-num` fades out.
ANIMATION DETAILS: `apt.pinFlow` (0.8s glide, `power2.inOut`) on both question and illustration simultaneously.
CAMERA MOVEMENT: none, elements physically glide.
TRANSITIONS: real glide, not fade swap.
EDUCATIONAL PURPOSE: keep problem statement visible while making room for solution cards.
VISUAL HIERARCHY: pinned elements shrink in importance, solution cards take center stage next.
ATTENTION MANAGEMENT: single simultaneous glide motion.
MOTION NOTES: `apt.ambientLoop` on `#illus-pinned-icon` from 36 to 63s (small bob) to keep pinned icon alive during long solving stretch.
CONTINUITY FROM PREVIOUS SCENE: the exact same illustration elements from Scene 2 continue moving, no new geometry introduced.

### Scene 4 - Given Card (35.04s-41.9s)
TIMESTAMP: 35.04 (GIVEN_TIME)
VOICEOVER: "Since we know the opposite side and the adjacent side, the correct trigonometric ratio to use is tan."
VISUAL OBJECTIVE: State the known relationship (Opposite=Height, Adjacent=Shadow) as a Given card.
SCREEN LAYOUT: centered `.solution-card` with `.chip` "Given".
ON-SCREEN ELEMENTS: `#card-given` text: "Opposite = Height", "Adjacent = Shadow".
ANIMATION DETAILS: `apt.cardEnter` (0.55s `back.out(1.4)`), `apt.textReveal` line-by-line synced to transcript.
CAMERA MOVEMENT: none.
TRANSITIONS: card pop-in.
EDUCATIONAL PURPOSE: confirm which triangle sides are known before naming the ratio.
VISUAL HIERARCHY: chip label first, math lines follow.
ATTENTION MANAGEMENT: single active card, pinned elements calm (ambient loop only).
MOTION NOTES: none beyond standard cardEnter.
CONTINUITY FROM PREVIOUS SCENE: pin glide from Scene 3 has just settled; Given card appears in the now-empty center stage.

### Scene 5 - Step 1: Formula (42.92s-48.5s)
TIMESTAMP: 42.92
VOICEOVER: "tan theta is equal to opposite upon adjacent."
VISUAL OBJECTIVE: Write the tangent ratio formula.
ON-SCREEN ELEMENTS: `#card-step1` math: `tan θ = Opposite/Adjacent` (`.frac`).
ANIMATION DETAILS: `apt.morphToStack` moves Given card to left stack at 41.9 (0.8s), `apt.cardEnter` + `apt.textReveal` for Step 1 at 42.92.
EDUCATIONAL PURPOSE: introduce the tangent ratio explicitly.
VISUAL HIERARCHY: chip "Step 1" then fraction reveal.
ATTENTION MANAGEMENT: Given card now small and calm in the stack column; only Step 1 card active.
CONTINUITY FROM PREVIOUS SCENE: Given card's morph directly hands off to Step 1's entrance with the ~1s breathing gap.

### Scene 6 - Step 2: Substitution (49.70s-63.0s)
TIMESTAMP: 49.70
VOICEOVER: "The height is equal to the shadow, so tan theta is equal to height upon shadow, which becomes one upon one. That means tan theta is equal to one."
VISUAL OBJECTIVE: Substitute Height/Shadow, simplify to 1/1, conclude tan theta = 1.
ON-SCREEN ELEMENTS: `#card-step2` math: `tan θ = Height/Shadow = 1/1` then `tan θ = 1`.
ANIMATION DETAILS: `apt.morphToStack` Step 1 -> stack at 48.5 (stackLineGrow for line-g-1), `apt.cardEnter` + `apt.textReveal` Step 2 at 49.70.
EDUCATIONAL PURPOSE: the core numeric insight (equal legs give ratio 1).
CONTINUITY FROM PREVIOUS SCENE: stack column now shows Given + Step 1; Step 2 occupies center exactly where Step 1 was.

### Scene 7 - Step 3: Solve for Theta (64.26s-77.0s)
TIMESTAMP: 64.26
VOICEOVER: "Tan forty-five degrees is equal to one. Since tan theta is also equal to one, the value of theta must be forty-five degrees. Got it? Perfect. So the sun's angle of elevation is forty-five degrees."
VISUAL OBJECTIVE: Match the standard value tan45 degree=1, conclude theta=45 degree.
ON-SCREEN ELEMENTS: `#card-step3` math: `tan 45° = 1`, `tan θ = 1 → θ = 45°` (final `.ans`).
ANIMATION DETAILS: `apt.morphToStack` Step 2 -> stack at 63.0 (stackLineGrow line-1-2), `apt.cardEnter` + `apt.textReveal` Step 3 at 64.26.
EDUCATIONAL PURPOSE: land the final answer with the standard-value justification.
CONTINUITY FROM PREVIOUS SCENE: stack now shows Given + Step 1 + Step 2; Step 3 is the last active card before options.

### Scene 8 - Options Reveal (77.0s-82.7s)
TIMESTAMP: 78.3 (options fadeIn), 78.9 (stagger), 80.9 (correctPulse)
VOICEOVER: "Hence, the correct option is option A, forty-five degrees."
VISUAL OBJECTIVE: Reveal options grid, highlight correct answer.
ON-SCREEN ELEMENTS: `.options-grid` A/B/C/D, `.opt-btn.correct` on A.
ANIMATION DETAILS: `apt.morphToStack` Step 3 -> stack at 77.0 (stackLineGrow line-2-3) + `apt.recenterForOptions` on `#q-pinned`, `apt.fadeIn` options-reveal, `apt.optionsStagger`, `apt.correctPulse` on A.
EDUCATIONAL PURPOSE: confirm final answer against all options.
CONTINUITY FROM PREVIOUS SCENE: Step 3's morph clears center stage exactly as options fade in there.

## PART 3: Asset List Required
- No external illustration assets; pure inline SVG (stick, shadow, line-of-sight, angle arc) built with template's design tokens.
- Standard `_template/assets/` (serial-num badge, logo) copied locally.

## PART 4: Animation Complexity Notes
- Diagram is drawn with equal-length legs (140 units each) so the rendered angle is a true 45 degree, matching the answer without any invented geometry.
- Reuses q8's tower-diagram pattern (stroke-dash draw-on) relabeled for stick/shadow.
- All step transitions use the standard 0.8s `apt.morphToStack`; no custom animations introduced.

## PART 5: Master Timeline Overview
```
0.0    bg layers
0.3    Question card enter
0.8    Serial badge pop
4.9    Shadow (ground) line draws
5.8    Stick line draws
6.6    Line-of-sight draws
6.8    Right-angle mark
12.7   Theta arc + label
19.24  "Height" label
23.08  "Shadow" label (adjusted per storyboard flow)
34.36  PIN_TIME - pinFlow (question + illustration)
36-63  ambientLoop on pinned icon
35.04  GIVEN card enter
41.9   Given -> stack morph
42.92  Step 1 card enter
48.5   Step 1 -> stack morph
49.70  Step 2 card enter
63.0   Step 2 -> stack morph
64.26  Step 3 card enter
77.0   Step 3 -> stack morph + recenter
78.3   Options fadeIn
78.9   Options stagger
80.9   Correct option (A) pulses
82.7   End
```
