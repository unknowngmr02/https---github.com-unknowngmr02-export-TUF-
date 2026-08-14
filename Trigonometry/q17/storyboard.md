# Storyboard - Trigonometry q17 (Angle of Elevation, tan ratio)

Video length: 66.14s (voiceover-driven). 1 Given + 3 Steps.

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0.12-4.58 | "So welcome back again. It's time to solve one more problem." | Hook | Question card | Question card + serial badge enter |
| 2 | 5.08-14.74 | "Now in this problem, a point is thirty meters away from a building... angle of elevation... is thirty degrees." | Setup | Illustration builds | Ground point, dashed sight line, building rising, 30 deg arc + 30m label draw in |
| 3 | 15.26-18.26 | "The question is asking us to find the height of the building." | Goal | Building top, height dashed to h | "h = ?" label pulses on building height segment |
| 4 | 18.62-30.42 | "...height is opposite side... 30m distance is adjacent side... trig function that relates opposite and adjacent... is tan." | Concept | Side labels | "Opposite" label on height, "Adjacent" label on base, both emphasize in turn |
| 5 | 30.42-33.64 | "Let the height of the building be h meters." | Transition | Pin | pinFlow question+illustration to pinned slot |
| 6 | 34.24-41.36 | "Using tan ratio, tan theta = opposite/adjacent. So tan 30 = h/30." | Step 1 | Given -> Step1 card | Given card morphs to stack, Step 1 formula reveals |
| 7 | 41.76-54.62 | "tan 30 = 1/root3, so 1/root3 = h/30. Multiply both sides by 30. h = 30/root3." | Step 2 | Step2 card | Step1 morphs to stack, Step 2 solves for h |
| 8 | 55.16-63.72 | "After simplifying, h = 10 root3. Hence height of building is 10 root3 meter." | Step 3 | Step3 card | Step2 morphs to stack, Step 3 reveals final answer |
| 9 | 64.28-66.14 | "So the correct option is option A." | Reveal | Options grid | Options fade in, stagger, correct pulses green |

## PART 2: Scene-by-Scene Storyboard

**Scene 1 (0.0-2.5s)** - VOICEOVER: "So welcome back again, it's time to solve one more problem."
VISUAL OBJECTIVE: Establish question card. SCREEN LAYOUT: `#q-full-card` centered per template.html. ON-SCREEN ELEMENTS: dotted grid, bottomStrip, topic-name "Trigonometry", logo, question text, serial badge. ANIMATION: `apt.questionEnter(tl,"#q-full-card",0.3)`, `apt.serialEnter(tl,"#serial-num",0.8)`. CAMERA: static. TRANSITIONS: none yet. EDUCATIONAL PURPOSE: orient viewer. VISUAL HIERARCHY: question text primary. ATTENTION: center card. MOTION NOTES: back.out easing pop, no overshoot into illustration area. CONTINUITY: opening scene, nothing precedes.

**Scene 2 (2.5-14.74s)** - VOICEOVER: "...a point is thirty meters away from a building. From that point, the angle of elevation...is thirty degrees."
VISUAL OBJECTIVE: Build right-triangle illustration - observer point (left), dashed line of sight to building top, building (right, vertical), 30 degree arc at observer vertex, "30 m" label along base. SCREEN LAYOUT: illustration slot below question card (per template.html `#illustration` full-size). ON-SCREEN ELEMENTS: ground line, observer dot, building rectangle/silhouette, dashed hypotenuse line, theta arc (stroke-dasharray circle technique, `--angle:30`, unitless), "30 m" base label, "30 deg" angle label. ANIMATION: base line stroke-dashoffset draws in, building rises (scaleY 0->1 from base), dashed hypotenuse draws left-to-right, arc opacity fades in (never GSAP-tweened on `--angle`), labels fade up. CAMERA: static. TRANSITIONS: sequential draw, ~0.5s stagger per element. EDUCATIONAL PURPOSE: visualize the geometry before naming sides. VISUAL HIERARCHY: building height > arc > labels. ATTENTION: sweeps left (observer) to right (building top) matching narration order. MOTION NOTES: building growth uses `power2.out`, ~0.8s. CONTINUITY: question card from Scene 1 stays pinned at top-center, illustration builds directly beneath it.

**Scene 3 (15.26-18.26s)** - VOICEOVER: "The question is asking us to find the height of the building."
VISUAL OBJECTIVE: Draw attention to unknown height. ON-SCREEN ELEMENTS: "h = ?" label beside building height segment. ANIMATION: `apt.emphasize` pulse on the height segment + "h=?" label fade in. EDUCATIONAL PURPOSE: name the unknown. ATTENTION: height segment. CONTINUITY: same illustration, no new elements besides the label.

