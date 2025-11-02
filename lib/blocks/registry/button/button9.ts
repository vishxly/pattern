import { LandingComponentGroup } from "@/lib/blocks/landing-registry";

import Button from "../../components/button/button9";

export const button9Registry: LandingComponentGroup = {
  title: "Gradient Glow Button",
  description: "A glowing button with a gradient effect",
  category: "Button",
  variants: {
    default: {
      title: "Gradient Glow Button",
      description: "A glowing button with a gradient effect",
      component: Button,
      image: "/images/blocks/button/button9.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `
function Button() {
    return (
      <div className="w-full h-full flex items-center justify-center my-16">
        <button className="relative overflow-hidden isolate inline-flex items-center justify-center px-6 py-3 text-base font-semibold dark:text-white text-gray-700 rounded-full backdrop-blur-xl bg-sky-400/30 border-2 border-white/50 shadow-[0_6px_18px_rgba(56,189,248,0.4)] transition-all duration-300 hover:brightness-110 dark:bg-sky-400/30 dark:border-white/20">
          <span className="pointer-events-none absolute -top-[1px] left-2 right-2 h-[2px] rounded-full bg-white/70 blur-[2px] opacity-90"></span>
          <span className="pointer-events-none absolute inset-[1px] rounded-full bg-gradient-to-b from-white/30 via-white/10 to-transparent"></span>
          <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/30"></span>
          <span className="relative z-[1] drop-shadow-md">Glow</span>
        </button>
      </div>
    );
  }
  
  export default Button;`,
    },
  },
};
