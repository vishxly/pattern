import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import Pricing from "@/lib/blocks/components/pricing/pricing5";

export const pricing5Registry: LandingComponentGroup = {
  title: "Blueprint: Your Success Plan",
  description: "A landing page showcasing three pricing tiers for a component library with smooth animations and clear feature comparisons.",
  category: "Pricing",
  variants: {
    default: {
      title: "Blueprint: Your Success Plan",
      description: "A landing page showcasing three pricing tiers for a component library with smooth animations and clear feature comparisons.",
      component: Pricing,
      image: "/images/blocks/pricing/pricing5.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Pricing+Component",
      code: `'use client'; // Required for Framer Motion

import React from "react";
import Link from "next/link";
import { motion, useInView, Variants } from 'framer-motion';

// --- Data for the pricing tiers ---
// Moving data outside the component makes it cleaner and easier to manage.
const pricingTiers = [
    {
        name: "Launchpad",
        description: "For individuals & startups testing out an idea.",
        price: "$29",
        isHighlighted: false,
        accentColor: "border-gray-300 dark:border-gray-700",
        cta: { text: "Start for Free", link: "/signup" },
        features: [
            "Essential UI Component Library",
            "Figma Design System Access",
            "Community Support via Discord",
            "Standard Documentation",
        ],
    },
    {
        name: "Accelerator",
        description: "For growing teams building for production.",
        price: "$79",
        isHighlighted: true,
        accentColor: "border-indigo-500",
        cta: { text: "Choose Plan", link: "/signup" },
        features: [
            "Everything in Launchpad, plus:",
            "Full Component & Template Library",
            "Advanced Theming Capabilities",
            "24-Hour Priority Support SLA",
            "Private Discord Channels",
            "Early Access to New Features",
        ],
    },
    {
        name: "Catalyst",
        description: "For large organizations requiring scale.",
        price: "Custom",
        isHighlighted: false,
        accentColor: "border-gray-300 dark:border-gray-700",
        cta: { text: "Contact Sales", link: "/contact" },
        features: [
            "Everything in Accelerator, plus:",
            "Bespoke Component & System Design",
            "Dedicated Account Manager",
            "Team Onboarding & Training",
            "Performance & Audit Reports",
        ],
    },
];

// --- Reusable Animation Variants ---
const FADE_IN_UP: Variants = {
    hidden: { 
        opacity: 0, 
        y: 20 
    },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.6, 
            ease: "easeOut" 
        } 
    },
};

const Pricing = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div ref={ref} className="py-24 sm:py-32 bg-white dark:bg-black">
            <motion.div 
                className="max-w-7xl mx-auto px-6 lg:px-8"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                }}
            >
                <div className="text-center">
                    <motion.h2 
                        variants={FADE_IN_UP} 
                        className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white"
                    >
                        The Blueprint for Your Success
                    </motion.h2>
                    <motion.p 
                        variants={FADE_IN_UP} 
                        className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Find the perfect plan to accelerate your projects, designed for every stage of your growth from solo creator to enterprise team.
                    </motion.p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {pricingTiers.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={FADE_IN_UP}
                            whileHover={{ y: -8, scale: 1.03, transition: { type: 'spring', stiffness: 300 }}}
                            className={\`relative flex flex-col h-full rounded-2xl p-8 border \${plan.isHighlighted ? 'border-indigo-500 shadow-2xl shadow-indigo-500/10' : 'border-gray-200 dark:border-gray-800'} bg-gray-50 dark:bg-gray-900/50 border-t-4 \${plan.accentColor}\`}
                        >
                            {plan.isHighlighted && (
                                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center rounded-full bg-indigo-100 dark:bg-indigo-900 px-4 py-1 text-sm font-medium text-indigo-700 dark:text-indigo-300">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="flex-1 flex flex-col">
                                <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">{plan.name}</h3>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{plan.description}</p>
                                
                                <div className="mt-6 flex items-baseline gap-x-2">
                                     <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {plan.price}
                                    </span>
                                    {plan.price !== "Custom" && <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">/ month</span>}
                                </div>

                                <motion.a
                                    href={plan.cta.link}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={\`mt-8 block rounded-md py-3 px-4 text-center text-sm font-semibold transition-colors \${plan.isHighlighted ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-700'}\`}
                                >
                                    {plan.cta.text}
                                </motion.a>

                                <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex gap-x-3 items-center">
                                            <svg className={\`h-6 w-5 flex-none \${plan.isHighlighted ? 'text-indigo-600' : 'text-gray-400'}\`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Pricing;
`,
    },
  },
};
