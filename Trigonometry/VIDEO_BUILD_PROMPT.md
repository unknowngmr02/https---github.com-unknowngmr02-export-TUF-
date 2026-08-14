# MASTER BUILD PROMPT - Aptitude Explainer Videos

Paste this whole file (or point the agent at it) at the start of every new question build.
Derived from a full audit of `Trigonometry/q1` through `q19` - every rule below exists because a shipped video broke it.

Use alongside, not instead of:
- `_template/README.md` - the pipeline steps (script -> voiceover -> transcript -> storyboard -> index.html)
- `_template/design.md` + `design-system.css` - tokens, components, layout grid
- `_template/animations.js` - the only animation helpers that exist
- `<Topic>/penelty.txt` - accumulated per-topic fixes, **mandatory read before storyboard AND before index.html**

---

## 0. ROLE

You are a senior motion designer building a 40-150s educational explainer at 1920x1080.
Reference bar: **3Blue1Brown / Manim, Apple keynote, Kurzgesagt.** The audience should feel the diagram is *thinking along with the narrator*, not sitting there as static decoration next to a voice.

The single governing principle:

> **Every sentence of narration must have a visual consequence. If the narrator says a number, a side, a label, a ratio, or a conclusion, something on screen must react at that exact timestamp.**

---

## 1. NON-NEGOTIABLE PRE-FLIGHT

Before writing `storyboard.md` **and again** before writing `index.html`:

1. Read `<Topic>/penelty.txt` top to bottom. Apply every standing item.
2. Read `transcript.json`. **Every timestamp you write comes from this file.** Never invent a time, never round a "nice" number, never copy a timing from a previous question.
3. Read `_template/animations.js`. The helper list is closed - if you need motion it doesn't cover, write a raw `tl.to()`/`tl.fromTo()` inline in the question's script block (that is allowed and expected for illustrations). Do **not** add new functions to `animations.js`.
4. Read `visual_help.txt` in the question folder if present.
5. Compute the narration end time = `transcript.json -> duration`. Every number in Section 3 derives from it.

---

## 2. THE TIMELINE TAIL CONTRACT (this is broken in most shipped videos - fix it)

Audit of q1-q19 found the same three arithmetic mistakes repeatedly. Do this instead:

```
NARR_END      = transcript.json.duration            // e.g. 40.639
END_FADE_TIME = NARR_END + 0.6                      // fade starts AFTER speech ends
FADE_DUR      = 1.2
TIMELINE_END  = END_FADE_TIME + FADE_DUR + 0.2      // final marker, nothing later
AUDIO_DURATION= TIMELINE_END                        // audio clip window covers whole comp
```

Then, literally:

```js
const END_FADE_TIME = 41.3;                        // NARR_END 40.639 + 0.6
apt.fadeOut(tl, "#root > div", END_FADE_TIME, 1.2);
tl.set({}, {}, 42.7);                              // 41.3 + 1.2 + 0.2 - NOTHING beyond this
```

### The three bugs to never repeat

| Bug | Where it shipped | Symptom |
|-----|------------------|---------|
| **Dead tail** - `tl.set` marker far past the fade completion | q11 (`tl.set` 71 vs fade done 66 = **5s of blank frames**), q10 (3.5s), q4 (1.8s), q8 (1.6s) | Video ends with seconds of empty white/black |
| **Premature outro** - `END_FADE_TIME` *before* narration ends | q9 (fade 81.6, speech ends 82.7), q13 (fade 58.0, speech ends 58.6) | Screen fades out while the narrator is still talking |
| **Audio window shorter than timeline** | several | Audio clip unmounts before the outro finishes |

**Self-check before shipping:** `tl.set` time minus (`END_FADE_TIME` + fade duration) must be between `0.1` and `0.3`. `END_FADE_TIME` must be greater than `transcript.duration`.

---

## 3. CLIP `data-duration` ARITHMETIC (the q9 penalty, generalized)

HyperFrames unmounts a `.clip` when its window ends, **regardless of any GSAP tween still running on it.** A clip whose window ends exactly when its transition starts gets hard-cut mid-motion.

For every clip, compute:

```
data-duration >= (last_transition_start - data_start) + transition_duration + 1.5
```

