import { LandingComponentGroup } from "@/lib/blocks/landing-registry";

import Button from "../../components/button/button2";

export const button2Registry: LandingComponentGroup = {
  title: "Start Now",
  description: " Button with different variants.",
  category: "Button",
  variants: {
    default: {
        title: "Start Now",
        description: " Button with different variants.",
      component: Button,
      image: "/images/blocks/button/button2.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `import { Zap } from "lucide-react";
import React from "react";

function Button() {
  return (
    <div className="w-full h-full flex items-center justify-center my-16">
      <button className="relative w-full md:w-auto px-6 py-3 rounded-xl font-semibold tracking-wide bg-white/40 dark:bg-white/10 text-gray-900 dark:text-white backdrop-blur-md border border-white/30 dark:border-white/10 ring-1 ring-gray-300/40 dark:ring-gray-500/10 hover:bg-white/60 dark:hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 ease-in-out shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_4px_14px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_4px_12px_rgba(255,255,255,0.03)]">
        Start Now
        <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-white/50 to-white/10 dark:from-white/10 dark:to-white/0 blur-md opacity-30 pointer-events-none z-[-1]"></span>
      </button>
    </div>
  );
}

export default Button;`,
    },
  },
};
