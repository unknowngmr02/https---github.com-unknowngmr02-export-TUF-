# Storyboard - Trigonometry Q39 (Tower, Observer Rises 20 m)

Narration duration (`transcript.json`): **88.319s**. Every timestamp below is a real
`transcript.json` word/phrase start - none invented or copied from another question.

Question: from the ground, angle of elevation to a tower top is 60°. A person moves 20 m
up the same vertical line; from there the angle becomes 30°. Find the tower height.
Answer: **30 m (Option C)**. `h = 30`, horizontal distance `d = h/√3 ≈ 17.3`.

---

## PART 1: Narration Beat Analysis

| # | Time | Narration | Educational purpose | Attention focus | Visual objective |
|---|------|-----------|---------------------|------------------|-------------------|
| 1 | 0.12-3.60 | "So welcome back again, it's time to solve one more problem." | Hook | Question card | Card + serial badge land |
| 2 | 3.96-5.58 | "In this problem, we have a tower." | Set up scene | Tower | Ground draws, tower grows to true height |
| 3 | 6.08-10.38 | "From the ground, the angle of elevation to the top of the tower is sixty degrees." | Give angle 1 | Observer -> tower top | Person pops at ground, sight line 1 draws, arc 1 + "60°" chip |
| 4 | 10.82-13.90 | "Then a person moves twenty meter upward along the same vertical line." | Give the rise | Vertical climb | Person icon animates up the vertical line; "20 m" arrow + chip pop |
| 5 | 14.44-17.28 | "From there, the angle of elevation becomes thirty degrees." | Give angle 2 | Elevated observer -> tower top | Sight line 2 draws, arc 2 + "30°" chip |
| 6 | 17.84-19.50 | "We need to find the height of the tower." | State the goal | Tower | Tower pulses |
| 7 | 19.92-26.12 | "Let the height of the tower be h meter and let the horizontal distance from the observer to the tower be d meter." | Name the unknowns | Tower / ground | "h" bracket pops beside tower; "d" bracket pops below ground |
| 8 | 26.62-28.42 | "Notice one important thing." | Flag the key insight | h/d chips | Both chips pulse together |
| 9 | 28.80-36.90 | "When the observer moves up by twenty meters, the horizontal distance d remains the same. Only the remaining height changes to h minus twenty." | The insight itself | Pinned figure | pinFlow into Phase 2; Given card opens with this exact insight as its 3 lines |
| 10 | 37.60-53.86 | "So using tan sixty degrees... h upon d... tan sixty degrees is equal to root three... rearranging, d equal to h upon root three." | Solve for d | Growing equation | Step 1 card: tan60°=h/d -> tan60°=√3 -> √3=h/d -> d=h/√3 |
| 11 | 54.66-72.10 | "Now use the thirty-degree angle for remaining height h minus twenty... tan thirty degrees equal to h minus twenty upon d... equal to one upon root three... substituting the value of d..." | Set up + substitute | Growing equation | Step 2 card builds the substituted equation |
| 12 | 74.66-86.14 | "After simplifying, two h equal to sixty. Therefore h equal to thirty. Done and dusted. Hence the height of the tower is thirty meter." | Solve + confirm | Final answer | Step 3 card: 2h=60 -> h=30, LINK to green tower |
| 13 | 86.72-88.32 | "So option C is the correct answer." | Confirm | Options grid | Option C pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 - Cold open (0.0s-3.6s)
**VOICEOVER:** "So welcome back again, it's time to solve one more problem."
**VISUAL OBJECTIVE:** Establish the question card as the hero object.
**ON-SCREEN ELEMENTS:** `#q-full-card` (lowered start), `#serial-num`.
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)` starting 0.3s; serial badge pop at 0.8s, rising with the card at 3.6s.
**TRANSITIONS:** N/A (opening).
**EDUCATIONAL PURPOSE:** Orient the viewer before any numbers appear.
**CONTINUITY FROM PREVIOUS SCENE:** N/A, frame 0.

### SCENE 2 - Tower + ground observer (3.6s-10.38s)
**VOICEOVER:** "...we have a tower. From the ground, the angle of elevation to the top of the tower is sixty degrees."
**VISUAL OBJECTIVE:** Draw ground + tower to true final height, plant the observer exactly on the ground, then draw the first 60° sight line.
**SCREEN LAYOUT:** `#illustration`, viewBox `0 0 600 760`, ground at y=620.
**ON-SCREEN ELEMENTS:** `#ground-line`, `#tower-rect` (grows 0->300 at x=310), `#person-icon` (eye+stick, both zero-length at A), `#sight-line-1` (A->T), `#right-angle-1`, `#angle-arc-1`, `#chip-60`.
**ANIMATION DETAILS:**
- 4.0s: `#ground-line` strokeDashoffset 330->0, 0.6s `power2.out`.
- 5.0s ("tower."): `#tower-rect` grows via `attr:{height:300,y:320}`, 0.7s `power2.out`.
- 5.8s: `#person-icon` pops in at A=(150,620) (`scale 0.6->1`, `back.out(1.6)`, 0.4s) - stick length 0, eye sits directly on the ground.
- 6.4s ("the angle of elevation"): `#sight-line-1` strokeDashoffset 346.3->0, 0.7s `power2.out`.
- 7.6s: `#right-angle-1` fades in, 0.3s.
- 9.42s ("sixty"): `#angle-arc-1` opacity 0->1, 0.4s (opacity-only); `#chip-60` pops `back.out(1.6)`, 0.35s.
**EDUCATIONAL PURPOSE:** The observer standing exactly on the ground literally IS the 60° vertex - no abstraction.
**ATTENTION MANAGEMENT:** Beat every 0.6-1.2s, well under the 3s ceiling.
**CONTINUITY FROM PREVIOUS SCENE:** Question card has just settled at its lowered rest; illustration begins directly beneath it, same frame, no cut.

