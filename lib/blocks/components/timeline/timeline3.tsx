"use client";
import React, { useState, useEffect, useRef } from "react";

const MinimalCenterTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const stepsWrapperRef = useRef<HTMLDivElement | null>(null);
  const [lineHeight, setLineHeight] = useState<number | null>(null);

  const steps = [
    { id: 1, title: "Research & Planning", desc: "Understand user needs and market requirements" },
    { id: 2, title: "Architecture Design", desc: "Plan the technical foundation and system design" },
    { id: 3, title: "Implementation", desc: "Write clean, maintainable code with best practices" },
    { id: 4, title: "Testing & QA", desc: "Ensure quality through comprehensive testing" },
    { id: 5, title: "Deployment", desc: "Launch your application to the world" }
  ];

  useEffect(() => {
    const updateLineHeight = () => {
      if (stepsWrapperRef.current) {
        setLineHeight(stepsWrapperRef.current.offsetHeight);
      }
    };
    updateLineHeight();
    window.addEventListener("resize", updateLineHeight);
    return () => window.removeEventListener("resize", updateLineHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const trigger = viewportHeight * 0.6;

      let progress = 0;
      if (rect.top < trigger) {
        progress = Math.min(1, Math.max(0, (trigger - rect.top) / rect.height));
      }

      setScrollProgress(progress);

      const newVisible = new Set();
      steps.forEach((_, index) => {
        if (progress >= (index + 0.3) / steps.length) {
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
    <div className="pt-28 pb-36 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-sm font-medium text-gray-600">Our Process</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">From Concept to Reality</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A systematic approach to building exceptional products
          </p>
        </div>

        <div ref={timelineRef} className="relative z-0">
          {/* Dynamic vertical line with controlled height */}
          {lineHeight && (
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gray-200 z-0"
              style={{
                height: lineHeight,
                top: 0
              }}
            >
              <div
                className="w-full bg-black transition-all duration-1000 ease-out"
                style={{ height: `${scrollProgress * 100}%` }}
              />
            </div>
          )}

          <div ref={stepsWrapperRef} className="space-y-28 relative z-10">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isLeft ? "pr-6 md:pr-12 text-right" : "pl-6 md:pl-12 text-left"
                    }`}
                  >
                    <div
                      className={`transition-all duration-700 ${
                        visibleSteps.has(index)
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${index * 120}ms` }}
                    >
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Number Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center z-20">
                    <span
                      className={`font-bold transition-colors duration-300 ${
                        visibleSteps.has(index) ? "text-white" : "text-gray-400"
                      }`}
                      style={{
                        backgroundColor: visibleSteps.has(index) ? "#000" : "#fff",
                        borderRadius: "9999px",
                        padding: "0.5rem 0.8rem",
                        border: visibleSteps.has(index) ? "2px solid #000" : "2px solid #e5e7eb"
                      }}
                    >
                      {step.id}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Extra scroll space */}
          <div className="h-[60vh] sm:h-[80vh] flex items-center justify-center text-gray-400 text-sm">
            <p>🚀 Ready to transform your idea into reality?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalCenterTimeline;
