import React from "react";
import { Star, Users, TrendingUp } from "lucide-react";
import PulseBorder from "../ui/pulse-border";

export default function PulseBorderDemo() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-md w-full ">
        <PulseBorder
          color="#fc6a30"
          variant="ripple"
          className="rounded-2xl"
          intensity={2}
          speed={1}
          width={2}
        >
          <div className=" rounded-2xl p-8 text-center backdrop-blur-sm border ">
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
              <Star className="w-8 h-8 text-black dark:text-white" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
              Premium Plan
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-slate-400 mb-6 leading-relaxed">
              Unlock advanced features with our premium subscription. Get
              unlimited access to all tools and priority support.
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700 dark:text-slate-300 flex items-center">
                  <Users className="w-4 h-4 mr-2 text-black dark:text-blue-400" />
                  Team Members
                </span>
                <span className="text-black dark:text-white font-medium">
                  Unlimited
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700 dark:text-slate-300 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2 text-black dark:text-green-400" />
                  Analytics
                </span>
                <span className="text-black dark:text-white font-medium">
                  Advanced
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700 dark:text-slate-300 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-black dark:text-yellow-400" />
                  Support
                </span>
                <span className="text-black dark:text-white font-medium">
                  24/7 Priority
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-black dark:text-white">
                  $29
                </span>
                <span className="text-gray-600 dark:text-slate-400 ml-2">
                  /month
                </span>
              </div>
              <p className="text-gray-500 dark:text-slate-500 text-sm mt-1">
                Billed monthly
              </p>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started
            </button>

            {/* Bottom note */}
            <p className="text-gray-500 dark:text-slate-500 text-xs mt-4">
              Cancel anytime • No hidden fees
            </p>
          </div>
        </PulseBorder>
      </div>
    </div>
  );
}