### SCENE 3 - The climb + second angle (10.82s-17.28s)
**VOICEOVER:** "Then a person moves twenty meter upward along the same vertical line. From there, the angle of elevation becomes thirty degrees."
**VISUAL OBJECTIVE:** Animate the SAME person icon climbing 20 m up the true vertical (no new object - object continuity), then draw the second sight line and arc.
**ON-SCREEN ELEMENTS:** `#person-icon` (stick + eye animate upward), `#arrow-20m`, `#chip-20m`, `#sight-line-2` (A2->T), `#right-angle-2`, `#angle-arc-2`, `#chip-30`.
**ANIMATION DETAILS:**
- 11.34s ("moves"): `#person-stick` attr `y2` 620->420, `#person-eye`/`#person-pupil` attr `cy` 620->420, 1.0s `power2.out` - one continuous climb, not a teleport.
- 11.96s ("meter"): `#arrow-20m` fromTo (opacity 0, scaleY 0.7 -> opacity 1, scaleY 1), 0.4s `back.out(1.6)`; `#chip-20m` pops alongside.
- 15.04s ("angle"): `#sight-line-2` strokeDashoffset 199.8->0, 0.6s `power2.out`.
- 15.8s: `#right-angle-2` fades in, 0.3s.
- 16.379s ("thirty"): `#angle-arc-2` opacity 0->1, 0.4s; `#chip-30` pops, 0.35s.
**EDUCATIONAL PURPOSE:** Watching the same eye rise 20 m and a second, shorter sight line appear is the entire geometric setup of the problem in one continuous motion.
**MOTION NOTES:** Arc 2's vertex A2=(150,420) is still the leftmost base vertex of its own triangle (M sits to the right at x=323) - standard (non-mirrored) arc transform applies, same as arc 1.
**CONTINUITY FROM PREVIOUS SCENE:** The ground-level person icon from Scene 2 is the object that climbs here - same `<g>`, animated in place, never replaced.

