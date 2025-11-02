"use client";
import React, { useState, useEffect } from "react";
import {
  Copy,
  Eye,
  Heart,
  Sparkles,
  ChevronUp,
  Palette,
  MousePointer,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  patterns,
  categories,
  buttonPatterns,
  buttonCategories,
  Pattern,
} from "@/components/pattern/patterns";
import SyntaxHighlighter from "@/components/syntax/syntax-highlighter";
import { usePatternLikes } from "@/hooks/use-pattern-likes";

interface ButtonPattern {
  id: number;
  name: string;
  category: string;
  getStartedCode: string;
  exploreCode: string;
  isNew: boolean;
  preview: {
    getStarted: string;
    explore: string;
  };
}

type AnyPattern = Pattern | ButtonPattern;

const isButtonPattern = (pattern: AnyPattern): pattern is ButtonPattern => {
  return "getStartedCode" in pattern;
};

interface PatternType {
  id: number;
  name: string;
  css?: string;
  preview?: string | { getStarted: string; explore: string };
  type?: string;
}

interface TopPattern {
  patternId: string;
  likeCount: number;
  isLiked: boolean;
}

const getPatternBackgroundFromCSS = (
  pattern: PatternType
): React.CSSProperties => {
  if (!pattern.css) {
    const previewValue = pattern.preview;
    return {
      background: typeof previewValue === "string" ? previewValue : "#1a1a1a",
    };
  }

  try {
    const normalizedCSS = pattern.css
      .replace(/\s+/g, " ")
      .replace(/;\s*}/g, "}")
      .trim();

    const cssLines: string[] = [];
    let current = "";
    let inParens = 0;

    for (let i = 0; i < normalizedCSS.length; i++) {
      const char = normalizedCSS[i];
      if (char === "(") inParens++;
      else if (char === ")") inParens--;
      else if (char === ";" && inParens === 0) {
        if (current.trim()) cssLines.push(current.trim());
        current = "";
        continue;
      }
      current += char;
    }
    if (current.trim()) cssLines.push(current.trim());

    const style: React.CSSProperties = {};

    cssLines.forEach((line) => {
      const colonIndex = line.indexOf(":");
      if (colonIndex === -1) return;

      const property = line.substring(0, colonIndex).trim().toLowerCase();
      const value = line.substring(colonIndex + 1).trim();

      switch (property) {
        case "background-color":
          style.backgroundColor = value;
          break;
        case "background-image":
          style.backgroundImage = value;
          break;
        case "background-size":
          style.backgroundSize = value;
          break;
        case "background-repeat":
          style.backgroundRepeat = value;
          break;
        case "background-position":
          style.backgroundPosition = value;
          break;
        case "background":
          style.background = value;
          break;
      }
    });

    const hasBackgroundProps = Object.keys(style).some((key) =>
      key.toLowerCase().includes("background")
    );

    if (!hasBackgroundProps && pattern.preview) {
      const previewValue = pattern.preview;
      return {
        background: typeof previewValue === "string" ? previewValue : "#1a1a1a",
      };
    }

    return style;
  } catch (error) {
    const previewValue = pattern.preview;
    return {
      background: typeof previewValue === "string" ? previewValue : "#1a1a1a",
    };
  }
};

const renderComplexPatternPreview = (pattern: PatternType): React.ReactNode => {
  if (pattern.type === "complex") {
    if (pattern.name === "White Sphere Grid") {
      return (
        <div className="absolute inset-0 bg-white">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
                radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
              `,
              backgroundSize: "32px 32px, 32px 32px, 100% 100%",
            }}
          />
        </div>
      );
    }
  }
  return null;
};

const getMainBackgroundStyle = (pattern: PatternType): React.CSSProperties => {
  if (pattern.type === "complex") {
    if (pattern.name === "White Sphere Grid") {
      return {
        background: "white",
        backgroundImage: `
          linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
          radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
        `,
        backgroundSize: "32px 32px, 32px 32px, 100% 100%",
      };
    }
  }
  return getPatternBackgroundFromCSS(pattern);
};

const renderMainBackgroundOverlay = (pattern: PatternType): React.ReactNode => {
  if (pattern.type === "complex" && pattern.name === "Layered Aurora") {
    return (
      <>
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(139,92,246,0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(59,130,246,0.4) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(16,185,129,0.3) 0%, transparent 50%)
            `,
            filter: "blur(40px)",
          }}
        />
      </>
    );
  }
  return null;
};

