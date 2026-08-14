# Q26 - Trigonometry & Height n Distance - Storyboard

Duration: 107.579s (transcript.json). PIN_TIME=28.1, GIVEN_TIME=29.0.

## PART 1: Narration Beat Analysis

| # | Time | Narration | Purpose | Focus | Visual objective |
|---|------|-----------|---------|-------|-------------------|
| 1 | 0.12-4.78 | "So welcome back again. It's time to solve one more problem. In this problem," | Hook | Question card | heroEnterLowered rise |
| 2 | 5.32-7.78 | "a person is standing at a certain distance from a tower." | Setup | Ground + person + tower | ground draws, person pops at P1, pole grows |
| 3 | 8.34-11.80 | "angle of elevation of top of tower is thirty degrees." | Given | Angle 1 | sight-line1 draws, arc-30 fades in, chip "30deg" pops |
| 4 | 12.30-14.52 | "Then the person walks twenty meters towards the tower." | Given | Walk | person glides P1->P2, "20 m" arrow pops, ghost dot marks P1 |
| 5 | 15.04-16.84 | "Now the angle becomes forty-five degrees," | Given | Angle 2 | sight-line2 draws, arc-45 fades in, chip "45deg" pops |
| 6 | 17.40-19.22 | "we need to find the height of the tower." | Goal | Pole | emphasize pole-rect |
| 7 | 19.70-22.66 | "Let the distance from tower after walking be x," | Variable | P2-B segment | arrow "x" pops |
| 8 | 23.02-25.30 | "so the initial distance becomes x plus twenty." | Variable | P1-B segment | bracket arrow "x + 20" pops |
| 9 | 25.86-27.66 | "Let the height of the tower be h." | Variable | Pole | arrow + label "h" pops |
| 10 | 28.10 (PIN) | - | Reorganize | Question+illustration | pinFlow to top |
| 11 | 29.00-32.84 | "Now, let us start with the second position where angle is forty-five degrees." | Recap | Given card | cardEnter, textReveal, pulse chip-45/arc-45 pinned |
| 12 | 33.30-35.54 | "we know the opposite side and the adjacent side." | Recap | Pinned figure | pulse arrow-h (opposite), arrow-x (adjacent) |
| 13 | 35.96-52.60 | "tan theta ... h by x ... h = x." | Step 1 | Step1 card | morphToStack Given, cardEnter Step1, build tan45 = h/x = 1 -> h=x |
| 14 | 53.04-58.04 | "Got it? Perfect. keep this value... next step." | Confirm | Step1 answer | emphasize h=x |
| 15 | 58.54-92.26 | "first position ... tan30 = h/(x+20) ... h(root3-1)=20 ... h=20/(root3-1)." | Step 2 | Step2 card | morphToStack Step1, cardEnter Step2, build + solve equation |
| 16 | 92.30-98.86 | "rationalize ... h = 10(root3+1)." | Step 3 | Step3 card | morphToStack Step2, cardEnter Step3, rationalize, reveal answer |
| 17 | 98.90-107.58 | "Done and dusted... final answer ten(root3+1) meter. Hence option B correct." | Reveal | Options | morphToStack Step3, options fade in/stagger, correctPulse on B |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 (0-4.9s) - Hook
Question card rises via `apt.heroEnterLowered` at RISE_TIME=4.9 (after "In this problem," ends). Serial badge mirrors the same offset.

### Scene 2 (5.3-27.95s) - Phase 1 illustration build
Flat 2D scene, viewBox `0 0 540 500`. Vertices: P1=(80,350) far observer, P2=(190,350) near observer, B=(340,350) tower base/right-angle vertex, C=(340,200) apex. Ground drawn 5.4-6.0s, person icon pops at P1 5.9s, pole grows 7.6-8.3s. Sight-line1 + arc-30 (r=70) + chip "30deg" build 8.5-11.3s. Person glides P1->P2 (translateX +110, representing 20m) 12.86-13.76s while a ghost dot marks P1 and sight-line1/arc-30 dim to 0.35 opacity (reference state). "20 m" arrow pops under the walk 13.14s. Sight-line2 + arc-45 (r=55, shares cy=350 with arc-30) + chip "45deg" build 15.1-16.3s. Pole emphasized at 17.8s (goal beat). Arrow+label "x" (P2-B) pops 22.54s. Bracket arrow+label "x + 20" (P1-B) pops 23.3s. Arrow+label "h" (pole height, right of pole) pops 26.2-27.6s - the tower's asked-for height, left as an unknown letter, never a number.

### Scene 3 (28.1-35.9s) - Pin + Given recap
`apt.pinFlow` at PIN_TIME=28.1 glides question+illustration into the pinned slot (coordinate-exact copy, scale 500/540). Given card enters at GIVEN_TIME=29.0 with 4 recap lines (angle-far 30deg, angle-near 45deg, walked 20m, find height). While it holds, the pinned figure's arc-45/chip-45 pulse (31.92s), then arrow-h ("opposite") and arrow-x ("adjacent") pulse in LINK with narration naming those sides (33.86s / 34.76s). Given card morphs to stack at 35.2s.