### SCENE 4 - Naming h and d (17.84s-28.42s)
**VOICEOVER:** "We need to find the height of the tower. Let the height of the tower be h meter and let the horizontal distance from the observer to the tower be d meter. Notice one important thing."
**VISUAL OBJECTIVE:** Fill this long conceptual stretch (10.6s) by giving the two unknowns their own on-screen symbols, then flagging the key insight before it's spoken.
**ON-SCREEN ELEMENTS:** `#h-bracket` + `#chip-h` (right of tower, full height), `#d-bracket` + `#chip-d` (dashed, below ground, spans A to F).
**ANIMATION DETAILS:**
- 17.84s: `apt.emphasize(tl, "#tower-rect", 17.84)`.
- 20.42s ("height"): `#h-bracket` fromTo (opacity 0, scaleY 0.8 -> 1) 0.4s `back.out(1.6)`; `#chip-h` pops.
- 23.619s ("distance"): `#d-bracket` fromTo (opacity 0, scaleX 0.8 -> 1) 0.4s `back.out(1.6)`; `#chip-d` pops.
- 25.0s: `apt.emphasize(tl, "#d-bracket", 25.0)` - filler beat, keeps the 23.6->26.6 stretch alive.
- 26.62s ("Notice"): `apt.emphasize(tl, "#chip-h", 26.62)` then `apt.emphasize(tl, "#chip-d", 27.0)` - both symbols pulse together, foreshadowing the insight about to be spoken.
**EDUCATIONAL PURPOSE:** h and d exist as real labelled quantities on the figure before any algebra starts.
**ATTENTION MANAGEMENT:** No gap exceeds 3s (worst case 23.6->25.0->26.6, each under 1.6s).
**CONTINUITY FROM PREVIOUS SCENE:** Same static figure (both triangles already drawn); only new annotation layers are added, no new geometry.

### SCENE 5 - Pin into Phase 2 + the Given card (27.9s-36.9s)
**VOICEOVER:** "When the observer moves up by twenty meters, the horizontal distance d remains the same. Only the remaining height changes to h minus twenty."
**VISUAL OBJECTIVE:** Glide question + illustration into their pinned slots, then let the Given card state the exact insight being narrated, live, as it's said.
**PIN_TIME = 27.9, GIVEN_TIME = 28.8** (real transcript gap - narration is still on "Notice one important thing" as the glide starts).
**ANIMATION DETAILS:**
- 27.9s: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 27.9)`, `apt.pinFlow(tl, "#illustration", "#illus-pinned", 27.9)`, `apt.fadeOut(tl, "#serial-num", 27.9, 0.5)`.
- 28.8s: `apt.cardEnter(tl, "#card-given .solution-card", 28.8)`, `apt.textReveal(tl, "#card-given .math")` with `.rv` lines at 28.8 ("Angle from ground = 60°, from +20 m = 30°"), 31.46 ("Horizontal distance d stays the same"), 34.1 ("Remaining height = h − 20").
- 36.9s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 36.9)`.
**EDUCATIONAL PURPOSE:** The Given card's text IS the insight sentence, timed to land as it's spoken - not a generic recap.
**CONTINUITY FROM PREVIOUS SCENE:** The full-size illustration is mid-pulse (h/d chips) when the glide begins; the glide carries that state into the shrunk pinned copy.

