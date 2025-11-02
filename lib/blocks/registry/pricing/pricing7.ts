import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import PricingV2 from "@/lib/blocks/components/pricing/pricing7";

export const pricing7Registry: LandingComponentGroup = {
  title: "Simple Pricing Plans",
  description: "A clean, responsive pricing page showcasing three tiers with features, pricing, and CTAs.",
  category: "Pricing",
  variants: {
    default: {
      title: "Simple Pricing Plans",
      description: "A clean, responsive pricing page showcasing three tiers with features, pricing, and CTAs.",
      component: PricingV2,
      image: "/images/blocks/pricing/pricing7.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Pricing+Component",
      code: `import Link from "next/link";
import React from "react";

interface Price {
  amount: string;
  period?: string;
  originalAmount?: string;
}

interface Feature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface PricingTier {
  name: string;
  description: string;
  price: Price;
  features: Feature[];
  cta: {
    text: string;
    href: string;
    variant: "primary" | "secondary" | "outline";
  };
  popular?: boolean;
}

const PricingV2 = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0)_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_70%)]"></div>

        {/* Minimal grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: \`
                linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)
              \`,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        {/* Subtle corner accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gray-100 dark:from-gray-900 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-50 dark:from-gray-950 to-transparent opacity-50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Always know what you'll pay.
          </p>
        </div>

        {/* Small screen: Simple vertical layout */}
        <div className="block md:hidden max-w-sm mx-auto space-y-6">
          {pricingTiers.map((tier, index) => (
            <PricingCardV2 key={index} tier={tier} />
          ))}
        </div>

        {/* Large screen: Clean grid */}
        <div className="hidden md:block max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <PricingCardV2 key={index} tier={tier} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingCardV2 = ({ tier }: { tier: PricingTier }) => {
  return (
    <div
      className={\`relative group h-full transition-all duration-300 \${
        tier.popular
          ? "transform hover:scale-[1.02] hover:-translate-y-1"
          : "hover:translate-y-[-2px]"
      }\`}
    >
      <div
        className={\`relative h-full rounded-2xl p-8 transition-all duration-300 \${
          tier.popular
            ? "bg-gray-950 dark:bg-white text-white dark:text-gray-900 shadow-2xl ring-1 ring-gray-800 dark:ring-gray-200"
            : "bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700"
        }\`}
      >
        {/* Popular badge */}
        {tier.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-gray-800 dark:bg-white text-white dark:text-gray-900 text-sm font-medium px-4 py-1 rounded-full">
              Most Popular
            </span>
          </div>
        )}

        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="mb-6">
            <h3
              className={\`text-xl font-semibold mb-2 \${
                tier.popular
                  ? "text-white dark:text-gray-900"
                  : "text-gray-900 dark:text-white"
              }\`}
            >
              {tier.name}
            </h3>
            <p
              className={\`text-sm leading-relaxed \${
                tier.popular
                  ? "text-gray-300 dark:text-gray-600"
                  : "text-gray-600 dark:text-gray-400"
              }\`}
            >
              {tier.description}
            </p>
          </div>

          {/* Pricing */}
          <div className="mb-8">
            <div className="flex items-baseline gap-1 mb-1">
              {tier.price.originalAmount && (
                <span
                  className={\`text-lg line-through \${
                    tier.popular
                      ? "text-gray-400 dark:text-gray-500"
                      : "text-gray-400 dark:text-gray-500"
                  }\`}
                >
                  {tier.price.originalAmount}
                </span>
              )}
              <span
                className={\`text-4xl font-bold \${
                  tier.popular
                    ? "text-white dark:text-gray-900"
                    : "text-gray-900 dark:text-white"
                }\`}
              >
                {tier.price.amount}
              </span>
              {tier.price.period && (
                <span
                  className={\`text-lg \${
                    tier.popular
                      ? "text-gray-300 dark:text-gray-600"
                      : "text-gray-600 dark:text-gray-400"
                  }\`}
                >
                  /{tier.price.period}
                </span>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="flex-grow mb-8">
            <ul className="space-y-3">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    {feature.included ? (
                      <div
                        className={\`w-5 h-5 rounded-full flex items-center justify-center \${
                          tier.popular
                            ? "bg-white dark:bg-gray-950"
                            : "bg-gray-950 dark:bg-white"
                        }\`}
                      >
                        <svg
                          className={\`w-3 h-3 \${
                            tier.popular
                              ? "text-gray-900 dark:text-white"
                              : "text-white dark:text-gray-900"
                          }\`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div
                        className={\`w-5 h-5 rounded-full flex items-center justify-center \${
                          tier.popular
                            ? "bg-gray-700 dark:bg-gray-300"
                            : "bg-gray-200 dark:bg-gray-700"
                        }\`}
                      >
                        <svg
                          className={\`w-3 h-3 \${
                            tier.popular
                              ? "text-gray-400 dark:text-gray-600"
                              : "text-gray-400 dark:text-gray-500"
                          }\`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <span
                    className={\`text-sm \${
                      feature.included
                        ? tier.popular
                          ? feature.highlight
                            ? "text-white dark:text-gray-900 font-medium"
                            : "text-gray-200 dark:text-gray-700"
                          : feature.highlight
                          ? "text-gray-900 dark:text-white font-medium"
                          : "text-gray-700 dark:text-gray-300"
                        : tier.popular
                        ? "text-gray-400 dark:text-gray-500"
                        : "text-gray-400 dark:text-gray-500"
                    }\`}
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <Link
            href={tier.cta.href}
            className={\`block w-full py-3 px-6 rounded-xl font-medium text-center transition-all duration-200 \${
              tier.cta.variant === "primary"
                ? tier.popular
                  ? "bg-white dark:bg-gray-950 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
                : tier.cta.variant === "secondary"
                ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                : \`border-2 transition-colors \${
                    tier.popular
                      ? "border-gray-600 dark:border-gray-400 text-gray-300 dark:text-gray-600 hover:border-gray-500 dark:hover:border-gray-300"
                      : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500"
                  }\`
            }\`}
          >
            {tier.cta.text}
          </Link>
        </div>
      </div>
    </div>
  );
};

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description:
      "Perfect for individuals and small projects just getting started.",
    price: {
      amount: "$0",
      period: "month",
    },
    features: [
      { text: "Up to 5 projects", included: true },
      { text: "Basic analytics", included: true },
      { text: "Community support", included: true },
      { text: "10GB storage", included: true },
      { text: "Advanced features", included: false },
      { text: "Priority support", included: false },
      { text: "Custom integrations", included: false },
    ],
    cta: {
      text: "Get Started",
      href: "#",
      variant: "outline",
    },
  },
  {
    name: "Professional",
    description: "Best for growing businesses and teams that need more power.",
    price: {
      amount: "$29",
      period: "month",
      originalAmount: "$49",
    },
    features: [
      { text: "Unlimited projects", included: true, highlight: true },
      { text: "Advanced analytics", included: true },
      { text: "Email & chat support", included: true },
      { text: "100GB storage", included: true },
      { text: "Advanced features", included: true, highlight: true },
      { text: "Team collaboration", included: true },
      { text: "Basic integrations", included: true },
    ],
    cta: {
      text: "Start Free Trial",
      href: "#",
      variant: "primary",
    },
    popular: true,
  },
  {
    name: "Enterprise",
    description:
      "Advanced features and dedicated support for large organizations.",
    price: {
      amount: "Custom",
      period: "",
    },
    features: [
      { text: "Everything in Professional", included: true, highlight: true },
      { text: "Dedicated account manager", included: true },
      { text: "24/7 phone support", included: true },
      { text: "Unlimited storage", included: true },
      { text: "Custom integrations", included: true, highlight: true },
      { text: "Advanced security", included: true },
      { text: "SLA guarantee", included: true },
    ],
    cta: {
      text: "Contact Sales",
      href: "#",
      variant: "secondary",
    },
  },
];

export default PricingV2;
`,
    },
  },
};
