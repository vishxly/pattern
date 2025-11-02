import { ComponentGroup } from "@/lib/docs/types";
import SpotlightDemo from "@/lib/docs/components/spotlight";
import ChronoScrollDemo from "../components/chrono-scroll";

export const chronoScrollRegistry: ComponentGroup = {
  name: "chronoScrollRegistry",
  title: "ChronoScroll",
  description:
    "A vertical timeline component to display chronological events.",
  category: "components",
  components: ["SpotlightDemo"],
  installation: {
    cliCommand: "npx shadcn@latest add spotlight",
    dependencies: ["clsx", "tailwind-merge", "lucide-react"],
    componentPath: "components/ui/spotlight.tsx",
    utilsCode: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
  },
  props: [
    {
      name: "Spotlight: children",
      type: "React.ReactNode",
      description:
        "The card components to be rendered within the spotlight area.",
      required: true,
    },
    {
      name: "Spotlight: className",
      type: "string",
      description: "Additional CSS classes for the spotlight container.",
      required: false,
    },
    {
      name: "Spotlight: intensity",
      type: '"low" | "medium" | "high"',
      description: "The intensity of the ambient spotlight effect.",
      required: false,
      default: '"medium"',
    },
    {
      name: "SpotlightCard: children",
      type: "React.ReactNode",
      description: "The content to be displayed inside the card.",
      required: true,
    },
    {
      name: "SpotlightCard: className",
      type: "string",
      description: "Additional CSS classes for the card.",
      required: false,
    },
    {
      name: "SpotlightCard: variant",
      type: '"primary" | "secondary" | "success" | "warning" | "danger" | "rainbow"',
      description: "The color variant of the spotlight glow.",
      required: false,
      default: '"primary"',
    },
    {
      name: "SpotlightCard: intensity",
      type: '"subtle" | "normal" | "intense"',
      description: "The intensity of the card's glow effect on hover.",
      required: false,
      default: '"normal"',
    },
    {
      name: "SpotlightCard: borderRadius",
      type: '"sm" | "md" | "lg" | "xl"',
      description: "The border radius of the card.",
      required: false,
      default: '"lg"',
    },
    {
      name: "SpotlightCard: glowSize",
      type: '"sm" | "md" | "lg"',
      description: "The size of the spotlight glow on the card.",
      required: false,
      default: '"md"',
    },
  ],
  variants: {
    basic: {
      title: "Interactive Spotlight Grid",
      description: "Move your mouse over the grid to see the spotlight effect.",
      component: ChronoScrollDemo,
      image: "/images/components/spotlight-grid.png",
      fallbackImage:
        "/placeholder.svg?height=400&width=600&text=Spotlight+Grid",
      code: `
"use client";
import { Spotlight, SpotlightCard } from "@/lib/docs/ui/spotlight";
import { Sparkles } from "lucide-react";

export default function SpotlightDemo() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 transition-colors duration-500 p-1 sm:p-6">
      <div className="min-h-screen flex items-center justify-center">
        <Spotlight className="w-full px-2 sm:px-8" intensity="high">
          <SpotlightCard
            variant="rainbow"
            intensity="intense"
            borderRadius="xl"
            glowSize="lg"
            className="w-full max-w-md sm:max-w-xl md:max-w-2xl"
          >
            <div className="px-4 py-8 sm:p-12 text-center">
              <div className="inline-flex p-3 sm:p-4 mb-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl">
                <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                Experience the Magic
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                Hover over this card to see the incredible spotlight effect in
                action. Watch as it follows your cursor with smooth 3D
                transforms.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-indigo-100 to-indigo-50 dark:from-indigo-900/50 dark:to-indigo-800/50 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-700">
                  3D Transforms
                </span>
              </div>
            </div>
          </SpotlightCard>
        </Spotlight>
      </div>
    </div>
  );
}
      `,
      manualCode: `
"use client";
import React, { useRef, useState, MouseEvent } from "react";
import { Sparkles } from "lucide-react";

// Utility function to combine class names
const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export const Spotlight: React.FC<SpotlightProps> = ({
  children,
  className,
  intensity = "medium",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    containerRef.current.style.setProperty("--grid-mouse-x", \`\${x}px\`);
    containerRef.current.style.setProperty("--grid-mouse-y", \`\${y}px\`);
  };

  const intensityMap = {
    low: "rgba(99, 102, 241, 0.08)",
    medium: "rgba(99, 102, 241, 0.15)",
    high: "rgba(99, 102, 241, 0.25)",
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative w-full [--grid-mouse-x:50%] [--grid-mouse-y:50%]",
        "before:absolute before:inset-0",
        "before:opacity-100 before:transition-opacity before:duration-700",
        className
      )}
      style={
        {
          "--spotlight-ambient": intensityMap[intensity],
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "rainbow";
  intensity?: "subtle" | "normal" | "intense";
  borderRadius?: "sm" | "md" | "lg" | "xl";
  glowSize?: "sm" | "md" | "lg";
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className,
  variant = "primary",
  intensity = "normal",
  borderRadius = "lg",
  glowSize = "md",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--mouse-x", \`\${x}px\`);
    cardRef.current.style.setProperty("--mouse-y", \`\${y}px\`);

    // Responsive transform calculations - reduce intensity on small screens
    const isMobile = window.innerWidth < 768;
    const transformMultiplier = isMobile ? 0.5 : 1;
    
    const rotateX = ((y - rect.height / 2) / 12) * transformMultiplier;
    const rotateY = (-(x - rect.width / 2) / 12) * transformMultiplier;
    const scale = isMobile ? 1.01 : 1.02;

    cardRef.current.style.transform = \`perspective(1200px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) scale(\${scale})\`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    setIsHovering(false);
    cardRef.current.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  // Updated variants with intensity multipliers applied
  const getVariantWithIntensity = (baseVariant: any, intensityMultiplier: number) => {
    const applyIntensity = (color: string) => {
      // Extract opacity values and multiply by intensity
      return color.replace(/0.\\d+/g, (match) => {
        const opacity = parseFloat(match);
        return Math.min(opacity * intensityMultiplier, 1).toFixed(2);
      });
    };

    return {
      spotlight: applyIntensity(baseVariant.spotlight),
      border: applyIntensity(baseVariant.border),
      background: baseVariant.background,
    };
  };

  const baseVariants = {
    primary: {
      spotlight: "rgba(99, 102, 241, 0.4), rgba(59, 130, 246, 0.3)",
      border: "rgba(99, 102, 241, 0.2)",
      background: "bg-white/80 dark:bg-zinc-900/80",
    },
    secondary: {
      spotlight: "rgba(147, 51, 234, 0.4), rgba(168, 85, 247, 0.3)",
      border: "rgba(147, 51, 234, 0.2)",
      background: "bg-white/80 dark:bg-zinc-900/80",
    },
    success: {
      spotlight: "rgba(34, 197, 94, 0.4), rgba(16, 185, 129, 0.3)",
      border: "rgba(34, 197, 94, 0.2)",
      background: "bg-white/80 dark:bg-zinc-900/80",
    },
    warning: {
      spotlight: "rgba(245, 158, 11, 0.4), rgba(251, 191, 36, 0.3)",
      border: "rgba(245, 158, 11, 0.2)",
      background: "bg-white/80 dark:bg-zinc-900/80",
    },
    danger: {
      spotlight: "rgba(239, 68, 68, 0.4), rgba(248, 113, 113, 0.3)",
      border: "rgba(239, 68, 68, 0.2)",
      background: "bg-white/80 dark:bg-zinc-900/80",
    },
    rainbow: {
      spotlight:
        "rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3)",
      border: "rgba(168, 85, 247, 0.2)",
      background: "bg-white/80 dark:bg-zinc-900/80",
    },
  };

  const intensityMap = {
    subtle: 0.6,
    normal: 1,
    intense: 1.8, // Increased for more noticeable difference
  };

  const radiusMap = {
    sm: "rounded-md sm:rounded-lg",
    md: "rounded-lg sm:rounded-xl",
    lg: "rounded-xl sm:rounded-2xl",
    xl: "rounded-2xl sm:rounded-3xl",
  };

  const glowSizeMap = {
    sm: "25%", // Slightly increased for mobile
    md: "35%", // Slightly increased for mobile
    lg: "45%", // Slightly increased for mobile
  };

  const intensityMultiplier = intensityMap[intensity];
  const currentVariant = getVariantWithIntensity(baseVariants[variant], intensityMultiplier);

  // Responsive shadow effects
  const getShadowIntensity = () => {
    const baseShadow = {
      subtle: "hover:shadow-md sm:hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10",
      normal: "hover:shadow-lg sm:hover:shadow-2xl hover:shadow-indigo-500/15 sm:hover:shadow-indigo-500/20 dark:hover:shadow-indigo-400/15 dark:sm:hover:shadow-indigo-400/20",
      intense: "hover:shadow-xl sm:hover:shadow-2xl hover:shadow-indigo-500/25 sm:hover:shadow-indigo-500/40 dark:hover:shadow-indigo-400/25 dark:sm:hover:shadow-indigo-400/40",
    };
    return baseShadow[intensity] || baseShadow.normal;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative p-[1px] transform-gpu transition-all duration-500 ease-out group",
        "touch-manipulation", // Optimize for touch devices
        radiusMap[borderRadius],
        "overflow-hidden",
        "before:absolute before:inset-0 before:z-[-2]",
        \`before:\${radiusMap[borderRadius]}\`,
        currentVariant.background,
        "before:border before:border-zinc-200 dark:before:border-zinc-800",
        "after:absolute after:inset-[-1px] after:z-[-1]",
        \`after:\${radiusMap[borderRadius]}\`,
        "after:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),_var(--spotlight-gradient),_transparent_var(--glow-size))]",
        "after:opacity-0 after:transition-all after:duration-500",
        // Responsive glow activation - on mobile, also activate on touch/focus
        "focus-within:after:opacity-100 active:after:opacity-100",
        isHovering ? "after:opacity-100" : undefined,
        getShadowIntensity(),
        className
      )}
      style={
        {
          "--spotlight-gradient": currentVariant.spotlight,
          "--glow-size": glowSizeMap[glowSize],
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "relative h-full w-full backdrop-blur-md z-20 transition-all duration-500",
          radiusMap[borderRadius],
          "bg-gradient-to-br from-white/90 via-white/80 to-white/70",
          "dark:from-zinc-900/90 dark:via-zinc-900/80 dark:to-zinc-900/70",
          // Responsive inner shadows
          intensity === "subtle" 
            ? "shadow-inner shadow-indigo-500/5 dark:shadow-indigo-400/5 group-hover:shadow-inner group-hover:shadow-indigo-500/8 sm:group-hover:shadow-indigo-500/10 dark:group-hover:shadow-indigo-400/8 dark:sm:group-hover:shadow-indigo-400/10"
            : intensity === "intense"
            ? "shadow-inner shadow-indigo-500/15 sm:shadow-indigo-500/20 dark:shadow-indigo-400/15 dark:sm:shadow-indigo-400/20 group-hover:shadow-inner group-hover:shadow-indigo-500/30 sm:group-hover:shadow-indigo-500/40 dark:group-hover:shadow-indigo-400/30 dark:sm:group-hover:shadow-indigo-400/40"
            : "shadow-inner shadow-indigo-500/8 sm:shadow-indigo-500/10 dark:shadow-indigo-400/8 dark:sm:shadow-indigo-400/10 group-hover:shadow-inner group-hover:shadow-indigo-500/15 sm:group-hover:shadow-indigo-500/20 dark:group-hover:shadow-indigo-400/15 dark:sm:group-hover:shadow-indigo-400/20",
          "overflow-hidden",
          // Add focus states for accessibility
          "focus-within:shadow-inner focus-within:shadow-indigo-500/20 dark:focus-within:shadow-indigo-400/20"
        )}
      >
        {children}
      </div>
    </div>
  );
};
      `,
    },
  },
};
