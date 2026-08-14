# Storyboard - Trigonometry q29

Question: "A road rises 10 m for every 10√3 m of horizontal distance. Find its angle of inclination."
Options: A) 30° (correct)  B) 45°  C) 60°  D) 15°
Solution: tan θ = 10/10√3 = 1/√3, so θ = 30°

NARR_END = 78.959 (transcript.json duration)
END_FADE_TIME = 79.56 (NARR_END + 0.6)
FADE_DUR = 1.2
TIMELINE_END = 80.96 (END_FADE_TIME + 1.2 + 0.2)

---

## PART 1: Narration Beat Analysis

| # | Time | Narration | Purpose | Attention focus | Visual objective |
|---|------|-----------|---------|------------------|-------------------|
| 1 | 0.12-4.26 | "So welcome back again. It's time to solve one more problem." | Hook | Question card | Question card rises into frame |
| 2 | 5.20-10.62 | "In this problem, a road rises ten meters for every ten root three meters of horizontal distance." | State the raw numeric fact | Illustration | Road (hyp) and ground (base) lines draw in as the numbers are spoken |
| 3 | 11.64-13.04 | "What does this mean in simple words?" | Rhetorical bridge | Illustration | Soft pulse on the drawn lines (keeps screen alive during the pause) |
| 4 | 13.58-17.40 | "It means if we draw the road and the ground, they form a right triangle." | Name the shape | Illustration | Right-angle marker appears; triangle fill wash confirms the shape |
| 5 | 18.44-21.16 | "The upward rise becomes the height, which is ten meters," | Label height | Illustration | Height arrow pops, "10 m" label lands on "ten meters" |
| 6 | 22.08-26.42 | "and the horizontal distance becomes the base, which is ten root three meters." | Label base | Illustration | Base arrow pops, "10√3 m" label lands on "ten root three meters" |
| 7 | 27.22-32.06 | "And the problem is asking us to find the angle made by the road with the ground." | State the unknown | Illustration | Height/base labels pulse together (recap before angle is introduced) |
| 8 | 32.74-33.92 | "So let us call this angle theta." | Name θ | Illustration | Angle arc fades in, "θ" chip pops at the vertex |
| 9 | 35.00-36.28 | "Here we know two things already." | Transition | Question + illustration pin | pinFlow glide to Phase 2 |
| 10 | 36.82-39.10 | "We know the height and we know the base." | Restate givens | Given card | Given card enters with height, base, find-θ |
| 11 | 39.62-46.38 | "Whenever height and base are given, the trigonometric ratio that connects them is tan theta," | Introduce tan θ | Pinned illustration | height/base sides on the pinned figure recolor green in turn (LINK) |
| 12 | 47.12-56.36 | "as tan theta equals height upon base, so tan theta equals ten upon ten root three. After simplifying this, the ten gets canceled." | Build & simplify the ratio | Step 1 card | Equation grows term by term; "10" cancels with a pulse |
| 13 | 56.72-60.02 | "This becomes tan theta equals one upon root three." | Simplified ratio | Step 1 card | Final ratio line reveals as the Step 1 answer |
| 14 | 60.36-64.64 | "Now this is where the question becomes easy. We already know one standard value." | Bridge to standard value | Step 2 card (about to enter) | Pulse on the pinned θ chip, anticipating the match |
| 15 | 65.02-69.46 | "Tan thirty degree is equal to one upon root three, so theta must be thirty degree." | Match standard value, solve | Step 2 card | tan 30° = 1/√3 line, then θ = 30° answer |
| 16 | 70.08-71.10 | "Got it? Perfect." | Confirmation | Step 2 answer | Pulse on the answer span |
| 17 | 71.80-75.30 | "Hence, the angle of inclination of the road is thirty degrees." | Restate conclusion | Pinned illustration | Angle arc + θ chip flip to confirmed green |
| 18 | 75.84-78.96 | "So the final answer will be option A, thirty degrees." | Reveal answer | Options grid | Options fade in, stagger, correct option (A) pulses |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 - Question entrance (0.0 - 5.3s)
- TIMESTAMP: 0.3 (questionEnter/heroEnterLowered), 0.8 (serial badge), RISE_TIME 5.3
- VOICEOVER: "So welcome back again. It's time to solve one more problem."
- VISUAL OBJECTIVE: Establish the question on a lowered hero position, then rise to resting slot as the illustration is about to begin.
- SCREEN LAYOUT: Question card centered, lowered by 180px; serial badge top-left.
- ON-SCREEN ELEMENTS: `#q-full-card` (text: "A road rises 10 m for every 10√3 m of horizontal distance. Find its angle of inclination."), `#serial-num`.
- ANIMATION DETAILS: `apt.heroEnterLowered(tl,"#q-full-card",180,5.3)` fromTo y:230->180 scale 0.92->1 opacity 0->1, 0.7s back.out(1.4) at 0.3; rises to y:0 at 5.3, 0.6s power2.inOut. `apt.serialEnter(tl,"#serial-num",0.8)`, then a matching rise tween to y:0 at 5.3.
- CAMERA MOVEMENT: none (static camera, motion is in-element).
- TRANSITIONS: none yet.
- EDUCATIONAL PURPOSE: give the viewer the full question text before any geometry appears.
- VISUAL HIERARCHY: question card > serial badge.
- ATTENTION MANAGEMENT: nothing else on screen competes.
- MOTION NOTES: back.out easing gives a soft settle, not a bounce.
- CONTINUITY FROM PREVIOUS SCENE: video opens cold; background layers (dotted grid, bottom strip, topic name, logo) are already present at t=0.

