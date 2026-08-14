# Storyboard - Trigonometry Q20 (Pole height, angle of elevation 45deg)

Question: A person's eye level is 1.5 m above the ground. From 18 m away, the angle of
elevation to the top of a pole is 45 degrees. Find the pole height.
Options: A) 18 m  B) 16.5 m  C) 20 m  D) 19.5 m (correct)

Duration (transcript.json): 96.539s. TIMELINE_END = 98.539s.

---

## PART 1: Narration Beat Analysis

| # | Time | Narration | Purpose | Focus | Visual objective |
|---|------|-----------|---------|-------|-------------------|
| 1 | 0.12-3.56 | "So welcome back again. It's time to solve one more problem." | Hook | Center | Question card rises into place |
| 2 | 4.04-8.28 | "a person is standing eighteen meter away from a pole" | Given: distance | Illustration | Person icon + ground line draw, 18m arrow pops |
| 3 | 8.84-11.72 | "eye level is 1.5 meter above the ground" | Given: eye height | Illustration | 1.5m vertical arrow pops beside person |
| 4 | 12.12-17.36 | "angle of elevation ... is 45 degrees" | Given: angle | Illustration | Dashed sight line draws, angle arc reveals, 45deg chip |
| 5 | 17.72-19.80 | "find the full height of the pole" | Goal | Question | Pole outline grows (empty, unlabeled) |
| 6 | 20.18-26.00 | "let the height ... as x meter" | Define unknown | Illustration | X-segment (eye-to-top) highlighted, X chip pops |
| 7 | 26.46-35.16 | "why only upper part? ... angle starts from eye" | Reasoning | Illustration | Emphasize eye vertex + X-segment, no new element |
| 8 | 35.76-36.98 | "look at the right triangle" | Transition | Whole figure | pinFlow: question + illustration glide to pinned slot |
| 9 | 37.34-44.26 | "distance ... 18 meters ... adjacent side" | Label: adjacent | Given card + pinned figure | Given card shows knowns, Adjacent chip lights on pinned figure |
| 10 | 44.72-50.28 | "vertical height ... x meter ... opposite side" | Label: opposite | Pinned figure | Opposite/X chip lights, X arrow pulses |
| 11 | 50.78-69.14 | "tan formula ... tan45=1 ... x=18" | Step 1 math | Step1 card | Growing tan equation, substitution, answer x=18m |
| 12 | 69.76-75.94 | "found height above eye. Are we done? Not yet." | Twist | Step2 card | Step2 card enters, height-so-far pulses, "not yet" beat |
| 13 | 76.42-89.22 | "full height ... add eye level ... 19.5m" | Step 2 math | Step2 card | Add eye level, final answer 19.5m reveal |
| 14 | 89.96-96.54 | "height of pole is 19.5m. Correct option D" | Reveal | Options grid | Options stagger in, D pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Hook (0-3.6s)
TIMESTAMP: 0-3.6s
VOICEOVER: "So welcome back again. It's time to solve one more problem."
VISUAL OBJECTIVE: Establish the question, no illustration yet.
SCREEN LAYOUT: Question card centered vertically (heroEnterLowered), serial num badge top-left.
ON-SCREEN ELEMENTS: `#q-full-card`, `#serial-num`, background layers.
ANIMATION DETAILS: `apt.heroEnterLowered(tl,"#q-full-card",180,3.6)`; serial-num pops in parallel and rises with card at 3.6s.
CAMERA MOVEMENT: none (static frame, motion is internal).
TRANSITIONS: none yet.
EDUCATIONAL PURPOSE: Orient viewer to the problem statement.
VISUAL HIERARCHY: Question card is sole focal point.
ATTENTION MANAGEMENT: Card rise at 3.6s (end of hook line) cues next beat.
MOTION NOTES: back.out(1.4) entrance, then power2.inOut rise.
CONTINUITY FROM PREVIOUS SCENE: Opening scene of the video.

