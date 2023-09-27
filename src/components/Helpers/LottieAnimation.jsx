"use client";
import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";

const LottieAnimation = ({ width, height, src }) => {
  const animationContainer = useRef();

  useEffect(() => {
    const animationInstance = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: src,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });

    return () => {
      animationInstance.destroy();
    };
  }, [src]);

  return (
    <div
      ref={animationContainer}
      style={{
        width: width,
        height: height,
      }}
    />
  );
};

export default LottieAnimation;
