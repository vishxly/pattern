"use client";
import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";

interface PulseBorderProps {
  children: ReactNode;
  color?: string;
  intensity?: number;
  speed?: number;
  width?: number;
  className?: string;
  style?: CSSProperties;
  variant?:
    | "smooth"
    | "electric"
    | "wave"
    | "neon"
    | "plasma"
    | "orbit"
    | "ripple"
    | "gradient";
  trigger?: "hover" | "focus" | "always" | "click";
  borderRadius?: string;
  disabled?: boolean;
  glowIntensity?: number;
  animationDirection?: "normal" | "reverse" | "alternate";
  pulseCount?: number;
  gradientColors?: string[];
  shadowLayers?: number;
}

const PulseBorder: React.FC<PulseBorderProps> = ({
  children,
  color = "#3b82f6",
  intensity = 1,
  speed = 1,
  width = 2,
  className = "",
  style = {},
  variant = "smooth",
  trigger = "always",
  borderRadius,
  disabled = false,
  glowIntensity = 1,
  animationDirection = "normal",
  pulseCount = Infinity,
  gradientColors = [],
  shadowLayers = 3,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(trigger === "always");
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const animationId = useRef<string>(
    `pulse-${Math.random().toString(36).substr(2, 9)}`
  );

  // Extract border radius from className or use prop
  const extractedBorderRadius = useMemo(() => {
    if (borderRadius) return borderRadius;

    // Check for Tailwind border radius classes
    const roundedClasses = {
      "rounded-none": "0",
      "rounded-sm": "0.125rem",
      rounded: "0.25rem",
      "rounded-md": "0.375rem",
      "rounded-lg": "0.5rem",
      "rounded-xl": "0.75rem",
      "rounded-2xl": "1rem",
      "rounded-3xl": "1.5rem",
      "rounded-full": "9999px",
    };

    for (const [tailwindClass, radius] of Object.entries(roundedClasses)) {
      if (className.includes(tailwindClass)) {
        return radius;
      }
    }

    return "inherit";
  }, [borderRadius, className]);

  // Memoized color calculations
  const colorSystem = useMemo(() => {
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 59, g: 130, b: 246 };
    };

    const createGradientColors = () => {
      if (gradientColors.length > 0) {
        return gradientColors.map((c) => hexToRgb(c));
      }
      const base = hexToRgb(color);
      return [
        base,
        {
          r: Math.min(255, base.r + 30),
          g: Math.min(255, base.g + 30),
          b: Math.min(255, base.b + 30),
        },
        {
          r: Math.max(0, base.r - 30),
          g: Math.max(0, base.g - 30),
          b: Math.max(0, base.b - 30),
        },
      ];
    };

    const rgb = hexToRgb(color);
    const baseColor = `${rgb.r}, ${rgb.g}, ${rgb.b}`;
    const gradients = createGradientColors();

    return { rgb, baseColor, gradients };
  }, [color, gradientColors]);

  // Enhanced animation variants with more sophisticated effects
  const getAnimationKeyframes = useCallback(() => {
    const { baseColor, gradients } = colorSystem;
    const glowIntensityFactor = glowIntensity * intensity;
    const shadowLayerArray = Array.from(
      { length: shadowLayers },
      (_, i) => i + 1
    );

    const createShadowLayers = (multiplier: number, opacity: number) => {
      return shadowLayerArray
        .map(
          (i) =>
            `0 0 ${width * multiplier * i}px rgba(${baseColor}, ${opacity / i})`
        )
        .join(", ");
    };

    const variants = {
      smooth: `
        @keyframes pulseSmooth-${animationId.current} {
          0%, 100% { 
            box-shadow: 
              ${createShadowLayers(2, 0.6 * glowIntensityFactor)},
              inset 0 0 ${width}px rgba(${baseColor}, ${
        0.2 * glowIntensityFactor
      });
            transform: scale(1);
          }
          50% { 
            box-shadow: 
              ${createShadowLayers(4, 0.8 * glowIntensityFactor)},
              inset 0 0 ${width * 2}px rgba(${baseColor}, ${
        0.3 * glowIntensityFactor
      });
            transform: scale(1.02);
          }
        }
      `,

      electric: `
        @keyframes pulseElectric-${animationId.current} {
          0%, 100% { 
            box-shadow: 
              ${createShadowLayers(3, 0.8 * glowIntensityFactor)},
              inset 0 0 ${width}px rgba(${baseColor}, ${
        0.3 * glowIntensityFactor
      });
            filter: hue-rotate(0deg) brightness(1) saturate(1.2);
          }
          25% { 
            box-shadow: 
              ${createShadowLayers(6, 1 * glowIntensityFactor)},
              inset 0 0 ${width * 2}px rgba(${baseColor}, ${
        0.5 * glowIntensityFactor
      });
            filter: hue-rotate(10deg) brightness(1.3) saturate(1.5);
          }
          50% { 
            box-shadow: 
              ${createShadowLayers(4, 0.9 * glowIntensityFactor)},
              inset 0 0 ${width * 3}px rgba(${baseColor}, ${
        0.4 * glowIntensityFactor
      });
            filter: hue-rotate(-10deg) brightness(0.9) saturate(1.1);
          }
          75% { 
            box-shadow: 
              ${createShadowLayers(5, 1 * glowIntensityFactor)},
              inset 0 0 ${width * 1.5}px rgba(${baseColor}, ${
        0.6 * glowIntensityFactor
      });
            filter: hue-rotate(5deg) brightness(1.2) saturate(1.3);
          }
        }
      `,

      wave: `
        @keyframes pulseWave-${animationId.current} {
          0% { 
            box-shadow: 
              0 0 0 ${width}px rgba(${baseColor}, ${0.8 * glowIntensityFactor}),
              0 0 0 ${width * 2}px rgba(${baseColor}, ${
        0.4 * glowIntensityFactor
      }),
              0 0 0 ${width * 3}px rgba(${baseColor}, ${
        0.2 * glowIntensityFactor
      });
            transform: scale(1);
          }
          50% { 
            box-shadow: 
              0 0 0 ${width * 2}px rgba(${baseColor}, ${
        0.6 * glowIntensityFactor
      }),
              0 0 0 ${width * 4}px rgba(${baseColor}, ${
        0.3 * glowIntensityFactor
      }),
              0 0 0 ${width * 6}px rgba(${baseColor}, ${
        0.1 * glowIntensityFactor
      });
            transform: scale(1.05);
          }
          100% { 
            box-shadow: 
              0 0 0 ${width}px rgba(${baseColor}, ${0.8 * glowIntensityFactor}),
              0 0 0 ${width * 2}px rgba(${baseColor}, ${
        0.4 * glowIntensityFactor
      }),
              0 0 0 ${width * 3}px rgba(${baseColor}, ${
        0.2 * glowIntensityFactor
      });
            transform: scale(1);
          }
        }
      `,

      neon: `
        @keyframes pulseNeon-${animationId.current} {
          0%, 100% { 
            box-shadow: 
              0 0 ${width}px ${color},
              0 0 ${width * 3}px ${color},
              0 0 ${width * 6}px ${color},
              0 0 ${width * 9}px ${color},
              inset 0 0 ${width}px rgba(${baseColor}, 0.1);
            filter: brightness(1) saturate(1.5);
          }
          50% { 
            box-shadow: 
              0 0 ${width * 2}px ${color},
              0 0 ${width * 5}px ${color},
              0 0 ${width * 10}px ${color},
              0 0 ${width * 15}px ${color},
              inset 0 0 ${width * 2}px rgba(${baseColor}, 0.2);
            filter: brightness(1.5) saturate(2);
          }
        }
      `,

      plasma: `
        @keyframes pulsePlasma-${animationId.current} {
          0% { 
            box-shadow: 
              ${createShadowLayers(3, 0.7 * glowIntensityFactor)};
            filter: hue-rotate(0deg) brightness(1.2) saturate(1.5);
            background: linear-gradient(45deg, 
              rgba(${gradients[0].r}, ${gradients[0].g}, ${
        gradients[0].b
      }, 0.1),
              rgba(${gradients[1].r}, ${gradients[1].g}, ${
        gradients[1].b
      }, 0.1),
              rgba(${gradients[2].r}, ${gradients[2].g}, ${gradients[2].b}, 0.1)
            );
          }
          33% { 
            box-shadow: 
              ${createShadowLayers(5, 0.9 * glowIntensityFactor)};
            filter: hue-rotate(120deg) brightness(1.4) saturate(2);
            background: linear-gradient(135deg, 
              rgba(${gradients[1].r}, ${gradients[1].g}, ${
        gradients[1].b
      }, 0.15),
              rgba(${gradients[2].r}, ${gradients[2].g}, ${
        gradients[2].b
      }, 0.15),
              rgba(${gradients[0].r}, ${gradients[0].g}, ${
        gradients[0].b
      }, 0.15)
            );
          }
          66% { 
            box-shadow: 
              ${createShadowLayers(4, 0.8 * glowIntensityFactor)};
            filter: hue-rotate(240deg) brightness(1.1) saturate(1.8);
            background: linear-gradient(225deg, 
              rgba(${gradients[2].r}, ${gradients[2].g}, ${
        gradients[2].b
      }, 0.1),
              rgba(${gradients[0].r}, ${gradients[0].g}, ${
        gradients[0].b
      }, 0.1),
              rgba(${gradients[1].r}, ${gradients[1].g}, ${gradients[1].b}, 0.1)
            );
          }
          100% { 
            box-shadow: 
              ${createShadowLayers(3, 0.7 * glowIntensityFactor)};
            filter: hue-rotate(360deg) brightness(1.2) saturate(1.5);
            background: linear-gradient(315deg, 
              rgba(${gradients[0].r}, ${gradients[0].g}, ${
        gradients[0].b
      }, 0.1),
              rgba(${gradients[1].r}, ${gradients[1].g}, ${
        gradients[1].b
      }, 0.1),
              rgba(${gradients[2].r}, ${gradients[2].g}, ${gradients[2].b}, 0.1)
            );
          }
        }
      `,

      orbit: `
        @keyframes pulseOrbit-${animationId.current} {
          0% { 
            box-shadow: 
              ${width * 2}px 0 ${width * 2}px rgba(${baseColor}, ${
        0.8 * glowIntensityFactor
      }),
              -${width * 2}px 0 ${width * 2}px rgba(${baseColor}, ${
        0.6 * glowIntensityFactor
      }),
              0 ${width * 2}px ${width * 2}px rgba(${baseColor}, ${
        0.4 * glowIntensityFactor
      }),
              0 -${width * 2}px ${width * 2}px rgba(${baseColor}, ${
        0.4 * glowIntensityFactor
      });
            transform: rotate(0deg);
          }
          100% { 
            box-shadow: 
              ${width * 2}px 0 ${width * 2}px rgba(${baseColor}, ${
        0.8 * glowIntensityFactor
      }),
              -${width * 2}px 0 ${width * 2}px rgba(${baseColor}, ${
        0.6 * glowIntensityFactor
      }),
              0 ${width * 2}px ${width * 2}px rgba(${baseColor}, ${
        0.4 * glowIntensityFactor
      }),
              0 -${width * 2}px ${width * 2}px rgba(${baseColor}, ${
        0.4 * glowIntensityFactor
      });
            transform: rotate(360deg);
          }
        }
      `,

      ripple: `
        @keyframes pulseRipple-${animationId.current} {
          0% { 
            box-shadow: 
              0 0 0 0 rgba(${baseColor}, ${0.7 * glowIntensityFactor}),
              0 0 0 ${width * 2}px rgba(${baseColor}, ${
        0.5 * glowIntensityFactor
      }),
              0 0 0 ${width * 4}px rgba(${baseColor}, ${
        0.3 * glowIntensityFactor
      });
          }
          50% { 
            box-shadow: 
              0 0 0 ${width * 2}px rgba(${baseColor}, ${
        0.5 * glowIntensityFactor
      }),
              0 0 0 ${width * 6}px rgba(${baseColor}, ${
        0.3 * glowIntensityFactor
      }),
              0 0 0 ${width * 10}px rgba(${baseColor}, 0);
          }
          100% { 
            box-shadow: 
              0 0 0 ${width * 4}px rgba(${baseColor}, 0),
              0 0 0 ${width * 8}px rgba(${baseColor}, 0),
              0 0 0 ${width * 12}px rgba(${baseColor}, 0);
          }
        }
      `,

      gradient: `
        @keyframes pulseGradient-${animationId.current} {
          0%, 100% { 
            background: conic-gradient(from 0deg, 
              rgba(${gradients[0].r}, ${gradients[0].g}, ${
        gradients[0].b
      }, 0.3), 
              rgba(${gradients[1].r}, ${gradients[1].g}, ${
        gradients[1].b
      }, 0.3), 
              rgba(${gradients[2].r}, ${gradients[2].g}, ${
        gradients[2].b
      }, 0.3),
              rgba(${gradients[0].r}, ${gradients[0].g}, ${gradients[0].b}, 0.3)
            );
            box-shadow: ${createShadowLayers(3, 0.6 * glowIntensityFactor)};
          }
          50% { 
            background: conic-gradient(from 180deg, 
              rgba(${gradients[1].r}, ${gradients[1].g}, ${
        gradients[1].b
      }, 0.4), 
              rgba(${gradients[2].r}, ${gradients[2].g}, ${
        gradients[2].b
      }, 0.4), 
              rgba(${gradients[0].r}, ${gradients[0].g}, ${
        gradients[0].b
      }, 0.4),
              rgba(${gradients[1].r}, ${gradients[1].g}, ${gradients[1].b}, 0.4)
            );
            box-shadow: ${createShadowLayers(5, 0.8 * glowIntensityFactor)};
          }
        }
      `,
    };

    return variants[variant] || variants.smooth;
  }, [
    variant,
    colorSystem,
    width,
    intensity,
    glowIntensity,
    shadowLayers,
    animationId.current,
  ]);

  // Handle trigger events
  useEffect(() => {
    const shouldActivate = () => {
      switch (trigger) {
        case "always":
          return !disabled;
        case "hover":
          return isHovered && !disabled;
        case "focus":
          return isFocused && !disabled;
        case "click":
          return clickCount > 0 && !disabled;
        default:
          return false;
      }
    };

    setIsActive(shouldActivate());
  }, [trigger, isHovered, isFocused, clickCount, disabled]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleClick = () => {
    if (trigger === "click") {
      setClickCount((prev) => prev + 1);
      setTimeout(() => setClickCount(0), 3000 / speed);
    }
  };

  // Dynamic styles - The key fix is here
  const containerStyle: CSSProperties = {
    position: "relative",
    display: "inline-block",
    ...style,
  };

  const pulseStyle: CSSProperties = {
    position: "absolute",
    inset: -width, // Extend beyond the content by the border width
    borderRadius: extractedBorderRadius,
    border: `${width}px solid transparent`,
    animation: isActive
      ? `pulse${variant.charAt(0).toUpperCase() + variant.slice(1)}-${
          animationId.current
        } ${3 / speed}s ${animationDirection} ${
          pulseCount === Infinity ? "infinite" : pulseCount
        }`
      : "none",
    pointerEvents: "none",
    opacity: disabled ? 0.3 : 1,
    zIndex: -1,
  };

  const contentStyle: CSSProperties = {
    position: "relative",
    zIndex: 1,
    borderRadius: extractedBorderRadius,
  };

  return (
    <>
      <style>{getAnimationKeyframes()}</style>
      <div
        ref={containerRef}
        className={className}
        style={containerStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClick}
        tabIndex={trigger === "focus" ? 0 : -1}
      >
        {/* Pulse effect layer */}
        <div style={pulseStyle} />

        {/* Content */}
        <div style={contentStyle}>{children}</div>
      </div>
    </>
  );
};

export default PulseBorder;
