# Trigonometry & Height n Distance - Question 10 - Storyboard

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0.10-3.84 | Welcome back, time to solve one more problem | Hook | Question card | Question fades/rises in |
| 2 | 4.26-14.90 | cos theta = 4/5, theta acute, find sin theta | Setup | Question text + serial badge | Full question visible, badge pops |
| 3 | 15.78-21.04 | Understand what this given value tells us | Transition | Illustration | Right-triangle begins drawing |
| 4 | 21.36-29.10 | cos theta = adjacent/hypotenuse, so we're sure of one fact | Concept mapping | Illustration labels | Adjacent/Hypotenuse side names label onto triangle |
| 5 | 27.9 | Pin | Transition | Question+illustration | pinFlow glide to pinned slot |
| 6 | 29.62-34.78 | Adjacent side is 4 units, hypotenuse is 5 units | Given | Given card | States Adjacent=4, Hypotenuse=5 |
| 7 | 35.54-44.94 | Find opposite side, use Pythagoras theorem, Hyp²=Adj²+Opp² | Step 1 formula | Step 1 card | Pythagoras formula written |
| 8 | 45.60-56.16 | Substitute: 5²=4²+Opp², opposite becomes 3 units | Step 1 solve | Step 1 card | Substitution, Opp=3 |
| 9 | 56.90-61.10 | Got it? Perfect. Know all three sides | Confirm | Recap | Reinforcement beat |
| 10 | 61.78-69.04 | Check formula for sine: sin theta = opposite/hypotenuse | Step 2 formula | Step 2 card | Sine ratio written |
| 11 | 69.72-74.12 | Substitute values, becomes 3 upon 5 | Step 2 solve | Step 2 card | Substitution, 3/5 |
| 12 | 74.68-82.24 | Theta is acute, so sin theta positive | Step 2 reasoning | Step 2 card | Sign justification |
| 13 | 82.68-85.72 | Final answer: 3 by 5 | Step 2 result | Step 2 card | Final answer highlighted |
| 14 | 86.18-88.66 | Therefore option B is correct | Reveal | Options grid | Option B pulses green |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Question Entry (0.0s-4.3s)
TIMESTAMP: 0.3-4.3
VOICEOVER: "So welcome back again, it's time to solve one more problem."
VISUAL OBJECTIVE: Establish question card and serial badge.
SCREEN LAYOUT: Centered `.q-card` top area, `.serial-num` badge top-left, dotted-grid + bottom-strip always visible.
ON-SCREEN ELEMENTS: `#q-full-card` (text: "For an acute angle theta, cos theta = 4/5. Find sin theta."), `#serial-num` (digit "Q").
ANIMATION DETAILS: `apt.heroEnterLowered` on `#q-full-card` (0.7s rise + 0.6s settle starting 0.3, rise completes ~4.3), `serialEnter`-style pop on badge at 0.8s.
CAMERA MOVEMENT: none (static frame, motion is internal).
TRANSITIONS: fade+scale in.
EDUCATIONAL PURPOSE: orient viewer to the problem.
VISUAL HIERARCHY: question text primary, badge secondary.
ATTENTION MANAGEMENT: single focal card, no competing motion.
MOTION NOTES: `back.out(1.4)` ease on rise.
CONTINUITY FROM PREVIOUS SCENE: first scene, no prior motion.

### Scene 2 - Illustration Build (4.3s-27.9s)
TIMESTAMP: 5.0-27.9
VOICEOVER: "...cos theta is 4 by 5... theta is acute... find sin theta... understand what this given value is telling us... cos theta equals adjacent upon hypotenuse... we're sure of one fact."
VISUAL OBJECTIVE: Draw a right-triangle diagram with a true 4:3:5 ratio (adjacent=120px, opposite=90px, hypotenuse=150px, scale 30px/unit) so the geometry is already an honest proof of the later answer; label the two known side names (Adjacent, Hypotenuse) and the angle theta at the base vertex. The opposite side stays unlabeled by name only (no numeric value shown anywhere yet).
SCREEN LAYOUT: `#illustration` centered below question card, 200x260 viewBox SVG.
ON-SCREEN ELEMENTS: `#adj-line` (base, stroke-draw), `#opp-line` (vertical, stroke-draw), `#hyp-line` (diagonal, stroke-draw), `#right-angle-mark`, `#angle-arc` + `#angle-label` ("θ"), `#adj-label` ("Adjacent"), `#hyp-label` ("Hypotenuse"), `#opp-label` ("Opposite").
ANIMATION DETAILS: adjacent line draws first (0.7s) at 5.0, opposite line draws next (0.6s) at 5.9, hypotenuse draws (0.7s) at 6.7, right-angle mark fades in (0.3s) at 7.0, theta arc + label fade in together (0.4s) at 8.0 once all three sides exist, then Adjacent/Opposite/Hypotenuse text labels fade in sequentially at 21.6 / 23.4 / 25.2 (timed to the "adjacent upon hypotenuse" concept-mapping narration).
CAMERA MOVEMENT: none.
TRANSITIONS: sequential stroke-draw reveals, no cuts.
EDUCATIONAL PURPOSE: map the cos ratio narrated concept (adjacent, hypotenuse known; opposite unknown) directly onto geometry before any card appears.
VISUAL HIERARCHY: triangle sides first (structure), then theta arc (the given angle), then text labels (naming).
ATTENTION MANAGEMENT: only one element animates in at a time.
MOTION NOTES: triangle drawn at exact 4-3-5 proportions (120:90:150) so the diagram is already geometrically consistent with the eventual opposite=3 result.
CONTINUITY FROM PREVIOUS SCENE: illustration area was already visible (empty) since Scene 1; elements populate it without a hard cut.

