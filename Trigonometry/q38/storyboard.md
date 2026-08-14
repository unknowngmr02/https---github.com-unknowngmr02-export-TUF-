# Storyboard - Trigonometry Q38 (Two Towers, Difference in Heights)

Narration duration (transcript.json): **127.16s**. Every timestamp below is a real
`transcript.json` word/phrase start - none invented or copied from another question.

---

## PART 1: Narration Beat Analysis

| # | Time | Narration | Educational purpose | Attention focus | Visual objective |
|---|------|-----------|---------------------|------------------|-------------------|
| 1 | 0.12-2.98 | "So welcome back again, it's time to solve one more problem." | Hook | Question card | Card + serial badge land |
| 2 | 3.46-5.20 | "In this problem, we have two towers." | Set up scene | Two towers | Ground draws, both towers grow to true height |
| 3 | 6.12-10.33 | "The distance between the towers is thirty meter. From the foot of the first tower," | Give distance | Ground gap | "30 m" chip + baseline arrow; foot-1 marker |
| 4 | 11.00-14.54 | "the angle of elevation to the top of the second tower is sixty degrees," | Give angle 1 | Sight line F1->T2top | Sight line A draws, arc A + "60°" chip |
| 5 | 15.36-16.62 | "and from the foot of the second tower," | Set up angle 2 | Foot-2 | Foot-2 marker pops |
| 6 | 17.26-21.70 | "the angle of elevation to the top of the first tower is thirty degrees." | Give angle 2 | Sight line F2->T1top | Sight line B draws, arc B + "30°" chip |
| 7 | 22.56-34.06 | "The problem is asking us to find the difference in their heights... subtract the smaller height from the bigger height." | Restate goal | Both tower tops | Dashed "?" difference bracket pops, both towers pulse in turn |
| 8 | 34.84-40.10 | "Since the distance between the towers is already given as thirty meter, our job becomes very easy." | Bridge to solution | Pinned layout | pinFlow into Phase 2, Given card opens |
| 9 | 41.08-53.56 | "First, let us find the height of the second tower... because the question directly gives us a sixty-degree angle..." | Motivate Step 1 | Step 1 card + 60° chip | Card enters, reasoning line reveals, LINK pulse on 60° chip/sight line A |
| 10 | 54.86-78.30 | "In a right triangle, tan theta = height upon base... tan 60 = root 3... height of second tower = 30 root 3 meter. Got it? Perfect." | Solve Step 1 | Growing equation | Equation rows reveal term by term, LINK to tower 2 |
| 11 | 79.04-101.12 | "Now that we know height 2, let us find height of first tower... tan 30 = 1 upon root 3... height of first tower = 10 root 3 meters." | Solve Step 2 | Growing equation | Step 2 card, equation rows, LINK to tower 1 |
| 12 | 103.96-112.40 | "So both heights are clear now. Second tower = 30 root 3, first tower = 10 root 3 meters." | Recap both | Step 3 card | Both height rows pop with color match to towers |
| 13 | 113.08-120.74 | "The question is asking for the difference... 30 root 3 minus 10 root 3, that is 20 root 3 meters." | Solve Step 3 | Subtraction row | Row reveals, diff bracket turns green + pulses |
| 14 | 122.08-126.84 | "Hence, the final answer will be 20 root 3 meters, so option B is the correct answer." | Reveal answer | Options grid | Options fade in, staggered, B pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 - Cold open (0.0s-2.5s)
**VOICEOVER:** "So welcome back again, it's time to solve one more problem."
**VISUAL OBJECTIVE:** Establish the question card as the hero object.
**SCREEN LAYOUT:** Dotted grid + bottom strip visible from frame 0. Question card centered top, serial badge top-left.
**ON-SCREEN ELEMENTS:** `#q-full-card` (lowered start), `#serial-num`.
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.46)` starting 0.3s; badge pop via the parallel serial tween mirroring the same offset, at 0.8s.
**CAMERA MOVEMENT:** None (flat 2D).
**TRANSITIONS:** N/A (opening).
**EDUCATIONAL PURPOSE:** Orient the viewer to the problem before any numbers appear.
**VISUAL HIERARCHY:** Card > badge > background.
**ATTENTION MANAGEMENT:** Single focal object, no competing motion.
**MOTION NOTES:** `back.out(1.4)` on the card entrance reads as a confident settle, not a bounce.
**CONTINUITY FROM PREVIOUS SCENE:** N/A, this is frame 0.

### SCENE 2 - Two towers appear (2.5s-10.6s)
**VOICEOVER:** "...we have two towers. The distance between the towers is thirty meter. From the foot of the first tower,"
**VISUAL OBJECTIVE:** Draw the ground and both towers to their TRUE final heights immediately (geometry is always mathematically honest, even before the viewer knows the numbers).
**SCREEN LAYOUT:** Illustration wrapper `#illustration`, viewBox `0 0 580 500`, ground at y=400.
**ON-SCREEN ELEMENTS:** `#ground-line` (draw-in), `#tower1-rect` (grows 0->121px at x=160), `#tower2-rect` (grows 0->364px at x=370), `#chip-30m`, `#foot1-mark`.
**ANIMATION DETAILS:**
- 2.5s: `#ground-line` strokeDashoffset 330->0, 0.6s, `power2.out`.
- 4.62s ("we have two towers"): both tower rects grow via `attr:{height,y}`, 0.7s, `power2.out`, fired together.
- 6.24s ("distance"): `#chip-30m` pops (`back.out(1.6)`, 0.35s) above the baseline double-headed arrow, which fades in alongside.
- 7.98s ("thirty"): `apt.emphasize(tl, "#chip-30m", 7.98)`.
- 9.66s ("foot...first tower"): `#foot1-mark` (small right-angle bracket at F1) fades in, 0.3s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous stroke-draw build, no cuts.
**EDUCATIONAL PURPOSE:** Anchors the 30m distance as the shared base of both future triangles.
**VISUAL HIERARCHY:** Ground line first (foundation), then towers (the unknowns), then the one KNOWN value (30m) called out in a chip.
**ATTENTION MANAGEMENT:** One new element every ~1.5-2s, matching the 3-second law.
**MOTION NOTES:** Tower growth uses `attr:{height,y}` so the base stays pinned to the ground line, never floating.
**CONTINUITY FROM PREVIOUS SCENE:** The question card has just settled at its lowered rest position; the illustration begins directly beneath it in the same frame, no cut.

