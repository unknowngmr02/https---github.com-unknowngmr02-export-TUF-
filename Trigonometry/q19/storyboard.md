# Q19 - Evaluate sec²θ - tan²θ - Storyboard

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|------|------|-----------|---------|-------|-------------------|
| 1 | 0.1-3.18 | "So welcome back again. It's time to solve one more problem." | Greeting | Full-frame calm | Question card rests low-center before any text lands |
| 2 | 3.56-8.08 | "Now in this problem, we need to evaluate sec square theta minus tan square theta." | State the question | Question text | Card rises to resting slot as the problem is read aloud |
| 3 | 8.52-16.02 | "This is not a calculation question. This is a direct identity question. So we only need to remember the standard trigonometric identity." | Frame the approach | Question card | No new element; narration alone signals "identity path", card pins on cue |
| 4 | 16.90-21.32 | "We know that sec square theta is equal to one plus tan square theta." | State the base identity | Given card | Given card enters, sec²θ = 1 + tan²θ reveals word by word |
| 5 | 21.60-28.74 | "Now move tan square theta to the other side. So sec square theta minus tan square theta is equal to one." | Rearrange the identity | Step 1 card | Given morphs to stack; Step 1 card enters showing sec²θ - tan²θ = 1 |
| 6 | 29.04-34.64 | "That is exactly what the question is asking. Done. No value of theta is needed here." | Confirm the answer | Step 1 result | Step 1 morphs to stack; result sits as the visible answer |
| 7 | 35.42-39.76 | "Hence, sec square theta minus tan square theta is equal to one." | Restate result | Options grid | Options grid fades in and staggers while restatement plays |
| 8 | 40.20-42.64 | "So the correct option is option C." | Reveal correct choice | Option C | correctPulse on option C |

Total video length: ~42.9s (audio ends 42.64s, re-recorded voiceover - was ~42.5s previously, pacing shifted ~1s later throughout but structure unchanged).

## PART 2: Scene-by-Scene Storyboard

**SCENE 1 (0.0s-4.32s)**
- TIMESTAMP: 0.3-4.32
- VOICEOVER: "So welcome back again. It's time to solve one more problem. Now in this problem,"
- VISUAL OBJECTIVE: Establish calm open, then question text settles into its resting position exactly as the problem starts being read.
- SCREEN LAYOUT: `#q-full-card` centered, `apt.heroEnterLowered` offset 180px, rises at RISE_TIME=4.32
- ON-SCREEN ELEMENTS: dotted-grid, bottom-strip, topic-name "Trigonometry", logo, `#q-full-card`, `#serial-num`
- ANIMATION DETAILS: `apt.heroEnterLowered(tl, "#q-full-card", 180, 4.32)`; serial badge pops at 0.8 (`back.out(2)`), rises in tandem at 4.32
- CAMERA MOVEMENT: static, only the card itself rises
- TRANSITIONS: none yet
- EDUCATIONAL PURPOSE: frame the exact expression to be simplified
- VISUAL HIERARCHY: question text primary, badge secondary
- ATTENTION MANAGEMENT: nothing else on screen to compete
- MOTION NOTES: rise is the only motion; keep it gentle (`back.out(1.4)` per questionEnter-family default baked into heroEnterLowered)
- CONTINUITY FROM PREVIOUS SCENE: opening scene of the video, no prior motion to continue

**SCENE 2 (4.32s-16.02s)**
- TIMESTAMP: 4.32-16.02
- VOICEOVER: "we need to evaluate sec square theta minus tan square theta. This is not a calculation question. This is a direct identity question. So we only need to remember the standard trigonometric identity."
- VISUAL OBJECTIVE: Let the full question text (already visible, risen) be read aloud with no new visual competing for attention; narration alone establishes "this is an identity, not arithmetic".
- SCREEN LAYOUT: unchanged from Scene 1 end position
- ON-SCREEN ELEMENTS: same as Scene 1
- ANIMATION DETAILS: none new - deliberate hold
- CAMERA MOVEMENT: static
- TRANSITIONS: none
- EDUCATIONAL PURPOSE: sets viewer expectation before the identity card appears
- VISUAL HIERARCHY: question text still primary
- ATTENTION MANAGEMENT: silence of motion matches the explanatory (non-mathematical) narration
- MOTION NOTES: no ambient loop needed, this stretch is short (~11s) and question text itself is the anchor
- CONTINUITY FROM PREVIOUS SCENE: direct continuation, card stays in its risen resting spot from Scene 1

