# Fallback Prompts — Use These If the Zip Doesn't Work

If `_template/` (or the whole `MasterAptitude.zip`) is missing, corrupted, or won't open, these prompts let anyone rebuild the same pipeline from scratch in a fresh AI coding session (Claude Code, Cursor, etc.) — no dependency on any file that came with the zip. Paste them in order, one at a time, into an empty project folder.

---

## PROMPT 1 — Bootstrap the design system

```
Create three files at the root of my project: design-system.css, animations.js, and template.html. This is a shared template for 16:9 (1920×1080) aptitude-question explainer videos, rendered by HyperFrames (GSAP-driven HTML compositions).

### design-system.css

Define CSS custom properties:
--primary: #6373db
--primary-light: #e2e5ff
--success: #4eb85f
--topic: #949494
--text: #000000
--bg: #FFFFFF
--font: 'Google Sans Flex', 'Inter', 'Helvetica Neue', sans-serif (load Google Sans Flex via @import from Google Fonts, weights 400/500)
--gap-sm: 12px, --gap-md: 18px, --gap-lg: 28px
--radius-card: 18px, --radius-pill: 999px
--shadow-card: 0 6px 24px rgba(99, 115, 219, 0.15)

#root is 1920x1080, position relative, background var(--bg), overflow hidden.

Background layers:
- .dotted-grid: absolute inset:0, radial-gradient dots (#d4d4d4, 1px) at 20px spacing, opacity 0.65, z-index 0
- .bottom-strip: absolute, bottom:0, full width, height:15px, background var(--primary), z-index 1
- .topic-name: absolute, bottom:28px, left:40px, font 16px Regular, color var(--topic), z-index 2
- .logo: absolute, bottom:36px, right:48px, 56x56px, background-image url('assets/logo.png'), z-index 2

Layout grid (document as a comment): 4 columns × 3 rows, margin 100px, column gap 60px, row gap 40px. Column width 385px, row height 266.67px. Column left edges: 100, 545, 990, 1435. Row top edges: 100, 406.67, 713.33.
.pinned-col: absolute, left:540px, width:1275px (spans columns 2-4, used by the options-reveal wrapper).

Question card (.q-card): white bg, 4px solid black border, border-radius 42px, padding 36px 80px, text-align center, box-shadow 7px 7px 0 0 #000 (hard "stickered" shadow, no blur), z-index 3. Text (.q-text): font-weight 500 (Medium — the ONLY place Medium weight is used), font-size 36px, line-height 1.45. Numbers inside get class .num, colored var(--primary), font-weight 500.
.q-card.pinned (smaller variant for phase 2): padding 18px 48px, border-radius 28px, border-width 3px, box-shadow 5px 5px 0 0 #000; .q-card.pinned .q-text font-size 25px.

Serial number badge (.serial-num): absolute, 110x110px, flex centered, background-image url('assets/serial-num-badge.svg') (a flower/wavy-edge badge shape, fill color matching --primary), z-index 4. .serial-num .digit: font-size 44px, Regular, white — content is always the fixed letter "Q" (not the question number) on every video.

Solution card (.solution-card, the ACTIVE center card): white bg, border-radius var(--radius-card), 1px solid #E5E7EB border, box-shadow var(--shadow-card), padding 28px 48px, width 640px, position relative, z-index 3.
.solution-card .chip: inline-block pill, background var(--primary), white text, padding 6px 18px, border-radius var(--radius-pill), font-size 18px, margin-bottom 18px. Text examples: "Given", "Step 1", "Step 2".
.solution-card .math: font-size 32px, Regular, line-height 1.55, text-align center, tabular-nums. .hi and .ans spans inside are colored var(--primary).

Stack card (.stack-card, completed steps in the LEFT column): background var(--primary-light), border-radius var(--radius-card), padding 14px 18px, width 385px (matches one grid column), margin-bottom 14px, position relative.
.stack-card .math: font-size 18px, Regular, line-height 1.45, tabular-nums, same .hi/.ans coloring.

IMPORTANT — stack card badge (this replaces a plain text chip inside stack cards specifically):
.step-circle: absolute, left:-55px (reads as sitting just outside the card's left edge), 44x44px circle (border-radius 50%), background var(--primary), white text, font-weight 600, font-size 24px, flex-centered.
.stack-card .step-circle: top:50%; transform: translateY(-50%) — so it vertically centers against the card regardless of how many lines of math the card has.
Number the circles by what the question actually has: if there's a genuine standalone "Given" card distinct from the solving steps, use "G" for it and "1", "2", "3"... for the steps after it. If the question doesn't have a distinct Given step (its first stack card IS effectively step 1 of the solve), just number all circles sequentially "1", "2", "3", "4"... with no "G" — don't force a "G" onto a card that isn't semantically a separate given/setup step. Check the actual card content before deciding. The ACTIVE (center) solution-card keeps its normal text .chip ("Given"/"Step 1"/etc. as appropriate) — only the collapsed STACK version swaps to a circle.

.stack-line: absolute, left:65px (aligns with a step-circle's horizontal center: -55px + 44px/2 ≈ -33, but tuned to 65px from the stack card's own left edge in practice — verify visually), width:4px, background var(--primary), z-index 5, transform-origin: top center. This draws a vertical connector between two consecutive step-circles. Position each one as a SIBLING of the stack cards (not nested inside one), with `top`/`height` computed from the actual rendered circle centers of the two cards it connects (top ≈ upper card's `top` + half its rendered height + circle radius; height = vertical distance down to the lower circle's top edge). Don't guess these — different question content produces different card heights, so measure per question.

Fraction (.frac): inline-flex column, centered, for numerator/denominator display. .frac .top: border-bottom 2px solid currentColor, font-size 0.85em. .frac .bot: font-size 0.85em, no border.

Options grid (.options-grid): CSS grid, 2 columns, 24px gap.
.opt-btn: white bg, 2.5px solid black border, border-radius var(--radius-pill), padding 18px 28px 18px 80px, font-size 28px, position relative, text-align center.
.opt-btn .letter: absolute circle, 48x48px, left:14px, vertically centered, background var(--primary), white text, font-size 24px.
.opt-btn.correct: background var(--success), border-color var(--success), white text; .opt-btn.correct .letter: white bg, var(--success) text.

* { margin:0; padding:0; box-sizing:border-box; } body background var(--bg), font-family var(--font), color var(--text), overflow hidden, font-weight 400 by default.

### animations.js

Expose a global `window.apt` object (IIFE) with these GSAP-timeline helper functions, each taking (tl, selector, time[, duration]) and using `tl.fromTo`/`tl.to` so they compose as real timeline children:

- cardEnter(tl, selector, time): fromTo {y:40, scale:0.92, opacity:0} to {y:0, scale:1, opacity:1}, duration 0.55, ease "back.out(1.4)"
- cardExit(tl, selector, time): to {opacity:0, scale:0.92}, duration 0.35, ease "power2.in"
- stackEnter(tl, selector, time): fromTo {x:-20, scale:0.85, opacity:0} to {x:0, scale:1, opacity:1}, duration 0.4, ease "back.out(1.3)"
- questionEnter(tl, selector, time): fromTo {y:50, scale:0.92, opacity:0} to {y:0, scale:1, opacity:1}, duration 0.7, ease "back.out(1.4)"
- serialEnter(tl, selector, time): fromTo {scale:0, rotation:-45, opacity:0} to {scale:1, rotation:0, opacity:1}, duration 0.55, ease "back.out(2)"
- fadeIn(tl, selector, time, duration=0.4): to {opacity:1}, ease "power2.out"
- fadeOut(tl, selector, time, duration=0.4): to {opacity:0}, ease "power2.in"
- resultReveal(tl, selector, time): fromTo {opacity:0, x:-15} to {opacity:1, x:0}, duration 0.5, ease "back.out(1.4)"
- optionsStagger(tl, selector, time): from {y:30, opacity:0, scale:0.92}, duration 0.45, ease "power3.out", stagger 0.12
- correctPulse(tl, selector, time): to {scale:1.05}, duration 0.4, ease "back.out(1.5)", yoyo true, repeat 1
- emphasize(tl, selector, time): fromTo {scale:1} to {scale:1.1}, duration 0.3, ease "power2.out", yoyo true, repeat 1
- roadSweep(tl, selector, time, duration=0.9): from {scaleX:0, transformOrigin:"left center"}, ease "power3.out"
- heroEnterLowered(tl, selector, offsetY, riseTime): fromTo {xPercent:-50, y:offsetY+50, scale:0.92, opacity:0} to {xPercent:-50, y:offsetY, scale:1, opacity:1}, duration 0.7, ease "back.out(1.4)" at time 0.3; THEN tl.to(selector, {xPercent:-50, y:0, duration:0.6, ease:"power2.inOut"}, riseTime). Selector must be centered via left:50% with no inline transform, since GSAP takes over the transform property.
- recenterForOptions(tl, pinnedSelector, xShift, yShift, time): to {x:xShift, y:yShift}, duration 0.5, ease "power2.inOut"
- stackLineGrow(tl, selector, time): fromTo {scaleY:0, opacity:0} to {scaleY:1, opacity:1}, duration 0.5, ease "power2.out" — fire this at the SAME time as the morphToStack call that lands the LOWER of the two circles it connects into the stack (never before both circles exist on screen). Never fade these lines back out later.
- morphToStack(tl, fromSel, toSel, time): the most important one — 0.8s duration, ease "power2.inOut". It measures the `from` element's and `to` element's getBoundingClientRect() ONCE synchronously at build time (not during playback, to avoid feedback-loop jitter), computes target x/y/scale in canvas pixels (scale factor = 1920 / #root's rendered width), then: (1) fades out `fromSel + " .card-content"` over 0.25s so text never visibly distorts mid-scale, (2) tweens `fromSel`'s x/y/scale/transformOrigin("top left")/backgroundColor(to var(--primary-light))/boxShadow(to none) over the full 0.8s, (3) at time+0.8s sets the target's parent wrapper and the target itself to opacity 1 (as real property tweens, not callbacks — callbacks get skipped when a timeline is scrubbed/seeked, which breaks studio preview and seek-based rendering), (4) immediately hides `fromSel` at opacity 0, (5) fades in `toSel + " .card-content"` over 0.25s starting at time+0.82s. Both the active card and its target stack card must wrap their chip/circle + math content in a `.card-content` div so text can crossfade independently of the box transform. The target stack card must already exist in the DOM at its final position with opacity:0 before this fires.

### template.html

Build the master composition skeleton:
- <div id="root" data-composition-id="root" data-start="0" data-width="1920" data-height="1080"> as the top-level element
- Background layers: .dotted-grid, .bottom-strip, .topic-name (TOPIC_NAME placeholder), .logo
- An <audio id="voiceover" class="clip" src="voiceover.mp3" data-start="0" data-duration="60" data-track-index="0">
- PHASE 1 (0 to ~22s, adjust per video): a #phase1 wrapper containing the full-size #q-full-card (QUESTION_TEXT placeholder, positioned left:50% top:80px width:1500px, static opacity:0 + transform:translateX(-50%) inline so there's no flash before GSAP's tween starts) and #serial-num (digit content is the fixed letter "Q", not a per-question number) as a SIBLING (not nested) of the card, positioned at its FINAL resting spot — pair with a parallel GSAP tween that mirrors heroEnterLowered's y-offset so the badge doesn't snap to its final height while the card is still lowered.
- An illustration area — for simple template purposes just a placeholder div; per-question illustrations get built custom (see Prompt 3 below) and live in that question's own folder, never in the shared template.
- PHASE 2: a #q-pinned wrapper (opacity:0 initially) with the smaller .q-card.pinned variant (QUESTION_TEXT_SHORT placeholder), positioned left:385px top:30px width:1275px (385px is intentional — apt.recenterForOptions later shifts it +160px to align with .pinned-col at 540px).
- Solution cards: one #card-given, #card-step1, #card-step2, #card-step3 etc, each full-viewport wrapper containing a centered .solution-card with a .chip + .math inside a .card-content div.
- Stack cards: matching #stack-given, #stack-step1, etc, positioned at left:100px with individually-computed `top` values that leave a real ~40px+ gap based on each card's actual height (don't evenly guess spacing) — each containing a .stack-card with a .step-circle + .math inside .card-content. Label the circles G/1/2/3 only if there's a genuine standalone Given card; otherwise number them plainly 1/2/3/4 (see the rule above).
- Connector lines: stack-line divs between each consecutive pair of circles (named e.g. #line-g-1/#line-1-2/#line-2-3, or #line-1-2/#line-2-3/#line-3-4 if there's no Given card) as described above.
- Options reveal: an #options-reveal wrapper (opacity:0) containing a .pinned-col > .options-grid with four .opt-btn (one marked class="correct").
- A GSAP <script> block building `const tl = gsap.timeline({paused:true})`, calling the apt.* helpers in sequence with absolute second-based timestamps, ending with `window.__timelines = window.__timelines || {}; window.__timelines["root"] = tl;`
```

