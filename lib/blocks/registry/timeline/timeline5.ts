import { LandingComponentGroup } from "@/lib/blocks/landing-registry";

import CurvedPathTimeline from "../../components/timeline/timeline5";

export const timeline5Registry: LandingComponentGroup = {
  title: "Curved Path Timeline",
  description:
    "A visually appealing timeline component with curved path design.",
  category: "Timeline",
  variants: {
    default: {
      title: "Curved Path Timeline",
      description:
        "A visually appealing timeline component with curved path design.",
      component: CurvedPathTimeline,
      image: "/images/blocks/timeline/timeline5.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `"use client";
import React, { useState, useEffect, useRef } from "react";

const CurvedPathTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: 1,
      title: "Ideation",
      desc: "Brainstorm and conceptualize your vision with creative thinking",
      icon: "💡",
      position: "left",
    },
    {
      id: 2,
      title: "Prototype",
      desc: "Create initial mockups and proof of concept designs",
      icon: "🔧",
      position: "right",
    },
    {
      id: 3,
      title: "Build",
      desc: "Develop with cutting-edge technologies and best practices",
      icon: "🏗️",
      position: "left",
    },
    {
      id: 4,
      title: "Test",
      desc: "Rigorous testing across all scenarios and edge cases",
      icon: "🧪",
      position: "right",
    },
    {
      id: 5,
      title: "Launch",
      desc: "Deploy to production and celebrate your success",
      icon: "🚀",
      position: "center",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const trigger = viewportHeight * 0.7;

      let progress = 0;
      if (rect.top < trigger) {
        progress = Math.min(
          1,
          Math.max(
            0,
            (trigger - rect.top) / (rect.height + viewportHeight * 0.3)
          )
        );
      }

      setScrollProgress(progress);

      const newVisible = new Set();
      steps.forEach((_, index) => {
        if (progress >= (index + 0.1) / steps.length) {
          newVisible.add(index);
        }
      });
      setVisibleSteps(newVisible);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  const getStepPosition = (index: number, position: string) => {
    if (isMobile) {
      return {
        left: '50%',
        top: \`\${index * 180 + 60}px\`,
      };
    }

    const yPosition = index * 200 + 60;
    let xPosition = '20%';

    if (position === "right") xPosition = '80%';
    else if (position === "center") xPosition = '50%';

    return {
      left: xPosition,
      top: \`\${yPosition}px\`,
    };
  };

  const getSVGPath = () => {
    if (isMobile) {
      // Straight line for mobile
      return \`M 50% 30 L 50% \${steps.length * 180 + 30}\`;
    }
    // Curved path for desktop
    return "M 20% 60 Q 50% 160 80% 110 T 20% 260 Q 50% 360 80% 310 T 20% 460 Q 50% 560 80% 510 T 20% 660";
  };

  const timelineHeight = isMobile ? steps.length * 180 + 100 : steps.length * 200 + 100;

  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-indigo-50 via-purple-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Journey to Success
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Follow the path that leads to extraordinary results through our proven methodology
          </p>
        </div>

        <div 
          ref={timelineRef} 
          className="relative mx-auto"
          style={{ height: \`\${timelineHeight}px\`, maxWidth: isMobile ? '100%' : '1000px' }}
        >
          {/* SVG Path */}
          <svg
            className="absolute inset-0 w-full h-full overflow-visible"
            viewBox={\`0 0 100 \${timelineHeight}\`}
            preserveAspectRatio="none"
          >
            {/* Background path */}
            <path
              d={getSVGPath()}
              stroke="#e5e7eb"
              strokeWidth={isMobile ? "2" : "3"}
              fill="none"
              strokeDasharray={isMobile ? "8,4" : "12,6"}
              vectorEffect="non-scaling-stroke"
            />
            {/* Animated progress path */}
            <path
              d={getSVGPath()}
              stroke="url(#gradient)"
              strokeWidth={isMobile ? "2" : "3"}
              fill="none"
              strokeDasharray={\`\${scrollProgress * 100}, 100\`}
              className="transition-all duration-700 ease-out"
              vectorEffect="non-scaling-stroke"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="30%" stopColor="#3b82f6" />
                <stop offset="70%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>

          {steps.map((step, index) => {
            const position = getStepPosition(index, step.position);
            const isVisible = visibleSteps.has(index);
            const isLeft = !isMobile && step.position === "left";
            const isRight = !isMobile && step.position === "right";

            return (
              <div
                key={step.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={position}
              >
                {/* Connection dot */}
                <div
                  className={\`w-4 h-4 md:w-6 md:h-6 rounded-full bg-white shadow-lg border-2 flex items-center justify-center mb-4 transition-all duration-500 absolute left-1/2 transform -translate-x-1/2 \${
                    isVisible
                      ? "scale-100 border-indigo-500 bg-indigo-500"
                      : "scale-0 border-gray-300"
                  }\`}
                  style={{ 
                    top: isMobile ? '44px' : '50px',
                    zIndex: 10
                  }}
                >
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white"></div>
                </div>

                {/* Icon circle */}
                <div
                  className={\`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-xl border-4 flex items-center justify-center mb-4 md:mb-6 transition-all duration-700 relative z-20 \${
                    isVisible
                      ? "scale-100 border-indigo-500 shadow-indigo-200"
                      : "scale-75 border-gray-200"
                  }\`}
                  style={{
                    transitionDelay: \`\${index * 100}ms\`,
                  }}
                >
                  <span className="text-xl md:text-2xl">{step.icon}</span>
                </div>

                {/* Content card */}
                <div
                  className={\`bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100/50 transition-all duration-700 relative z-10 \${
                    isMobile 
                      ? 'w-72 max-w-[calc(100vw-2rem)]' 
                      : isLeft 
                        ? 'w-72 translate-x-16' 
                        : isRight 
                          ? 'w-72 -translate-x-16' 
                          : 'w-80'
                  } \${
                    isVisible
                      ? "opacity-100 translate-y-0 shadow-xl"
                      : "opacity-0 translate-y-8"
                  }\`}
                  style={{ 
                    transitionDelay: \`\${index * 150 + 200}ms\`,
                  }}
                >
                  {/* Arrow for desktop */}
                  {!isMobile && (
                    <div
                      className={\`absolute w-4 h-4 bg-white border-l border-t border-gray-100/50 transform rotate-45 \${
                        isLeft 
                          ? '-left-2 top-1/2 -translate-y-1/2' 
                          : isRight 
                            ? '-right-2 top-1/2 -translate-y-1/2' 
                            : 'left-1/2 -translate-x-1/2 -top-2'
                      }\`}
                    />
                  )}
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                    <span>Step {step.id} of {steps.length}</span>
                    <div className="flex space-x-1">
                      {steps.map((_, i) => (
                        <div
                          key={i}
                          className={\`w-2 h-2 rounded-full transition-colors duration-300 \${
                            i <= index ? 'bg-indigo-400' : 'bg-gray-200'
                          }\`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CurvedPathTimeline;`,
    },
  },
};
