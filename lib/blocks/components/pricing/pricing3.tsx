import React from "react";

// PricingCard Component
interface PricingCardProps {
  label?: string;
  plan: string;
  description: string;
  price: string | number;
  period?: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  label,
  plan,
  description,
  price,
  period = "/month",
  features,
  isPopular = false,
  buttonText = "Choose Plan",
}) => {
  return (
    <div
      className={`relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
        isPopular
          ? "shadow-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-300/30"
          : "shadow-xl hover:bg-white/15"
      }`}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </div>
        </div>
      )}

      {/* Plan label */}
      {label && (
        <div className="text-sm text-gray-600 mb-3 font-medium tracking-wide uppercase">
          {label}
        </div>
      )}

      {/* Plan name */}
      <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
        {plan}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-8 text-base leading-relaxed">
        {description}
      </p>

      {/* Price */}
      <div className="flex items-baseline mb-8">
        <span className="text-5xl font-bold text-gray-900 tracking-tight">
          ${price}
        </span>
        <span className="text-gray-500 ml-2 text-base font-medium">
          {period}
        </span>
      </div>

      {/* CTA Button */}
      <div className="mb-8">
        <button
          className={`
    w-full px-6 py-4 rounded-2xl font-medium text-white
    transition-all duration-300 ease-in-out
    hover:scale-[1.03] active:scale-95
    focus:outline-none focus:ring-2 focus:ring-offset-2
    shadow-md
    ${
      isPopular
        ? "bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 hover:brightness-110 focus:ring-purple-300 shadow-purple-400/40"
        : "bg-gradient-to-br from-indigo-500 via-purple-400 to-indigo-600 hover:brightness-110 focus:ring-indigo-300 shadow-indigo-400/40"
    }
  `}
        >
          {buttonText}
        </button>
      </div>

      {/* Features */}
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mt-0.5">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-gray-700 text-base leading-relaxed font-medium">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Pricing Component
export default function Pricing() {
  const pricingPlans = [
    {
      label: "Start simple",
      plan: "Starter Plan",
      description: "Perfect for small teams starting out.",
      price: "15",
      features: [
        "All features from the free plan",
        "Access to core tools",
        "Basic reporting & insights",
        "Up to 10 individual users",
        "200GB storage per user",
        "Standard email and chat support",
      ],
    },
    {
      label: "Growing teams",
      plan: "Professional Plan",
      description: "Built for growing teams that move fast.",
      price: "29",
      isPopular: true,
      features: [
        "Everything in the Starter Plan",
        "Full access to business tools",
        "Enhanced analytics and reports",
        "Up to 20 individual users",
        "250GB storage per user",
        "Standard email and chat support",
      ],
    },
    {
      label: "Full control",
      plan: "Enterprise Plan",
      description: "Maximum power, zero limits.",
      price: "59",
      features: [
        "Everything in the Pro Plan",
        "Access to all premium features",
        "Advanced reporting tools",
        "Support for 100+ users",
        "300GB storage per user",
        "Priority email and chat support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-8">
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
              Our Pricing
            </span>
          </div>

          {/* Main heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-2 tracking-tight leading-tight">
              Flexible Plans Built Carefully
            </h1>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              <span className="italic text-gray-600 font-light">for your</span>{" "}
              <span className="text-gray-900">Digital Future</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Find the right plan to easily trade, earn, and manage your digital
            assets safely.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`${
                index === 1 ? "lg:-mt-4" : "lg:mt-4"
              } transition-all duration-500`}
            >
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
