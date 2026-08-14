# Storyboard - Trigonometry q7 (sin²30° + cos²30°)

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual |
|------|------|-----------|---------|-------|--------|
| 1 | 0.10-3.58 | "So welcome back again, it's time to solve one more problem." | Intro | Whole frame | Question card rises into view |
| 2 | 4.12-10.04 | "Now in this problem, we need to find sin square 30 degree plus cos square 30 degree." | State problem | Question text + illustration | Right-triangle illustration builds stroke by stroke: base, hypotenuse (labelled "1"), opposite (labelled "sin 30°"), angle arc + "30°" chip, adjacent (labelled "cos 30°") |
| 3 | 10.66-14.82 | "Here, both sin and cos have the same angle, which is 30 degree." | Observation | Given card | Given card enters, first line reveals the "same angle" observation |
| 4 | 15.66-24.60 | "Whenever the angle is the same, we can use the identity: sin square theta plus cos square theta is equal to 1." | State the general identity | Given card | Second line reveals word by word: sin²θ + cos²θ = 1. Pinned figure's angle arc + theta chip pulse green as the identity's theta terms land. |
| 5 | 25.30-31.28 | "So directly, sin square 30 degree plus cos square 30 degree is equal to 1." | Apply the identity directly | Step 1 card | Given morphs to stack; Step 1 card enters and reveals sin²30° + cos²30° = 1. Pinned figure's sin/cos chips pulse green in step with each term. |
| 6 | 31.86-36.28 | "We do not need to find the values of sin 30 degree and cos 30 degree separately." | Reinforce - no separate computation needed | Step 1 result | No new element; the already-revealed "= 1" answer re-pulses to keep the beat alive |
| 7 | 37.16-39.60 | "Hence, the required answer is 1." | Confirm result | Step 1 morphing, options grid | Step 1 morphs into stack; options grid fades in |
| 8 | 40.18-42.14 | "So the correct option is option C." | Reveal answer | Option C | correctPulse on option C |

Total video length: ~44.1s (audio ends 42.139s, timeline holds a beat past that per the standard tail contract: END_FADE_TIME = NARR_END + 0.6 = 42.74, fade 1.2s, tl.set at 44.14). Phase 1 illustration: a right triangle with hypotenuse labelled "1" and legs labelled "sin 30°"/"cos 30°", giving the identity a geometric anchor (Pythagoras on a unit hypotenuse) instead of shipping Phase 1 as a bare question card.

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Question Enter (0.0-3.58s)
- VOICEOVER: "So welcome back again, it's time to solve one more problem."
- VISUAL OBJECTIVE: Establish the question, calm open.
- SCREEN LAYOUT: `#q-full-card` centered per template.html, `#serial-num` top-left.
- ON-SCREEN ELEMENTS: Question text "Find sin² 30° + cos² 30°." with both terms in `.num` accent. Serial badge "Q".
- ANIMATION DETAILS: `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.58)` - starts lowered, rises at 3.58 (end of opening line). Serial badge fromTo at 0.8 (scale/rotation pop), rises with card at 3.58.
- CAMERA MOVEMENT: none (static frame, motion is internal).
- TRANSITIONS: n/a (first scene).
- EDUCATIONAL PURPOSE: orient viewer to the exact expression before any math.
- VISUAL HIERARCHY: question card dominant, badge secondary.
- ATTENTION MANAGEMENT: single focal element, no competing motion.
- MOTION NOTES: `back.out(1.4)` ease reads as a confident settle, not a bounce.
- CONTINUITY FROM PREVIOUS SCENE: n/a, this is the opening frame.

