import React from 'react';

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$1,200",
      period: "/mo",
      subtitle: "Freelancers, new studios",
      features: [
        "Custom one-page Framer site",
        "Basic branding package",
        "Mobile-friendly responsive design",
        "Fast turnaround",
        "Light content guidance",
        "Email support"
      ],
      isPopular: false,
      buttonStyle: "outline"
    },
    {
      name: "Growth",
      price: "$2,500",
      period: "/mo", 
      subtitle: "Growing teams & businesses",
      features: [
        "Multi-page Framer website",
        "Complete brand identity design",
        "SEO-ready site structure",
        "Copywriting assistance (light)",
        "CMS integration (Framer or custom)",
        "Priority email support"
      ],
      isPopular: true,
      buttonStyle: "solid"
    },
    {
      name: "Studio+",
      price: "$5,000",
      period: "/mo",
      subtitle: "Established studios & agencies",
      features: [
        "Fully custom website",
        "Advanced web development",
        "Comprehensive brand system",
        "SEO strategy & keyword planning",
        "Ongoing design & tech support",
        "Team training for CMS and updates"
      ],
      isPopular: false,
      buttonStyle: "outline"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Flexible Pricing for Every Stage
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Whether you're just starting out or scaling up, we offer plans<br className="hidden sm:block" />
            that match your pace — with no hidden fees, ever
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 lg:p-10 transition-all duration-300 ${
                plan.isPopular
                  ? 'border-2 border-red-300 shadow-xl lg:scale-105 lg:-mt-4'
                  : 'border border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-red-400 to-pink-400 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    POPULAR
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                
                {/* Price */}
                <div className="flex items-baseline mb-3">
                  <span className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xl lg:text-2xl text-gray-600 ml-1 font-medium">
                    {plan.period}
                  </span>
                </div>
                
                {/* Subtitle */}
                <p className="text-gray-600 text-base font-medium">
                  {plan.subtitle}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center mt-0.5">
                      <svg 
                        className="w-3 h-3 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-base leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-auto">
                {plan.buttonStyle === 'solid' ? (
                  <button className="w-full bg-gray-900 text-white py-4 px-6 rounded-full font-medium text-base transition-all duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 flex items-center justify-center gap-2">
                    Get Started
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </button>
                ) : (
                  <button className="w-full bg-white border border-gray-300 text-gray-900 py-4 px-6 rounded-full font-medium text-base transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center justify-center gap-2">
                    Get Started
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
