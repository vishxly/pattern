import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import MinimalGradient404 from "@/lib/blocks/components/notfound/notfound2";

export const notfound2Registry: LandingComponentGroup = {
  title: "Cosmic 404",
  description: "A stylish 404 page with a dynamic gradient background, subtle animations, and a clear call to action.",
  category: "Notfound",
  variants: {
    default: {
      title: "Cosmic 404",
      description: "A stylish 404 page with a dynamic gradient background, subtle animations, and a clear call to action.",
      component: MinimalGradient404,
      image: "/images/blocks/notfound/notfound2.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Notfound+Component",
      code: `import { useState, useEffect } from "react";

export default function MinimalGradient404() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Dynamic gradient background */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: \`radial-gradient(circle at \${mousePosition.x}% \${mousePosition.y}%, 
            rgb(99, 102, 241) 0%, 
            rgb(168, 85, 247) 25%, 
            rgb(236, 72, 153) 50%, 
            rgb(29, 78, 216) 100%)\`,
        }}
      />
      
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 text-center px-6">
        {/* 404 Text with elegant typography */}
        <div className="mb-8">
          <h1 className="text-[12rem] sm:text-[16rem] font-thin leading-none text-white/90 tracking-tighter">
            404
          </h1>
          <div className="h-px w-24 bg-white/40 mx-auto mb-6" />
        </div>

        {/* Content */}
        <div className="space-y-6 max-w-md mx-auto">
          <h2 className="text-2xl font-light text-white/95">
            Page Not Found
          </h2>
          
          <p className="text-lg text-white/75 leading-relaxed">
            The page you're looking for seems to have wandered off into the digital cosmos.
          </p>

          <div className="pt-4">
            <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300">
              <span className="relative z-10">Return Home</span>
              <div className="absolute inset-0 rounded-full bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-500" />
    </div>
  );
}
`,
    },
  },
};
