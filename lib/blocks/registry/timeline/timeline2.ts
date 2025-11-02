import { LandingComponentGroup } from "@/lib/blocks/landing-registry";

import FloatingCardsTimeline from "../../components/timeline/timeline2";

export const timeline2Registry: LandingComponentGroup = {
  title: "Floating Card Timeline",
  description: "Interactive timeline component for showcasing steps or events.",
  category: "Timeline",
  variants: {
    default: {
      title: "Floating Card Timeline",
      description:
        "Interactive timeline component for showcasing steps or events.",
      component: FloatingCardsTimeline,
      image: "/images/blocks/timeline/timeline2.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `"use client";
import React, { useEffect, useRef, useState } from "react";

const FloatingCardsTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const timelineRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: 1,
      title: "Initialize Project",
      desc: "Set up your development environment and project structure",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-sky-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Design Phase",
      desc: "Create wireframes and design mockups for your application",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-4.553a1.5 1.5 0 00-2.121-2.121L13 7.879m2 2L5 19l-2 2 2-2 14-14m-5 5L5 19"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Development",
      desc: "Build your application with modern frameworks and tools",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17v-6h13v6M9 12H5a2 2 0 00-2 2v6h6v-6z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Deploy & Launch",
      desc: "Ship your product to production and celebrate success",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
  ];

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
        if (progress >= (index + 0.2) / steps.length) {
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

  return (
    <div className="pt-32 pb-32 bg-gradient-to-b from-sky-50 via-white to-sky-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent mb-4">
            Development Process
          </h2>
          <p className="text-gray-700 text-lg">
            Follow our streamlined approach to success
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 w-[2.5px] h-full bg-sky-100 rounded-full overflow-hidden shadow-md">
            <div
              className="w-full bg-sky-400 shadow-[0_0_12px_2px_#38bdf8] transition-all duration-1000 ease-out"
              style={{ height: \`\${scrollProgress * 100}%\` }}
            />
          </div>

          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex items-center mb-16 last:mb-0"
            >
              {/* Floating Dot */}
              <div
                className="absolute left-6 w-5 h-5 bg-white rounded-full border-4 shadow-xl z-10 transform transition-all duration-500"
                style={{
                  transform: visibleSteps.has(index) ? "scale(1)" : "scale(0)",
                  borderColor: visibleSteps.has(index) ? "#38bdf8" : "#e5e7eb",
                }}
              />

              {/* Timeline Card */}
              <div className="ml-16">
                <div
                  className={\`bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transition-all duration-700 \${
                    visibleSteps.has(index)
                      ? "opacity-100 translate-x-0 translate-y-0"
                      : "opacity-0 translate-x-8 translate-y-4"
                  }\`}
                  style={{ transitionDelay: \`\${index * 150}ms\` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{step.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra scroll space or bottom message */}
        <div className="h-[60vh] sm:h-[80vh] flex items-center justify-center text-gray-400 text-sm">
          <p>🎉 You’ve reached the end! More coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default FloatingCardsTimeline;`,
    },
  },
};
