import { ComponentGroup } from "@/lib/docs/types";
import SheetDemo from "../components/sheet";
import {
  SheetLeftExample,
  SheetRightExample,
  SheetTopExample,
} from "@/lib/docs/components/example/sheet-variants";

export const sheetRegistry: ComponentGroup = {
  name: "sheetRegistry",
  title: "Sheet",
  description:
    "A Sheet component that can be used to display content in a layer above the main content.",
  category: "components",
  components: ["SheetDemo"],
  // Installation configuration
  installation: {
    cliCommand: "npx shadcn@latest add \"https://zeroui.vercel.app/r/sheet\"",
    dependencies: ["clsx", "tailwind-merge", "lucide-react"],
    componentPath: "components/ui/sheet.tsx",
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
      description: "The content to be displayed inside the sheet.",
      required: true,
    },
    {
      name: "title",
      type: "string",
      description: "The title of the sheet.",
      required: true,
    },
    {
      name: "open",
      type: "boolean",
      description: "Controls whether the sheet is open or closed.",
      required: true,
    },
    {
      name: "close",
      type: "() => void",
      description: "A function to close the sheet.",
      required: true,
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes for styling the sheet container.",
      required: false,
    },
    {
      name: "variant",
      type: "'bottom' | 'top' | 'left' | 'right'",
      description: "The variant of the sheet, determining its position.",
      required: false,
    },
  ],
  examples: [
    {
      title: "Left Variant",
      description: "A sheet that slides in from the left.",
      component: SheetLeftExample,
      code: `
"use client";
import { useState } from "react";
import Sheet from "@/lib/docs/ui/sheet";

export function SheetLeftExample() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Left Sheet</button>
      <Sheet open={open} close={() => setOpen(false)} title="Left Sheet" variant="left">
        <p>This sheet slides in from the left side of the screen.</p>
      </Sheet>
    </>
  );
}
      `,
    },
    {
      title: "Right Variant",
      description: "A sheet that slides in from the right.",
      component: SheetRightExample,
      code: `
"use client";
import { useState } from "react";
import Sheet from "@/lib/docs/ui/sheet";

export function SheetRightExample() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Right Sheet</button>
      <Sheet open={open} close={() => setOpen(false)} title="Right Sheet" variant="right">
        <p>This sheet slides in from the right side of the screen.</p>
      </Sheet>
    </>
  );
}
      `,
    },
    {
      title: "Top Variant",
      description: "A sheet that slides down from the top.",
      component: SheetTopExample,
      code: `
"use client";
import { useState } from "react";
import Sheet from "@/lib/docs/ui/sheet";

export function SheetTopExample() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Top Sheet</button>
      <Sheet open={open} close={() => setOpen(false)} title="Top Sheet" variant="top">
        <p>This sheet slides down from the top of the screen.</p>
      </Sheet>
    </>
  );
}
      `,
    },
  ],
  variants: {
    basic: {
      title: "Modal",
      description:
        "A modal component that can be used to display content in a layer above the main content.",
      component: SheetDemo,
      image: "/images/components/sheet-basic.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Interactive+Sheet",
      code: `"use client";
import { useState } from "react";

import Sheet from "@/lib/docs/ui/sheet";

export default function SheetDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center gap-6 p-12 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Sheet Component Demo
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Click the button to open a sheet from the bottom
        </p>
      </div>

      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
      >
        Open Bottom Sheet
      </button>

      <Sheet
        open={open}
        close={() => setOpen(false)}
        title="Bottom Sheet"
        variant="bottom"
      >
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <div className="relative w-32 h-32 overflow-hidden rounded-2xl shadow-lg">
            <img
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Demo"
            />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Bottom Sheet Demo
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              This sheet slides up from the bottom of the screen. It's perfect
              for mobile-first designs and quick actions.
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Close Sheet
          </button>
        </div>
      </Sheet>
    </div>
  );
}
`,
      manualCode: `"use client";
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
    bottom: \`
      bottom-0 left-0 right-0 
      w-full rounded-t-2xl sm:rounded-t-2xl
      max-h-[95vh] sm:max-h-[90vh]
      \${open ? 'translate-y-0' : 'translate-y-full'}
    \`,
    top: \`
      top-0 left-0 right-0 
      w-full rounded-b-2xl sm:rounded-b-2xl
      max-h-[95vh] sm:max-h-[90vh]
      \${open ? 'translate-y-0' : '-translate-y-full'}
    \`,
    left: \`
      top-0 left-0 h-full 
      rounded-r-2xl sm:rounded-r-2xl
      w-full sm:w-full sm:max-w-md
      \${open ? 'translate-x-0' : '-translate-x-full'}
    \`,
    right: \`
      top-0 right-0 h-full 
      rounded-l-2xl sm:rounded-l-2xl
      w-full sm:w-full sm:max-w-md
      \${open ? 'translate-x-0' : 'translate-x-full'}
    \`
  };
     
  // Combine base and variant classes
  const sheetClasses = \`\${baseSheetClasses} \${variantClasses[variant]} \${className}\`;

  // --- COMPONENT RENDER ---

  return (
    <>
      {/* Backdrop: Fades in to cover the main content */}
      <div 
        className={\`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 \${open ? 'opacity-100' : 'opacity-0'}\`}
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
`,
    },
  },
};