### SCENE 6 - Step 1: solving for d (37.6s-53.86s)
**VOICEOVER:** "So using tan sixty degrees, tan sixty degrees equal to h upon d, and we know that tan sixty degrees is equal to root three. So now we have root three equal to h upon d. Rearranging this, d equal to h upon root three."
**VISUAL OBJECTIVE:** Grow the equation term by term: identity -> substitute √3 -> rearrange for d.
**ON-SCREEN ELEMENTS:** `#card-step1`, four `.rv` lines.
**ANIMATION DETAILS:**
- 37.6s: `apt.cardEnter(tl, "#card-step1 .solution-card", 37.6)`.
- 40.34s ("ten sixty degrees equal to"): reveal "tan 60° = h/d".
- 42.34s ("h upon d", LINK): `apt.emphasize(tl, "#h-bracket-pinned", 42.34)`, `apt.emphasize(tl, "#d-bracket-pinned", 42.34)` - the figure's own h/d brackets pulse as the equation names them.
- 44.659s ("is equal to root three"): reveal "tan 60° = √3".
- 47.819s ("now we have root three"): reveal "√3 = h/d".
- 51.36s ("Rearranging this"): reveal "d = h/√3".
- 53.86s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 53.86)`; `apt.stackLineGrow(tl, "#line-g-1", 53.86)`.
**EDUCATIONAL PURPOSE:** Demonstrates the tan-theta identity concretely before it's used again on the second triangle.
**ATTENTION MANAGEMENT:** Max gap 47.819->51.36 = 3.54s (just over 3s; acceptable, under the 5s ceiling, and the LINK pulse at 42.34 keeps the earlier half dense).
**CONTINUITY FROM PREVIOUS SCENE:** The Given stack card is still completing its 0.8s morph as this card's `cardEnter` begins.

### SCENE 7 - Step 2: the 30° equation + substitution (54.66s-73.72s)
**VOICEOVER:** "Now use the thirty-degree angle for remaining height is h minus twenty. So tan thirty degrees equal to h minus twenty upon d, and tan thirty degrees is equal to one upon root three. Substituting the value of d, one upon root three equal to h minus twenty upon h by root three."
**VISUAL OBJECTIVE:** Mirror Scene 6's structure for the second triangle, then substitute d in directly.
**ANIMATION DETAILS:**
- 54.66s: `apt.cardEnter(tl, "#card-step2 .solution-card", 54.66)`.
- 56.899s ("remaining height is"): reveal "Remaining height = h − 20".
- 59.68s ("tan thirty degrees equal to"): reveal "tan 30° = (h−20)/d".
- 61.5s: `apt.emphasize(tl, "#angle-arc-2-pinned", 61.5)` - filler LINK, the 30° arc pulses as its tangent is used.
- 64.159s ("is equal to one upon root three"): reveal "tan 30° = 1/√3".
- 67.919s ("Substituting the value of d"): reveal "1/√3 = (h−20)/(h/√3)".
- 70.2s: `apt.emphasize(tl, "#chip-d-pinned", 70.2)` - filler, d is the value being substituted in.
- 73.72s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 73.72)`; `apt.stackLineGrow(tl, "#line-1-2", 73.72)`.
**EDUCATIONAL PURPOSE:** Shows the substitution step explicitly rather than skipping to the simplified result.
**ATTENTION MANAGEMENT:** Worst gap 59.68->61.5->64.159 (both under 3s); 67.919->70.2->73.72 (both under 3s).
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is still finishing its box-morph into the stack (text already crossfaded) as Step 2 rises in the same center slot; the G->1 connector line grows in the same beat.

### SCENE 8 - Step 3: simplify to the answer (74.66s-88.32s)
**VOICEOVER:** "After simplifying, two h equal to sixty. Therefore h equal to thirty. Done and dusted. Hence, the height of the tower is thirty meter. So option C is the correct answer."
**VISUAL OBJECTIVE:** Resolve the algebra to `h = 30`, confirm it in green on the pinned tower, then reveal options.
**ANIMATION DETAILS:**
- 74.66s: `apt.cardEnter(tl, "#card-step3 .solution-card", 74.66)`.
- 76.0s ("two"): reveal "2h = 60".
- 78.479s ("Therefore"): reveal "h = 30".
- 78.479s (LINK): `tl.to("#tower-rect-pinned", { stroke: "#4eb85f", duration: 0.3, yoyo: true, repeat: 1 }, 78.479)`, `apt.fadeIn(tl, "#chip-h-done-pinned", 78.479)`.
- 82.139s ("Done and dusted"): `apt.emphasize(tl, "#chip-h-done-pinned", 82.139)` - filler, holds the result alive through the confirmation phrase.
- 83.659s ("Hence...thirty meter"): reveal "Height of tower = 30 m" (`.ans`).
- 85.0s: `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 85.0)`; `apt.stackLineGrow(tl, "#line-2-3", 85.0)`.
- 85.2s: `apt.fadeOut(tl, "#illus-pinned", 85.2)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 85.2)`.
- 85.6s: `apt.fadeIn(tl, "#options-reveal", 85.6)`.
- 86.0s: `apt.optionsStagger(tl, ".opt-btn", 86.0)`.
- 87.259s ("C"): `apt.correctPulse(tl, ".opt-btn.correct", 87.259)`.
- **END_FADE_TIME = 88.919** (88.319 + 0.6): `apt.fadeOut(tl, "#root > div", 88.919, 1.2)`.
- `tl.set({}, {}, 90.319)` - 88.919 + 1.2 + 0.2, final marker, nothing beyond.
**EDUCATIONAL PURPOSE:** The payoff line - h=30 is confirmed on the actual tower in the figure before the options even appear.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 completes its morph into the stack as Step 3 rises in the same slot; the 1->2 connector line grows in step.

