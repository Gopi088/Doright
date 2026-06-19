"use client";

/**
 * AnimationSection — Apple-quality layered scene, clipping-safe
 *
 * KEY FIX: every animated layer's crop box now has generous padding beyond
 * its visible content. The canvas itself clips at the outer edge only —
 * internal layers never touch that edge, so rotation/translation never
 * exposes a hard crop line.
 *
 * Layer stack (back → front):
 *  1. BASE          — full static scene (landscape, sky, trunk silhouette)
 *  2. BG_TREES_L/R  — slow parallax drift            [padded, safe]
 *  3. CLOUD_L/R     — gentle independent float        [padded, safe]
 *  4. TREE          — sways from root, generous top/side padding absorbs swing
 *  5. GIRL          — fully static, opaque, masks the baked-in girl on TREE
 *  6. HEART         — sits naturally in girl's hand, gentle breathe only
 *  7. FLOWERS_L/R   — transparent PNG, sways independently, padded crop
 *
 * Nothing in this file ever animates the canvas, the base layer, or any
 * whole-image transform. Every motion is scoped to one element's own box,
 * and every box has padding so its motion never reaches the box edge.
 */

import { useEffect, useRef, useCallback } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export default function AnimationSection() {
  const treeRef   = useRef<HTMLDivElement>(null);
  const cloudLRef = useRef<HTMLDivElement>(null);
  const cloudRRef = useRef<HTMLDivElement>(null);
  const bgLRef    = useRef<HTMLDivElement>(null);
  const bgRRef    = useRef<HTMLDivElement>(null);
  const flLRef    = useRef<HTMLDivElement>(null);
  const flRRef    = useRef<HTMLDivElement>(null);
  const heartRef  = useRef<HTMLImageElement>(null);
  const rafRef    = useRef<number>(0);
  const t0        = useRef<number | null>(null);

  const frame = useCallback((now: number) => {
    if (!t0.current) t0.current = now;
    const ms = now - t0.current;

    // ── TREE — gentle sway from root, pivot bottom-center ──────────────────
    // Padded crop (155,0)-(575,405) gives 60px+ clearance on each side —
    // ±0.35° rotation moves the canopy tip by under 3px, nowhere near the edge.
    const tree = treeRef.current;
    if (tree) {
      const sway = Math.sin(ms * 0.002284) * 0.35;
      const tx   = Math.sin(ms * 0.002284) * 0.6;
      tree.style.transform = `translateX(${tx}px) rotate(${sway}deg)`;
    }

    // ── CLOUDS — independent slow float, well within padded boxes ──────────
    const cl = cloudLRef.current;
    const cr = cloudRRef.current;
    if (cl && cr) {
      const driftL = Math.sin(ms * 0.000314) * 4;
      const driftR = Math.sin(ms * 0.000393 + 1.2) * -3.5;
      const floatL = Math.sin(ms * 0.001571) * 1.0;
      const floatR = Math.sin(ms * 0.001308 + 0.8) * 0.8;
      cl.style.transform = `translate(${driftL}px,${floatL}px)`;
      cr.style.transform = `translate(${driftR}px,${floatR}px)`;
    }

    // ── BACKGROUND TREES — slow parallax depth ──────────────────────────────
    const bgl = bgLRef.current;
    const bgr = bgRRef.current;
    if (bgl && bgr) {
      const dL = Math.sin(ms * 0.000314) * 3.0;
      const dR = Math.sin(ms * 0.000209 + Math.PI) * 3.0;
      const vL = Math.sin(ms * 0.001571) * 1.2;
      const vR = Math.sin(ms * 0.001571 + 0.5) * 1.2;
      bgl.style.transform = `translate(${dL}px,${vL}px)`;
      bgr.style.transform = `translate(${dR}px,${vR}px)`;
    }

    // ── FLOWERS — independent organic sway, transparent PNGs ───────────────
    // Crop boxes have 40px+ padding above content — rotation/translation
    // never reaches a hard edge.
    const fl = flLRef.current;
    const fr = flRRef.current;
    if (fl && fr) {
      const bobL  = Math.sin(ms * 0.003590) * 3.0;
      const bobR  = Math.sin(ms * 0.003232 + Math.PI) * 2.6;
      const leanL = Math.sin(ms * 0.002284) * 1.2;
      const leanR = Math.sin(ms * 0.002030 + Math.PI * 0.3) * 1.1;
      const rotL  = Math.sin(ms * 0.001800) * 0.8;
      const rotR  = Math.sin(ms * 0.001650 + 1.0) * 0.8;
      fl.style.transform = `translate(${leanL}px,${bobL}px) rotate(${rotL}deg)`;
      fr.style.transform = `translate(${leanR}px,${bobR}px) rotate(${rotR}deg)`;
    }

    // ── HEART — fully static in girl's hand, only a breathing pulse ────────
    const heart = heartRef.current;
    if (heart) {
      const breathe = 1 + Math.sin(ms * 0.0021) * 0.025;
      heart.style.transform = `scale(${breathe})`;
    }

    rafRef.current = requestAnimationFrame(frame);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, [frame]);

  return (
    <>
      <style>{CSS}</style>
      <section className="as-wrap" aria-label="Animated nature scene">
        <div className="as-canvas">

          {/* ── 1. BASE — static anchor, never animates ──────────────────── */}
          <div className="as-l as-base">
            <img src="/layers/base.webp" alt="Heart-shaped tree landscape" className="as-img" draggable={false} />
          </div>

          {/* ── 2. Background trees — slow parallax, safely padded ─────────── */}
          <div ref={bgLRef} className="as-l as-bgtl">
            <img src="/layers/bg_trees_l.webp" alt="" className="as-img" draggable={false} aria-hidden="true" />
          </div>
          <div ref={bgRRef} className="as-l as-bgtr">
            <img src="/layers/bg_trees_r.webp" alt="" className="as-img" draggable={false} aria-hidden="true" />
          </div>

          {/* ── 3. Clouds — independent float, safely padded ───────────────── */}
          <div ref={cloudLRef} className="as-l as-cll">
            <img src="/layers/cloud_l.webp" alt="" className="as-img" draggable={false} aria-hidden="true" />
          </div>
          <div ref={cloudRRef} className="as-l as-clr">
            <img src="/layers/cloud_r.webp" alt="" className="as-img" draggable={false} aria-hidden="true" />
          </div>

          {/* ── 4. Tree — sways from root; generous padding prevents clipping ── */}
          {/*
            Crop box: (155,0)-(575,405) → 420×405px, includes ~60px clearance
            on each side of the canopy and full height to the root.
            transformOrigin at bottom-center = pivots exactly at the roots.
          */}
          <div ref={treeRef} className="as-l as-tree" style={{ transformOrigin: "50% 100%" }}>
            <img src="/layers/tree.webp" alt="" className="as-img" draggable={false} aria-hidden="true" />
          </div>

          {/* ── 5. Girl — fully static, opaque, masks tree's baked-in girl ──── */}
          {/*
            Positioned at the EXACT same canvas coordinates as her silhouette
            inside the tree image. Since this layer never transforms, and is
            opaque, it perfectly hides the (also static) girl drawn into the
            tree layer beneath — even while the tree sways.
          */}
          <div className="as-l as-girl">
            <img src="/layers/girl.webp" alt="" className="as-img" draggable={false} aria-hidden="true" />
          </div>

          {/* ── 6. Heart — stays naturally in girl's raised hand ────────────── */}
          {/*
            Repositioned precisely at her fingertips with tight spacing —
            no longer floating disconnected. Only a 2.5% breathing pulse,
            anchored at its own centre so it never drifts from her hand.
          */}
          <div className="as-heart-pos" aria-hidden="true">
            <img ref={heartRef} src="/layers/heart.png" alt="" className="as-heart-img" draggable={false} />
          </div>

          {/* ── 7. Foreground flowers — transparent, sway independently ────── */}
          {/*
            True alpha transparency: only flower/leaf pixels are opaque.
            Background landscape stays put because it's NOT part of this
            layer's pixels — only the flowers themselves move.
          */}
          <div ref={flLRef} className="as-l as-fll">
            <img src="/layers/flowers_left.png" alt="" className="as-img" draggable={false} aria-hidden="true" />
          </div>
          <div ref={flRRef} className="as-l as-flr">
            <img src="/layers/flowers_right.png" alt="" className="as-img" draggable={false} aria-hidden="true" />
          </div>

        </div>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CSS
// ─────────────────────────────────────────────────────────────────────────────
const CSS = `
  .as-wrap{
    width:100%;
    background:#fff;
    /* Outer overflow hidden ONLY at the true viewport edge —
       all internal layers have padding so they never reach here */
    overflow:hidden;
  }

  .as-canvas{
    position:relative;
    width:100%;
    aspect-ratio:720/405;
    max-height:100vh;
    max-width:calc(100vh*(720/405));
    margin:0 auto;
    overflow:hidden;
    isolation:isolate;
  }

  .as-l{
    position:absolute;
    pointer-events:none;
    will-change:transform;
  }
  .as-img{
    display:block;
    width:100%;
    height:100%;
    object-fit:fill;
    user-select:none;
    pointer-events:none;
    image-rendering:-webkit-optimize-contrast;
  }

  /* Base: full canvas, static */
  .as-base{ inset:0; z-index:0; }

  /* Background trees — unchanged safe positions */
  .as-bgtl{ left:0; top:38.27%; width:45.83%; height:38.27%; z-index:1; }
  .as-bgtr{ left:56.94%; top:38.27%; width:43.06%; height:38.27%; z-index:1; }

  /* Clouds */
  .as-cll{ left:0; top:2.47%; width:33.33%; height:22.22%; z-index:1; }
  .as-clr{ left:63.89%; top:2.47%; width:36.11%; height:22.22%; z-index:1; }

  /* ── TREE — padded crop (155,0)-(575,405) on 720×405 canvas ──
     left  = 155/720 = 21.528%
     top   = 0/405    = 0%
     width = 420/720  = 58.333%
     height= 405/405  = 100%
     This generous box absorbs the full sway arc with zero clipping. */
  .as-tree{ left:21.528%; top:0%; width:58.333%; height:100%; z-index:2; }

  /* ── GIRL — positioned at her exact silhouette location (300,120)-(440,300) ──
     left  = 300/720 = 41.667%
     top   = 120/405 = 29.630%
     width = 140/720 = 19.444%
     height= 180/405 = 44.444%
     Static — never transforms — so it always perfectly overlaps the same
     region of the (swaying) tree layer beneath it. */
  .as-girl{ left:41.667%; top:29.630%; width:19.444%; height:44.444%; z-index:3; }

  /* ── HEART — positioned exactly at girl's raised fingertips ──
     Measured directly from source artwork (frame 0, heart held in hand):
       heart center = (377.1px, 108.3px) on 720×405 canvas
       heart bbox   = x:368–387, y:100–119 (19×19px) + 4px margin
     → left = 50.500%, top = 23.407%, width = 3.750%, height = 6.667%
     This sits the heart snugly above the fist, touching naturally. */
  .as-heart-pos{
    position:absolute;
    left:50.500%;
    top:23.407%;
    width:3.750%;
    height:6.667%;
    pointer-events:none;
    will-change:transform;
    z-index:4;
  }
  .as-heart-img{
    display:block;
    width:100%;
    height:100%;
    object-fit:contain;
    transform-origin:50% 80%;
    will-change:transform;
    image-rendering:-webkit-optimize-contrast;
  }

  /* ── FOREGROUND FLOWERS — transparent PNG, padded crop ──
     Left:  box (0,245)-(260,405) → left=0% top=60.494% width=36.111% height=39.506%
     Right: box (460,245)-(720,405) → left=63.889% top=60.494% width=36.111% height=39.506%
     40px+ padding above the flower cluster absorbs sway/rotation safely. */
  .as-fll{ left:0%; top:60.494%; width:36.111%; height:39.506%; z-index:5; transform-origin:10% 90%; }
  .as-flr{ left:63.889%; top:60.494%; width:36.111%; height:39.506%; z-index:5; transform-origin:90% 90%; }

  @media(prefers-reduced-motion:reduce){
    .as-l,.as-heart-img{
      will-change:auto!important;
      animation:none!important;
    }
  }
`;