import { LandingComponentGroup } from "@/lib/blocks/landing-registry";

import PremadeSectionsCard from "../../components/card/premade";

export const premadeCardRegistry: LandingComponentGroup = {
  title: "PremadeSectionsCard",
  description: "Library of pre-made sections, tailored to present your skills and experience. In constant development.",
  category: "Card",
  variants: {
    default: {
      title: "Premade Sections Card",
      description: "Library of pre-made sections, tailored to present your skills and experience. In constant development.",
      component: PremadeSectionsCard,
      image: "/images/blocks/card/premade.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `export default function PremadeCard() {
    return (
      <div className="w-full h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Outer Card Container with first border */}
          <article className="p-1.5 rounded-[24px] bg-[#EAEAEC] backdrop-blur-xl border border-black/12 h-80">
          {/* Inner Card Container with second border */}
          <div className="px-6 py-6 bg-white/80 border border-black/20 rounded-[20px] h-full relative overflow-hidden flex flex-col">
            
            {/* Main Content - Properly Aligned */}
            <div className="flex flex-col gap-y-4 z-20 relative flex-grow pr-28 pb-20">
              
              {/* Icon Button */}
              <div className="w-max">
                <div
                  className="p-0.5 rounded-[10px] relative bg-[#ececec]"
                  style={{
                    boxShadow:
                      '0px 0px 0.224852px 0.224852px rgba(0, 0, 0, 0.07), 0px 0px 0.224852px 0.674556px rgba(0, 0, 0, 0.05), 0px 0.899408px 3.59763px 0.899408px rgba(0, 0, 0, 0.12), inset 0px 8px 12.1px #ffffff',
                  }}
                >
                  <div
                    className="py-2 px-2 w-max rounded-lg font-medium text-sm hover:opacity-80 transition-opacity duration-200 ease-in-out bg-[#fefefe] text-black/60 cursor-pointer"
                    style={{
                      boxShadow: 'inset 0px 9px 10.4px -12px #45454520',
                    }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="22" x2="2" y1="6" y2="6"></line>
                      <line x1="22" x2="2" y1="18" y2="18"></line>
                      <line x1="6" x2="6" y1="2" y2="22"></line>
                      <line x1="18" x2="18" y1="2" y2="22"></line>
                    </svg>
                  </div>
                </div>
              </div>
  
              {/* Title */}
              <div>
                <h3 className="text-xl font-semibold leading-tight text-gray-900">
                  Pre-made Sections
                </h3>
              </div>
  
              {/* Description */}
              <div>
                <p className="text-sm text-black/60 leading-relaxed">
                  Library of pre-made sections, tailored to present your skills and experience. In constant development.
                </p>
              </div>
            </div>
  
            {/* Floating Cards - Better Positioned */}
            <div className="absolute right-6 bottom-6 flex items-end gap-2 z-10">
              
              {/* First Card */}
              <div className="p-1 rounded-lg bg-white border border-black/8 shadow-lg w-[80px] group relative overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-300 ease-out">
                <div className="relative w-full h-12 rounded-md border border-black/8 bg-white shadow-xl overflow-hidden">
                  <img
                    alt="component preview"
                    loading="lazy"
                    className="w-full h-full object-cover"
                    src="https://storage.knmstudio.com/images/component-previews/other/testimonials-marquee.webp"
                  />
                </div>
              </div>
  
              {/* Second Card */}
              <div className="p-1 rounded-lg bg-white border border-black/8 shadow-lg w-[100px] group relative overflow-hidden transform rotate-3 -translate-y-6 hover:rotate-0 hover:translate-y-0 transition-transform duration-300 ease-out">
                <div className="relative w-full h-16 rounded-md border border-black/8 bg-white shadow-xl overflow-hidden">
                  <img
                    alt="component preview"
                    loading="lazy"
                    className="w-full h-full object-cover"
                    src="https://storage.knmstudio.com/images/component-previews/cta/cta-links.webp"
                  />
                </div>
              </div>
  
              {/* Third Card (Optional) */}
              <div className="p-1 rounded-lg bg-white border border-black/8 shadow-lg w-[100px] group relative overflow-hidden transform rotate-6 -translate-y-3 hover:rotate-0 hover:translate-y-0 transition-transform duration-300 ease-out">
                <div className="relative w-full h-16 rounded-md border border-black/8 bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl overflow-hidden flex items-center justify-center">
                  <div className="text-xs text-gray-400 font-medium">More...</div>
                </div>
              </div>
            </div>
          </div>
                </article>
        </div>
      </div>
    );
  }`,
    },
  },
};
