# Storyboard - Trigonometry q14 (sin(90 deg - A) = cos A, co-function identity, cos A = 5/13)

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|------|------|-----------|---------|-------|-------------------|
| 1 | 0.10-0.98 | "So welcome back again." | Intro | Center screen | Question card begins entrance |
| 2 | 1.50-7.18 | "It's time to solve one more problem. Now in this problem, we are given that cos of A is equal to five by 13." | State the question | Question card | Full question text visible, "cos A = 5/13" phrase readable |
| 3 | 7.64-10.90 | "The question is asking us to find sine of 90 degrees minus A." | State the ask | Question card | "sin(90 deg - A)" phrase readable, target highlighted |
| 4 | 11.34-15.04 | "This is a direct identity question. We do not need to make a triangle here." | Set expectation, explicitly rule out triangle | Question card | No illustration drawn - card stays alone, this is deliberate |
| 5 | 15.34-19.32 | "We only need to remember one co-function identity." | Bridge to formula | Pin transition | Question pins to top, center stage clears for the identity |
| 6 | 19.32-25.22 | "The identity is sine of 90 degree minus theta is equal to cos of theta." | State the general identity | Given card | General identity sin(90deg - theta) = cos(theta) revealed as a clean formula |
| 7 | 25.60-32.20 | "So if theta is A, then we can write sine of 90 degree minus A is equal to cos of A. And cos of A is already given as five by 13." | Substitute theta = A, recall given | Step 1 card | sin(90deg - A) = cos A, then cos A = 5/13 recalled |
| 8 | 33.62-38.24 | "So directly sine of 90 degree minus A is equal to five by 13." | Final substitution | Step 2 card | sin(90deg - A) = 5/13 landed as the answer |
| 9 | 38.56-43.48 | "Hence, the final answer is five by 13. So the correct option is option B." | Reveal correct option | Options grid | Option B pulses green |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Question Reveal (0.0s-11.3s)
- TIMESTAMP: 0.3
- VOICEOVER: "So welcome back again. It's time to solve one more problem. Now in this problem, we are given that cos of A is equal to five by 13. The question is asking us to find sine of 90 degrees minus A."
- VISUAL OBJECTIVE: Establish the full question on screen with no illustration - this is a pure-identity question, so the question card is the only visual anchor for the entire opening beat.
- SCREEN LAYOUT: `#q-full-card` centered top (per template), `#serial-num` badge top-left overlapping card corner. `#illustration` region left empty/unused for this question.
- ON-SCREEN ELEMENTS: QuestionCard with full question text ("If cos A = 5/13, find sin(90 deg - A)"), SerialNum badge "Q", dotted grid, bottom strip, topic name, logo.
- ANIMATION DETAILS: `apt.questionEnter(tl, "#q-full-card", 0.3)` (0.7s, back.out(1.4)); `apt.serialEnter(tl, "#serial-num", 0.8)`. Highlight spans `.num` on "cos A", "5/13" fade/scale slightly at 4.88 (when "cos of A" is spoken) and "90 degrees minus A" at 9.84.
- CAMERA MOVEMENT: none.
- TRANSITIONS: none yet.
- EDUCATIONAL PURPOSE: Let the viewer read the given value and the target expression before any solving starts.
- VISUAL HIERARCHY: Question card > serial badge > background.
- ATTENTION MANAGEMENT: Nothing else on screen competes with the question text; no illustration is built since the video explicitly skips a triangle.
- MOTION NOTES: Standard `apt.questionEnter`, no illustration entrance calls at all in this scene (deliberate departure from the usual illustration-heavy Scene 2 pattern).
- CONTINUITY FROM PREVIOUS SCENE: Opening scene, no prior state.

### Scene 2 - "No Triangle Needed" Beat (11.3s-19.3s)
- TIMESTAMP: 11.34
- VOICEOVER: "This is a direct identity question. We do not need to make a triangle here. We only need to remember one co-function identity."
- VISUAL OBJECTIVE: Reinforce, purely through stillness, that no diagram is coming - the question card holds its position with a small breathing emphasis rather than any new geometry.
- SCREEN LAYOUT: same `#q-full-card`, no illustration region used.
- ON-SCREEN ELEMENTS: Question card only, unchanged.
- ANIMATION DETAILS: `apt.emphasize(tl, "#q-full-card .num", 11.34)` (subtle pulse on the "cos A = 5/13" highlight, 0.3s yoyo) as a single quiet beat acknowledging the narration - no new elements enter.
- CAMERA MOVEMENT: none.
- TRANSITIONS: none.
- EDUCATIONAL PURPOSE: Match the narration's explicit "we do not need to make a triangle" - visually this is the calm beat where a triangle build-in would normally start in other questions, so its absence itself is the teaching point.
- VISUAL HIERARCHY: Question card, unchanged.
- ATTENTION MANAGEMENT: No competing motion.
- MOTION NOTES: Single small emphasize pulse only, nothing else.
- CONTINUITY FROM PREVIOUS SCENE: The question card that finished entering in Scene 1 simply holds, its highlight spans pulsing once as this scene's only motion.

