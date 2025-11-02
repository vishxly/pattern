"use client";
import React, { useState, useEffect, useRef, useCallback, Fragment } from 'react';
import { Search } from 'lucide-react';

// Utility function to combine class names (since we don't have access to cn)
const cn = (...classes: (string | undefined | null | boolean)[]) => {
  return classes.filter(Boolean).join(' ');
};

// --- TYPE DEFINITIONS ---
interface CommandItem {
  icon: React.ReactElement;
  label: string;
  action: () => void;
}

interface CommandGroup {
  category: string;
  items: CommandItem[];
}

interface CommandMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  items: CommandGroup[];
}

// --- THE COMPONENT ---
export const CommandMenu: React.FC<CommandMenuProps> = ({ open, setOpen, items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const activeItemRef = useRef<HTMLLIElement>(null);

  // Track window size for responsive behavior
  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024;

  const closeMenu = useCallback(() => {
    setOpen(false);
    setTimeout(() => setSearchTerm(''), 200); // Reset search after close animation
  }, [setOpen]);

  const filteredItems = React.useMemo(() => {
    if (!searchTerm) {
      return items.flatMap(group => [{ isCategory: true, label: group.category }, ...group.items]).slice(1);
    }
    
    const allItems: CommandItem[] = items.flatMap(group => group.items);
    return allItems.filter(item => 
      item.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  // Reset active index when search term changes or menu opens/closes
  useEffect(() => {
    setActiveIndex(0);
  }, [searchTerm, open]);

  // Scroll active item into view
  useEffect(() => {
    activeItemRef.current?.scrollIntoView({
      block: 'nearest',
    });
  }, [activeIndex]);

  // Handle all keyboard interactions
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      
      const isSearchEmpty = searchTerm === '';
      const activeItem = filteredItems[activeIndex];

      // Handle closing
      if (e.key === 'Escape') closeMenu();
      
      // Handle navigation
      else if (e.key === 'ArrowDown') {
        e.preventDefault();
        let nextIndex = activeIndex + 1;
        // Skip over categories if we're not searching
        if (isSearchEmpty && filteredItems[nextIndex] && (filteredItems[nextIndex] as any).isCategory) {
          nextIndex++;
        }
        if (nextIndex < filteredItems.length) setActiveIndex(nextIndex);
      } 
      
      else if (e.key === 'ArrowUp') {
        e.preventDefault();
        let prevIndex = activeIndex - 1;
        // Skip over categories if we're not searching
        if (isSearchEmpty && filteredItems[prevIndex] && (filteredItems[prevIndex] as any).isCategory) {
          prevIndex--;
        }
        if (prevIndex >= 0) setActiveIndex(prevIndex);
      } 
      
      // Handle selection
      else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeItem && !(activeItem as any).isCategory) {
          (activeItem as CommandItem).action();
          closeMenu();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, activeIndex, filteredItems, closeMenu, searchTerm]);

  // Focus input when the menu opens
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  // Handle touch events for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > 50;

    // Swipe up to go to next item
    if (isSwipe && distance > 0 && activeIndex < filteredItems.length - 1) {
      setActiveIndex(prev => prev + 1);
    }
    // Swipe down to go to previous item
    if (isSwipe && distance < 0 && activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }
  };
  
  // Prevent rendering if closed
  if (!open) return null;

  // Get responsive positioning and sizing
  const getDialogClasses = () => {
    const baseClasses = "bg-white dark:bg-black text-black dark:text-white border border-black/20 dark:border-white/20 shadow-2xl";
    
    if (isMobile) {
      return `fixed z-50 inset-x-4 top-[15%] sm:top-[20%] w-auto rounded-xl ${baseClasses}`;
    } else if (isTablet) {
      return `fixed z-50 top-1/4 left-1/2 -translate-x-1/2 w-[85vw] max-w-2xl rounded-xl ${baseClasses}`;
    } else {
      return `fixed z-50 top-1/4 left-1/2 -translate-x-1/2 w-[90vw] max-w-xl rounded-xl ${baseClasses}`;
    }
  };

  const getMaxHeight = () => {
    if (isMobile) {
      return windowSize.height < 700 ? 'max-h-[50vh]' : 'max-h-[60vh]';
    } else if (isTablet) {
      return 'max-h-[500px]';
    } else {
      return 'max-h-[400px]';
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-sm" 
        onClick={closeMenu}
        style={{
          animation: 'fadeIn 0.15s ease-out'
        }}
      />
      
      {/* Dialog */}
      <div
        role="dialog"
        className={getDialogClasses()}
        style={{
          animation: 'slideIn 0.2s ease-out'
        }}
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchMove={isMobile ? handleTouchMove : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
      >
        {/* Search Input */}
        <div className={`flex items-center ${
          isMobile ? 'p-3 sm:p-4' : 'p-3'
        } border-b border-black/20 dark:border-white/20`}>
          <Search className={`${
            isMobile ? 'h-4 w-4 sm:h-5 sm:w-5' : 'h-5 w-5'
          } text-black/50 dark:text-white/50`} />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type a command or search..."
            className={`w-full bg-transparent ${
              isMobile ? 'ml-2 sm:ml-3 text-sm sm:text-base' : 'ml-3'
            } focus:outline-none text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50`}
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
          />
          {/* Close button for mobile */}
          {isMobile && (
            <button
              onClick={closeMenu}
              className="ml-2 p-1 rounded text-black/50 dark:text-white/50 hover:text-black/70 dark:hover:text-white/70 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              ✕
            </button>
          )}
        </div>

        {/* List of Items */}
        <ul 
          ref={scrollContainerRef} 
          className={`${
            isMobile ? 'p-1 sm:p-2' : 'p-2'
          } ${getMaxHeight()} overflow-y-auto overscroll-contain`}
          style={{
            // Better scroll behavior on mobile
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => {
              const isCategory = (item as any).isCategory;
              if (isCategory) {
                return (
                  <li 
                    key={`category-${item.label}`} 
                    className={`${
                      isMobile ? 'px-2 py-1.5 sm:px-3 sm:py-2' : 'px-3 py-2'
                    } ${
                      isMobile ? 'text-[10px] sm:text-xs' : 'text-xs'
                    } font-medium text-black/50 dark:text-white/50 uppercase tracking-wider`}
                  >
                    {item.label}
                  </li>
                );
              }

              return (
                <li
                  key={`item-${(item as CommandItem).label}`}
                  ref={activeIndex === index ? activeItemRef : null}
                  onClick={() => {
                    (item as CommandItem).action();
                    closeMenu();
                  }}
                  className={cn(
                    'flex items-center rounded-md cursor-pointer text-black/70 dark:text-white/70 transition-colors',
                    isMobile ? 'p-2 sm:p-2.5 text-sm sm:text-base' : 'p-2.5',
                    'hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white',
                    'active:bg-black/20 dark:active:bg-white/20', // Better touch feedback
                    activeIndex === index && 'bg-black/10 dark:bg-white/10 text-black dark:text-white'
                  )}
                  onMouseEnter={() => !isMobile && setActiveIndex(index)}
                  onTouchStart={() => isMobile && setActiveIndex(index)}
                >
                  {React.isValidElement((item as CommandItem).icon) &&
                    React.isValidElement((item as CommandItem).icon) ? 
                    React.cloneElement((item as CommandItem).icon, { 
                      className: `${
                        isMobile ? 'h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3' : 'h-5 w-5 mr-3'
                      } text-black/60 dark:text-white/60 flex-shrink-0` 
                    } as any) : 
                    <span className={`${
                      isMobile ? 'h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3' : 'h-5 w-5 mr-3'
                    } text-black/60 dark:text-white/60 flex-shrink-0`}>
                      {(item as CommandItem).icon}
                    </span>}
                  <span className="truncate">{(item as CommandItem).label}</span>
                </li>
              );
            })
          ) : (
            <li className={`${
              isMobile ? 'p-3 sm:p-4 text-sm sm:text-base' : 'p-4'
            } text-center text-black/50 dark:text-white/50`}>
              No results found for "{searchTerm}".
            </li>
          )}
        </ul>

        {/* Mobile instruction text */}
        {isMobile && filteredItems.length > 0 && (
          <div className="px-3 py-2 border-t border-black/20 dark:border-white/20 text-xs text-black/50 dark:text-white/50 text-center">
            Swipe up/down to navigate • Tap to select
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translate(-50%, -48%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @media (max-width: 767px) {
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        }
      `}</style>
    </>
  );
};