### Scene 2 - Illustration build (4.0-19.8s)
TIMESTAMP: 4.04-19.80s
VOICEOVER: "a person is standing eighteen meter away from a pole. The person's eye level is
1.5 meter above the ground, and the angle of elevation from the eye to the top of the pole
is 45 degrees. We need to find the full height of the pole."
VISUAL OBJECTIVE: Build the scene stroke by stroke as each fact is spoken.
SCREEN LAYOUT: Illustration centered below the question card (`#illustration`, viewBox 0 0 580 500).
ON-SCREEN ELEMENTS: Flat observer icon (eye on a stick) at A(160,310); ground line A-ground
to B-ground; "18 m" double-headed arrow (ground distance); "1.5 m" vertical arrow (eye
height); dashed sight line A to apex; angle arc at A (green, r=90); "45deg" chip; empty pole
rect growing from ground.
ANIMATION DETAILS:
- 4.9s: `#person-icon` pops in (`scale 0.6->1, back.out(1.6)`).
- 5.9s: `#ground-line` strokeDashoffset 210->0 (`power2.out`, 0.6s).
- 6.98s (word "eighteen"): `#arrow-18` + `#label-18` pop (`back.out(1.6)`).
- 9.94s (word "one/point/five"): `#arrow-15` + `#label-15` pop.
- 12.9s: `#pole-rect` starts growing (`attr height/y`, 0.7s, power2.out) - grows empty first,
  establishing the object before its angle is discussed.
- 14.28s: `#sight-line` strokeDashoffset 297->0 (0.7s).
- 16.32s (word "forty-five"): `#angle-arc` opacity 0->1 (0.4s, opacity only, never tween --angle).
- 16.9s: `#chip-45` pops.
CAMERA MOVEMENT: none.
TRANSITIONS: none (continuous build).
EDUCATIONAL PURPOSE: Every spoken fact gets an immediate on-screen counterpart (3-second law).
VISUAL HIERARCHY: Person -> ground -> pole -> sight line -> angle, in narration order.
ATTENTION MANAGEMENT: No gap over 3s; 8 beats across 15.7s window.
MOTION NOTES: stroke draws use `power2.out`; arrows/chips use `back.out(1.6/1.8)`.
CONTINUITY FROM PREVIOUS SCENE: Question card has settled at its risen position; illustration
begins directly beneath it in the same frame.

### Scene 3 - Define the unknown (20.2-36.98s)
TIMESTAMP: 20.18-36.98s
VOICEOVER: "Let us take the height from the person's eye level to the top of the pole as x
meter. Why are we taking only this upper part? Because the angle of elevation starts from
the person's eye, not from the ground. Now, look at the right triangle."
VISUAL OBJECTIVE: Isolate the unknown segment (eye level to pole top) as "X".
SCREEN LAYOUT: Same illustration; add the X measurement and highlight the eye vertex.
ON-SCREEN ELEMENTS: `#arrow-x` (vertical, right of pole, eye-level y=310 to apex y=100),
`#chip-x` ("X m"), `#person-icon` gets a brief `apt.emphasize` pulse to re-anchor "eye" as
the true angle vertex.
ANIMATION DETAILS:
- 25.42s (word "x"): `#arrow-x` + `#chip-x` pop in.
- 29.48s: `apt.emphasize(tl,"#person-icon",29.48)` - "the angle starts from the eye" beat.
- 34.12s: `apt.emphasize(tl,"#ground-line",34.12)` - brief pulse to contrast "not from the
  ground".
- 36.6s: `apt.pinFlow` begins for both question card and illustration (PIN_TIME).
CAMERA MOVEMENT: none.
TRANSITIONS: pinFlow glide starts at 36.6s, lands at 37.4s.
EDUCATIONAL PURPOSE: Prevents the classic mistake of using the full pole height directly in
the tan ratio - visually proves only the upper segment is opposite the angle.
VISUAL HIERARCHY: X arrow becomes the second most prominent element after the angle arc.
ATTENTION MANAGEMENT: 3 beats across 16.8s, gaps under 5s (25.42, 29.48, 34.12).
MOTION NOTES: `emphasize` = 0.3s yoyo scale pulse.
CONTINUITY FROM PREVIOUS SCENE: The pole and angle arc built in Scene 2 are still fully
visible; this scene only adds the X measurement on top of them, then glides the whole group
into the pinned slot.