export default function PatternLibrary() {
  const [selectedPattern, setSelectedPattern] = useState<Pattern>(patterns[0]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredPattern, setHoveredPattern] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [patternType, setPatternType] = useState<"background" | "button">(
    "background"
  );
  const [selectedButtonPattern, setSelectedButtonPattern] =
    useState<ButtonPattern>(buttonPatterns[0]);
  const [activeButtonCategory, setActiveButtonCategory] = useState<
    string | null
  >(null);

  // Top patterns state
  const [topPatterns, setTopPatterns] = useState<TopPattern[]>([]);
  const [loadingTopPatterns, setLoadingTopPatterns] = useState(false);

  // Add likes hook
  const {
    likes,
    toggleLike,
    getLikeData,
    loading: likesLoading,
  } = usePatternLikes(patternType);

  const extractClassName = (code: string): string => {
    const match = code.match(/className="([^"]+)"/);
    return match ? match[1] : "";
  };

  // Fetch top patterns when "Top Liked" category is selected
  useEffect(() => {
    if (
      (patternType === "background" && activeCategory === "favourites") ||
      (patternType === "button" && activeButtonCategory === "favourites")
    ) {
      fetchTopPatterns();
    }
  }, [activeCategory, activeButtonCategory, patternType]);

  const fetchTopPatterns = async () => {
    try {
      setLoadingTopPatterns(true);
      const response = await fetch(
        `/api/patterns/top?patternType=${patternType}&limit=50`
      );
      const data = await response.json();

      if (data.success) {
        setTopPatterns(data.patterns);
      }
    } catch (error) {
      console.error("Error fetching top patterns:", error);
    } finally {
      setLoadingTopPatterns(false);
    }
  };

  const getFilteredPatterns = (): AnyPattern[] => {
    const currentCategory =
      patternType === "background" ? activeCategory : activeButtonCategory;

    // If "Top Liked" is selected, return patterns sorted by likes
    if (currentCategory === "favourites") {
      const allPatterns =
        patternType === "background" ? patterns : buttonPatterns;

      if (topPatterns.length === 0) {
        return allPatterns;
      }

      // Create a map of pattern IDs to like counts
      const likesMap = new Map(
        topPatterns.map((tp) => [tp.patternId, tp.likeCount])
      );

      // Sort patterns by like count
      return [...allPatterns].sort((a, b) => {
        const aLikes = likesMap.get(String(a.id)) || 0;
        const bLikes = likesMap.get(String(b.id)) || 0;
        return bLikes - aLikes;
      });
    }

    // Regular category filtering
    if (patternType === "background") {
      return currentCategory === null || currentCategory === "all"
        ? patterns
        : patterns.filter((p) => p.category === currentCategory);
    } else {
      return currentCategory === null || currentCategory === "all"
        ? buttonPatterns
        : buttonPatterns.filter((p) => p.category === currentCategory);
    }
  };

  const filteredPatterns = getFilteredPatterns();

  const currentCategories =
    patternType === "background" ? categories : buttonCategories;
  const currentActiveCategory =
    patternType === "background" ? activeCategory : activeButtonCategory;

  const getCurrentBackground = (): React.CSSProperties => {
    return getMainBackgroundStyle(selectedPattern);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const copyToClipboard = async (code: string, id: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handlePatternClick = (pattern: AnyPattern) => {
    if (patternType === "background") {
      setSelectedPattern(pattern as Pattern);
    } else {
      setSelectedButtonPattern(pattern as ButtonPattern);
    }
  };

  const handleCategoryChange = (categoryId: string | null) => {
    if (patternType === "background") {
      setActiveCategory(categoryId);
    } else {
      setActiveButtonCategory(categoryId);
    }
  };

  const getCurrentCode = () => {
    if (patternType === "background") {
      return selectedPattern.htmlCode;
    } else {
      return `// Get Started Button\n${selectedButtonPattern.getStartedCode}\n\n// Explore Button\n${selectedButtonPattern.exploreCode}`;
    }
  };

  const getCurrentPattern = (): AnyPattern => {
    return patternType === "background"
      ? selectedPattern
      : selectedButtonPattern;
  };

  const handleLikeClick = async (e: React.MouseEvent, patternId: string) => {
    e.stopPropagation();
    try {
      await toggleLike(patternId);
      // Refresh top patterns if we're viewing top liked
      if (
        (patternType === "background" && activeCategory === "favourites") ||
        (patternType === "button" && activeButtonCategory === "favourites")
      ) {
        fetchTopPatterns();
      }
    } catch (error) {
      console.error("Failed to toggle like:", error);
    }
  };

  const getPatternRank = (patternId: string): number | null => {
    if (currentActiveCategory !== "favourites") return null;
    const index = topPatterns.findIndex((tp) => tp.patternId === patternId);
    return index !== -1 ? index + 1 : null;
  };

  return (
    <div
      className="min-h-screen w-full relative"
      style={getCurrentBackground()}
    >
      {renderMainBackgroundOverlay(selectedPattern)}

      <div className="relative z-10">
        {/* Hero Section with Pattern Background */}
        <div className="container mx-auto px-4 pt-8 sm:pt-12 pb-12 sm:pb-16 max-w-7xl relative">
          <div className="text-center max-w-5xl mx-auto relative">
            {/* Like Button */}
            <div className="absolute top-0 left-0 z-20">
              <button
                onClick={(e) => handleLikeClick(e, String(getCurrentPattern().id))}
                className={`group/like flex items-center gap-1.5 backdrop-blur-md rounded-full px-3 py-1.5 transition-all duration-300 border ${
                  getLikeData(String(getCurrentPattern().id)).isLiked
                    ? "bg-red-500/20 border-red-400/40 hover:bg-red-500/30 shadow-lg shadow-red-500/20"
                    : "bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30"
                }`}
                disabled={likesLoading}
              >
                <Heart
                  className={`w-5 h-5 transition-all duration-300 ${
                    getLikeData(String(getCurrentPattern().id)).isLiked
                      ? "fill-red-500 text-red-500 scale-110"
                      : "text-white/90 group-hover/like:text-red-400 group-hover/like:scale-110"
                  }`}
                />
                <span className={`text-sm font-semibold transition-colors ${
                  getLikeData(String(getCurrentPattern().id)).isLiked ? "text-red-100" : "text-white/90"
                }`}>
                  {getLikeData(String(getCurrentPattern().id)).count}
                </span>
              </button>
            </div>

            {/* Copy Button - Top Right */}
            <div className="absolute top-0 right-0 z-20 flex items-center gap-2">
              {getCurrentPattern().isNew && (
                <span className="bg-gradient-to-r from-pink-500 to-violet-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  ✨ New
                </span>
              )}
              <button
                onClick={() =>
                  copyToClipboard(
                    getCurrentCode(),
                    String(getCurrentPattern().id)
                  )
                }
                className={`flex items-center gap-1.5 backdrop-blur-md text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 font-medium text-xs sm:text-sm shadow-lg ${
                  copiedId === String(getCurrentPattern().id)
                    ? "bg-green-500/30 hover:bg-green-500/40 border border-green-400/50"
                    : "bg-white/20 hover:bg-white/30 border border-white/30 hover:scale-105"
                }`}
              >
                <Copy className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {copiedId === String(getCurrentPattern().id) ? "Copied!" : "Copy"}
                </span>
              </button>
            </div>

            <Badge className="mb-4 sm:mb-6 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-white text-xs sm:text-sm font-medium bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
              Currently Viewing: {getCurrentPattern().name}
            </Badge>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight px-4 drop-shadow-lg">
              Pattern Library
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-md">
              Beautiful backgrounds and buttons. Copy, paste, and customize for your next project.
            </p>

            {patternType === "button" && (
              <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
                <button
                  className={`${extractClassName(
                    selectedButtonPattern.getStartedCode
                  )} pointer-events-none text-sm sm:text-base shadow-xl`}
                >
                  Get Started
                </button>
                <button
                  className={`${extractClassName(
                    selectedButtonPattern.exploreCode
                  )} pointer-events-none text-sm sm:text-base shadow-xl`}
                >
                  Explore
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Pattern Type Toggle */}
        <div className="flex justify-center mb-6 sm:mb-8 px-4">
          <div className="flex gap-1 sm:gap-2 bg-black/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-1 sm:p-2 border border-white/10 shadow-2xl w-full max-w-md sm:max-w-none sm:w-auto">
            <button
              onClick={() => setPatternType("background")}
              className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-sm sm:text-base flex-1 sm:flex-none ${
                patternType === "background"
                  ? "bg-white/20 text-white shadow-lg backdrop-blur-md scale-105"
                  : "text-white/70 hover:text-white hover:bg-white/10 hover:scale-105"
              }`}
            >
              <Palette className="w-4 h-4" />
              <span className="hidden sm:inline">Background Patterns</span>
              <span className="sm:hidden">Backgrounds</span>
            </button>
            <button
              onClick={() => setPatternType("button")}
              className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-sm sm:text-base flex-1 sm:flex-none ${
                patternType === "button"
                  ? "bg-white/20 text-white shadow-lg backdrop-blur-md scale-105"
                  : "text-white/70 hover:text-white hover:bg-white/10 hover:scale-105"
              }`}
            >
              <MousePointer className="w-4 h-4" />
              <span className="hidden sm:inline">Button Patterns</span>
              <span className="sm:hidden">Buttons</span>
            </button>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12 sm:mb-16 px-4">
          <div className="flex flex-wrap gap-2 sm:gap-3 bg-black/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-3 border border-white/10 shadow-2xl max-w-full overflow-x-auto">
            <button
              onClick={() => handleCategoryChange(null)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-sm sm:text-base whitespace-nowrap ${
                currentActiveCategory === null
                  ? "bg-white/20 text-white shadow-lg backdrop-blur-md scale-105"
                  : "text-white/70 hover:text-white hover:bg-white/10 hover:scale-105"
              }`}
            >
              All
            </button>
            
            {/* Top Liked Button */}
            <button
              onClick={() => handleCategoryChange("favourites")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-sm sm:text-base whitespace-nowrap ${
                currentActiveCategory === "favourites"
                  ? "bg-gradient-to-r from-yellow-500/30 to-orange-500/30 text-white shadow-lg backdrop-blur-md scale-105 border border-yellow-400/50"
                  : "text-white/70 hover:text-white hover:bg-white/10 hover:scale-105"
              }`}
            >
              <Trophy className="w-4 h-4" />
              Top Liked
            </button>

            {currentCategories
              .filter((cat) => cat.id !== "all" && cat.id !== "favourites")
              .map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-sm sm:text-base whitespace-nowrap ${
                    currentActiveCategory === category.id
                      ? "bg-white/20 text-white shadow-lg backdrop-blur-md scale-105"
                      : "text-white/70 hover:text-white hover:bg-white/10 hover:scale-105"
                  }`}
                >
                  {category.name}
                </button>
              ))}
          </div>
        </div>

        {/* Loading State for Top Patterns */}
        {loadingTopPatterns && currentActiveCategory === "favourites" && (
          <div className="text-center text-white text-xl mb-8">
            Loading top patterns...
          </div>
        )}

        {/* Pattern Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredPatterns.map((pattern) => {
              const likeData = getLikeData(String(pattern.id));
              const rank = getPatternRank(String(pattern.id));

              return (
                <div
                  key={pattern.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredPattern(String(pattern.id))}
                  onMouseLeave={() => setHoveredPattern(null)}
                >


                  <div
                    className={`aspect-square rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-500 transform relative overflow-hidden ${
                      getCurrentPattern().id === pattern.id
                        ? "ring-2 sm:ring-4 ring-white/50 scale-105 sm:scale-110 shadow-2xl"
                        : "hover:scale-105 hover:shadow-xl"
                    }`}
                    style={
                      patternType === "background"
                        ? getPatternBackgroundFromCSS(pattern as PatternType)
                        : {
                            background:
                              "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",
                          }
                    }
                    onClick={() => handlePatternClick(pattern)}
                  >
                    {patternType === "background" &&
                      "type" in pattern &&
                      pattern.type === "complex" &&
                      renderComplexPatternPreview(pattern as PatternType)}

                    {patternType === "button" && isButtonPattern(pattern) && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 sm:gap-6 p-4 sm:p-6">
                        <button
                          className={`${extractClassName(
                            pattern.getStartedCode
                          )} pointer-events-none text-xs sm:text-sm`}
                          style={{ minWidth: "80px" }}
                        >
                          Get Started
                        </button>
                        <button
                          className={`${extractClassName(
                            pattern.exploreCode
                          )} pointer-events-none text-xs sm:text-sm`}
                          style={{ minWidth: "70px" }}
                        >
                          Explore
                        </button>
                      </div>
                    )}

                    {/* Like Button */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-30">
                      <button
                        onClick={(e) => handleLikeClick(e, String(pattern.id))}
                        className={`group/like flex items-center gap-1.5 backdrop-blur-md rounded-full px-3 py-1.5 transition-all duration-300 border ${
                          likeData.isLiked
                            ? "bg-red-500/20 border-red-400/40 hover:bg-red-500/30 shadow-lg shadow-red-500/20"
                            : "bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30"
                        }`}
                        disabled={likesLoading}
                      >
                        <Heart
                          className={`w-4 sm:w-5 h-4 sm:h-5 transition-all duration-300 ${
                            likeData.isLiked
                              ? "fill-red-500 text-red-500 scale-110"
                              : "text-white/90 group-hover/like:text-red-400 group-hover/like:scale-110"
                          }`}
                        />
                        <span className={`text-sm font-semibold transition-colors ${
                          likeData.isLiked ? "text-red-100" : "text-white/90"
                        }`}>
                          {likeData.count}
                        </span>
                      </button>
                    </div>

                    {pattern.isNew && (
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                        <span className="bg-gradient-to-r from-pink-500 to-violet-500 text-white text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg">
                          ✨ New
                        </span>
                      </div>
                    )}

                    <div
                      className={`absolute inset-0 bg-black/50 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center transition-all duration-300 z-20 ${
                        hoveredPattern === String(pattern.id)
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <h3 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-8 text-center px-4">
                        {pattern.name}
                      </h3>

                      <div className="flex gap-2 sm:gap-3 px-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePatternClick(pattern);
                          }}
                          className="flex items-center gap-1 sm:gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 font-medium text-xs sm:text-sm"
                        >
                          <Eye className="w-3 sm:w-4 h-3 sm:h-4" />
                          Preview
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const code = isButtonPattern(pattern)
                              ? `${pattern.getStartedCode}\n\n${pattern.exploreCode}`
                              : "htmlCode" in pattern
                              ? pattern.htmlCode
                              : "";
                            copyToClipboard(code, String(pattern.id));
                          }}
                          className={`flex items-center gap-1 sm:gap-2 backdrop-blur-md text-white px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 font-medium text-xs sm:text-sm ${
                            copiedId === String(pattern.id)
                              ? "bg-green-500/30 hover:bg-green-500/40"
                              : "bg-white/20 hover:bg-white/30"
                          }`}
                        >
                          <Copy className="w-3 sm:w-4 h-3 sm:h-4" />
                          {copiedId === String(pattern.id) ? "Copied!" : "Copy"}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 sm:mt-4 text-center">
                    <h3 className="text-white font-medium text-base sm:text-lg">
                      {pattern.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-white/10">
            <SyntaxHighlighter code={getCurrentCode()} language="tsx" />
            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
              <p className="text-white/70 text-sm sm:text-base">
                {patternType === "background"
                  ? 'Simply replace "Your content here" with your actual components'
                  : "Copy the button code and customize the links and text as needed"}
              </p>
              <button
                onClick={() =>
                  copyToClipboard(
                    getCurrentCode(),
                    String(getCurrentPattern().id)
                  )
                }
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm sm:text-base"
              >
                <Copy className="w-4 h-4" />
                Copy Current
              </button>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-30 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full border border-white/20 shadow-lg transition-all duration-300 transform ${
            showScrollTop
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0 pointer-events-none"
          }`}
        >
          <ChevronUp className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
        </button>

        <div className="h-24 sm:h-32"></div>
      </div>
    </div>
  );
}
