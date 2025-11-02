import { Rocket } from "lucide-react";

function Button() {
  return (
    <div className="w-full h-full flex items-center justify-center my-16">
      <button className="px-6 py-3 rounded-md font-semibold text-violet-900 dark:text-white bg-violet-200/30 dark:bg-white/10 backdrop-blur-md border border-violet-300/40 dark:border-white/10 ring-1 ring-violet-400/30 dark:ring-white/10 shadow-[0_4px_20px_rgba(168,85,247,0.15),inset_0_1px_2px_rgba(255,255,255,0.3)] hover:scale-[1.02] hover:shadow-[0_4px_25px_rgba(168,85,247,0.25)] transition-all duration-300 ease-in-out">
        Deploy Now
      </button>
    </div>
  );
}

export default Button;
