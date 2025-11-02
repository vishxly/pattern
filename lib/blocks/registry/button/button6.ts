import { LandingComponentGroup } from "@/lib/blocks/landing-registry";

import Button from "../../components/button/button6";

export const button6Registry: LandingComponentGroup = {
  title: "Upload",
  description: "A button with an upload icon",

  category: "Button",
  variants: {
    default: {
      title: "Upload",
      description: "A button with an upload icon",
      component: Button,
      image: "/images/blocks/button/button6.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `
function Button() {
    return (
      <div className="w-full h-full flex items-center justify-center my-16">
        <button className="relative w-40 h-14 rounded-xl bg-white/10 text-black dark:text-white backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 border border-white/10 shadow-[0_0_30px_#a855f7aa,inset_0_0_8px_#ffffff0d] hover:scale-[1.03]">
          <span className="text-sm font-medium opacity-95">Upload</span>
          <div className="absolute -bottom-2 h-4 w-3/4 blur-xl bg-violet-500/40 rounded-full z-[-1]"></div>
        </button>
      </div>
    );
  }
  
  export default Button;`,
    },
  },
};
