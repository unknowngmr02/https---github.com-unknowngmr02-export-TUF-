# Q24 Storyboard - sin theta + cos theta = 7/5, find sin theta cos theta

Duration: 82.299s (transcript.json, re-synced from a script/voiceover update - was 93.219s). Answer: D, 12/25.

## PART 1 - Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0-4.32 | "So welcome back again. It's time to solve one more problem." | Hook | Center | Question card rises into place |
| 2 | 4.84-14.42 | "In this problem, we are given that sine theta plus cos theta is equal to seven by five, and we need to find sine theta into cos theta." | State given + find | Question + illustration | Generic right-triangle (opposite=sin theta, adjacent=cos theta, hyp=1) draws in, chips pop as each term is spoken |
| 3 | 14.98-21.80 | "Whenever we see sine theta plus cos theta together, there is one very useful trick. We square both sides." | Method setup | Given card (pinned) | Pin flow, Given card holds while trick is explained, second line "Trick: square both sides" reveals |
| 4 | 22.72-40.80 | "So sine theta plus cos theta whole square is equal to seven by five whole square. After opening the bracket, this becomes sine square theta plus cos square theta plus two sine theta cos theta is equal to forty-nine by twenty-five." | Square + expand | Step 1 card | Equation grows term by term |
| 5 | 40.86-66.38 | "Now, as we know, the standard identity sine square theta plus cos square theta is always equal to one, and it works for every angle. So we replace sine square theta plus cos square theta with one. Now, the equation becomes one plus two sine theta cos theta is equal to forty-nine by twenty-five. The question is asking for sine theta cos theta." | Apply Pythagorean identity | Step 2 card + pinned triangle (LINK pulse) | Identity stated, pinned triangle hypotenuse "1" pulses to confirm, substituted equation grows |
| 6 | 66.76-87.38 | "So we need to isolate that term. Subtracting one from both sides, we get two sine theta cos theta is equal to twenty-four by twenty-five. Now divide both sides by two. We get sine theta cos theta is equal to twelve by twenty-five. Done and dusted." | Isolate + solve | Step 3 card | Equation reduces to final answer, pulse on answer |
| 7 | 88.08-93.22 | "So the final answer will be twelve by twenty-five. Hence, option D is the correct answer." | Reveal | Options grid | Options stagger in, D pulses green |

## PART 2 - Scene-by-Scene Storyboard

### Scene 1 (0-4.32s) - Hook
Question card rises via `apt.heroEnterLowered` (offset 180, riseTime 4.3). SerialNum badge pops at 0.8s, mirrors rise. Background layers (dotted grid, bottom strip, topic name, logo) always visible.
Continuity: opening frame, nothing precedes.

### Scene 2 (4.9-14.42s) - Triangle build, given stated
Generic right triangle (angle vertex A=(80,320) leftmost, right-angle vertex B=(280,320), apex C=(280,140)), theta=42deg (illustrative, not the unknown theta value - identity holds for any angle). Stroke-draw order: base (cos theta side) 4.9, perp (sin theta side) 5.9, hypotenuse (=1) 6.7, right-angle marker 7.0, angle arc 7.3 + theta chip. "sin theta" chip pops at 7.56 (word "sine"), pulses the perp line green; "cos theta" chip pops at 8.6 (word "cos"), pulses base line green. Hypotenuse "1" chip pops 9.5. At 11.9 both sin/cos chips emphasize together ("we need to find sine theta into cos theta").
Continuity: card already resting; triangle grows beneath it stroke by stroke, timed to the given/find narration.

### Scene 3 (14.7-21.9s) - Pin + Given card holds through the trick explanation
PIN_TIME=14.7: `apt.pinFlow` glides question + illustration to pinned slot; serial-num fades. GIVEN_TIME=15.0: Given card enters center, its facts ("sin theta + cos theta = 7/5", "Find: sin theta . cos theta") are already-resolved `.rv` spans timed to their first mention (7.559, 9.76, 12.34 - all before 15.0). While the narrator explains the squaring trick (14.98-21.8), the Given card gets a second line "Trick: square both sides" revealed at 20.58, and the pinned triangle receives LINK pulses: sin/cos chips emphasize at 16.6 ("together"), whole illustration emphasizes at 18.4 ("useful trick"), hypotenuse confirms green at 20.6 ("square both sides").
Continuity: the triangle that was drawing in Scene 2 is mid-glide into its pinned slot as this scene opens; Given card enters right as the glide lands.

### Scene 4 (21.7-40.0s) - Step 1: square and expand
Given -> stack morph at 21.7 (0.8s). Step 1 card enters 22.72. Growing equation: "(sin theta + cos theta)^2" at 22.719, "= (7/5)^2" at 24.779, "After opening bracket:" at 28.019, "sin^2 theta" 29.539, "+ cos^2 theta" 31.639, "+ 2 sin theta cos theta" 34.139, "=" 38.159, frac(49,25) 38.7. Morph to stack at 39.2.
Continuity: Given card is still completing its morph into the stack as Step 1's cardEnter begins; the stack connector line grows the moment Step 1 lands.

