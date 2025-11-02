import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import InteractivePricing from "@/lib/blocks/components/showcase/showcase3";

export const showcase3Registry: LandingComponentGroup = {
  title: "ScaleUp Pricing",
  description: "An interactive pricing page with animated cards, monthly/yearly toggle, and feature highlighting for various plans.",
  category: "Showcase",
  variants: {
    default: {
      title: "ScaleUp Pricing",
      description: "An interactive pricing page with animated cards, monthly/yearly toggle, and feature highlighting for various plans.",
      component: InteractivePricing,
      image: "/images/blocks/landing/showcase3.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Landing+Page",
      code: `'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the structure for a single pricing plan
interface Plan {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  primary?: boolean; // To highlight a specific plan
  ctaText?: string;
}

// Props for the entire pricing section component
interface InteractivePricingProps {
  plans?: Plan[];
  title?: string;
  subtitle?: string;
  yearlyDiscountText?: string;
  onPlanSelect?: (planId: string) => void;
}

// Default data if no props are provided
const defaultPlans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "For individuals and small teams just getting started.",
    price: { monthly: 29, yearly: 290 },
    features: [
      "10 Projects",
      "5GB Storage",
      "Basic Analytics",
      "Community Support",
    ],
    ctaText: "Get Started",
  },
  {
    id: "pro",
    name: "Pro",
    description: "For growing businesses that need more power and features.",
    price: { monthly: 79, yearly: 790 },
    features: [
      "Unlimited Projects",
      "50GB Storage",
      "Advanced Analytics",
      "Priority Email Support",
      "Custom Integrations",
    ],
    primary: true,
    ctaText: "Upgrade to Pro",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations with advanced security and support needs.",
    price: { monthly: 149, yearly: 1490 },
    features: [
      "All Pro Features",
      "Unlimited Storage",
      "Dedicated Account Manager",
      "SSO & Advanced Security",
      "24/7 Phone Support",
    ],
    ctaText: "Contact Sales",
  },
];

const CheckIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

// The main component
export default function InteractivePricing({
  plans = defaultPlans,
  title = "Flexible pricing for teams of all sizes",
  subtitle = "PRICING",
  yearlyDiscountText = "Save 20%",
  onPlanSelect,
}: InteractivePricingProps) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative bg-gray-50 dark:bg-gray-950 py-24 md:py-32 overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-gray-200/50 dark:bg-gray-800/50 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
            {subtitle}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose a plan that scales with your business. All plans include our core features and dedicated support.
          </p>
        </motion.div>

        {/* Pricing Toggle Switch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={\`font-medium text-gray-700 dark:text-gray-300 \${!isYearly ? 'text-blue-600 dark:text-blue-400' : ''}\`}>
            Monthly
          </span>
          <div
            onClick={() => setIsYearly(!isYearly)}
            className={\`relative flex items-center w-14 h-8 rounded-full cursor-pointer transition-colors duration-300 \${
              isYearly ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-700"
            }\`}
          >
            <motion.div
              className="absolute w-6 h-6 bg-white rounded-full shadow-md"
              layout
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
              style={{ left: isYearly ? 'auto' : '4px', right: isYearly ? '4px' : 'auto' }}
            />
          </div>
          <span className={\`font-medium text-gray-700 dark:text-gray-300 \${isYearly ? 'text-blue-600 dark:text-blue-400' : ''}\`}>
            Yearly
          </span>
          {yearlyDiscountText && (
             <div className="hidden sm:inline-block ml-2 px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900/50 rounded-full">
               {yearlyDiscountText}
            </div>
          )}
        </motion.div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className={\`relative flex flex-col h-full rounded-2xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 \${
                plan.primary
                  ? "border-blue-500/50 dark:border-blue-500/50 shadow-lg bg-white/50 dark:bg-gray-900/50"
                  : "border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80"
              }\`}
            >
              {plan.primary && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-8 text-left h-full flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{plan.description}</p>
                
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                    \${isYearly ? plan.price.yearly / 12 : plan.price.monthly}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">/ month</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={isYearly ? "yearly" : "monthly"}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-gray-600 dark:text-gray-400 mb-8 h-4"
                  >
                    {isYearly && \`Billed as $\${plan.price.yearly} per year.\`}
                  </motion.div>
                </AnimatePresence>

                <ul className="space-y-4 mb-8 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onPlanSelect && onPlanSelect(plan.id)}
                  className={\`mt-auto w-full px-6 py-3 rounded-lg font-semibold text-lg transition-transform duration-300 hover:scale-105 \${
                    plan.primary
                      ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                  }\`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,
    },
  },
};
