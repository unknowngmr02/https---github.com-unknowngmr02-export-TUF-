# Storyboard - Trigonometry q34 (lighthouse, two ships, depression 30 deg + 60 deg)

Duration (transcript) = 165.94s. Timeline end = 167.94s. Answer: B (60 root3 m).

## PART 1 - Narration Beat Analysis

| Beat | Time | Text | Purpose | Visual objective |
|---|---|---|---|---|
| 1 | 0.12-4.14 | "welcome back... one more problem" | Hook | Question card hero-enters lowered, rises at 3.9 |
| 2 | 4.70-9.36 | "lighthouse and two ships" | Establish scene | Ground/sea line draws, lighthouse rect grows, lamp pops |
| 3 | 10.02-20.46 | "depression from top ... thirty ... sixty degrees" | Name both angles | Far ship + sight-far + chip-30 + arc-far; near ship + sight-near + chip-60 + arc-near |
| 4 | 21.12-28.36 | "distance 120 m ... find height" | State givens | Ship-gap arrow+label(120 m); h-arrow+label(h) on tower |
| 5 | 29.08-36.86 | "understand diagram... take height as h" | Confirm setup | Emphasize whole figure; confirm h-label |
| 6 | 37.40-50.22 | "closer ship 60... farther ship 30" | Re-anchor angles to ships | Emphasize near-ship group, then far-ship group |
| 7 | 50.68-58.56 | "depression = elevation" | Key insight | Dashed horizon line at lighthouse top fades in; both arcs pulse together |
| 8 | 59.14-68.12 | "use angles at ships... easier" | Reframe | Emphasize both sight lines; settle before pin |
| 9 | 68.68-83.94 | "let nearer=x, farther=y... y-x=120" | Define unknowns | Given card recap, then Step1 card builds x, y, relation |
| 10 | 84.50-107.94 | "need relation with h... tan 60=h/x... x=h/root3" | Solve x | Step2 card; LINK pulses on near-ship group + x placeholder |
| 11 | 108.64-122.80 | "same idea, farther ship... tan30=h/y... y=h root3" | Solve y | Step3 card; LINK pulses on far-ship group + y placeholder |
| 12 | 123.40-158.74 | "y-x=120... algebra... h=60 root3" | Combine + solve | Step4 card; LINK pulses building to final h reveal, x/y crossfade to numeric 60 m / 180 m |
| 13 | 159.52-165.94 | "height is 60 root3... option B" | Reveal | Options grid, correct pulse on B |

## PART 2 - Scene-by-Scene

**Scene 1 (0-3.9s):** `apt.heroEnterLowered` on `#q-full-card` (offsetY 180, rise 3.9); serial-num pops at 0.8, settles at 3.9. Continuity: opens cold on dotted-grid.

**Scene 2 (4.6-64.2s), Phase 1 illustration build. Geometry (viewBox "0 0 620 500"):**
```
VERTICES:
  B = (480,400)  right-angle vertex (lighthouse base, sea level)
  C = (480,250)  apex (lighthouse top), height = 150
  A1 = (393.40,400)  angle vertex, NEAR ship (60 deg) - leftmost of A1,B
  A2 = (220.19,400)  angle vertex, FAR ship (30 deg) - leftmost of A2,B
NEAR TRIANGLE: opposite(B-C)=150, adjacent(A1-B)=150/tan(60)=86.60
  atan2(150,86.60)=60.00 deg -> --angle:60 matches. hyp = 2*86.60 = 173.21 (30-60-90 rule)
FAR TRIANGLE: opposite(B-C)=150, adjacent(A2-B)=150/tan(30)=259.81
  atan2(150,259.81)=30.00 deg -> --angle:30 matches. hyp = 2*150 = 300.00
STYLISED: absolute pixel scale is schematic (not a fixed m/px ratio) - both
  triangles' own tan ratios are exact, which is what the checklist requires.
VIEWBOX: "0 0 620 500"; ships x[190..425] y[345..404]; lighthouse x[460..500] y[250..400]
```
- 4.6 ground/sea line draws (0.6s, len 390: x 150->540)
- 5.2 lighthouse-rect grows (attr height 150, y 250)
- 6.6 lamp marker + 2 light rays pop at top
- 10.0 far ship (image) pops in at A2, sight-far (dashed, len 300) draws
- 14.6 arc-far (r=55, --angle:30) opacity in, chip-30 pops
- 19.3 near ship pops in at A1, sight-near (dashed, len 173.21) draws
- 19.9 arc-near (r=40, --angle:60) opacity in, chip-60 pops
- 21.3 ship-gap arrow (A2<->A1) pops, 21.8 label "120 m" pops
- 25.4 h-arrow (right of tower) pops, 26.0 label "h" pops
- 29.1 emphasize whole illustration group
- 33.7 emphasize h-arrow/label (confirm "height as h")
- 37.4 emphasize near-ship group (ship, sight-near, arc-near, chip-60)
- 46.6 emphasize far-ship group (ship, sight-far, arc-far, chip-30)
- 50.7 horizon-line (dashed, at C, len 200) fades in
- 54.1 both arcs pulse together (stroke-width yoyo) - sells "depression=elevation"
- 59.1 emphasize sight-near, 61.9 emphasize sight-far
- 64.2 PIN_TIME
Continuity: nothing drawn is ever removed before the pin; every beat above is a new visual event, no gap exceeds 3s.