---

## PROMPT 2 — Script-writing style (voiceover generation)

```
Write a spoken-teacher-style voiceover script for this aptitude question: [PASTE QUESTION + SOLUTION HERE]

Style rules:
- Open with ONE short line like "So welcome back again, time for one more problem." or "Okay, let's try to solve this question." Don't combine multiple openings.
- Write like a tutor thinking aloud, not a textbook. Prefer "Now in this problem...", "We need to find...", "So let us check...", "Hence...". Avoid formal phrases like "The sample space consists of..." or "It can be inferred that...".
- Use extremely basic English — "find" not "determine", "use" not "utilize", "so" not "therefore", "given" not "provided". Short, easy-to-speak sentences.
- Repeat important ideas 2-3 times in slightly different words (as problem context, then as a simple rule, then as a short memory line) — don't over-compress.
- Use small self-questions ("What do we need to find?", "Can we take 16? No, we cannot.") and answer them immediately.
- Add short confirmation beats after important steps: "Got it? Perfect.", "Very simple.", "Done.", "Be very sure about one thing." — don't overuse, only after important steps.
- If there's a common student mistake, call it out explicitly: "Be careful here...", "Do not confuse this with...".
- Close each part before moving on: "So this part is completed.", "Now let us put it in the formula."
- Don't narrate every visual detail — assume diagrams/labels/equations are shown on screen; the voiceover should guide attention, not describe pixels.
- For easy questions, keep the solving part short (summarize instead of narrating every algebra step: "Solving this gives us x equal to 40."). For hard questions, slow down on the setup/concept/trick, but still summarize repetitive arithmetic after 1-2 steps ("After simplifying this...").
- Explain at a beginner/ELI5 level — the explanation should be understandable even to a very young learner (not literally a five-year-old, but that simple/plain-spoken), UNLESS the question is very easy and solved by a single direct formula application, in which case stay concise and procedural without extra hand-holding.
- End by simplifying to the final answer and matching it to the correct option letter.
- Tone: simple, spoken, calm, beginner-friendly, collaborative ("we"/"us"), slightly repetitive where it helps.

CRITICAL — phonetic spelling for ElevenLabs TTS: write these words phonetically in the script so they're pronounced correctly:
pi→pie, minus→my-nus, diameter→dye-am-eter, circumference→sir-cum-frence, theta→thay-tuh, phi→fye, sigma→sig-muh, infinity→in-fin-i-tee, integral→in-teh-gral, derivative→duh-riv-ah-tiv, hypotenuse→hi-pot-eh-noose, perimeter→puh-rim-uh-ter, isosceles→eye-sos-uh-leez, equilateral→eh-kwi-lat-er-al, scalene→skay-leen, parallelogram→pa-ruh-lel-oh-gram, quadrilateral→kwod-ri-lat-er-al, trapezium→truh-pee-zee-um, centimeter→sen-ti-meter, kilometer→kuh-lom-eter.
Write numbers/units out normally ("one hundred fifty", "kilometers per hour"). Never use em dashes (—) — they don't read naturally aloud.

Output only the script — no headings like "Solution" unless asked.
```

