# Storyboard - Trigonometry & Height n Distance Q6 (Cot 45 + Tan 45)

## PART 1: Narration Beat Analysis

| Beat | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.10-6.74 | "So welcome back again. It's time to solve one more problem. Now, in this problem, we need to find cot forty-five degree plus" | Cold open + state problem | Question card | Question card + SerialNum enter |
| 2 | 7.22-8.42 | "tan forty-five degree." | Finish stating problem | Question text numbers | "cot 45 degree" and "tan 45 degree" highlighted |
| 3 | 8.98-15.22 | "This is a direct standard trigonometric values question. So we only need to remember the values of these two ratios." | Frame approach - no diagram needed, pure recall | Pinned question | Pin flow to top, Given card opens with the two-term expression |
| 4 | 15.94-18.78 | "We know that cot forty-five degree is equal to one," | Recall standard value 1 | Step 1 card | Cot 45° = 1 |
| 5 | 19.38-22.10 | "and tan forty-five degree is also equal to one." | Recall standard value 2 | Step 2 card | Tan 45° = 1 |
| 6 | 22.64-27.38 | "Now we simply add these two values, one plus one. After adding, we get two." | Combine | Step 3 card | 1 + 1 = 2 |
| 7 | 28.26-32.56 | "Hence, the required answer is two. So the correct option is option B." | Conclude | Options grid | Answer = 2, Option B pulses green |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Cold Open + Question (0.0-8.42s)
- TIMESTAMP: 0.0
- VOICEOVER: "So welcome back again. It's time to solve one more problem. Now, in this problem, we need to find cot forty-five degree plus tan forty-five degree."
- VISUAL OBJECTIVE: establish question card as anchor, highlight the two ratio terms.
- SCREEN LAYOUT: `#q-full-card` centered, lowered 180px (`apt.heroEnterLowered`), SerialNum top-left.
- ON-SCREEN ELEMENTS: dotted-grid, bottom-strip, topic-name "Trigonometry & Height n Distance", logo, `#q-full-card` with "cot 45 degree" and "tan 45 degree" wrapped in `<span class="num">`, `#serial-num`.
- ANIMATION DETAILS: `apt.heroEnterLowered(tl,"#q-full-card",180,3.6)` at 0.3s; `apt.serialEnter(tl,"#serial-num",0.8)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: fade+scale entrance (`back.out(1.4)`).
- EDUCATIONAL PURPOSE: orient viewer to the exact expression to evaluate.
- VISUAL HIERARCHY: question card dominant, num spans in blue.
- ATTENTION MANAGEMENT: nothing competes.
- MOTION NOTES: card rises to rest at 3.6s, holds through 8.42s.
- CONTINUITY FROM PREVIOUS SCENE: opening scene, no prior state.

### Scene 2 - Frame Approach + Pin (PIN_TIME 9.0 / GIVEN_TIME 9.8)
- TIMESTAMP: 8.98
- VOICEOVER: "This is a direct standard trigonometric values question. So we only need to remember the values of these two ratios."
- VISUAL OBJECTIVE: no diagram needed (pure recall question) - pin question and open Given card directly with the expression restated.
- SCREEN LAYOUT: `#q-pinned` (left:385px, top:30px, width:1275px); no illustration used this question. `#card-given .solution-card` centered.
- ON-SCREEN ELEMENTS: pinned question card, `#serial-num` fades out, Given solution-card chip "Given", math line "Cot 45° + Tan 45° = ?".
- ANIMATION DETAILS: `apt.pinFlow(tl,"#q-full-card","#q-pinned",9.0)`; `apt.fadeOut(tl,"#serial-num",9.0,0.5)`; `apt.cardEnter(tl,"#card-given .solution-card",9.8)`; `apt.textReveal(tl,"#card-given .math")` reveals data-t 9.8 (line-level: "Cot 45 degree plus Tan 45 degree equals what").
- CAMERA MOVEMENT: none.
- TRANSITIONS: pinFlow glide (real motion, not fade swap). No illustration pinFlow pair since no illustration exists this question.
- EDUCATIONAL PURPOSE: states the target expression formally before recalling values.
- VISUAL HIERARCHY: Given card is now largest/brightest element.
- ATTENTION MANAGEMENT: pinned question shrinks and quiets down.
- MOTION NOTES: 0.8s gap between PIN_TIME and GIVEN_TIME is a deliberate settle beat.
- CONTINUITY FROM PREVIOUS SCENE: the same question card from Scene 1 glides into `#q-pinned`, literal continuation.

