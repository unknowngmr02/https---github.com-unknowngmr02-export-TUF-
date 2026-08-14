# Storyboard - Trigonometry Q35

Question: If tan θ = 2/3, find (1 + tan²θ) / (1 + cot²θ). Options: A) 9/4, B) 13/9, C) 4/9 (correct), D) 1.

NARR_END = 101.859s. PIN_TIME = 25.9. GIVEN_TIME = 26.3. END_FADE_TIME = 102.459. FADE_DUR = 1.2. TIMELINE_END = 103.859.

## PART 1 - Narration Beat Analysis

| # | Time | Narration | Purpose | Focus | Visual objective |
|---|------|-----------|---------|-------|-------------------|
| 1 | 0.1-3.28 | "So welcome back again. It's time to solve one more problem." | Hook | question card | hero entrance, lowered start |
| 2 | 3.72-7.58 | "In this problem, we have given tan θ is equal to 2/3," | Setup | triangle build | draw base/opposite/hyp, right-angle marker, adjacent=3/opposite=2 labels |
| 3 | 8.14-13.82 | "and we need to find 1+tan²θ, divided by, 1+cot²θ." | State goal | growing equation | angle arc + θ label pop, "Find:" fraction grows term by term |
| 4 | 14.32-25.56 | "What does this mean...job is just to find tan²θ and cot²θ, then put them into the expression." | Framing | tanθ=2/3 chip | confirm chip pop, repeated emphasis pulses on fraction/chip |
| 5 | 25.9 (PIN) / 26.28-29.76 | "Now, we have given that tan θ is equal to 2/3," | Pin + Given | pinned figure + Given card | pinFlow glide, Given card states tan θ=2/3 |
| 6 | 30.2-36.76 | "so tan²θ will be 2/3 whole square, which is equal to 4/9. Done." | Step 1 | Step1 card | tan²θ=(2/3)²=4/9 reveal, LINK pulse on pinned chip/sides |
| 7 | 37.38-57.76 | "...cot θ is just the reverse of tan θ...cot²θ becomes 3/2 whole square = 9/4." | Step 2 | Step2 card | cotθ=1/tanθ=3/2, cot²θ=(3/2)²=9/4, LINK recolor pinned sides |
| 8 | 59.9-79.2 | "put these values into expression...numerator 13/9...denominator 13/4." | Step 3 | Step3 card | (1+4/9)/(1+9/4) -> 13/9 over 13/4 |
| 9 | 82.1-101.86 | "keep first fraction, multiply by reciprocal...13/9 x 4/13...13 cancels...answer 4/9...option C." | Step 4 + Answer | Step4 card + options | cancellation, ans=4/9, options reveal, correct pulse on C |

## PART 2 - Scene-by-Scene Storyboard

### SCENE 1 (0-3.28s) - Hero open
VOICEOVER: "So welcome back again. It's time to solve one more problem."
VISUAL OBJECTIVE: Establish frame calmly before the triangle appears.
SCREEN LAYOUT: `#q-full-card` centered, lowered (apt.heroEnterLowered, offsetY 180), rises at 3.3s.
ON-SCREEN ELEMENTS: `#q-full-card` ("If tan θ = 2/3, find (1+tan²θ)/(1+cot²θ)."), `#serial-num` badge.
ANIMATION DETAILS: heroEnterLowered 0.3s start, rise at 3.3s; serial badge pops 0.8s, rises with card.
CAMERA MOVEMENT: none (2D).
TRANSITIONS: n/a (opening).
EDUCATIONAL PURPOSE: orient viewer to the exact question before math starts.
VISUAL HIERARCHY: question card dominant, badge secondary.
ATTENTION MANAGEMENT: single focal element.
MOTION NOTES: card rises exactly on "problem." ending.
CONTINUITY: n/a.