**Scene 4 (18.62-30.42s)** - VOICEOVER: "...height is the opposite side...adjacent side...trig function...that is tan."
VISUAL OBJECTIVE: Label the two known sides in trig terms. ON-SCREEN ELEMENTS: "Opposite" label appears next to height segment (replacing "h=?" positioning, both can coexist stacked), "Adjacent" label appears along base "30 m" line. ANIMATION: `apt.emphasize` on height segment as "Opposite" fades in (18.62s), `apt.emphasize` on base segment as "Adjacent" fades in (21.58s), "tan" chip/word emphasized near arc at 30.0s. EDUCATIONAL PURPOSE: connect geometry to ratio-name. ATTENTION: alternates height -> base -> angle. CONTINUITY: illustration unchanged in shape, only labels accumulate.

**Scene 5 (30.42-31.3s) - PIN_TIME=30.5** - VOICEOVER: "Let the height of the building be" (transition).
VISUAL OBJECTIVE: Move question + illustration to pinned compact slot to make room for solution cards. ANIMATION: `apt.pinFlow(tl,"#q-full-card","#q-pinned",30.5)`, `apt.pinFlow(tl,"#illustration","#illus-pinned",30.5)` - real glide, both together. CAMERA: content slides/shrinks to top-left pinned zone. TRANSITIONS: 0.8s glide, `power2.inOut`. CONTINUITY: pinned illustration is the exact same triangle, just shrunk copy (same coordinates, smaller width/height per penalty rule).

**Scene 6 (31.3-33.7s) - GIVEN_TIME=31.3** - VOICEOVER: "...h meters."
VISUAL OBJECTIVE: State the given data as a solution card. SCREEN LAYOUT: `#card-given .solution-card` centered. ON-SCREEN ELEMENTS: chip "Given", math: "Distance = 30 m, Angle of elevation = 30 deg, Height = h m (unknown)". ANIMATION: `apt.cardEnter(tl,"#card-given .solution-card",31.3)`, `apt.textReveal(tl,"#card-given .math")` synced to transcript words. EDUCATIONAL PURPOSE: consolidate knowns before solving. CONTINUITY: appears right as pinFlow settles, in the now-empty center stage.

**Scene 7 (33.7-34.6s)** - Given -> stack morph.
ANIMATION: `apt.morphToStack(tl,"#card-given .solution-card","#stack-given .stack-card",33.5)` (0.8s, completes 34.3). CONTINUITY: Given card slides/shrinks into left stack column as Step 1 begins narrating.

**Scene 8 (34.24-41.5s) - Step 1** - VOICEOVER: "Using tan ratio, tan theta = opposite/adjacent. So tan 30 = h/30."
VISUAL OBJECTIVE: State the tan ratio and substitute known values. ON-SCREEN ELEMENTS: chip "Step 1", math: "tan(theta) = Opposite/Adjacent -> tan(30 deg) = h/30" (use `.frac` for the fraction, `.hi` on "30" and "h"). ANIMATION: `apt.cardEnter(tl,"#card-step1 .solution-card",34.24)`, `apt.textReveal`. CONTINUITY: enters in the center stage vacated by Given's morph, which is still completing its slide into the stack as this card's enter begins.

**Scene 9 (41.5-42.3s)** - Step1 -> stack morph, connector line.
ANIMATION: `apt.setStackLine("#line-g-1","#stack-given .step-circle","#stack-step1 .step-circle")` (compute once before timeline build), `apt.morphToStack(tl,"#card-step1 .solution-card","#stack-step1 .stack-card",41.5)`, `apt.stackLineGrow(tl,"#line-g-1",41.5)`.

**Scene 10 (41.76-55.0s) - Step 2** - VOICEOVER: "tan 30 = 1/root3, so 1/root3 = h/30. Multiply both sides by 30. h = 30/root3."
VISUAL OBJECTIVE: Solve the equation for h. ON-SCREEN ELEMENTS: chip "Step 2", math: "tan(30 deg) = 1/root3 -> 1/root3 = h/30 -> h = 30/root3" (use `.frac` throughout, `.ans` on final `h = 30/root3`). ANIMATION: `apt.cardEnter(tl,"#card-step2 .solution-card",41.76)`, `apt.textReveal`. CONTINUITY: Step 1's morph into the stack is still finishing its color/shadow crossfade as this card fades in center-stage.