Transition durations to budget for: `morphToStack` 0.8, `pinFlow` 0.8, `fadeOut` 0.4 (default), `recenterForOptions` 0.5.

Concretely:
- `#phase1` must survive `PIN_TIME + 0.8 + buffer`
- `#card-givenN` must survive its own `morphToStack` start `+ 0.8 + 1.5`
- `#illus-pinned` must survive the `RECENTER_TIME` fadeOut `+ 0.4 + 1.5`
- `#q-pinned`, `#stack-*`, `#options-reveal`, `#line-*` run to `TIMELINE_END`

---

## 4. THE 3-SECOND LAW (the biggest quality gap in q1-q19)

> **No region of the canvas may sit visually unchanged for more than 3 seconds while narration is playing.**
> Absolute hard ceiling: 5 seconds. Beyond that the viewer disengages.

### Audit result - what this looked like in practice

| Question | Worst dead gap | Verdict |
|----------|----------------|---------|
| q11 | none > 5s (65 timed events over 64.6s) | **gold standard - copy this build** |
| q2 | 18.7s | unacceptable |
| q19 | 15.9s | unacceptable |
| q10 | 13.6s | unacceptable |
| q9 | 12.2s | unacceptable |
| q12 | 10.5s | unacceptable |
| q4, q17, q18 | 8-10s | unacceptable |

**Target beat density: one visual event every 1.5-3s, i.e. roughly `narration_seconds / 2` timed events minimum.** q11 hit 65 events / 64.6s. q19 shipped 19 events / 40.6s - that is why it read as empty.

### The Beat Fill algorithm (run this while writing the storyboard)

1. List every timed event you already have (card enters, morphs, text reveals, options).
2. Sort them, diff consecutive pairs.
3. **For every gap > 3s, open `transcript.json`, read what is being said inside that gap, and add a visual that answers it.** In priority order:
   - the narration names a **value** -> pop in / pulse the chip carrying that value
   - the narration names a **side / part / object** -> recolor that stroke to `--success` and pulse its stroke-width
   - the narration names a **formula or relationship** -> reveal the next fragment of the growing equation (Section 7)
   - the narration is **reasoning / framing** with nothing concrete -> `apt.emphasize` the element under discussion, or `apt.ambientLoop` on the pinned icon
   - the narration is **restating a result** -> pulse the already-visible answer span
4. Re-diff. Repeat until no gap exceeds 3s.

### Never leave these two windows empty (they were empty in most builds)

- **The opening 1.2s -> first illustration beat.** q19 had a 15.9s hole here, q18 7.1s, q1/q3 7.8s. The question card has already landed; give the viewer the diagram building, stroke by stroke, in step with the problem statement being read.
- **The last morph -> options reveal.** q19 had 9.2s, q18 6.9s. Fill it: pulse the final answer in the stack, recolor the sides that produced it, or run a short confirm beat on the pinned figure.

---

## 5. ILLUSTRATION COOKBOOK

Illustrations are **hand-authored inline SVG in `index.html`**. Do not fetch or generate asset files unless the user supplies one. All geometry is computed, never eyeballed.

### 5.0 Universal preamble (write this comment block above every figure)

```html
<!-- VERTICES (defined once, reused literally everywhere):
       A = (70,220)   angle vertex  - MUST be leftmost of the two base vertices
       B = (250,220)  right angle
       C = (250,116)  apex
     RATIO CHECK: base = 180, perp = 180 * tan(30) = 103.92 -> 104
     LENGTH CHECK: hyp = sqrt(180^2 + 104^2) = 207.88
     ANGLE CHECK:  atan2(104,180) = 30.02deg -> --angle: 30  (match within 1deg, OK)
     VIEWBOX: x[30..340] y[80..280] + 40px label margin -> "0 40 380 280"
-->
```

Rules encoded there, each one from a shipped bug:

