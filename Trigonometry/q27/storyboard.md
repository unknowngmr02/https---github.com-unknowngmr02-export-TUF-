# Storyboard - Trigonometry Q27 (Tower between two observation points, opposite sides)

Question: Two observation points on opposite sides of a tower are 60 m apart. Their angles of
elevation are 30 degrees and 45 degrees. Find the tower height.
Options: A) 30(root3+1) m  B) 60/(root3-1) m  C) 30(root3-1) m [correct]  D) 20 root3 m

Narration duration (transcript.json): 97.379s

---

## PART 1: Narration Beat Analysis

| # | Time | Narration | Educational purpose | Attention focus | Visual objective |
|---|------|-----------|----------------------|------------------|-------------------|
| 1 | 0.12-3.46 | "So welcome back again. It's time to solve one more problem." | Opening hook | Center screen | Question card rises into place |
| 2 | 4.00-9.92 | "In this problem, two observation points are on opposite sides of a tower, and the distance between those points is sixty meters." | State the setup | Illustration forming | Ground line draws, both observer icons pop in, "60 m" bracket reveals |
| 3 | 10.46-16.90 | "Their angles of elevation are thirty degrees and forty-five degrees. We need to find the height of the tower." | State the two angles + the unknown | Tower + both arcs | Tower grows, both dashed sight lines draw, both angle arcs + chips (30 deg, 45 deg) reveal |
| 4 | 17.42-20.46 | "To understand this easily, draw the tower in the middle." | Confirm the layout | Tower | Emphasize pulse on tower |
| 5 | 20.92-22.80 | "Take the height of the tower as h." | Introduce h | Tower height arrow | "h" role chip pops in beside tower |
| 6 | 23.12-27.00 | "Let the distance of the thirty-degree point from the tower be x." | Introduce x | Left ground segment | "x" role chip pops in under A-T segment |
| 7 | 27.48-37.16 | "Since both points are on opposite sides and the total distance between them is sixty meters, the distance of the other point becomes sixty minus x." | Derive 60-x | Right ground segment | "60 - x" role chip pops in under T-B segment |
| 8 | 37.56-38.98 | "Okay, the figure is clear." | Confirm beat | Whole illustration | Emphasize pulse on full figure |
| 9 | 39.78-39.96 | "Now," | Transition | - | - |
| 10 | 40.50-44.34 | "let us start with the easier angle first, which is forty-five degrees." | Announce Step 1 | Pinned 45 deg chip | Pin flow completes; Given card shows then morphs; Step 1 card enters |
| 11 | 44.76-57.14 | "We know that tan45 = height/distance, and tan45 is 1, which gives us 1 = h/(60-x). So we have h = 60-x." | Derive h = 60-x | Step 1 card equation | Word-synced reveal of tan45 = h/(60-x) = 1 -> h = 60-x, LINK pulses on pinned h/60-x labels |
| 12 | 57.66-59.00 | "Got it? Perfect." | Confirm | Step 1 answer | Emphasize pulse on h = 60-x |
| 13 | 59.42-61.44 | "Now let us use the thirty-degree angle." | Announce Step 2 | Step 2 card | Step 1 morphs to stack; Step 2 card enters |
| 14 | 62.06-69.38 | "We know that tan30 = 1/root3. So 1/root3 = h/x, which gives us x = root3 h." | Derive x = root3 h | Step 2 card equation | Word-synced reveal, LINK pulse on pinned 30 deg chip |
| 15 | 69.90-72.62 | "We already know that h = 60-x." | Bridge into substitution | Step 3 card opens | Step 2 morphs to stack; Step 3 card enters, restates h=60-x |
| 16 | 73.12-81.92 | "So after substituting and solving, we get 60 = h(root3+1). h = 60/(root3+1)." | Derive the intermediate equation | Step 3 equation | Word-synced reveal of substitution |
| 17 | 82.04-89.94 | "And after rationalization, we get h = 30(root3-1). Done and dusted." | Final rationalized answer | Step 3 answer | Word-synced reveal, answer chip emphasized |
| 18 | 89.94-94.86 | "So the height of the tower is 30(root3-1) m." | Restate final answer | Step 3 answer -> stack | Step 3 morphs to stack, answer LINK pulse |
| 19 | 94.86-97.38 | "Hence, option C is the correct answer." | Reveal correct option | Options grid | Options fade in, stagger, correct option (C) pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 - Opening (0.0s - 4.0s)
**VOICEOVER:** "So welcome back again. It's time to solve one more problem."
**VISUAL OBJECTIVE:** Establish the question card as the hero element.
**SCREEN LAYOUT:** Dotted grid background + bottom strip + topic name + logo always visible. Question card centered, starting lowered (heroEnterLowered offset 180px), serial badge top-left of card moving in tandem.
**ON-SCREEN ELEMENTS:** `#q-full-card` (question text with "60 m", "30 degrees", "45 degrees" in primary blue), `#serial-num` badge with "Q".
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)` at 0.3s; badge parallel tween at 0.8s, rising at 3.6s.
**CAMERA MOVEMENT:** None (static frame, motion carried by element entrances).
**TRANSITIONS:** Card rises to resting slot exactly as "one more problem" finishes (3.46s), settling by 3.6s.
**EDUCATIONAL PURPOSE:** Hook the viewer before the illustration begins.
**VISUAL HIERARCHY:** Question card > serial badge > background.
**ATTENTION MANAGEMENT:** Single moving element, no competition.
**MOTION NOTES:** `back.out(1.4)` on card entrance for a soft settle.
**CONTINUITY FROM PREVIOUS SCENE:** First scene - no prior motion.

### SCENE 2 - Illustration builds: ground + observers + 60 m (4.0s - 10.46s)
**VOICEOVER:** "In this problem, two observation points are on opposite sides of a tower, and the distance between those points is sixty meters."
**VISUAL OBJECTIVE:** Draw the ground baseline and both observation points, then the total distance.
**SCREEN LAYOUT:** Illustration area centered below the question card (`#illustration`, viewBox `0 0 560 500`).
**ON-SCREEN ELEMENTS:** `#ground-line` (A to B), `#obs-A-icon`, `#obs-B-icon` (circle head + rect body markers), `#bracket-60` + `#label-60` (total distance).
**ANIMATION DETAILS:**
- `#ground-line` strokeDashoffset 410 -> 0, duration 0.6, power2.out, at 4.2
- `#obs-A-icon` scale 0.6->1 opacity 0->1, back.out(1.6), 0.4s, at 4.94
- `#obs-B-icon` same, at 5.4 (slightly staggered after A so eye lands as "opposite sides" is spoken)
- `#bracket-60` + `#label-60` fromTo opacity/y, back.out(1.6), 0.35s, at 7.8 (lands on "sixty meters")
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous build, no cuts.
**EDUCATIONAL PURPOSE:** Ground the abstract "two points 60 m apart" in a concrete picture before angles are introduced.
**VISUAL HIERARCHY:** Ground line first (establishes scale), then points, then the distance label.
**ATTENTION MANAGEMENT:** One new element roughly every 1-1.5s - no dead gap.
**MOTION NOTES:** Icons pop with `back.out(1.6)`, matching the pop-in law for spoken values.
**CONTINUITY FROM PREVIOUS SCENE:** The question card has just settled into its resting slot; the illustration begins drawing directly beneath it in the same continuous take.

