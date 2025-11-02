import { ComponentGroup } from "@/lib/docs/types";
import CardTransitionDemo from "../components/card-transition";

export const cardTransitionRegistry: ComponentGroup = {
  name: "cardTransitionRegistry",
  title: "Card Transition",
  description:
    "A component for creating smooth transitions from a card view to a detailed view.",
  category: "components",
  components: ["CardTransitionDemo"],
  // Installation configuration
  installation: {
    cliCommand:
      'npx shadcn@latest add "https://zeroui.vercel.app/r/card-transition"',
    dependencies: ["clsx", "tailwind-merge", "framer-motion", "lucide-react"],
    componentPath: "components/ui/card-transition.tsx",
    utilsCode: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
  },
  props: [
    {
      name: "children",
      type: "React.ReactNode",
      description:
        "The content to be rendered, typically CardTransitionGrid and CardTransitionDetail components.",
      required: true,
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes for styling the root container.",
      required: false,
    },
    {
      name: "defaultSelected",
      type: "string | null",
      description:
        "The ID of the card to be selected by default on initial render.",
      required: false,
    },
    {
      name: "onSelectionChange",
      type: "(id: string | null) => void",
      description:
        "Callback function that fires when the selected card changes.",
      required: false,
    },
    {
      name: "id",
      type: "string",
      description:
        "A unique identifier for CardTransitionCard and its corresponding CardTransitionDetail.",
      required: true,
    },
    {
      name: "hoverEffect",
      type: "boolean",
      description:
        "Enables or disables the default hover effect on a CardTransitionCard. Defaults to true.",
      required: false,
    },
    {
      name: "showBackButton",
      type: "boolean",
      description:
        "Toggles the visibility of the back button in the CardTransitionDetail view. Defaults to true.",
      required: false,
    },
    {
      name: "headerContent",
      type: "React.ReactNode",
      description:
        "Custom content to render in the header of the CardTransitionDetail view.",
      required: false,
    },
    {
      name: "targetId",
      type: "string",
      description:
        "The id of the CardTransitionCard to select when the CardTransitionTrigger is clicked.",
      required: true,
    },
  ],

  variants: {
    basic: {
      title: "Seamless Card to Detail Page Transitions",
      description:
        "A component that enables smooth, animated transitions from a grid of cards to a full-page detail view.",
      component: CardTransitionDemo,
      image: "/images/components/card-transition-basic.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Card+Transition",
      code: `"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Star,
  MapPin,
  Clock,
  Users,
  Share2,
} from "lucide-react";
import {
  CardTransitionRoot,
  CardTransitionGrid,
  CardTransitionCard,
  CardTransitionDetail,
  CardTransitionTrigger,
  useCardTransitionControl,
} from "@/lib/docs/ui/card-transition";

// Your own card data structure (completely flexible)
interface Experience {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  location: string;
  duration: string;
  rating: number;
  reviews: number;
  price: number;
}

// Experience/Travel Card Component
function ExperienceCard({
  experience,
  isHovered,
}: {
  experience: Experience;
  isHovered: boolean;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border">
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold">{experience.rating}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{experience.subtitle}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {experience.location}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {experience.duration}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500 text-sm">
            <Users className="w-4 h-4 mr-1" />
            {experience.reviews} reviews
          </div>
          
        </div>
      </div>
    </div>
  );
}

function ExperienceDetail({ experience }: { experience: Experience }) {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="absolute bottom-0 left-0 right-0 p-8"
        >
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-3">
              {experience.title}
            </h1>
            <p className="text-xl text-white/90">{experience.subtitle}</p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4">About this experience</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                This is a detailed description of the experience. You can
                customize this content based on your data structure and
                requirements.
              </p>
            </motion.div>
          </div>
          <div className="lg:col-span-1">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="sticky top-32 bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="text-3xl font-bold mb-2">
                 
                  <span className="text-lg font-normal text-gray-600">
                    {" "}
                    / person
                  </span>
                </div>
              </div>
              <button className="w-full bg-black text-white rounded-xl py-4 font-semibold mb-4 hover:bg-gray-800 transition-colors">
                Book Experience
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

// Header component that works with any data
function CustomHeader() {
  const { selectedId } = useCardTransitionControl();

  if (!selectedId) return null;

  return (
    <div className="flex items-center space-x-3">
      <button className="p-2 bg-gray-100 hover:bg-red-50 rounded-xl transition-colors group">
        <Heart className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors" />
      </button>
      <button className="p-2 bg-gray-100 hover:bg-blue-50 rounded-xl transition-colors group">
        <Share2 className="w-5 h-5 text-gray-600 group-hover:text-blue-500 transition-colors" />
      </button>
    </div>
  );
}

// Main demo component
export default function CardTransitionDemo() {
  // Sample data - use your own structure
  const experiences: Experience[] = [
    {
      id: "e1",
      title: "Northern Lights Safari",
      subtitle: "Aurora Photography Workshop",
      image:
        "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop&q=80",
      location: "Iceland",
      duration: "7 days",
      rating: 4.9,
      reviews: 127,
      price: 2899,
    },
    {
      id: "e2",
      title: "Mountain Retreat",
      subtitle: "Digital Detox Experience",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80",
      location: "Japan",
      duration: "5 days",
      rating: 4.8,
      reviews: 89,
      price: 1899,
    },
  ];

  return (
    <div className="w-full">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-medium text-center mb-4">
            Travel Experiences
          </h2>

          <CardTransitionRoot>
            <CardTransitionGrid
              columns={{ default: 1, md: 2 }}
              className="max-w-4xl mx-auto"
            >
              {experiences.map((experience, index) => (
                <CardTransitionCard
                  key={experience.id}
                  id={experience.id}
                  index={index}
                >
                  {({ isHovered }) => (
                     <ExperienceCard experience={experience} isHovered={isHovered} />
                  )}
                </CardTransitionCard>
              ))}
            </CardTransitionGrid>

            {/* Experience Details */}
            {experiences.map((experience) => (
              <CardTransitionDetail
                key={experience.id}
                id={experience.id}
                backButtonText="Back to experiences"
                headerContent={<CustomHeader />}
              >
                <ExperienceDetail experience={experience} />
              </CardTransitionDetail>
            ))}
          </CardTransitionRoot>
        </div>
      </section>
    </div>
  );
}
`,
      manualCode: `"use client";

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
      <div className={cn("relative", className)}>
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
      [\`grid-cols-\${columns.default}\`]: columns.default,
      [\`sm:grid-cols-\${columns.sm}\`]: columns.sm,
      [\`md:grid-cols-\${columns.md}\`]: columns.md,
      [\`lg:grid-cols-\${columns.lg}\`]: columns.lg,
      [\`xl:grid-cols-\${columns.xl}\`]: columns.xl,
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
  children: React.ReactNode | ((props: { isHovered: boolean; isSelected: boolean; }) => React.ReactNode);
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
  children: React.ReactNode | ((props: { isSelected: boolean; }) => React.ReactNode);
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
`,
    },
  },
};