---

## PROMPT 3 — Illustration methodology ("Visual Explanation")

```
After the Approach to Solve, generate a simple educational illustration that helps students immediately visualize the question before solving it — but only if it actually improves understanding. Skip it entirely for straightforward arithmetic with no spatial/conceptual trap.

Illustration requirements:
- Looks like a school textbook diagram: white background, simple black outlines.
- Use color ONLY sparingly to highlight key numbers/labels (reuse a single accent color consistently — don't invent a saturated illustration palette or solid-fill objects).
- Label every important dimension clearly (radius, diameter, height, length, breadth, slant height, volume, curved surface, etc.)
- No decorative graphics — every element must earn its place.
- Beginner-friendly and simple, not a polished/realistic render.
- The illustration should explain the CONCEPT, not just decorate the final answer.

Choose what to illustrate based on the question type:
- Geometry/Mensuration: draw the actual shape (cylinder, cone, cube, cuboid, sphere, tank, pipe, wire, prism) with all given dimensions labelled on it.
- Unit/measurement conversion: show it as a vertical chain, e.g. "2 mm Diameter → Radius = 1 mm → 0.1 cm".
- A physical object named in the question (boat, tank, pipe, wire, cone, cuboid, road, field, box, ball, pole, ladder): illustrate that literal object first, before any formula.
- A common student confusion: illustrate the confusing part directly as TWO separate static figures connected by an arrow/caption (not one continuously-morphing/rotating object) — e.g. for a "wire → cylinder" question: Figure 1 = wire lying horizontal, labelled "Length = ?" and "Diameter = 2mm". Arrow + caption: "the same wire can be imagined standing vertically." Figure 2 = a cylinder, labelled "h = Length of Wire" and "Radius = 1mm". Then a boxed equation "Length of Wire = h". Then the formula.

Whenever the question involves a physical object, first generate a simple visualization showing the object exactly as described. THEN, if needed, show how that object maps to the formula used in the solution. The illustration's job is to clarify the student's mental model BEFORE any calculation begins — translating the real-world object into the math model is usually the hardest part of an aptitude question.
```

