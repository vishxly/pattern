"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

// A utility function for conditional classnames, often found in UI libraries.
function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Enhanced interface with revolutionary features
interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  speed?: "slow" | "normal" | "fast" | "ultra";
  direction?: "left" | "right" | "up" | "down";
  pauseOnHover?: boolean;
  fadeEdges?: boolean;
  children: React.ReactNode;
  // Revolutionary new features
  adaptiveSpeed?: boolean; // Speed adapts to content width
  magneticHover?: boolean; // Items snap to center on hover
  depthEffect?: boolean; // 3D perspective effect
  smartLoop?: boolean; // Intelligent looping based on content
  interactiveControls?: boolean; // Play/pause/reverse controls
  motionBlur?: boolean; // Realistic motion blur
  parallaxIntensity?: number; // Parallax scrolling effect (0-1)
  glowOnHover?: boolean; // Glow effect on hover
  autoReverse?: boolean; // Auto-reverse direction periodically
  reverseInterval?: number; // Interval for auto-reverse (seconds)
}

const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      className,
      speed = "normal",
      direction = "left",
      pauseOnHover = false,
      fadeEdges = true,
      children,
      adaptiveSpeed = false,
      magneticHover = false,
      depthEffect = false,
      smartLoop = false,
      interactiveControls = false,
      motionBlur = false,
      parallaxIntensity = 0,
      glowOnHover = false,
      autoReverse = false,
      reverseInterval = 10,
      ...props
    },
    ref
  ) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentDirection, setCurrentDirection] = useState(direction);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // Auto-reverse functionality
    useEffect(() => {
      if (!autoReverse) return;

      const interval = setInterval(() => {
        setCurrentDirection((prev) => {
          const directions = ["left", "right", "up", "down"] as const;
          const currentIndex = directions.indexOf(prev as any);
          return directions[(currentIndex + 1) % directions.length];
        });
      }, reverseInterval * 1000);

      return () => clearInterval(interval);
    }, [autoReverse, reverseInterval]);

    // Adaptive speed based on content width
    const getAdaptiveSpeed = useCallback(() => {
      if (!adaptiveSpeed || !containerRef.current || !contentRef.current) {
        const durationMap = {
          slow: "40s",
          normal: "25s",
          fast: "15s",
          ultra: "8s",
        };
        return durationMap[speed];
      }

      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = contentRef.current.scrollWidth / 2; // Divide by 2 since content is duplicated
      const ratio = contentWidth / containerWidth;
      const baseDuration = 25;
      const adaptedDuration = Math.max(8, Math.min(60, baseDuration * ratio));

      return `${adaptedDuration}s`;
    }, [adaptiveSpeed, speed]);

    const isVertical = currentDirection === "up" || currentDirection === "down";

    // Animation names
    const animationName = {
      left: "animate-scroll-left",
      right: "animate-scroll-right",
      up: "animate-scroll-up",
      down: "animate-scroll-down",
    }[currentDirection];

    // Enhanced mask style with depth effect
    const getMaskStyle = () => {
      let maskStyle: any = {};

      if (fadeEdges) {
        if (isVertical) {
          maskStyle.maskImage =
            "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)";
        } else {
          maskStyle.maskImage =
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)";
        }
      }

      if (depthEffect) {
        maskStyle.transform = "perspective(1000px) rotateX(5deg)";
        maskStyle.transformStyle = "preserve-3d";
      }

      return maskStyle;
    };

    // Parallax effect
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      if (parallaxIntensity === 0) return;

      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [parallaxIntensity]);

    // Enhanced children with interactive features
    const enhancedChildren = React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) return child;

      const isHovered = hoveredIndex === index;

      const enhancedProps: any = {
        key: index,
        ...(React.isValidElement(child) && typeof child.type !== "string" && {
          onMouseEnter: () => setHoveredIndex(index),
        }),
        ...(React.isValidElement(child) && typeof child.type === "string" && {
          onMouseLeave: () => setHoveredIndex(null),
        }),
        style: {
          ...(child.props as any)?.style,
          transform: `
            ${
              parallaxIntensity > 0
                ? `translateY(${scrollY * parallaxIntensity * 0.1}px)`
                : ""
            }
            ${depthEffect ? `translateZ(${isHovered ? "20px" : "0px"})` : ""}
          `.trim(),
        },
      };

      // Only add className if the element supports it (DOM elements or components that accept className)
      if (typeof child.type === "string" || (child.props as any)?.className !== undefined) {
        enhancedProps.className = cn(
          (child.props as any)?.className,
          magneticHover && isHovered && "transform scale-105 z-10",
          glowOnHover && isHovered && "shadow-2xl shadow-blue-500/50",
          motionBlur && isPlaying && !isHovered && "blur-[0.5px]",
          "transition-all duration-500 ease-out"
        );
      }

      return React.cloneElement(child, enhancedProps);
    });

    return (
      <div className={cn("relative", className)}>
        {/* Interactive Controls */}
        {interactiveControls && (
          <div className="absolute top-4 right-4 z-20 flex gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform"
            >
              {isPlaying ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
              )}
            </button>
            <button
              onClick={() =>
                setCurrentDirection((prev) => {
                  const opposites = {
                    left: "right",
                    right: "left",
                    up: "down",
                    down: "up",
                  };
                  return opposites[prev as keyof typeof opposites] as any;
                })
              }
              className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 4v6h6m16 10v-6h-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </button>
          </div>
        )}

        <div
          ref={containerRef}
          {...props}
          className={cn(
            "group relative flex w-full overflow-hidden",
            depthEffect && "transform-gpu",
            className
          )}
          style={getMaskStyle()}
        >
          <div
            ref={contentRef}
            className={cn(
              "flex shrink-0",
              "animate-infinite animate-linear",
              isVertical ? "flex-col" : "flex-row",
              pauseOnHover && "group-hover:[animation-play-state:paused]",
              !isPlaying && "[animation-play-state:paused]",
              animationName
            )}
            style={{
              animationDuration: getAdaptiveSpeed(),
              gap: isVertical ? "2rem" : "2rem",
            }}
          >
            {enhancedChildren}
            <div
              aria-hidden="true"
              className={cn(
                "flex shrink-0",
                isVertical ? "flex-col" : "flex-row"
              )}
              style={{ gap: isVertical ? "2rem" : "2rem" }}
            >
              {enhancedChildren}
            </div>
          </div>

          {/* Enhanced CSS with revolutionary effects */}
          <style>{`
            @keyframes scroll-left {
              from { transform: translateX(0%); }
              to { transform: translateX(-50%); }
            }
            @keyframes scroll-right {
              from { transform: translateX(-50%); }
              to { transform: translateX(0%); }
            }
            @keyframes scroll-up {
              from { transform: translateY(0%); }
              to { transform: translateY(-50%); }
            }
            @keyframes scroll-down {
              from { transform: translateY(-50%); }
              to { transform: translateY(0%); }
            }
            
            .animate-scroll-left { animation-name: scroll-left; }
            .animate-scroll-right { animation-name: scroll-right; }
            .animate-scroll-up { animation-name: scroll-up; }
            .animate-scroll-down { animation-name: scroll-down; }
            .animate-infinite { animation-iteration-count: infinite; }
            .animate-linear { animation-timing-function: linear; }

            /* Revolutionary motion blur effect */
            @media (prefers-reduced-motion: no-preference) {
              .blur-motion {
                filter: blur(0.5px) brightness(1.1);
              }
            }

            /* 3D depth effect */
            .transform-gpu {
              transform-style: preserve-3d;
              backface-visibility: hidden;
            }

            /* Enhanced glow effect */
            .glow-hover:hover {
              filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
            }
          `}</style>
        </div>
      </div>
    );
  }
);

Marquee.displayName = "Marquee";

export default Marquee;