**Scene 3 (64.2s) PIN_TIME:** `apt.pinFlow` #q-full-card->#q-pinned and #illustration->#illus-pinned; serial-num fades out.

**Scene 4 (64.8-67.6s) Given:** `apt.cardEnter` + `apt.textReveal` on `#card-given`: near-ship angle 60 deg, far-ship angle 30 deg, ship gap 120 m, find h. Morph to stack at 67.6.

**Scene 5 (69.4-82.0s) Step 1 (define x, y, relation):** `x` = nearer distance, `y` = farther distance, ships 120 m apart -> `y - x = 120`. LINK: emphasize A1/A2 groups as x/y are named. Morph to stack at 82.0, `line-g-1` grows.

**Scene 6 (83.8-106.0s) Step 2 (solve x):** why tan (connects height + base) -> nearer ship: `tan 60 = h/x` -> `root3 = h/x` -> `x = h/root3`. LINK: emphasize near-ship group at 97.4, at 104.9 pinned "x" placeholder crossfades to "h/root3" with sight-near recolor pulse. Morph to stack at 106.0, `line-1-2` grows.

**Scene 7 (107.8-123.0s) Step 3 (solve y):** same idea, farther ship: `tan 30 = h/y` -> `1/root3 = h/y` -> `y = h*root3`. LINK: emphasize far-ship group at 108.6, at 121.8 pinned "y" placeholder crossfades to "h*root3" with sight-far recolor pulse. Morph to stack at 123.0, `line-2-3` grows.

**Scene 8 (124.8-161.5s) Step 4 (combine + solve h):** recall `y - x = 120` -> substitute `h*root3 - h/root3 = 120` -> `h*(root3 - 1/root3) = 120` -> `h*(2/root3) = 120` -> `2h = 120*root3` -> `h = 60*root3`. LINK beats every 3-7s (h-arrow pulse, lighthouse recolor, ambient loop on lamp during the long algebra stretch). At 156.7 pinned h-label crossfades placeholder "h" -> "60root3 m"; immediately after (158.0-161.0) x/y placeholders crossfade to final numeric "60 m" / "180 m" as a confirm flourish (60root3/root3=60, 60root3*root3=180, 180-60=120 matches given). Morph to stack at 161.5, `line-3-4` grows.

**Scene 9 (161.7-167.94s) Options:** fadeOut illus-pinned + recenter q-pinned at 161.7. `options-reveal` fadeIn 164.14, stagger 164.7, correctPulse (B) 165.4. End fade 166.54 (NARR_END 165.94 + 0.6), timeline set 167.94.

## PART 3 - Asset List

- `illustration/ship-svgrepo-com.svg` (user-supplied, used as-is, two `<image>` instances - near/far ship)
- design-system.css tokens only; `.fig-chip` / `.fig-chip-pinned` for the two degree chips
- No other external assets

## PART 4 - Animation Complexity Notes

- Two independent angle-arc derivations (A1 60 deg, A2 30 deg) - each verified separately per penelty.txt 5-step check, never mirrored from one another.
- Angle vertex always leftmost of its own right-angle vertex (B) - satisfied for both A1 and A2 independently.
- All fractions in solution cards use `.frac` (no bare `/` or `÷`).
- `apt.ambientLoop` on the pinned lamp marker during the long Step 4 card (124.8-161.5, 36.7s) so the pinned illustration is never static that long.
- Two LINK crossfades (x, y placeholders) plus a final numeric-confirm flourish (x=60m, y=180m) after h is solved.

## PART 5 - Master Timeline Overview

```
0.0    q-full-card hero enter (rises 3.9)
4.6    illustration build begins
64.2   PIN_TIME
64.8   GIVEN_TIME -> card-given
67.6   MORPH_GIVEN
69.4   card-step1 (x, y, y-x=120)
82.0   MORPH_STEP1
83.8   card-step2 (tan60 -> x=h/root3)
106.0  MORPH_STEP2
107.8  card-step3 (tan30 -> y=h*root3)
123.0  MORPH_STEP3
124.8  card-step4 (combine -> h=60*root3)
161.5  MORPH_STEP4
161.7  RECENTER_TIME
164.14 options-reveal
166.54 END_FADE_TIME
167.94 TIMELINE_END
```
