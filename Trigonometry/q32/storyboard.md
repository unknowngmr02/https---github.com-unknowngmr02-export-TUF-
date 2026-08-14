# Q32 Storyboard - Building + Tower, Angle of Elevation (60deg / 30deg)

Voiceover duration: 130.82s. All timestamps below come from `transcript.json`.

## PART 1 - Narration Beat Analysis

| Beat | Time | Narration | Purpose | Visual objective |
|---|---|---|---|---|
| 1 | 0.1-4.4 | Welcome back, one more problem | Hook | Question card rises |
| 2 | 4.94-10.26 | Building and tower on same level ground | Setup | Ground line draws |
| 3 | 10.7-12.38 | Building height is 20 meter | Given | Building rect grows, chip "20 m" |
| 4 | 12.9-18.72 | From foot of building, angle of elevation to tower top is 60deg | Given | Sight line 1 draws, arc 1 (60deg), chip "60deg" |
| 5 | 19.18-25.52 | From top of building, angle of elevation to tower top is 30deg | Given | Sight line 2 draws, arc 2 (30deg), chip "30deg" |
| 6 | 26.08-29.4 | Find height of tower | Goal | Tower rect (dashed, unknown) pulses |
| 7 | 29.86-36.18 | Let tower height = H, distance = d | Variables | Chip "H m" (unknown), arrow + label "d" |
| 8 | 36.86-45.98 | Idea: both angles look at same top point, two right triangles, use tan | Framing | Emphasize both sight lines + arcs |
| 9 | 46.76-66.46 | Step 1: tan60 = H/d, H = root3 * d | Step 1 math | Card enters, LINK to figure |
| 10 | 67.04-104.53 | Step 2: tan30 = (H-20)/d = 1/root3 | Step 2 math | Card enters, diff bracket "H-20" |
| 11 | 105.08-123.94 | Solve simultaneously: d=H/root3, H-20=H/3, 3H-60=H, 2H=60, H=30 | Step 3 math | Card enters, answer confirms |
| 12 | 124.72-130.82 | Height is 30 meter, answer is option B | Reveal | Options grid, correct pulse |

## PART 2 - Scene-by-Scene Storyboard

### SCENE 1 (0-10.26s) - Question intro + ground
Question card + serial badge rise in (heroEnterLowered, RISE_TIME=3.9 - "one more problem" ends 4.4). Ground line draws in at 4.6 as "building and tower...ground" is spoken.

### SCENE 2 (10.7-25.52s) - Illustration build
Building rect (LEFT, x=126, solid, KNOWN) grows 0->173px at 10.9 with chip "20 m" popping at 12.6. Sight line 1 (building foot to tower top, dashed black) draws at 13.3, angle-arc-1 (60deg, green) fades in at 17.9, chip "60deg" pops at 18.3. Sight line 2 (building top to tower top) draws at 20.2, angle-arc-2 (30deg) fades in at 24.6, chip "30deg" pops at 25.0.

### SCENE 3 (26.08-36.18s) - Tower + variables
Tower rect (RIGHT, x=276, DASHED, unknown H) grows 0->260px at 27.0 as "find height of tower" is spoken. Chip "H m" (unknown style) pops at 28.6. At 31.9 chip "H m" emphasized again ("height of tower be h"). Distance arrow + label "d" pop in at 34.3.

### SCENE 4 (36.86-45.98s) - The idea
Emphasize sight-line-1 and angle-arc-1 at 38.9, sight-line-2 and angle-arc-2 at 40.3 ("both angles looking at same top point"). Emphasize whole illustration at 42.6 ("two right triangles").

### SCENE 5 (PIN_TIME 46.4) - Pin
Question card + illustration glide to pinned slot via apt.pinFlow. Serial badge fades out.

### SCENE 6 (46.9-65.2s) - Step 1 card
Card enters center: "Focus: 60deg angle at foot of building" -> "Opposite = H" -> "Adjacent = d" -> tan60deg = H/d -> root3 = H/d -> H = root3 x d. LINK pulses tie H to tower-rect-pinned, d to arrow-x-pinned, at each reveal. Morph to stack at 65.2 (stack-step1, top:150px).

### SCENE 7 (67.04-104.6s) - Step 2 card
Card enters center: focus 30deg angle at building top -> building = 20m (known) -> not seeing full tower height, only extra part -> extra height = H-20 (common-mistake beat, diff-bracket-pinned pops) -> tan30deg = (H-20)/d -> 1/root3 = (H-20)/d -> 1/root3 = (H-20)/(H/root3). Morph to stack at 104.6 (stack-step2, top:290px), line-1-2 grows.

### SCENE 8 (105.1-124.4s) - Step 3 card
Card enters center: d = H/root3 (from eq1) -> substitute -> H-20 = H/3 -> 3H-60 = H -> 2H = 60 -> H = 30m. Tower-rect-pinned flips dashed->solid + success pulse, chip "H m" swaps to "30 m" solved chip at 123.2. Morph to stack at 124.4 (stack-step3, top:430px), line-2-3 grows, illus-pinned fades out, question recenters for options.

### SCENE 9 (125.7-132.82s) - Options reveal
Options grid fades in at 125.7, staggers in at 126.2, correct option B pulses at 130.14 ("option B"). End fade at 131.42 (0.6s after narration ends 130.82), timeline ends 132.82.

## PART 3 - Asset List Required
- No external assets. Pure inline SVG: ground line, building rect (solid), tower rect (dashed->solid), 2 sight lines, 2 angle arcs, 4 fig-chips (20m, H m/30m, 60deg, 30deg), distance arrow+label "d", diff bracket+label "H-20", right-angle markers x2.

## PART 4 - Animation Complexity Notes
- Two independent angle-arc derivations (60deg at building foot, 30deg at building top) per penelty.txt mandatory checklist.
- Building (known, left) is SOLID; tower (unknown, right) is DASHED until Step 3 resolves it, then flips solid + green pulse (mirrors q31's reveal pattern, roles swapped).
- Geometry reused numerically from q31 (F=140,430; BT=140,257; foot=290,430; RA=290,257; apex=290,170) since the ratio math is self-consistent: base=150, tan60->opposite=260 (=tower H in px), tan30->opposite=87 (=260-173, building=173px). Scale: 173px=20m -> 8.65px/m; 260px/8.65=30.06m ~ 30m (matches answer).
- LINK pattern: H in equations pulses tower-rect-pinned; d pulses arrow-x-pinned; H-20 pulses diff-bracket-pinned.

## PART 5 - Master Timeline Overview
```
0.0        Question card + serial badge rise
4.6        Ground line draws
10.9       Building rect grows (solid, known) + chip 20m
13.3       Sight line 1 draws
17.9       Angle arc 1 (60deg) + chip
20.2       Sight line 2 draws
24.6       Angle arc 2 (30deg) + chip
27.0       Tower rect grows (dashed, unknown) + chip H m
34.3       Distance arrow + label d
38.9-42.6  Idea beats (emphasize both triangles)
46.4       PIN_TIME - glide to pinned slot
46.9       Step 1 card enters -> H = root3 d
65.2       Morph to stack (step1)
67.04      Step 2 card enters -> H-20/d = 1/root3
104.6      Morph to stack (step2)
105.1      Step 3 card enters -> H = 30
123.2      Tower confirms solid + green, chip -> 30 m
124.4      Morph to stack (step3), recenter for options
125.7      Options reveal
130.14     Correct pulse (option B)
131.42     End fade starts
132.82     Timeline end
```
