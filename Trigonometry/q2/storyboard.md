# Storyboard - Trigonometry q2 (sin 30 + cos 60)

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual |
|------|------|-----------|---------|-------|--------|
| 1 | 0.10-4.86 | "So welcome back again. It's time to solve one more problem." | Intro | Whole frame | Question card rises into view |
| 2 | 5.50-13.08 | "Now in this problem, we are given sine 30 degrees and cos 60 degrees. The question is asking us to find their sum." | State problem | Question text | Question stays centered, full |
| 3 | 13.74-20.34 | "Now, the important point here is that these are standard trigonometric values. We should remember them because they are used very often." | Concept reminder | Pinned question | Question pins to top mid-line, mini table holds briefly |
| 4 | 20.86-26.38 | "Sine 30 degree is equal to one by two, and cos 60 degree is also equal to one by two." | Give standard values | Given card | Given card enters, values reveal word by word |
| 5 | 27.14-33.44 | "Now that we know both values, let us substitute them into the given expression. So we get one half plus one half," | Bridge to computation + compute | Given card morphing, then Step 1 card | Given card morphs into stack, Step 1 card enters mid-phrase and reveals the sum |
| 6 | 34.20-36.12 | "which is equal to one. Done." | Confirm result | Step 1 card | Final `=1` revealed |
| 7 | 36.58-41.12 | "So the final answer will be one. Hence, the correct option is option B." | Archive + reveal answer | Step 1 card morphing, options grid | Step 1 morphs into stack, options fade in, stagger, B pulses green |

Total video length: ~41.1s (audio ends 41.12s, timeline holds a beat past that). Phase 1 illustration: a standard-values table (sin/cos/tan for 0°, 30°, 60°, 90°, with tan 90° shown as ∞), drawn row by row from 5.0s to ~14.8s, held while the narration recaps "these are standard trigonometric values... we should remember them," then pins at 18.9s.

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Question Enter (0.0-4.86s)
- VOICEOVER: "So welcome back again. It's time to solve one more problem."
- VISUAL OBJECTIVE: Establish the question, calm open.
- SCREEN LAYOUT: `#q-full-card` centered per template.html, `#serial-num` top-left.
- ON-SCREEN ELEMENTS: Question text "What is the sum of sin 30 degrees and cos 60 degrees?" with `sin 30`, `cos 60` in `.num` accent. Serial badge "Q".
- ANIMATION DETAILS: `apt.heroEnterLowered(tl, "#q-full-card", 180, 4.86)` - starts lowered, rises at 4.86 (end of opening line). Serial badge fromTo at 0.8 (scale/rotation pop, mirrors hero offset), rises with card at 4.86.
- CAMERA MOVEMENT: none (static frame, motion is internal).
- TRANSITIONS: n/a (first scene).
- EDUCATIONAL PURPOSE: orient viewer to the exact question before any math.
- VISUAL HIERARCHY: question card dominant, badge secondary.
- ATTENTION MANAGEMENT: single focal element, no competing motion.
- MOTION NOTES: back.out(1.4) ease reads as a confident settle, not a bounce.
- CONTINUITY FROM PREVIOUS SCENE: n/a, this is the opening frame.

