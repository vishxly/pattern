import { ComponentGroup } from "@/lib/docs/types";
import PulseBorderDemo from "../components/pulse-border";

export const pulseBorderRegistry: ComponentGroup = {
  name: "pulseBorderRegistry",
  title: "Pulse Border",
  description: "A customizable animated border that adds a pulsing effect to any element, enhancing user focus and interaction.",
  category: "components",
  components: ["PulseBorderDemo"],
  installation: {
    cliCommand: "npx shadcn@latest add pulse-border",
    dependencies: [],
    componentPath: "components/ui/pulse-border.tsx",
    utilsCode: ""
  },
  props: [
    {
      name: "children",
      type: "React.ReactNode",
      description: "The content to be wrapped by the pulsing border.",
      required: true
    },
    {
      name: "color",
      type: "string",
      description: "The hex color of the pulsing effect. Defaults to '#3b82f6'.",
      required: false
    },
    {
      name: "intensity",
      type: "number",
      description: "The overall intensity and size of the animation. Defaults to 1.",
      required: false
    },
    {
      name: "speed",
      type: "number",
      description: "The speed of the animation. Higher is faster. Defaults to 1.",
      required: false
    },
    {
      name: "width",
      type: "number",
      description: "The base width of the border in pixels. Defaults to 2.",
      required: false
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes for the container. Used to infer border-radius from Tailwind classes.",
      required: false
    },
    {
      name: "style",
      type: "React.CSSProperties",
      description: "Custom inline styles for the container element.",
      required: false
    },
    {
      name: "variant",
      type: "'smooth' | 'electric' | 'wave' | 'neon' | 'plasma' | 'orbit' | 'ripple' | 'gradient'",
      description: "The style of the pulse animation. Defaults to 'smooth'.",
      required: false
    },
    {
      name: "trigger",
      type: "'hover' | 'focus' | 'always' | 'click'",
      description: "Determines when the animation is active. Defaults to 'always'.",
      required: false
    },
    {
      name: "borderRadius",
      type: "string",
      description: "Explicitly set the border radius (e.g., '1rem'). Overrides any radius from Tailwind classes.",
      required: false
    },
    {
      name: "disabled",
      type: "boolean",
      description: "If true, disables the pulse effect entirely. Defaults to false.",
      required: false
    },
    {
      name: "glowIntensity",
      type: "number",
      description: "A multiplier for the glow effect, making the shadow more or less prominent. Defaults to 1.",
      required: false
    },
    {
      name: "animationDirection",
      type: "'normal' | 'reverse' | 'alternate'",
      description: "Sets the direction of the animation. Defaults to 'normal'.",
      required: false
    },
    {
      name: "pulseCount",
      type: "number",
      description: "Number of times the animation should repeat. Use `Infinity` for continuous looping. Defaults to Infinity.",
      required: false
    },
    {
      name: "gradientColors",
      type: "string[]",
      description: "An array of hex color strings used by the 'plasma' and 'gradient' variants.",
      required: false
    },
    {
      name: "shadowLayers",
      type: "number",
      description: "The number of box-shadow layers generated for the effect. More layers can create a softer glow. Defaults to 3.",
      required: false
    }
  ],
  variants: {
    basic: {
      title: "Interactive Pulse Border",
      description: "A versatile component that adds an animated pulsing border to any element, with various styles and triggers.",
      component: PulseBorderDemo,
      image: "/images/components/pulse-border-basic.png",
      fallbackImage: "/placeholder.svg?height=300&width=400&text=Pulse+Border",
      code: `
"use client";
import React from "react";
import { Star, Users, TrendingUp } from "lucide-react";
import PulseBorder from "../ui/pulse-border";

export default function PulseBorderDemo() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-md w-full">
        <PulseBorder
          color="#fc6a30"
          variant="ripple"
          className="rounded-2xl"
          intensity={2}
          speed={1}
          width={2}
        >
          <div className="rounded-2xl p-8 text-center backdrop-blur-sm border">
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
              <Star className="w-8 h-8 text-black dark:text-white" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
              Premium Plan
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-slate-400 mb-6 leading-relaxed">
              Unlock advanced features with our premium subscription. Get unlimited access to all tools and priority support.
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700 dark:text-slate-300 flex items-center">
                  <Users className="w-4 h-4 mr-2 text-black dark:text-blue-400" />
                  Team Members
                </span>
                <span className="text-black dark:text-white font-medium">
                  Unlimited
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700 dark:text-slate-300 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2 text-black dark:text-green-400" />
                  Analytics
                </span>
                <span className="text-black dark:text-white font-medium">
                  Advanced
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700 dark:text-slate-300 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-black dark:text-yellow-400" />
                  Support
                </span>
                <span className="text-black dark:text-white font-medium">
                  24/7 Priority
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-black dark:text-white">
                  $29
                </span>
                <span className="text-gray-600 dark:text-slate-400 ml-2">
                  /month
                </span>
              </div>
              <p className="text-gray-500 dark:text-slate-500 text-sm mt-1">
                Billed monthly
              </p>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started
            </button>

            {/* Bottom note */}
            <p className="text-gray-500 dark:text-slate-500 text-xs mt-4">
              Cancel anytime • No hidden fees
            </p>
          </div>
        </PulseBorder>
      </div>
    </div>
  );
}
`,
      manualCode: `
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
    \`pulse-\${Math.random().toString(36).substr(2, 9)}\`
  );

  const extractedBorderRadius = useMemo(() => {
    if (borderRadius) return borderRadius;

    const roundedClasses = {
      "rounded-none": "0", "rounded-sm": "0.125rem", rounded: "0.25rem",
      "rounded-md": "0.375rem", "rounded-lg": "0.5rem", "rounded-xl": "0.75rem",
      "rounded-2xl": "1rem", "rounded-3xl": "1.5rem", "rounded-full": "9999px",
    };

    for (const [tailwindClass, radius] of Object.entries(roundedClasses)) {
      if (className.includes(tailwindClass)) return radius;
    }
    return "inherit";
  }, [borderRadius, className]);

  const colorSystem = useMemo(() => {
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16)
      } : { r: 59, g: 130, b: 246 };
    };
    
    const createGradientColors = () => {
      if (gradientColors.length > 0) return gradientColors.map(c => hexToRgb(c));
      const base = hexToRgb(color);
      return [
        base,
        { r: Math.min(255, base.r + 30), g: Math.min(255, base.g + 30), b: Math.min(255, base.b + 30) },
        { r: Math.max(0, base.r - 30), g: Math.max(0, base.g - 30), b: Math.max(0, base.b - 30) },
      ];
    };

    const rgb = hexToRgb(color);
    const baseColor = \`\${rgb.r}, \${rgb.g}, \${rgb.b}\`;
    const gradients = createGradientColors();
    return { baseColor, gradients };
  }, [color, gradientColors]);

  const getAnimationKeyframes = useCallback(() => {
    const { baseColor, gradients } = colorSystem;
    const glow = glowIntensity * intensity;
    const shadowLayerArray = Array.from({ length: shadowLayers }, (_, i) => i + 1);

    const createShadows = (multiplier: number, opacity: number) =>
      shadowLayerArray.map(i => \`0 0 \${width * multiplier * i}px rgba(\${baseColor}, \${opacity / i})\`).join(", ");

    const keyframes = {
      smooth: \`@keyframes pulseSmooth-\${animationId.current} {
        0%, 100% { box-shadow: \${createShadows(2, 0.6*glow)}, inset 0 0 \${width}px rgba(\${baseColor}, \${0.2*glow}); transform: scale(1); }
        50% { box-shadow: \${createShadows(4, 0.8*glow)}, inset 0 0 \${width*2}px rgba(\${baseColor}, \${0.3*glow}); transform: scale(1.02); }
      }\`,
      electric: \`@keyframes pulseElectric-\${animationId.current} {
        0%, 100% { box-shadow: \${createShadows(3, 0.8*glow)}; filter: hue-rotate(0deg) brightness(1) saturate(1.2); }
        50% { box-shadow: \${createShadows(5, 1*glow)}; filter: hue-rotate(10deg) brightness(1.3) saturate(1.5); }
      }\`,
      wave: \`@keyframes pulseWave-\${animationId.current} {
        0%, 100% { box-shadow: 0 0 0 \${width}px rgba(\${baseColor}, \${0.8*glow}), 0 0 0 \${width*2}px rgba(\${baseColor}, \${0.4*glow}); }
        50% { box-shadow: 0 0 0 \${width*2}px rgba(\${baseColor}, \${0.6*glow}), 0 0 0 \${width*4}px rgba(\${baseColor}, \${0.2*glow}); transform: scale(1.05); }
      }\`,
      neon: \`@keyframes pulseNeon-\${animationId.current} {
        0%, 100% { box-shadow: 0 0 \${width}px \${color}, 0 0 \${width*3}px \${color}, 0 0 \${width*6}px \${color}; filter: brightness(1) saturate(1.5); }
        50% { box-shadow: 0 0 \${width*2}px \${color}, 0 0 \${width*5}px \${color}, 0 0 \${width*10}px \${color}; filter: brightness(1.5) saturate(2); }
      }\`,
      plasma: \`@keyframes pulsePlasma-\${animationId.current} {
        0%, 100% { box-shadow: \${createShadows(3, 0.7*glow)}; filter: hue-rotate(0deg); background: linear-gradient(45deg, rgba(\${gradients[0].r}, \${gradients[0].g}, \${gradients[0].b}, 0.1), rgba(\${gradients[1].r}, \${gradients[1].g}, \${gradients[1].b}, 0.1)); }
        50% { box-shadow: \${createShadows(5, 0.9*glow)}; filter: hue-rotate(180deg); background: linear-gradient(225deg, rgba(\${gradients[1].r}, \${gradients[1].g}, \${gradients[1].b}, 0.15), rgba(\${gradients[0].r}, \${gradients[0].g}, \${gradients[0].b}, 0.15)); }
      }\`,
      orbit: \`@keyframes pulseOrbit-\${animationId.current} {
        0% { box-shadow: \${width*2}px 0 \${width*2}px rgba(\${baseColor}, \${0.8*glow}), -\${width*2}px 0 \${width*2}px rgba(\${baseColor}, \${0.6*glow}); transform: rotate(0deg); }
        100% { box-shadow: \${width*2}px 0 \${width*2}px rgba(\${baseColor}, \${0.8*glow}), -\${width*2}px 0 \${width*2}px rgba(\${baseColor}, \${0.6*glow}); transform: rotate(360deg); }
      }\`,
      ripple: \`@keyframes pulseRipple-\${animationId.current} {
        0% { box-shadow: 0 0 0 0 rgba(\${baseColor}, \${0.7*glow}); }
        100% { box-shadow: 0 0 0 \${width*10}px rgba(\${baseColor}, 0); }
      }\`,
      gradient: \`@keyframes pulseGradient-\${animationId.current} {
        0%, 100% { background: conic-gradient(from 0deg, rgba(\${gradients[0].r}, \${gradients[0].g}, \${gradients[0].b}, 0.3), rgba(\${gradients[1].r}, \${gradients[1].g}, \${gradients[1].b}, 0.3)); box-shadow: \${createShadows(3, 0.6*glow)}; }
        50% { background: conic-gradient(from 180deg, rgba(\${gradients[1].r}, \${gradients[1].g}, \${gradients[1].b}, 0.4), rgba(\${gradients[0].r}, \${gradients[0].g}, \${gradients[0].b}, 0.4)); box-shadow: \${createShadows(5, 0.8*glow)}; }
      }\`
    };
    return keyframes[variant] || keyframes.smooth;
  }, [variant, colorSystem, width, intensity, glowIntensity, shadowLayers, color, animationId.current]);
  
  useEffect(() => {
    const shouldBeActive = 
      (trigger === 'always' && !disabled) ||
      (trigger === 'hover' && isHovered && !disabled) ||
      (trigger === 'focus' && isFocused && !disabled) ||
      (trigger === 'click' && clickCount > 0 && !disabled);
    setIsActive(shouldBeActive);
  }, [trigger, isHovered, isFocused, clickCount, disabled]);

  const handleClick = () => {
    if (trigger === 'click' && !disabled) {
      setClickCount(prev => prev + 1);
      setTimeout(() => setClickCount(0), 3000 / speed);
    }
  };
  
  const animationName = \`pulse\${variant.charAt(0).toUpperCase() + variant.slice(1)}-\${animationId.current}\`;

  const pulseStyle: CSSProperties = {
    position: 'absolute',
    inset: -width,
    borderRadius: extractedBorderRadius,
    border: \`\${width}px solid transparent\`,
    animation: isActive ? \`\${animationName} \${3/speed}s \${animationDirection} \${pulseCount === Infinity ? 'infinite' : pulseCount}\` : 'none',
    pointerEvents: 'none',
    opacity: disabled ? 0.3 : 1,
    zIndex: -1,
  };

  return (
    <>
      <style>{getAnimationKeyframes()}</style>
      <div
        ref={containerRef}
        className={className}
        style={{ position: 'relative', display: 'inline-block', ...style }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={handleClick}
        tabIndex={trigger === "focus" ? 0 : -1}
      >
        <div style={pulseStyle} />
        <div style={{ position: 'relative', zIndex: 1, borderRadius: extractedBorderRadius }}>
          {children}
        </div>
      </div>
    </>
  );
};

export default PulseBorder;
`
    }
  }
};