### Scene 2 - Triangle Illustration Builds (4.12-9.86s)
- VOICEOVER: "Now in this problem, we need to find sin square 30 degree plus cos square 30 degree."
- VISUAL OBJECTIVE: Give the identity a geometric anchor: a right triangle with hypotenuse "1", so the viewer sees sin30°/cos30° as real legs of a real triangle, not abstract symbols.
- SCREEN LAYOUT: `#illustration` centered below the question card (left:50%, top:420px, width:780px). Triangle vertices A=(150,400) angle vertex, B=(340.53,400) right angle, C=(340.53,290) apex, drawn in a `0 0 520 500` viewBox.
- ON-SCREEN ELEMENTS: `#tri-base` (adjacent, A-B), `#tri-hyp` (dashed hypotenuse A-C, labelled "1"), `#tri-perp` (opposite, B-C), `#right-angle` marker at B, `#angle-arc` (green, 30°) at A, chips `#chip-hyp` ("1"), `#chip-sin` ("sin 30°"), `#chip-cos` ("cos 30°"), `#chip-theta` ("30°").
- ANIMATION DETAILS: `tl.to("#tri-base", {strokeDashoffset:0}, 4.12)`; `tl.fromTo("#tri-hyp", {opacity:0}, {opacity:1}, 5.02)`; `tl.to("#tri-perp", {strokeDashoffset:0}, 5.74)`; `tl.to("#right-angle", {opacity:1}, 5.90)`; `tl.to("#angle-arc", {opacity:1}, 6.68)` + chip-theta pop at 6.68; chip-hyp pop at 7.26; chip-sin pop at 8.12; chip-cos pop at 9.08.
- CAMERA MOVEMENT: none, the triangle draws itself in place.
- TRANSITIONS: stroke draw-ins (`power2.out`) for lines, opacity fade for the dashed hypotenuse and arc, `back.out(1.6)` pop for every chip.
- EDUCATIONAL PURPOSE: sin30° and cos30° are the two legs of a real right triangle whose hypotenuse is 1 - this is what makes the identity sin²θ+cos²θ=1 true (Pythagoras), not just a memorized formula.
- VISUAL HIERARCHY: triangle strokes in `--primary`, hypotenuse and right-angle marker in black (annotation), angle arc in `--success` (green, per the angle-arc convention).
- ATTENTION MANAGEMENT: 8 timed events across 5.66s (~0.7s apart) - a new stroke or chip lands on every beat of "we need to find sin square 30 degree plus cos square 30 degree", never more than 1s of dead air.
- MOTION NOTES: angle arc is opacity-only (never GSAP-tweens `--angle`), `--angle: 30` is a bare unitless number, `cx`/`cy` match vertex A exactly, `translate(0,800)` = `2*cy`.
- CONTINUITY FROM PREVIOUS SCENE: the question card that rose in Scene 1 holds in place while the triangle builds beneath it.

### Scene 2B - Pin (9.86-10.66s)
- VOICEOVER: (tail of "...30 degree." into) "Here,"
- VISUAL OBJECTIVE: Question + triangle glide together into their pinned slots to make room for the solution area.
- SCREEN LAYOUT: `#q-pinned` (left:385px, top:30px) + `#illus-pinned` (left:60px, top:150px, width:360px, height:346 - exact coordinate copy of the full-size figure, only outer size and stroke widths shrunk).
- ANIMATION DETAILS: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 9.86)`; `apt.pinFlow(tl, "#illustration", "#illus-pinned", 9.86)`; `apt.fadeOut(tl, "#serial-num", 9.86, 0.5)`.
- EDUCATIONAL PURPOSE: keeps the triangle visible as a running reference through the rest of the solution instead of discarding it.
- CONTINUITY FROM PREVIOUS SCENE: same triangle object from Scene 2, now gliding to its pinned position; the re-recorded voiceover leaves very little gap here (glide completes 10.66, "Here," starts 10.66), so the Given card opens right as the pin lands.

### Scene 3 - Given Card: Observation + Identity (10.66-25.30s)
- VOICEOVER: "Here, both sin and cos have the same angle, which is 30 degree. Whenever the angle is the same, we can use the identity: sin square theta plus cos square theta is equal to 1."
- VISUAL OBJECTIVE: State the key observation (same angle -> identity applies) then the identity itself.
- SCREEN LAYOUT: `#card-given .solution-card` centered per template (left:640px, top:440px).
- ON-SCREEN ELEMENTS: chip "Given", two-line math: line 1 paraphrased "sin 30° and cos 30° have the same angle" (line-level reveal), line 2 word-level "sin²θ + cos²θ = 1".
- ANIMATION DETAILS: `apt.cardEnter(tl, "#card-given .solution-card", 10.66)`. `apt.textReveal(tl, "#card-given .math")`: line 1 at 10.66; line 2 word-level "sin²θ"(19.26) "+"(20.94) "cos²θ"(21.50) "="(23.94) "1"(24.34, `.hi`). LINK: `#angle-arc-pinned` recolors green + `#chip-theta-pinned` emphasizes at 19.26, tying the identity's theta terms back to the drawn angle.
- CAMERA MOVEMENT: none.
- TRANSITIONS: cardEnter `back.out(1.4)` pop.
- EDUCATIONAL PURPOSE: the two facts the whole solution depends on - same angle, and the Pythagorean identity that covers any angle.
- VISUAL HIERARCHY: "1" in `.hi`, no false emphasis elsewhere since theta is the shared variable.
- ATTENTION MANAGEMENT: word-sync reveal on line 2 paces the viewer with the identity being spoken; the LINK pulse on the pinned figure fills what would otherwise be a static stretch on the left side of the frame.
- MOTION NOTES: standard cardEnter + textReveal, no custom animation on the card itself.
- CONTINUITY FROM PREVIOUS SCENE: opens directly under the now-pinned question, right as the pin glide completes.