### Scene 4 - Given card + adjacent/opposite naming (37.5-51.3s)
TIMESTAMP: 37.5-51.3s
VOICEOVER: "The horizontal distance ... is eighteen meters, so this becomes the adjacent
side. The vertical height ... is x meter, so this becomes the opposite side. Using the tan
formula,"
VISUAL OBJECTIVE: Recap the knowns in solution-card form while the pinned illustration
labels which side is adjacent and which is opposite.
SCREEN LAYOUT: `#q-pinned` + `#illus-pinned` at top; `#card-given` centered.
ON-SCREEN ELEMENTS: Given card (Distance=18m, Eye level=1.5m, Angle=45deg, Find=full
height); pinned figure's `#chip-adjacent-pinned` and `#chip-opposite-pinned` (role chips,
black border).
ANIMATION DETAILS:
- 37.5s: `apt.cardEnter("#card-given .solution-card")`, `apt.textReveal`.
- 40.98s: `apt.emphasize(tl,"#arrow-18-pinned",40.98)` (restated "eighteen meters").
- 43.36s (word "adjacent"): `#chip-adjacent-pinned` fades in.
- 44.72s: `apt.emphasize(tl,"#arrow-x-pinned",44.72)`.
- 47.76s (word "x"): reinforced via `#chip-x-pinned` pulse.
- 49.56s (word "opposite"): `#chip-opposite-pinned` fades in.
- 50.5s: `apt.morphToStack` Given -> stack (0.8s); `apt.stackLineGrow` for line-g-1.
CAMERA MOVEMENT: none.
TRANSITIONS: morphToStack at 50.5s.
EDUCATIONAL PURPOSE: Anchors the abstract "adjacent/opposite" vocabulary to the concrete
labeled sides already on screen (LINK pattern).
VISUAL HIERARCHY: Given card center-stage; pinned figure chips are secondary confirmations.
ATTENTION MANAGEMENT: Beats every ~2-3s (37.5, 40.98, 43.36, 44.72, 47.76, 49.56).
MOTION NOTES: role chips use `back.out(1.6)`, 0.35s.
CONTINUITY FROM PREVIOUS SCENE: The pinFlow glide from Scene 3 has just landed; the pinned
figure appears in its final small slot the instant this scene opens.

### Scene 5 - Step 1: solve for X (51.3-70.8s)
TIMESTAMP: 51.3-70.8s
VOICEOVER: "tan theta is equal to opposite divided by adjacent. So tan forty-five degree is
equal to x divided by eighteen. We know that tan forty-five degree is equal to one,
therefore one is equal to x divided by eighteen. This gives us x equal to eighteen meters."
VISUAL OBJECTIVE: Grow the tan ratio term by term, substitute, and solve.
SCREEN LAYOUT: `#card-step1` centered, same position as Given card was.
ON-SCREEN ELEMENTS: Step1 card lines: "Adjacent side = 18 m", "Opposite side = X m", "tan
theta = opposite/adjacent" (fraction), "tan 45deg = X/18" (fraction), "tan 45deg = 1", "X =
18 m" (answer, `.ans`).
ANIMATION DETAILS:
- 51.3s: `cardEnter` + `textReveal`.
- 52.5s: "tan theta" words reveal; 53.7s: opposite/adjacent fraction reveals.
- 56.22s: "tan 45deg" reveals; 58.38s: X/18 fraction reveals.
- 60.7s: "tan 45deg = 1" line reveals.
- 63.16s: `apt.emphasize(tl,"#step1-frac-x18",63.16)` (restated "therefore one is equal to...").
- 65.5s: `apt.emphasize(tl,"#arrow-18-pinned",65.5)` (restated "eighteen" - LINK to figure).
- 67.48s: "X = 18 m" answer reveals; simultaneously `tl.to("#chip-x-pinned",{stroke:
  "#4eb85f", ...},68.7)` recolors the pinned X chip to success green (LINK/confirm).
- 70.0s: `apt.morphToStack` Step1 -> stack; `apt.stackLineGrow` line-1-2.
CAMERA MOVEMENT: none.
TRANSITIONS: morphToStack at 70.0s.
EDUCATIONAL PURPOSE: The core trigonometric step - shows tan45=1 collapses the ratio to a
direct equality.
VISUAL HIERARCHY: The fraction terms are the largest, most emphasized elements in this
scene.
ATTENTION MANAGEMENT: 8 beats across 19.5s window, no gap over ~3.2s.
MOTION NOTES: fraction reveal = plain opacity fade via `.rv`; confirm-recolor = `stroke`
tween 0.3s.
CONTINUITY FROM PREVIOUS SCENE: Given card has just finished sliding into the stack; Step1
opens in the same center slot, continuing the same visual rhythm.

