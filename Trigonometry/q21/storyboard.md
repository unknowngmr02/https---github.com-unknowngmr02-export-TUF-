# Storyboard - Trigonometry & Height n Distance Q21 (Two-point tower problem)

Duration (transcript.json): 109.94s

## PART 1: Narration Beat Analysis

| # | Time | Narration | Purpose | Attention focus | Visual objective |
|---|------|-----------|---------|------------------|-------------------|
| 1 | 0.08-4.42 | "So welcome back again. It's time to solve one more problem." | Opening hook | Question card | heroEnterLowered rise |
| 2 | 4.96-7.0 | "Now, in this problem, we have a tower" | Set scene | Ground + tower | Ground line draws, tower grows |
| 3 | 7.6-12.7 | "two points on same side...forty meter apart" | Establish 2 points | Two ground markers + 40m arrow | Both point markers pop, double arrow + "40 m" label |
| 4 | 13.12-17.18 | "From nearer point, angle of elevation is sixty degree" | Near angle | Sight line P->C, arc at P | Dashed line draws, arc reveals, "60 deg" chip pops |
| 5 | 17.7-21.44 | "from farther point, angle of elevation is thirty degrees" | Far angle | Sight line Q->C, arc at Q | Dashed line draws, arc reveals, "30 deg" chip pops |
| 6 | 21.88-23.76 | "we need to find the height of the tower" | Goal | Tower + right-angle mark | Right-angle marker pops, tower pulses |
| 7 | 24.22-31.5 | "distance of nearer point = x...farther point = x+40" | Define unknowns | Pinned illustration labels | pinFlow to top, "x m" then "x+40 m" chips pop on pinned figure |
| 8 | 32.16-52.96 | "tangent most useful...connects height/base...tan60=h/x...h=x root3" | Derive h from near point | Step 1 card | Growing equation, LINK to arc/side at P |
| 9 | 53.44-58.46 | "keep this aside...use same height from other point" | Bridge | Step 1 card lingers | emphasize pulses, no new card (avoids dead gap) |
| 10 | 58.86-79.9 | "from farther point...tan30=h/(x+40)...substitute h=x root3...= x root3/(x+40)" | Derive second equation | Step 2 card | Growing fraction equation, LINK to arc/side at Q |
| 11 | 80.31-91.44 | "cross-multiplication...x+40=3x...40=2x...x=20...distance of nearer point" | Solve for x | Step 3 card | Algebra reveal, "x=20" confirm pulse |
| 12 | 92.12-107.32 | "but wait...asking for tower height...h=x root3...h=20 root3 m" | Back-substitute | Step 4 card | LINK x=20 -> h=20root3, final answer pulses green |
| 13 | 107.88-109.94 | "correct option is option A" | Reveal | Options grid | optionsStagger + correctPulse |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Question Hero (0 - 4.6s)
VOICEOVER: "So welcome back again. It's time to solve one more problem."
VISUAL OBJECTIVE: Establish the question card as the sole focus, rising into its resting slot.
SCREEN LAYOUT: q-card centered, lowered by 180px; serial-num badge top-left, moving in tandem.
ON-SCREEN ELEMENTS: #q-full-card, #serial-num, background dotted-grid + bottom-strip + topic-name + logo.
ANIMATION DETAILS: apt.heroEnterLowered(tl,"#q-full-card",180,4.6); serial-num pop at 0.8s (scale/rotation), rises with card at 4.6.
CAMERA MOVEMENT: none (static frame, motion is internal).
TRANSITIONS: none yet.
EDUCATIONAL PURPOSE: orient the viewer to the full problem statement before any diagram appears.
VISUAL HIERARCHY: question card > serial badge > background.
ATTENTION MANAGEMENT: single focal element, no competing motion.
MOTION NOTES: back.out(1.4) settle on rise.
CONTINUITY FROM PREVIOUS SCENE: session start, no prior scene.