### Scene 3 - Pin Transition (27.9s)
TIMESTAMP: 27.9 (PIN_TIME)
VOICEOVER: "...we're sure about one fact," (tail, leading into the Given values)
VISUAL OBJECTIVE: Move question + illustration into their pinned Phase 2 slots.
SCREEN LAYOUT: `#q-pinned` top strip, `#illus-pinned` smaller icon below-left.
ON-SCREEN ELEMENTS: `#q-full-card` -> `#q-pinned`, `#illustration` -> `#illus-pinned`, `#serial-num` fades out.
ANIMATION DETAILS: `apt.pinFlow` (0.8s glide, `power2.inOut`) on both question and illustration simultaneously.
CAMERA MOVEMENT: none, elements physically glide.
TRANSITIONS: real glide, not fade swap.
EDUCATIONAL PURPOSE: keep problem statement visible while making room for solution cards.
VISUAL HIERARCHY: pinned elements shrink in importance, solution cards take center stage next.
ATTENTION MANAGEMENT: single simultaneous glide motion.
MOTION NOTES: `apt.ambientLoop` on `#illus-pinned-icon` from 29 to 59s (small bob) to keep pinned icon alive during the long solving stretch.
CONTINUITY FROM PREVIOUS SCENE: the exact same triangle elements from Scene 2 continue moving, no new geometry introduced.

### Scene 4 - Given Card (29.62s-36.44s)
TIMESTAMP: 29.62 (GIVEN_TIME)
VOICEOVER: "The adjacent side is 4 units, and the hypotenuse is 5 units."
VISUAL OBJECTIVE: State the known side lengths as a Given card.
SCREEN LAYOUT: centered `.solution-card` with `.chip` "Given".
ON-SCREEN ELEMENTS: `#card-given` text: "Adjacent = 4", "Hypotenuse = 5".
ANIMATION DETAILS: `apt.cardEnter` (0.55s `back.out(1.4)`), `apt.textReveal` word-by-word synced to transcript (data-t 29.62 "Adjacent", 30.6 "=4", 32.4 "Hypotenuse", 33.4 "=5").
CAMERA MOVEMENT: none.
TRANSITIONS: card pop-in.
EDUCATIONAL PURPOSE: confirm which triangle sides are known before starting the Pythagoras step.
VISUAL HIERARCHY: chip label first, math lines follow.
ATTENTION MANAGEMENT: single active card, pinned elements calm (ambient loop only).
MOTION NOTES: none beyond standard cardEnter.
CONTINUITY FROM PREVIOUS SCENE: pin glide from Scene 3 has just settled; Given card appears in the now-empty center stage.

### Scene 5 - Step 1: Pythagoras Theorem (38.24s-58.5s)
TIMESTAMP: 38.24
VOICEOVER: "Let us find the opposite side first. Here we will use the Pythagoras Theorem. Hypotenuse square is equal to adjacent square plus opposite square. Now substitute the known values. Five square is equal to four square plus opposite square. After solving this, the opposite side becomes three units. Got it? Perfect."
VISUAL OBJECTIVE: Write the Pythagoras formula, substitute the known values, and solve for the missing opposite side.
ON-SCREEN ELEMENTS: `#card-step1` math: `Hyp² = Adj² + Opp²`, then `5² = 4² + Opp²`, then `Opp = 3`.
ANIMATION DETAILS: `apt.morphToStack` moves Given card to left stack at 36.44 (0.8s), `apt.cardEnter` + `apt.textReveal` for Step 1 at 38.24. First line reveals word-level at 40.86, second line (substitution) at 48.00, third line (result, `.ans`) at 53.26.
EDUCATIONAL PURPOSE: derive the missing opposite side needed for the sine ratio.
VISUAL HIERARCHY: chip "Step 1" then formula, then substitution, then result.
ATTENTION MANAGEMENT: Given card now small and calm in the stack column; only Step 1 card active.
CONTINUITY FROM PREVIOUS SCENE: Given card's morph directly hands off to Step 1's entrance with the ~1s breathing gap.