### Scene 2 - Trig Table Builds + Question Pins (5.0-19.7s)
- VOICEOVER: "...we are given sine 30 degrees and cos 60 degrees. The question is asking us to find their sum. Now, the important point here is that these are standard trigonometric values. We should remember them because they are used very often."
- VISUAL OBJECTIVE: Show the full standard-value table as a memory aid, then pin question + table together to make room for the solution area.
- SCREEN LAYOUT: `#illustration` table centered below the question card (left:50%, top:340px, width:1040px), grid of sin/cos/tan rows x 0°/30°/45°/60°/90° columns. Pins to top at 18.9s (`#q-pinned` + `#illus-pinned`, the latter scaled 0.42x at left:50%, top:170px).
- ON-SCREEN ELEMENTS: table rows `#trig-row-head`, `#trig-row-sin`, `#trig-row-cos`, `#trig-row-tan` - values use `.frac`-free plain fractions ("1/2", "√3/2", "1/√3"), tan 90° cell reads "∞".
- ANIMATION DETAILS: table container fromTo at 5.0. Each row `tl.fromTo(sel, {opacity:0,y:16}, {opacity:1,y:0,duration:0.5,ease:"power2.out"}, t)` at t = 5.3, 8.3, 11.3, 14.3 (header, sin, cos, tan). At 18.9s: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 18.9)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 18.9)` - question and table glide up together, mid-way through the "remember them" line so the glide finishes with room to spare before the Given card. `apt.fadeOut(tl, "#serial-num", 18.9, 0.5)` in step with the glide.
- CAMERA MOVEMENT: table rows settle upward into place one at a time; at 18.9s the whole question+table block glides to the pinned position.
- TRANSITIONS: row fade-ins are simple opacity/y tweens (no dedicated helper needed for a static reference table); the 18.9s pin is a pinFlow glide, not a cut.
- EDUCATIONAL PURPOSE: gives the viewer the full reference table (not just the two values this question needs) before narrowing to the specific computation - reinforces "learn the whole table, use two values from it."
- VISUAL HIERARCHY: header row and sin/cos/tan values in `--primary`, angle labels in plain text - table reads as a clean reference, not competing with the question above it.
- ATTENTION MANAGEMENT: rows build during the "we are given... standard trigonometric values... remember them" narration span, so the table's growth has a spoken reason at every step, no dead time.
- MOTION NOTES: 0.5s per-row fade is deliberately calmer than `cardEnter`'s back.out pop - this is reference material, not an active solution card.
- CONTINUITY FROM PREVIOUS SCENE: the question card that rose in Scene 1 stays in place while the table builds beneath it, then both glide to their pinned slots together at 18.9s - one continuous unit, not two independent elements.

### Scene 2B - Mini Table Clears (18.9-21.26s)
- VOICEOVER: "...they are used very often." (finishes at 20.34, tight into) "Sine 30 degree is equal to..."
- VISUAL OBJECTIVE: Let the pinned mini table hold briefly as a bridge, then clear right as the Given card is about to restate the same two values in full. The re-recorded voiceover leaves almost no gap here (pin glide ends 19.7, Given starts 20.86), so the hold is intentionally short.
- SCREEN LAYOUT: `#illus-pinned` (scaled table) visible 18.9-20.86s.
- ANIMATION DETAILS: `apt.fadeOut(tl, "#illus-pinned", 20.86, 0.4)` - fades exactly at GIVEN_TIME, handing off to the Given card.
- EDUCATIONAL PURPOSE: avoids showing the same two values twice on screen at once (mini table + Given card).
- CONTINUITY FROM PREVIOUS SCENE: same table object from Scene 2, now shrunk and pinned, clearing to make room for Scene 3.

### Scene 3 - Given Card (20.86-27.14s)
- VOICEOVER: "Sine 30 degree is equal to one by two, and cos 60 degree is also equal to one by two."
- VISUAL OBJECTIVE: Surface the two standard values the viewer must recall.
- SCREEN LAYOUT: `#card-given .solution-card` centered per template (left:640px, top:440px).
- ON-SCREEN ELEMENTS: chip "Given", math block two lines: `sin 30° = 1/2` and `cos 60° = 1/2` (using `.frac` component, values in `.hi`).
- ANIMATION DETAILS: `apt.cardEnter(tl, "#card-given .solution-card", 20.86)`. `apt.textReveal(tl, "#card-given .math")` word-by-word: "sin"(20.86) "30°"(21.20) "="(21.78) "1/2"(22.14, `.hi`) on line 1; "cos"(23.58) "60°"(24.60) "="(25.42) "1/2"(25.82, `.hi`) on line 2.
- CAMERA MOVEMENT: none.
- TRANSITIONS: cardEnter back.out(1.4) pop.
- EDUCATIONAL PURPOSE: the two facts the entire answer depends on.
- VISUAL HIERARCHY: both fraction values equally weighted (both `.hi`), no false emphasis since they're equal.
- ATTENTION MANAGEMENT: word-sync reveal paces the viewer's eye with the narration exactly.
- MOTION NOTES: standard cardEnter + textReveal, no custom animation.
- CONTINUITY FROM PREVIOUS SCENE: opens directly under the now-pinned question, in the empty canvas Scene 2 prepared.

