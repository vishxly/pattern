import { ComponentGroup } from "@/lib/docs/types";
import WarpOverlayDemo from "../components/warp-overlay";

export const warpOverlayRegistry: ComponentGroup = {
  name: "warpOverlayRegistry",
  title: "Warp Overlay",
  description:
    "A clean, elegant overlay component with smooth transitions and natural motion.",
  category: "components",
  components: ["WarpOverlay"],
  // Installation configuration
  installation: {
    cliCommand:
      'npx shadcn@latest add "https://zeroui.vercel.app/r/warp-overlay"',
    dependencies: ["clsx", "tailwind-merge", "framer-motion"],
    componentPath: "components/ui/warp-overlay.tsx",
    utilsCode: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
  },
  props: [
    {
      name: "isOpen",
      type: "boolean",
      description: "Controls the visibility of the overlay.",
      required: true,
    },
    {
      name: "onClose",
      type: "() => void",
      description: "Callback function to close the overlay.",
      required: true,
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The content to be displayed inside the overlay.",
      required: true,
    },
    {
      name: "variant",
      type: "'warp' | 'slide-in-top' | 'slide-in-bottom' | 'slide-in-left' | 'slide-in-right'",
      description: "The animation style for the overlay's entrance and exit.",
      required: false,
    },
    {
      name: "origin",
      type: "{ x: number; y: number }",
      description:
        "Specifies the starting point for the 'warp' animation variant, typically based on the user's click coordinates.",
      required: false,
    },
  ],

  variants: {
    basic: {
      title: "Animated Overlay",
      description:
        "A versatile overlay component with multiple animation variants, including a unique 'warp' effect.",
      component: WarpOverlayDemo,
      image: "/images/components/warp-overlay-basic.png",
      fallbackImage: "/placeholder.svg?height=300&width=400&text=Warp+Overlay",
      code: `"use client";

import { useState } from "react";
import WarpOverlay, { WarpOverlayVariant } from "@/lib/docs/ui/warp-overlay";

export default function WarpOverlayDemo() {
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [origin, setOrigin] = useState<{ x: number; y: number } | undefined>();
  const [variant, setVariant] = useState<WarpOverlayVariant>("warp");

  const openOverlay = (
    event: React.MouseEvent<HTMLButtonElement>,
    newVariant: WarpOverlayVariant
  ) => {
    setVariant(newVariant);
    if (newVariant === "warp") {
      setOrigin({ x: event.clientX, y: event.clientY });
    } else {
      setOrigin(undefined); // Origin is not needed for slide variants
    }
    setOverlayOpen(true);
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6  text-center">
      <div className="mb-12">
        <h1 className="text-5xl font-medium mb-4 text-gray-800">Overlay</h1>
        <p className="text-lg text-gray-600">
          Choose an animation variant to see it in action.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        <button
          onClick={(e) => openOverlay(e, "warp")}
          className="px-3 py-1.5 rounded-md text-sm font-medium text-white 
               bg-blue-600 hover:bg-blue-700 transition"
        >
          Warp
        </button>

        <button
          onClick={(e) => openOverlay(e, "slide-in-top")}
          className="px-3 py-1.5 rounded-md text-sm font-medium text-white 
               bg-green-600 hover:bg-green-700 transition"
        >
          From Top
        </button>

        <button
          onClick={(e) => openOverlay(e, "slide-in-bottom")}
          className="px-3 py-1.5 rounded-md text-sm font-medium text-white 
               bg-red-600 hover:bg-red-700 transition"
        >
          From Bottom
        </button>

        <button
          onClick={(e) => openOverlay(e, "slide-in-left")}
          className="px-3 py-1.5 rounded-md text-sm font-medium text-white 
               bg-purple-600 hover:bg-purple-700 transition"
        >
          From Left
        </button>

        <button
          onClick={(e) => openOverlay(e, "slide-in-right")}
          className="px-3 py-1.5 rounded-md text-sm font-medium text-white 
               bg-yellow-500 hover:bg-yellow-600 transition"
        >
          From Right
        </button>
      </div>

      <WarpOverlay
        isOpen={isOverlayOpen}
        onClose={closeOverlay}
        origin={origin}
        variant={variant}
      >
        <h2 className="text-2xl font-bold mb-4">A Overlay</h2>
        <p className="text-gray-700">
          This overlay uses a physics-based spring animation for a natural feel.
          Notice the blurred backdrop and the subtle entrance of this content.
          This is the kind of polish that elevates a user experience.
        </p>
        <button
          onClick={closeOverlay}
          className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition"
        >
          Got it!
        </button>
      </WarpOverlay>
    </main>
  );
}
`,
      manualCode: `"use client";
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';
import { ReactNode, useEffect, useMemo } from 'react';

// Define the available animation styles for type safety and autocompletion
export type WarpOverlayVariant = 'warp' | 'slide-in-top' | 'slide-in-bottom' | 'slide-in-left' | 'slide-in-right';

interface WarpOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  variant?: WarpOverlayVariant;
  origin?: { x: number; y: number }; // Only used for 'warp' variant
}

// Framer Motion spring transition for a natural feel
const spring: Transition = {
  type: 'spring' as const,
  damping: 30,
  stiffness: 250,
};

// Variants for the backdrop
const backdropVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

// Variants for the content inside the overlay
const contentVariants: Variants = {
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { delay: 0.1, duration: 0.2 } 
  },
  hidden: { opacity: 0, scale: 0.95 },
};


const WarpOverlay = ({
  isOpen,
  onClose,
  children,
  variant = 'warp',
  origin,
}: WarpOverlayProps) => {

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Memoized calculation for the 'warp' radius. Stays the same as before.
  const finalRadius = useMemo(() => {
    if (!origin || typeof window === 'undefined') return '150%';
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const distTopLeft = Math.hypot(origin.x, origin.y);
    const distTopRight = Math.hypot(vw - origin.x, origin.y);
    const distBottomLeft = Math.hypot(origin.x, vh - origin.y);
    const distBottomRight = Math.hypot(vw - origin.x, vh - origin.y);
    return Math.max(distTopLeft, distTopRight, distBottomLeft, distBottomRight);
  }, [origin]);
  
  // A function to dynamically generate the variants for the main container
  const getContainerVariants = (): Variants => {
    switch (variant) {
      case 'slide-in-top':
        return {
          hidden: { y: '-100%', opacity: 0 },
          visible: { y: '0%', opacity: 1 },
        };
      case 'slide-in-bottom':
        return {
          hidden: { y: '100%', opacity: 0 },
          visible: { y: '0%', opacity: 1 },
        };
      case 'slide-in-left':
        return {
          hidden: { x: '-100%', opacity: 0 },
          visible: { x: '0%', opacity: 1 },
        };
      case 'slide-in-right':
        return {
          hidden: { x: '100%', opacity: 0 },
          visible: { x: '0%', opacity: 1 },
        };
      case 'warp':
      default:
        const clipPathOpen = origin ? \`circle(\${finalRadius}px at \${origin.x}px \${origin.y}px)\` : 'circle(150% at 50% 50%)';
        const clipPathClosed = origin ? \`circle(0px at \${origin.x}px \${origin.y}px)\` : 'circle(0% at 50% 50%)';
        return {
          hidden: { clipPath: clipPathClosed },
          visible: { clipPath: clipPathOpen },
        };
    }
  };
  
  const containerVariants = getContainerVariants();

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
        >
          {/* Elegant Backdrop with Blur */}
          <motion.div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          
          {/* Animated Container */}
          <motion.div
            className="relative w-full max-w-lg"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={spring}
          >
            {/* The actual content with its own subtle animation */}
            <motion.div
              className="p-8 bg-white/90 dark:bg-black/90 rounded-xl shadow-2xl"
              variants={contentVariants}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors z-10"
                aria-label="Close overlay"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {children}
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WarpOverlay;`,
    },
  },
};
