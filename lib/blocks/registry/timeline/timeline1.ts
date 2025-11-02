import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import TimelineComponent from "../../components/timeline/timeline1";

export const timeline1Registry: LandingComponentGroup = {
  title: "Animated Timeline",
  description: "Interactive timeline component for showcasing steps or events.",
  category: "Timeline",
  variants: {
    default: {
      title: "Animated Timeline",
      description:
        "Interactive timeline component for showcasing steps or events.",
      component: TimelineComponent,
      image: "/images/blocks/timeline/timeline1.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `"use client";
import React, { useEffect, useRef, useState } from 'react';

interface TimelineStep {
  step: number;
  title: string;
  description: string;
}

const timelineSteps: TimelineStep[] = [
  {
    step: 1,
    title: "Log in & check the platform",
    description: "Create an account and explore resources inside the dashboard."
  },
  {
    step: 2,
    title: "Choose some of pre-made sections",
    description: "Select from a variety of available sections, to fit your needs."
  },
  {
    step: 3,
    title: "Fill the content",
    description: "Add required information & resources, to make your site unique & informative."
  },
  {
    step: 4,
    title: "Publish and share your site",
    description: "Make your site live with just one click, and share it with the world!"
  }
];

const TimelineComponent: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const timelineRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !containerRef.current) return;

      const container = containerRef.current;
      const timeline = timelineRef.current;
      const containerRect = container.getBoundingClientRect();
      const timelineRect = timeline.getBoundingClientRect();
      
      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.6; // Start when timeline is 60% into viewport
      
      // Calculate overall progress based on timeline position relative to trigger point
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      
      let progress = 0;
      
      if (timelineTop < triggerPoint) {
        const scrolledDistance = triggerPoint - timelineTop;
        const totalScrollDistance = timelineHeight + (viewportHeight * 0.4); // Extra scroll distance
        progress = Math.max(0, Math.min(1, scrolledDistance / totalScrollDistance));
      }

      setScrollProgress(progress);

      // Calculate which steps should be visible
      const newVisibleSteps = new Set<number>();
      const stepsCount = timelineSteps.length;
      
      // Each step becomes visible at specific progress thresholds
      for (let i = 0; i < stepsCount; i++) {
        const stepThreshold = (i + 0.3) / stepsCount; // Step appears 30% into its section
        if (progress >= stepThreshold) {
          newVisibleSteps.add(i + 1);
        }
      }
      
      setVisibleSteps(newVisibleSteps);
    };

    // Initial call
    handleScroll();
    
    // Add scroll listener with throttling for better performance
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

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const ShieldIcon = () => (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-base sm:text-xl text-black/40"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
      <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"></path>
      <path d="M12 17h.01"></path>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Add some content above to enable scrolling */}
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Our Platform</h1>
          <p className="text-xl text-gray-600 mb-8">Scroll down to see how it works</p>
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <div ref={containerRef} className="py-20">
        <section 
          id="process" 
          className="flex flex-col gap-y-11 sm:gap-y-13 lg:gap-y-18 items-center max-w-5xl w-full mx-auto p-4"
        >
          <div className="flex flex-col gap-y-5 sm:gap-y-6 items-center">
            <div className="flex border border-black/20 rounded-lg px-3 sm:px-3.5 py-2 gap-x-2 items-center">
              <ShieldIcon />
              <span className="text-xs sm:text-sm text-black/40">How it works</span>
            </div>
            <div className="flex flex-col gap-y-5 items-center">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-medium text-center max-w-3xl leading-[1.1]">
                Create personal site in just{' '}
                <span className="italic font-serif">a few steps</span>
              </h2>
              <p className="text-base sm:text-lg text-black/60 text-center max-w-xl">
                Simple and intuitive process of creating a personal site.
              </p>
            </div>
          </div>

          <ul ref={timelineRef} className="flex flex-col w-full max-w-3xl relative">
            {/* Continuous background line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-neutral-300 z-0">
              <div
                className="w-full bg-black transition-all duration-700 ease-out"
                style={{ 
                  height: \`\${scrollProgress * 100}%\`,
                  transformOrigin: 'top'
                }}
              />
            </div>
            
            {timelineSteps.map((item, index) => {
              const isVisible = visibleSteps.has(item.step);
              const isOdd = index % 2 === 0;
              
              // Calculate individual dot progress
              const stepProgress = Math.max(0, Math.min(1, (scrollProgress * timelineSteps.length) - index));

              return (
                <li
                  key={item.step}
                  className={\`flex \${
                    isOdd ? 'flex-row-reverse sm:flex-row' : 'sm:flex-row-reverse'
                  } relative z-10\`}
                  style={{
                    minHeight: '200px' // Ensure consistent spacing
                  }}
                >
                  {/* Content Card */}
                  <div className="flex-1">
                    <div className="flex flex-col gap-y-2.5 sm:gap-y-3 z-20 relative py-6">
                      <article
                        className={\`p-1.5 rounded-[28px] bg-[#EAEAEC] backdrop-blur-xl border-black/12 border h-full transition-all duration-700 ease-out \${
                          isVisible
                            ? 'opacity-100 scale-100 translate-y-0'
                            : 'opacity-0 scale-95 translate-y-8'
                        }\`}
                        style={{
                          transitionDelay: isVisible ? \`\${index * 100}ms\` : '0ms'
                        }}
                      >
                        <div className="px-7 py-6 bg-white/80 border border-black/20 rounded-[22px] h-full relative overflow-hidden flex flex-col gap-y-5">
                          <div className="py-2 px-3.5 w-max rounded-lg font-medium text-sm text-black/40 border border-black/20 font-serif">
                            Step {item.step}
                          </div>
                          <div className="flex flex-col gap-y-2">
                            <h3 className="text-xl sm:text-2xl font-medium leading-[1.2]">
                              {item.title}
                            </h3>
                            <p className="text-sm text-black/50">{item.description}</p>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="flex-none flex flex-col items-center px-6 relative z-20">
                    <div className="size-3 rounded-full bg-neutral-300 overflow-hidden relative">
                      <div
                        className="size-full bg-black transition-all duration-500 ease-out origin-center"
                        style={{ 
                          transform: stepProgress > 0 ? 'scale(1)' : 'scale(0)',
                          opacity: Math.min(1, stepProgress * 2)
                        }}
                      />
                    </div>
                  </div>

                  {/* Spacer for larger screens */}
                  <div className="flex-1 hidden sm:block" />
                </li>
              );
            })}
          </ul>
          
          {/* Progress indicator */}
          <div className="fixed bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-black/10">
            <div className="text-xs font-medium text-black/60">
              Progress: {Math.round(scrollProgress * 100)}%
            </div>
          </div>
        </section>
      </div>

      {/* Add content below to enable more scrolling */}
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">Join thousands of users creating amazing sites</p>
          <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Start Building
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;
`,
    },
  },
};