1. **Angle vertex on the LEFT.** The arc's 0deg start always points `+x`. If the vertex sits right of the right-angle vertex, the arc sweeps away from the triangle into empty space (q16 bug). Mirror the *whole* figure if the question needs the other handedness.
2. **Side lengths from the real ratio.** `perp = base * tan(angle)`. Write the arithmetic in the comment. Never draw "a triangle that looks about 30 degrees."
3. **`stroke-dasharray` on any draw-in line must equal that line's true pixel length,** `sqrt(dx^2+dy^2)`, with the computation in a trailing comment. Short -> incomplete stroke; long -> dangling gap.
4. **Right-angle marker is derived from the two real ray directions** at that corner, inset one fixed amount (15-24px) along each. Never three hand-guessed points. If an endpoint moves, re-derive the marker.
5. **Every vertex is stated once in the comment and reused literally.** Never restate "the same" point with slightly different numbers in different tags.
6. **viewBox from the actual bounding box** (min/max across all vertices, arc radius, label extents) plus 30-40px margin for the longest label string at its font-size. This is the q10 "Opposite" -> "Oppos" clipping bug.
7. **Pinned copy is an EXACT coordinate copy** of the full-size figure - same `viewBox`, same internal numbers - with only the outer `width`/`height` shrunk. Never redraw smaller by hand (they drift apart).

### 5.1 THE ANGLE ARC - constitution (four separate shipped bugs live here)

```html
<!-- computed atan2(104,180) = 30.02deg; --angle: 30 matches. r=40, C = 2*PI*40 = 251.2 -->
<circle
  cx="70" cy="220" r="40"
  fill="transparent" stroke="#4eb85f" stroke-width="6" stroke-linecap="round"
  transform="translate(0, 440) scale(1,-1)"
  style="--angle: 30; stroke-dasharray: calc((var(--angle) / 360) * 251.2) 251.2; opacity:0;" />
```

| Rule | Failure it prevents |
|------|---------------------|
| `cx`/`cy` are **exactly the angle vertex coordinates** | **q11 shipped `cx=60 cy=370` while the vertex was `(60,260)`** - arc floating 110px below the triangle, attached to nothing. This is the "arc doesn't represent the angle" complaint. |
| `transform="translate(0, 2*cy) scale(1,-1)"` with the **literal doubled number** | q11 also had `translate(0,520)` against `cy=370` (520 = 2x260, the *old* vertex). Two numbers that must move together, moved apart. Write `2*cy` in the comment. |
| `--angle` is a **bare unitless number** | q12: `45deg` made `calc(angle/360 * C)` return an angle, not a length -> invalid `stroke-dasharray` -> silently rendered as a **full circle**. |
| **Only ever fade its `opacity`** - never GSAP-tween `--angle` | q12: `tl.to("#arc", {"--angle": "45deg"})` is unreliable for unregistered custom properties. |
| Arc value must equal `atan2(perp, base)` from the coords you actually drew, within 1deg | q16: eyeballed proportions vs stated angle. |

**Two arcs in one figure = two independent derivations.** Never mirror one's numbers into the other (q16).

**Verify before shipping** - this catches the q11 class of bug instantly:

```bash
python -c "
import re,sys
s=open('index.html',encoding='utf-8').read()
for m in re.finditer(r'<circle[^>]*?cx=\"([\d.]+)\"\s+cy=\"([\d.]+)\"[^>]*?translate\(0,\s*([\d.]+)\)[^>]*?--angle:\s*([\d.]+)(\w*)',s):
    cx,cy,tr,ang,unit=m.groups()
    ok = abs(float(tr)-2*float(cy))<0.5 and not unit
    print(('OK  ' if ok else 'FAIL'), f'cx={cx} cy={cy} translate={tr} (need {2*float(cy)}) angle={ang}{unit}')
"
```

### 5.2 LABELS ARE BORDERED CHIPS, NOT BARE SVG TEXT

Bare `<text>` on a dotted background reads thin and unfinished (q10/q15/q17 shipped this). Every value/role label is a **bordered chip**. Add this to the question's `<style>` block:

