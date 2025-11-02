
"use client";
import { useState, useEffect } from "react";

export default function ElegantDark404() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      {/* Gradient orb */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl" />
      
      <div className={`relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* 404 with sophisticated styling */}
        <div className="mb-12">
          <div className="relative inline-block">
            <h1 className="text-8xl md:text-9xl font-extralight text-white tracking-wide">
              4
              <span className="relative mx-4">
                0
                <div className="absolute inset-0 text-8xl md:text-9xl font-extralight text-blue-400/30 blur-sm">
                  0
                </div>
              </span>
              4
            </h1>
          </div>
        </div>

        {/* Content with refined spacing */}
        <div className="space-y-8 max-w-lg mx-auto px-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-light text-zinc-100">
              Lost in the void
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              The page you seek has dissolved into the digital ether. 
              Let's guide you back to familiar territory.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-all duration-200 overflow-hidden">
              <span className="relative z-10">Go Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                Go Home
              </span>
            </button>
            
            <button className="px-6 py-3 border border-zinc-700 text-zinc-300 font-medium rounded-lg hover:border-zinc-600 hover:bg-zinc-900/50 transition-all duration-200">
              Contact Support
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 border border-zinc-800 rounded-full opacity-50" />
        <div className="absolute -bottom-16 -right-16 w-32 h-32 border border-zinc-800 rounded-full opacity-30" />
      </div>
    </div>
  );
}
