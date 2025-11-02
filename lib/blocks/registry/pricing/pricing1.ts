import { LandingComponentGroup } from "@/lib/blocks/landing-registry";
import Pricing from "../../components/pricing/pricing1";

export const pricing1Registry: LandingComponentGroup = {
  title: "Glass Pricing",
  description: "Glass pricing component",
  category: "Pricing",
  variants: {
    default: {
      title: "Glass Pricing",
      description: "Glass pricing component",
      component: Pricing,
      image: "/images/blocks/pricing/pricing1.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Footer+Section",
      code: `'use client';

import React, { useState } from 'react';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      title: 'Free',
      subtitle: 'Free Plan',
      price: { monthly: 0, yearly: 0 },
      features: [
        'Send up to 2 transfers per month',
        'Basic transaction history',
        'Email support',
        'Limited currency support (USD, EUR, GBP)',
        'Basic security features',
      ],
      popular: false,
    },
    {
      title: '$9.99/m',
      subtitle: 'Standard Plan',
      price: { monthly: 9.99, yearly: 7.99 },
      features: [
        'Unlimited transfers',
        'Transaction history with export options',
        'Priority email support',
        'Expanded currency support',
        'Advanced security features',
      ],
      popular: true,
    },
    {
      title: '$19.99/m',
      subtitle: 'Pro Plan',
      price: { monthly: 19.99, yearly: 15.99 },
      features: [
        'Unlimited transfers with priority processing',
        'Comprehensive transaction analytics',
        '24/7 priority support',
        'Full currency support',
        'Enhanced security features',
      ],
      popular: false,
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center px-4 py-20">
      {/* BACKGROUND PRICING TEXT */}
      <div className="absolute top-10 w-full text-center z-0 pointer-events-none select-none">
        <h1 className="text-[10rem] sm:text-[12rem] lg:text-[16rem] font-bold text-white/5 leading-none tracking-tight">
          Pricing
        </h1>
      </div>

      {/* FOREGROUND TITLE */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 z-10 tracking-tight">
        Pricing
      </h2>

      {/* PRICING CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full z-10 mb-16">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative group"
          >
            {/* Glass Card */}
            <div className="relative h-full rounded-3xl overflow-hidden backdrop-blur-xl bg-white/[0.03] border border-white/10 p-8 flex flex-col transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20">
              
              {/* Subtle inner glow on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-3xl font-semibold text-white mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-sm text-white/60 mb-6">{plan.subtitle}</p>
                </div>

                {/* Features */}
                <div className="flex-1 mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3 text-sm text-white/80">
                        <span className="text-white/60 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <button
                  className={\`w-full py-3 rounded-full font-medium transition-all duration-300 \${
                    plan.popular
                      ? 'bg-white text-black hover:bg-white/90'
                      : 'bg-white/10 text-white border border-white/10 hover:bg-white/15 hover:border-white/20'
                  }\`}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* TOGGLE SWITCH */}
      <div className="z-10 flex items-center space-x-3">
        <button
          onClick={() => setIsYearly(!isYearly)}
          className="relative w-12 h-7 rounded-full bg-white/10 border border-white/10 flex items-center px-1 cursor-pointer transition-all hover:bg-white/15"
        >
          <div 
            className={\`w-5 h-5 rounded-full bg-white shadow-lg transition-transform duration-300 \${
              isYearly ? 'translate-x-5' : 'translate-x-0'
            }\`} 
          />
        </button>
        <span className="text-sm text-white/60">Billed Yearly</span>
      </div>
    </div>
  );
}`,
    },
  },
};
