"use client";
import {
    useState,
    useEffect,
    createContext,
    useContext,
    useRef,
    useMemo,
    Children,
    type HTMLAttributes,
    type ReactElement,
    forwardRef,
  } from 'react';
  import { cloneElement } from 'react';
  
  // Utility function
  const cn = (...classes: (string | undefined | null | false)[]) => {
    return classes.filter(Boolean).join(' ');
  };
  
  // Context Definition
  type ChronoScrollContextType = {
    activeMoment: number;
  };
  
  const ChronoScrollContext = createContext<ChronoScrollContextType | null>(null);
  
  const useChronoScroll = () => {
    const context = useContext(ChronoScrollContext);
    if (!context) {
      throw new Error("useChronoScroll must be used within a ChronoScroll component");
    }
    return context;
  };
  
  // Main Component Wrapper
  type ChronoScrollProps = HTMLAttributes<HTMLDivElement> & {
    children: [ReactElement, ReactElement];
  };
  
  export const ChronoScroll = ({ children, className, ...props }: ChronoScrollProps) => {
    const [activeMoment, setActiveMoment] = useState(0);
    const eventsRef = useRef<HTMLDivElement>(null);
    
    const handleScroll = () => {
      if (!eventsRef.current) {
        console.log("No events ref found");
        return;
      }
      
      const eventElements = Array.from(eventsRef.current.children);
      console.log(`Found ${eventElements.length} event elements`);
      
      let closestMoment = 0;
      let minDistance = Infinity;
      const viewportCenter = window.innerHeight / 2;
  
      eventElements.forEach((element, index) => {
        const { top, height } = element.getBoundingClientRect();
        const elementCenter = top + height / 2;
        const distance = Math.abs(viewportCenter - elementCenter);
  
        console.log(`Event ${index}: top=${top}, center=${elementCenter}, distance=${distance}`);
  
        if (distance < minDistance) {
          minDistance = distance;
          closestMoment = index;
        }
      });
  
      console.log(`Setting active moment to: ${closestMoment}`);
      setActiveMoment(closestMoment);
    };
  
    useEffect(() => {
      console.log("Setting up scroll listener");
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      // Initial check with a small delay to ensure DOM is ready
      setTimeout(handleScroll, 100);
      
      return () => {
        console.log("Cleaning up scroll listener");
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // Remove activeMoment from dependencies to prevent infinite re-renders
  
    const contextValue = useMemo(() => ({ activeMoment }), [activeMoment]);
    
    // Clone the second child (Events) with the ref
    const clonedChildren = Children.map(children, (child, index) => {
      if(index === 1){
          return cloneElement(child as any, { ref: eventsRef });
      }
      return child;
    });
  
    return (
      <ChronoScrollContext.Provider value={contextValue}>
        <div className={cn("relative flex gap-8 md:gap-16 w-full", className)} {...props}>
          <div className="fixed top-4 left-4 bg-black text-white p-2 rounded z-50 text-sm">
            Active: {activeMoment}
          </div>
          {clonedChildren}
        </div>
      </ChronoScrollContext.Provider>
    );
  };
  
  // Child Components
  export const ChronoScrollViewport = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
    const { activeMoment } = useChronoScroll();
  
    return (
      <div className={cn("w-full md:w-1/2 h-screen sticky top-0", className)} {...props}>
        <div className="relative h-full w-full flex items-center justify-center overflow-hidden rounded-xl bg-gray-100">
          {Children.map(children, (child, index) =>
            cloneElement(child as ReactElement<ChronoScrollContentProps>, {
              isActive: index === activeMoment,
              key: index,
            })
          )}
        </div>
      </div>
    );
  };
  
  type ChronoScrollContentProps = HTMLAttributes<HTMLDivElement> & {
    isActive?: boolean;
  };
  
  export const ChronoScrollContent = ({ className, children, isActive, ...props }: ChronoScrollContentProps) => {
    return(
      <div 
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out", 
            isActive ? "opacity-100" : "opacity-0"
          )} 
          aria-hidden={!isActive}
          {...props}
      >
          {children}
      </div>
    );
  };
  
  export const ChronoScrollEvents = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => {
      const { activeMoment } = useChronoScroll();
  
      useEffect(() => {
        console.log("ChronoScrollEvents mounted, ref:", ref);
      }, []);
  
      return (
        <div ref={ref} className={cn("w-full md:w-1/2 py-24", className)} {...props}>
            {Children.map(children, (child, index) => 
                cloneElement(child as ReactElement<ChronoScrollEventProps>, { 
                  isActive: index === activeMoment,
                  key: index 
                })
            )}
        </div>
      );
    }
  );
  ChronoScrollEvents.displayName = 'ChronoScrollEvents';
  
  type ChronoScrollEventProps = HTMLAttributes<HTMLDivElement> & {
      isActive?: boolean;
  }
  
  export const ChronoScrollEvent = ({ className, children, isActive, ...props }: ChronoScrollEventProps) => {
    return (
      <div
        className={cn(
          "flex flex-col min-h-[50vh] transition-all duration-500 ease-in-out py-8 border-l-4 border-dashed",
          isActive ? "opacity-100 border-blue-500 bg-blue-50 scale-105" : "opacity-60 border-gray-300",
          className
        )}
        {...props}
      >
        <div className='pl-8'>{children}</div>
      </div>
    );
  };
