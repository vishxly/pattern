import { LandingComponentGroup } from "@/lib/blocks/landing-registry";

import Button from "../../components/button/button10";

export const button10Registry: LandingComponentGroup = {
  title: "Glow Button",
  description: "A glowing button with a white to transparent gradient effect",
  category: "Button",
  variants: {
    default: {
      title: "Glow Button",
      description:
        "A glowing button with a white to transparent gradient effect",
      component: Button,
      image: "/images/blocks/button/button10.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `
function Button() {
    return (
      <div className="w-full h-full flex items-center justify-center my-16">
        <button className="relative overflow-hidden isolate inline-flex items-center justify-center px-6 py-3 text-lg font-semibold dark:text-white text-black rounded-full backdrop-blur-xl bg-white/5 border border-white/25 shadow-[0_6px_18px_rgba(0,0,0,0.25)] transition-all duration-300 hover:brightness-110">
          <span className="pointer-events-none absolute -top-[1px] left-2 right-2 h-[2px] rounded-full bg-white/70 blur-[2px]"></span>
          <span className="pointer-events-none absolute inset-[1px] rounded-full bg-gradient-to-b from-white/25 via-white/10 to-transparent"></span>
          <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/20"></span>
          <span className="relative z-[1] drop-shadow-sm">Get Started</span>
        </button>
      </div>
    );
  }
  
  export default Button;`,
    },
  },
};
