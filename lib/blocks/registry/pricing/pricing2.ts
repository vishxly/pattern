import { LandingComponentGroup } from "@/lib/blocks/landing-registry";

import PricingSection from "../../components/pricing/pricing2";

export const pricing2Registry: LandingComponentGroup = {
  title: "Pricing",
  description: "Pricing section for your landing page.",
  category: "Pricing",
  variants: {
    default: {
      title: "Pricing",
      description: "Pricing section for your landing page.",
      component: PricingSection,
      image: "/images/blocks/pricing/pricing2.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 dark:bg-black">
      <section id="pricing" className="flex flex-col gap-y-10 sm:gap-y-13 lg:gap-y-18 items-center max-w-5xl w-full">
        <div className="flex flex-col gap-y-5 sm:gap-y-6 items-center w-full">
          <div className="flex border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 sm:px-3.5 py-2 gap-x-2 items-center">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-base sm:text-xl text-black/40 dark:text-white/40" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="6"></circle>
              <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
              <path d="M7 6h1v4"></path>
              <path d="m16.71 13.88.7.71-2.82 2.82"></path>
            </svg>
            <span className="text-xs sm:text-sm text-black dark:text-white">Pricing</span>
          </div>
          <div className="flex flex-col gap-y-5 items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-medium text-center max-w-3xl leading-[1.1] dark:text-white">
              Choose the best plan for <span className="italic font-serif">your needs?</span>
            </h2>
            <div className="flex flex-col gap-y-0.5 items-center">
              <p className="text-base sm:text-lg text-slate-400 dark:text-slate-300 text-center max-w-xl">
                Find the right plan for your needs, with flexible choices and transparent pricing details.
              </p>
              <p className="text-sm sm:text-base text-slate-300 dark:text-slate-400 text-center max-w-xl">
                No taxes included.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-[930px]:flex-row gap-y-5 gap-x-2 lg:gap-x-6 w-full items-center min-[930px]:items-stretch justify-center">
          {/* Free Plan */}
          <div className="p-1.5 flex-1 max-w-103 w-full">
            <article className="h-full bg-[#f0f0f0] dark:bg-neutral-800 flex-1 rounded-[28px] border border-black/12 dark:border-white/12 p-2.5 pb-6 max-w-100 w-full flex flex-col gap-y-4">
              <div className="px-5 py-4.5 bg-white/80 dark:bg-neutral-900/80 border border-neutral-300 dark:border-neutral-600 rounded-[22px] flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="italic font-serif text-4xl dark:text-white">Free</h3>
                  </div>
                  <p className="text-base text-black/50 dark:text-white/50">Best for getting started.</p>
                </div>
                <div className="h-px w-full from-black/8 to-[#f9f9f9] dark:from-white/8 dark:to-neutral-900 bg-radial"></div>
                <p className="my-2">
                  <span className="font-medium text-[3.375rem] leading-none text-black dark:text-white">$0</span>
                  <span className="text-black/50 dark:text-white/50 text-lg ml-0.5 mr-1.5 leading-none">/</span>
                  <span className="text-black/50 dark:text-white/50 text-lg leading-none">month</span>
                </p>
                <div className="flex">
                  <a className="p-0.75 rounded-[10px] relative cursor-pointer transition-all duration-200 ease-in-out active:scale-95 shadow-[0px_0px_0.224852px_0.224852px_rgba(0,0,0,0.07),_0px_0px_0.224852px_0.674556px_rgba(0,0,0,0.05),_0px_2.69822px_2.92308px_-1.34911px_rgba(0,0,0,0.25),_0px_0.899408px_3.59763px_0.899408px_rgba(0,0,0,0.12),_inset_-4px_-5px_2px_rgba(39,39,39,0.8)] dark:shadow-[0px_0px_0.224852px_0.224852px_rgba(255,255,255,0.07),_0px_0px_0.224852px_0.674556px_rgba(255,255,255,0.05),_0px_2.69822px_2.92308px_-1.34911px_rgba(255,255,255,0.25),_0px_0.899408px_3.59763px_0.899408px_rgba(255,255,255,0.12),_inset_-4px_-5px_2px_rgba(220,220,220,0.8)] bg-[#545454] dark:bg-[#ababab] w-full" href="/dashboard/builder">
                    <div className="py-1.5 px-3.5 rounded-lg font-medium text-sm hover:opacity-80 transition-opacity duration-200 ease-in-out bg-[#1e1e1e] dark:bg-[#e1e1e1] text-white dark:text-black inset-shadow-[-8px_-8px_9px_#90909020] dark:inset-shadow-[-8px_-8px_9px_#6f6f6f20] flex items-center justify-center gap-x-1.5">
                      <span>Get started</span>
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="px-5 flex flex-col gap-y-7.5 h-full">
                <div className="flex flex-col gap-y-3">
                  <h4 className="font-medium text-xl text-black dark:text-white">Features</h4>
                  <ul className="flex flex-col gap-y-1.5">
                    <li className="flex items-center gap-x-3">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-lg text-[#909090] dark:text-[#6f6f6f]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="text-black/80 dark:text-white/80">Up to 6 sections per page</span>
                    </li>
                    <li className="flex items-center gap-x-3">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-lg text-[#909090] dark:text-[#6f6f6f]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="text-black/80 dark:text-white/80">Free hosting, on go.pagey.xyz</span>
                    </li>
                    <li className="flex items-center gap-x-3">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-lg text-[#909090] dark:text-[#6f6f6f]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="text-black/80 dark:text-white/80">3 pre-defined themes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          {/* Basic Plan */}
          <div className="flex-1 max-w-103 w-full rounded-[32px] p-1.5" style={{ background: 'linear-gradient(129deg, rgba(187,179,255,0.7) 0%, rgba(221,185,221,0.7) 26%, rgba(251,217,230,0.7) 48%, rgba(249,215,229,0.7) 59%, rgba(255,202,145,0.7) 100%)' }}>
            <article className="h-full bg-[#f0f0f0] dark:bg-neutral-800 flex-1 rounded-[28px] border border-neutral-300 dark:border-neutral-600 p-2.5 pb-6 max-w-100 w-full flex flex-col gap-y-4">
              <div className="px-5 py-4.5 bg-white/80 dark:bg-neutral-900/80 border border-neutral-300 dark:border-neutral-600 rounded-[22px] flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="italic font-serif text-4xl dark:text-white">Basic</h3>
                    <div className="rounded-lg mt-4 flex items-center justify-center p-[1.5px]" style={{ background: 'linear-gradient(160deg, rgba(187,179,255,0.8) 0%, rgba(221,185,221,0.8) 26%, rgba(251,217,230,0.8) 48%, rgba(249,215,229,0.8) 59%, rgba(255,202,145,0.8) 100%)' }}>
                      <div className="rounded-[7px] py-1.5 px-3.5 bg-white dark:bg-neutral-900 text-black dark:text-white text-sm">
                        <div className="animated-gradient-text" style={{ animationDuration: '3.5s' }}>Popular</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-base text-black/50 dark:text-white/50">Unlock more features.</p>
                </div>
                <div className="h-px w-full from-black/8 to-[#f9f9f9] dark:from-white/8 dark:to-neutral-900 bg-radial"></div>
                <p className="my-2">
                  <span className="font-medium text-[3.375rem] leading-none text-black dark:text-white">$9</span>
                  <span className="text-black/50 dark:text-white/50 text-lg ml-0.5 mr-1.5 leading-none">/</span>
                  <span className="text-black/50 dark:text-white/50 text-lg leading-none">month</span>
                </p>
                <div className="flex">
                  <a className="p-0.75 rounded-[10px] relative cursor-pointer transition-all duration-200 ease-in-out active:scale-95 shadow-[0px_0px_0.224852px_0.224852px_rgba(106,94,200,0.07),_0px_0px_0.224852px_0.674556px_rgba(106,94,200,0.05),_0px_0.899408px_3.59763px_0.899408px_rgba(106,94,200,0.12),_inset_0px_8px_12.1px_rgba(186,177,255,1)] dark:shadow-[0px_0px_0.224852px_0.224852px_rgba(138,123,255,0.07),_0px_0px_0.224852px_0.674556px_rgba(138,123,255,0.05),_0px_0.899408px_3.59763px_0.899408px_rgba(138,123,255,0.12),_inset_0px_8px_12.1px_rgba(138,123,255,0.6)] bg-[#8A7BFF] w-full" href="/dashboard/profile#subscription">
                    <div className="py-1.5 px-3.5 rounded-lg font-medium text-sm hover:opacity-80 transition-opacity duration-200 ease-in-out bg-[#8A7BFF40] text-white inset-shadow-[-8px_-8px_9px_#6A5EC820] flex items-center justify-center gap-x-1.5">
                      <span>Get Basic</span>
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="px-5 flex flex-col gap-y-7.5 h-full">
                <div className="flex flex-col gap-y-3">
                  <h4 className="font-medium text-xl text-black dark:text-white">Features</h4>
                  <ul className="flex flex-col gap-y-1.5">
                    <li className="flex items-center gap-x-3">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-lg text-[#909090] dark:text-[#6f6f6f]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="text-black/80 dark:text-white/80">Up to 9 sections</span>
                    </li>
                    <li className="flex items-center gap-x-3">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-lg text-[#909090] dark:text-[#6f6f6f]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="text-black/80 dark:text-white/80">Remove "Made with" badge</span>
                    </li>
                    <li className="flex items-center gap-x-3">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-lg text-[#909090] dark:text-[#6f6f6f]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="text-black/80 dark:text-white/80">Custom subdomain</span>
                    </li>
                    <li className="flex items-center gap-x-3">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-lg text-[#909090] dark:text-[#6f6f6f]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="text-black/80 dark:text-white/80">More pre-defined themes</span>
                    </li>
                    <li className="flex items-center gap-x-3">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-lg text-[#909090] dark:text-[#6f6f6f]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="text-black/80 dark:text-white/80">AI Assistant</span>
                    </li>
                  </ul>
                </div>
                <p className="mt-auto text-sm text-black/30 dark:text-white/30">You can easily cancel anytime.</p>
              </div>
            </article>
          </div>

          {/* Pro Plan */}
          <div className="flex-1 max-w-103 w-full p-1.5">
            <article className="h-full bg-[#f0f0f0] dark:bg-neutral-800 flex-1 rounded-[28px] border border-neutral-200 dark:border-neutral-700 p-2.5 pb-6 max-w-100 w-full flex flex-col gap-y-4">
              <div className="px-5 py-4.5 bg-white/80 dark:bg-neutral-900/80 border border-neutral-300 dark:border-neutral-600 rounded-[22px] flex flex-col gap-y-4" style={{ background: 'linear-gradient(54.14deg, rgba(255,255,255,0.6) 35.07%, rgba(219,228,247,0.6) 58.64%, rgba(225,192,242,0.6) 83.73%, rgba(255,208,234,0.6) 97.42%)' }}>
                <div className="flex flex-col gap-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="italic font-serif text-4xl dark:text-white">Pro</h3>
                  </div>
                  <p className="text-base text-black/50 dark:text-white/50">For the best exposure.</p>
                </div>
                <div className="h-px w-full from-black/8 to-[#f9f9f9] dark:from-white/8 dark:to-neutral-900 bg-radial"></div>
                <p className="my-2">
                  <span className="font-medium text-[3.375rem] leading-none text-black dark:text-white">$?</span>
                  <span className="text-black/50 dark:text-white/50 text-lg ml-0.5 mr-1.5 leading-none">/</span>
                  <span className="text-black/50 dark:text-white/50 text-lg leading-none">month</span>
                </p>
                <div className="flex">
                  <a className="p-0.75 rounded-[10px] relative cursor-pointer transition-all duration-200 ease-in-out active:scale-95 shadow-[0px_0px_0.224852px_0.224852px_rgba(0,0,0,0.07),_0px_0px_0.224852px_0.674556px_rgba(0,0,0,0.05),_0px_2.69822px_2.92308px_-1.34911px_rgba(0,0,0,0.25),_0px_0.899408px_3.59763px_0.899408px_rgba(0,0,0,0.12),_inset_-4px_-5px_2px_rgba(39,39,39,0.8)] dark:shadow-[0px_0px_0.224852px_0.224852px_rgba(255,255,255,0.07),_0px_0px_0.224852px_0.674556px_rgba(255,255,255,0.05),_0px_2.69822px_2.92308px_-1.34911px_rgba(255,255,255,0.25),_0px_0.899408px_3.59763px_0.899408px_rgba(255,255,255,0.12),_inset_-4px_-5px_2px_rgba(220,220,220,0.8)] bg-[#545454] dark:bg-[#ababab] w-full" href="/dashboard/profile#subscription">
                    <div className="py-1.5 px-3.5 rounded-lg font-medium text-sm hover:opacity-80 transition-opacity duration-200 ease-in-out bg-[#1e1e1e] dark:bg-[#e1e1e1] text-white dark:text-black inset-shadow-[-8px_-8px_9px_#90909020] dark:inset-shadow-[-8px_-8px_9px_#6f6f6f20] flex items-center justify-center gap-x-1.5">
                      <span>Upgrade plan</span>
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="px-5 flex flex-col gap-y-7.5 h-full">
                <div className="flex flex-col gap-y-3">
                  <h4 className="font-medium text-xl text-black dark:text-white">Features</h4>
                  <ul className="flex flex-col gap-y-1.5">
                    <li className="flex items-center gap-x-3">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-lg text-[#909090] dark:text-[#6f6f6f]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="text-black/80 dark:text-white/80">Coming soon...</span>
                    </li>
                  </ul>
                </div>
                <p className="mt-auto text-sm text-black/30 dark:text-white/30">You can easily cancel anytime.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;`,
    },
  },
};
