"use client";
import { Spotlight, SpotlightCard } from "@/lib/docs/ui/spotlight";
import { Sparkles } from "lucide-react";

export default function SpotlightDemo() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 transition-colors duration-500 p-1 sm:p-6">
      <div className="min-h-screen flex items-center justify-center">
        <Spotlight className="w-full px-2 sm:px-8" intensity="high">
          <SpotlightCard
            variant="rainbow"
            intensity="intense"
            borderRadius="xl"
            glowSize="lg"
            className="w-full max-w-md sm:max-w-xl md:max-w-2xl"
          >
            <div className="px-4 py-8 sm:p-12 text-center">
              <div className="inline-flex p-3 sm:p-4 mb-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl">
                <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                Experience the Magic
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                Hover over this card to see the incredible spotlight effect in
                action. Watch as it follows your cursor with smooth 3D
                transforms.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-indigo-100 to-indigo-50 dark:from-indigo-900/50 dark:to-indigo-800/50 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-700">
                  3D Transforms
                </span>
              </div>
            </div>
          </SpotlightCard>
        </Spotlight>
      </div>
    </div>
  );
}
