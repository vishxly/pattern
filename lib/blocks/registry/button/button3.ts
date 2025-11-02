import { LandingComponentGroup } from "@/lib/blocks/landing-registry";

import Button from "../../components/button/button3";

export const button3Registry: LandingComponentGroup = {
  title: "Get Started",
  description: "Yellow to amber gradient button",
  category: "Button",
  variants: {
    default: {
      title: "Get Started",
      description: "Yellow to amber gradient button",
      component: Button,
      image: "/images/blocks/button/button3.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `
function Button() {
  return (
    <div className="w-full h-full flex items-center justify-center my-16">
      <button className="w-full md:w-auto px-6 py-3 rounded-full text-white font-semibold tracking-wide bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 ease-in-out flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
        <span>Get Started</span>
      </button>
    </div>
  );
}

export default Button;`,
    },
  },
};
