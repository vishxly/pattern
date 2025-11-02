"use client";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";
import { ReactNode, useEffect, useMemo } from "react";

// Define the available animation styles for type safety and autocompletion
export type WarpOverlayVariant =
  | "warp"
  | "slide-in-top"
  | "slide-in-bottom"
  | "slide-in-left"
  | "slide-in-right";

interface WarpOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  variant?: WarpOverlayVariant;
  origin?: { x: number; y: number }; // Only used for 'warp' variant
}

// Framer Motion spring transition for a natural feel
const spring: Transition = {
  type: "spring" as const,
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
    transition: { delay: 0.1, duration: 0.2 },
  },
  hidden: { opacity: 0, scale: 0.95 },
};

const WarpOverlay = ({
  isOpen,
  onClose,
  children,
  variant = "warp",
  origin,
}: WarpOverlayProps) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Memoized calculation for the 'warp' radius. Stays the same as before.
  const finalRadius = useMemo(() => {
    if (!origin || typeof window === "undefined") return "150%";
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
      case "slide-in-top":
        return {
          hidden: { y: "-100%", opacity: 0 },
          visible: { y: "0%", opacity: 1 },
        };
      case "slide-in-bottom":
        return {
          hidden: { y: "100%", opacity: 0 },
          visible: { y: "0%", opacity: 1 },
        };
      case "slide-in-left":
        return {
          hidden: { x: "-100%", opacity: 0 },
          visible: { x: "0%", opacity: 1 },
        };
      case "slide-in-right":
        return {
          hidden: { x: "100%", opacity: 0 },
          visible: { x: "0%", opacity: 1 },
        };
      case "warp":
      default:
        const clipPathOpen = origin
          ? `circle(${finalRadius}px at ${origin.x}px ${origin.y}px)`
          : "circle(150% at 50% 50%)";
        const clipPathClosed = origin
          ? `circle(0px at ${origin.x}px ${origin.y}px)`
          : "circle(0% at 50% 50%)";
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
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
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

export default WarpOverlay;