### Scene 3 - Pin (19.3s-21.6s)
- PIN_TIME: 19.4
- GIVEN_TIME: 21.6
- VOICEOVER: "The identity is sine of..."
- VISUAL OBJECTIVE: Pin the question to the top slot, clearing center stage for the identity formula card.
- SCREEN LAYOUT: `#q-pinned` (left:385px,top:30px,width:1275px). No `#illus-pinned` used (no illustration exists for this question).
- ON-SCREEN ELEMENTS: Pinned question text only.
- ANIMATION DETAILS: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 19.4)` (0.8s glide); `apt.fadeOut(tl, "#serial-num", 19.4, 0.5)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: pinFlow glide.
- EDUCATIONAL PURPOSE: Move the fully-stated question out of the way as the narration pivots from "what is asked" to "which identity solves it".
- VISUAL HIERARCHY: Pinned question only.
- ATTENTION MANAGEMENT: No illustration competes since none was drawn.
- MOTION NOTES: Only one `apt.pinFlow` call needed this question (question card only, no illustration pin).
- CONTINUITY FROM PREVIOUS SCENE: The question card glides directly from its Scene 1 resting position into the pinned slot; the serial badge fades out in step with the same glide.

### Scene 4 - Given: The Co-function Identity (21.6s-25.6s)
- GIVEN_TIME: 21.6
- VOICEOVER: "The identity is sine of 90 degree minus theta is equal to cos of theta."
- VISUAL OBJECTIVE: State the general co-function identity as a clean formula line.
- SCREEN LAYOUT: Given `.solution-card` centered per template (left:640px,top:480px).
- ON-SCREEN ELEMENTS: Given chip, math line: "sin(90 deg - theta) = cos(theta)".
- ANIMATION DETAILS: `apt.cardEnter(tl, "#card-given .solution-card", 21.6)`; `apt.textReveal(tl, "#card-given .math")` - word-level, synced to "sine of 90 degree minus theta is equal to cos of theta" (19.32-25.22).
- CAMERA MOVEMENT: none.
- TRANSITIONS: none (card entrance only).
- EDUCATIONAL PURPOSE: Teach the general identity in its own form before substituting the specific angle.
- VISUAL HIERARCHY: Given card (center) > pinned question.
- ATTENTION MANAGEMENT: Only actively narrated element.
- MOTION NOTES: Standard `apt.cardEnter` (0.55s, back.out(1.4)).
- CONTINUITY FROM PREVIOUS SCENE: The pinned question has just settled into its top slot as the Given card grows in at center.

