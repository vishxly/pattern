"use client";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 6) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="relative w-[90%] max-w-[1000px] h-[500px] flex flex-col items-center justify-center">
        {/* Custom dotted border with more spacing */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to right, #374151 0%, #374151 8px, transparent 8px, transparent 24px) repeat-x,
              linear-gradient(to right, #374151 0%, #374151 8px, transparent 8px, transparent 24px) repeat-x,
              linear-gradient(to bottom, #374151 0%, #374151 8px, transparent 8px, transparent 24px) repeat-y,
              linear-gradient(to bottom, #374151 0%, #374151 8px, transparent 8px, transparent 24px) repeat-y
            `,
            backgroundSize: "24px 1px, 24px 1px, 1px 24px, 1px 24px",
            backgroundPosition: "0 0, 0 100%, 0 0, 100% 0",
          }}
        />

        {/* Corner crosses */}
        <div className="absolute -top-2 -left-2 w-4 h-4">
          <div className="absolute left-1/2 top-0 h-full w-px bg-gray-500 -translate-x-1/2" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-500 -translate-y-1/2" />
        </div>
        <div className="absolute -top-2 -right-2 w-4 h-4">
          <div className="absolute left-1/2 top-0 h-full w-px bg-gray-500 -translate-x-1/2" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-500 -translate-y-1/2" />
        </div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4">
          <div className="absolute left-1/2 top-0 h-full w-px bg-gray-500 -translate-x-1/2" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-500 -translate-y-1/2" />
        </div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4">
          <div className="absolute left-1/2 top-0 h-full w-px bg-gray-500 -translate-x-1/2" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-500 -translate-y-1/2" />
        </div>

        {/* Rotating Triangle Loader */}
        <div className="mb-6">
          <svg width="90" height="90" viewBox="0 0 100 100" className="mx-auto">
            {/* Triangle outline */}
            <polygon
              points="50,15 85,75 15,75"
              stroke="white"
              strokeDasharray="3 6"
              strokeWidth="1.5"
              fill="transparent"
            />
            {/* Rotating arc */}
            <circle
              cx="50"
              cy="55"
              r="28"
              stroke="white"
              strokeWidth="10"
              strokeDasharray="45 180"
              fill="transparent"
              transform={`rotate(${angle} 50 55)`}
            />
          </svg>
        </div>

        {/* 404 Text */}
        <h1 className="text-5xl font-bold mb-4">404</h1>

        {/* Logged in text */}
        <p className="mb-6 text-gray-400 text-center text-sm sm:text-base">
          You are logged in as{" "}
          <span className="text-white font-medium">abc@gmail.com</span>
        </p>

        {/* Button */}
        <button className="rounded-full px-5 py-2 bg-white text-black hover:bg-gray-200 transition">
          Sign in as a different user
        </button>
      </div>
    </div>
  );
}
