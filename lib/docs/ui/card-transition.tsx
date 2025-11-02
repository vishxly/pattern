"use client";

import React, { useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

// Context for managing transition state
interface TransitionContextValue {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextValue | null>(null);

export const useCardTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error(
      "useCardTransition must be used within a CardTransitionProvider"
    );
  }
  return context;
};

// Root component that provides the transition context
interface CardTransitionRootProps {
  children: React.ReactNode;
  className?: string;
  defaultSelected?: string | null;
  onSelectionChange?: (id: string | null) => void;
}

export function CardTransitionRoot({
  children,
  className,
  defaultSelected = null,
  onSelectionChange,
}: CardTransitionRootProps) {
  const [selectedId, setSelectedId] = useState<string | null>(defaultSelected);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelectionChange = (id: string | null) => {
    setIsTransitioning(true);
    setSelectedId(id);
    onSelectionChange?.(id);
    // Reset transition flag after animation
    setTimeout(() => setIsTransitioning(false), 400);
  };

  return (
    <TransitionContext.Provider
      value={{
        selectedId,
        setSelectedId: handleSelectionChange,
        isTransitioning,
      }}
    >
      <div className={cn("min-h-screen", className)}>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </div>
    </TransitionContext.Provider>
  );
}

// Grid container for cards
interface CardTransitionGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

export function CardTransitionGrid({
  children,
  className,
  columns = { default: 1, md: 2, lg: 3 },
}: CardTransitionGridProps) {
  const { selectedId } = useCardTransition();

  if (selectedId) return null;

  const gridClasses = cn(
    "grid gap-6",
    {
      [`grid-cols-${columns.default}`]: columns.default,
      [`sm:grid-cols-${columns.sm}`]: columns.sm,
      [`md:grid-cols-${columns.md}`]: columns.md,
      [`lg:grid-cols-${columns.lg}`]: columns.lg,
      [`xl:grid-cols-${columns.xl}`]: columns.xl,
    },
    className
  );

  return (
    <motion.div
      key="grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
      className={gridClasses}
    >
      {children}
    </motion.div>
  );
}

// Individual card wrapper
interface CardTransitionCardProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  index?: number;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export function CardTransitionCard({
  children,
  id,
  className,
  index = 0,
  hoverEffect = true,
  onClick,
}: CardTransitionCardProps) {
  const { setSelectedId } = useCardTransition();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setSelectedId(id);
    onClick?.();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
      whileHover={hoverEffect ? { y: -8 } : undefined}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn("cursor-pointer", className)}
      onClick={handleClick}
    >
      {typeof children === "function"
        ? (
            children as (props: {
              isHovered: boolean;
              isSelected: boolean;
            }) => React.ReactNode
          )({ isHovered, isSelected: false })
        : children}
    </motion.div>
  );
}

// Detail page wrapper
interface CardTransitionDetailProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  showBackButton?: boolean;
  backButtonText?: string;
  onBack?: () => void;
  headerContent?: React.ReactNode;
}

export function CardTransitionDetail({
  children,
  id,
  className,
  showBackButton = true,
  backButtonText = "Back",
  onBack,
  headerContent,
}: CardTransitionDetailProps) {
  const { selectedId, setSelectedId } = useCardTransition();

  if (selectedId !== id) return null;

  const handleBack = () => {
    setSelectedId(null);
    onBack?.();
  };

  return (
    <motion.div
      key="detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn("fixed inset-0 bg-white z-50 overflow-y-auto", className)}
    >
      {/* Header */}
      {(showBackButton || headerContent) && (
        <motion.div
          initial={{ y: -60 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="sticky top-0 z-20 bg-white/95 backdrop-blur-xl border-b border-gray-100"
        >
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {showBackButton && (
                <motion.button
                  whileHover={{ x: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBack}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>{backButtonText}</span>
                </motion.button>
              )}
              {headerContent}
            </div>
          </div>
        </motion.div>
      )}

      {/* Content */}
      <div className="relative">
        {typeof children === "function"
          ? (children as (props: { isSelected: boolean }) => React.ReactNode)({
              isSelected: true,
            })
          : children}
      </div>
    </motion.div>
  );
}

// Utility components for common patterns
interface CardTransitionTriggerProps {
  children: React.ReactNode;
  targetId: string;
  className?: string;
  asChild?: boolean;
}

export function CardTransitionTrigger({
  children,
  targetId,
  className,
  asChild = false,
}: CardTransitionTriggerProps) {
  const { setSelectedId } = useCardTransition();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedId(targetId);
  };

  if (asChild) {
    const child = children as React.ReactElement<any>;
    const existingOnClick = child.props.onClick;
    
    return React.cloneElement(child, {
      onClick: (e: React.MouseEvent) => {
        existingOnClick?.(e);
        handleClick(e);
      },
      className: cn(child.props.className, className),
    });
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

// Animation presets
export const cardAnimationPresets = {
  slideUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  slideFromRight: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  },
};

// Hook for programmatic control
export function useCardTransitionControl() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error(
      "useCardTransitionControl must be used within a CardTransitionProvider"
    );
  }

  return {
    selectedId: context.selectedId,
    selectCard: context.setSelectedId,
    isTransitioning: context.isTransitioning,
    goBack: () => context.setSelectedId(null),
  };
}