### Scene 6 - Step 2: full height twist + final add (70.8-89.8s)
TIMESTAMP: 70.8-89.8s
VOICEOVER: "Okay, we have found the height of the pole above the person's eye level. Are we
done? Not yet. The question asks for the full height of the pole, so we must also add the
person's eye level, which is 1.5 meter. The full height is eighteen plus one point five,
which is nineteen point five meter."
VISUAL OBJECTIVE: Dramatize the common mistake (stopping at X=18) then correct it by adding
the eye level.
SCREEN LAYOUT: `#card-step2` centered.
ON-SCREEN ELEMENTS: Step2 lines: "Height above eye level = 18 m", "But the full height is
asked!" (twist line), "Eye level = 1.5 m", "Full height = 18 + 1.5", "= 19.5 m" (answer).
ANIMATION DETAILS:
- 70.8s: `cardEnter` + `textReveal` (line 1 already-known height=18m appears).
- 74.48s: `apt.emphasize(tl,"#step2-height-line",74.48)` ("Are we done?").
- 75.52s: `apt.emphasize(tl,"#step2-height-line",75.52)` ("Not yet.") - second pulse,
  slightly stronger, sets up the twist.
- 76.42s: twist line reveals ("full height is asked").
- 79.58s: `apt.emphasize(tl,"#arrow-15-pinned",79.58)` ("must also add" - LINK to the 1.5m
  arrow on the pinned figure).
- 81.82s: "Eye level = 1.5 m" line reveals.
- 83.86s: "Full height = 18 + 1.5" reveals.
- 85.58s: `apt.emphasize(tl,"#step2-sum-line",85.58)` (restated "plus").
- 88.02s: "= 19.5 m" answer reveals (`.ans`, green).
- 89.0s: `apt.morphToStack` Step2 -> stack; `apt.stackLineGrow` (none needed further);
  `apt.fadeOut("#illus-pinned",89.0)`; `apt.recenterForOptions("#q-pinned",160,180,89.0)`.
CAMERA MOVEMENT: none.
TRANSITIONS: morphToStack + recenter at 89.0s (fired together).
EDUCATIONAL PURPOSE: Directly targets the standard "forgot to add eye level" mistake -
narration explicitly flags it ("Are we done? Not yet.") and the visual pulse reinforces it.
VISUAL HIERARCHY: The twist line and final answer are the two peaks of this scene.
ATTENTION MANAGEMENT: 8 beats across 19s window.
MOTION NOTES: emphasize = 0.3s yoyo; final answer reveal = plain `.rv` fade (no double
animation).
CONTINUITY FROM PREVIOUS SCENE: Step1's morph has just completed; Step2 opens in the same
slot, its first line restating Step1's result before complicating it.