---

## PROMPT 4 — Storyboard generation

```
You are a Senior Motion Director creating premium 2D educational explainer videos for a 16:9, white-background, Google-Sans-Flex, flat-2D, Kurzgesagt/Apple-keynote/Linear-inspired aptitude video.

You have the question, text solution, correct answer, script, voiceover, and a word-level transcript with timestamps.

FIRST analyze the voiceover and divide it into logical narration beats. For each beat identify: timestamp estimate, narration text, educational purpose, viewer attention focus, visual objective.

THEN create a highly detailed scene-by-scene storyboard. For every scene provide: SCENE NUMBER, TIMESTAMP, VOICEOVER, VISUAL OBJECTIVE, SCREEN LAYOUT, ON-SCREEN ELEMENTS, ANIMATION DETAILS, CAMERA MOVEMENT, TRANSITIONS, EDUCATIONAL PURPOSE, VISUAL HIERARCHY, ATTENTION MANAGEMENT, MOTION NOTES.

Use extreme visual specificity — never "show a car", always e.g. "A red flat 2D car enters from the left edge and settles on a minimal road. A distance label fades upward from beneath the road while the speed value scales from 80% to 100% size with soft easing." Think like a motion designer, not a teacher.

Hard rules — the storyboard cannot invent new layouts, colors, animations, or components:
- Colors: only --primary #6373db, --primary-light #e2e5ff, --success #4eb85f, --topic #949494, --text #000000, --bg #FFFFFF
- Fonts: only Google Sans Flex (Medium reserved for the Phase-1 hero question text only, Regular everywhere else)
- Components: only QuestionCard, SerialNum, SolutionCard, SolutionStackCard (with its StepCircle badge + StackLine connector), solutionChip, options grid/opt-btn, logo, topic-name, bottomStrip, Illustration, Fraction
- Animations: only the apt.* helpers (name them explicitly in motion notes) — every active-card-to-stack transition is a 0.8s apt.morphToStack, no exceptions. Flag (don't silently invent) any genuinely new animation.
- Question pins to top from Phase 2 onward; stack column grows downward on the left, each card staying visible once added, spaced with a real measured gap; final reveal shows a 2x2 options grid with the correct one highlighted green.
- Apply the illustration methodology from Prompt 3 above.
- Illustration labels must persist (never disappear or get swapped for an unlabelled copy) through the Phase-1-to-pinned-Phase-2 resize.
- No partial/blank numeric reveals — every value is either fully shown or not yet shown, never frozen half-populated.

Output format: PART 1 Narration Beat Analysis, PART 2 Scene-by-Scene Storyboard, PART 3 Asset List Required, PART 4 Animation Complexity Notes, PART 5 Master Timeline Overview.
```

