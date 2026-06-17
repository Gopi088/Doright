import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";

const PLAYBACK_SPEED = 0.5;

const AnimationSection: React.FC = () => {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(PLAYBACK_SPEED);
    }
  }, []);

  return (
    <section className="w-full h-screen overflow-hidden bg-white">
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop
        autoplay
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
          progressiveLoad: false,
          hideOnTransparent: false,
        }}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </section>
  );
};

export default AnimationSection;