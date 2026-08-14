# Trigonometry & Height n Distance - Question 11 - Storyboard (v5)

## v5 update - new voiceover (91.95s, was 64.6s), re-synced to index.html
The voiceover was re-recorded with an expanded script - same solution, but it now
adds a "do these have to be the exact side lengths? No - any sides in the same
ratio work, 7 & 24 just keep it easy" aside after the perpendicular/base
comparison, and a "theta is acute, so we take the positive value" note after the
final sec θ = 25/24 answer. Every absolute timestamp below and in `index.html`
was rebuilt from the new `transcript.json` word timings (PIN_TIME 27.34 -> 39.08,
GIVEN_TIME 28.16 -> 39.88, etc. - see Master Timeline Overview). No layout,
color, component, or animation-helper changes - only content/timing. New
`#ratio-aside` element (four `.rv`-tagged captions, one visible at a time, same
`apt.fadeIn`/`fadeOut` pattern as everywhere else) carries the new ratio-flexibility
beat; the new "acute -> positive" line was added as a fourth reveal inside Step 2's
existing card instead of a new component.

## v4 update - fixed clipped label, replaced the board with one clean growing equation
v3's `#ratio-board` panel clipped its own text ("Perpendicular" rendered as "Perpen") because
an `<svg>` element clips anything past its own width/viewBox by default, and the panel
overlapped the triangle's labels - messy, not the "elegant" bar set by the Trains/Boats
speed-board. v4 fixes the actual bug (added `overflow:visible` to the triangle svg so its own
side-name labels never clip either) and replaces the boxed board with ONE inline equation that
grows in place next to the triangle: `tan θ = P/B` fades in, then `= 7/24` appends to the same
line - no border, no box, no overlap, plus small grey italic captions ("Find: sec θ", "Using
the tan ratio") per the "keep it clean" / "grey italic small text" note. Given card and its
stack recap now read `P = 7 units`, `B = 24 units` (short-letter notation, matching what's
literally in the transcript) instead of the spelled-out `Perpendicular = 7`. Every visual beat
in the 8-27s window is now <=3s apart (added a theta-arc pulse at 9.7 and a ratio-frac pulse at
18.54 to cover the two widest remaining gaps), so nothing sits idle more than 5s anywhere in
Phase 1.

## Fixes from v1 (why v2 existed)
- **Layout bug**: illustration SVG was 520px tall inside a 440px container - overflowed, clipped/overlapped the question card above it. Fixed: viewBox/container both sized to actual content (290px tall SVG in a 460px container, real margin both sides).
- **Timing bug**: two `morphToStack` calls fired BEFORE their card's last value had even finished revealing (Given->stack at 30.4 vs last reveal at 30.70; Step1->stack at 51.5 vs last reveal at 51.90) - the answer would flash and get cut mid-motion. Fixed: every morph now starts strictly after its card's last `.rv` reveal.
- **Static/too-few-visuals**: Step 1 card entered at 31.48 but its first word didn't reveal until 34.82 - 3.3s of a visibly empty card. And the pinned illustration did nothing from PIN_TIME (27.34) to the end (60.9) except a small idle bob - 33s of dead diagram. Fixed: added a line-level intro reveal that fills the card-entry gap, added an intermediate "49 + 576 = 625" reveal to Step 1 (extra progression beat), and tied the pinned illustration directly to the solved values - sides turn green as they're confirmed, the hypotenuse gets its own "25" label + color flash the instant it's solved, and hypotenuse+base pulse together when the final sec θ ratio lands.

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0.10-3.24 | Welcome back, time to solve one more problem | Hook | Question card | Question fades/rises in |
| 2 | 3.70-14.40 | tan theta = 7/24, theta acute, find sec theta | Setup | Question text + serial badge | Full question visible, badge pops |
| 3 | 15.04-18.08 | tan theta = perpendicular upon base | Concept | Illustration | Right-triangle skeleton drawn + filled, ratio formula shown |
| 4 | 18.54-26.88 | Comparing with tan theta=7/24, perpendicular=7, base=24 | Concept mapping | Illustration labels | Perpendicular/Base labels + sides turn green as each is confirmed |
| 5 | 27.34 | Done | Transition | Question+illustration | pinFlow glide to pinned slot (already-green sides carry over) |
| 6 | 28.16-31.18 | We know two sides, need the third side | Given | Given card | Recaps Perpendicular=7, Base=24 |
| 7 | 31.60-40.22 | To find hypotenuse, Pythagoras theorem: Hyp=sqrt(Perp²+Base²), substitute 7²+24² | Step 1 setup+formula | Step 1 card | Intro line, formula, substitution |
| 8 | 42.22-52.52 | Simplify: 49+576=625, sqrt=25 | Step 1 result | Step 1 card | Intermediate sum, then Hyp=25; pinned hypotenuse turns green + labeled "25" |
| 9 | 53.02-56.32 | sec theta = hypotenuse upon base | Step 2 formula | Step 2 card | Sec ratio written |
| 10 | 56.80-60.76 | Substitute: sec theta = 25/24 | Step 2 solve | Step 2 card | Final answer 25/24; pinned hyp+base pulse together |
| 11 | 61.48-64.58 | Hence, correct option is option C | Reveal | Options grid | Option C pulses green |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Question Entry (0.0s-3.7s)
TIMESTAMP: 0.3-3.7
VOICEOVER: "So welcome back again, it's time to solve one more problem."
ON-SCREEN ELEMENTS: `#q-full-card` (text: "If tan theta = 7/24 for an acute angle, find sec theta."), `#serial-num` (digit "Q").
ANIMATION DETAILS: `apt.heroEnterLowered` on `#q-full-card` (0.7s rise + 0.6s settle starting 0.3), badge pop at 0.8s.
CONTINUITY FROM PREVIOUS SCENE: first scene, no prior motion.

### Scene 2 - Illustration Build (3.7s-27.34s)
TIMESTAMP: 5.0-26.88
VOICEOVER: "...tan theta = 7/24... tan theta is equal to perpendicular upon base... comparing this with tan theta=7/24, we get perpendicular equals seven and base equals twenty-four."
VISUAL OBJECTIVE: Draw a right-triangle at true 7:24:25 proportions (perpendicular=84px, base=288px, hypotenuse=300px, scale 12px/unit), sized to actually fit its container (viewBox 700x290, container 1400x300 - no overflow, unlike v1). Fill the triangle with a light translucent wash once drawn, so it reads as a solid shape rather than bare lines. As each side's value is confirmed by narration, that side's stroke turns from primary blue to success green - a visible "locked in" cue, not just a label fade.
ON-SCREEN ELEMENTS: `#base-line`, `#perp-line`, `#hyp-line` (stroke-draw), `#tri-fill` (polygon wash), `#right-angle-mark`, `#angle-arc`+`#angle-label` ("θ"), `#perp-label` ("Perpendicular"), `#base-label` ("Base"), `#hyp-label` ("Hypotenuse", name only, no value yet).
ANIMATION DETAILS: base draws (0.7s) at 5.0, perpendicular draws (0.6s) at 5.9, hypotenuse draws (0.7s) at 6.7, right-angle mark fades in at 7.0, theta arc+label fade in at 8.0, `#tri-fill` fades to 0.35 opacity at 8.4. `#perp-label` fades in AND `#perp-line` turns green together at 23.26 (word "perpendicular"). `#hyp-label` fades in (stays black, unsolved) at 24.4. `#base-label` fades in AND `#base-line` turns green together at 25.62 (word "base").
EDUCATIONAL PURPOSE: map the tan ratio onto geometry with an immediate visual "confirmed" state per side, before any solution card appears.
CONTINUITY FROM PREVIOUS SCENE: illustration area was already visible (empty) since Scene 1.

### Scene 3 - Pin Transition (27.34s)
TIMESTAMP: 27.34 (PIN_TIME)
VOICEOVER: "Done."
VISUAL OBJECTIVE: Glide question + illustration into pinned slots. The pinned triangle copy starts with perpendicular/base ALREADY green (carrying over the confirmed state from Scene 2) - hypotenuse stays black/unsolved, its payoff comes later.
ANIMATION DETAILS: `apt.pinFlow` (0.8s) on both question and illustration. `apt.ambientLoop` on `#illus-pinned-icon` from 29.0 to 60.0 (idle bob, now supplemented by the two solved-value payoffs below instead of carrying the whole 33s alone).
CONTINUITY FROM PREVIOUS SCENE: same triangle, same color state, continues moving.

### Scene 4 - Given Card (28.16s-30.9s)
TIMESTAMP: 28.16 (GIVEN_TIME)
VOICEOVER: "We now know two sides of the right triangle. We just need the third side."
ON-SCREEN ELEMENTS: `#card-given` text: "We know two sides, need the third" (line-level, matches narration), then "Perpendicular = 7, Base = 24" (recap, word-level).
ANIMATION DETAILS: `apt.cardEnter` at 28.16, `apt.textReveal`: line0 @28.16 (immediate - no blank-card gap), Perpendicular=7 @29.30, Base=24 @29.90.
CONTINUITY FROM PREVIOUS SCENE: pin glide has just settled; card appears in the now-empty center stage.

### Scene 5 - Step 1: Pythagoras Theorem (31.6s-52.7s)
TIMESTAMP: 31.6 (card enters right after Given's morph completes at 31.4, matching the narration "To find the hypotenuse..." already in progress at 31.48)
VOICEOVER: "To find the hypotenuse, we will use the Pythagoras theorem. Hypotenuse equals square root of perpendicular square plus base square. Substitute the values. Hypotenuse equals square root of seven square plus twenty-four square. After simplifying, hypotenuse equals square root of six hundred twenty-five, which is equal to twenty-five."
ON-SCREEN ELEMENTS: `#card-step1` - intro line "Using Pythagoras Theorem" (fills what would otherwise be a blank-card gap), then `Hyp = sqrt(Perp² + Base²)`, then `Hyp = sqrt(7² + 24²)`, then `Hyp = sqrt(49 + 576) = sqrt(625)` (new intermediate sum, extra progression beat), then `Hyp = 25` (`.ans`).
ANIMATION DETAILS: `apt.morphToStack` Given->stack at 30.6 (0.8s, completes 31.4 - AFTER Given's last reveal at 29.90, no cutoff). `apt.cardEnter` + `apt.textReveal` Step 1 at 31.6: intro @31.6, formula @34.82, substitution @42.22, intermediate sum @46.82, result @51.14. The instant "25" reveals (51.14), the PINNED hypotenuse line turns green and a "25" label fades in beside it in the pinned icon - the diagram itself confirms the answer, not just the card.
CONTINUITY FROM PREVIOUS SCENE: Given card's morph hands off to Step 1 with the illustration payoff landing mid-step.

### Scene 6 - Step 2: Sec Ratio and Final Answer (53.02s-60.9s)
TIMESTAMP: 53.02 (matches narration exactly)
VOICEOVER: "Now we know that sec theta equals hypotenuse upon base. Substitute the values. Sec theta equals twenty-five by twenty-four."
ON-SCREEN ELEMENTS: `#card-step2` math: `sec θ = Hypotenuse/Base`, then final `sec θ = 25/24` (`.ans`, `.frac` component).
ANIMATION DETAILS: `apt.morphToStack` Step1->stack at 51.9 (starts the instant "25" is read, completes 52.7 - well before Step 2's 53.02 entry). `apt.stackLineGrow` for line-g-1 at 51.9. `apt.cardEnter` + `apt.textReveal` Step 2 at 53.02: formula @54.22, final answer @59.70. At 59.70, the pinned hypotenuse and base lines both pulse (stroke-width flash) together - visually spelling out "these two sides make the ratio."
CONTINUITY FROM PREVIOUS SCENE: stack column now shows Given + Step 1; Step 2 occupies center exactly where Step 1 was.

### Scene 7 - Options Reveal (61.9s-64.58s)
TIMESTAMP: 61.9 (fadeIn), 62.5 (stagger), 63.6 (correctPulse)
VOICEOVER: "Hence, the correct option is option C."
ON-SCREEN ELEMENTS: `.options-grid` A/B/C/D, `.opt-btn.correct` on C (25/24).
ANIMATION DETAILS: `apt.morphToStack` Step2->stack + `apt.recenterForOptions` at 60.9 (starts 1.2s after Step 2's last reveal at 59.70 - no cutoff), completes 61.7. `apt.fadeIn` options-reveal at 61.9, `apt.optionsStagger` at 62.5, `apt.correctPulse` on C at 63.6.
CONTINUITY FROM PREVIOUS SCENE: Step 2's morph clears center stage exactly as options fade in there.

## PART 3: Asset List Required
- No external illustration assets; inline SVG (right triangle, angle arc, fill wash) built with template's design tokens.
- Standard `_template/assets/` (serial-num badge, logo) copied locally.

## PART 4: Animation Complexity Notes
- Diagram at true 7:24:25 proportions (84:288:300px), sized correctly this time - viewBox 700x290 inside a 300px-tall container, no overflow (v1's bug).
- Side-confirmation color changes (blue -> green per side as its value is narrated) and the hypotenuse "solved" reveal are plain `gsap.to()` stroke/opacity tweens on existing SVG elements - same pattern already used for the stroke-dasharray line draws, not a new animation helper.
- Every `morphToStack` call now starts strictly after its card's last `.rv` reveal completes (v1 had two that started before, cutting the answer off mid-reveal).
- Step 1 gained one extra content line (intermediate 49+576=625 sum) and a line-level intro beat, specifically to close the two longest dead-air stretches from v1.
- `sec θ = 25/24` uses the `.frac` component, never a bare `÷` character.
- All clip `data-duration`s sized to (transition_start - own data-start) + transition_duration + ~1.5s buffer, recomputed for every shifted timestamp in this version.

## PART 5: Master Timeline Overview (v5 - rebuilt for the 91.95s voiceover)
```
0.0    bg layers
0.3    Question card enter
0.8    Serial badge pop
5.0    Base line draws
5.9    Perpendicular line draws
6.7    Hypotenuse line draws
7.0    Right-angle mark
8.0    Theta arc + label
8.4    Triangle fill wash fades in
9.2    Theta arc emphasize pulse
12.12  eq-caption-find + eq-line fade in ("tan θ = P/B")
16.26  eq-caption-ratio + eq-frac1 fade in
19.24  eq-frac1 emphasize pulse
20.60  eq-eq2 (" = ") fades in
20.90  eq-frac2 ("7/24") fades in
23.98  Perpendicular label + perp-line turns green + sub7 pulses
24.66  Hypotenuse label (name only, stays black)
25.66  Base label + base-line turns green + sub24 pulses
26.68  NEW - ratio-aside "Do these have to be the exact side lengths?"
29.16  NEW - ratio-aside "No - it's just a ratio!"
30.02  NEW - ratio-aside "Any sides in ratio 7:24 work."
35.74  NEW - ratio-aside "7 & 24 just keep the calculation easy."
39.08  PIN_TIME - pinFlow (question + illustration, colors carry over); ratio-aside fades out
39.88  GIVEN card enter (line0 immediate, no blank gap)
41.18  Given line 2 ("but sec θ needs Hypotenuse & Base")
41.0-70.0  ambientLoop on pinned icon
43.60  Given recap (P=7, B=24)
44.2   Given -> stack morph (after last reveal, no cutoff)
45.02  Step 1 card enter (intro line immediate)
49.46  Formula reveal (Hyp = sqrt(Perp²+Base²))
55.98  Substitution reveal (7², 24²)
61.76  Intermediate sum reveal (49+576=625)
70.22  Result reveal (Hyp=25)
71.06  Step 1 -> stack morph + pinned hypotenuse turns green + "25" label
72.28  Step 2 card enter
72.46  Formula reveal (sec θ = Hyp/Base)
76.82  Final answer reveal (25/24) + pinned hyp+base pulse together
79.72  NEW - "θ acute, so sec θ is positive" note
84.0   Step 2 -> stack morph + recenter
85.0   Options fadeIn
85.6   Options stagger
91.58  Correct option (C) pulses (on the word "C")
92.2   End fade
```