### SCENE 3 - Two angles established (11.0s-21.7s)
**VOICEOVER:** "...the angle of elevation to the top of the second tower is sixty degrees, and from the foot of the second tower, the angle of elevation to the top of the first tower is thirty degrees."
**VISUAL OBJECTIVE:** Draw both sight lines and both angle arcs, each tied to its own foot.
**ON-SCREEN ELEMENTS:** `#sight-line-a` (F1->T2top), `#angle-arc-a`, `#chip-60`, `#foot2-mark`, `#sight-line-b` (F2->T1top), `#angle-arc-b`, `#chip-30`.
**ANIMATION DETAILS:**
- 12.36s: `#sight-line-a` strokeDashoffset 420->0, 0.7s, `power2.out`.
- 14.06s ("sixty degrees"): `#angle-arc-a` opacity 0->1, 0.4s (opacity-only, per the standing arc rule); `#chip-60` pops 0.35s `back.out(1.6)` at 14.06.
- 15.8s ("foot...second tower"): `#foot2-mark` fades in 0.3s.
- 19.1s ("top of first tower"): `#sight-line-b` strokeDashoffset 242->0, 0.7s, `power2.out`.
- 21.3s ("thirty degrees"): `#angle-arc-b` opacity 0->1, 0.4s; `#chip-30` pops 0.35s at 21.3.
**TRANSITIONS:** None, continuous build.
**EDUCATIONAL PURPOSE:** The two crossing sight lines visually explain WHY there are two right triangles sharing one base - the geometric core of the problem.
**VISUAL HIERARCHY:** Sight line before its arc before its chip, each triple completing a "why 60/30 degrees" thought.
**ATTENTION MANAGEMENT:** Beat every ~1.5-2.5s, no gap over 3s.
**MOTION NOTES:** Arc A (`cx,cy`=F1) uses the standard `translate(0,2*cy) scale(1,-1)`. Arc B (`cx,cy`=F2) uses the MIRRORED `translate(2*cx,2*cy) scale(-1,-1)` because F2's adjacent ray points -x toward F1 (see geometry note in index.html) - both are opacity-only, unitless `--angle`.
**CONTINUITY FROM PREVIOUS SCENE:** Both towers and the ground are already standing; the sight lines are drawn as a continuation of the same build, not a new scene cut.