---

## PROMPT 5 — Master orchestration (ties it all together)

```
We're building a 16:9 aptitude-explainer video pipeline from scratch (the original template project isn't available). Folder convention: <Topic>/<Tier>/quesN/ where Tier is exactly one of Beginner, Amateur, Intermediate, Advanced, and quesN is ques1..ques10.

BEFORE starting a Beginner-tier question, sanity-check its actual difficulty. If a "Beginner" question is really too hard for that tier, don't build it as-is — tell me, copy the question, and generate (or ask me to run through ChatGPT) a simpler replacement question suited to that difficulty tier, then use the replacement instead.

For a new question, do this in order:
1. Ask me: "Paste the voiceover script you have, or should I proceed to generate it myself?" If I paste one, use it as-is. If I ask you to generate it, first ask my explanation-type preference (concise/medium/detailed) and whether to include a common-mistake callout, then use the script style from PROMPT 2 above (including the ELI5 explanation-depth rule). Save as script.txt.
2. Tell me to generate the voiceover manually via ElevenLabs (voice: whatever custom voice we've trained, model eleven_multilingual_v2, Stability 0.65 / Similarity 0.85 / Style 0.25 / Speed 0.95 / Speaker boost ON) and save it as voiceover.mp3. Don't call any TTS API yourself.
3. Once I say "go ahead", transcribe voiceover.mp3 with word-level timestamps (ElevenLabs Scribe v2 or equivalent), grouping words into phrases with a ~0.3s pause threshold, and save transcript.json + transcript.txt. Show me the human-readable transcript for approval.
4. After I approve the transcript, generate the storyboard using PROMPT 4 above (which folds in PROMPT 3's illustration methodology) and save it as storyboard.md. Show it to me for approval before building anything.
5. Once the script/solution is approved, remind me to paste that same solution text into this question's entry in the internal portal, so the text solution published there matches the video's solution exactly — don't let them diverge. This is a manual step on my end; just flag it, don't try to do it yourself.
6. After I approve the storyboard, build index.html using the design system and template markup from PROMPT 1, customized with this question's actual content, with GSAP timings read directly off the transcript timestamps (not guessed). Preview it, verify: every stack card has a real spaced-out gap, its badge is a plain numbered circle outside the card (not a text chip) connected by a progress-bar line to the next one, the SerialNum badge shows a fixed "Q" (not the question number), illustration labels persist through the Phase 2 pin/resize, no numeric value is ever shown half-blank, every card-to-stack transition uses the 0.8s morph, and the final options grid highlights the correct answer in green. Then render the final MP4.

Never move to the next step without my explicit approval of the previous one.
```