### SCENE 3 - Tower, sight lines, both angle arcs (10.46s - 20.46s)
**VOICEOVER:** "Their angles of elevation are thirty degrees and forty-five degrees. We need to find the height of the tower. To understand this easily, draw the tower in the middle."
**VISUAL OBJECTIVE:** Grow the tower and reveal both triangles' hypotenuses and angle arcs.
**SCREEN LAYOUT:** Tower vertical rect centered at x=300 in the illustration viewBox, between the two observers.
**ON-SCREEN ELEMENTS:** `#tower-rect` (grows from ground), `#sight-left` (A to C, dashed), `#sight-right` (B to C, dashed), `#right-angle-mark`, `#arc-30` (green), `#arc-45` (green, mirrored technique), `#chip-30`, `#chip-45`.
**ANIMATION DETAILS:**
- `#tower-rect` attr height 0->150, y 400->250, duration 0.7, power2.out, at 10.6
- `#right-angle-mark` opacity 0->1, 0.3s, at 11.2
- `#sight-left` strokeDashoffset 300.17->0, duration 0.7, power2.out, at 11.8
- `#sight-right` strokeDashoffset 212.13->0, duration 0.6, power2.out, at 12.6
- `#arc-30` opacity 0->1, 0.4s, at 13.6 (during "thirty degrees")
- `#chip-30` opacity/scale pop, back.out(1.6), 0.35s, at 13.9
- `#arc-45` opacity 0->1, 0.4s, at 14.3 (during "forty-five degrees")
- `#chip-45` pop, at 14.6
- `apt.emphasize(tl, "#tower-rect", 19.0)` during "draw the tower in the middle" (confirm beat)
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous.
**EDUCATIONAL PURPOSE:** Show the two right triangles sharing the tower as their common side.
**VISUAL HIERARCHY:** Tower > sight lines > arcs+chips (green is reserved for the angle, drawing the eye there last).
**ATTENTION MANAGEMENT:** 6 timed events across 10s - well under the 3s gap ceiling.
**MOTION NOTES:** Both arcs are opacity-only reveals per the standing angle-arc rule; never GSAP-tweened `--angle`.
**CONTINUITY FROM PREVIOUS SCENE:** The ground and observers from Scene 2 are already in place; the tower rises directly between them without any reset.

