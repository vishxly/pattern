"use client";
import React, { useEffect } from "react";
import { X } from "lucide-react";

// The props interface remains unchanged
interface SheetProps {
  children: React.ReactNode;
  title: string;
  open: boolean;
  close: () => void;
  className?: string;
  variant?: "bottom" | "top" | "left" | "right";
}

export default function Sheet({
  children,
  open,
  close,
  className = "",
  title,
  variant = "bottom"
}: SheetProps) {
  // useEffect for body scroll lock remains the same
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
     
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  // Don't render if not open
  if (!open) return null;

  // --- STYLING LOGIC ---

  // Base classes for the sheet panel
  const baseSheetClasses = 
    "fixed z-50 bg-white dark:bg-neutral-950 shadow-2xl transition-transform duration-300 ease-in-out";

  // Variant-specific classes for position and animation
  const variantClasses = {
    bottom: `
      bottom-0 left-0 right-0 
      w-full rounded-t-2xl sm:rounded-t-2xl
      max-h-[95vh] sm:max-h-[90vh]
      ${open ? 'translate-y-0' : 'translate-y-full'}
    `,
    top: `
      top-0 left-0 right-0 
      w-full rounded-b-2xl sm:rounded-b-2xl
      max-h-[95vh] sm:max-h-[90vh]
      ${open ? 'translate-y-0' : '-translate-y-full'}
    `,
    left: `
      top-0 left-0 h-full 
      rounded-r-2xl sm:rounded-r-2xl
      w-full sm:w-full sm:max-w-md
      ${open ? 'translate-x-0' : '-translate-x-full'}
    `,
    right: `
      top-0 right-0 h-full 
      rounded-l-2xl sm:rounded-l-2xl
      w-full sm:w-full sm:max-w-md
      ${open ? 'translate-x-0' : 'translate-x-full'}
    `
  };
     
  // Combine base and variant classes
  const sheetClasses = `${baseSheetClasses} ${variantClasses[variant]} ${className}`;

  // --- COMPONENT RENDER ---

  return (
    <>
      {/* Backdrop: Fades in to cover the main content */}
      <div 
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={close}
      />
             
      {/* Sheet Panel */}
      <div className={sheetClasses} role="dialog" aria-modal="true" aria-labelledby="sheet-title">
        {/* Header: Contains the title and close button */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-neutral-200 dark:border-neutral-800">
          <h2 id="sheet-title" className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-50 pr-2">
            {title}
          </h2>
          <button
            onClick={close}
            className="p-1.5 sm:p-1 rounded-full text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 flex-shrink-0"
            aria-label="Close sheet"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
                 
        {/* Content: Scrollable area for children */}
        <div className="h-full overflow-y-auto p-4 sm:p-6">
          {children}
        </div>
         
        {/* Decorative Drag Handle (Subtly styled) */}
        <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
      </div>
    </>
  );
}
