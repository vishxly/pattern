import React from "react";
import Link from "next/link";

const Pricing = () => {
  return (
    <div className="py-24 px-4 max-w-7xl mx-auto bg-white dark:bg-black">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
          <span className="text-blue-600 dark:text-blue-400">Flexible</span>{" "}
          Plans Built for Growth
        </h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Start your journey with the right plan. Scale seamlessly as your
          business grows with our comprehensive development tools and resources.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 items-center">
        {pricingPlans.map((plan) => (
          <div
            className={`relative rounded-[37px] flex flex-col gap-3 p-4 ${
              plan.isHighlighted
                ? "border border-white dark:border-slate-800 bg-gradient-to-b from-[#4F46E5] via-[#3B82F6] to-[#1D4ED8] dark:from-[#3B82F6] dark:via-[#1E40AF] dark:to-[#1E3A8A]"
                : "bg-slate-200 dark:bg-slate-800"
            }`}
          >
            <div className="space-y-8 p-4 bg-slate-50 dark:bg-slate-950 rounded-[28px] shadow-[0px_95px_27px_0px_rgba(0,0,0,0.00),_0px_61px_24px_0px_rgba(0,0,0,0.03),_0px_34px_21px_0px_rgba(0,0,0,0.11),_0px_15px_15px_0px_rgba(0,0,0,0.19),_0px_4px_8px_0px_rgba(0,0,0,0.22)] dark:shadow-[0px_95px_27px_0px_rgba(255,255,255,0.00),_0px_61px_24px_0px_rgba(255,255,255,0.02),_0px_34px_21px_0px_rgba(255,255,255,0.08),_0px_15px_15px_0px_rgba(255,255,255,0.15),_0px_4px_8px_0px_rgba(255,255,255,0.18)] pb-20 px-4">
              <div className="flex flex-col">
                <h3 className="text-[18px] w-fit font-medium text-slate-900 dark:text-slate-100 rounded-[9999px] border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 flex justify-center items-center px-[14.32px] py-1">
                  {plan.name}
                </h3>
                <div className="mt-2 flex items-baseline text-black dark:text-white">
                  <span className="text-[40px] font-bold">{plan.price}</span>
                  <span className="ml-1 text-slate-500 dark:text-slate-400">
                    /month
                  </span>
                </div>
              </div>
              <Link
                href={plan.ctaButton.link}
                className="relative cursor-pointer hover:-translate-y-0.5 duration-200 inline-flex items-center justify-center rounded-[6px] bg-[linear-gradient(181deg,_#374151_18.12%,_#111827_99.57%)] dark:bg-[linear-gradient(181deg,_#64748B_18.12%,_#0F172A_99.57%)] shadow-[0px_4px_8px_0px_rgba(3,_7,_18,_0.06),_0px_2px_4px_0px_rgba(3,_7,_18,_0.06), 0px_0px_0px_1px_rgba(3,_7,_18,_0.08),_0px_1px_1px_2px_rgba(255,_255,_255,_0.40)_inset, 0px_-1px_5px_2px_rgba(255,_255,_255,_0.40)_inset] w-full py-4 px-6 bg-slate-900 dark:bg-slate-800 text-white text-md font-medium shadow-sm hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
              >
                {plan.ctaButton.text}
              </Link>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      />
                    </svg>
                    <span className="text-[14px] text-slate-600 dark:text-slate-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const pricingPlans = [
  {
    name: "Essential",
    price: "$29",
    isHighlighted: false,
    ctaButton: { text: "Begin Journey", link: "/signup" },
    features: [
      "Core development toolkit access",
      "Comprehensive learning resources",
      "Active community support",
      "Ready-to-use templates & snippets",
      "Regular feature enhancements",
    ],
  },
  {
    name: "Growth",
    price: "$79",
    isHighlighted: true,
    ctaButton: { text: "Accelerate Growth", link: "/signup" },
    features: [
      "Complete development ecosystem",
      "Expert-level tutorials & masterclasses",
      "Direct access to support team",
      "Continuous updates & new releases",
      "Advanced customization options",
      "Production-ready code libraries",
      "Exclusive preview of upcoming tools",
      "Full commercial deployment rights",
      "Private developer community access",
    ],
  },
  {
    name: "Scale",
    price: "$299",
    isHighlighted: false,
    ctaButton: { text: "Let's Connect", link: "/contact" },
    features: [
      "Everything in Growth, plus:",
      "Personal technical consultation",
      "Multi-user workspace & permissions",
      "Tailored component development",
      "Brand-customizable solutions",
    ],
  },
];

export default Pricing;