### Scene 2 - Tower + Ground Build (4.6 - 7.6s)
VOICEOVER: "Now, in this problem, we have a tower"
VISUAL OBJECTIVE: Draw the ground line and grow the tower outline from it, stroke by stroke.
SCREEN LAYOUT: illustration area below the settled question card.
ON-SCREEN ELEMENTS: #ground-line (stroke-draw), #tower-rect (height grows 0->208).
ANIMATION DETAILS: tl.to(#ground-line,{strokeDashoffset:0},5.0); tl.to(#tower-rect,{attr:{height:208,y:192}},6.6, power2.out).
CAMERA MOVEMENT: none.
TRANSITIONS: continuous stroke-draw motion.
EDUCATIONAL PURPOSE: physically ground the abstract "tower" word in a drawn object.
VISUAL HIERARCHY: tower silhouette forming.
ATTENTION MANAGEMENT: only one element animates at a time.
MOTION NOTES: power2.out grow, 0.7s.
CONTINUITY FROM PREVIOUS SCENE: question card has settled and sits still while the illustration begins directly beneath it - one continuous take.

### Scene 3 - Two Ground Points + 40m Gap (7.6 - 12.7s)
VOICEOVER: "and two points are on the same side of that tower. These two points are forty meter apart."
VISUAL OBJECTIVE: Pop in both observer markers (far point Q, then near point P), then draw the double-headed "40 m" arrow between them.
SCREEN LAYOUT: Q marker left of P marker, both on the ground line, left of the tower base.
ON-SCREEN ELEMENTS: #pin-far (Q), #pin-near (P), #arrow-40, #label-40.
ANIMATION DETAILS: pin-far pop back.out(1.6) at 8.2; pin-near pop at 9.0; arrow-40 + label-40 pop at 11.48 (word "forty").
CAMERA MOVEMENT: none.
TRANSITIONS: sequential pop-ins, no overlap confusion.
EDUCATIONAL PURPOSE: makes "two points, 40 m apart" a concrete measured gap instead of a sentence.
VISUAL HIERARCHY: markers first, measurement arrow confirms the fact stated.
ATTENTION MANAGEMENT: label pops exactly on the word "forty".
MOTION NOTES: back.out(1.6), 0.35-0.4s pops.
CONTINUITY FROM PREVIOUS SCENE: the tower has just finished growing and stands still as the two ground markers appear in the same shot.

### Scene 4 - Near-Point Angle (13.12 - 17.18s)
VOICEOVER: "From the nearer point, the angle of elevation is sixty degree,"
VISUAL OBJECTIVE: Draw the dashed sight line from P to the tower apex, reveal the angle arc at P, pop the "60 deg" chip.
SCREEN LAYOUT: dashed line P->C; green arc at P; chip above P.
ON-SCREEN ELEMENTS: #sight-near, #arc-near, #chip-60.
ANIMATION DETAILS: tl.to(#sight-near,{opacity:1},13.5); tl.to(#arc-near,{opacity:1},15.0); tl.to(#chip-60,{opacity:1},16.4,back.out(1.6)).
CAMERA MOVEMENT: none.
TRANSITIONS: draw -> arc -> chip, one per phrase word.
EDUCATIONAL PURPOSE: pins the abstract "angle of elevation" to an exact drawn ray and arc.
VISUAL HIERARCHY: sight line first (the ray), then the arc (the angle), then the number (the chip).
ATTENTION MANAGEMENT: only P's triangle is highlighted; Q's side stays dim/undrawn.
MOTION NOTES: opacity fades for line/arc (0.4-0.5s), pop for chip.
CONTINUITY FROM PREVIOUS SCENE: the 40 m arrow has just settled; the near marker P is the same marker introduced a moment ago, now anchoring its own triangle.

### Scene 5 - Far-Point Angle (17.7 - 21.44s)
VOICEOVER: "and from the farther point, the angle of elevation is thirty degrees."
VISUAL OBJECTIVE: Draw the dashed sight line from Q to the same apex, reveal Q's angle arc, pop "30 deg" chip.
SCREEN LAYOUT: dashed line Q->C (longer, shallower); green arc at Q; chip above Q.
ON-SCREEN ELEMENTS: #sight-far, #arc-far, #chip-30.
ANIMATION DETAILS: tl.to(#sight-far,{opacity:1},18.2); tl.to(#arc-far,{opacity:1},19.5); tl.to(#chip-30,{opacity:1},20.48,back.out(1.6)).
CAMERA MOVEMENT: none.
TRANSITIONS: same pattern as Scene 4, second independent derivation.
EDUCATIONAL PURPOSE: shows both triangles share the same apex/height but differ in base and angle.
VISUAL HIERARCHY: both triangles now visible together, sharing the tower.
ATTENTION MANAGEMENT: Q's elements are the new focus; P's stay lit but static.
MOTION NOTES: identical vocabulary to Scene 4 for consistency.
CONTINUITY FROM PREVIOUS SCENE: P's arc and chip are still fully visible as Q's own line begins drawing from the same apex point C - one shared tower, two triangles built in the same shot.

### Scene 6 - Right Angle + Goal (21.88 - 23.76s)
VOICEOVER: "And we need to find the height of the tower."
VISUAL OBJECTIVE: Reveal the right-angle marker at the tower base and pulse the tower to state the goal.
ON-SCREEN ELEMENTS: #right-angle-mark, #tower-rect.
ANIMATION DETAILS: tl.to(#right-angle-mark,{opacity:1},22.0); apt.emphasize(tl,"#tower-rect",23.0).
EDUCATIONAL PURPOSE: closes the geometric setup and names the unknown (tower height).
CONTINUITY FROM PREVIOUS SCENE: both angle chips and sight lines remain on screen as the marker completes the right-triangle picture.

### Scene 7 - Pin + Given Recap + Define x (24.0 - 31.9s)
VOICEOVER: "Let the distance of the nearer point...be x meter. So the farther point will be x plus forty meters from the tower."
VISUAL OBJECTIVE: Glide question + illustration to their pinned slots; recap the given facts in a solution card; label the unknown distances directly on the pinned figure.
SCREEN LAYOUT: q-pinned top; illus-pinned left-center, shrunk exact copy; Given card center.
ON-SCREEN ELEMENTS: #q-pinned, #illus-pinned (with pinned P/Q/arc/chip copies), #card-given, #chip-x-pinned, #chip-x40-pinned.
ANIMATION DETAILS: PIN_TIME=24.0 apt.pinFlow both; GIVEN_TIME=24.9 apt.cardEnter + apt.textReveal (rv times point back to their original spoken moments: 11.48, 16.4, 20.48, 22.88); chip-x-pinned pops at 26.86 (word "x"); chip-x40-pinned pops at 29.9 (word "forty").
EDUCATIONAL PURPOSE: the Given card is a recap (content already spoken), while the NEW information (the variable names x, x+40) reveals live on the pinned diagram - LINK pattern between algebra and geometry from the very first step.
CONTINUITY FROM PREVIOUS SCENE: the full-size illustration is still mid-frame from Scene 6 when it glides into the pinned slot - same tower, same two triangles, only smaller.

### Scene 8 - Step 1: h = x root 3 (32.16 - 58.46s)
VOICEOVER: "tangent is the most useful ratio...tan theta = height/base...tan 60 = h/x...root3 = h/x...h = x root 3...[bridge] keep this aside, we'll use it from the other point too."
VISUAL OBJECTIVE: Grow the equation term by term, linking to the near-point triangle on the pinned figure.
ON-SCREEN ELEMENTS: #card-step1 .math (growing fraction row), pinned arc-near/side highlights.
ANIMATION DETAILS: apt.cardEnter at 32.9; apt.textReveal word/line-level per transcript (36.06, 38.88, 41.9, 43.46, 47.88, 51.16); LINK recolor on #arc-near-pinned + #chip-60-pinned at 43.46; apt.emphasize(tl,"#card-step1 .math",54.1) and again 56.8 to keep the card alive through the bridging line (3-second law - no new card needed, this is the SAME derivation continuing).
EDUCATIONAL PURPOSE: derive h = x root3 as a reusable fact, and visibly "park" it before moving to the second triangle.
CONTINUITY FROM PREVIOUS SCENE: the x/x+40 chips just placed on the pinned figure are the exact terms substituted into this equation - same diagram, same numbers, now in algebra form.

### Scene 9 - Step 2: Far-point equation + substitution (58.86 - 79.9s)
VOICEOVER: "Now from the farther point, tan30 = h/(x+40)...1/root3 = h/(x+40)...but h = x root3, so substitute...= x root3/(x+40)."
VISUAL OBJECTIVE: Morph Step 1 into the stack, open Step 2, grow its own equation, then substitute the parked h value in place.
ON-SCREEN ELEMENTS: #card-step2 .math, #stack-step1, LINK to arc-far/chip-30-pinned.
ANIMATION DETAILS: morphToStack step1->stack at 58.1; apt.cardEnter step2 at 59.0; apt.textReveal per transcript (60.48, 64.379, 68.0, 71.38, 77.58); LINK recolor #arc-far-pinned + #chip-30-pinned at 60.48; pulse the stacked Step-1 result at 71.38 when "h is equal to x root three" is re-said (confirms it is the same value being substituted).
EDUCATIONAL PURPOSE: shows the two triangles' equations meeting through the shared unknown h.
CONTINUITY FROM PREVIOUS SCENE: Step 1's result visibly slides into the stack column exactly as Step 2 opens with the far-point triangle already lit from Scene 5/7.

### Scene 10 - Step 3: Solve for x (80.31 - 91.44s)
VOICEOVER: "After cross-multiplication, x+40 = 3x. So 40 = 2x and x = 20. Done. We got the distance of the nearer point."
VISUAL OBJECTIVE: Reveal the cross-multiplied equation, then the solved x = 20, with a confirm pulse on the pinned x-chip.
ON-SCREEN ELEMENTS: #card-step3 .math, #chip-x-pinned (recolor confirm).
ANIMATION DETAILS: morphToStack step2->stack at 80.4; apt.cardEnter step3 at 81.4; apt.textReveal (82.04, 84.8, 87.92); tl.to(#chip-x-pinned,{color:"#4eb85f"},87.92,yoyo,repeat1) LINK confirm.
EDUCATIONAL PURPOSE: closes the algebra loop - x is now a known number, not just a label.
CONTINUITY FROM PREVIOUS SCENE: the substituted equation from Step 2 is still visible in the stack as its cross-multiplied consequence appears center-stage.

### Scene 11 - Step 4: Back-substitute for h (92.7 - 107.32s)
VOICEOVER: "But wait, the question is not asking for this distance...asking for tower height. So use h = x root3. h = 20 root3 meter. Hence, the height of the tower is 20 root3 meters."
VISUAL OBJECTIVE: Redirect attention from x back to h, substitute x=20, reveal the final answer, pulse it green.
ON-SCREEN ELEMENTS: #card-step4 .math (ans span), pinned tower recolor.
ANIMATION DETAILS: morphToStack step3->stack at 91.9; apt.cardEnter step4 at 92.7; apt.textReveal (93.02, 97.9, 100.24, 104.16); apt.resultReveal on the ans span at 104.16; tl.to(#tower-rect-pinned,{stroke:"#4eb85f"},104.16,yoyo,repeat1).
EDUCATIONAL PURPOSE: the "but wait" beat is the common-mistake guardrail (solving for x is not the final answer) made visual by literally redirecting the highlight from the x-chip back to the tower.
CONTINUITY FROM PREVIOUS SCENE: x = 20 is still glowing in the stack from Scene 10 when this card opens by explicitly saying it is NOT the answer.

### Scene 12 - Options Reveal (108.2 - 109.94s)
VOICEOVER: "So the correct option is option A."
VISUAL OBJECTIVE: Clear the stack column view, recenter the pinned question, reveal the 2x2 options grid, pulse the correct option.
ON-SCREEN ELEMENTS: #options-reveal, .opt-btn, .opt-btn.correct.
ANIMATION DETAILS: RECENTER_TIME=108.2 apt.fadeOut(#illus-pinned) + apt.recenterForOptions; morphToStack step4->stack at 108.2; apt.fadeIn(#options-reveal,108.5); apt.optionsStagger(108.9); apt.correctPulse(109.3).
EDUCATIONAL PURPOSE: final confirmation, matching the derived 20 root3 m to option A.
CONTINUITY FROM PREVIOUS SCENE: the glowing final answer from Scene 11 is the same value now shown inside option A.

## PART 3: Asset List Required

- None external. All illustration is hand-authored inline SVG (ground line, tower rect, two ground-point markers, two dashed sight lines, two angle arcs, one double-headed 40m arrow, right-angle marker, chips for 60 deg / 30 deg / x / x+40).
- design-system.css, animations.js, assets/ (logo, serial-num badge) copied from _template/.

## PART 4: Animation Complexity Notes

- Two independent angle-arc derivations (near point r=55, far point r=120) - each gets its own vertex/ratio/angle-check comment block per penelty.txt's mandatory pre-flight checklist, never mirrored from one another.
- Pinned illustration is a coordinate-exact copy (same viewBox, same numbers) of the full-size figure, only width/height and stroke widths shrink, per illustration_reference.md.
- LINK pattern used three times: near-point arc/chip <-> Step 1 equation; far-point arc/chip <-> Step 2 equation; x-chip <-> Step 3 solved value.
- No apt.stepFlow, no infinite repeats, no bare em dash, no bare division sign (all fractions use .frac).
- Step 1 card intentionally spans a bridging narration line (53.44-58.46) rather than exiting early or leaving a dead stack gap - apt.emphasize keeps it alive, matching the "card on screen >8s needs internal beats" rule.

## PART 5: Master Timeline Overview

```
0.00   Question hero rises (heroEnterLowered, RISE_TIME=4.6)
4.60   Illustration: ground-line draws
6.60   Tower grows (0->208px)
8.20   Far point marker (Q) pops
9.00   Near point marker (P) pops
11.48  40m arrow + label pop
13.50  Near sight line draws
15.00  Near angle arc reveals
16.40  "60 deg" chip pops
18.20  Far sight line draws
19.50  Far angle arc reveals
20.48  "30 deg" chip pops
22.00  Right-angle marker reveals
23.00  Tower emphasize pulse
24.00  PIN_TIME - pinFlow question + illustration to top
24.90  GIVEN_TIME - Given card enters (recap)
26.86  "x" chip pops on pinned figure
29.90  "x+40" chip pops on pinned figure
31.90  Given -> stack morph
32.90  Step 1 card enters (h = x root3 derivation)
54.10  Step 1 emphasize (bridge line)
56.80  Step 1 emphasize (bridge line)
58.10  Step 1 -> stack morph
59.00  Step 2 card enters (far-point equation + substitution)
80.40  Step 2 -> stack morph
81.40  Step 3 card enters (cross-multiply, solve x=20)
91.90  Step 3 -> stack morph
92.70  Step 4 card enters (back-substitute, h=20 root3 m)
104.16 Final answer resultReveal + tower confirm pulse
108.20 Step 4 -> stack morph + recenterForOptions
108.50 Options reveal fades in
108.90 Options stagger in
109.30 Correct option (A) pulses
110.54 END_FADE_TIME (109.94 + 0.6)
111.94 TIMELINE_END (110.54 + 1.2 + 0.2) - nothing beyond this
```
