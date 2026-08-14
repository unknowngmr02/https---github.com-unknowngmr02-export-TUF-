# Q30 - Trigonometry - Storyboard

Duration: 75.259s (transcript.json). No physical object in this question (pure
trig identity, checked via options) - per VIDEO_BUILD_PROMPT.md Section 6, the
Phase 1 "illustration" slot is filled with a **growing equation** (sinθ = cos2θ,
θ acute) instead of a diagram. This equation pins into a small reference chip
that stays visible through both solution steps (the viewer needs it while each
option is being tested against it).

PIN_TIME = 21.9. No separate Given card (the given equation is already fully
built and reads as the Phase-1 hero itself - restating it as a second Given
card immediately after would have no narration of its own to justify a new
timestamp; per README this is "typically" 1 Given + N steps, not mandatory).
Stack column starts directly at Step 1 (circle "1") and Step 2 (circle "2").

Symbols only, never spelled words, in every card/chip: θ, √, °, .frac for every
division (no bare ÷, no "theta"/"root"/"degrees" text).

## PART 1: Narration Beat Analysis

| # | Time | Narration | Purpose | Focus | Visual objective |
|---|------|-----------|---------|-------|-------------------|
| 1 | 0.10-4.46 | "So welcome back again. It's time to solve one more problem." | Hook | Question card | heroEnterLowered rise at 4.6 |
| 2 | 4.92-6.96 | "In this problem, we are given that" | Setup | Eq-row area | "Given:" label pops at 4.92 |
| 3 | 7.40-9.92 | "sine theta is equal to cos two theta" | Given eq | eq-row | "sinθ" pops 7.40, "=" fades 8.30, "cos2θ" pops 9.06 |
| 4 | 10.38-12.04 | "and theta is an acute angle." | Given cond | acute chip | chip "θ acute" pops 11.18 |
| 5 | 12.60-15.30 | "The question is asking us to find the value of theta." | Goal | goal label | "Find θ = ?" pops 14.18 |
| 6 | 15.76-17.76 | "Now, this is a very easy multiple choice question." | Framing | eq-row | emphasize whole eq-row 15.76 |
| 7 | 18.18-20.46 | "Can we solve it by checking the options directly?" | Method | hint label | "Check each option" pops 18.18 |
| 8 | 20.92-21.96 | "Yes, we can." | Confirm | hint label | emphasize hint label 20.92 |
| 9 | 21.90 (PIN) | - | Reorganize | Question+eq-row | pinFlow to top-pinned slot |
| 10 | 22.78-25.88 | "Let us check option A, which is forty-five degrees." | Step1 open | Step1 card | cardEnter 22.78, chip "Option A: θ=45°" line-reveal |
| 11 | 26.34-30.42 | "If theta is forty-five degrees, then sine forty-five degrees is equal to one by root two." | Step1 LHS | Step1 math | "sin45°" pop 28.06, "=" 29.22, frac 1/√2 pop 29.62 |
| 12 | 30.80-32.26 | "Now, let us check the right side." | Step1 pivot | Step1 math | line-reveal 30.80 |
| 13 | 32.66-37.80 | "Cos two theta becomes cos ninety degrees, which is equal to zero." | Step1 RHS | Step1 math | "cos2θ" pop 32.66, "=cos90°" pop 34.58, "=0" pop 37.56 |
| 14 | 38.36-41.56 | "These two values are not the same, so option A is not correct." | Step1 verdict | Step1 answer | "1/√2 ≠ 0" pop 38.36, "Option A ✗" pop 40.26 |
| 15 | 41.92-44.20 | "Now, let us check option B, which is thirty degrees." | Step2 open | Step2 card | morph Step1->stack 41.1, cardEnter Step2 42.3, chip "Option B: θ=30°" |
| 16 | 44.68-49.00 | "If theta is thirty degrees, then sine thirty degrees is equal to one-half." | Step2 LHS | Step2 math | "sin30°" pop 46.74, "=" 48.18, frac 1/2 pop 48.56 |
| 17 | 49.56-50.36 | "On the right side," | Step2 pivot | Step2 math | line-reveal 49.56 |
| 18 | 50.78-55.96 | "cos two theta becomes cos sixty degrees, which is also equal to one-half." | Step2 RHS | Step2 math | "cos2θ" pop 50.78, "=cos60°" pop 52.62, "=1/2" pop 55.46 |
| 19 | 56.40-58.18 | "Now, both sides are giving the same value." | Step2 confirm | Step2 math | "1/2 = 1/2 ✓" pop 56.40, LINK-pulse both fracs |
| 20 | 58.70-64.58 | "The left side is one by two. The right side is also one by two. So the given condition is satisfied." | Step2 restate | Step2 math | re-emphasize the confirmed line 58.70/62.64 |
| 21 | 65.10-66.80 | "Got it? Perfect." | Confirm | Step2 answer | emphasize verdict 65.10 |
| 22 | 67.64-71.50 | "Hence, the value of theta is thirty degrees." | Answer | Step2 .ans + pinned eq-row | "θ=30°" .ans pop 68.70, LINK emphasize on pinned eq-row 68.70 |
| 23 | 72.02-75.26 | "So the final answer will be option B, thirty degrees." | Reveal | Options | morph Step2->stack 71.6, options fadeIn 72.5, stagger 72.9, correctPulse B 74.3 |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 (0-4.6s) - Hook
`apt.heroEnterLowered` on `#q-full-card` (offsetY 180, riseTime 4.6 - end of "one
more problem."). Serial badge mirrors the same offset/rise, per template pattern.
Question text: "For an acute angle θ, sin θ = cos 2θ. Find θ." with θ and the
equation highlighted in `--primary`.

### Scene 2 (4.6-21.9s) - Phase 1 growing-equation hero (replaces illustration)
No physical object exists for this identity question, so the illustration slot
holds a centered `#eq-row` (fixed-width row, `white-space:nowrap`, reserved full
width up front per Section 7 so terms never reflow):

```
Given:   sin θ   =   cos 2θ        [θ is acute]
```

- `#eq-given-label` "Given:" fades in 4.92s (line reveal, narration "In this
  problem, we are given that").
- `#eq-sin` "sin θ" pops (`back.out(1.6)`, 0.4s) at 7.40s.
- `#eq-equals1` "=" fades at 8.30s.
- `#eq-cos2t` "cos 2θ" pops at 9.06s.
- `#chip-acute` fig-chip "θ is acute" pops (back.out) at 11.18s, positioned
  right of the equation row.
- `#eq-goal` "Find θ = ?" pops beneath the row at 14.18s.
- `apt.emphasize(tl, "#eq-row", 15.76)` - whole equation re-pulses on "very
  easy multiple choice question."
- `#hint-check` text "Check each option" fades in beneath at 18.18s (paraphrase
  of "can we solve by checking the options directly").
- `apt.emphasize(tl, "#hint-check", 20.92)` on "Yes, we can."

No gap in this scene exceeds ~2.7s (see beat table above).

### Scene 3 (21.9-22.78s) - Pin
`apt.pinFlow(tl, "#q-full-card", "#q-pinned", 21.9)` and
`apt.pinFlow(tl, "#illustration", "#illus-pinned", 21.9)` glide the question and
the equation into their pinned slots together. `#illus-pinned` is a coordinate-
exact-scale copy of `#eq-row` (same content, smaller/centered), minus the
`#eq-goal`/`#hint-check` lines which have done their job (only `sinθ=cos2θ`
and the `θ acute` chip persist into the pinned recap - this is the reference
the viewer needs during both option checks).

### Scene 4 (22.78-41.9s) - Step 1: test option A (45°)
`apt.cardEnter(tl, "#card-step1 .solution-card", 22.78)`.
Chip "Step 1". Content (all `.rv` word/line-level, `apt.textReveal`):
```
Option A: θ = 45°
sin 45° = 1/√2
cos 2θ = cos 90° = 0
1/√2 ≠ 0  →  Option A ✗
```
- "Option A: θ = 45°" line-reveal at 22.78 (paraphrase of "let us check option
  A, which is forty-five degrees").
- "sin 45°" word-pop 28.06, "=" 29.22, `.frac` 1/√2 pop 29.62 (matches "sine
  forty-five degrees is equal to one by root two").
- "cos 2θ" word-pop 32.66, "= cos 90°" pop 34.58, "= 0" pop 37.56.
- "1/√2 ≠ 0" pops 38.36 (narration "these two values are not the same"),
  "Option A ✗" pops 40.26 ("so option A is not correct") - the ✗ uses default
  `--text` black (no invented red token; elimination is shown by the ✗ glyph
  and a dim to 0.55 opacity, not a new color).

### Scene 5 (41.1-71.6s) - Step 2: test option B (30°), confirmed
`apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card",
41.1)` - fires just after Step 1's last reveal (40.26 + ~0.5s buffer), well
before "Now, let us check option B" fully lands at 41.9.
`apt.cardEnter(tl, "#card-step2 .solution-card", 42.3)`.
Chip "Step 2". Content:
```
Option B: θ = 30°
sin 30° = 1/2
cos 2θ = cos 60° = 1/2
1/2 = 1/2 ✓ condition satisfied
θ = 30°
```
- "Option B: θ = 30°" line-reveal 42.3.
- "sin 30°" pop 46.74, "=" 48.18, `.frac` 1/2 pop 48.56.
- "cos 2θ" pop 50.78, "= cos 60°" pop 52.62, "= 1/2" pop 55.46.
- "1/2 = 1/2 ✓ condition satisfied" pops 56.40, re-emphasized at 58.70 and
  62.64 ("left side... right side... condition is satisfied") - LINK: both
  `.frac` values pulse together each time this line is emphasized.
- `.ans` "θ = 30°" pops 68.70 ("hence, the value of theta is thirty degrees").
  Same frame, `apt.emphasize(tl, "#illus-pinned .frac-recap")` pulses the
  pinned `sinθ=cos2θ` reference (LINK pattern - the solved value confirms
  against the original identity).

### Scene 6 (71.6-75.86s) - Options reveal
`apt.fadeOut(tl, "#illus-pinned", 71.6)` (the pinned equation has done its job).
`apt.recenterForOptions(tl, "#q-pinned", 160, 180, 71.6)`.
`apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card",
71.6)`, `apt.stackLineGrow(tl, "#line-1-2", 71.6)`.
`apt.fadeIn(tl, "#options-reveal", 72.5)`, `apt.optionsStagger(tl, ".opt-btn",
72.9)`, `apt.correctPulse(tl, ".opt-btn.correct", 74.3)` (aligned with the
narration's own "thirty degrees" at 74.30-75.26).
Options: A 45°, B 30° (correct), C 60°, D 15°.

END_FADE_TIME = 75.259 + 0.6 = 75.86. FADE_DUR = 1.2.
TIMELINE_END = 75.86 + 1.2 + 0.2 = 77.26. AUDIO_DURATION = 77.26.

## PART 3: Asset List Required
None (no illustration SVG - pure typographic hero equation, standard components
only: `.q-card`, `.serial-num`, `.solution-card`/`.stack-card`, `.fig-chip`
(reused for the "θ is acute" tag), `.frac`, `.options-grid`).

## PART 4: Animation Complexity Notes
- `#eq-row` and its pinned copy behave like the "Illustration"/"illus-pinned"
  pair in every other question - same `apt.pinFlow` call, same coordinate-exact
  duplication rule (Section 5.0 rule 7 in illustration_reference.md), just with
  typographic content instead of an SVG figure.
- No angle-arc geometry needed (no drawn triangle in this question).
- `.frac` used for every division (1/√2, 1/2) - no bare ÷ anywhere.
- ✗ / ✓ glyphs render in the existing `--text`/`--success` tokens only - ✗ is
  plain black text, ✓ on the confirmed line uses `--success` green (it IS the
  correct verdict, so the color aligns with the existing green-for-correct
  convention used at the options-reveal stage).

## PART 5: Master Timeline Overview
```
0.3   Question card + serial badge enter (lowered)
4.6   Card rises to resting slot; "Given:" label appears
7.40  sinθ pops
9.06  cos2θ pops
11.18 "θ is acute" chip pops
14.18 "Find θ = ?" pops
15.76 eq-row emphasize
18.18 "Check each option" hint fades in
20.92 hint emphasize
21.90 PIN - question + eq-row glide to pinned slots
22.78 Step 1 card enters - testing option A (45°)
28.06-37.56 Step 1 LHS/RHS built term by term
38.36-40.26 Step 1 verdict: 1/√2 ≠ 0, Option A ✗
41.10 Step 1 -> stack (circle "1")
42.30 Step 2 card enters - testing option B (30°)
46.74-55.46 Step 2 LHS/RHS built term by term
56.40-62.64 Step 2 confirm: 1/2 = 1/2, condition satisfied
68.70 θ = 30° answer revealed, pinned eq-row pulses (LINK)
71.60 Step 2 -> stack (circle "2"), recenter for options
72.50-74.30 Options fade in, stagger, correct (B) pulses
75.86 Fade out begins
77.26 Timeline end
```
