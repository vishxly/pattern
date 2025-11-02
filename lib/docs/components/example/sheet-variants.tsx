"use client";
import { useState } from "react";
import Sheet from "@/lib/docs/ui/sheet"; // Adjust the import path based on your project structure

// Left Sheet Example
export function SheetLeftExample() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center p-4">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
      >
        Open Left Sheet
      </button>
      <Sheet
        open={open}
        close={() => setOpen(false)}
        title="Left Sheet"
        variant="left"
      >
        <div className="p-4">
          <p className="text-gray-700 dark:text-gray-300">
            This sheet slides in from the left side of the screen. It is
            suitable for navigation menus or filters.
          </p>
        </div>
      </Sheet>
    </div>
  );
}

// Right Sheet Example
export function SheetRightExample() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center p-4">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
      >
        Open Right Sheet
      </button>
      <Sheet
        open={open}
        close={() => setOpen(false)}
        title="Right Sheet"
        variant="right"
      >
        <div className="p-4">
          <p className="text-gray-700 dark:text-gray-300">
            This sheet slides in from the right. Often used for settings,
            notifications, or supplementary content.
          </p>
        </div>
      </Sheet>
    </div>
  );
}

// Top Sheet Example
export function SheetTopExample() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center p-4">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
      >
        Open Top Sheet
      </button>
      <Sheet
        open={open}
        close={() => setOpen(false)}
        title="Top Sheet"
        variant="top"
      >
        <div className="p-4">
          <p className="text-gray-700 dark:text-gray-300">
            This sheet slides down from the top. It can be used for
            announcements, search bars, or global banners.
          </p>
        </div>
      </Sheet>
    </div>
  );
}
