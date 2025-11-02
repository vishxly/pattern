"use client";
import { Heart, Sparkles, Star, Zap, ArrowRight, Check, X } from "lucide-react";
import { CardOption, MorphingCardSelector } from "../ui/morphing-card";
import { useState } from "react";

const MorphingCardDemo = () => {
  const [selectedOption, setSelectedOption] = useState<CardOption | null>(null);

  const options: CardOption[] = [
    {
      id: "premium",
      title: "Premium Plan",
      description: "Advanced features with priority support",
      icon: <Star size={16} />,
      color: "purple",
      value: "premium",
    },
    {
      id: "pro",
      title: "Pro Plan",
      description: "Perfect for growing businesses",
      icon: <Zap size={16} />,
      color: "blue",
      value: "pro",
    },
    {
      id: "starter",
      title: "Starter Plan",
      description: "Great for individuals and small teams",
      icon: <Heart size={16} />,
      color: "green",
      value: "starter",
    },
    {
      id: "enterprise",
      title: "Enterprise",
      description: "Custom solutions for large organizations",
      icon: <Sparkles size={16} />,
      color: "orange",
      value: "enterprise",
    },
  ];

  return (
    <div className="min-h-screen  p-2 flex items-center justify-center">
      <div className="w-full max-w-md space-y-12">
        <div className="text-center space-y-3">
         
          <p className="text-slate-400 text-sm">
            Click to expand and select options
          </p>
        </div>

        <div className="space-y-16">
          {/* Single Select Mode */}
          <div className="space-y-4">
            <h2 className="text-black dark:text-white font-medium text-sm text-center">
              Single Select Mode
            </h2>
            <div className="flex justify-center">
              <MorphingCardSelector
                options={options}
                selectedOption={options[0]}
                onSelect={(option) => {
                  setSelectedOption(option);
                  console.log("Selected:", option);
                }}
              />
            </div>
          </div>

          {/* Multi Select Mode */}
          <div className="space-y-4">
            <h2 className="text-black dark:text-white font-medium text-sm text-center">
              Multi Select Mode
            </h2>
            <div className="flex justify-center">
              <MorphingCardSelector
                options={options}
                multiSelect={true}
                onSelect={(option) => {
                  console.log("Multi selected:", option);
                }}
              />
            </div>
          </div>
        </div>

        {selectedOption && (
          <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <p className="text-slate-400 text-sm">
              Currently selected:{" "}
              <span className="text-white font-medium">
                {selectedOption.title}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MorphingCardDemo;
