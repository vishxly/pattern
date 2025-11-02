"use client";
import React, { useState, useEffect, useRef } from "react";

const CardStackTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(new Set<number>());
  const timelineRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: 1,
      title: "Discovery Workshop",
      desc: "Collaborative sessions to understand your vision and requirements.",
      tag: "Week 1",
      color: "from-emerald-400 to-teal-500",
    },
    {
      id: 2,
      title: "Strategy & Design",
      desc: "Create detailed plans and beautiful designs that align with your goals.",
      tag: "Week 2–3",
      color: "from-blue-200 to-indigo-300",
    },
    {
      id: 3,
      title: "Development Sprint",
      desc: "Agile development process with regular updates and feedback cycles.",
      tag: "Week 4–8",
      color: "from-purple-200 to-pink-300",
    },
    {
      id: 4,
      title: "Launch & Support",
      desc: "Smooth deployment with ongoing maintenance and feature updates.",
      tag: "Week 9+",
      color: "from-orange-200 to-red-300",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const trigger = viewportHeight * 0.5;

      let progress = 0;
      if (rect.top < trigger) {
        progress = Math.min(
          1,
          Math.max(0, (trigger - rect.top) / (rect.height + viewportHeight * 0.5))
        );
      }

      setScrollProgress(progress);

      const newVisible = new Set<number>();
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

  return (
    <div className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Project Timeline
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            A clear roadmap from start to finish
          </p>

          {/* Progress bar */}
          <div className="mt-8 w-full max-w-md mx-auto">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Start</span>
              <span>{Math.round(scrollProgress * 100)}%</span>
              <span>Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-emerald-200 to-blue-300 h-full transition-all duration-500 ease-in-out"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div ref={timelineRef} className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`transition-all duration-700 ease-out transform ${
                visibleSteps.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 180}ms` }}
            >
              <div className="relative group">
                {/* Vertical line connecting steps */}
                {index > 0 && (
                  <div className="absolute -top-10 left-9 w-px h-10 bg-gray-300" />
                )}

                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start sm:items-center gap-5 sm:gap-8 flex-col sm:flex-row">
                    {/* Gradient Circle */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-inner`}
                    >
                      <span className="text-white font-bold text-xl">{step.id}</span>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <h3 className="text-2xl font-semibold text-gray-900">
                          {step.title}
                        </h3>
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                          {step.tag}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional ending call-to-action */}
        <div className="pt-24 text-center text-gray-500 text-sm">
          🚀 Ready to bring your vision to life?
        </div>
      </div>
    </div>
  );
};

export default CardStackTimeline;
