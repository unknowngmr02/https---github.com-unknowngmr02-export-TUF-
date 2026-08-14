# Q31 - Trigonometry - Storyboard

Duration: 117.02s (transcript.json). Two-tower problem: Tower 1 = 50 m (known). From
the foot of Tower 2, elevation to top of Tower 1 = 60deg. From the top of Tower 2,
elevation to top of Tower 1 = 30deg. Find height h of Tower 2. x = distance between
towers. Answer: h = 100/3 m (Option C).

No Given card (per README, "typically 1 Given + N steps, not mandatory" - here the
givens (50m, 60deg, 30deg) are fully established during the Phase-1 illustration build
and recapped by the pinned figure itself, same pattern as q30). Stack column starts
directly at Step 1 (circle "1") and Step 2 (circle "2").

Symbols only, never spelled words: deg (as degree glyph), sqrt via `.frac`-free
radical span `&radic;3`, theta not needed (angle values only). Every division uses
`.frac`, never a bare division slash/colon in solution math.

PIN_TIME = 36.9. Only one triangle vertex is genuinely known at video start (Tower 1's
height); the illustration mirrors the object-on-the-left convention twice, independently
derived (see illustration geometry block in index.html) since this question has TWO
angle arcs on TWO different vertices.

## PART 1: Narration Beat Analysis

