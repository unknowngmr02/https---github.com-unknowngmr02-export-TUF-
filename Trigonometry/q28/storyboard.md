# Storyboard - Trigonometry q28 (Ramp angle of elevation)

Question: A ramp rises 7 m for a horizontal run of 7√3 m. Find the angle it makes with the ground.
Answer: C - 30 degrees.

## PART 1: Narration Beat Analysis

| # | Time | Narration | Purpose | Focus | Visual objective |
|---|------|-----------|---------|-------|-------------------|
| 1 | 0.10-4.38 | "So welcome back again...one more problem." | Cold open | Question card | Hero card + serial badge rise in |
| 2 | 4.78-15.36 | "In this problem, we have a ramp that rises seven meters...angle...with the ground." | State problem | Question text | Question card fully readable, numbers highlighted |
| 3 | 16.02-19.56 | "First, let's visualize the right triangle." | Set up figure | Illustration | Ground + ramp hypotenuse draw in, triangle wash |
| 4 | 20.0-25.60 | "The vertical rise is the opposite side, so opposite equals seven meters" | Label opposite | Rise arrow | Right-angle marker, vertical rise arrow + "7 m" chip pop in |
| 5 | 26.26-32.82 | "the horizontal run is the adjacent side. So adjacent equals seven square root of three meters." | Label adjacent | Base arrow | Horizontal base arrow + "7√3 m" chip pop in |
| 6 | 33.46-39.24 | "Now, which trigonometric ratio uses the opposite and adjacent sides? It's tan." | Identify ratio | Angle arc | Pin figure to top, angle arc + theta chip reveal |
| 7 | 39.80-44.52 | "So tan theta equals opposite over adjacent. Substituting the values," | Set up equation | Step 1 card | Given card restates opp/adj, morphs into Step 1 equation |
| 8 | 45.02-56.22 | "tan theta equals seven over seven square root of three. The seven cancels out, giving us tan theta equals one over square root of three." | Simplify | Step 1 card | Fraction reveal, cancel highlight, simplified fraction |
| 9 | 56.80-65.12 | "Now we know the standard value, tan thirty degrees equals one over square root of three. Therefore, theta equals thirty degrees." | Recall standard value | Step 2 card | Standard-value line, answer highlight |
| 10 | 65.96-72.40 | "So the angle made by the ramp with the ground is thirty degrees. Hence, the correct answer is option C." | Confirm | Options grid | Options reveal, correct option pulses green |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 (0.0-4.4s) - Cold open
Question card rises from below with `heroEnterLowered`, serial badge "Q" pops with rotation at 0.8s, both settle to rest position at 4.4s (end of "one more problem.").
Continuity: opening frame, nothing precedes it.

### Scene 2 (4.4-16.0s) - Question fully read
Question card stays pinned centre-top while the numbers ("7 m", "7√3 m") are read; no illustration yet, dotted grid + bottom strip visible throughout.
Continuity: direct hold from Scene 1's rest position.

### Scene 3 (16.0-33.6s) - Illustration build (Phase 1)
Ground baseline draws in left-to-right, then the ramp hypotenuse draws in from the ground up to the apex (both stroke-dashoffset animations), a soft primary-light wash fills the ramp wedge. Right-angle marker fades in at the foot of the vertical. On "opposite equals seven meters" the vertical rise double-headed arrow pops in with its "7 m" chip. On "adjacent equals seven square root of three meters" the horizontal base double-headed arrow pops in with its "7√3 m" chip below the ground. The 30-degree angle arc (green, opacity-only) reveals at the base vertex with a "θ" role chip beside it as the narrator asks which ratio to use.
Continuity: the triangle is drawn stroke-by-stroke exactly as the narrator names each side, so the figure keeps pace with speech rather than appearing pre-built.

### Scene 4 (33.6-34.4s) - Pin
`apt.pinFlow` glides the full question card and the whole illustration into their pinned slots (question pinned top, illustration pinned centre-left) as the narrator says "It's tan."
Continuity: the illustration's last-drawn state (arc + chips visible) carries directly into the pinned copy, same coordinates only smaller.

### Scene 5 (34.0-39.5s) - Given card
Solution card "Given" enters centre, restating Opposite = 7 m and Adjacent = 7√3 m (already established by the pinned figure), word-synced via `apt.textReveal`.
Continuity: opens right after the pin glide settles; echoes the values just labelled in the figure.

### Scene 6 (40.3-57.0s) - Step 1
Given card morphs into the left stack; Step 1 card enters building `tan θ = opposite / adjacent` then substituting `= 7 / 7√3`, cancelling the 7 (highlighted), landing on `= 1/√3`. LINK pulses recolor the pinned chip/arc briefly as each substituted value is spoken.
Continuity: the equation term order matches the spoken order exactly (ratio name, then substitution, then cancellation).

### Scene 7 (57.8-65.9s) - Step 2
Step 1 morphs to stack; Step 2 card enters with the standard value `tan 30° = 1/√3` then the concluded `θ = 30°` (highlighted as the answer).
Continuity: reuses the same `1/√3` fraction shape from Step 1 so the match reads visually, not just numerically.

### Scene 8 (66.7-74.4s) - Options reveal
Step 2 morphs to stack; pinned illustration fades, question recenters, options grid A-D fades and staggers in, correct option C pulses green in sync with "option C."
Continuity: the recenter and options reveal begin the instant the final step lands in the stack, matching the narrator's move to a firm conclusion.

## PART 3: Asset List Required

- No external assets. Illustration is hand-authored inline SVG (ground line, ramp hypotenuse, wedge wash, right-angle marker, angle arc, two measurement arrows, three chip labels).

## PART 4: Animation Complexity Notes

- Single triangle, single angle arc (standard, non-mirrored technique - angle vertex on the left).
- Ramp hypotenuse doubles as both the "object" (physical ramp surface) and the triangle's mathematical hypotenuse - drawn once, in `--primary`.
- No custom animation helpers beyond `animations.js`; illustration motion is raw `tl.to`/`tl.fromTo` inline per the cookbook.

## PART 5: Master Timeline Overview

```
0.0    background layers
0.3    q-full-card heroEnterLowered
0.8    serial-num pop
4.4    serial-num settle (RISE_TIME)
4.9    ground-line draw-in
6.0    ramp-hyp draw-in
6.8    tri-fill wash
7.2    right-angle-mark fade
9.7    arrow-rise + chip-7m pop
15.9   arrow-base + chip-7root3 pop
19.6   angle-arc reveal + chip-theta pop
PIN_TIME = 33.6  -> pinFlow (question + illustration)
GIVEN_TIME = 34.0 -> card-given enters
39.5   morphToStack (given -> stack)
40.3   card-step1 enters
57.0   morphToStack (step1 -> stack), line-g-1 grows
57.8   card-step2 enters
65.9   morphToStack (step2 -> stack), line-1-2 grows
66.7   RECENTER_TIME - illus-pinned fadeOut, q-pinned recenters
66.9   options-reveal fadeIn
67.3   optionsStagger
71.9   correctPulse (option C)
73.0   END_FADE_TIME (root fadeOut, 1.2s)
74.4   TIMELINE_END
```