### Scene 3 - Step 1: Cot 45 (Step1 enter 15.94, morph to stack 15.74 handled by prior card)
- TIMESTAMP: 15.94
- VOICEOVER: "We know that cot forty-five degree is equal to one,"
- VISUAL OBJECTIVE: recall first standard value.
- SCREEN LAYOUT: Given morphs into `#stack-given` (left:100px, top:140px); `#card-step1 .solution-card` opens centered.
- ON-SCREEN ELEMENTS: stack chip "G" with "Cot 45° + Tan 45° = ?" recap; Step 1 chip; math line "Cot 45° = 1".
- ANIMATION DETAILS: `apt.morphToStack(tl,"#card-given .solution-card","#stack-given .stack-card",15.74)`; `apt.cardEnter(tl,"#card-step1 .solution-card",15.94)`; `apt.textReveal(tl,"#card-step1 .math")` reveals data-t 15.94 (word-level: "Cot/45/degree/=/1").
- CAMERA MOVEMENT: none.
- TRANSITIONS: 0.8s morph overlapping with card enter (0.2s before, matching q5 pattern).
- EDUCATIONAL PURPOSE: anchors the first memorized value.
- VISUAL HIERARCHY: "1" in `.ans` style is the centerpiece.
- ATTENTION MANAGEMENT: single line only.
- MOTION NOTES: card holds through 18.78 before Step 2 begins.
- CONTINUITY FROM PREVIOUS SCENE: Given card still completing its morph into the stack (ends 16.54) as Step 1's cardEnter begins 0.2s earlier per pattern.

### Scene 4 - Step 2: Tan 45 (Step2 enter 19.38, morph 19.18)
- TIMESTAMP: 19.38
- VOICEOVER: "and tan forty-five degree is also equal to one."
- VISUAL OBJECTIVE: recall second standard value.
- SCREEN LAYOUT: Step 1 morphs into `#stack-step1` (left:100px, top:290px); `#card-step2 .solution-card` opens centered.
- ON-SCREEN ELEMENTS: stack circle "1"; Step 2 chip; math line "Tan 45° = 1".
- ANIMATION DETAILS: `apt.morphToStack(tl,"#card-step1 .solution-card","#stack-step1 .stack-card",19.18)`; `apt.stackLineGrow(tl,"#line-g-1",19.18)`; `apt.cardEnter(tl,"#card-step2 .solution-card",19.38)`; `apt.textReveal(tl,"#card-step2 .math")` reveals data-t 19.38 (word-level: "Tan/45/degree/=/1").
- CAMERA MOVEMENT: none.
- TRANSITIONS: morph + card enter.
- EDUCATIONAL PURPOSE: anchors the second memorized value.
- VISUAL HIERARCHY: "1" in `.ans` style is centerpiece.
- ATTENTION MANAGEMENT: single line only.
- MOTION NOTES: card holds through 22.10 before Step 3 begins.
- CONTINUITY FROM PREVIOUS SCENE: Step 1 card mid-morph into `#stack-step1` (ends 19.98) as Step 2's cardEnter begins, G-1 connector line grows in same instant.

### Scene 5 - Step 3: Add + Answer (Step3 enter 22.64, morph 22.44)
- TIMESTAMP: 22.64
- VOICEOVER: "Now we simply add these two values, one plus one. After adding, we get two."
- VISUAL OBJECTIVE: combine both values and land on final answer.
- SCREEN LAYOUT: Step 2 morphs into `#stack-step2` (left:100px, top:440px); `#card-step3 .solution-card` opens centered.
- ON-SCREEN ELEMENTS: stack circle "2"; Step 3 chip; math line "1 + 1 = 2" (2 in `.ans`).
- ANIMATION DETAILS: `apt.morphToStack(tl,"#card-step2 .solution-card","#stack-step2 .stack-card",22.44)`; `apt.stackLineGrow(tl,"#line-1-2",22.44)`; `apt.cardEnter(tl,"#card-step3 .solution-card",22.64)`; `apt.textReveal(tl,"#card-step3 .math")` reveals data-t 22.64 (word-level: "1/+/1/=/2", second half at data-t 26.18 for "we get 2").
- CAMERA MOVEMENT: none.
- TRANSITIONS: morph + card enter.
- EDUCATIONAL PURPOSE: shows the arithmetic that yields the final answer.
- VISUAL HIERARCHY: final "2" is brightest element.
- ATTENTION MANAGEMENT: single line, deliberately sparse.
- MOTION NOTES: card holds through 27.38 before options reveal.
- CONTINUITY FROM PREVIOUS SCENE: Step 2 card mid-morph into `#stack-step2` (ends 23.24) as Step 3's cardEnter begins.