### SCENE 2 (3.72-13.82s) - Build the triangle + growing equation
VOICEOVER: "In this problem, we have given tan θ is equal to 2/3, and we need to find 1+tan²θ, divided by, 1+cot²θ."
VISUAL OBJECTIVE: Turn the abstract ratio tan θ=2/3 into a concrete right triangle (opposite=2, adjacent=3), then grow the target expression term by term.
SCREEN LAYOUT: illustration wrapper centered below the question card, `viewBox="0 0 580 500"`.
ON-SCREEN ELEMENTS: `#base-line`,`#opp-line`,`#hyp-line` (stroke-draw), `#right-angle`, `#angle-arc`, `#theta-label`, `#label-adj`("3"),`#label-opp`("2"), `#chip-tan` ("tan θ = 2/3"), `#eq-caption-find`("Find:"), `#eq-find` (.frac: top "1+tan²θ", bottom "1+cot²θ").
ANIMATION DETAILS: base draw 4.7 (0.6s), opp draw 5.6 (0.6s), right-angle pop 6.3 (0.3s), hyp draw 6.5 (0.7s), label-adj pop 5.0, label-opp pop 6.0, angle-arc fade 7.6 (0.4s), theta-label fade 7.9, chip-tan pop 8.0, eq-caption-find pop 8.7, eq-find top fade 9.06, eq-find bottom fade 12.34.
CAMERA MOVEMENT: none.
TRANSITIONS: continuous stroke-by-stroke build, no cuts.
EDUCATIONAL PURPOSE: ground tan θ=2/3 in a real triangle (opposite/adjacent) before symbol manipulation begins; state the exact target expression visually.
VISUAL HIERARCHY: triangle first, then chip, then equation.
ATTENTION MANAGEMENT: one new element every 0.3-1.3s, no gap >1.4s.
MOTION NOTES: right-angle marker rays derived from real B->A and B->C directions, inset 24px.
CONTINUITY FROM PREVIOUS SCENE: question card has just settled at its risen position; illustration begins directly beneath it with no cut.

### SCENE 3 (14.32-25.56s) - Framing + confirm
VOICEOVER: "What does this mean in simple words? We already know the value of tan θ, so our job is just to find tan²θ and cot²θ, then put them into the expression."
VISUAL OBJECTIVE: Let the confirmed tan θ=2/3 chip and the growing-equation fraction breathe with re-emphasis while the narrator frames the plan, so the canvas never sits idle.
SCREEN LAYOUT: unchanged from Scene 2 (triangle + eq-find still visible).
ON-SCREEN ELEMENTS: `#chip-tan`, `#eq-find` top/bottom.
ANIMATION DETAILS: emphasize chip-tan 16.3; emphasize eq-find top 18.8; emphasize eq-find bottom 22.4; emphasize eq-find (whole) 24.0.
CAMERA MOVEMENT: none.
TRANSITIONS: none (holding beat, filled with pulses).
EDUCATIONAL PURPOSE: reinforce which two unknowns (tan²θ, cot²θ) must be found before substitution.
VISUAL HIERARCHY: eq-find remains hero.
ATTENTION MANAGEMENT: pulses spaced ~1.5-2.5s apart, satisfying 3s rule.
MOTION NOTES: apt.emphasize only (0.3s yoyo), no new reveals here.
CONTINUITY FROM PREVIOUS SCENE: eq-find has just finished growing in Scene 2; here it gets re-emphasized rather than sitting static.