### Scene 7 - Options reveal (89.8-96.54s -> 98.5s outro)
TIMESTAMP: 89.8-98.5s
VOICEOVER: "Hence, the height of the pole is nineteen point five meter. So the correct
option is D."
VISUAL OBJECTIVE: Confirm the final answer against the four options.
SCREEN LAYOUT: `.pinned-col` options grid (2x2), stack column still visible on the left,
pinned question recentered above it.
ON-SCREEN ELEMENTS: `#options-reveal`, four `.opt-btn`, `.opt-btn.correct` = D (19.5 m).
ANIMATION DETAILS:
- 89.8s: `apt.fadeIn("#options-reveal",89.8)`.
- 90.3s: `apt.optionsStagger(".opt-btn",90.3)`.
- 95.6s: `apt.correctPulse(".opt-btn.correct",95.6)` (right as narration says "correct
  option").
- 97.14s: `apt.fadeOut("#root > div",97.14,1.2)` (END_FADE_TIME = 96.539+0.6).
- 98.539s: `tl.set({},{},98.539)` - final marker, nothing later.
CAMERA MOVEMENT: none.
TRANSITIONS: fade-to-white/end at 97.14s.
EDUCATIONAL PURPOSE: Confirms 19.5 m against the distractors (18m = forgot eye level, 16.5m
= subtracted instead of added, 20m = rounding trap).
VISUAL HIERARCHY: Correct option (D) becomes the sole focus via green pulse.
ATTENTION MANAGEMENT: options land well before the pulse so no dead gap.
MOTION NOTES: standard `optionsStagger`/`correctPulse` per animations.js.
CONTINUITY FROM PREVIOUS SCENE: Step2's morph/recenter is still completing as the options
container fades in, reading as one continuous settle-into-final-layout motion.

---

## PART 3: Asset List Required

- No external image assets. Entire illustration is hand-authored inline SVG (person icon,
  ground line, pole rect, sight line, angle arc, arrows, chips) per `illustration_reference.md`
  section 6 component recipes.
- Local copies of `design-system.css`, `animations.js`, `assets/` already placed in this
  folder (Step 5B).

## PART 4: Animation Complexity Notes

- Angle arc uses the mandatory stroke-dasharray circle technique (`penelty.txt` standard):
  unitless `--angle:45`, opacity-only reveal, never GSAP-tweened.
- Pinned illustration is a coordinate-exact copy of the full-size SVG (same viewBox, same
  internal numbers), only outer width/height and stroke widths shrink, per
  `illustration_reference.md` section 1.
- Every clip's `data-duration` is sized past its last transition's completion + 1.5s buffer
  (`penelty.txt` q9 fix), computed per element below in `index.html` comments.
- Given card's raw facts are timed to their FIRST mention in the transcript (5.3s-19.8s),
  which is before the card itself enters (37.5s) - by the time the card animates in, those
  `.rv` spans have already resolved to opacity:1, so the card's content appears fully
  formed the instant it enters. This is intentional: the values were already established
  visually in Phase 1, so the Given card is a recap, not a new reveal.

## PART 5: Master Timeline Overview

```
0.0    Background layers, bottomStrip, topic, logo
0.3    q-full-card heroEnterLowered starts (lowered)
0.8    serial-num pops (lowered)
3.6    q-full-card + serial-num rise to resting position
4.9    person-icon pops
5.9    ground-line draws
6.98   arrow-18 + label-18 pop ("eighteen meter")
9.94   arrow-15 + label-15 pop ("1.5 meter")
12.9   pole-rect grows (empty)
14.28  sight-line draws
16.32  angle-arc reveals (opacity only, --angle:45)
16.9   chip-45 pops
25.42  arrow-x + chip-x pop ("x meter")
29.48  emphasize person-icon ("from the eye")
34.12  emphasize ground-line ("not from the ground")
36.6   PIN_TIME - pinFlow (question + illustration) glide to pinned slot
37.5   GIVEN_TIME - card-given enters + textReveal
40.98  emphasize arrow-18-pinned
43.36  chip-adjacent-pinned fades in
44.72  emphasize arrow-x-pinned
47.76  chip-x-pinned pulse
49.56  chip-opposite-pinned fades in
50.5   morphToStack Given -> stack-given; stackLineGrow line-g-1
51.3   card-step1 enters + textReveal
52.5   "tan theta" reveals
53.7   opposite/adjacent fraction reveals
56.22  "tan 45deg" reveals
58.38  X/18 fraction reveals
60.7   "tan 45deg = 1" reveals
63.16  emphasize step1-frac-x18
65.5   emphasize arrow-18-pinned
67.48  "X = 18 m" answer reveals
68.7   chip-x-pinned recolors green (confirm)
70.0   morphToStack Step1 -> stack-step1; stackLineGrow line-1-2
70.8   card-step2 enters + textReveal (height=18m recap)
74.48  emphasize step2-height-line ("Are we done?")
75.52  emphasize step2-height-line ("Not yet.")
76.42  twist line reveals
79.58  emphasize arrow-15-pinned
81.82  "Eye level = 1.5 m" reveals
83.86  "Full height = 18 + 1.5" reveals
85.58  emphasize step2-sum-line
88.02  "= 19.5 m" answer reveals
89.0   morphToStack Step2 -> stack-step2; fadeOut illus-pinned; recenterForOptions q-pinned
89.8   options-reveal fadeIn
90.3   optionsStagger
95.6   correctPulse (option D)
97.14  END_FADE_TIME - fadeOut #root > div (1.2s)
98.539 TIMELINE_END - tl.set marker, nothing later
```