### SCENE 4 - Variables h, x, 60-x (20.92s - 38.98s)
**VOICEOVER:** "Take the height of the tower as h. Let the distance of the thirty-degree point from the tower be x. Since both points are on opposite sides and the total distance between them is sixty meters, the distance of the other point becomes sixty minus x. Okay, the figure is clear."
**VISUAL OBJECTIVE:** Label the three unknowns/knowns directly on the figure before any algebra starts.
**SCREEN LAYOUT:** Same illustration, now annotated below the ground line and beside the tower.
**ON-SCREEN ELEMENTS:** `#arrow-h` + `#chip-h` (role, black border) beside the tower, `#chip-x` under the A-T segment, `#chip-60x` under the T-B segment.
**ANIMATION DETAILS:**
- `#arrow-h` + `#chip-h` pop in, back.out(1.6), 0.35s, at 21.2 (on "height of the tower as h")
- `#chip-x` pop in, at 23.6 (on "thirty-degree point... be x")
- `#chip-60x` pop in, at 32.8 (on "distance of the other point becomes sixty minus x")
- `apt.emphasize(tl, "#illustration", 38.2)` full-figure confirm pulse on "the figure is clear"
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Leads directly into the pin flow (Scene 5).
**EDUCATIONAL PURPOSE:** Every symbol used in the algebra later (h, x, 60-x) is anchored to a real point on the diagram first.
**VISUAL HIERARCHY:** h (primary focus, black role chip) then x, then 60-x.
**ATTENTION MANAGEMENT:** 4 events across 18s of a fairly wordy stretch - well spaced, no gap over 3s given the narration itself is continuous and each label lands on its named value.
**MOTION NOTES:** Role chips (`.fig-chip.role`) use black border/text since h, x are role/variable labels, not measured values.
**CONTINUITY FROM PREVIOUS SCENE:** Tower and arcs from Scene 3 remain fully visible and unchanged; only new chips are added around them.

### SCENE 5 - Pin flow + Given card (37.56s - 40.4s)
**VOICEOVER:** "...the figure is clear. Now,"
**VISUAL OBJECTIVE:** Reorganize into the solving layout and restate the given setup as a formal card.
**SCREEN LAYOUT:** Question + illustration glide from full-size to their pinned slots (top area). Given SolutionCard appears center.
**ON-SCREEN ELEMENTS:** `#q-pinned`, `#illus-pinned` (exact coordinate copy, scale 0.48), `#card-given`.
**ANIMATION DETAILS:**
- PIN_TIME = 37.56: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 37.56)`, `apt.pinFlow(tl, "#illustration", "#illus-pinned", 37.56)`, `apt.fadeOut(tl, "#serial-num", 37.56, 0.5)`
- GIVEN_TIME = 38.5 (separate timestamp - the pin lands at 38.36, Given card opens 0.14s later, restating what was already fully narrated in Scenes 2-4): `apt.cardEnter(tl, "#card-given .solution-card", 38.5)`
- Given card's three lines reveal at 38.5, 38.8, 39.1 (line-level - paraphrased restatement, not fresh verbatim narration)
- `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 39.6)`
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.pinFlow` (0.8s glide, not a fade swap) for question+illustration; `apt.morphToStack` (0.8s) for the Given card.
**EDUCATIONAL PURPOSE:** Transition from "building the picture" to "solving the equations" without losing the picture.
**VISUAL HIERARCHY:** Pin flow first (layout settles), then Given card (recaps in words).
**ATTENTION MANAGEMENT:** Continuous motion, no dead frame.
**MOTION NOTES:** Given card's last reveal (39.1) sits 0.5s before its own morph (39.6) - satisfies "morph may not start before the card's last reveal finishes + buffer."
**CONTINUITY FROM PREVIOUS SCENE:** The full-size illustration is still completing its "figure is clear" emphasize pulse from Scene 4 as the pin glide begins; the same tower/arcs/chips are what glide into the pinned slot, not a redraw.