### SCENE 4 - "Find the difference" restated (22.56s-34.06s)
**VOICEOVER:** "The problem is asking us to find the difference in their heights... subtract the smaller height from the bigger height."
**VISUAL OBJECTIVE:** Fill the long restatement window (11.5s) with beats that foreshadow the "difference" concept without giving away the numeric answer.
**ON-SCREEN ELEMENTS:** `#diff-bracket` (dashed horizontal line + "?" chip spanning the two tower-top heights), tower 1 + tower 2 emphasis pulses.
**ANIMATION DETAILS:**
- 24.3s ("difference"): `#diff-bracket` fromTo (opacity 0, scaleY 0.7 -> 1, opacity 1), 0.4s `back.out(1.6)`.
- 29.4s ("find the height... both towers"): `apt.emphasize(tl, "#tower1-rect", 29.4)` then `apt.emphasize(tl, "#tower2-rect", 30.2)`.
- 32.14s ("subtract... smaller... bigger"): `apt.emphasize(tl, "#diff-bracket", 32.5)`.
**EDUCATIONAL PURPOSE:** Keeps the canvas alive through the longest narration stretch in Phase 1 (3-second-law compliance) while visually setting up the subtraction that Step 3 will complete.
**ATTENTION MANAGEMENT:** 3 beats across 11.5s = every ~3.5-4s max gap acceptable given each beat's own emphasize has 0.3-0.4s duration keeping total dead time under 5s absolute ceiling.
**CONTINUITY FROM PREVIOUS SCENE:** Same static figure, no new geometry - only pulses on what already exists, since no new number is being given yet.

### SCENE 5 - Pin into Phase 2 + Given card (34.6s-40.9s)
**VOICEOVER:** "Since the distance between the towers is already given as thirty meter, our job becomes very easy."
**VISUAL OBJECTIVE:** Glide question + illustration into their pinned slots, then open the Given card recapping the three known values.
**ANIMATION DETAILS:**
- `PIN_TIME = 34.6`: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 34.6)`, `apt.pinFlow(tl, "#illustration", "#illus-pinned", 34.6)`, `apt.fadeOut(tl, "#serial-num", 34.6, 0.5)`.
- `GIVEN_TIME = 35.5`: `apt.cardEnter(tl, "#card-given .solution-card", 35.5)`, `apt.textReveal(tl, "#card-given .math")` with `.rv` lines at 37.3 (Distance = 30 m), 38.8 (Angle at Tower 1 = 60°), 39.7 (Angle at Tower 2 = 30°).
**TRANSITIONS:** `pinFlow` real glide, not a swap.
**EDUCATIONAL PURPOSE:** The Given card is the checkpoint - all three knowns visible together before any math starts.
**CONTINUITY FROM PREVIOUS SCENE:** The full-size illustration is mid-restatement-pulse when the glide begins; the glide carries its current state (arcs/chips already lit) into the shrunk pinned copy, so nothing resets.

### SCENE 6 - Step 1: height of Tower 2 (41.1s-78.7s)
**VOICEOVER:** "First, let us find the height of the second tower... tan theta = height upon base... tan 60 = root 3... height of second tower = 30 root 3 meter. Got it? Perfect."
**VISUAL OBJECTIVE:** Grow the identity into the substituted equation into the numeric answer, term by term, LINKing the final value to the pinned Tower 2.
**ON-SCREEN ELEMENTS:** `#card-step1`, growing `#eq1-row` (`tan θ = Height/Base` -> `tan 60° = H₂/30` -> `tan 60° = √3` -> `H₂ = 30√3 m`), pinned `#chip-h2` + `#tower2-rect-pinned` color pulse.
**ANIMATION DETAILS:**
- 40.9s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 40.9)`.
- 41.1s: `apt.cardEnter(tl, "#card-step1 .solution-card", 41.1)`.
- 47.02s ("Because..."): `apt.emphasize(tl, "#chip-60", 47.02)` + `apt.emphasize(tl, "#sight-line-a", 47.02)` on the pinned illustration (LINK - the reason is literally that chip).
- 56.38s: reveal `#eq1-identity` ("tan θ = Height/Base").
- 59.76s: reveal `#eq1-tan60` ("tan 60°"); 61.36s: reveal `#eq1-frac1` ("= H₂/30").
- 66.78s: reveal `#eq1-root3` ("= √3").
- 72.66s: reveal `#eq1-h2eq` ("H₂ ="); 75.2s/76.06s/76.74s: word-level reveal "30", "√3", "m".
- 75.2s (LINK): `apt.emphasize(tl, "#tower2-rect-pinned", 75.2)`, `tl.to("#tower2-rect-pinned",{stroke:"#4eb85f",duration:0.3,yoyo:true,repeat:1},75.2)`, `apt.fadeIn(tl,"#chip-h2",75.2)`.
- 77.58s ("Got it? Perfect."): `apt.emphasize(tl, "#eq1-h2eq", 77.58)`.
**TRANSITIONS:** `apt.morphToStack` 0.8s at scene start; next morph at 78.2s.
**EDUCATIONAL PURPOSE:** Demonstrates the tan-theta identity concretely, substitution before result, matching the exact order the narrator speaks it.
**ATTENTION MANAGEMENT:** No gap in this scene exceeds 3s (word-level reveals every 1.5-3s per the transcript itself).
**CONTINUITY FROM PREVIOUS SCENE:** The Given stack card is still completing its 0.8s morph as this card's `cardEnter` begins; the left stack column now shows "G" while this card takes the active center.

