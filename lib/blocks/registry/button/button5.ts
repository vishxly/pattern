import { LandingComponentGroup } from "@/lib/blocks/landing-registry";

import Button from "../../components/button/button5";

export const button5Registry: LandingComponentGroup = {
  title: "Get Started Free Trial",
  description: "A button with a free trial text",

  category: "Button",
  variants: {
    default: {
      title: "Get Started Free Trial",
      description: "A button with a free trial text",
      component: Button,
      image: "/images/blocks/button/button5.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `
function Button() {
  return (
    <div className="w-full h-full flex items-center justify-center my-16">
      <button className=" px-4 py-3 rounded-[12px] text-white font-semibold text-base bg-gradient-to-b from-[#323232] to-[#222222] ring-2 ring-[#818080] shadow-[inset_0_0.5px_1px_rgba(255,255,255,0.15), inset_0_-1.2px_1.2px_0.35px_#121212, 0_2px_4px_-1px_rgba(13,13,13,0.5), 0_0_0_1px_#333333] transition-all duration-300 hover:brightness-110">
        Start Free Trial
      </button>
    </div>
  );
}

export default Button;`,
    },
  },
};