**Scene 11 (54.9-55.7s)** - Step2 -> stack morph, connector line 2.
ANIMATION: `apt.setStackLine("#line-1-2","#stack-step1 .step-circle","#stack-step2 .step-circle")`, `apt.morphToStack(tl,"#card-step2 .solution-card","#stack-step2 .stack-card",54.9)`, `apt.stackLineGrow(tl,"#line-1-2",54.9)`.

**Scene 12 (55.16-66.14s) - Step 3 (final)** - VOICEOVER: "After simplifying this, h = 10 root3. Hence the height of the building is 10 root3 meter. So the correct option is option A."
VISUAL OBJECTIVE: Reveal final simplified answer, then the options grid confirming it. ON-SCREEN ELEMENTS: chip "Step 3", math: "h = 30/root3 -> h = <span class='ans'>10 root3 m</span>" (`.frac` then simplified `.ans` span, word-reveal timed so "10 root3" lands at 57.06s). ANIMATION: `apt.cardEnter(tl,"#card-step3 .solution-card",55.16)`, `apt.textReveal`. At 63.8s: `apt.fadeOut(tl,"#illus-pinned",63.8)`, `apt.recenterForOptions(tl,"#q-pinned",160,180,63.8)` to clear room. `apt.fadeIn(tl,"#options-reveal",64.28)`, `apt.optionsStagger(tl,".opt-btn",64.9)`, `apt.correctPulse(tl,".opt-btn.correct",65.6)`. Step 3's stack-connector: `apt.setStackLine("#line-2-3","#stack-step2 .step-circle","#stack-step3 .step-circle")` fires alongside a final morph of Step3 into the stack at 63.6 (`apt.morphToStack(tl,"#card-step3 .solution-card","#stack-step3 .stack-card",63.6)`) so the full stack (G,1,2,3) is visible behind the options reveal, matching the template's Phase 3 pattern. TRANSITIONS: card holds until answer is fully spoken, then joins stack right as options appear. EDUCATIONAL PURPOSE: land the answer, then confirm against the option list. CONTINUITY: Step 2's stack settle is complete and stationary; Step 3 enters center-stage in the same vacated slot, later morphing to complete the visible stack column just as the pinned illustration fades and the options grid takes over the freed pinned-icon space.

## PART 3: Asset List Required

- Illustration: single right-triangle SVG (`illustration/triangle.svg`), full-size + pinned versions (same coordinates, per penalty rule 5)
  - Observer point + label, building rectangle, dashed hypotenuse (sight line), ground line
  - Theta arc: stroke-dasharray circle technique, `--angle:30` (unitless), vertex on LEFT (observer), base ray +x toward building base (right-angle vertex)
  - Right-angle marker at building base, derived from the same two ray directions
  - Labels: "30 m" (base), "30 deg" (near arc), "Opposite"/"Adjacent" (fade in Scene 4), "h" (height, fades in Scene 3)
- No other custom assets; all cards/chips/options from design-system.css components

## PART 4: Animation Complexity Notes

- Standard morph/cardEnter/textReveal/pinFlow helpers only, no custom animations invented
- 3 stack connector lines (`setStackLine`/`stackLineGrow`) between G-1, 1-2, 2-3
- Illustration draw-in (Scene 2) uses plain stroke-dashoffset + scaleY, not a named helper - matches "custom per-question illustration build" allowance
- Per Trigonometry `penelty.txt`: every clip whose `data-duration` ends exactly at a morph/fade/pinFlow start gets +1.5-2s buffer; angle arc uses unitless `--angle`, opacity-only fade, vertex-on-left convention; all side lengths computed from true tan(30) ratio (base=180, perp=180*tan(30)=103.92); geometry comments included in index.html per the mandatory pre-flight checklist

## PART 5: Master Timeline Overview

```
0.3   questionEnter
0.8   serialEnter
2.5   illustration draws in (point, building, sight line, arc, "30 m")
15.3  "h=?" emphasize
18.6  "Opposite" label emphasize
21.6  "Adjacent" label emphasize
30.0  "tan" emphasize near arc
30.5  PIN_TIME - pinFlow (question + illustration)
31.3  GIVEN_TIME - Given card enters
33.5  Given -> stack morph
34.24 Step 1 card enters
41.5  Step 1 -> stack morph + line G-1
41.76 Step 2 card enters
54.9  Step 2 -> stack morph + line 1-2
55.16 Step 3 card enters (h=10root3 word-reveal lands 57.06)
63.6  Step 3 -> stack morph + line 2-3
63.8  illus-pinned fadeOut, recenterForOptions
64.28 options-reveal fadeIn
64.9  optionsStagger
65.6  correctPulse (option A)
68.0  end hold (buffer past last transition per penalty rule)
```