### Scene 6 - Options Reveal (Step3 morph 28.06, options 28.26-32.56)
- TIMESTAMP: 28.26
- VOICEOVER: "Hence, the required answer is two. So the correct option is option B."
- VISUAL OBJECTIVE: reveal options with B highlighted as final answer confirms.
- SCREEN LAYOUT: Step 3 morphs into `#stack-step3` (left:100px, top:590px); `#q-pinned` recenters; options grid appears.
- ON-SCREEN ELEMENTS: stack column (G/1/2/3 circles + connector lines), pinned+recentered question card, 2x2 options grid with B in `.correct` green state.
- ANIMATION DETAILS: `apt.morphToStack(tl,"#card-step3 .solution-card","#stack-step3 .stack-card",28.06)`; `apt.stackLineGrow(tl,"#line-2-3",28.06)`; `apt.recenterForOptions(tl,"#q-pinned",160,180,28.06)`; `apt.fadeIn(tl,"#options-reveal",28.7)`; `apt.optionsStagger(tl,".opt-btn",29.1)`; `apt.correctPulse(tl,".opt-btn.correct",30.16)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: question recenters, grid staggers in.
- EDUCATIONAL PURPOSE: connects derived answer back to multiple-choice options.
- VISUAL HIERARCHY: green pulse on option B is final visual beat.
- ATTENTION MANAGEMENT: stack column stays put, only right side changes.
- MOTION NOTES: correct pulse timed to "two" (30.16-30.44), holds through "option B" (30.94-32.56).
- CONTINUITY FROM PREVIOUS SCENE: Step 3's card mid-morph into `#stack-step3` as options fade in right after.

### Scene 7 - End Hold (32.56-34.0s)
- TIMESTAMP: 32.56
- VOICEOVER: (silence, tail of voiceover)
- VISUAL OBJECTIVE: settle on final answer state before fade-out.
- SCREEN LAYOUT: unchanged from Scene 6.
- ON-SCREEN ELEMENTS: full stack column, pinned question, options grid with green B.
- ANIMATION DETAILS: `apt.fadeOut(tl,"#root > div",33.0,1.2)` fades every top-level element together.
- CAMERA MOVEMENT: none.
- TRANSITIONS: single synchronized fade-out.
- EDUCATIONAL PURPOSE: gives viewer a clean beat to register the final answer.
- VISUAL HIERARCHY: n/a, fading uniformly.
- ATTENTION MANAGEMENT: nothing new, pure hold then fade.
- MOTION NOTES: matches template's END_FADE pattern.
- CONTINUITY FROM PREVIOUS SCENE: direct continuation of Scene 6's settled state, held ~0.4s before fade begins.

## PART 3: Asset List Required

- No illustration assets - this is a pure standard-value recall question, no diagram needed.
- Shared assets from `_template/assets/` (serial-num-badge.svg, logo.png) copied locally per Step 5B.

## PART 4: Animation Complexity Notes

- No illustration build sequence - question pins directly into Given card (Scene 2), skipping the diagram phase entirely since the question is a direct trig-value lookup.
- Three `morphToStack` beats matching Given/Step1/Step2/Step3 stack cards (Step3 also morphs to stack right before options).
- No `apt.stepFlow` used (deprecated per README). No `apt.ambientLoop` used (no long silent stretch, no pinned illustration icon to bob).
- Ballpark timeline length: 34.0s (voiceover ends 32.56s + ~1.4s end-fade hold).

## PART 5: Master Timeline Overview

```
0.0     Question card + SerialNum enter (heroEnterLowered)
3.6     Card rises to rest position
9.0     PIN_TIME - question glides to pinned slot (no illustration this question)
9.8     GIVEN_TIME - Given card enters (Cot 45 degree + Tan 45 degree = ?)
15.74   Given -> stack (morphToStack)
15.94   Step 1 card enters (Cot 45 degree = 1)
19.18   Step 1 -> stack (morphToStack) + line-g-1 grows
19.38   Step 2 card enters (Tan 45 degree = 1)
22.44   Step 2 -> stack (morphToStack) + line-1-2 grows
22.64   Step 3 card enters (1 + 1 = 2)
28.06   Step 3 -> stack (morphToStack) + line-2-3 grows, question recenters
28.7    Options grid fades in
29.1    Options stagger in
30.16   Option B correct-pulse
33.0    END_FADE_TIME - full frame fades out
34.0    End
```
