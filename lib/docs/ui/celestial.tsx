"use client"

import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
  type ButtonHTMLAttributes,
  type Dispatch,
  type HTMLAttributes,
  type MouseEventHandler,
  type ReactElement,
  type ReactNode,
  type SetStateAction,
} from "react";
import * as Portal from "@radix-ui/react-portal";
import { X } from 'lucide-react';
import { cn } from "@/lib/utils";

type CelestialContextType = {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  planetCount: number;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  starContent: ReactNode | null;
  setStarContent: Dispatch<SetStateAction<ReactNode | null>>;
  onComplete?: () => void;
  autoCloseOnComplete?: boolean;
  showCloseButton?: boolean;
};

const CelestialContext = createContext<CelestialContextType | null>(null);

/**
 * Custom hook to access the Celestial context.
 * Throws an error if used outside of a <Celestial> provider.
 */
const useCelestial = () => {
  const context = useContext(CelestialContext);
  if (!context) {
    throw new Error("Celestial components must be used within a <Celestial> provider");
  }
  return context;
};

/**
 * Main wrapper for the Celestial component system. Manages the overall state,
 * including the open state, active index, and the central content.
 */
export const Celestial = ({
  children,
  open,
  onOpenChange,
  onComplete,
  autoCloseOnComplete = true,
  showCloseButton = true,
}: {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onComplete?: () => void;
  autoCloseOnComplete?: boolean;
  showCloseButton?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(open || false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [starContent, setStarContent] = useState<ReactNode | null>(null);

  const planetCount = useMemo(() => {
    const childrenArray = Children.toArray(children);
    const bodyChild = childrenArray.find(
      (child) => (child as ReactElement).type === CelestialBody
    ) as ReactElement | undefined;

    if (!bodyChild || typeof bodyChild !== 'object' || !('props' in bodyChild) || !bodyChild.props) return 0;

    const orbitChild = Children.toArray((bodyChild as ReactElement<{ children: ReactNode }>).props.children).find(
      (child) => (child as ReactElement).type === CelestialOrbit
    ) as ReactElement | undefined;

    if (!orbitChild) return 0;
    
    return Children.count((orbitChild as ReactElement<{ children: ReactNode }>).props.children);
  }, [children]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    onOpenChange?.(false);
  }, [onOpenChange]);

  const handleComplete = useCallback(() => {
    onComplete?.();
    if (autoCloseOnComplete) {
      handleClose();
    }
  }, [onComplete, autoCloseOnComplete, handleClose]);

  useEffect(() => {
    setIsOpen(open || false);
  }, [open]);

  useEffect(() => {
    onOpenChange?.(isOpen);
  }, [isOpen, onOpenChange]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleClose]);
  
  const contextValue = useMemo(() => ({
    isOpen,
    setIsOpen,
    activeIndex,
    setActiveIndex,
    planetCount,
    starContent,
    setStarContent,
    onComplete: handleComplete,
    autoCloseOnComplete,
    showCloseButton,
  }), [isOpen, activeIndex, planetCount, starContent, handleComplete, autoCloseOnComplete, showCloseButton]);

  return (
    <CelestialContext.Provider value={contextValue}>
      {children}
    </CelestialContext.Provider>
  );
};

/**
 * A button or other element that, when clicked, opens the main Celestial interface.
 */
export const CelestialTrigger = ({
  children,
  className,
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) => {
  const { setIsOpen } = useCelestial();
  
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setIsOpen(true);
    props.onClick?.(e);
  };

  if (asChild) {
    return cloneElement(children as ReactElement<any>, {
      onClick: handleClick,
    });
  }

  return (
    <button 
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90", 
        className
      )} 
      {...props} 
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

/**
 * The main container for the Celestial UI. It renders as a portal and includes
 * a backdrop overlay that closes the interface when clicked.
 */
export const CelestialBody = ({ 
  children, 
  className,
  closeOnBackdropClick = true 
}: HTMLAttributes<HTMLDivElement> & { closeOnBackdropClick?: boolean }) => {
  const { isOpen, setIsOpen, showCloseButton } = useCelestial();

  const handleBackdropClick = () => {
    if (closeOnBackdropClick) {
      setIsOpen(false);
    }
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <Portal.Root>
      <div
        data-state={isOpen ? 'open' : 'closed'}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="celestial-title"
      />
      <div
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center p-4",
          className
        )}
        onClick={handleBackdropClick}
      >
        <div 
          className="relative flex items-center justify-center"
          onClick={handleContentClick}
        >
          {showCloseButton && (
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 z-[60] rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label="Close celestial interface"
            >
              <X size={20} />
            </button>
          )}
          {children}
        </div>
      </div>
    </Portal.Root>
  );
};