---

## Notes for whoever uses these

- These prompts encode everything from the working `_template/` at the time this file was written — but they're **text descriptions**, not the actual CSS/JS/HTML. Expect to iterate a little (colors/pixel positions may need a small correction pass) since an LLM re-typing a spec from prose isn't pixel-identical to copying the real files.
- If any piece of `_template/` (even just `design-system.css`, `template.html`, or `animations.js`) is still readable, always prefer copying those files directly over regenerating from Prompt 1 — this file exists purely as a last resort.
- Standing rules worth re-stating to anyone using these prompts:
  1. Stack-card `top` positions must be individually computed with a real gap, never evenly guessed.
  2. Illustration labels must never disappear during the Phase-1→Phase-2 resize — animate the same labelled group, don't swap in a second unlabelled copy.
  3. The SerialNum badge always shows a fixed "Q", never the question number.
  4. Stack cards use plain numbered circles (1/2/3... or G/1/2/3 if there's a genuine separate Given step — never force a "G" onto a card that isn't actually a distinct given/setup step) outside the card, connected by a progress-bar line — never a text chip inside a stack card.
  5. Explanation depth defaults to ELI5-simple, except for very easy direct-formula questions.
  6. After approval, the same solution text must be pasted into the internal portal so it matches the video — a manual step to flag, not automate.
  7. Before building a Beginner-tier question, verify it's actually beginner difficulty; if not, get a simpler replacement question generated for that slot instead of building the mismatched one.