---

## PART 3: Asset List Required

- No external SVG/PNG assets - illustration is 100% hand-authored inline SVG.
- `design-system.css`, `animations.js`, `assets/` copied locally into `q39/`.
- `voiceover.wav` (copied from the ElevenLabs export), `transcript.json` / `transcript.txt` (generated this session).

## PART 4: Animation Complexity Notes

- Single person icon (`#person-icon`) used for BOTH observer positions - it climbs 20 m via one `attr` tween (`y2`/`cy` 620->420) rather than two separate objects, preserving object continuity.
- Two independent angle arcs, each with its own vertex/derivation comment. Both A=(150,620) and A2=(150,420) are the LEFTMOST vertex of their own triangle (M and F sit to the right at x=323), so both arcs use the standard (non-mirrored) `translate(0,2*cy) scale(1,-1)` transform - no mirroring needed this time, unlike q38.
- The horizontal distance d is genuinely identical in both triangles (both base vertices sit at x=323, both angle vertices at x=150) - this is drawn to be true, not just stated, which is the visual payoff of "d remains the same."
- Growing equations use `.frac` for every division - no bare `÷`/`÷` character anywhere; symbols (√, °) used throughout instead of spelled-out words.
- No new `animations.js` helpers required; all illustration motion uses inline `tl.to()`/`tl.fromTo()` plus existing `apt.*` calls.

## PART 5: Master Timeline Overview

```
0.0    Background + question card + serial badge
3.6    Question card rises to rest
4.0    Ground draws
5.0    Tower grows to true height (300 units = 30 m)
5.8    Person icon pops in at ground (eye = angle vertex A)
6.4    Sight line 1 draws (A -> tower top)
7.6    Right-angle marker 1
9.42   Angle arc 1 + "60°" chip
11.34  Person climbs 20 m up the true vertical (one continuous tween)
11.96  "20 m" arrow + chip
15.04  Sight line 2 draws (A2 -> tower top)
15.8   Right-angle marker 2
16.379 Angle arc 2 + "30°" chip
17.84  Tower emphasis ("we need to find the height")
20.42  "h" bracket + chip (full tower height)
23.619 "d" bracket + chip (horizontal distance, dashed)
25.0   d-bracket filler pulse
26.62-27.0  h/d chips pulse together ("notice one important thing")
27.9   PIN_TIME - pinFlow into Phase 2
28.8   GIVEN_TIME - Given card enters, states the d-stays-same insight live
31.46  "...d stays the same" line
34.1   "...remaining height = h - 20" line
36.9   Given -> stack morph
37.6   Step 1 card enters (solve for d)
40.34-51.36  Equation grows: tan60=h/d -> tan60=root3 -> root3=h/d -> d=h/root3
42.34  LINK: h/d brackets pulse on pinned figure
53.86  Step 1 -> stack morph, G-1 line grows
54.66  Step 2 card enters (30° equation + substitution)
56.899-70.2  Remaining-height line -> tan30 eq -> tan30=1/root3 -> substituted eq
61.5   Filler LINK: 30° arc pulses
70.2   Filler LINK: d chip pulses
73.72  Step 2 -> stack morph, 1-2 line grows
74.66  Step 3 card enters (simplify to answer)
76.0   "2h = 60"
78.479 "h = 30" + LINK: tower turns green, h-done chip fades in
82.139 Filler: h-done chip pulses ("done and dusted")
83.659 Final restated answer "Height of tower = 30 m"
85.0   Step 3 -> stack morph, 2-3 line grows
85.2   Illustration fades, question recenters for options
85.6   Options grid fades in
86.0   Options stagger in
87.259 Correct option C pulses ("...option C...")
88.919 Everything fades out (1.2s)
90.319 Final marker - nothing beyond
```