### Scene 4 - Given Morphs to Stack (25.30-26.10s)
- VOICEOVER: "So directly, sin square 30 degree plus cos square 30 degree is equal to 1."
- VISUAL OBJECTIVE: Archive the identity into the left stack right as the narration pivots to applying it.
- SCREEN LAYOUT: `#stack-given .stack-card` at left:100px, top:140px (already in DOM, opacity 0).
- ON-SCREEN ELEMENTS: stack card with `.step-circle` "G", collapsed math `sin²θ + cos²θ = 1`.
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 25.30)` - 0.8s, power2.inOut.
- EDUCATIONAL PURPOSE: keeps the general identity visible for reference through the rest of the video.
- ATTENTION MANAGEMENT: the re-recorded voiceover runs "So directly, sin square 30..." with no pause, so Step 1 enters at the same instant this morph starts (matching the tight pacing elsewhere in this batch of re-recorded videos).
- CONTINUITY FROM PREVIOUS SCENE: same Given card content and position as Scene 3's ending frame, now mid-glide into the stack.

### Scene 5 - Step 1: Direct Substitution (25.30-37.16s)
- VOICEOVER: "So directly, sin square 30 degree plus cos square 30 degree is equal to 1. We do not need to find the values of sin 30 degree and cos 30 degree separately."
- VISUAL OBJECTIVE: Show the identity applied directly to 30°, with no intermediate calculation.
- SCREEN LAYOUT: `#card-step1 .solution-card` centered (left:640px, top:460px).
- ON-SCREEN ELEMENTS: chip "Step 1", math: `sin²30° + cos²30° = 1` (`.ans` on the final `1`).
- ANIMATION DETAILS: `apt.cardEnter(tl, "#card-step1 .solution-card", 25.30)`. `apt.textReveal(tl, "#card-step1 .math")`: "sin²30°"(26.62) "+"(28.06) "cos²30°"(28.34) "="(30.70) "1"(31.12, `.ans`). LINK: `#chip-sin-pinned` recolors green + emphasizes at 26.62, `#chip-cos-pinned` at 28.34. Reinforcement beat: `apt.emphasize(tl, "#card-step1 .ans", 31.86)` re-pulses the answer during "we do not need to find the values... separately" so that line has a visual reason to exist too.
- CAMERA MOVEMENT: none.
- TRANSITIONS: cardEnter pop.
- EDUCATIONAL PURPOSE: the punchline - the expression matches the identity exactly, so the answer is immediate.
- VISUAL HIERARCHY: final `1` in `.ans`, drawing the eye to the answer.
- ATTENTION MANAGEMENT: LINK pulses on the pinned triangle's chips answer "why" during the substitution beat; the reinforcement pulse at 31.86 covers the otherwise-empty "we do not need to find... separately" line (a ~4.4s stretch with no new element otherwise).
- MOTION NOTES: no separate `apt.resultReveal` layered on top of `textReveal`'s own reveal of the `.ans` span - the 31.86 pulse is `apt.emphasize` on the already-settled span, not a duplicate reveal.
- CONTINUITY FROM PREVIOUS SCENE: enters into the same center slot the Given card just vacated via its morph in Scene 4, at the same instant (no breathing gap, per the tight re-recorded pacing).

### Scene 6 - Step 1 Morphs to Stack + Options Reveal (37.16-42.14s)
- VOICEOVER: "Hence, the required answer is 1. So the correct option is option C."
- VISUAL OBJECTIVE: Archive the last step, clear the pinned triangle, then reveal the four options with C highlighted.
- SCREEN LAYOUT: `#stack-step1 .stack-card` at left:100px, top:290px. `#options-reveal` `.pinned-col` per template, options grid 2x2.
- ON-SCREEN ELEMENTS: stack card "1" with collapsed math `sin²30° + cos²30° = 1`. Connector line `#line-g-1` between G and 1 circles. Options A "1/2", B "3/4", C "1" (correct), D "2".
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 37.16)`; `apt.stackLineGrow(tl, "#line-g-1", 37.16)`. `apt.fadeOut(tl, "#illus-pinned", 37.96)` + `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 37.96)` - the triangle has done its job by now and drops out as the layout clears for options. `apt.fadeIn(tl, "#options-reveal", 38.46)`. `apt.optionsStagger(tl, ".opt-btn", 38.86)`. `apt.correctPulse(tl, ".opt-btn.correct", 42.06)` (times to "C." 42.06-42.14). `apt.fadeOut(tl, "#root > div", 42.74, 1.2)` end fade.
- CAMERA MOVEMENT: none new.
- TRANSITIONS: morph, then illustration clears, then fadeIn/stagger for options.
- EDUCATIONAL PURPOSE: connects the computed sum (1) directly to option C's value.
- VISUAL HIERARCHY: correct option C pulses green, unambiguous final answer.
- ATTENTION MANAGEMENT: single new focal group (options grid) after the stack settles and the triangle clears, nothing else competes.
- MOTION NOTES: `optionsStagger` 0.12s stagger across 4 buttons; `correctPulse` back.out(1.5) yoyo.
- CONTINUITY FROM PREVIOUS SCENE: Step 1 card mid-morph from Scene 5 lands in the stack exactly as the pinned illustration clears and the options container begins fading in, one continuous settle-then-reveal beat.

## PART 3: Asset List Required
- None beyond the shared design system (`design-system.css`, `animations.js`, `assets/`). No external SVG/PNG - the Phase 1 illustration is hand-authored inline SVG (`#illustration` / `#illus-pinned`), built from design-system tokens (`var(--primary)`, `var(--success)`, `--text`, `--bg`, `var(--font)`) plus a bordered `.fig-chip` component (defined locally in `index.html`'s `<style>` block per the illustration cookbook), no new colors or template components invented.

