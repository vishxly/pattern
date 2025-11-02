"use client";
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
