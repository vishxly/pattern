import { ComponentGroup } from "@/lib/docs/types";
import FloatingScrollNavigatorDemo from "../components/floating-navigator";

export const floatingNavigatorRegistry: ComponentGroup = {
  name: "floatingNavigatorRegistry",
  title: "Floating Navigator",
  description:
    "A floating scroll navigator component that provides a persistent navigation menu while scrolling through content.",
  category: "components",
  components: ["FloatingScrollNavigatorDemo"],
  // Installation configuration
  installation: {
    cliCommand: "npx shadcn@latest add \"https://zeroui.vercel.app/r/floating-navigator\"",
    dependencies: ["clsx", "tailwind-merge"],
    componentPath: "components/zeroui/floating-navigator.tsx",
    utilsCode: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
  },
  variants: {
    basic: {
      title: "Floating Navigator",
      description:
        "A floating scroll navigator component that provides a persistent navigation menu while scrolling through content.",
      component: FloatingScrollNavigatorDemo,
      image: "/images/components/card-basic.png",
      fallbackImage: "/placeholder.svg?height=300&width=400&text=Basic+Card",
      code: `"use client";
import React, { useRef } from "react";
import { DocsFloatingNavigator } from "@/components/zeroui/floating-navigator.tsx";

const FloatingNavigatorDemo = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const mySections = [
    { key: "welcome", title: "1. Welcome" },
    { key: "features", title: "2. Features" },
    { key: "pricing", title: "3. Pricing" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div ref={scrollRef} className="max-h-screen overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8 space-y-12">
          {/* Section 1: Welcome */}
          <section>
            <div id="variant-welcome" className="mb-8">
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Welcome</h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                Welcome to our amazing product! This is the main welcome section.
              </p>
            </div>
            <div id="preview-welcome" className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">Preview</h3>
              <div className="bg-white dark:bg-neutral-900 dark:text-white p-6 rounded-lg shadow-sm border dark:border-neutral-700">
                <p>Here's a preview of what our product looks like in action.</p>
              </div>
            </div>
            <div id="installation-welcome" className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">Installation</h3>
              <div className="bg-black text-green-400 p-4 rounded-lg">
                <code>npm install my-awesome-product</code>
              </div>
            </div>
            <div id="examples-welcome" className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">Examples</h3>
              <div className="bg-black text-green-400 p-4 rounded-lg">
                <code>{\`import { Product } from 'my-awesome-product';\\n\\n<Product theme="dark" />\`}</code>
              </div>
            </div>
          </section>

          {/* Section 2: Features */}
          <section>
            <div id="variant-features" className="mb-8">
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Features</h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                Discover all the amazing features our product offers.
              </p>
            </div>
            <div id="preview-features" className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">Preview</h3>
              <div className="bg-white dark:bg-neutral-900 dark:text-white p-6 rounded-lg shadow-sm border dark:border-neutral-700">
                <ul className="space-y-2">
                  <li>✅ Fast performance</li>
                  <li>✅ Easy to use</li>
                  <li>✅ Great support</li>
                </ul>
              </div>
            </div>
            <div id="installation-features" className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">Installation</h3>
              <div className="bg-black text-green-400 p-4 rounded-lg">
                <code>npm install --save-features</code>
              </div>
            </div>
            <div id="examples-features" className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">Examples</h3>
              <div className="bg-black text-green-400 p-4 rounded-lg">
                <code>{\`<Product features={['fast', 'easy', 'supported']} />\`}</code>
              </div>
            </div>
          </section>

          {/* Section 3: Pricing */}
          <section>
            <div id="variant-pricing" className="mb-8">
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Pricing</h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                Simple and transparent pricing for everyone.
              </p>
            </div>
            <div id="preview-pricing" className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">Preview</h3>
              <div className="bg-white dark:bg-neutral-900 dark:text-white p-6 rounded-lg shadow-sm border dark:border-neutral-700">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">$29</div>
                  <div className="text-neutral-600 dark:text-neutral-400">per month</div>
                </div>
              </div>
            </div>
            <div id="installation-pricing" className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">Installation</h3>
              <div className="bg-black text-green-400 p-4 rounded-lg">
                <code>npm install --plan=pro</code>
              </div>
            </div>
            <div id="examples-pricing" className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">Examples</h3>
              <div className="bg-black text-green-400 p-4 rounded-lg">
                <code>{\`<PricingCard plan="pro" price={29} />\`}</code>
              </div>
            </div>
          </section>

          {/* Extra Scroll Padding */}
          <div className="h-96 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
            <p className="text-neutral-500 dark:text-neutral-400">
              Extra content to make the page scrollable...
            </p>
          </div>
        </div>
      </div>

      <DocsFloatingNavigator
        groupSlug="demo"
        variants={mySections}
        scrollContainer={scrollRef}
        floatingPosition="top-right"
      />
    </div>
  );
};

export default FloatingNavigatorDemo;
`,

      manualCode: `"use client";
import React, { useState, useEffect, useRef, RefObject } from "react";
import { ChevronDown, Menu, X, Circle } from "lucide-react";

export interface NavigationItem {
  id: string;
  label: string;
  section?: string;
}

export type ProgressPosition = "top" | "bottom" | "left" | "right" | "center";
export type FloatingPosition = "bottom-right" | "bottom-left" | "top-right" | "top-left";

interface FloatingScrollNavigatorProps {
  items: NavigationItem[];
  onItemSelect?: (item: NavigationItem) => void;
  className?: string;
  scrollContainer?: React.RefObject<HTMLElement | null>;
  activeItemId?: string;
  groupSlug?: string;
  progressPosition?: ProgressPosition;
  floatingPosition?: FloatingPosition;
}

export const FloatingScrollNavigator: React.FC<FloatingScrollNavigatorProps> = ({
  items,
  onItemSelect,
  className = "",
  scrollContainer,
  activeItemId,
  groupSlug,
  progressPosition = "center",
  floatingPosition = "bottom-right",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeItem, setActiveItem] = useState(items[0]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update active item when activeItemId prop changes
  useEffect(() => {
    if (activeItemId) {
      const foundItem = items.find((item) => item.id === activeItemId);
      if (foundItem) {
        setActiveItem(foundItem);
      }
    }
  }, [activeItemId, items]);

  // Enhanced scroll progress calculation
  useEffect(() => {
    const updateScrollProgress = () => {
      let scrollTop, scrollHeight, clientHeight;

      if (scrollContainer?.current) {
        const element = scrollContainer.current;
        scrollTop = element.scrollTop;
        scrollHeight = element.scrollHeight;
        clientHeight = element.clientHeight;
      } else {
        scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0;
        scrollHeight = Math.max(
          document.body.scrollHeight || 0,
          document.documentElement.scrollHeight || 0,
          document.body.offsetHeight || 0,
          document.documentElement.offsetHeight || 0,
          document.body.clientHeight || 0,
          document.documentElement.clientHeight || 0
        );
        clientHeight =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight ||
          0;
      }

      const maxScroll = Math.max(scrollHeight - clientHeight, 0);
      const progress =
        maxScroll > 0
          ? Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100))
          : 0;

      setScrollProgress(progress);

      // Auto-detect active section based on scroll position if no activeItemId is provided
      if (!activeItemId && items.length > 0) {
        const sections = items
          .map((item) => {
            const element = document.getElementById(item.id);
            if (element) {
              const rect = element.getBoundingClientRect();
              return {
                item,
                top: rect.top + scrollTop,
                bottom: rect.bottom + scrollTop,
              };
            }
            return null;
          })
          .filter(Boolean);

        const currentSection = sections.find((section) => {
          if (!section) return false;
          return (
            scrollTop >= section.top - 100 && scrollTop < section.bottom - 100
          );
        });

        if (currentSection) {
          setActiveItem(currentSection.item);
        }
      }
    };

    const target = scrollContainer?.current || window;
    const options = { passive: true };
    target.addEventListener("scroll", updateScrollProgress, options);
    window.addEventListener("resize", updateScrollProgress, options);

    const timer = setTimeout(updateScrollProgress, 100);
    updateScrollProgress();

    return () => {
      target.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
      clearTimeout(timer);
    };
  }, [scrollContainer, activeItemId, items]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isExpanded) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isExpanded]);

  const handleItemClick = (item: NavigationItem) => {
    setActiveItem(item);
    setIsExpanded(false);
    onItemSelect?.(item);

    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Get positioning classes
  const getPositionClasses = (position: FloatingPosition) => {
    switch (position) {
      case "top-left":
        return "top-6 left-6";
      case "top-right":
        return "top-6 right-6";
      case "bottom-left":
        return "bottom-6 left-6";
      case "bottom-right":
      default:
        return "bottom-6 right-6";
    }
  };

  // Get expand origin classes
  const getExpandOrigin = (position: FloatingPosition) => {
    switch (position) {
      case "top-left":
        return "origin-top-left";
      case "top-right":
        return "origin-top-right";
      case "bottom-left":
        return "origin-bottom-left";
      case "bottom-right":
      default:
        return "origin-bottom-right";
    }
  };

  // Get expanded position classes
  const getExpandedPosition = (position: FloatingPosition) => {
    switch (position) {
      case "top-left":
        return "top-0 left-0";
      case "top-right":
        return "top-0 right-0";
      case "bottom-left":
        return "bottom-0 left-0";
      case "bottom-right":
      default:
        return "bottom-0 right-0";
    }
  };

  // Render progress indicator based on position
  const renderProgressIndicator = () => {
    const progressValue = Math.round(scrollProgress);
    const isComplete = scrollProgress >= 100;

    if (progressPosition === "center") {
      return (
        <div className="relative w-8 h-8">
          <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 32 32">
            <circle
              cx="16"
              cy="16"
              r="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-slate-600"
            />
            <circle
              cx="16"
              cy="16"
              r="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-emerald-400"
              strokeDasharray={\`\${2 * Math.PI * 12}\`}
              strokeDashoffset={\`\${2 * Math.PI * 12 * (1 - scrollProgress / 100)}\`}
              style={{ transition: "stroke-dashoffset 0.2s ease-out" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            {isComplete ? (
              <Circle className="w-3 h-3 text-emerald-400 fill-current" />
            ) : (
              <span className="text-xs font-semibold text-slate-300">
                {progressValue}
              </span>
            )}
          </div>
        </div>
      );
    }

    // For other positions, show a badge-style indicator
    const positionClasses = {
      top: "absolute -top-2 left-1/2 transform -translate-x-1/2",
      bottom: "absolute -bottom-2 left-1/2 transform -translate-x-1/2",
      left: "absolute -left-2 top-1/2 transform -translate-y-1/2",
      right: "absolute -right-2 top-1/2 transform -translate-y-1/2",
    };

    return (
      <>
        {/* Main circle without progress */}
        <div className="relative w-8 h-8">
          <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
            <Menu className="w-4 h-4 text-slate-300" />
          </div>
        </div>
        
        {/* Progress badge */}
        <div className={\`\${positionClasses[progressPosition]} z-10\`}>
          <div className="bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg min-w-[2rem] text-center">
            {isComplete ? "✓" : \`\${progressValue}%\`}
          </div>
        </div>
      </>
    );
  };

  if (!items || items.length <= 1) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Main Component */}
      <div
        ref={containerRef}
        className={\`fixed \${getPositionClasses(floatingPosition)} z-50 \${className}\`}
      >
        <div className="relative">
          {/* Collapsed State */}
          <div
            className={\`
              bg-gradient-to-r from-slate-800 to-slate-900 
              border border-slate-600/50 rounded-2xl shadow-2xl
              transition-all duration-500 ease-in-out
              \${
                isExpanded
                  ? "scale-95 opacity-0 pointer-events-none"
                  : "scale-100 opacity-100"
              }
            \`}
          >
            <button
              onClick={toggleExpanded}
              className="flex items-center gap-3 px-4 py-3 w-full hover:bg-white/10 rounded-2xl transition-colors group relative"
              aria-label="Open navigation menu"
            >
              {/* Progress Indicator */}
              {renderProgressIndicator()}

              {/* Active Item Text */}
              <div className="flex-1 text-left min-w-0">
                <div className="text-sm font-medium text-slate-200 truncate">
                  {activeItem?.label || "Navigate"}
                </div>
                {activeItem?.section && (
                  <div className="text-xs text-slate-400 truncate">
                    {activeItem.section}
                  </div>
                )}
              </div>

              {/* Expand Icon */}
              <ChevronDown
                className={\`w-4 h-4 text-slate-400 transition-transform duration-300 group-hover:text-slate-200 flex-shrink-0\`}
              />
            </button>
          </div>

          {/* Expanded State */}
          {isExpanded && (
            <div
              className={\`
                absolute \${getExpandedPosition(floatingPosition)} w-80
                bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800
                border border-slate-600/50 rounded-3xl shadow-2xl
                transition-all duration-500 ease-out
                transform \${getExpandOrigin(floatingPosition)}
                \${isExpanded ? "scale-100 opacity-100" : "scale-75 opacity-0"}
              \`}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-600/30">
                <div className="flex items-center gap-3">
                  <Menu className="w-5 h-5 text-slate-400" />
                  <span className="font-semibold text-slate-200">
                    {groupSlug ? \`\${groupSlug} sections\` : "Navigation"}
                  </span>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-1 hover:bg-slate-700 rounded-lg transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="px-4 py-3 border-b border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400">Reading Progress</span>
                  <span className="text-xs font-medium text-emerald-400">
                    {Math.round(scrollProgress)}%
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2 rounded-full transition-all duration-300 ease-out"
                    style={{ width: \`\${scrollProgress}%\` }}
                  />
                </div>
              </div>

              {/* Navigation Items */}
              <div className="max-h-64 overflow-y-auto p-2">
                {items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className={\`
                      w-full text-left p-3 rounded-xl transition-all duration-200
                      hover:bg-slate-700/50 hover:translate-x-1
                      \${
                        activeItem?.id === item.id
                          ? "bg-emerald-500/20 border-l-4 border-emerald-400"
                          : "hover:bg-slate-700/30"
                      }
                    \`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={\`
                          w-2 h-2 rounded-full transition-colors
                          \${
                            activeItem?.id === item.id
                              ? "bg-emerald-400"
                              : "bg-slate-500"
                          }
                        \`}
                      />
                      <div className="flex-1 min-w-0">
                        <div
                          className={\`
                            text-sm font-medium transition-colors truncate
                            \${
                              activeItem?.id === item.id
                                ? "text-emerald-300"
                                : "text-slate-200"
                            }
                          \`}
                        >
                          {item.label}
                        </div>
                        {item.section && (
                          <div className="text-xs text-slate-400 mt-0.5 truncate">
                            {item.section}
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// Utility function to generate navigation items for documentation
export const generateDocsNavigation = (
  variants: Array<{ key: string; title: string }>,
  sections: string[] = ["Preview", "Installation", "Examples", "Props"]
): NavigationItem[] => {
  return variants.flatMap((variant) => [
    {
      id: \`variant-\${variant.key}\`,
      label: variant.title,
      section: "Component",
    },
    ...sections.map((section) => ({
      id: \`\${section.toLowerCase().replace(/\\s+/g, '-')}-\${variant.key}\`,
      label: section,
      section: variant.title,
    })),
  ]);
};

// Pre-configured DocsFloatingNavigator for easy use
interface DocsFloatingNavigatorProps {
  groupSlug: string;
  variants: Array<{ key: string; title: string }>;
  sections?: string[];
  activeSection?: string;
  scrollContainer: RefObject<HTMLElement | null>;
  onItemSelect?: (item: NavigationItem) => void;
  className?: string;
  progressPosition?: ProgressPosition;
  floatingPosition?: FloatingPosition;
}

export const DocsFloatingNavigator: React.FC<DocsFloatingNavigatorProps> = ({
  groupSlug,
  variants,
  sections,
  activeSection,
  scrollContainer,
  onItemSelect,
  className,
  progressPosition = "center",
  floatingPosition = "bottom-right",
}) => {
  const navigationItems = generateDocsNavigation(variants, sections);

  const handleItemSelect = (item: NavigationItem) => {
    onItemSelect?.(item);
  };

  return (
    <FloatingScrollNavigator
      items={navigationItems}
      onItemSelect={handleItemSelect}
      activeItemId={activeSection}
      groupSlug={groupSlug}
      scrollContainer={scrollContainer}
      className={className}
      progressPosition={progressPosition}
      floatingPosition={floatingPosition}
    />
  );
};
`,
    },
  },
  props: [
    {
      name: "items",
      type: "{ id: string; label: string; section?: string }[]",
      description: "An array of navigation item objects to display.",
      required: true,
    },
    {
      name: "onItemSelect",
      type: "(item: NavigationItem) => void",
      description:
        "Callback function triggered when a navigation item is selected.",
      required: false,
    },
    {
      name: "scrollContainer",
      type: "React.RefObject<HTMLElement | null>",
      description:
        "A ref to the scrollable container. Defaults to `window` if not provided.",
      required: false,
    },
    {
      name: "activeItemId",
      type: "string",
      description:
        "The ID of the active item, used to override automatic detection.",
      required: false,
    },
    {
      name: "floatingPosition",
      type: '"bottom-right" | "bottom-left" | "top-right" | "top-left"',
      description: "The position of the floating navigator on the screen.",
      default: '"bottom-right"',
      required: false,
    },
    {
      name: "progressPosition",
      type: '"top" | "bottom" | "left" | "right" | "center"',
      description:
        "Position of the scroll progress indicator on the collapsed button.",
      default: '"center"',
      required: false,
    },
    {
      name: "groupSlug",
      type: "string",
      description:
        "A name for the group of sections, displayed in the expanded header.",
      required: false,
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the component.",
      required: false,
    },
  ],
};