### Scene 4 - Given Morphs to Stack (27.14-27.94s)
- VOICEOVER: "Now that we know both values, let us substitute them into the given expression."
- VISUAL OBJECTIVE: Archive the Given values into the left stack while the narration bridges to computation.
- SCREEN LAYOUT: `#stack-given .stack-card` at left:100px, top:140px (already in DOM, opacity 0).
- ON-SCREEN ELEMENTS: stack card with `.step-circle` "G", collapsed math (plain, no `.rv`).
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 27.14)` - 0.8s, power2.inOut.
- CAMERA MOVEMENT: card slides center-to-left, shrinks.
- TRANSITIONS: the morph itself is the transition.
- EDUCATIONAL PURPOSE: keeps solved facts visible for reference through the rest of the video.
- VISUAL HIERARCHY: stack card recedes visually (light-blue bg, no shadow) so the next active card reads as "current focus".
- ATTENTION MANAGEMENT: the "let us substitute" narration line covers the full morph; the re-recorded voiceover runs this line straight into "so we get one half plus one half" with no pause, so Step 1 now enters mid-phrase rather than after a breathing gap.
- MOTION NOTES: 0.8s built-in duration, not adjustable.
- CONTINUITY FROM PREVIOUS SCENE: same Given card content and position as Scene 3's ending frame, now mid-glide into the stack.

### Scene 5 - Step 1 (31.12-37.38s)
- VOICEOVER: "...into the given expression. So we get one half plus one half, which is equal to one. Done."
- VISUAL OBJECTIVE: Show the substitution and the sum.
- SCREEN LAYOUT: `#card-step1 .solution-card` centered (left:640px, top:460px).
- ON-SCREEN ELEMENTS: chip "Step 1", math: `1/2 + 1/2 = 1` (using `.frac` for both halves, `.ans` on the final `1`).
- ANIMATION DETAILS: `apt.cardEnter(tl, "#card-step1 .solution-card", 31.12)` (fires right as "So we get..." begins). `apt.textReveal(tl, "#card-step1 .math")`: "1/2"(32.00) "+"(32.50) "1/2"(32.96) "="(34.72) "1"(35.10, `.ans`).
- CAMERA MOVEMENT: none.
- TRANSITIONS: cardEnter pop.
- EDUCATIONAL PURPOSE: the actual arithmetic step, one half plus one half.
- VISUAL HIERARCHY: final `1` in `.ans` green-adjacent emphasis class, drawing the eye to the answer.
- ATTENTION MANAGEMENT: the G stack card sits quietly to the left as passive reference while this card is active.
- MOTION NOTES: standard cardEnter + textReveal only, no extra pulse (avoids double-animating the `.ans` span).
- CONTINUITY FROM PREVIOUS SCENE: enters into the same center slot the Given card just vacated via its morph in Scene 4 - the morph (27.14-27.94) is still settling as this card's entrance narration overlaps it, since the re-recorded voiceover leaves no bridging silence.