## PART 4: Animation Complexity Notes
- 1 Given card + 1 Step card (simplest step count). Two stack cards total (G, 1), one connector line.
- Phase 1 is a hand-authored right-triangle illustration (hypotenuse "1", legs sin30°/cos30°) rather than a bare question card, per the "Phase 1 must never be just a card" rule for pure-identity questions - it gives sin²θ+cos²θ=1 a geometric (Pythagorean) grounding instead of shipping it as a memorized formula.
- The pinned copy of the triangle persists through the whole solution (not cleared early) and receives two LINK pulses (identity's theta terms at 19.26, substituted 30° terms at 26.62/28.34) so the left side of the frame stays alive instead of sitting static - it only clears at RECENTER_TIME (37.96) right before the options reveal.
- Row/stroke build in Scene 2 uses raw `tl.to`/`tl.fromTo` tweens (not a named `apt.*` helper) since no existing helper covers a hand-authored SVG illustration build - this is the expected pattern per `_template/animations.js`'s own comments (helper list is closed; illustration builds are inline).
- No `apt.ambientLoop` needed - the two LINK pulses keep the pinned figure active without a persistent bob.
- `apt.recenterForOptions` fires once, paired with the pinned illustration's fadeOut, matching the standard pattern.
- Timeline tail follows the standard contract: `END_FADE_TIME = NARR_END(42.139) + 0.6 = 42.74`, fade duration 1.2s, `tl.set` at `44.14` (= 42.74 + 1.2 + 0.2, the mandated 0.1-0.3s buffer past fade completion).
- Every clip's `data-duration` was sized as `(last_transition_start - data_start) + transition_duration + 1.5` per the topic's `penelty.txt`/`VIDEO_BUILD_PROMPT.md` clip-duration rule (`#phase1`, `#card-given`, `#card-step1`, `#illus-pinned`); `#q-pinned`, `#stack-*`, `#options-reveal`, `#line-g-1` run to `TIMELINE_END` (44.14).

## PART 5: Master Timeline Overview
```
0.0    Background + bottomStrip + topic + logo (always on)
0.3    q-full-card hero enter (lowered)
0.8    serial-num pop (lowered)
3.58   q-full-card + serial-num rise to rest
4.12   tri-base draws in
5.02   tri-hyp (dashed, "1") fades in
5.74   tri-perp draws in
5.90   right-angle marker fades in
6.68   angle-arc fades in + chip-theta pops
7.26   chip-hyp pops
8.12   chip-sin pops
9.08   chip-cos pops
9.86   PIN_TIME - q-full-card -> q-pinned, illustration -> illus-pinned (pinFlow, 0.8s each), serial-num fades out
10.66  GIVEN_TIME - Given card enters, textReveal line 1 (same angle observation)
19.26  Given card line 2 textReveal begins (sin²θ+cos²θ=1); LINK pulse on pinned angle-arc + theta chip
25.30  Given card morphs to stack-given (0.8s); Step 1 card enters at the same instant
26.62  Step 1 textReveal "sin²30°"; LINK pulse on pinned sin chip
28.34  Step 1 textReveal "cos²30°"; LINK pulse on pinned cos chip
31.12  Step 1 textReveal "= 1" (.ans)
31.86  reinforcement emphasize on Step 1's "=1" (covers "we do not need to find... separately")
37.16  Step 1 card morphs to stack-step1 (0.8s), line-g-1 grows
37.96  RECENTER_TIME - illus-pinned fades out, q-pinned recenters for options
38.46  options-reveal fades in
38.86  options stagger in
42.06  correctPulse on option C
42.74  END_FADE_TIME - full-frame fadeOut (1.2s)
44.14  tl.set - nothing beyond this
```