### Scene 6 - Step 2: Sine Ratio and Final Answer (61.78s-85.72s)
TIMESTAMP: 61.78
VOICEOVER: "Now we know all three sides. So let us check the formula for sine. Sine theta is equal to opposite upon hypotenuse. Now substitute the values. This becomes 3 upon 5. Also, the question clearly says theta is an acute angle, so sine theta will be positive. Hence, the final answer will be 3 by 5."
VISUAL OBJECTIVE: Write the sine ratio, substitute the solved opposite side, confirm the positive sign for an acute angle, and land the final answer.
ON-SCREEN ELEMENTS: `#card-step2` math: `sin θ = Opposite/Hypotenuse`, then `= 3/5`, then line "θ acute → sin θ positive", then final `sin θ = 3/5` (`.ans`).
ANIMATION DETAILS: `apt.morphToStack` Step 1 -> stack at 59.98 (0.8s, `stackLineGrow` for line-g-1), `apt.cardEnter` + `apt.textReveal` Step 2 at 61.78. Formula line reveals word-level at 64.88, substitution line at 71.74, acute-positive line-level reveal at 74.68, final answer (`.ans`) at 82.68.
EDUCATIONAL PURPOSE: complete the ratio, justify the positive sign, and state the final numeric answer.
VISUAL HIERARCHY: chip "Step 2" then formula, substitution, sign reasoning, final answer.
ATTENTION MANAGEMENT: stack column now shows Given + Step 1, only Step 2 card active.
CONTINUITY FROM PREVIOUS SCENE: stack column now shows Given + Step 1; Step 2 occupies center exactly where Step 1 was.

### Scene 7 - Options Reveal (85.9s-88.66s)
TIMESTAMP: 86.9 (options fadeIn), 87.4 (stagger), 88.0 (correctPulse)
VOICEOVER: "Therefore, option B is the correct answer."
VISUAL OBJECTIVE: Reveal options grid, highlight correct answer.
ON-SCREEN ELEMENTS: `.options-grid` A/B/C/D, `.opt-btn.correct` on B.
ANIMATION DETAILS: `apt.morphToStack` Step 2 -> stack at 85.9 (`stackLineGrow` line-1-2) + `apt.recenterForOptions` on `#q-pinned`, `apt.fadeIn` options-reveal, `apt.optionsStagger`, `apt.correctPulse` on B.
EDUCATIONAL PURPOSE: confirm final answer against all options.
CONTINUITY FROM PREVIOUS SCENE: Step 2's morph clears center stage exactly as options fade in there.

## PART 3: Asset List Required
- No external illustration assets; pure inline SVG (right triangle, angle arc) built with template's design tokens.
- Standard `_template/assets/` (serial-num badge, logo) copied locally.

## PART 4: Animation Complexity Notes
- Diagram is drawn at true 4:3:5 proportions (120:90:150 px, scale 30px/unit) so the rendered triangle geometrically matches the derived opposite=3 answer without any invented geometry.
- Reuses q9's stick/shadow stroke-draw diagram pattern, relabeled for a general right triangle (adjacent/opposite/hypotenuse).
- Only 2 solution steps (Given + Step 1 + Step 2) since the Pythagoras derivation and the sine substitution are each single continuous narrated ideas; matches the source narration's own pacing rather than forcing a third artificial split.
- All step transitions use the standard 0.8s `apt.morphToStack`; no custom animations introduced.

## PART 5: Master Timeline Overview
```
0.0    bg layers
0.3    Question card enter
0.8    Serial badge pop
5.0    Adjacent (base) line draws
5.9    Opposite (vertical) line draws
6.7    Hypotenuse (diagonal) line draws
7.0    Right-angle mark
8.0    Theta arc + label
21.6   "Adjacent" label
23.4   "Hypotenuse" label
25.2   "Opposite" label
27.9   PIN_TIME - pinFlow (question + illustration)
29-59  ambientLoop on pinned icon
29.62  GIVEN card enter
36.44  Given -> stack morph
38.24  Step 1 card enter
59.98  Step 1 -> stack morph
61.78  Step 2 card enter
85.9   Step 2 -> stack morph + recenter
86.9   Options fadeIn
87.4   Options stagger
88.0   Correct option (B) pulses
88.66  End
```
