import { ComponentGroup } from "@/lib/docs/types";
import MorphingCardDemo from "../components/morphing-card";

export const morphingCardRegistry: ComponentGroup = {
  name: "morphingCardRegistry",
  title: "Morphing Card",
  description: "A card with a morphing selector.",
  category: "components",
  components: ["MorphingCardDemo"],
  // Installation configuration
  installation: {
    cliCommand: "npx shadcn@latest add \"https://zeroui.vercel.app/r/morphing-card\"",
    dependencies: ["clsx", "tailwind-merge"],
    componentPath: "components/zeroui/card.tsx",
    utilsCode: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
  },
  props: [
    {
      name: "options",
      type: "CardOption[]",
      description: "An array of option objects to display in the selector. Each object requires id, title, description, icon, and color.",
      required: true,
    },
    {
      name: "selectedOption",
      type: "CardOption",
      description: "The initially selected option. Used for single-select mode.",
      required: false,
    },
    {
      name: "onSelect",
      type: "(option: CardOption) => void",
      description: "A callback function that is triggered when an option is selected.",
      required: false,
    },
    {
      name: "multiSelect",
      type: "boolean",
      description: "Enables multi-select mode, allowing users to select multiple options.",
      default: "false",
      required: false,
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the main component container.",
      required: false,
    },
  ],
  variants: {
    basic: {
      title: "Morphing Card",
      description: "A card with a morphing selector.",
      component: MorphingCardDemo,
      image: "/images/components/card-basic.png",
      fallbackImage: "/placeholder.svg?height=300&width=400&text=Basic+Card",
      code: `"use client";
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
            <h2 className="text-white font-medium text-sm text-center">
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
            <h2 className="text-white font-medium text-sm text-center">
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

export default MorphingCardDemo;`,
      manualCode: `"use client"
import React, { useState, useEffect } from 'react';
import { Star, Zap, Heart, Sparkles, ArrowRight, Check, X } from 'lucide-react';

export interface CardOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  value?: any;
}

interface MorphingCardSelectorProps {
  options: CardOption[];
  selectedOption?: CardOption;
  onSelect?: (option: CardOption) => void;
  className?: string;
  multiSelect?: boolean;
}

export const MorphingCardSelector: React.FC<MorphingCardSelectorProps> = ({
  options,
  selectedOption,
  onSelect,
  className = '',
  multiSelect = false
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState(selectedOption || options[0]);
  const [multiSelected, setMultiSelected] = useState<CardOption[]>([]);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [animationPhase, setAnimationPhase] = useState<'closed' | 'expanding' | 'expanded'>('closed');

  useEffect(() => {
    if (isExpanded) {
      setAnimationPhase('expanding');
      setTimeout(() => setAnimationPhase('expanded'), 200);
    } else {
      setAnimationPhase('closed');
    }
  }, [isExpanded]);

  const handleSelect = (option: CardOption) => {
    if (multiSelect) {
      const newSelection = multiSelected.includes(option)
        ? multiSelected.filter(item => item.id !== option.id)
        : [...multiSelected, option];
      setMultiSelected(newSelection);
      onSelect?.(option);
    } else {
      setSelected(option);
      onSelect?.(option);
      setTimeout(() => setIsExpanded(false), 300);
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const getSelectedCount = () => multiSelect ? multiSelected.length : 1;

  return (
    <div className={\`relative \${className}\`} style={{ marginBottom: isExpanded ? '320px' : '0px' }}>
      {/* Backdrop */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={() => setIsExpanded(false)}
        />
      )}

      <div className="relative z-50">
        {/* Main Trigger Card */}
        <div
          onClick={toggleExpanded}
          className={\`
            relative cursor-pointer select-none transition-all duration-500 ease-out
            \${isExpanded 
              ? 'w-80 h-18' 
              : 'w-72 h-16 hover:scale-[1.02]'
            }
            bg-white dark:bg-gradient-to-r dark:from-neutral-900 dark:to-neutral-800
            rounded-2xl border border-neutral-200/80 dark:border-neutral-800 shadow-xl
            flex items-center px-5 py-4
            transform active:scale-95 hover:border-neutral-300 dark:hover:border-neutral-700
          \`}
        >
          {/* Left Content */}
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            <div className={\`
              flex-shrink-0 transition-all duration-300 p-2.5 rounded-xl
              \${isExpanded ? 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400' : \`bg-\${selected.color}-500/10 text-\${selected.color}-600 dark:bg-\${selected.color}-500/20 dark:text-\${selected.color}-400\`}\`
            }>
              {multiSelect && multiSelected.length > 0 ? <Check size={18} /> : selected.icon}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-neutral-900 dark:text-white font-semibold text-sm leading-tight">
                {multiSelect 
                  ? \`\${getSelectedCount()} Selected\` 
                  : selected.title
                }
              </div>
              {!multiSelect && (
                <div className="text-neutral-500 dark:text-neutral-400 text-xs mt-1 truncate leading-tight">
                  {selected.description}
                </div>
              )}
            </div>
          </div>

          {/* Right Arrow */}
          <div className={\`
            flex-shrink-0 ml-3 transition-all duration-300 text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200
            \${isExpanded ? 'rotate-180' : 'rotate-0'}
          \`}>
            <ArrowRight size={16} />
          </div>
        </div>

        {/* Expanded Options */}
        {isExpanded && (
          <div className={\`
            absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-80
            transition-all duration-500 ease-out
            \${animationPhase === 'expanded' 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-2 scale-98'
            }
          \`}>
            <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md rounded-2xl border border-neutral-200/80 dark:border-neutral-800 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="px-5 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/20 dark:bg-neutral-800/20">
                <div className="flex items-center justify-between">
                  <h3 className="text-neutral-800 dark:text-white font-semibold text-sm">Choose Options</h3>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors p-1.5 rounded-lg hover:bg-neutral-200/60 dark:hover:bg-neutral-700/50"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              {/* Options Grid */}
              <div className="p-3 space-y-1.5 max-h-72 overflow-y-auto">
                {options.map((option, index) => {
                  const isSelected = multiSelect 
                    ? multiSelected.includes(option)
                    : selected.id === option.id;
                  const isHovered = hoveredCard === option.id;

                  return (
                    <div
                      key={option.id}
                      onClick={() => handleSelect(option)}
                      onMouseEnter={() => setHoveredCard(option.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className={\`
                        group relative cursor-pointer transition-all duration-300 ease-out
                        \${isSelected 
                          ? \`bg-\${option.color}-500/15 border-\${option.color}-500/40 shadow-md\` 
                          : 'bg-neutral-500/5 dark:bg-neutral-800/40 border-neutral-200/80 dark:border-neutral-800/80 hover:bg-neutral-100 dark:hover:bg-neutral-700/40 hover:border-neutral-300 dark:hover:border-neutral-700'
                        }
                        border rounded-xl p-3 flex items-center space-x-3
                        transform hover:scale-[1.01] active:scale-[0.99]
                      \`}
                      style={{
                        animationDelay: \`\${index * 40}ms\`,
                        animation: animationPhase === 'expanding' 
                          ? 'slideInUp 0.3s ease-out forwards' 
                          : 'none'
                      }}
                    >
                      {/* Icon */}
                      <div className={\`
                        flex-shrink-0 transition-all duration-300 p-2 rounded-lg
                        \${isSelected 
                          ? \`bg-\${option.color}-500/20 text-\${option.color}-600 dark:text-\${option.color}-300\` 
                          : 'bg-neutral-100 dark:bg-neutral-700/40 text-neutral-500 dark:text-neutral-400 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-600/50 group-hover:text-neutral-600 dark:group-hover:text-neutral-300'
                        }
                        \${isHovered ? 'scale-105' : 'scale-100'}
                      \`}>
                        {option.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className={\`
                          font-medium text-sm leading-tight transition-colors duration-300
                          \${isSelected ? 'text-neutral-900 dark:text-white' : 'text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-900 dark:group-hover:text-white'}
                        \`}>
                          {option.title}
                        </div>
                        <div className={\`
                          text-xs mt-0.5 leading-tight transition-colors duration-300 truncate
                          \${isSelected ? 'text-neutral-600 dark:text-neutral-300' : 'text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300'}
                        \`}>
                          {option.description}
                        </div>
                      </div>

                      {/* Selection Indicator */}
                      <div className={\`
                        flex-shrink-0 transition-all duration-300
                        \${isSelected 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-75'
                        }
                      \`}>
                        <div className={\`
                          w-5 h-5 rounded-full bg-\${option.color}-500 
                          flex items-center justify-center
                        \`}>
                          <Check size={12} className="text-white" />
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      {isHovered && !isSelected && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neutral-300/5 to-neutral-400/5 dark:from-neutral-600/5 dark:to-neutral-500/5 pointer-events-none" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              {multiSelect && (
                <div className="px-5 py-3 border-t border-neutral-200 dark:border-neutral-800 bg-transparent">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500 dark:text-neutral-400 text-xs">
                      {multiSelected.length} of {options.length} selected
                    </span>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded-lg transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <style jsx>{\`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      \`}</style>
    </div>
  );
};`,
    },
  },
};