**SCENE 3 (16.02s-21.6s) - PIN + GIVEN**
- TIMESTAMP: PIN_TIME=16.02, GIVEN_TIME=16.9
- VOICEOVER: "We know that sec square theta is equal to one plus tan square theta."
- VISUAL OBJECTIVE: question glides up into pinned slot, then the base identity appears center-stage and reveals word by word in sync with narration.
- SCREEN LAYOUT: `#q-pinned` top:30px left:385px; `#card-given .solution-card` center at left:640px top:480px
- ON-SCREEN ELEMENTS: `#q-pinned`, `#card-given`
- ANIMATION DETAILS: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 16.02)`; `apt.fadeOut(tl, "#serial-num", 16.02, 0.5)`; `apt.cardEnter(tl, "#card-given .solution-card", 16.9)`; `apt.textReveal(tl, "#card-given .math")` with `.rv` spans at 17.94 (sec²θ), 19.58 (=), 20.02 (1), 20.22 (+), 20.52 (tan²θ)
- CAMERA MOVEMENT: static, glide is the only motion
- TRANSITIONS: pinFlow real glide (0.8s), not a fade swap
- EDUCATIONAL PURPOSE: anchor the identity the whole solution depends on
- VISUAL HIERARCHY: Given card primary once it lands, pinned question secondary above it
- ATTENTION MANAGEMENT: single new element at a time (pin completes before Given enters)
- MOTION NOTES: no illustration in this question - it is a pure identity manipulation, no triangle/diagram needed
- CONTINUITY FROM PREVIOUS SCENE: the risen question card from Scene 1/2 is what glides into the pinned slot; same object, no cut

**SCENE 4 (21.6s-29.04s) - REARRANGE**
- TIMESTAMP: 21.60 (morph start) / 22.4 (Step 1 enter)
- VOICEOVER: "Now move tan square theta to the other side. So sec square theta minus tan square theta is equal to one."
- VISUAL OBJECTIVE: Given card collapses into the stack; Step 1 card enters showing the rearranged form that exactly matches the question's expression.
- SCREEN LAYOUT: `#stack-given` at left:100px top:140px; `#card-step1 .solution-card` center at left:640px top:460px
- ON-SCREEN ELEMENTS: `#stack-given`, `#card-step1`
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 21.6)`; `apt.cardEnter(tl, "#card-step1 .solution-card", 22.4)`; `apt.textReveal(tl, "#card-step1 .math")` with `.rv` spans at 24.44 (sec²θ), 25.66 (−), 26.14 (tan²θ), 28.08 (=), 28.56 (1, `.ans`)
- CAMERA MOVEMENT: static
- TRANSITIONS: 0.8s morphToStack, `power2.inOut`
- EDUCATIONAL PURPOSE: show the algebraic rearrangement step explicitly, don't skip straight to the answer
- VISUAL HIERARCHY: Step 1 card primary, stack Given card secondary (grey/blue background, smaller)
- ATTENTION MANAGEMENT: 0.8s breathing gap before Step 1 enters (21.6+0.8=22.4)
- MOTION NOTES: this Step 1 result line is literally the question restated with "= 1" appended - keep it visually identical to the question's expression so the match is obvious
- CONTINUITY FROM PREVIOUS SCENE: Given card mid-morph is still finishing its slide/shrink into the stack as Step 1's cardEnter begins its own entrance a beat later, so the two motions read as one continuous handoff down the left column

**SCENE 5 (29.04s-30.74s) - CONFIRM**
- TIMESTAMP: 29.04 (morph)
- VOICEOVER: "That is exactly what the question is asking. Done. No value of theta is needed here."
- VISUAL OBJECTIVE: Step 1 collapses into the stack; the answer "= 1" now sits as the last visible line of the solution while narration confirms no further work is needed.
- SCREEN LAYOUT: `#stack-step1` at left:100px top:290px; `#line-g-1` connector grown between the two circles
- ON-SCREEN ELEMENTS: `#stack-given`, `#stack-step1`, `#line-g-1`, `#q-pinned`
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 29.04)`; `apt.stackLineGrow(tl, "#line-g-1", 29.04)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 30.24)`
- CAMERA MOVEMENT: static
- TRANSITIONS: 0.8s morphToStack
- EDUCATIONAL PURPOSE: visually "close" the derivation before the options reveal
- VISUAL HIERARCHY: stack column now shows the full 2-line derivation (Given, Step 1) with the answer highlighted in `.ans`
- ATTENTION MANAGEMENT: nothing new enters during this beat, letting the "Done" narration land on a settled frame
- MOTION NOTES: connector line grows in sync with the morph landing, per standard rule
- CONTINUITY FROM PREVIOUS SCENE: Step 1 card is still completing its morph into the stack as this scene opens; the connector line's growth is the very next beat, timed to the same instant both circles are on screen together

**SCENE 6 (30.74s-42.64s) - OPTIONS REVEAL**
- TIMESTAMP: 30.74 (fadeIn) / 31.24 (stagger) / 41.86 (correctPulse)
- VOICEOVER: "Hence, sec square theta minus tan square theta is equal to one. So the correct option is option C."
- VISUAL OBJECTIVE: options grid fades in and staggers in below the pinned question while the restatement plays, then option C pulses green exactly as it's named.
- SCREEN LAYOUT: `#options-reveal .pinned-col` top:400px, 2x2 grid
- ON-SCREEN ELEMENTS: `#options-reveal`, all four `.opt-btn`, stack column stays visible throughout (not faded)
- ANIMATION DETAILS: `apt.fadeIn(tl, "#options-reveal", 30.74)`; `apt.optionsStagger(tl, ".opt-btn", 31.24)`; `apt.correctPulse(tl, ".opt-btn.correct", 41.86)`
- CAMERA MOVEMENT: static
- TRANSITIONS: fadeIn 0.4s, stagger 0.45s x4 (0.12s stagger), correctPulse 0.4s yoyo
- EDUCATIONAL PURPOSE: connect the derived answer (1) to option C's value (1)
- VISUAL HIERARCHY: options grid primary once it lands, stack column stays as supporting proof on the left
- ATTENTION MANAGEMENT: long stable hold (31.24-41.86) matches the restatement narration - no premature pulse
- MOTION NOTES: `apt.recenterForOptions` fires at 30.24 (Scene 5), just before this scene's fadeIn, aligning the pinned question against the options column
- CONTINUITY FROM PREVIOUS SCENE: the stack column persists unchanged from Scene 5 into this scene, options grid simply adds in below/beside it, no element is removed