### SCENE 2 - Illustration builds: road and ground (5.3 - 13.0s)
- TIMESTAMP: 6.4 (road/hyp draws), 8.5 (ground/base draws), 11.7 (pulse fill)
- VOICEOVER: "...a road rises ten meters for every ten root three meters of horizontal distance. What does this mean in simple words?"
- VISUAL OBJECTIVE: The two real physical lines (the inclined road, the flat ground) draw themselves in stroke-by-stroke as their numbers are spoken.
- SCREEN LAYOUT: Illustration wrapper centered below the question card.
- ON-SCREEN ELEMENTS: `#road-line` (hypotenuse A-C, blue, solid), `#ground-line` (base A-B, blue, solid).
- ANIMATION DETAILS: `#road-line` strokeDashoffset 231->0, 0.7s power2.out at 6.4. `#ground-line` strokeDashoffset 200->0, 0.6s power2.out at 8.5. At 11.7, `apt.emphasize(tl,"#road-line",11.7)` (yoyo scale pulse) fills the rhetorical-question pause.
- CAMERA MOVEMENT: none.
- TRANSITIONS: continuous draw-in, no cuts.
- EDUCATIONAL PURPOSE: ties the spoken numbers directly to physical lines appearing on screen.
- VISUAL HIERARCHY: road line (primary object) leads, ground line follows.
- ATTENTION MANAGEMENT: only two elements exist, so focus stays tight.
- MOTION NOTES: power2.out draw-in reads as a pen tracing the line.
- CONTINUITY FROM PREVIOUS SCENE: the question card has just finished rising to rest; the illustration wrapper (already mounted, all children opacity:0) begins drawing immediately under it.

### SCENE 3 - Right triangle confirmed (13.6 - 21.2s)
- TIMESTAMP: 13.9 (right-angle marker), 17.1 (triangle fill wash), 18.8/20.96 (height arrow/label), 23.0/25.16 (base arrow/label, spills into Scene 4)
- VOICEOVER: "It means if we draw the road and the ground, they form a right triangle. The upward rise becomes the height, which is ten meters,"
- VISUAL OBJECTIVE: confirm the right-angle, wash the triangle interior, then measure the height.
- SCREEN LAYOUT: same illustration wrapper, right-angle marker at B, height arrow to the right of BC.
- ON-SCREEN ELEMENTS: `#right-angle` (black path marker at B), `#tri-fill` (polygon A-B-C, --primary-light wash), `#arrow-h` + `#label-h` ("10 m").
- ANIMATION DETAILS: `#right-angle` opacity 0->1, 0.3s at 13.9. `#tri-fill` opacity 0->0.4, 0.5s at 17.1. `#arrow-h` fromTo opacity 0/scale 0.7 -> opacity 1/scale 1, 0.35s back.out(1.8) at 18.8. `#label-h` fromTo opacity 0/x +6 -> opacity 1/x 0, 0.35s back.out(1.6) at 20.96 (lands exactly on the word "ten").
- CAMERA MOVEMENT: none.
- TRANSITIONS: none.
- EDUCATIONAL PURPOSE: the abstract "road + ground" statement becomes a labeled right triangle.
- VISUAL HIERARCHY: right-angle marker and wash first (shape), then the height measurement (value).
- ATTENTION MANAGEMENT: wash uses low opacity (0.4) so it never competes with line strokes.
- MOTION NOTES: arrow pop uses back.out(1.8) for a crisp snap; label uses back.out(1.6), slightly softer.
- CONTINUITY FROM PREVIOUS SCENE: both lines from Scene 2 are still fully drawn and visible; the marker and wash are added on top of them without disturbing them.

