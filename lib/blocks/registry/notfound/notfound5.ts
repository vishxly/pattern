import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import LuxuryMinimal404 from "@/lib/blocks/components/notfound/notfound5";

export const notfound5Registry: LandingComponentGroup = {
  title: "Elegance 404: Minimalist Error",
  description: "A stylish and minimal 404 page with subtle animations and elegant typography.",
  category: "Notfound",
  variants: {
    default: {
      title: "Elegance 404: Minimalist Error",
      description: "A stylish and minimal 404 page with subtle animations and elegant typography.",
      component: LuxuryMinimal404,
      image: "/images/blocks/notfound/notfound5.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Notfound+Component",
      code: `"use client"
import { useState, useEffect } from "react";

export default function LuxuryMinimal404() {
  const [letterDelay, setLetterDelay] = useState([0, 0.2, 0.4]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-neutral-200" />
        <div className="absolute bottom-1/4 right-1/3 w-24 h-px bg-neutral-200" />
        <div className="absolute top-1/3 right-1/4 w-px h-16 bg-neutral-300" />
      </div>

      <div className={\`text-center transition-all duration-1500 ease-out \${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}\`}>
        {/* Elegant 404 typography */}
        <div className="mb-16 relative">
          <h1 className="text-8xl md:text-[12rem] font-extralight text-neutral-900 tracking-wider leading-none">
            {['4', '0', '4'].map((digit, index) => (
              <span
                key={index}
                className="inline-block"
                style={{
                  animationDelay: \`\${letterDelay[index]}s\`,
                  animation: isLoaded ? 'fadeInUp 0.8s ease-out both' : 'none',
                }}
              >
                {digit}
              </span>
            ))}
          </h1>
          
          {/* Subtle underline */}
          <div 
            className="w-24 h-px bg-neutral-900 mx-auto mt-8 transform scale-x-0 origin-center"
            style={{
              animation: isLoaded ? 'scaleX 0.6s ease-out 0.8s both' : 'none',
            }}
          />
        </div>

        {/* Content section */}
        <div 
          className="space-y-8 max-w-md mx-auto px-6"
          style={{
            animation: isLoaded ? 'fadeInUp 0.8s ease-out 1s both' : 'none',
          }}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-light text-neutral-800 tracking-wide">
              Page Not Found
            </h2>
            <p className="text-neutral-600 leading-relaxed font-light">
              The page you are looking for might have been removed, 
              had its name changed, or is temporarily unavailable.
            </p>
          </div>

          {/* Refined action buttons */}
          <div className="pt-8 space-y-4">
            <button className="group w-full sm:w-auto px-8 py-3 bg-neutral-900 text-white font-light tracking-wide hover:bg-neutral-800 transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10">Return Home</span>
              <div className="absolute inset-0 bg-neutral-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
            
            <div className="pt-2">
              <button className="text-neutral-500 hover:text-neutral-700 font-light tracking-wide transition-colors duration-200">
                Contact Support
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div 
          className="absolute top-1/4 left-12 w-2 h-2 bg-neutral-300 rounded-full opacity-0"
          style={{
            animation: isLoaded ? 'fadeIn 0.4s ease-out 1.5s both' : 'none',
          }}
        />
        <div 
          className="absolute bottom-1/3 right-12 w-1 h-1 bg-neutral-400 rounded-full opacity-0"
          style={{
            animation: isLoaded ? 'fadeIn 0.4s ease-out 1.7s both' : 'none',
          }}
        />
      </div>

      {/* Custom CSS animations */}
      <style jsx>{\`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      \`}</style>
    </div>
  );
}
`,
    },
  },
};
