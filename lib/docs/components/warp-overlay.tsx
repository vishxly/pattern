"use client";

import { useState } from "react";
import WarpOverlay, { WarpOverlayVariant } from "@/lib/docs/ui/warp-overlay";

export default function Home() {
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [origin, setOrigin] = useState<{ x: number; y: number } | undefined>();
  const [variant, setVariant] = useState<WarpOverlayVariant>("warp");

  const openOverlay = (
    event: React.MouseEvent<HTMLButtonElement>,
    newVariant: WarpOverlayVariant
  ) => {
    setVariant(newVariant);
    if (newVariant === "warp") {
      setOrigin({ x: event.clientX, y: event.clientY });
    } else {
      setOrigin(undefined); // Origin is not needed for slide variants
    }
    setOverlayOpen(true);
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6  text-center">
      <div className="mb-12">
        <h1 className="text-5xl font-medium mb-4 text-gray-800">Overlay</h1>
        <p className="text-lg text-gray-600">
          Choose an animation variant to see it in action.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        <button
          onClick={(e) => openOverlay(e, "warp")}
          className="px-3 py-1.5 rounded-md text-sm font-medium text-white 
               bg-blue-600 hover:bg-blue-700 transition"
        >
          Warp
        </button>

        <button
          onClick={(e) => openOverlay(e, "slide-in-top")}
          className="px-3 py-1.5 rounded-md text-sm font-medium text-white 
               bg-green-600 hover:bg-green-700 transition"
        >
          From Top
        </button>

        <button
          onClick={(e) => openOverlay(e, "slide-in-bottom")}
          className="px-3 py-1.5 rounded-md text-sm font-medium text-white 
               bg-red-600 hover:bg-red-700 transition"
        >
          From Bottom
        </button>

        <button
          onClick={(e) => openOverlay(e, "slide-in-left")}
          className="px-3 py-1.5 rounded-md text-sm font-medium text-white 
               bg-purple-600 hover:bg-purple-700 transition"
        >
          From Left
        </button>

        <button
          onClick={(e) => openOverlay(e, "slide-in-right")}
          className="px-3 py-1.5 rounded-md text-sm font-medium text-white 
               bg-yellow-500 hover:bg-yellow-600 transition"
        >
          From Right
        </button>
      </div>

      <WarpOverlay
        isOpen={isOverlayOpen}
        onClose={closeOverlay}
        origin={origin}
        variant={variant}
      >
        <h2 className="text-2xl font-bold mb-4">A Overlay</h2>
        <p className="text-gray-700">
          This overlay uses a physics-based spring animation for a natural feel.
          Notice the blurred backdrop and the subtle entrance of this content.
          This is the kind of polish that elevates a user experience.
        </p>
        <button
          onClick={closeOverlay}
          className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition"
        >
          Got it!
        </button>
      </WarpOverlay>
    </main>
  );
}
