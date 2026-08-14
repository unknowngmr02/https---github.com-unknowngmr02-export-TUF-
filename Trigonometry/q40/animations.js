/* ═══════════════════════════════════════════════════════════════
   APTITUDE VIDEO - GSAP ANIMATION HELPERS
   Reusable animation patterns called as apt.xxx(tl, selector, time)
   ═══════════════════════════════════════════════════════════════ */

window.apt = (function() {

  // ─── Card entrance: fade + scale + y slide
  function cardEnter(tl, selector, time) {
    tl.fromTo(selector,
      { y: 40, scale: 0.92, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 0.55, ease: "back.out(1.4)" },
      time);
  }

  // ─── Card exit: fade + scale down
  function cardExit(tl, selector, time) {
    tl.to(selector,
      { opacity: 0, scale: 0.92, duration: 0.35, ease: "power2.in" },
      time);
  }

  // ─── Stack card slide-in (from left)
  function stackEnter(tl, selector, time) {
    tl.fromTo(selector,
      { x: -20, scale: 0.85, opacity: 0 },
      { x: 0, scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.3)" },
      time);
  }

  // ─── MORPH: Active SolutionCard → SolutionStackCard (0.8s box + text crossfade)
  // Reads the target stack-card's computed position/size and smoothly
  // animates the active card's BOX into that slot (position/scale/bg/shadow),
  // while its TEXT crossfades independently: the active card's text fades
  // OUT first (so it never visibly scales/distorts while the box shrinks),
  // then once the box has landed, the stack card's OWN correctly-sized
  // text fades IN. Requires both cards' text wrapped in a ".card-content"
  // div (see template.html) so text opacity can be animated separately
  // from the box transform.
  //
  // Usage:
  //   apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 29.5);
  //
  // The target stack card should be present in DOM at the destination
  // position (can have opacity:0). The active card is what visually morphs.
  function morphToStack(tl, fromSel, toSel, time) {
    const DUR = 0.8;
    const EASE = "power2.inOut";
    const TEXT_FADE = 0.25;

    // Measure ONCE, synchronously, at timeline-build time - before any tween
    // has touched `from`, so its layout is guaranteed to be the untransformed
    // base position. A previous version re-measured `from`'s bounding rect via
    // function-based values evaluated during playback; since GSAP's own
    // transform on `from` affects that same rect, re-measuring mid-tween fed
    // back into itself and produced an oscillating (not smooth) target,
    // visible as the card alternating between two frozen positions in
    // rendered output. Fixed target numbers avoid that feedback loop entirely
    // while `tl.to()` still makes this tween a true child of `tl`.
    const from = document.querySelector(fromSel);
    const to   = document.querySelector(toSel);
    const root = document.querySelector("#root");
    const toParent = to && to.parentElement;

    let targetX = 0, targetY = 0, targetScaleX = 1, targetScaleY = 1;
    if (from && to && root) {
      const fromBox = from.getBoundingClientRect();
      const toBox   = to.getBoundingClientRect();
      const pxScale = 1920 / root.getBoundingClientRect().width; // canvas px per CSS px
      targetX = (toBox.left - fromBox.left) * pxScale;
      targetY = (toBox.top  - fromBox.top)  * pxScale;
      targetScaleX = toBox.width / fromBox.width;
      targetScaleY = toBox.height / fromBox.height;
    }

    // 1) Active card's TEXT fades out first - box hasn't started moving yet,
    //    so this reads as "the solution settles" before it starts sliding.
    tl.to(fromSel + " .card-content", { opacity: 0, duration: TEXT_FADE, ease: "power2.in" }, time);

    // 2) BOX morphs position/size/color - text already hidden, so no
    //    distorted mid-scale text is ever visible. Independent scaleX/scaleY
    //    (not a single uniform scale) so the box lands at the stack card's
    //    true width AND height instead of being constrained to one aspect
    //    ratio - a uniform scale under/overshoots whichever axis differs.
    tl.to(fromSel, {
      x: targetX,
      y: targetY,
      scaleX: targetScaleX,
      scaleY: targetScaleY,
      transformOrigin: "top left",
      backgroundColor: "#e2e5ff",          // primary-light
      boxShadow: "0 0 0 rgba(0,0,0,0)",    // remove shadow
      duration: DUR,
      ease: EASE
    }, time);

    // Reveal target's parent wrapper (often the .clip with opacity:0)
    // alongside the target itself. MUST be a real GSAP property tween
    // (tl.set/.to on an element reference), NOT a plain tl.add(callback).
    // Callbacks only fire when the playhead sequentially crosses them during
    // playback - they are silently skipped when the timeline is scrubbed or
    // rendered via direct seeks (tl.pause(t)/.seek(t)/.time(t) from an
    // arbitrary position, which is exactly how a timeline-editor scrubber
    // and a per-frame renderer both work). A plain callback here left the
    // stack card's wrapper permanently stuck at opacity:0 in the studio
    // preview and in any seek-based render, even though the card's OWN
    // opacity (set elsewhere) looked fine in isolation. Property tweens are
    // evaluated as a pure function of absolute time, so they're correct
    // regardless of seek direction.
    if (toParent) tl.set(toParent, { opacity: 1 }, time + DUR);

    // Reveal the actual stack card box just as the morph completes
    tl.to(toSel, { opacity: 1, duration: 0.01 }, time + DUR);
    // Hide the morphing card so the real stack card takes over
    tl.to(fromSel, { opacity: 0, duration: 0.01 }, time + DUR + 0.01);

    // 3) Stack card's OWN text (correctly sized, never scaled) fades in
    //    right after the box lands.
    tl.fromTo(toSel + " .card-content",
      { opacity: 0 },
      { opacity: 1, duration: TEXT_FADE, ease: "power2.out" },
      time + DUR + 0.02);
  }

  // ─── Question card hero entrance
  function questionEnter(tl, selector, time) {
    tl.fromTo(selector,
      { y: 50, scale: 0.92, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.4)" },
      time);
  }

  // ─── Serial number badge pop-in
  function serialEnter(tl, selector, time) {
    tl.fromTo(selector,
      { scale: 0, rotation: -45, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 0.55, ease: "back.out(2)" },
      time);
  }

  // ─── Simple fade in / out
  function fadeIn(tl, selector, time, duration) {
    tl.to(selector, { opacity: 1, duration: duration || 0.4, ease: "power2.out" }, time);
  }
  function fadeOut(tl, selector, time, duration) {
    tl.to(selector, { opacity: 0, duration: duration || 0.4, ease: "power2.in" }, time);
  }

  // ─── Reveal a result/answer (within a card)
  function resultReveal(tl, selector, time) {
    tl.fromTo(selector,
      { opacity: 0, x: -15 },
      { opacity: 1, x: 0, duration: 0.5, ease: "back.out(1.4)" },
      time);
  }

  // ─── Options stagger appearance
  function optionsStagger(tl, selector, time) {
    tl.from(selector, {
      y: 30, opacity: 0, scale: 0.92,
      duration: 0.45, ease: "power3.out", stagger: 0.12
    }, time);
  }

  // ─── Correct option highlight pulse
  function correctPulse(tl, selector, time) {
    tl.to(selector, {
      scale: 1.05,
      duration: 0.4, ease: "back.out(1.5)",
      yoyo: true, repeat: 1
    }, time);
  }

  // ─── Number/value emphasize (yo-yo scale)
  function emphasize(tl, selector, time) {
    tl.fromTo(selector,
      { scale: 1 },
      { scale: 1.1, duration: 0.3, ease: "power2.out", yoyo: true, repeat: 1 },
      time);
  }

  // ─── Hero question entrance, lowered start (Phase 1 opening beat)
  // Card starts below its resting slot (vertically centered while alone in
  // frame), holds through the opening narration line, then rises to its
  // resting position exactly at riseTime. Selector must be horizontally
  // centered via left:50% (no inline transform) - xPercent:-50 is what
  // keeps it centered once GSAP takes over the transform property.
  // Usage: apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6);
  function heroEnterLowered(tl, selector, offsetY, riseTime) {
    tl.fromTo(selector,
      { xPercent: -50, y: offsetY + 50, scale: 0.92, opacity: 0 },
      { xPercent: -50, y: offsetY, scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.4)" },
      0.3);
    tl.to(selector, { xPercent: -50, y: 0, duration: 0.6, ease: "power2.inOut" }, riseTime);
  }

  // ─── Recenter the pinned question before the options reveal
  // Clears the stack column and aligns the question+options block against
  // it, right before Phase 3 begins. Pair with a fadeOut of the pinned
  // illustration at the same time if one is present.
  // Usage: apt.recenterForOptions(tl, "#q-pinned", 160, 180, 49.1);
  function recenterForOptions(tl, pinnedSelector, xShift, yShift, time) {
    tl.to(pinnedSelector, { x: xShift, y: yShift, duration: 0.5, ease: "power2.inOut" }, time);
  }

  // ─── Road sweep (horizontal expand)
  function roadSweep(tl, selector, time, duration) {
    tl.from(selector, {
      scaleX: 0,
      transformOrigin: "left center",
      duration: duration || 0.9,
      ease: "power3.out"
    }, time);
  }

  // ─── Stack connector line grow-in (vertical line between two step
  // circles in the left stack column). Fire this at the SAME time as the
  // morphToStack call that moves the LOWER of the two steps into the
  // stack - e.g. the line between the "Given" circle and the "Step 1"
  // circle grows when Step 1 itself joins the stack, not before (that's
  // the moment both circles are actually present to connect).
  // Usage: apt.stackLineGrow(tl, "#line-g-1", 37.5);
  function stackLineGrow(tl, selector, time) {
    tl.fromTo(selector,
      { scaleY: 0, opacity: 0 },
      { scaleY: 1, opacity: 1, duration: 0.5, ease: "power2.out" },
      time);
  }

  // ─── Set a stack-line's top/height from the ACTUAL rendered centers of
  // the two .step-circle badges it connects, instead of hand-guessed pixel
  // values. Guessed numbers drift from the real card heights (Given/Step1/
  // Step2/... all have different line counts) and leave a visible gap or
  // overshoot between circles. Call this once per line, for every line,
  // right before the timeline is built (circles are laid out in the DOM
  // even while their wrapper clips sit at opacity:0, so measuring works
  // pre-playback) - same technique morphToStack/pinFlow use for their own
  // position math. This SETS the line's inline top/height; stackLineGrow
  // still owns the scaleY/opacity grow-in animation.
  // Usage: apt.setStackLine("#line-g-1", "#stack-given .step-circle", "#stack-step1 .step-circle");
  function setStackLine(lineSel, circleASel, circleBSel) {
    const root = document.querySelector("#root");
    const line = document.querySelector(lineSel);
    const a = document.querySelector(circleASel);
    const b = document.querySelector(circleBSel);
    if (!root || !line || !a || !b) return;
    const rootBox = root.getBoundingClientRect();
    const pxScale = 1920 / rootBox.width;
    const aBox = a.getBoundingClientRect();
    const bBox = b.getBoundingClientRect();
    const aCenterY = (aBox.top + aBox.height / 2 - rootBox.top) * pxScale;
    const bCenterY = (bBox.top + bBox.height / 2 - rootBox.top) * pxScale;
    line.style.top = aCenterY + "px";
    line.style.height = (bCenterY - aCenterY) + "px";
  }

  // ─── PIN FLOW: Phase 1 (full question + illustration) → Phase 2
  // (pinned question + pinned illustration), as a genuine glide instead of
  // a hard fadeOut/fadeIn swap. Measures each pair's real rendered
  // position/size ONCE at build time (same technique as morphToStack -
  // see its comment on why this must happen before any tween touches the
  // element) and tweens the FULL element toward the PINNED element's slot,
  // crossfading only in the tail of the move so the transition reads as
  // one continuous motion ("the question visibly flows into its pinned
  // spot") rather than two unrelated elements swapping.
  //
  // Call once per pair. Usage (question + illustration each get their own
  // call, same `time` so they move together):
  //   apt.pinFlow(tl, "#q-full-card", "#q-pinned", PIN_TIME);
  //   apt.pinFlow(tl, "#illustration", "#illus-pinned", PIN_TIME);
  //
  // Both the `from` and `to` elements must already be in the DOM (`to`
  // typically opacity:0 until this fires). Do not use this for the
  // solution/stack cards - that's what morphToStack is for.
  function pinFlow(tl, fromSel, toSel, time) {
    const DUR = 0.8;
    const EASE = "power2.inOut";
    const CONTENT_FADE = 0.3;

    const from = document.querySelector(fromSel);
    const to   = document.querySelector(toSel);
    const root = document.querySelector("#root");

    let targetX = 0, targetY = 0, targetScaleX = 1, targetScaleY = 1;
    if (from && to && root) {
      const fromBox = from.getBoundingClientRect();
      const toBox   = to.getBoundingClientRect();
      const pxScale = 1920 / root.getBoundingClientRect().width;
      targetX = (toBox.left - fromBox.left) * pxScale;
      targetY = (toBox.top  - fromBox.top)  * pxScale;
      targetScaleX = toBox.width / fromBox.width;
      targetScaleY = toBox.height / fromBox.height;
    }

    // Content fades out first (mirrors morphToStack's own text-then-box
    // ordering) so nothing looks stretched/distorted mid-glide.
    tl.to(fromSel, { opacity: 0.15, duration: CONTENT_FADE, ease: "power2.in" }, time);

    // The box itself glides toward the pinned slot. `x`/`y` are ADDITIVE
    // translate on top of whatever transform is already set (e.g. a
    // centered card's static xPercent:-50) - GSAP composes them, so this
    // does not need to know or reset the element's existing centering.
    // Independent scaleX/scaleY (not uniform scale) so the box lands at the
    // pinned slot's true width AND height instead of snapping to correct
    // size the instant the pinned element takes over.
    tl.to(fromSel, {
      x: targetX,
      y: targetY,
      scaleX: targetScaleX,
      scaleY: targetScaleY,
      transformOrigin: "top left",
      duration: DUR,
      ease: EASE
    }, time);

    // Reveal the pinned element just as the glide lands, then hide the
    // full element a beat later - same seek-safe property-tween pattern
    // morphToStack uses (no callbacks, so this stays correct under
    // scrubbing/per-frame render).
    tl.set(toSel, { opacity: 1 }, time + DUR - 0.05);
    tl.to(fromSel, { opacity: 0, duration: 0.1 }, time + DUR);
  }

  // ─── AMBIENT LOOP: small finite-repeat bob, for a pinned illustration
  // (or any element) that would otherwise sit dead-static for a long
  // stretch of narration. Deliberately NOT an infinite GSAP repeat (-1) -
  // this timeline is paused/seek-driven (scrubbed in the Studio preview,
  // rendered frame-by-frame), and an unbounded repeat has no defined state
  // once the playhead seeks past where an infinite loop "would" be, which
  // reads as a frozen/undefined frame on export. Instead the repeat count
  // is computed from the requested window so the motion is a pure function
  // of absolute time, correct at any seek position within [startTime, endTime].
  // Usage: apt.ambientLoop(tl, "#bus-icon", 8.0, 40.0);
  function ambientLoop(tl, selector, startTime, endTime, opts) {
    const period = (opts && opts.period) || 1.4;
    const amp = (opts && opts.amp) || 6;
    const half = period / 2;
    const reps = Math.max(1, Math.floor((endTime - startTime) / half) - 1);
    tl.fromTo(selector,
      { y: 0 },
      { y: -amp, duration: half, ease: "sine.inOut", yoyo: true, repeat: reps },
      startTime);
  }

  // ─── Text reveal: word/line fade-in synced to transcript.json
  // Finds every `.rv[data-t]` element inside `containerSelector` (an active
  // center card's `.math` block - see template.html) and fades each one in,
  // individually, at its own ABSOLUTE timeline time (the `data-t` value,
  // taken directly from transcript.json - NOT relative to the card's own
  // start time). Plain opacity fade only, no slide/scale - this replaces
  // the old "whole .math block fades in at once with the card" behavior for
  // ACTIVE cards only. Collapsed stack cards are untouched (they keep their
  // single fade-in from apt.morphToStack's text crossfade - do not wrap
  // stack-card .math content in .rv spans).
  //
  // Two granularities, picked per line when authoring the HTML:
  //   - word-level: one <span class="rv" data-t="..."> per word, for lines
  //     that are a direct verbal/numeric match to the narration
  //     (e.g. "54 ÷ 72", "= 3/4 hr") - each word its own timestamp.
  //   - line-level: one <span class="rv" data-t="..."> around the WHOLE
  //     line, for paraphrased lines with no clean word-to-word match
  //     (e.g. "Distance = 54 km" for narration "the train covers
  //     fifty-four kilometer") - the single timestamp is the start of the
  //     corresponding spoken phrase.
  //
  // Usage: apt.textReveal(tl, "#card-step2 .math");
  function textReveal(tl, containerSelector, duration) {
    const els = document.querySelectorAll(containerSelector + " .rv");
    els.forEach(function(el) {
      const t = parseFloat(el.dataset.t);
      if (isNaN(t)) return;
      tl.to(el, { opacity: 1, duration: duration || 0.25, ease: "power2.out" }, t);
    });
  }

  return {
    cardEnter,
    cardExit,
    stackEnter,
    morphToStack,
    questionEnter,
    serialEnter,
    fadeIn,
    fadeOut,
    resultReveal,
    optionsStagger,
    correctPulse,
    emphasize,
    roadSweep,
    heroEnterLowered,
    recenterForOptions,
    stackLineGrow,
    setStackLine,
    pinFlow,
    ambientLoop,
    textReveal
  };
})();
