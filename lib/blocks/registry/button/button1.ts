import { LandingComponentGroup } from "@/lib/blocks/landing-registry";

import Button from "../../components/button/button1";

export const button1Registry: LandingComponentGroup = {
  title: "Button",
  description: "A button component with different variants.",
  category: "Button",
  variants: {
    default: {
        title: "Button",
        description: "A button component with different variants.",
      component: Button,
      image: "/images/blocks/button/button1.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `import { ArrowRight } from "lucide-react";
import React from "react";

function Button() {
  return (
    <div className="w-full h-full flex items-center justify-center my-16">
      <div className="p-[3px] rounded-full bg-white dark:bg-black shadow-[0_12px_20px_rgba(45,80,246,0.25)] dark:shadow-[0_12px_20px_rgba(45,80,246,0.4)]">
        <button className="flex items-center justify-between gap-4 px-8 py-4 text-white text-xl font-semibold bg-[#2D50F6] rounded-full transition-all duration-300 hover:brightness-110 shadow-[inset_0_1px_4px_rgba(255,255,255,0.3)] dark:shadow-[inset_0_1px_4px_rgba(0,0,0,0.3)]">
          <span>Get Started</span>
          <span className="w-9 h-9 rounded-full bg-[#5171F6] flex items-center justify-center shadow-md">
            <ArrowRight className="w-5 h-5 text-white" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Button;`,
    },
  },
};