### Scene 5 (40.86-65.6s) - Step 2: apply the Pythagorean identity
Step 1 -> stack morph at 39.2 (line-g-1 grows). Step 2 card enters 40.86: "Identity:" 40.86, "sin^2 theta + cos^2 theta" 42.84, "= 1" 46.0, "(true for any angle)" 47.739, "Substitute into Step 1:" 49.539. LINK: pinned triangle's hypotenuse "1" chip emphasizes + confirms green at 52.5, visually tying the identity to the triangle drawn in Scene 2. Equation continues: "1" 56.559, "+ 2 sin theta cos theta" 58.219, "=" 61.199, frac(49,25) 61.819, "(need: sin theta . cos theta)" 63.899. Morph to stack at 65.6.
Continuity: Step 1's stack card has just settled into the left column as Step 2 opens; the pinned triangle (idle since Scene 3) gets its one deliberate callback here.

### Scene 6 (66.76-87.6s) - Step 3: isolate and solve
Step 2 -> stack morph at 65.6 (line-1-2 grows). Step 3 card enters 66.76: "Isolate 2 sin theta cos theta:" 66.76, "Subtract 1 from both sides:" 69.139, "2 sin theta cos theta =" 71.18, frac(24,25) 75.559, "Divide by 2:" 77.119, "sin theta cos theta =" 78.959, frac(12,25) (class ans) 83.119. Emphasize pulse on the answer at 85.279 ("Done and dusted"). Morph to stack at 87.6.
Continuity: Step 2's stack card has just landed as Step 3 opens; the final fraction inherits the same growing-equation row so nothing reflows.

### Scene 7 (88.4-93.22s) - Options reveal
Step 3 -> stack morph at 87.6 (line-2-3 grows). RECENTER_TIME=88.4: pinned illustration fades, question recenters. Options fade in 88.9, stagger 89.4, correct option D pulses at 91.68 (exact word "option").
Continuity: Step 3's stack card is completing its morph as the recenter begins; the stack column (Given, 1, 2, 3 with connector lines) stays fully visible behind the options grid.

### End fade
END_FADE_TIME = 93.819 (NARR_END 93.219 + 0.6), fadeOut duration 1.2, tl.set at 95.2.

## PART 3 - Asset List Required
None external. Pure inline SVG (triangle), design-system components (q-card, solution-card, stack-card, options-grid, frac), and `_template/assets` (serial-num-badge.svg, logo.png).

## PART 4 - Animation Complexity Notes
- Growing equation row per step card via `.rv[data-t]` + `apt.textReveal` (word/line granularity mixed).
- One LINK moment only (Step 2, t=52.5) tying the pinned triangle to the algebra - deliberate, not repeated, since the triangle is a generic identity illustration rather than a per-value diagram.
- Angle arc: CSS stroke-dasharray circle technique, --angle:42 (bare unitless), opacity-only animation.
- No new animation helpers invented; only `apt.*` from animations.js plus one-off `tl.to()` calls for the triangle's raw SVG (per VIDEO_BUILD_PROMPT.md section 1.3, allowed for illustrations).

## PART 5 - Master Timeline Overview

Re-synced to the updated voiceover.wav (82.3s, was 93.2s) via a transcript-anchored
time-warp of the original cut - same relative choreography, rescaled absolute times.

```
0.3   q-full-card hero enter (lowered)
0.8   serial-num pop
3.79  hero rises
4.22-7.6  triangle stroke-draw + chips (sin theta, cos theta, 1, theta)
10.2  sin/cos chips emphasize together
12.59 PIN_TIME - pinFlow
12.8  GIVEN_TIME - Given card enters (facts pre-resolved)
14.22/15.46/17.12  pinned-triangle LINK pulses during trick explanation
17.12 Given card 2nd line "Trick: square both sides"
18.19 Given -> stack morph
19.08 Step 1 enters (square + expand)
33.4  Step 1 -> stack morph (line-g-1 grows)
35.19 Step 2 enters (identity substitution)
46.6  LINK - pinned hypotenuse "1" confirms
60.16 Step 2 -> stack morph (line-1-2 grows)
61.38 Step 3 enters (isolate + solve)
75.15 answer confirm pulse ("Perfect.")
76.6  Step 3 -> stack morph (line-2-3 grows)
77.58 recenter for options, illus-pinned fades
78.08 options fade in
78.58 options stagger
80.9  correct (D) pulse
82.9  END_FADE_TIME, fade 1.2s
84.3  tl.set - nothing beyond
```