### Scene 5 - Step 1: Substitute theta = A (25.6s-33.6s)
- VOICEOVER: "So if theta is A, then we can write sine of 90 degree minus A is equal to cos of A. And cos of A is already given as five by 13."
- VISUAL OBJECTIVE: Substitute theta with A, then recall the given value cos A = 5/13, morphing the Given card into the stack first.
- SCREEN LAYOUT: Given card morphs into `#stack-given` (left:100px,top:140px). Step 1 solution card takes center (left:640px,top:460px).
- ON-SCREEN ELEMENTS: Step 1 chip, math lines: "sin(90 deg - A) = cos(A)", then "cos(A) = " + `.frac`(5/13) as `.frac` component.
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 25.6)` (0.8s); `apt.cardEnter(tl, "#card-step1 .solution-card", 26.7)`; `apt.textReveal(tl, "#card-step1 .math")` - word-level for "sin(90 deg - A) = cos(A)" (synced to 25.60-29.10), word-level for "cos(A) = 5/13" (verbatim numeric line, synced to 29.10-32.20).
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph.
- EDUCATIONAL PURPOSE: Show the substitution step explicitly before landing the final numeric answer.
- VISUAL HIERARCHY: Step 1 card (center, active) > Given stack card (left, collapsed) > pinned question.
- ATTENTION MANAGEMENT: The recalled given value (5/13) is visually called out (`apt.emphasize`) since it is the key number that unlocks the answer.
- MOTION NOTES: `.frac` component used, never a bare divide character.
- CONTINUITY FROM PREVIOUS SCENE: The Given card is still completing its slide-and-shrink morph into the left stack as Step 1's card begins its own `cardEnter` fade-scale-in at center.

### Scene 6 - Step 2: Final Answer (33.6s-38.6s)
- VOICEOVER: "So directly sine of 90 degree minus A is equal to five by 13."
- VISUAL OBJECTIVE: Land the final answer sin(90 deg - A) = 5/13, morphing Step 1 into the stack.
- SCREEN LAYOUT: Step 1 morphs into `#stack-step1` (left:100px,top:290px). Step 2 card center (left:640px,top:440px).
- ON-SCREEN ELEMENTS: Step 2 chip, math line: "sin(90 deg - A) = " + `.frac`(5/13) in `.ans` styling on the final span.
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 33.6)`; `apt.stackLineGrow(tl, "#line-g-1", 33.6)` (grows the Given->Step1 connector); `apt.cardEnter(tl, "#card-step2 .solution-card", 34.7)`; `apt.textReveal(tl, "#card-step2 .math")` - word-level, synced to "so directly sine of 90 degree minus A is equal to five by 13" (33.62-37.40).
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph.
- EDUCATIONAL PURPOSE: Land the final answer in the exact form the options list it, immediately before the options reveal.
- VISUAL HIERARCHY: Step 2 card (center, active, answer highlighted) > Step 1 + Given stack (left) > pinned question.
- ATTENTION MANAGEMENT: Only the final `.ans` span ("5/13") uses the answer highlight color.
- MOTION NOTES: `apt.emphasize` on "5/13" the moment it lands.
- CONTINUITY FROM PREVIOUS SCENE: Step 1's card is still sliding into the stack (with its connector line to Given growing in) as Step 2's card grows in at center.

### Scene 7 - Options Reveal (38.6s-43.5s)
- VOICEOVER: "Hence, the final answer is five by 13. So the correct option is option B."
- VISUAL OBJECTIVE: Confirm 5/13 against the four options, land on Option B in green.
- SCREEN LAYOUT: Step 2 morphs into `#stack-step2` (left:100px,top:440px). `#options-reveal` on `.pinned-col` (right side).
- ON-SCREEN ELEMENTS: 2x2 options grid (A:12/13, B:5/13, C:13/5, D:1/13), Option B marked `.correct`.
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 38.6)`; `apt.stackLineGrow(tl, "#line-1-2", 38.6)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 38.6)`; `apt.fadeIn(tl, "#options-reveal", 39.3)`; `apt.optionsStagger(tl, ".opt-btn", 39.7)`; `apt.correctPulse(tl, ".opt-btn.correct", 41.2)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: standard 0.8s morph, then recenter (0.5s), then stagger reveal.
- EDUCATIONAL PURPOSE: Let the viewer match the computed 5/13 against listed options and confirm Option B.
- VISUAL HIERARCHY: Options grid (active reveal) > stack column (Given + Step1 + Step2, still fully visible) > pinned question.
- ATTENTION MANAGEMENT: Only Option B pulses green; A/C/D stay neutral.
- MOTION NOTES: No pinned illustration to fade out this question (none was ever drawn) - recenter runs directly off `#q-pinned` alone.
- CONTINUITY FROM PREVIOUS SCENE: Step 2's card is still completing its morph into the stack (with the Step1->Step2 connector line growing) as the question recenters for the options grid.

### End (43.5s-45.5s)
- END_FADE_TIME: 43.8 - everything (`#root > div`) fades together after the correct-option pulse has settled and narration ends. Narration ends at duration 43.479; extend audio clip `data-duration` to at least 45.0 (per penelty.txt bug: never let a clip's data-duration end exactly at its own fade start) so the correct-option pulse (41.2 + 0.4s yoyo) and the final options-reveal fade fully complete before unmount.

## PART 3: Asset List Required
- No illustration assets - this question is explicitly identity-only ("we do not need to make a triangle here"). Only `serial-num-badge.svg` and `logo.png` reused from `_template/assets/`.

## PART 4: Animation Complexity Notes
- 3 stack cards this question (Given, Step 1, Step 2) - `stack-step3` and `line-2-3` from the template are dropped.
- No illustration entrance, no `illus-pinned`, no `apt.ambientLoop` - the entire video is question card + identity cards + options, since the narration itself rules out a diagram.
- All fractions use `.frac` component (never bare divide character), per house rule.
- Every clip whose data-duration would otherwise end exactly at a morphToStack/fadeOut/pinFlow completion gets the standard +1.5-2s buffer (penelty.txt q9 fix) - apply to card-given, card-step1, card-step2, and q-pinned.
- Penelty.txt's angle-arc / SVG label-clipping standards are not applicable this question (no illustration is built).

## PART 5: Master Timeline Overview
```
0.3    Question card enters (questionEnter)
0.8    Serial badge pops in
4.88   "cos A = 5/13" highlight pulse
9.84   "90 deg - A" highlight pulse
11.34  Quiet emphasize beat ("no triangle needed" - no new geometry)
19.4   PIN_TIME - pinFlow (question only, no illustration) to pinned slot; serial badge fades out
21.6   GIVEN_TIME - Given card enters (sin(90 deg - theta) = cos theta)
25.6   Given -> stack-given morph
26.7   Step 1 card enters (sin(90 deg - A) = cos A, then cos A = 5/13)
33.6   Step 1 -> stack-step1 morph; line-g-1 grows
34.7   Step 2 card enters (sin(90 deg - A) = 5/13, final answer)
38.6   Step 2 -> stack-step2 morph; line-1-2 grows; question recenters
39.3   Options grid fades in
39.7   Options stagger in
41.2   Option B correct pulse
43.8   End fade (all elements), 1.2s
```
