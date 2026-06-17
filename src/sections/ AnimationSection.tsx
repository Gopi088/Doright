import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef, useEffect } from "react";
import animationData from "../assets/animation.json";

// ─── Constants ────────────────────────────────────────────────────────────────

/**
 * Playback speed multiplier.
 * 1.25 gives a snappier feel while keeping all easing curves intact.
 */
const PLAYBACK_SPEED = 0.50;

// ─── Component ────────────────────────────────────────────────────────────────

const AnimationSection: React.FC = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  // Apply speed as soon as the animation instance is ready
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(PLAYBACK_SPEED);
    }
  }, []);

  return (
    /*
     * Outer wrapper: full-width, full viewport height, white background
     * matching the animation's own canvas colour — no border artifact
     * on any screen size.
     */
    <div className="w-full min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/*
       * Inner container: locks the ~2.1 : 1 aspect ratio (959 × 457) of
       * the Lottie canvas on every viewport without ever cropping.
       * On portrait / narrow screens the maxWidth clamp keeps it fitting
       * inside the viewport height.
       */}
      <div
        className="w-full"
        style={{
          aspectRatio: "959 / 457",
          maxHeight: "100vh",
          maxWidth: "calc(100vh * (959 / 457))",
        }}
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop
          autoplay
          /*
           * rendererSettings preserves every shape, gradient, easing,
           * and particle exactly as authored in the JSON file.
           * No colour overrides, no simplification, no clipping.
           */
          rendererSettings={{
            preserveAspectRatio: "xMidYMid meet",
            progressiveLoad: false,
            hideOnTransparent: false,
          }}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      </div>
    </div>
  );
};

export default AnimationSection;