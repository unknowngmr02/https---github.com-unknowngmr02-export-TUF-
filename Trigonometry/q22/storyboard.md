# Storyboard - Trigonometry q22 (Balloon, two observation points)

Duration: 109.82s (NARR_END). END_FADE_TIME=110.42, TIMELINE_END=111.82.

## PART 1 - Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0.1-2.98 | "welcome back... one more problem" | Hook | Question card | Hero entrance, lowered start |
| 2 | 3.5-6.74 | "two points... same side of a balloon" | Setup | Ground + balloon | Ground line draws, balloon string+icon grows |
| 3 | 7.4-10.06 | "distance between points is 100 meter" | Given #1 | Distance arrow | Arrow + "100 m" label pop |
| 4 | 10.54-13.82 | "from one point, angle of elevation 60" | Given #2 | Near sight line + arc | Dashed line, arc, "60°" chip |
| 5 | 14.22-18.32 | "from other point, angle of elevation 30" | Given #3 | Far sight line + arc | Dashed line, arc, "30°" chip |
| 6 | 18.72-25.58 | "nearer has bigger angle... find height" | Framing | Chips, balloon | Re-emphasis beats, "h m" arrow appears |
| 7 | 26.08-36.64 | "let distance be x... farther = x+100" | Given #4/5 (unknowns) | Pinned illustration | x, x+100 arrows pop on pinned figure (LINK) |
| 8 | 37.28-45.32 | "tan formula... tan θ = height/base" | Step 1 setup | General formula | Growing equation |
| 9 | 45.94-55.2 | "from nearer point... h = x√3" | Step 1 result | Near-point equation | Formula substitution, LINK |
| 10 | 55.74-70.8 | "from farther point... h = (x+100)/√3" | Step 2 | Far-point equation | Formula substitution |
| 11 | 71.24-92.76 | "equal expressions... x = 50" | Step 3 | Algebra | Equation solve, term reveals |
| 12 | 93.38-104.72 | "not asked for x... h = 50√3 m" | Step 4 | Final answer | Substitute back |
| 13 | 105.66-109.82 | "final answer... option D" | Reveal | Options grid | Stagger + correct pulse |

## PART 2 - Scene-by-Scene Storyboard

### SCENE 1 (0-6.74s) - Question + ground + balloon
SCREEN LAYOUT: Question card centered top (q-full-card), serial badge top-left, illustration area centered below.
ON-SCREEN ELEMENTS: `#q-full-card`, `#serial-num`, `#ground-line`, `#balloon-string`, `#balloon-icon`.
ANIMATION: `apt.heroEnterLowered` (0.3, offset180, rise 3.2). Serial pop 0.8. Ground line strokeDashoffset 300->0 at 4.94 (0.6s power2.out). Balloon string strokeDashoffset draw + balloon icon scale-pop together at 6.44 (0.7s).
CONTINUITY: opens cold, nothing prior.

### SCENE 2 (7.4-18.32s) - Distance, near angle, far angle
ON-SCREEN: `#arrow-100`/`#label-100` (double-head horizontal arrow B-A, "100 m"), `#marker-a`/`#marker-b` point dots, `#sight-line-a` (dashed A-C), `#angle-arc-a`, `#chip-60`, `#sight-line-b` (dashed B-C), `#angle-arc-b`, `#chip-30`.
Markers pop at 5.6 (before this range, listed for continuity). Arrow-100 pops 7.4, label at 9.24 ("hundred"). Sight-line-a fades in 10.8 (0.5s). Arc-a opacity-in 13.04 (0.4s), chip-60 pops 13.42 (back.out(1.6)). Sight-line-b fades in 14.5. Arc-b opacity-in 17.48, chip-30 pops 17.88.
CONTINUITY: ground/balloon from Scene 1 stay static; new elements build on top left-to-right per narration order.

### SCENE 3 (18.72-25.65s) - Framing + unknown height teaser
ANIMATION: `apt.emphasize(#chip-60, 20.14)`, `apt.emphasize(#marker-a, 22.08)`, `#arrow-h`/`#label-h` pop at 24.5 (vertical arrow along balloon string, "h m").
EDUCATIONAL PURPOSE: re-anchors that 60deg belongs to the nearer point right before the pin, and visually poses the unknown (h) the problem asks for.

### SCENE 4 (25.65-37.28s) - Pin + Given card + unknowns on pinned figure
PIN_TIME=25.65: `apt.pinFlow` on `#q-full-card`->`#q-pinned` and `#illustration`->`#illus-pinned`.
GIVEN_TIME=26.08: `apt.cardEnter(#card-given)`, `apt.textReveal`. Given card lines: "Distance between points = 100 m" (t=7.4, already resolved), "Near-point angle = 60°" (t=11.65), "Far-point angle = 30°" (t=15.52), "Let nearer distance = x m" (t=26.08), "Farther distance = x + 100 m" (t=31.98).
LINK beats on pinned illustration: `apt.emphasize(#marker-a-pinned, 28.4)`, `#arrow-x-pinned`/`#label-x-pinned` pop 30.76 (word "x"), `#arrow-x100-pinned`/`#label-x100-pinned` pop 32.28, `apt.emphasize(#balloon-icon-pinned, 35.0)`.
Given morphs to stack at 37.28 (`apt.morphToStack`), matches narration pivot "Now we will use the tan formula."