### SCENE 4 (PIN 25.9 / GIVEN 26.3-29.76s) - Pin + Given
VOICEOVER: "Now, we have given that tan θ is equal to 2/3,"
VISUAL OBJECTIVE: Reorganize into the pinned layout, restate the given value as the first solution card.
SCREEN LAYOUT: `#q-pinned` top, `#illus-pinned` left-center (coordinate-exact shrink of Scene 2's triangle), `#card-given` center.
ON-SCREEN ELEMENTS: pinned triangle (static, always visible except chip-tan-pinned), `#card-given` with "tan θ = 2/3".
ANIMATION DETAILS: apt.pinFlow(q-full-card->q-pinned, illustration->illus-pinned) at 25.9; apt.cardEnter card-given at 26.3; textReveal words at 27.38/27.60/28.08/28.96.
CAMERA MOVEMENT: none.
TRANSITIONS: pinFlow real glide (0.8s), not a fade swap.
EDUCATIONAL PURPOSE: transition from "building intuition" to "doing the algebra."
VISUAL HIERARCHY: Given card center-stage, pinned triangle secondary reference.
ATTENTION MANAGEMENT: glide + card entrance are the two beats.
MOTION NOTES: pinned triangle keeps identical viewBox/coords, only width/height and stroke-widths shrink.
CONTINUITY FROM PREVIOUS SCENE: the same triangle that was just built glides (not cuts) into its pinned slot; eq-find and chip-tan (full-size) fade with the rest of `#phase1`.

### SCENE 5 (30.2-37.0s) - Step 1: tan²θ
VOICEOVER: "So tan²θ will be 2/3 whole square, which is equal to 4/9. Done."
VISUAL OBJECTIVE: Square the given ratio.
SCREEN LAYOUT: Given card morphs to stack (G circle); Step1 card center.
ON-SCREEN ELEMENTS: `#card-step1` math: "tan²θ = (2/3)² = 4/9".
ANIMATION DETAILS: morphToStack(given->stack-given) 29.5; cardEnter step1 30.3; textReveal words 30.44/32.06/32.56/33.74/34.68/35.38; emphasize chip-tan-pinned 32.56; recolor pinned adjacent+opposite lines green-pulse 35.38.
CAMERA MOVEMENT: none.
TRANSITIONS: 0.8s morphToStack.
EDUCATIONAL PURPOSE: isolate and compute the first unknown.
VISUAL HIERARCHY: ans "4/9" highlighted green (.ans).
ATTENTION MANAGEMENT: word-level beats every ~0.5-1.3s.
MOTION NOTES: LINK - pinned figure recolors exactly when 4/9 lands.
CONTINUITY FROM PREVIOUS SCENE: Given card's box is still completing its slide into the stack column as Step1's card fades up in the center.

### SCENE 6 (37.8-58.5s) - Step 2: cot²θ
VOICEOVER: "...cot θ is just the reverse of tan θ. If tan θ is 2/3, then cot θ will be 3/2. So cot²θ becomes 3/2 whole square, which is equal to 9/4. Got it? Perfect."
VISUAL OBJECTIVE: Derive cot θ as the reciprocal, then square it.
SCREEN LAYOUT: Step1 card morphs to stack (circle "1"); Step2 card center, two lines: "cot θ = 1/tan θ = 3/2" then "cot²θ = (3/2)² = 9/4".
ON-SCREEN ELEMENTS: `#card-step2`.
ANIMATION DETAILS: morphToStack(step1->stack-step1) 37.0 + stackLineGrow line-g-1; cardEnter step2 37.8; textReveal words 44.18/44.44/44.94/45.48/49.62/50.56/52.04/53.44/53.86/55.02/56.16/56.82; pinned side-recolor pulses at 45.48 (reverse) and 50.56 (3/2) and 56.82 (9/4).
CAMERA MOVEMENT: none.
TRANSITIONS: 0.8s morph.
EDUCATIONAL PURPOSE: the reciprocal relationship tan<->cot, made concrete via the same triangle (swap roles of the two legs).
VISUAL HIERARCHY: ans "9/4" highlighted green.
ATTENTION MANAGEMENT: long card (20.7s) kept alive by dense word-level reveals plus 3 LINK pulses on the pinned figure - never idle >3s.
MOTION NOTES: no new reveals during "Got it? Perfect." filler (58.12-59.36) - card holds before its morph.
CONTINUITY FROM PREVIOUS SCENE: Step1's stack circle "1" is still settling into the left column as Step2 opens center-stage.

### SCENE 7 (59.9-79.9s) - Step 3: substitute
VOICEOVER: "Now let us put these values into the expression. 1+4/9 upon 1+9/4. The numerator becomes 13/9 and the denominator becomes 13/4. So this becomes 13/9 upon 13/4."
VISUAL OBJECTIVE: Substitute the two squared values into the original expression and simplify each half.
SCREEN LAYOUT: Step2 card morphs to stack (circle "2"); Step3 card center, 4 rows.
ON-SCREEN ELEMENTS: `#card-step3` - row1 nested-frac "(1+4/9)/(1+9/4)", row2 "Numerator = 13/9", row3 "Denominator = 13/4", row4 nested-frac ans "13/9 / 13/4".
ANIMATION DETAILS: morphToStack(step2->stack-step2) 58.5 + stackLineGrow line-1-2; cardEnter step3 59.9; row reveals (line-level) 62.66/68.1/71.26/76.0.
CAMERA MOVEMENT: none.
TRANSITIONS: 0.8s morph.
EDUCATIONAL PURPOSE: show the compound fraction resolving cleanly into two same-sized fractions (13/9, 13/4), setting up the division trick.
VISUAL HIERARCHY: row4 (ans-styled) is the payoff of this card.
ATTENTION MANAGEMENT: 4 beats over ~19.3s, none >6s apart (well under the 8s single-card ceiling given the compound content each row carries).
MOTION NOTES: nested `.frac` inside `.frac` renders the compound fraction, no bare `/` or `÷` used.
CONTINUITY FROM PREVIOUS SCENE: Step2's "2" circle is still sliding into the stack as Step3 opens; the pinned triangle sits quiet (its job is done, no further LINK needed here).

### SCENE 8 (82.0-101.86s) - Step 4: divide and answer
VOICEOVER: "When we divide fractions, we keep the first fraction as it is and multiply by the reciprocal of the second fraction. So we get 13/9 x 4/13. The 13 gets canceled with 13. Hence, the final answer will be 4/9. So the correct option is option C."
VISUAL OBJECTIVE: Execute keep-change-flip, cancel the 13s, land on 4/9, then confirm option C.
SCREEN LAYOUT: Step3 card morphs to stack (circle "3"); Step4 card center, 3 rows; options grid on the right/pinned column.
ON-SCREEN ELEMENTS: `#card-step4` - row0 rule text, row1 "13/9 x 4/13", row2 "13 cancels with 13", row3 ans "= 4/9"; `#options-reveal` A(9/4) B(13/9) C(4/9, correct) D(1).
ANIMATION DETAILS: morphToStack(step3->stack-step3) 79.9 + stackLineGrow line-2-3; cardEnter step4 82.0; row0 reveal 82.1 + emphasize pulses 83.86/86.2/87.0/88.4 (fills the rule-explanation gap); row1 reveals 90.1/91.46/92.34; row2 reveal 94.04 + emphasize 96.6; row3 (ans) reveal 98.66; recolor pinned triangle + chip-tan-pinned green-pulse 98.66; morphToStack(step4->stack-step4) + fadeOut illus-pinned + recenterForOptions(q-pinned) 100.3 + stackLineGrow line-3-4; fadeIn options-reveal 101.0; optionsStagger 101.6; correctPulse .correct 101.8.
CAMERA MOVEMENT: none.
TRANSITIONS: final 0.8s morph, then recenter (0.5s), options fade+stagger.
EDUCATIONAL PURPOSE: land the keep-change-flip rule concretely, show the cancellation, confirm the final numeric answer matches option C.
VISUAL HIERARCHY: ans "4/9" then options grid, correct option pulses green.
ATTENTION MANAGEMENT: word/line beats every 1-2.6s across the whole 19.9s card.
MOTION NOTES: options reveal and correctPulse are timed to land exactly as the narrator says "option C" (101.84-101.86).
CONTINUITY FROM PREVIOUS SCENE: Step3's "3" circle is still landing in the stack column as Step4 opens; the stack column (G,1,2,3) stays fully visible and connected through to the final "4" circle and the options reveal.

## PART 3 - Asset List Required
- No external assets. Pure inline SVG right triangle (base/opposite/hypotenuse, right-angle marker, theta arc) + design-system components (`.q-card`, `.solution-card`, `.stack-card`, `.chip`, `.step-circle`, `.stack-line`, `.frac`, `.opt-btn`, `.serial-num`) + one local `.fig-chip` rule for the "tan θ = 2/3" chip.

## PART 4 - Animation Complexity Notes
- Nested `.frac` (a fraction whose numerator/denominator are themselves fractions) used twice: Step3 row1/row4, Step4 row1. No new helper needed - `.frac`'s `.top`/`.bot` are plain flex containers that already accept nested content.
- Angle arc: opacity-only, `--angle: 33.69` bare unitless, matches atan2(120,180)=33.69deg within 1deg.
- LINK pattern used 6 times total (Step1 x2, Step2 x3, Step4 x1) tying the pinned triangle back to whichever value just landed in the active card.
- Step2 is the one card exceeding 8s (20.7s) - filled via 12 word-level reveals + 3 LINK pulses, no gap >3s.

## PART 5 - Master Timeline Overview
```
0.0   background + q-full-card lowered
0.3   heroEnterLowered start
0.8   serial-num pop
3.3   card+badge rise
4.7   base-line draw
5.0   label-adj "3" pop
5.6   opp-line draw
6.0   label-opp "2" pop
6.3   right-angle pop
6.5   hyp-line draw
7.6   angle-arc fade
7.9   theta-label fade
8.0   chip-tan pop
8.7   eq-caption-find pop
9.06  eq-find top fade
12.34 eq-find bottom fade
16.3-24.0  emphasize pulses (chip-tan, eq-find) x4
25.9  PIN_TIME - pinFlow (q + illustration)
26.3  GIVEN_TIME - card-given enter
27.38-28.96 given text reveal
29.5  morph given->stack-given
30.3  card-step1 enter
30.44-35.38 step1 text reveal
37.0  morph step1->stack-step1 + line-g-1 grow
37.8  card-step2 enter
44.18-56.82 step2 text reveal (12 beats)
58.5  morph step2->stack-step2 + line-1-2 grow
59.9  card-step3 enter
62.66/68.1/71.26/76.0 step3 row reveals
79.9  morph step3->stack-step3 + line-2-3 grow
82.0  card-step4 enter
82.1  row0 reveal (+ pulses 83.86/86.2/87.0/88.4)
90.1-92.34 row1 reveal
94.04 row2 reveal (+ pulse 96.6)
98.66 row3 (ans) reveal + pinned figure LINK
100.3 morph step4->stack-step4 + line-3-4 grow + illus-pinned fadeOut + recenterForOptions
101.0 options-reveal fadeIn
101.6 optionsStagger
101.8 correctPulse (.correct)
102.459 END_FADE_TIME - fadeOut #root > div (1.2s)
103.859 TIMELINE_END (tl.set marker)
```