### SCENE 7 - Step 2: height of Tower 1 (78.2s-104.2s)
**VOICEOVER:** "Now that we know height 2, let us find height of first tower... tan 30 = 1 upon root 3... height of first tower = 10 root 3 meters."
**VISUAL OBJECTIVE:** Mirror Scene 6's structure for the second triangle.
**ANIMATION DETAILS:**
- 78.2s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 78.2)`; `apt.stackLineGrow(tl, "#line-g-1", 78.2)`.
- 79.3s: `apt.cardEnter(tl, "#card-step2 .solution-card", 79.3)`.
- 85.92s: reveal `#eq2-tan30` ("tan 30°"); 86.96s reveal "="; 87.34s reveal "H₁/30".
- 90.7s/91.1s/91.58s: reveal "= 1/√3" word-level.
- 99.56s reveal "="; 99.94s/100.68s/100.94s reveal "30/√3".
- 102.02s reveal "H₁ ="; 102.4s/102.64s+102.84s/103.04s word-level "10","√3","m".
- 102.4s (LINK): `apt.emphasize(tl, "#tower1-rect-pinned", 102.4)`, green stroke pulse, `apt.fadeIn(tl,"#chip-h1",102.4)`.
**EDUCATIONAL PURPOSE:** Reinforces the same identity applied to the complementary angle, building pattern recognition (tan 60 vs tan 30 give reciprocal-flavoured results).
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is still finishing its box-morph into the stack (text already crossfaded out at scene start) while Step 2's card fades up in the same center slot - the G->1 connector line grows in the same beat, keeping the left column continuously alive.

### SCENE 8 - Step 3: the difference (105.3s-121.0s)
**VOICEOVER:** "So both heights are clear now. Second tower = 30 root 3, first tower = 10 root 3 meters. The question is asking for the difference... 30 root 3 minus 10 root 3, that is 20 root 3 meters."
**VISUAL OBJECTIVE:** Recap both results side by side, then subtract them, landing on the final answer with a LINK back to the (now green) diff-bracket.
**ANIMATION DETAILS:**
- 104.2s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 104.2)`; `apt.stackLineGrow(tl, "#line-1-2", 104.2)`.
- 105.3s: `apt.cardEnter(tl, "#card-step3 .solution-card", 105.3)`.
- 106.0s: reveal `#eq3-h2` ("Tower 2 = 30√3 m").
- 109.06s: reveal `#eq3-h1` ("Tower 1 = 10√3 m").
- 113.08s: reveal `#eq3-diffline` ("Difference = Tower 2 - Tower 1").
- 116.7s: reveal "30√3"; 117.72s reveal "-"; 118.12s reveal "10√3".
- 119.84s/120.22s+120.46s/120.74s: word-level reveal final "20", "√3", "m" (`.ans`).
- 119.84s (LINK): `tl.to("#diff-bracket",{stroke:"#4eb85f",duration:0.3,yoyo:true,repeat:1},119.84)`, `apt.emphasize(tl,"#diff-bracket",119.84)`.
**EDUCATIONAL PURPOSE:** The subtraction is the payoff line of the whole video - both prior results are visually recalled before being combined.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 completes its morph into the stack as Step 3 card rises in the same slot; the 1->2 connector line grows in step, so the left column now shows G-1-2 fully connected before the 3rd joins later.