### SCENE 4 - Base measured, question restated (22.1 - 33.9s)
- TIMESTAMP: 23.0 (base arrow), 25.16 (base label), 27.5 (recap pulse), 29.9 (angle arc), 33.6 (θ chip)
- VOICEOVER: "and the horizontal distance becomes the base, which is ten root three meters. And the problem is asking us to find the angle made by the road with the ground. So let us call this angle theta."
- VISUAL OBJECTIVE: measure the base, recap both measurements, then introduce θ at the vertex.
- SCREEN LAYOUT: base arrow below AB; angle arc and θ chip at vertex A.
- ON-SCREEN ELEMENTS: `#arrow-base` + `#label-base` ("10√3 m"), `#angle-arc`, `#chip-theta`.
- ANIMATION DETAILS: `#arrow-base` fromTo opacity 0/scaleX 0.6 -> opacity 1/scaleX 1, 0.4s back.out(1.6) at 23.0. `#label-base` fromTo opacity 0/y +6 -> opacity 1/y 0, 0.35s back.out(1.6) at 25.16. At 27.5, `apt.emphasize` on `#label-h` and `#label-base` together (recap pulse, narration is asking "what angle"). `#angle-arc` opacity 0->1, 0.4s at 29.9 (opacity-only, per angle-arc constitution). `#chip-theta` opacity 0/scale 0.85 -> opacity 1/scale 1, 0.35s back.out(1.6) at 33.6.
- CAMERA MOVEMENT: none.
- TRANSITIONS: none.
- EDUCATIONAL PURPOSE: both knowns are now visibly labeled; the unknown (θ) is introduced last, at the exact vertex it belongs to.
- VISUAL HIERARCHY: base label completes the triangle's data; angle arc + chip is the new, most important element.
- ATTENTION MANAGEMENT: the 27.5 recap pulse prevents a dead gap between finishing the base label and starting the angle arc.
- MOTION NOTES: angle arc is opacity-only per the angle-arc constitution (never tween `--angle`).
- CONTINUITY FROM PREVIOUS SCENE: the height arrow/label from Scene 3 remain on screen unchanged; the base arrow is added below the ground line so no established element moves.

### SCENE 5 - Pin to Phase 2 (34.9s)
- TIMESTAMP: PIN_TIME = 34.9
- VOICEOVER: "Here we know two things already."
- VISUAL OBJECTIVE: the full question and illustration glide into their pinned Phase-2 slots.
- SCREEN LAYOUT: question moves to top-pinned position; illustration moves to left-pinned column.
- ON-SCREEN ELEMENTS: `#q-full-card` -> `#q-pinned`, `#illustration` -> `#illus-pinned`, `#serial-num` fades out.
- ANIMATION DETAILS: `apt.pinFlow(tl,"#q-full-card","#q-pinned",34.9)`, `apt.pinFlow(tl,"#illustration","#illus-pinned",34.9)`, `apt.fadeOut(tl,"#serial-num",34.9,0.5)`.
- CAMERA MOVEMENT: none (the glide is the "camera move").
- TRANSITIONS: pinFlow (0.8s glide), not a fade swap.
- EDUCATIONAL PURPOSE: frees center-stage for the solution cards while keeping the diagram visible as a constant reference.
- VISUAL HIERARCHY: question and illustration move together, same start time, so they read as one composed shift.
- ATTENTION MANAGEMENT: serial badge fades out since it has no role once the layout locks into solving mode.
- MOTION NOTES: power2.inOut glide, 0.8s.
- CONTINUITY FROM PREVIOUS SCENE: theta chip and angle arc from Scene 4 are still visible at the moment the glide starts, and travel with the illustration into its pinned slot.