### Scene 6 - Step 1 Morphs to Stack + Options Reveal (36.58-41.3s)
- VOICEOVER: "So the final answer will be one. Hence, the correct option is option B."
- VISUAL OBJECTIVE: Archive the last step, then reveal the four options with B highlighted.
- SCREEN LAYOUT: `#stack-step1 .stack-card` at left:100px, top:290px. `#options-reveal` `.pinned-col` per template, options grid 2x2.
- ON-SCREEN ELEMENTS: stack card "1" with collapsed math `1/2 + 1/2 = 1`. Connector line `#line-g-1` between G and 1 circles. Options A "1/2", B "1" (correct), C "sqrt(3)", D "2".
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 36.58)`; `apt.stackLineGrow(tl, "#line-g-1", 36.58)` (line grown once both G and 1 circles are on screen). `apt.fadeIn(tl, "#options-reveal", 38.7)`. `apt.optionsStagger(tl, ".opt-btn", 39.1)`. `apt.correctPulse(tl, ".opt-btn.correct", 40.52)` (times to "option" 40.52-40.84). `apt.fadeOut(tl, "#root > div", 41.3, 1.2)` end fade.
- CAMERA MOVEMENT: none new; the pinned question stays put (no `recenterForOptions` needed here since there's no illustration to clear and only one stack card - options grid uses `.pinned-col` default position).
- TRANSITIONS: morph, then fadeIn/stagger for options.
- EDUCATIONAL PURPOSE: connects the computed sum (1) directly to option B's value.
- VISUAL HIERARCHY: correct option B pulses green, unambiguous final answer.
- ATTENTION MANAGEMENT: single new focal group (options grid) after the stack settles, nothing else competes.
- MOTION NOTES: `optionsStagger` 0.12s stagger across 4 buttons; `correctPulse` back.out(1.5) yoyo.
- CONTINUITY FROM PREVIOUS SCENE: Step 1 card mid-morph from Scene 5 lands in the stack right as the options container begins fading in, one continuous settle-then-reveal beat.

## PART 3: Asset List Required
- None beyond the shared design system (`design-system.css`, `animations.js`, `assets/`). No SVG/PNG illustration asset - the Phase 1 illustration is a pure-HTML/CSS trig value table (`#trig-table`), built from design-system tokens (`var(--primary)`, `var(--primary-light)`, `var(--text)`, `var(--bg)`, `var(--font)`) and the existing `.frac` component, no new colors or components invented.

## PART 4: Animation Complexity Notes
- 1 Given card + 1 Step card (simplest step count in the series). Two stack cards total (G, 1), one connector line.
- Phase 1 illustration (trig table) uses `apt.pinFlow` like a normal illustration would, pinning alongside the question at PIN_TIME=18.9s, then clears via `apt.fadeOut` at GIVEN_TIME once the Given card is about to restate the same values - avoids the "illustration must persist through Phase 2 unless replaced" rule reading as a violation, since it hands off cleanly to the Given card rather than just vanishing.
- Row-by-row table build uses plain `tl.fromTo` opacity/y tweens (not a named `apt.*` helper) since no existing helper covers a static reference-table reveal - this is a one-off tween pattern, not a new reusable animation.
- No `apt.ambientLoop` needed - the table itself is the active content during 5.0-18.9s, nothing sits idle.
- No `apt.recenterForOptions` shift needed beyond the template default, since the table has already cleared out by GIVEN_TIME, well before Phase 3.
- The re-recorded voiceover (41.12s, down from ~46.5s) removed most inter-line pauses, so several bridging gaps that used to give the morph transitions room to breathe are now tight or overlapping (Given morph at 27.14 runs directly into Step 1's entrance at 31.12 without a silent gap). This is expected given the narration's new pacing, not a timing bug.

## PART 5: Master Timeline Overview
```
0.0    Background + bottomStrip + topic + logo (always on)
0.3    q-full-card hero enter (lowered)
0.8    serial-num pop (lowered, mirrors card)
4.86   q-full-card + serial-num rise to rest
5.0    illustration container pops in
5.3    trig-row-head fades in
8.3    trig-row-sin fades in
11.3   trig-row-cos fades in
14.3   trig-row-tan fades in (tan 90° = ∞)
18.9   PIN_TIME - q-full-card -> q-pinned, illustration -> illus-pinned (pinFlow, 0.8s each), serial-num fades out
20.86  GIVEN_TIME - illus-pinned fades out, Given card enters, textReveal (sin30=1/2, cos60=1/2)
27.14  Given card morphs to stack-given (0.8s)
31.12  Step 1 card enters, textReveal (1/2+1/2=1)
36.58  Step 1 card morphs to stack-step1 (0.8s), line-g-1 grows
38.7   illus-pinned fully cleared, options-reveal fades in
39.1   options stagger in
40.52  correctPulse on option B
41.3   END_FADE_TIME - everything fades out together (audio ends 41.12)
```