| # | Time | Narration | Purpose | Focus | Visual objective |
|---|------|-----------|---------|-------|-------------------|
| 1 | 0.08-3.76 | "So welcome back again. It's time to solve one more problem." | Hook | Question card | heroEnterLowered rise at 3.9 |
| 2 | 4.38-7.16 | "In this problem, we have a tower of height fifty meter." | Setup | Illustration | ground draws-in, Tower 1 grows to 260px (50m), "50 m" chip pops |
| 3 | 7.72-9.03 | "From the foot of the second tower," | Setup | Illustration | Tower 2 (dashed, unknown) grows + F2 foot marker pops, "h m" chip pops |
| 4 | 9.54-14.23 | "the angle of elevation to the top of the first tower is sixty degrees," | Given angle 1 | sight line 1 + arc 1 | dashed sight line F2->T1 draws in, arc-60 fades in, "60°" chip pops |
| 5 | 14.62-16.09 | "and from the top of the second tower," | Setup | Illustration | T2 top marker pops |
| 6 | 16.48-20.84 | "the angle of elevation to the top of the first tower is thirty degrees." | Given angle 2 | sight line 2 + arc 2 | dashed sight line T2->T1 draws in, arc-30 fades in, "30°" chip pops |
| 7 | 20.9-24.74 | "The problem is asking us to find the height of the second tower." | Goal | Tower 2 + h chip | emphasize Tower 2 outline + "h m" chip |
| 8 | 24.78-30.92 | "So to understand this clearly, draw both towers and join the top of the first tower to the top and foot of the second tower." | Recap | whole figure | right-angle markers pop at F1 and at (290,257); emphasize both sight lines |
| 9 | 31.26-34.82 | "Let the distance between the two towers be x and let the height of the second tower be h." | Label vars | x arrow + h chip | "x" measurement arrow + label pop; re-emphasize "h m" chip |
| 10 | 35.18-36.58 | "Okay, everything is clear now." | Confirm | whole figure | emphasize whole #illustration |
| 11 | 36.9 (PIN) | - | Reorganize | Q + illustration | pinFlow to pinned slot |
| 12 | 37.9-41.52 | "First, focus on the line going from the foot of the second tower to the top of the first tower." | Step1 open | Step1 card + sight-line-1-pinned | cardEnter 37.9, line-reveal paraphrase, LINK pulse sight-line-1-pinned |
| 13 | 41.98-43.2 | "Why are we doing this first?" | Framing | Step1 card | emphasize question line |
| 14 | 43.58-49.06 | "Because here, we already know the full height, which is fifty meters, and this will help us find the distance x." | Reasoning | Tower1-pinned + x-pinned | LINK pulse "50 m" pinned label + Tower1 outline; pop "find: x" note |
| 15 | 49.6-52.94 | "So using ten sixty degrees, tan sixty degrees equals height upon base." | Formula | Step1 math | "tan 60° = Height/Base" line pops (word-level) |
| 16 | 53.44-55.96 | "Now we have root three equals fifty upon x." | Substitution | Step1 math | "&radic;3 = 50/x" `.frac` pops |
| 17 | 56.52-60.88 | "Then after solving this, we get x equals fifty upon root three." | Result | Step1 math | "x = 50/&radic;3" `.frac` .ans pops |
| 18 | 60.92-65.69 | "Got it? Perfect. Now keep this value with us. We will use it in the next step." | Confirm+carry | Step1 .ans | emphasize x=50/&radic;3, LINK pulse x-arrow-pinned |
| 19 | 65.9 (morph) | - | Step1 -> stack | circle "1" | morphToStack 65.9 |
| 20 | 66.98-71.32 | "Next, focus on the line joining the top of the second tower to the top of the first tower." | Step2 open | Step2 card + sight-line-2-pinned | cardEnter 67.9, line-reveal paraphrase, LINK pulse sight-line-2-pinned |
| 21 | 71.68-76.32 | "The first tower is fifty meter tall and the second tower is h meter tall." | Recap heights | Step2 math + pinned labels | "Tower1=50m" pop 71.68 LINK 50m-pinned; "Tower2=h m" pop 75.48 LINK h-pinned |
| 22 | 76.72-80.2 | "So the vertical difference between their tops will be fifty minus h." | Diff | Step2 math | "diff = 50 - h" line pops, LINK pulse the T2-to-(290,257) vertical segment |
| 23 | 80.6-85.54 | "This is very important. We are not using h directly. We are using the difference in heights, which is fifty minus h." | Emphasis | Step2 math | re-emphasize "50 - h" span twice |
| 24 | 86.66-90.96 | "Okay, now using tan thirty degrees, tan thirty degrees equals fifty minus h upon x." | Formula | Step2 math | "tan 30° = (50-h)/x" pops, LINK pulse arc-30-pinned |
| 25 | 91.5-95.8 | "Now we have one upon root three equals fifty minus h upon x." | Substitution | Step2 math | "1/&radic;3 = (50-h)/x" `.frac` pops |
| 26 | 96.46-102.82 | "Then substituting the value of x, one upon root three equals fifty minus h upon fifty by root three." | Substitution 2 | Step2 math + stack-step1 | "...= (50-h)/(50/&radic;3)" pops, LINK pulse stack-step1's x=50/&radic;3 |
| 27 | 102.88-106.4 | "After solving this, we get fifty minus h equals fifty upon three." | Simplify | Step2 math | "50 - h = 50/3" `.frac` pops |
| 28 | 106.4-109.26 | "Then simplifying further, h equals one hundred upon three meter." | Answer | Step2 .ans | "h = 100/3 m" `.frac` pops, Tower2 outline flips dashed->solid + green confirm pulse, "h m" pinned chip -> "100/3 m" |
| 29 | 109.74-110.35 | "Done and dusted." | Confirm | Step2 .ans | emphasize .ans |
| 30 | 111.18-114.08 | "So the height of the other tower is one hundred by three meters." | Restate | Step2 .ans | re-emphasize .ans |
| 31 | 112.5 (morph) | - | Step2 -> stack | circle "2" | morphToStack 112.5, recenter for options |
| 32 | 114.64-117.02 | "Hence, the final answer will be option C." | Reveal | Options | fadeIn 113.8, stagger 114.3, correctPulse C 116.4 |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 (0-3.9s) - Hook
`apt.heroEnterLowered` on `#q-full-card` (offsetY 180, riseTime 3.9 - end of "one more
problem."). Serial badge mirrors the offset/rise. Question text: "A tower is 50 m
high. From the foot of a second tower, the angle of elevation of the top of the first
tower is 60°, while from the top of the second tower, the angle of elevation of the
top of the first tower is 30°. Find the height of the second tower." with `50 m`, `60°`,
`30°` in primary blue `.num` spans.

### Scene 2 (3.9-36.9s) - Phase 1 illustration build (two towers)
Full-size figure at `#illustration` (viewBox `0 0 580 500`, rendered 1005x866, scale
1.733 - matches `illustration_reference.md` canvas contract). Two right triangles share
the ground: Tower 1 (right, known 50 m, solid blue outline) and Tower 2 (left, unknown
h, dashed blue outline until solved).

VERTICES (see full derivation comment in index.html):
```
F2 = (140,430)  Tower 2 foot - angle vertex of the 60deg triangle
T2 = (140,257)  Tower 2 top  - angle vertex of the 30deg triangle
F1 = (290,430)  Tower 1 foot - right-angle vertex of the 60deg triangle
T1 = (290,170)  Tower 1 top  - apex of both triangles
RA2 = (290,257) right-angle vertex of the 30deg triangle (horizontal from T2 meets
      the vertical line under T1)
```
Triangle 1 (F2-F1-T1): base=150, opposite=260, atan2(260,150)=60.07deg -> arc:60 OK.
Triangle 2 (T2-RA2-T1): base=150, opposite=87, atan2(87,150)=30.09deg -> arc:30 OK.
Both angle vertices (F2, T2) sit left of their right-angle vertices (F1, RA2) - the
angle-vertex-on-the-left rule satisfied independently for each triangle.

Beats (all times from Part 1 table):
- 4.38 ground line draws in (stroke-dashoffset, len=230, x=100 to x=330).
- 4.6 Tower 1 rect grows (attr height 0->260, y 430->170), solid `--primary` outline.
- 6.54 "50 m" `.fig-chip` pops beside Tower 1.
- 7.72 Tower 2 rect grows (attr height 0->173, y 430->257), DASHED `--primary` outline
  (stroke-dasharray "6 6") - visually flags "unknown" without inventing a color. F2
  foot marker (small circle) pops same beat.
- 8.2 "h m" `.fig-chip` pops beside Tower 2 (dashed border variant, still `--primary`).
- 9.7 sight-line-1 (F2->T1, dashed black, len=300) draws in.
- 13.3 angle-arc-1 (60°, r=70, cx=140 cy=430) fades in (opacity only, unitless
  `--angle:60`).
- 13.8 "60°" `.fig-chip` pops.
- 14.62 T2-top marker pops.
- 16.6 sight-line-2 (T2->T1, dashed black, len=173) draws in.
- 20.0 angle-arc-2 (30°, r=60, cx=140 cy=257) fades in.
- 20.46 "30°" `.fig-chip` pops.
- 22.98 emphasize Tower 2 outline + "h m" chip ("find the height of the second
  tower").
- 27.7 right-angle marker at F1 pops (rays -x/-y, inset 20).
- 29.7 right-angle marker at RA2 pops.
- 26.44-29.9 apt.emphasize both sight lines in turn (narration "draw both towers and
  join...").
- 31.5 "x" measurement arrow (horizontal, F2.x to F1.x, y=464) + label pop.
- 34.64 re-emphasize "h m" chip ("...height of the second tower be h").
- 35.72 apt.emphasize `#illustration` as a whole ("everything is clear now").

No gap in this scene exceeds ~3.5s (see beat list - dense one-beat-per-1.5-3s build,
consistent with Section 4's Beat Fill algorithm).

### Scene 3 (36.9-37.9s) - Pin
`apt.pinFlow(tl, "#q-full-card", "#q-pinned", 36.9)` and
`apt.pinFlow(tl, "#illustration", "#illus-pinned", 36.9)`. Pinned illustration is a
coordinate-exact copy (same viewBox/internal numbers, width/height 500x431, scale
0.862) with Tower 2 still dashed + "h m" chip - it only flips to solid + green at the
Step 2 answer reveal (LINK pattern, beat 28).

### Scene 4 (37.9-65.9s) - Step 1: solve for x via tan 60°
`apt.cardEnter(tl, "#card-step1 .solution-card", 37.9)`. Chip "Step 1". Content
(`.rv` word/line-level, `apt.textReveal`):
```
Focus: line from foot of Tower 2 to top of Tower 1
Known: Tower 1 = 50 m  ->  find x
tan 60° = Height / Base
√3 = 50 / x
x = 50 / √3
```
- Line 1 (paraphrase) reveals 37.9, LINK: `apt.emphasize(tl, "#sight-line-1-pinned",
  38.3)`.
- 41.98 `apt.emphasize` the "Focus" line (re-mentioned via "why are we doing this
  first").
- 43.58/46.14 LINK: pulse "50 m"-pinned chip + Tower1-pinned outline (`--success`
  stroke pulse, then back) as narration confirms the known height.
- 47.24 "find x" phrase pops (line-level, paraphrase of "this will help us find the
  distance x").
- 51.08 "tan 60°" word-pop, 51.98 "=" fade, 52.24 "Height / Base" `.frac` pop.
- 54.38 "√3" word-pop, 54.92 "=" fade, 55.2 "50/x" `.frac` pop.
- 58.37 "x" word-pop, 58.72 "=" fade, 59.04 "50/√3" `.frac` `.ans` pop.
- 60.92 `apt.emphasize` on the `.ans` line ("Got it? Perfect.").
- 62.88 LINK: `apt.emphasize(tl, "#arrow-x-pinned")` ("now keep this value with us"
  - the x-arrow on the pinned figure pulses along with the solved value, since x is
  about to be reused in Step 2).

### Scene 5 (65.9-112.5s) - Step 2: solve for h via tan 30°
`apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 65.9)`
- fires after the last Step 1 reveal (62.88 + buffer), well clear of "Next," at 66.16.
`apt.cardEnter(tl, "#card-step2 .solution-card", 67.9)`. Chip "Step 2". Content:
```
Focus: line from top of Tower 2 to top of Tower 1
Tower 1 = 50 m, Tower 2 = h m
Vertical difference = 50 - h
tan 30° = (50 - h) / x
1/√3 = (50 - h) / x
1/√3 = (50 - h) / (50/√3)
50 - h = 50/3
h = 100/3 m
```
- Line 1 (paraphrase) reveals 67.9, LINK: `apt.emphasize(tl, "#sight-line-2-pinned",
  68.3)`.
- 71.68 "Tower 1 = 50 m" word-pop, LINK pulse Tower1-pinned; 75.48 "Tower 2 = h m"
  word-pop, LINK pulse Tower2-pinned (still dashed at this point).
- 76.94 "Vertical difference = 50 - h" line pops, LINK: pulse the vertical segment
  between T2-pinned and RA2-pinned.
- 81.82 and 84.8 `apt.emphasize` on the "50 - h" span (re-stated twice - "we are not
  using h directly... difference in heights, fifty minus h").
- 87.16 "tan 30°" word-pop, LINK `apt.emphasize(tl, "#angle-arc-2-pinned")`; 88.76 "="
  fade; 89.42 "(50-h)/x" `.frac` pop.
- 92.38 "1/√3" `.frac` pop, 93.76 "=" fade, 94.32 "(50-h)/x" `.frac` pop (restated
  form).
- 98.52 "1/√3" pop, LINK: `apt.emphasize(tl, "#stack-step1 .ans")` (pulls the x=50/√3
  result forward from the Step 1 stack card as it gets substituted), 99.68 "="
  fade, 101.72 "(50-h)/(50/√3)" `.frac` pop.
- 103.92 "50 - h = 50/3" `.frac` pop.
- 107.57 `.ans` "h = 100/3 m" `.frac` pops. Same frame: Tower2 outline (both full-size
  reference no longer visible, so on `#illus-pinned`) switches `stroke-dasharray` off
  (solid) via a quick `attr` set and pulses `--success` green once, twice
  (`yoyo:true,repeat:1`); pinned "h m" chip text swaps to "100/3 m" and pops
  (`back.out(1.6)`).
- 109.84 `apt.emphasize` on `.ans` ("Done and dusted.").
- 111.44 `apt.emphasize` on `.ans` again ("...height of the other tower is one
  hundred by three meters" - restating the result, per Section 5.3's "CONFIRM" beat,
  not a fresh reveal).

### Scene 6 (112.5-119.02s) - Options reveal
`apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 112.5)`,
`apt.stackLineGrow(tl, "#line-1-2", 112.5)`. `apt.fadeOut(tl, "#illus-pinned", 112.5)`,
`apt.recenterForOptions(tl, "#q-pinned", 160, 180, 112.5)`.
`apt.fadeIn(tl, "#options-reveal", 113.8)`, `apt.optionsStagger(tl, ".opt-btn", 114.3)`,
`apt.correctPulse(tl, ".opt-btn.correct", 116.4)` (aligned with narration's own
"option C" at 116.54-116.88).
Options: A 50/√3 m, B 25 m, C 100/3 m (correct), D 75 m.

END_FADE_TIME = 117.02 + 0.6 = 117.62. FADE_DUR = 1.2.
TIMELINE_END = 117.62 + 1.2 + 0.2 = 119.02. AUDIO_DURATION = 119.02.

## PART 3: Asset List Required
None beyond inline SVG. Object library: two "Bare triangle" figures sharing a ground
line (illustration_reference.md section on component recipes) - no external assets,
only design-system tokens + `.fig-chip`/`.fig-chip-pinned` (added to the question's
`<style>` block, copied verbatim from `illustration_reference.md` section 3).

## PART 4: Animation Complexity Notes
- Two independent angle-arc derivations (F2/60° and T2/30°) - each gets its own
  vertex-coordinate comment block and atan2 check per the mandatory pre-flight
  checklist in `penelty.txt` (never mirror one arc's numbers into the other).
- Tower 2's dashed-to-solid + color confirm at the h reveal is the single novel
  animation beat this question needs beyond the closed helper set - implemented as a
  raw `tl.to()` on the rect's `attr.strokeDasharray` and `stroke`, per
  VIDEO_BUILD_PROMPT.md Section 1.3 ("write a raw tl.to()/fromTo() inline... that is
  allowed and expected for illustrations").
- `.frac` used for every division (Height/Base, 50/x, 50/√3, (50-h)/x, (50-h)/(50/√3),
  50/3, 100/3) - no bare division symbol anywhere.
- √3 rendered as `√3` (radical glyph + digit), never the word "root".
- LINK pattern used repeatedly across both steps: figure element and equation term
  pulse on the same frame whenever a figure value enters the math (50 m, h m, x, the
  two angle arcs, and the carried-forward x=50/√3 from the Step 1 stack card).

## PART 5: Master Timeline Overview
```
0.3   Question card + serial badge enter (lowered)
3.9   Card rises to resting slot
4.38  Ground line draws in
4.6   Tower 1 grows (50 m, solid)
6.54  "50 m" chip pops
7.72  Tower 2 grows (h m, dashed) + F2 marker
8.2   "h m" chip pops
9.7   Sight line 1 (F2->T1) draws in
13.3  Angle arc 60° fades in
13.8  "60°" chip pops
14.62 T2-top marker pops
16.6  Sight line 2 (T2->T1) draws in
20.0  Angle arc 30° fades in
20.46 "30°" chip pops
22.98 Emphasize Tower 2 + "h m" ("find height of second tower")
27.7  Right-angle marker at F1
29.7  Right-angle marker at RA2
31.5  "x" arrow + label pop
34.64 Re-emphasize "h m"
35.72 Emphasize whole illustration
36.90 PIN - question + illustration glide to pinned slots
37.90 Step 1 card enters - solve for x
51.08-59.04 tan60° = Height/Base -> √3 = 50/x -> x = 50/√3 built term by term
60.92 Emphasize x = 50/√3
65.90 Step 1 -> stack (circle "1")
67.90 Step 2 card enters - solve for h
71.68-75.48 Tower heights recapped (50 m, h m) with pinned LINK
76.94 Vertical difference = 50 - h
87.16-101.72 tan30° = (50-h)/x -> substitution chain built term by term
103.92 50 - h = 50/3
107.57 h = 100/3 m revealed; Tower 2 confirms solid + green (LINK)
111.44 Result restated
112.50 Step 2 -> stack (circle "2"), recenter for options
113.80-116.40 Options fade in, stagger, correct (C) pulses
117.62 Fade out begins
119.02 Timeline end
```