### SCENE 6 - Given card (36.8 - 39.3s)
- TIMESTAMP: GIVEN_TIME = 36.8, morph at 39.3
- VOICEOVER: "We know the height and we know the base."
- VISUAL OBJECTIVE: restate the two knowns and the goal as a compact card.
- SCREEN LAYOUT: center solution-card.
- ON-SCREEN ELEMENTS: `#card-given .solution-card` with chip "Given" and three `.rv` lines.
- ANIMATION DETAILS: `apt.cardEnter(tl,"#card-given .solution-card",36.8)`. `apt.textReveal(tl,"#card-given .math")` reveals `Height = 10 m` (data-t 20.96, its true first-mention time), `Base = 10√3 m` (data-t 25.16), `Find: θ (angle of inclination)` (data-t 33.6) - all earlier than the card's own entrance, so the text is already fully visible the instant the card appears (a deliberate recap, matching the reference build's Given-card convention). `apt.morphToStack(tl,"#card-given .solution-card","#stack-given .stack-card",39.3)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: cardEnter in, morphToStack out (0.8s).
- EDUCATIONAL PURPOSE: consolidates the two knowns before the ratio is introduced.
- VISUAL HIERARCHY: card is the sole center focus; pinned illustration sits quietly to the side as reference.
- ATTENTION MANAGEMENT: none competing.
- MOTION NOTES: standard cardEnter (0.55s back.out(1.4)).
- CONTINUITY FROM PREVIOUS SCENE: pinFlow from Scene 5 has just landed; the pinned question/illustration are static and settled when this card enters.

### SCENE 7 - Step 1: build and simplify the ratio (40.3 - 60.3s)
- TIMESTAMP: card enter 40.3; pinned LINK pulses 39.98, 40.68, 42.0, 45.7; rv lines 47.32/47.92/48.32, 50.04/50.66/51.04, cancel pulses 53.46/55.0, final ratio 57.9; morph 60.3
- VOICEOVER: "Whenever height and base are given, the trigonometric ratio that connects them is tan theta, as tan theta equals height upon base, so tan theta equals ten upon ten root three. After simplifying this, the ten gets canceled. This becomes tan theta equals one upon root three."
- VISUAL OBJECTIVE: grow the equation term by term, term-linked to the pinned figure, ending on the simplified ratio.
- SCREEN LAYOUT: center solution-card; pinned illustration at left reacts alongside.
- ON-SCREEN ELEMENTS: `#card-step1 .solution-card` (chip "Step 1"), `#label-h-pinned`, `#label-base-pinned`, `#chip-theta-pinned`.
- ANIMATION DETAILS: `apt.cardEnter(tl,"#card-step1 .solution-card",40.3)`. LINK pulses (recolor + emphasize) on the pinned height label at 39.98 ("height"), pinned base label at 40.68 ("base"), a joint emphasize on both at 42.0 ("trigonometric ratio"), and the pinned θ chip at 45.7 ("tan theta"). `apt.textReveal(tl,"#card-step1 .math")` reveals: "tan θ" @47.32, "=" @47.92, frac(height/base) @48.32; "tan θ" @50.04, "=" @50.66, frac(10/10√3) @51.04; a strike/pulse on both "10"s at 53.46 and 55.0 (cancellation, `apt.emphasize` on `#sub-10-num` and `#sub-10-den`); final line "tan θ = " @57.9 with the answer fraction (1/√3) as `.ans`. `apt.morphToStack(tl,"#card-step1 .solution-card","#stack-step1 .stack-card",60.3)`, `apt.stackLineGrow(tl,"#line-g-1",60.3)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: cardEnter in, morphToStack out.
- EDUCATIONAL PURPOSE: this is the core algebra step - the LINK pulses tie the abstract ratio back to the concrete diagram values.
- VISUAL HIERARCHY: equation growth is the lead; pinned-figure pulses are secondary confirmations.
- ATTENTION MANAGEMENT: the four early LINK pulses (39.98-45.7) fill what would otherwise be a 7s dead gap between card-enter and the first `.rv` reveal at 47.32.
- MOTION NOTES: `.rv` reveals are plain opacity fades (0.25s) per `apt.textReveal`; LINK pulses use `apt.emphasize` (0.3s yoyo scale) plus a stroke/color recolor to `--success` and back.
- CONTINUITY FROM PREVIOUS SCENE: the Given card has just finished its 0.8s morph into the stack column; Step 1 enters 1.0s after that morph started, while the stack card is settling into place on the left.

### SCENE 8 - Step 2: match the standard value (61.3 - 70.3s)
- TIMESTAMP: card enter 61.3; recap pulse 63.0; rv lines 65.02, 67.82; confirm pulse 70.1; morph 70.3
- VOICEOVER: "Now this is where the question becomes easy. We already know one standard value. Tan thirty degree is equal to one upon root three, so theta must be thirty degree. Got it? Perfect."
- VISUAL OBJECTIVE: compare the simplified ratio to the standard tan 30° value and conclude θ = 30°.
- SCREEN LAYOUT: center solution-card.
- ON-SCREEN ELEMENTS: `#card-step2 .solution-card` (chip "Step 2").
- ANIMATION DETAILS: `apt.cardEnter(tl,"#card-step2 .solution-card",61.3)`. At 63.0, `apt.emphasize(tl,"#chip-theta-pinned",63.0)` (anticipation pulse during "we already know one standard value"). `apt.textReveal(tl,"#card-step2 .math")` reveals "tan 30° = 1/√3 (standard value)" @65.02 and the answer line "θ = 30°" @67.82 (`.ans`). At 70.1, `apt.emphasize(tl,"#card-step2 .ans",70.1)` (confirmation pulse on "Got it? Perfect."). `apt.morphToStack(tl,"#card-step2 .solution-card","#stack-step2 .stack-card",70.3)`, `apt.stackLineGrow(tl,"#line-1-2",70.3)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: cardEnter in, morphToStack out.
- EDUCATIONAL PURPOSE: this is the payoff step - recognizing the standard angle value.
- VISUAL HIERARCHY: the θ = 30° answer is the visual climax of the whole solve.
- ATTENTION MANAGEMENT: the 63.0 pulse fills the 3.7s gap between card-enter and the first `.rv`.
- MOTION NOTES: same textReveal/emphasize vocabulary as Scene 7.
- CONTINUITY FROM PREVIOUS SCENE: Step 1's morph (60.3) has just completed and its stack card is landing on the left as this card enters at 61.3, 1.0s after the morph start.

### SCENE 9 - Confirm on the diagram, then reveal options (71.4 - 78.96s)
- TIMESTAMP: 71.8 (arc/chip confirm), 75.4 (RECENTER_TIME, illus-pinned fadeOut + q-pinned recenter), 76.0 (options fadeIn), 76.5 (optionsStagger), 78.1 (correctPulse)
- VOICEOVER: "Hence, the angle of inclination of the road is thirty degrees. So the final answer will be option A, thirty degrees."
- VISUAL OBJECTIVE: the pinned diagram confirms θ = 30° in green, then the options grid resolves the answer.
- SCREEN LAYOUT: pinned illustration confirms, then clears; options grid (2x2) appears centered where the stack column left space.
- ON-SCREEN ELEMENTS: `#angle-arc-pinned`, `#chip-theta-pinned`, `#illus-pinned`, `#q-pinned`, `#options-reveal`.
- ANIMATION DETAILS: at 71.8, `apt.emphasize(tl,"#angle-arc-pinned",71.8)` plus a border/color tween on the θ-chip's inner div to `--success` (0.3s), confirming the solved angle. At RECENTER_TIME 75.4, `apt.fadeOut(tl,"#illus-pinned",75.4)` and `apt.recenterForOptions(tl,"#q-pinned",160,180,75.4)`. `apt.fadeIn(tl,"#options-reveal",76.0)`, `apt.optionsStagger(tl,".opt-btn",76.5)`, `apt.correctPulse(tl,".opt-btn.correct",78.1)` (lands on "thirty degrees").
- CAMERA MOVEMENT: none.
- TRANSITIONS: fadeOut/recenter, then fadeIn/stagger.
- EDUCATIONAL PURPOSE: the diagram's own confirmation (green arc/chip) closes the loop before the options grid restates it as a multiple-choice answer.
- VISUAL HIERARCHY: green confirm pulse first, then the options grid, then the correct-option pulse as the final beat.
- ATTENTION MANAGEMENT: no dead gap - the confirm pulse (71.8) leads directly into the recenter/fade sequence (75.4-78.1) which is itself the closing beat sequence.
- MOTION NOTES: `apt.correctPulse` is a 0.4s yoyo scale on the correct button only.
- CONTINUITY FROM PREVIOUS SCENE: Step 2's morph (70.3) has just landed its stack card; the pinned illustration is still fully visible and reacts once more (71.8) before clearing for the options grid.

