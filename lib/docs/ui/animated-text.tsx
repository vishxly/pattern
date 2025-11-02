import React, { useState, useEffect } from "react";

type AnimationVariant =
  | "mouseReveal"
  | "wave"
  | "glow"
  | "typewriter"
  | "bounce"
  | "rainbow"
  | "glitch"
  | "neon"
  | "dissolve"
  | "matrix";

interface AnimatedTextProps {
  text?: string;
  className?: string;
  variant?: AnimationVariant;
  fontSize?: string; // <-- Added this prop
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text = "Conar",
  className = "",
  variant = "mouseReveal",
  fontSize = "48px", // <-- Added default value
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [time, setTime] = useState(0);
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [glitchOffset, setGlitchOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = document.getElementById(
        `animated-text-container-${variant}`
      );
      if (container) {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [variant]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 0.1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (variant === "typewriter") {
      const interval = setInterval(() => {
        setTypewriterIndex((prev) => {
          if (prev >= text.length) {
            setTimeout(() => setTypewriterIndex(0), 1000);
            return prev;
          }
          return prev + 1;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [variant, text]);

  useEffect(() => {
    if (variant === "glitch") {
      const interval = setInterval(() => {
        setGlitchOffset({
          x: (Math.random() - 0.5) * 4,
          y: (Math.random() - 0.5) * 4,
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [variant]);

  const renderMouseReveal = () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      className="select-none tracking-tighter"
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#eab308" />
          <stop offset="25%" stopColor="#ef4444" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="75%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>

        <radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          cx={`${mousePosition.x}%`}
          cy={`${mousePosition.y}%`}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>

        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 font-bold dark:stroke-neutral-800"
        style={{
          opacity: 0.7,
          fontFamily: "helvetica, Arial, sans-serif",
          fontSize: fontSize, // <-- Use the prop here
        }}
      >
        {text}
      </text>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-bold"
        style={{
          fontFamily: "helvetica, Arial, sans-serif",
          fontSize: fontSize, // <-- And use the prop here
        }}
      >
        {text}
      </text>
    </svg>
  );

  const renderWave = () => (
    <div className="text-6xl font-bold flex justify-center items-center h-full">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          style={{
            transform: `translateY(${Math.sin(time + index * 0.5) * 10}px)`,
            transition: "transform 0.1s ease",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );

  const renderGlow = () => (
    <div className="flex justify-center items-center h-full">
      <div
        className="text-6xl font-bold text-white"
        style={{
          textShadow: `
            0 0 5px #3b82f6,
            0 0 10px #3b82f6,
            0 0 15px #3b82f6,
            0 0 20px #3b82f6,
            0 0 35px #3b82f6,
            0 0 40px #3b82f6
          `,
          filter: `hue-rotate(${time * 50}deg)`,
        }}
      >
        {text}
      </div>
    </div>
  );

  const renderTypewriter = () => (
    <div className="flex justify-center items-center h-full">
      <div className="text-6xl font-bold text-green-400 font-mono">
        {text.substring(0, typewriterIndex)}
        <span className="animate-pulse">|</span>
      </div>
    </div>
  );

  const renderBounce = () => (
    <div className="text-6xl font-bold flex justify-center items-center h-full">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block text-purple-600"
          style={{
            animation: `bounce 1s ease-in-out infinite ${index * 0.1}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
      <style jsx>{`
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );

  const renderRainbow = () => (
    <div className="text-6xl font-bold flex justify-center items-center h-full">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            color: `hsl(${(index * 40 + time * 50) % 360}, 70%, 60%)`,
            transition: "color 0.1s ease",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );

  const renderGlitch = () => (
    <div className="flex justify-center items-center h-full relative">
      <div className="text-6xl font-bold text-red-500 absolute">{text}</div>
      <div
        className="text-6xl font-bold text-cyan-400 absolute mix-blend-multiply"
        style={{
          transform: `translate(${glitchOffset.x}px, ${glitchOffset.y}px)`,
          filter: "blur(0.5px)",
        }}
      >
        {text}
      </div>
      <div
        className="text-6xl font-bold text-yellow-400 absolute mix-blend-multiply"
        style={{
          transform: `translate(${-glitchOffset.x}px, ${-glitchOffset.y}px)`,
          filter: "blur(0.3px)",
        }}
      >
        {text}
      </div>
    </div>
  );

  const renderNeon = () => (
    <div className="flex justify-center items-center h-full">
      <div
        className="text-6xl font-bold text-pink-400"
        style={{
          textShadow: `
            0 0 5px #ec4899,
            0 0 10px #ec4899,
            0 0 20px #ec4899,
            0 0 40px #ec4899,
            0 0 80px #ec4899,
            0 0 90px #ec4899,
            0 0 100px #ec4899,
            0 0 150px #ec4899
          `,
          animation: "neonFlicker 2s infinite alternate",
        }}
      >
        {text}
      </div>
      <style jsx>{`
        @keyframes neonFlicker {
          0%,
          18%,
          22%,
          25%,
          53%,
          57%,
          100% {
            text-shadow: 0 0 5px #ec4899, 0 0 10px #ec4899, 0 0 20px #ec4899,
              0 0 40px #ec4899, 0 0 80px #ec4899, 0 0 90px #ec4899,
              0 0 100px #ec4899, 0 0 150px #ec4899;
          }
          20%,
          24%,
          55% {
            text-shadow: none;
          }
        }
      `}</style>
    </div>
  );

  const renderDissolve = () => (
    <div className="text-6xl font-bold flex justify-center items-center h-full">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block text-indigo-500"
          style={{
            opacity: Math.sin(time * 2 + index * 0.3) * 0.3 + 0.7,
            transform: `scale(${Math.sin(time * 1.5 + index * 0.2) * 0.1 + 1})`,
            filter: `blur(${Math.sin(time * 3 + index * 0.4) * 1 + 0.5}px)`,
            transition: "all 0.1s ease",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );

  const renderMatrix = () => (
    <div className="text-6xl font-bold flex justify-center items-center h-full">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block text-green-400 font-mono"
          style={{
            opacity: Math.random() > 0.8 ? Math.random() : 1,
            textShadow: "0 0 5px #22c55e",
            filter:
              Math.random() > 0.9
                ? `hue-rotate(${Math.random() * 60}deg)`
                : "none",
          }}
        >
          {Math.random() > 0.95
            ? String.fromCharCode(33 + Math.floor(Math.random() * 94))
            : char === " "
            ? "\u00A0"
            : char}
        </span>
      ))}
    </div>
  );

  const renderVariant = () => {
    switch (variant) {
      case "mouseReveal":
        return renderMouseReveal();
      case "wave":
        return renderWave();
      case "glow":
        return renderGlow();
      case "typewriter":
        return renderTypewriter();
      case "bounce":
        return renderBounce();
      case "rainbow":
        return renderRainbow();
      case "glitch":
        return renderGlitch();
      case "neon":
        return renderNeon();
      case "dissolve":
        return renderDissolve();
      case "matrix":
        return renderMatrix();
      default:
        return renderMouseReveal();
    }
  };

  return (
    <div
      id={`animated-text-container-${variant}`}
      className={`container mx-auto ${className}`}
      style={{ opacity: 1, transform: "none" }}
    >
      {renderVariant()}
    </div>
  );
};

export default AnimatedText;
