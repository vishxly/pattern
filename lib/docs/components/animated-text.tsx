"use client";
import React from "react";
import AnimatedText from "../ui/animated-text";

const AnimatedTextDemo: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 space-y-4">
      {/* Small instruction text */}
      <p className="text-sm text-gray-500">Hover below to see the effect</p>

      {/* Animated Text */}
      <AnimatedText
        text="Zero UI"
        variant="mouseReveal"
        className="w-full h-32 text-center "
        fontSize="96px"
      />
    </div>
  );
};

export default AnimatedTextDemo;