### SCENE 10 - End hold and fade (78.96 - 80.96s)
- TIMESTAMP: END_FADE_TIME 79.56, TIMELINE_END 80.96
- VOICEOVER: (silence after 78.96)
- VISUAL OBJECTIVE: hold the fully solved screen briefly, then fade to close.
- SCREEN LAYOUT: unchanged from Scene 9's final state.
- ON-SCREEN ELEMENTS: everything currently visible.
- ANIMATION DETAILS: `apt.fadeOut(tl,"#root > div",79.56,1.2)`; `tl.set({}, {}, 80.96)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: whole-scene fade.
- EDUCATIONAL PURPOSE: gives the viewer a beat to register the correct answer before the video ends.
- VISUAL HIERARCHY: n/a (fading uniformly).
- ATTENTION MANAGEMENT: n/a.
- MOTION NOTES: 1.2s power2.out-style fade (per `apt.fadeOut` default ease power2.in on the way out).
- CONTINUITY FROM PREVIOUS SCENE: the correct-option pulse from Scene 9 has just settled; nothing new enters, only the hold-then-fade.

---

## PART 3: Asset List Required

- No external image/SVG assets. All geometry is hand-authored inline SVG (road/hyp line, ground/base line, right-angle marker, triangle fill wash, height arrow, base arrow, angle arc, θ chip).
- `.fig-chip` / `.fig-chip-pinned` CSS (copied verbatim from `illustration_reference.md` section 3) added to the question's `<style>` block.
- Shared template assets already copied into the folder: `design-system.css`, `animations.js`, `assets/` (logo, serial-num badge).

## PART 4: Animation Complexity Notes

- Single angle arc, single triangle - no dual-arc geometry needed (unlike q16/q26).
- The angle arc is opacity-only, unitless `--angle: 30`, `cx`/`cy` exactly at vertex A, `translate(0,760)` (2x cy=380) - per the angle-arc constitution in `penelty.txt`.
- Cancellation pulse (the two "10"s) on Step 1 is a plain `apt.emphasize` on each numeral, not a new animation primitive.
- The θ-chip "confirm" beat (Scene 9) tweens the chip div's `border-color`/`color` to `--success` directly with `tl.to()` - a simple color tween, not a new component.
- No `apt.ambientLoop` needed - beat density from LINK pulses and textReveal keeps every window under the 3s ceiling without it.
- Pinned illustration is a coordinate-exact copy of the full-size figure (same viewBox `30 180 400 280`, same internal numbers), only outer width/height and stroke widths shrink.

## PART 5: Master Timeline Overview

```
0.0    Background layers, bottom-strip, topic, logo
0.3    Question card hero enters (lowered)
0.8    Serial badge pops
5.3    Question + serial rise to resting position
6.4    Road (hyp) line draws in
8.5    Ground (base) line draws in
11.7   Pulse fill (rhetorical pause)
13.9   Right-angle marker fades in
17.1   Triangle fill wash
18.8/20.96  Height arrow / "10 m" label pop
23.0/25.16  Base arrow / "10√3 m" label pop
27.5   Recap pulse on both labels
29.9   Angle arc fades in
33.6   "θ" chip pops
[ PIN_TIME 34.9 ]  pinFlow: question + illustration glide to pinned slots
36.8   Given card enters (Height, Base, Find θ - already-revealed recap)
39.3   Given -> stack morph (0.8s)
39.98/40.68/42.0/45.7  LINK pulses on pinned height/base/theta
40.3   Step 1 card enters
47.32-51.04  Equation grows: tan θ = height/base = 10/10√3
53.46/55.0  Cancellation pulse on the two "10"s
57.9   Simplified ratio: tan θ = 1/√3
60.3   Step 1 -> stack morph (0.8s); line-g-1 grows
61.3   Step 2 card enters
63.0   Recap pulse on pinned θ chip
65.02  tan 30° = 1/√3 (standard value)
67.82  θ = 30° (answer)
70.1   Confirmation pulse on the answer
70.3   Step 2 -> stack morph (0.8s); line-1-2 grows
71.8   Pinned angle arc + θ chip flip to confirmed green
75.4   RECENTER_TIME: illus-pinned fades out, q-pinned recenters
76.0   Options grid fades in
76.5   Options stagger in
78.1   Correct option (A, 30°) pulses
[ END_FADE_TIME 79.56 ]  Whole-scene fade (1.2s)
[ TIMELINE_END 80.96 ]  Nothing beyond this
```