### SCENE 6 - Step 1: the 45 degree equation (40.5s - 59.0s)
**VOICEOVER:** "let us start with the easier angle first, which is forty-five degrees. We know that tan45 = height/distance, and tan45 is 1, which gives us 1 = h/(60-x). So we have h = 60-x. Got it? Perfect."
**VISUAL OBJECTIVE:** Derive h = 60 - x from the 45 degree triangle.
**SCREEN LAYOUT:** `#card-step1` active center card; pinned illustration behind/left continues to react.
**ON-SCREEN ELEMENTS:** `.math` content: "tan 45deg = h / (60-x)" -> "tan 45deg = 1" -> "1 = h / (60-x)" -> "h = 60 - x", each unit in its own `.rv` span.
**ANIMATION DETAILS:**
- `apt.cardEnter(tl, "#card-step1 .solution-card", 40.5)`
- `apt.textReveal(tl, "#card-step1 .math")` (word-level, timestamps taken directly from transcript.json words: "tan"->44.759, "45"->45.239/45.5, "="->46.299, "height"->46.84, "distance"->47.299, "1"->49.599 continuing through "60"->53.219, "minus"->53.619, "x"->53.86ff, closing with "h equal to sixty minus x" at 55.399-57.139)
- LINK pulses tied to the pinned illustration while the card stays up long: `tl.to("#chip-45-pinned", {stroke:"#4eb85f", duration:0.3, yoyo:true, repeat:1}, 45.4)`, `apt.emphasize(tl, "#arrow-h-pinned", 51.9)`, `apt.emphasize(tl, "#chip-60x-pinned", 53.2)`
- `apt.emphasize(tl, "#card-step1 .ans", 57.9)` on "Got it? Perfect."
- `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 58.2)`
- `apt.stackLineGrow(tl, "#line-g-1", 58.2)`
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Text-sync reveal inside the active card; morph to stack once the confirm beat ("Got it? Perfect.") settles.
**EDUCATIONAL PURPOSE:** The easier (45 degree) triangle is solved first, establishing h in terms of x before the harder substitution.
**VISUAL HIERARCHY:** Equation term-by-term > pinned-illustration LINK pulses (secondary reinforcement).
**ATTENTION MANAGEMENT:** Card is on screen ~19s - exceeds the soft 8s guideline, so it is kept alive via the pinned-illustration LINK beats every 1.5-3s rather than splitting into more cards (the derivation itself is one continuous algebraic thought).
**MOTION NOTES:** No `apt.emphasize`/`apt.resultReveal` layered on the text-reveal-driven spans themselves - only the pinned illustration counterparts pulse.
**CONTINUITY FROM PREVIOUS SCENE:** The Given card's morph-into-stack from Scene 5 is still completing (lands 40.4) as Step 1's card enters at 40.5, reading as one continuous hand-off in the center stage.