### Scene 4 (36.0-58.3s) - Step 1 (near position, 45deg)
Step1 card builds: recap opposite=h/adjacent=x (36.0s), `tan theta = height/base` (40.38s), `tan45 = h/x` (43.02s), `tan45=1 so h/x=1` (46.22s/48.08s), `h = x` .ans (51.06s, re-emphasized 54.06s). Each figure value pulses on the pinned illustration in LINK with the equation the same frame. Morph to stack at 58.3s.

### Scene 5 (59.1-92.6s) - Step 2 (far position, 30deg)
Step2 card builds the second equation: `tan30 = h/(x+20)` (63.74s), `tan30 = 1/root3` (67.8s), "h=x, replace x -> h" (73.66s), `1/root3 = h/(h+20)` (77.6s), cross-multiply `h+20 = root3.h` (82.0s), `20 = h(root3-1)` (85.66s), `h = 20/(root3-1)` .ans (89.26s). Every "h" mention pulses arrow-h-pinned; every "x+20" mention pulses the bracket arrow. Morph to stack at 92.6s.

### Scene 6 (93.4-99.6s) - Step 3 (rationalize)
Step3 card: "Rationalize the denominator" (92.3s), supporting multiply-by-conjugate line (92.6s), final `h = 10(root3+1) m` .ans (95.48-98.08s), re-emphasized through "Done and dusted" (98.9s). Morph to stack + illustration fades + question recenters at 99.6s.

### Scene 7 (100.4-107.58s) - Options reveal
Options fade in 100.4s, stagger 100.9s, correct option B pulses at 106.5s ("option B is correct"). End fade at 108.18s (NARR_END 107.579 + 0.6), timeline ends 109.58s.

## PART 3: Asset List Required
None external - pure inline SVG (ground line, person-icon group x2 states via tween, pole rect, sight-line1/2, angle-arc x2, right-angle marker, 6 measurement arrows+labels, 2 fig-chips for degrees, 2 role fig-chips Adjacent/Opposite on pinned copy).

## PART 4: Animation Complexity Notes
- Two angle arcs share the same `cy=350` so both use `translate(0,700)`.
- Person-icon reused as a single element tweened via GSAP `x` (not two separate icons) to represent walking; a static ghost dot preserves the vacated vertex P1 for arc-30/sight-line1 to keep referencing.
- Pinned illustration is a static, coordinate-exact copy at the FINAL built state (person at P2, both triangles, all arrows/labels visible) except the Adjacent/Opposite role chips, which start hidden and are used twice (near x-arrow for Step 1, retargeted near the x+20 bracket for Step 2) via a position tween, not a duplicate element.
- No new `animations.js` helpers required; only inline `tl.to`/`tl.fromTo` for the custom illustration beats, per the framework's own allowance.

## PART 5: Master Timeline Overview
```
0.3    q-full-card lowered entrance
4.9    RISE_TIME (question rises)
5.4    ground-line draws
5.9    person-icon pops @P1
7.6    pole grows
8.5    sight-line1 draws
10.0   arc-30 fades in
10.98  chip-30 pops
12.86  person glides P1->P2 (0.9s); sight-line1/arc-30 dim to reference state
13.14  arrow "20 m" pops
13.6   ghost dot @P1 pops
15.1   sight-line2 draws
15.9   arc-45 fades in
15.96  chip-45 pops
17.8   pole emphasize
20.3   arc-45 emphasize (gap filler)
22.54  arrow "x" pops
23.3   bracket "x + 20" pops
26.2   arrow "h" pops
27.6   label "h" pops
28.1   PIN_TIME - pinFlow question+illustration
29.0   GIVEN_TIME - Given card enters, textReveal
31.92  pulse chip-45/arc-45 pinned
33.86  pulse arrow-h pinned (opposite)
34.76  pulse arrow-x pinned (adjacent)
35.2   Given -> stack morph
36.0   Step1 card enters
40.38  tan theta = height/base
43.02  tan45 = h/x
46.22  tan45 = 1
48.08  h/x = 1
51.06  h = x (.ans)
54.06  re-emphasize h=x
58.3   Step1 -> stack morph
59.1   Step2 card enters
63.74  tan30 = h/(x+20)
67.8   tan30 = 1/root3
73.66  h=x, replace x->h
77.6   1/root3 = h/(h+20)
82.0   cross-multiply
85.66  20 = h(root3-1)
89.26  h = 20/(root3-1) (.ans)
92.6   Step2 -> stack morph
93.4   Step3 card enters
95.48  h = 10(root3+1) m (.ans)
99.6   Step3 -> stack morph, illus fadeOut, recenter
100.4  options-reveal fadeIn
100.9  optionsStagger
106.5  correctPulse (option B)
108.18 END_FADE_TIME
109.58 tl.set (timeline end)
```