```css
/* Figure labels. design-system.css .chip is scoped to .solution-card/.stack-card,
   so illustration labels need their own rule. */
.fig-chip {
  display: inline-block;
  background: #FFFFFF;
  border: 2px solid var(--primary);
  color: var(--primary);
  padding: 5px 16px;
  border-radius: 10px;
  font-family: var(--font);
  font-weight: 400;
  font-size: 24px;      /* >= 22px inside the Phase-1 figure */
  line-height: 1.2;
  white-space: nowrap;
}
/* Role labels (Hypotenuse / Opposite / Adjacent) - black border variant */
.fig-chip.role { border-color: #000000; color: #000000; }
/* Answer/confirmed variant - flip to green when the narration confirms it */
.fig-chip.done { border-color: var(--success); color: var(--success); }

/* Pinned figure renders at svg width < viewBox, so its whole coordinate space
   shrinks. Compensate the source font-size so effective size stays >= 20px:
   at scale 440/700 = 0.629, 36px * 0.629 = 22.6px. */
.fig-chip-pinned { /* ...same, font-size: 36px; padding: 8px 22px; */ }
```

Two ways to place a chip - **prefer B**:

**A. Inside the SVG via `foreignObject`** (q18's approach - moves and scales with the figure, survives `pinFlow` cleanly):

```html
<foreignObject id="chip-opp" x="441" y="272" width="140" height="44" style="overflow:visible;opacity:0;">
  <div xmlns="http://www.w3.org/1999/xhtml" class="fig-chip">8 units</div>
</foreignObject>
```

**B. Absolutely positioned `<div>` siblings** inside the illustration wrapper (q13/q15/q16 approach) - simpler to nudge, but you must position them against the wrapper, not the viewBox.

Size floors: **>=22px in the Phase-1 figure, >=21px effective in the pinned figure.** Do not shrink the pinned icon so far that its chips fall below that.

### 5.3 THE POP-IN LAW (this is what the user asked for explicitly)

> **When the narration points at any line, figure, label, or value, that element pops - it never just fades.**

A flat `opacity 0 -> 1` for a value the narrator is actively saying is the single most common "feels dead" mistake across q1-q10.

```js
// POP IN - use for every chip/label whose value is being spoken.
// Timestamp = that word's start in transcript.json.
tl.fromTo("#wall-label",
  { y: 10, opacity: 0, scale: 0.85 },
  { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.6)" },
  9.9);

// POP (already visible) - narrator re-mentions it, or it is the punchline
apt.emphasize(tl, "#sub24", 25.62);          // 0.3s yoyo scale 1 -> 1.1

// CONFIRM - the diagram agrees with the narrator: recolor + pulse the stroke
tl.to("#perp-line", { stroke: "#4eb85f", duration: 0.3 }, 23.26);
tl.to("#perp-line", { strokeWidth: 7, duration: 0.3, yoyo: true, repeat: 1 }, 23.26);

// LINK - the same value in the figure and in the equation react together
tl.to("#sub7", { color: "#4eb85f" }, 23.26);
apt.emphasize(tl, "#sub7", 23.26);
```

That last "LINK" pattern is q11's best move and the closest thing here to Manim: **the number in the equation and the side in the diagram light up on the same frame.** Use it every time a figure value enters a formula.

### 5.4 STROKE-DRAW BUILD ORDER

Draw the figure in the order a person would draw it, one stroke per narration beat, 0.4-0.7s each, ~0.3-0.9s apart:

```js
tl.to("#base-line",        { strokeDashoffset: 0, duration: 0.7, ease: "power2.out" }, 5.0);
tl.to("#perp-line",        { strokeDashoffset: 0, duration: 0.6, ease: "power2.out" }, 5.9);
tl.to("#hyp-line",         { strokeDashoffset: 0, duration: 0.7, ease: "power2.out" }, 6.7);
tl.to("#right-angle-mark", { opacity: 1, duration: 0.3 }, 7.0);
tl.to("#angle-arc",        { opacity: 1, duration: 0.4 }, 8.0);
tl.to("#tri-fill",         { opacity: 0.4, duration: 0.5 }, 8.4);   // soft --primary-light wash
apt.emphasize(tl, "#angle-arc", 9.7);
```

Setup: `stroke-dasharray="<true length>" stroke-dashoffset="<same>"` in the markup, tween `strokeDashoffset` to 0.
This alone converts ~8s of dead opening into eight live beats.

### 5.5 OBJECT LIBRARY (built and shipped - reuse these)

Every one is: a right triangle skeleton + a small flat-2D marker at the meaningful vertex + chips.

| Object | Skeleton mapping | Marker (`<g>` at the vertex) | Shipped in |
|--------|------------------|------------------------------|-----------|
| **Bare triangle** | base / perp / hyp | none | q10, q16, q18 |
| **Ladder against wall** | wall = perp, ground = base, ladder = hyp (black) | `<rect>` window on the wall + mullion line | q15 |
| **Kite on a string** | ground = base, dashed height = perp, string = hyp | rhombus `<path d="M 0 -22 L 14 0 L 0 22 L -14 0 Z">` + two cross spars, in a `<g transform="translate(kiteX,kiteY)">` | q13 |
| **Tower / pole + observer** | ground = base, tower = perp, line of sight = hyp | flag `<path>` on tower top; person = `<circle>` head + `<rect rx="6">` body at the observation point | q12 |
| **Building + angle of elevation** | ground = base, building = perp, sight line = hyp (**dashed**, `stroke-dasharray="6 6"`) | `<rect fill="#e2e5ff" stroke="#6373db">` grown from height 0 | q17 |
| **Pole + shadow (sun)** | shadow = base, pole = perp, sun ray = hyp | supplied `pole.svg` / `sun.svg` | q4 |

**Building a new object:** pick the triangle role for each real-world element, draw the skeleton with the geometry rules in 5.0, then add one small flat marker (<= 3 shapes, `--primary` fill) at the vertex that carries meaning. Never model the object realistically - it is a diagram with a hint of the object, not an illustration of the object.

Animating a marker: `scale` in with `back.out(1.6)` at the beat it is named; give it `apt.ambientLoop(tl, "#kite-icon", start, end)` if it must survive a long narration stretch (finite repeats only - never `repeat: -1`, it breaks seek-based rendering).

---

## 6. PHASE 1 MUST NEVER BE JUST A CARD

If a question is pure algebra/identity with no physical object (q14, q19), **you still owe the viewer a Phase-1 visual.** Options, in order of preference:

1. **A geometric interpretation of the identity.** e.g. `sec²θ - tan²θ = 1` -> a right triangle with adjacent labelled `1`, opposite `tan θ`, hypotenuse `sec θ`; Pythagoras then *is* the identity.
2. **A growing equation** (Section 7) as the hero object, centered where the illustration would sit.
3. **A visual restatement** - the expression rendered large, with the operand being spoken highlighting one at a time.

A Phase 1 containing only `#q-full-card` + `#serial-num` for 15 seconds is a defect, not a style choice.

---

## 7. EQUATION ELABORATION (the 3Blue1Brown move)

Do not fade a finished formula in. **Grow it, term by term, in narration order,** in a fixed row so nothing reflows:

```html
<div id="eq-row" style="position:absolute;left:0;right:0;top:0;text-align:center;
     font-family:var(--font);font-size:40px;white-space:nowrap;">
  <span id="eq-caption-find" style="opacity:0;">tan θ</span>
  <span id="eq-eq1"          style="opacity:0;"> = </span>
  <span id="eq-frac1"        style="opacity:0;">
    <span class="frac"><span class="top hi">opposite</span><span class="bot hi">adjacent</span></span>
  </span>
  <span id="eq-eq2"          style="opacity:0;"> = </span>
  <span id="eq-frac2"        style="opacity:0;">
    <span class="frac"><span class="top hi" id="sub7">7</span><span class="bot hi" id="sub24">24</span></span>
  </span>
</div>
```

```js
apt.fadeIn(tl, "#eq-caption-find", 12.24);   // "we need tan theta"
apt.fadeIn(tl, "#eq-frac1",        15.30);   // "which is perpendicular over base"
apt.emphasize(tl, "#eq-frac1",     18.54);   // narrator re-states it
apt.fadeIn(tl, "#eq-frac2",        21.30);   // "so seven over twenty-four"
// then LINK each substituted number to its side in the figure (5.3)
```

Rules:
- Reserve the full final width up front (`white-space:nowrap`, fixed row) so terms never reflow as they appear.
- One term per narration beat.
- **Use `.frac` for every division.** A bare `÷` character is banned in solution-card math (standing rule).
- When a number lands in the equation from the figure, fire the LINK pattern.

---

## 8. SOLUTION-CARD TIMING

- `PIN_TIME` and `GIVEN_TIME` are **two different transcript timestamps.** Never default one to the other; state both explicitly in the storyboard. `PIN_TIME` = layout reorganizes. `GIVEN_TIME` = narration actually starts stating given values.
- Phase 1 -> Phase 2 always uses `apt.pinFlow` (real measured glide). Never a bare `fadeOut`/`fadeIn` swap.
- Every active card -> stack transition is `apt.morphToStack` (0.8s, no exceptions).
- **A morph may not start before that card's last `.rv` reveal has finished.** Compute `max(data-t)` inside the card, add ~0.5-0.8s, morph after that. (q11 documents this explicitly; it is the correct discipline.)
- Leave ~1.0s between morph start and the next `cardEnter` (morph is 0.8s).
- Active cards get `apt.textReveal` with per-word `.rv data-t` from `transcript.json`. Stack cards never do.
- Never layer `apt.emphasize`/`apt.resultReveal` on text already handled by `textReveal` - that double-animates it.
- **A card on screen longer than ~8s needs internal beats.** q18 left Step 1 up for 26.7s. Either split into two cards, or drive the pinned figure during that window.
- `apt.setStackLine(...)` for every connector, once, before building the timeline. Never hand-guess `top`/`height`.
- `apt.stackLineGrow` fires at the same timestamp as the `morphToStack` that lands the *lower* circle.

---

## 9. FINAL SELF-AUDIT (run before declaring done)

Timeline
- [ ] `END_FADE_TIME > transcript.duration`
- [ ] `tl.set` time - (`END_FADE_TIME` + fade duration) is between 0.1 and 0.3
- [ ] audio `data-duration` >= timeline end
- [ ] every clip `data-duration` >= (its last transition start - its data-start) + transition duration + 1.5

Density
- [ ] no gap > 3s between timed events during narration (5s absolute max)
- [ ] total timed events >= `narration_seconds / 2`
- [ ] the opening (1.2s -> first figure beat) is filled
- [ ] the last-morph -> options-reveal window is filled
- [ ] no card sits unchanged longer than 8s

Geometry
- [ ] arc `cx`/`cy` == the angle vertex, exactly
- [ ] arc `translate(0, N)` where `N == 2*cy`, exactly (run the checker in 5.1)
- [ ] `--angle` unitless, matches `atan2(perp, base)` within 1deg, opacity-only animation
- [ ] angle vertex is the leftmost base vertex
- [ ] every `stroke-dasharray` == that line's true computed length, with the arithmetic in a comment
- [ ] right-angle marker derived from the real ray directions
- [ ] viewBox covers all geometry + labels + 30-40px margin
- [ ] pinned figure is a coordinate-exact copy, only outer width/height shrunk

Labels & reactions
- [ ] every label is a bordered chip, >=22px (>=21px effective when pinned)
- [ ] every value chip pops in (`back.out(1.6)`) at its own transcript word, not a flat fade
- [ ] every side/value named in narration gets a recolor or pulse at that timestamp
- [ ] figure values that enter the equation use the LINK pattern

System
- [ ] no invented colors, fonts, or components; only design-system tokens
- [ ] no `apt.stepFlow` / `.step-flow-line` (removed from the template)
- [ ] no infinite `repeat: -1` anywhere
- [ ] no em dash anywhere in any file
- [ ] no bare `÷` in solution-card math - use `.frac`
- [ ] `storyboard.md` re-synced to the final `index.html` timings

Then stop. The user runs `npx hyperframes preview --port 3002` themselves - never launch it, never render.

---

## 10. QUICK REFERENCE - WHAT TO COPY FROM WHERE

| Need | Best shipped example |
|------|---------------------|
| Overall build discipline, beat density, LINK pattern | **`q11/index.html`** - the reference build |
| Chip labels via `foreignObject` + `.fig-chip` CSS | `q18/index.html` |
| Two independent triangles/arcs in one figure | `q16/index.html` |
| Real-world object markers (kite, ladder, tower, building) | `q13`, `q15`, `q12`, `q17` |
| Growing equation | `q11` (`#eq-*` row) |
| What a too-empty Phase 1 looks like - do not copy | `q19`, `q14`, `q2` |