### SCENE 7 - Step 2: the 30 degree equation (59.4s - 69.9s)
**VOICEOVER:** "Now let us use the thirty-degree angle. We know that tan30 = 1/root3. So 1/root3 = h/x, which gives us x = root3 h."
**VISUAL OBJECTIVE:** Derive x = root3 * h from the 30 degree triangle.
**SCREEN LAYOUT:** `#card-step2` active center card.
**ON-SCREEN ELEMENTS:** `.math`: "tan 30deg = 1/root3" -> "1/root3 = h/x" -> "x = root3 h".
**ANIMATION DETAILS:**
- `apt.cardEnter(tl, "#card-step2 .solution-card", 59.4)`
- `apt.textReveal(tl, "#card-step2 .math")` word-level from transcript.json ("tan"->62.059, "30"->62.639, "degree"->62.859, "="->63.279, "1"->63.639, "root"->64.019, "three"->64.239, continuing to "x"->68.119, "equals"->68.239, "root"->68.54, "three"->68.76, "h"->69.279)
- `tl.to("#chip-30-pinned", {stroke:"#4eb85f", duration:0.3, yoyo:true, repeat:1}, 62.2)` LINK pulse
- `apt.emphasize(tl, "#chip-x-pinned", 68.15)` when x is restated in the equation
- `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 69.9)`
- `apt.stackLineGrow(tl, "#line-1-2", 69.9)`
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Text-sync reveal, then morph as "We already know that h..." (Step 3's opening line) begins.
**EDUCATIONAL PURPOSE:** Second triangle solved, producing the second relationship needed for substitution.
**VISUAL HIERARCHY:** Equation > pinned LINK pulses.
**ATTENTION MANAGEMENT:** ~10.5s on screen, word-level reveal keeps beats under 3s throughout.
**MOTION NOTES:** Same text-reveal-only rule as Step 1 - no extra pulses on the card's own spans.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's stack card and the g-1 connector line are already settled in the left column as Step 2 opens center-stage; the stack column keeps growing continuously.

### SCENE 8 - Step 3: substitution, rationalization, final answer (70.8s - 91.7s)
**VOICEOVER:** "We already know that h = 60-x. So after substituting and solving, we get 60 = h(root3+1). h = 60/(root3+1). And after rationalization, we get h = 30(root3-1). Done and dusted. So the height of the tower is 30(root3-1) m."
**VISUAL OBJECTIVE:** Substitute x = root3*h into h = 60-x, solve for h, rationalize, land on the final answer.
**SCREEN LAYOUT:** `#card-step3` active center card, widened to fit the longer equation lines.
**ON-SCREEN ELEMENTS:** `.math`: "h = 60 - x" (restated) -> "60 = h(root3 + 1)" -> "h = 60/(root3+1)" -> "h = 30(root3 - 1) m" (final, `.ans`).
**ANIMATION DETAILS:**
- `apt.cardEnter(tl, "#card-step3 .solution-card", 70.8)`
- `apt.textReveal(tl, "#card-step3 .math")` word-level from transcript.json ("We"->69.9 already spoken during morph, restated line lands visually at cardEnter; "60"->76.159/79.259, "h"->76.68/78.779, "times"/"root"/"three"/"plus"/"one"->77.54-78.54 and 80.559-81.919, closing "h equals thirty times root three minus one"->84.86-87.879)
- `apt.emphasize(tl, "#card-step3 .ans", 87.9)` on "Done and dusted."
- `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 90.9)`
- `apt.stackLineGrow(tl, "#line-2-3", 90.9)`
- `apt.emphasize(tl, "#stack-step3 .ans", 91.9)` LINK as the answer resettles in the stack right as "thirty times root three minus one meters" is spoken again
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Morph to stack timed so the final numeric answer visually "locks in" exactly as the narrator restates it.
**EDUCATIONAL PURPOSE:** Full algebraic payoff - the two triangle relationships combine into the closed-form answer.
**VISUAL HIERARCHY:** Substitution step > solved-for-h step > rationalized final answer (color-emphasized via `.ans`).
**ATTENTION MANAGEMENT:** ~21s on screen; word-level reveal plus the two emphasize beats keep no gap over 3s.
**MOTION NOTES:** `.frac` used for every division (60/(root3+1)) - no bare "/" character, per the standing math-notation rule.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2's morph is still completing (lands 70.7) as Step 3's card enters at 70.8, and the "We already know h=60-x" line was already spoken during that same morph, so the card opens already "in motion" conversationally.

### SCENE 9 - Recenter + options reveal (92.0s - 97.98s)
**VOICEOVER:** "Hence, option C is the correct answer."
**VISUAL OBJECTIVE:** Clear the pinned illustration, align the pinned question with the options column, reveal all four options, highlight C.
**SCREEN LAYOUT:** `.pinned-col` (options grid) on the right; stack column with all 4 completed steps remains on the left, fully visible and continuous.
**ON-SCREEN ELEMENTS:** `#options-reveal` with 4 `.opt-btn` (A: 30(root3+1) m, B: 60/(root3-1) m, C: 30(root3-1) m [correct], D: 20root3 m).
**ANIMATION DETAILS:**
- `apt.fadeOut(tl, "#illus-pinned", 92.0)`
- `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 92.0)`
- `apt.fadeIn(tl, "#options-reveal", 92.2)`
- `apt.optionsStagger(tl, ".opt-btn", 92.6)`
- `apt.correctPulse(tl, ".opt-btn.correct", 95.9)` (lands as "option C" is spoken)
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.fadeOut`/`apt.recenterForOptions` clear the way; options stagger in.
**EDUCATIONAL PURPOSE:** Confirm the derived answer against the given options.
**VISUAL HIERARCHY:** Stack column (proof) stays visible alongside the options (answer), so the viewer can trace the logic to the result in one frame.
**ATTENTION MANAGEMENT:** 4 close-spaced events across 4s.
**MOTION NOTES:** Stack cards and connector lines are never faded here - they stay visible through the end.
**CONTINUITY FROM PREVIOUS SCENE:** Step 3's morph and its LINK pulse (91.9) are still fresh as the recenter begins at 92.0, reading as the direct continuation of "the answer just landed in the stack, now let's check it against the options."

### SCENE 10 - End fade (97.98s - 99.4s)
**VOICEOVER:** (silence, narration ends 97.379)
**VISUAL OBJECTIVE:** Clean, synchronized fade-out.
**ANIMATION DETAILS:** `apt.fadeOut(tl, "#root > div", 97.979, 1.2)`; `tl.set({},{},99.4)`.
**CONTINUITY FROM PREVIOUS SCENE:** The correct-option pulse from Scene 9 has settled; everything fades as one unit.

---

## PART 3: Asset List Required

- No external illustration assets - the tower/observers figure is hand-authored inline SVG (per the illustration cookbook, no fetched/generated files).
- `_template/assets/serial-num-badge.svg`, `_template/assets/logo.png` (copied locally into `q27/assets/`).
- `design-system.css`, `animations.js` (copied locally into `q27/`).

## PART 4: Animation Complexity Notes

- Two independent angle-arc derivations in one figure (30 deg at A, standard orientation; 45 deg at B, horizontally+vertically mirrored transform since B's adjacent ray points -x). Each has its own atan2 check in the HTML comment.
- Pinned illustration is an exact coordinate copy (`viewBox="0 0 560 500"`) at render scale 0.48 (269x240), with pinned chip font-size bumped to 46px to keep effective size >=21px at that smaller scale.
- Step 1 and Step 3 cards run long (19s, 21s) - kept alive via pinned-illustration LINK pulses rather than splitting into extra cards, since each is one continuous algebraic derivation.
- All divisions use `.frac`; no bare "root"/"÷" words or characters in on-screen math - use "√" (root sign) glyph and theta glyph where needed (not needed for this specific question, but the rule is honored across the build).

## PART 5: Master Timeline Overview

```
TIME(s)   EVENT
0.3       Question card + serial badge start rising in (heroEnterLowered)
3.6       Question card / badge settle at resting position
4.2       Ground line draws in
4.94/5.4  Observer icons A / B pop in
7.8       "60 m" total-distance bracket pops in
10.6      Tower grows from ground
11.2      Right-angle marker fades in
11.8/12.6 Sight lines (dashed) draw in, A then B
13.6/13.9 30 deg arc + chip reveal
14.3/14.6 45 deg arc + chip reveal
19.0      Tower emphasize pulse ("draw the tower in the middle")
21.2      h arrow + role chip pop in
23.6      x role chip pops in
32.8      60-x role chip pops in
38.2      Full-figure emphasize pulse ("the figure is clear")
37.56     PIN_TIME - question + illustration glide to pinned slots
38.5      GIVEN_TIME - Given card enters, restates h / x / 60-x
39.6      Given card morphs to stack
40.5      Step 1 card enters (tan45 derivation)
45.4/51.9/53.2  LINK pulses on pinned 45 deg chip / h arrow / 60-x chip
57.9      Step 1 answer emphasize ("Got it? Perfect.")
58.2      Step 1 morphs to stack; g-1 connector line grows
59.4      Step 2 card enters (tan30 derivation)
62.2/68.15 LINK pulses on pinned 30 deg chip / x chip
69.9      Step 2 morphs to stack; 1-2 connector line grows
70.8      Step 3 card enters (substitution + rationalization)
87.9      Step 3 answer emphasize ("Done and dusted.")
90.9      Step 3 morphs to stack; 2-3 connector line grows
91.9      Stack answer LINK pulse
92.0      Pinned illustration fades out; question recenters
92.2      Options grid fades in
92.6      Options stagger in
95.9      Correct option (C) pulses green
97.979    END_FADE_TIME - everything fades out together (1.2s)
99.4      TIMELINE_END
```