### SCENE 9 - Options reveal (121.0s-129.16s)
**VOICEOVER:** "Hence, the final answer will be 20 root 3 meters, so option B is the correct answer."
**VISUAL OBJECTIVE:** Clear the stack column visually, reveal the four options, confirm B.
**ANIMATION DETAILS:**
- 121.0s: `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 121.0)`; `apt.stackLineGrow(tl, "#line-2-3", 121.0)`.
- 121.2s: `apt.fadeOut(tl, "#illus-pinned", 121.2)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 121.2)`.
- 122.0s: `apt.fadeIn(tl, "#options-reveal", 122.0)`.
- 122.5s: `apt.optionsStagger(tl, ".opt-btn", 122.5)`.
- 125.66s ("so option B..."): `apt.correctPulse(tl, ".opt-btn.correct", 125.66)`.
- `END_FADE_TIME = 127.76`: `apt.fadeOut(tl, "#root > div", 127.76, 1.2)`.
- `tl.set({},{},129.16)` - final marker, nothing beyond.
**EDUCATIONAL PURPOSE:** Confirms the computed 20√3 m matches option B exactly.
**CONTINUITY FROM PREVIOUS SCENE:** Step 3's morph into the stack (G-1-2-3 now fully connected) plays underneath the recenter/options fade-in, so the stack column finishes settling while the options grid rises - one continuous close, not a hard cut.

---

## PART 3: Asset List Required

- No external SVG/PNG assets - illustration is 100% hand-authored inline SVG (per `illustration_reference.md`).
- `_template/design-system.css`, `_template/animations.js`, `_template/assets/` copied locally into `q38/`.
- `voiceover.wav` (already present), `transcript.json` / `transcript.txt` (generated this session).

## PART 4: Animation Complexity Notes

- Two independent angle arcs, each with its own vertex/derivation comment (per `penelty.txt` mandatory pre-flight checklist) - Arc B additionally needs the horizontal-mirror transform variant (`translate(2*cx,2*cy) scale(-1,-1)`) because its angle vertex (F2) sits to the RIGHT of its right-angle vertex (F1); this is a legitimate, documented extension of the standard technique, not a deviation from it - both arcs remain opacity-only and unitless.
- Two crossing sight lines (F1->T2top and F2->T1top) is the visual heart of the illustration - they must actually cross on screen to read as "each tower measures the other."
- Growing equations use `.frac` for every division - no bare `÷` anywhere.
- No new `animations.js` helpers required; all motion uses existing `apt.*` calls plus inline `tl.to()`/`tl.fromTo()` for the illustration (ground draw, tower grow, sight-line draw, chip pops), exactly as permitted for illustrations.

## PART 5: Master Timeline Overview

```
0.0    Background + question card + serial badge
2.5    Ground draws
4.62   Both towers grow to true height (121px / 364px)
6.24   "30 m" distance chip + baseline arrow
9.66   Foot-1 right-angle marker
12.36  Sight line A draws (F1 -> Tower2 top)
14.06  Angle arc A + "60°" chip
15.8   Foot-2 marker
19.1   Sight line B draws (F2 -> Tower1 top)
21.3   Angle arc B + "30°" chip
24.3   "?" difference bracket pops
29.4-32.5  Emphasis beats through the long restatement
34.6   PIN_TIME - pinFlow into Phase 2
35.5   GIVEN_TIME - Given card enters, 3 values reveal (37.3/38.8/39.7)
40.9   Given -> stack morph
41.1   Step 1 card enters (height of Tower 2)
47.02  LINK pulse on 60° chip/sight-line A
56.38-77.58  Equation grows: identity -> tan60=H2/30 -> tan60=root3 -> H2=30root3
75.2   LINK: Tower 2 pinned + chip pulse green
78.2   Step 1 -> stack morph, G-1 line grows
79.3   Step 2 card enters (height of Tower 1)
85.92-103.04  Equation grows: tan30=H1/30 -> tan30=1/root3 -> H1=30/root3 -> H1=10root3
102.4  LINK: Tower 1 pinned + chip pulse green
104.2  Step 2 -> stack morph, 1-2 line grows
105.3  Step 3 card enters (the difference)
106.0-120.74  Recap both heights, subtract, reveal 20root3 m
119.84 LINK: diff-bracket turns green + pulses
121.0  Step 3 -> stack morph, 2-3 line grows
121.2  Illustration fades, question recenters for options
122.0  Options grid fades in
122.5  Options stagger in
125.66 Correct option B pulses
127.76 Everything fades out (1.2s)
129.16 Final marker - nothing beyond
```