### SCENE 5 (38.28-55.8s) - Step 1: general formula -> near-point result
Card content (word-level `.rv`): "tan"(42.66) "θ"(42.92) "="(43.52) frac[height/base](43.92); re-emphasize frac at 45.94; "tan"(47.22) "60°"(47.46) "="(48.38) frac[h/x](48.98); "Root three"(50.16) "="(50.92) frac[h/x](51.44); "h"(53.2) "="(53.76) "x√3"(54.32, ans).
Fillers during framing gap (38.28-42.66): `apt.emphasize(#balloon-string-pinned,39.9)`, `apt.emphasize(#arrow-h-pinned,40.9)`.
Morph to stack at 55.8 (matches "Keep this height... From the farther point").

### SCENE 6 (56.8-71.4s) - Step 2: far-point result
Card content: "tan"(59.34) "30°"(59.53) "="(60.22) frac[h/(x+100)](60.7); "One"(62.88, "1/√3") "="(63.88) frac[h/(x+100)](64.68); "h"(67.4) "="(67.84) frac[(x+100)/√3](68.44, ans).
Morph to stack at 71.4 (matches "Now both these expressions...").

### SCENE 7 (72.4-93.36s) - Step 3: equate and solve for x
Card content, line-level: "Both = same height, so equate:"(72.4) with filler `apt.emphasize(#balloon-string-pinned,74.0)`; "x√3 = (x+100)/√3"(77.12, re-emphasized 79.0); "Multiply both sides by √3"(80.7, re-emphasized 83.1); "3x = x + 100"(84.36, re-emphasized 86.2); "2x = 100"(87.78); "x = 50"(90.7, ans).
Morph to stack at 93.36 (matches "Now we are not asked for x").

### SCENE 8 (94.36-105.32s) - Step 4: compute final height
Card content: "Height h needed, not x"(94.4); "h = x√3"(97.52, filler emphasize at 99.6); "h = 50√3 m"(101.3, ans, re-emphasized 103.0).
RECENTER_TIME=105.32: `apt.morphToStack`, `apt.fadeOut(#illus-pinned)`, `apt.recenterForOptions(#q-pinned)`.

### SCENE 9 (106.12-111.82s) - Options reveal
`apt.fadeIn(#options-reveal,106.12)`, `apt.optionsStagger(106.6)`, `apt.correctPulse(.correct, 107.95)`. `apt.fadeOut("#root > div", 110.42, 1.2)`. `tl.set({}, {}, 111.82)`.

## PART 3 - Asset List Required
None external. All illustration is hand-authored inline SVG (ground line, two point markers, two dashed sight lines, two theta-arc circles, balloon string + icon, three measurement arrows: 100m/h/x/x+100, two angle chips). Template CSS/JS/assets copied from `_template/`.

## PART 4 - Animation Complexity Notes
- Two independent triangles sharing the right-angle vertex O and apex C: each angle arc is its own derivation (penelty.txt mandatory check), never mirrored numbers.
- Angle vertices (A, B) both left of the shared right-angle vertex O, so both arcs' fixed 0deg start (+x) points toward O correctly.
- Height OC used identically by both triangles (100*tan60 = 300*tan30 = 173.205), which is what makes the geometry internally consistent without needing separate stylised offsets.
- `x` / `x+100` measurement arrows exist only on the pinned copy (introduced after PIN_TIME); `h`, `100m`, angle chips, sight lines, arcs, ground, balloon are shared full-size+pinned per the coordinate-exact-copy rule.
- 3-second law required extra filler beats (pinned-figure emphasize pulses, re-emphasis on already-revealed equation terms) in Steps 1/3/4's framing gaps - documented inline above.

## PART 5 - Master Timeline Overview

```
PIN_TIME=25.65  GIVEN_TIME=26.08
Given   26.08 -> morph 37.28  (dur 14)
Step1   38.28 -> morph 55.8   (dur 20)
Step2   56.8  -> morph 71.4   (dur 17)
Step3   72.4  -> morph 93.36  (dur 23.5)
Step4   94.36 -> morph 105.32 (dur 13.5)
RECENTER_TIME = 105.32
Options fadeIn 106.12, stagger 106.6, correctPulse 107.95
END_FADE_TIME=110.42, TIMELINE_END=111.82
```

## Geometry (illustration_reference.md / penelty.txt compliance)

```
VERTICES:
  B = (220,400)  farther angle vertex (30deg) - leftmost point overall
  A = (420,400)  nearer angle vertex (60deg)
  O = (520,400)  right-angle vertex (foot of perpendicular under balloon)
  C = (520,226.795) apex (balloon tie point)
GROUND: y = 400
SCALE: 2px per real meter (real x=50 -> OA=100px; real 100m -> AB=200px)
HEIGHT: OC = OA * tan(60) = 100 * 1.7320508 = 173.205
RATIO CHECK A: OA=100, OC=173.205 -> atan2(173.205,100) = 60.00deg, --angle:60 matches
RATIO CHECK B: OB=300 (=OA+AB=100+200), OC=173.205 -> atan2(173.205,300) = 30.00deg, --angle:30 matches
  (both derived from the SAME OC, confirming h/x = tan60 and h/(x+100) = tan30 are geometrically consistent)
LENGTH CHECK AC: sqrt(100^2+173.205^2) = 200.00
LENGTH CHECK BC: sqrt(300^2+173.205^2) = 346.41
VIEWBOX: x[130..710] y[150..570] -> "130 150 580 420" (width 580 kept equal to the q20
  reference so the standard scale factors 1.733 full-size / 0.862 pinned still apply)
ARC A: cx=420 cy=400 r=50, C=314.16, translate(0,800), --angle:60
ARC B: cx=220 cy=400 r=75, C=471.24, translate(0,800), --angle:30
RIGHT-ANGLE MARKER at O=(520,400): rays -x (toward A) and -y (toward C), inset 20 ->
  path "M 500,400 L 500,380 L 520,380"
```