/**
 * The central "star" element that displays the content of the currently
 * active planet.
 */
export const CelestialStar = ({ 
  className, 
  ...props 
}: HTMLAttributes<HTMLDivElement>) => {
  const { starContent, activeIndex } = useCelestial();

  return (
    <div
      className={cn(
        "relative z-[5] flex h-80 w-80 items-center justify-center rounded-full border bg-background/80 p-6 shadow-2xl backdrop-blur-lg dark:border-neutral-800",
        className
      )}
      {...props}
      role="main"
      aria-live="polite"
      aria-atomic="true"
    >
      <div
        key={activeIndex}
        className="h-full w-full animate-in fade-in-50 duration-500"
      >
        {starContent}
      </div>
    </div>
  );
};

/**
 * The invisible container responsible for arranging CelestialPlanet components in a circular orbit.
 */
export const CelestialOrbit = ({
  children,
  className,
  radius = 220,
}: {
  children: ReactElement<CelestialPlanetProps>[] | ReactElement<CelestialPlanetProps>;
  className?: string;
  radius?: number;
}) => {
  const { planetCount, activeIndex, setActiveIndex, setStarContent } = useCelestial();

  useEffect(() => {
    const activePlanet = Children.toArray(children)[activeIndex] as ReactElement<CelestialPlanetProps> | undefined;
    if (activePlanet && typeof activePlanet === 'object' && 'props' in activePlanet) {
      setStarContent(activePlanet.props.children);
    }
  }, [activeIndex, children, setStarContent]);

  // Handle arrow key navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setActiveIndex((prev) => (prev - 1 + planetCount) % planetCount);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        setActiveIndex((prev) => (prev + 1) % planetCount);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [planetCount, setActiveIndex]);

  return (
    <div className={cn("absolute flex items-center justify-center", className)}>
      <div className="relative h-1 w-1" role="tablist" aria-label="Navigation planets">
        {Children.map(children, (child, index) => {
          const angle = (index / planetCount) * 2 * Math.PI - Math.PI / 2;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          const isActive = index === activeIndex;

          const handlePlanetClick = () => {
            setActiveIndex(index);
          };

          return cloneElement(child, {
            style: {
              ...child.props.style,
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px) ${isActive ? 'scale(1.2)' : 'scale(1)'}`,
              zIndex: isActive ? 10 : 1,
              transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            },
            onClick: handlePlanetClick,
            isActive: isActive,
            'aria-selected': isActive,
            role: 'tab',
            tabIndex: isActive ? 0 : -1,
          });
        })}
      </div>
    </div>
  );
};

type CelestialPlanetProps = HTMLAttributes<HTMLButtonElement> & {
  label: ReactNode;
  isActive?: boolean;
  children: ReactNode;
};

/**
 * Represents a clickable "planet" in the orbit. It appears as a labeled button.
 * Its children are not rendered here; instead, they are lifted up to be
 * displayed in the CelestialStar when this planet is active.
 */
export const CelestialPlanet = ({
  className,
  isActive,
  label,
  children,
  ...props
}: CelestialPlanetProps) => {
  return (
    <button
      type="button"
      className={cn(
        "flex h-20 w-20 flex-col items-center justify-center rounded-full border-2 bg-background p-2 text-center text-xs font-medium shadow-lg transition-all duration-300",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:ring-offset-neutral-900",
        {
          "border-blue-500 font-semibold text-blue-500 shadow-blue-500/25": isActive,
          "border-neutral-200 hover:border-blue-400 hover:shadow-md dark:border-neutral-700 dark:hover:border-blue-500": !isActive,
        },
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};

/**
 * A button that completes the celestial flow and optionally closes it.
 */
export const CelestialComplete = ({
  children,
  className,
  onComplete: customOnComplete,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  onComplete?: () => void;
}) => {
  const { onComplete } = useCelestial();

  const handleComplete = () => {
    customOnComplete?.();
    onComplete?.();
  };

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-3 bg-primary text-primary-foreground hover:bg-primary/90",
        className
      )}
      onClick={handleComplete}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Navigation buttons for moving between planets
 */
export const CelestialNavigation = ({ className }: { className?: string }) => {
  const { activeIndex, setActiveIndex, planetCount } = useCelestial();

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + planetCount) % planetCount);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % planetCount);
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <button
        onClick={goToPrevious}
        className="rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label="Previous planet"
      >
        ←
      </button>
      <span className="text-sm text-muted-foreground">
        {activeIndex + 1} of {planetCount}
      </span>
      <button
        onClick={goToNext}
        className="rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label="Next planet"
      >
        →
      </button>
    </div>
  );
};