**SCENE 7 (42.9s-44.1s) - END FADE**
- TIMESTAMP: END_FADE_TIME=42.9
- VOICEOVER: (silence, narration complete at 42.64)
- VISUAL OBJECTIVE: entire frame fades out together as one beat
- ANIMATION DETAILS: `apt.fadeOut(tl, "#root > div", 42.9, 1.2)`
- CONTINUITY FROM PREVIOUS SCENE: correctPulse settles shortly after 42.26, giving a brief "answer confirmed" hold before the fade begins

## PART 3: Asset List Required

- No custom illustration/SVG - this is a pure identity-manipulation question with no diagram
- Standard components only: `q-card`, `serial-num`, `solution-card`, `stack-card`, `step-circle`, `stack-line`, `opt-btn`

## PART 4: Animation Complexity Notes

- Single Given + single Step (no Step 2/3) - the whole solution is one rearrangement, so the stack column only ever holds 2 entries (G, 1)
- No illustration means no `pinFlow` call for `#illustration`/`#illus-pinned` and no `apt.ambientLoop`
- No `recenterForOptions` needed since there's no pinned illustration to clear before the options grid
- All math lines use `.frac`-free plain spans (no fractions in this question)

## PART 5: Master Timeline Overview

```
0.3    q-full-card enters (lowered)
0.8    serial-num pops (lowered)
4.32   q-full-card + serial-num rise to rest
16.02  PIN_TIME - pinFlow q-full-card -> q-pinned; serial-num fades out
16.9   GIVEN_TIME - card-given enters, textReveal (sec²θ=1+tan²θ)
21.6   morphToStack: card-given -> stack-given
22.4   card-step1 enters, textReveal (sec²θ-tan²θ=1)
29.04  morphToStack: card-step1 -> stack-step1; line-g-1 grows
30.24  RECENTER_TIME - q-pinned recenters for options
30.74  options-reveal fades in
31.24  optionsStagger
41.86  correctPulse on option C
42.9   END_FADE_TIME - full-frame fadeOut (1.2s), audio ends 42.64
```
