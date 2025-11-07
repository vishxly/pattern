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
  Check,
  Upload,
  MessageSquare,
} from "lucide-react";

import {
  patterns,
  categories,
  buttonPatterns,
  buttonCategories,
  Pattern,
} from "@/components/pattern/patterns";
import SyntaxHighlighter from "@/components/syntax/syntax-highlighter";
import { usePatternLikes } from "@/hooks/use-pattern-likes";
import FeedbackModal from "@/components/modals/feedback-modal";
import PatternSubmissionModal from "@/components/modals/pattern-submission-modal";
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

  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);

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

    // Regular category filtering - sort by ID descending (newest first)
    let filtered: AnyPattern[];
    if (patternType === "background") {
      filtered =
        currentCategory === null || currentCategory === "all"
          ? patterns
          : patterns.filter((p) => p.category === currentCategory);
    } else {
      filtered =
        currentCategory === null || currentCategory === "all"
          ? buttonPatterns
          : buttonPatterns.filter((p) => p.category === currentCategory);
    }

    // Sort by ID in descending order (highest ID / newest first)
    return [...filtered].sort((a, b) => b.id - a.id);
  };

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

  const filteredPatterns = getFilteredPatterns();

  const currentCategories =
    patternType === "background" ? categories : buttonCategories;
  const currentActiveCategory =
    patternType === "background" ? activeCategory : activeButtonCategory;

  return (
    <div
      className="min-h-screen w-full relative overflow-x-hidden"
      style={getCurrentBackground()}
    >
      {renderMainBackgroundOverlay(selectedPattern)}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-6 lg:pt-12 pb-20 max-w-7xl">
          <div className="text-center max-w-5xl mx-auto relative">
            {/* Floating Action Buttons */}
            <div className="absolute top-0 left-0 right-0 flex flex-col sm:flex-row justify-between items-start sm:items-start gap-3 sm:gap-0 z-20 px-2 sm:px-0">
              <button
                onClick={(e) =>
                  handleLikeClick(e, String(getCurrentPattern().id))
                }
                className={`group flex items-center gap-2 backdrop-blur-xl rounded-2xl px-3 sm:px-4 py-2 transition-all duration-500 border-2 hover:scale-110 text-sm ${
                  getLikeData(String(getCurrentPattern().id)).isLiked
                    ? "bg-gradient-to-r from-red-500/30 to-pink-500/30 border-red-400/50 shadow-xl shadow-red-500/30"
                    : "bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30 hover:shadow-xl"
                }`}
                disabled={likesLoading}
              >
                <Heart
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
                    getLikeData(String(getCurrentPattern().id)).isLiked
                      ? "fill-red-500 text-red-500 animate-pulse"
                      : "text-white/90 group-hover:text-red-400"
                  }`}
                />
                <span className="text-xs sm:text-sm font-bold text-white">
                  {getLikeData(String(getCurrentPattern().id)).count}
                </span>
              </button>

              <div className="hidden sm:flex items-center gap-2 sm:gap-3 flex-wrap">
                {getCurrentPattern().isNew && (
                  <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-xl border-2 border-yellow-400/30 text-white text-xs font-bold px-3 sm:px-4 py-2 rounded-2xl shadow-xl flex items-center gap-1.5 sm:gap-2">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                    NEW
                  </div>
                )}

                <button
                  onClick={() =>
                    copyToClipboard(
                      getCurrentCode(),
                      String(getCurrentPattern().id)
                    )
                  }
                  className={`flex items-center gap-1.5 sm:gap-2 backdrop-blur-xl text-white px-3 sm:px-5 py-2 rounded-2xl transition-all duration-500 font-bold text-xs sm:text-sm shadow-xl border-2 hover:scale-110 ${
                    copiedId === String(getCurrentPattern().id)
                      ? "bg-gradient-to-r from-green-500/30 to-emerald-500/30 border-green-400/50 shadow-green-500/30"
                      : "bg-white/10 border-white/30 hover:bg-white/20"
                  }`}
                >
                  {copiedId === String(getCurrentPattern().id) ? (
                    <>
                      <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="fixed bottom-8 left-8 z-30 flex flex-col gap-3">
              {/* Feedback Button */}
              <button
                onClick={() => setShowFeedbackModal(true)}
                className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700
               text-white px-6 py-4 rounded-2xl font-medium shadow-md
               hover:shadow-lg active:scale-[0.97] transition-all duration-300
               border border-white/10 disabled:opacity-60"
                title="Send Feedback"
              >
                <MessageSquare className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span className="hidden sm:inline">Feedback</span>
              </button>

              {/* Submit Pattern Button */}
              <button
                onClick={() => setShowSubmissionModal(true)}
                className="group flex items-center gap-3 bg-purple-600 hover:bg-purple-700
               text-white px-6 py-4 rounded-2xl font-medium shadow-md
               hover:shadow-lg active:scale-[0.97] transition-all duration-300
               border border-white/10 disabled:opacity-60"
                title="Submit Pattern"
              >
                <Upload className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span className="hidden sm:inline">Submit</span>
              </button>
            </div>

            {/* Main Heading */}
            <div className="mt-8">
              <div className="inline-flex items-center gap-2 mb-6 px-3 sm:px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl max-w-[90%] sm:max-w-none">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                <span className="text-white/90 text-xs sm:text-sm font-medium truncate">
                  Currently Viewing: {getCurrentPattern().name}
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-4 sm:mb-6 leading-none tracking-tight px-2">
                <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent drop-shadow-2xl">
                  Pattern Library
                </span>
              </h1>

              <p className="text-base sm:text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed font-light px-4">
                Beautiful backgrounds and buttons. Copy, paste, and customize
                for your next project.
              </p>

              {patternType === "button" && (
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-12 px-4">
                  <button
                    className={`${extractClassName(
                      selectedButtonPattern.getStartedCode
                    )} pointer-events-none shadow-2xl transform hover:scale-105 transition-transform text-sm sm:text-base w-full sm:w-auto max-w-[200px]`}
                  >
                    Get Started
                  </button>
                  <button
                    className={`${extractClassName(
                      selectedButtonPattern.exploreCode
                    )} pointer-events-none shadow-2xl transform hover:scale-105 transition-transform text-sm sm:text-base w-full sm:w-auto max-w-[200px]`}
                  >
                    Explore
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Pattern Type Toggle */}
        <div className="flex justify-center mb-12 px-4">
          <div className="inline-flex gap-2 bg-black/30 backdrop-blur-xl rounded-3xl p-2 border-2 border-white/10 shadow-2xl w-full sm:w-auto max-w-md">
            <button
              onClick={() => setPatternType("background")}
              className={`flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold transition-all duration-500 flex-1 sm:flex-none text-sm sm:text-base ${
                patternType === "background"
                  ? "bg-white/20 text-white shadow-2xl scale-105"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
              Backgrounds
            </button>
            <button
              onClick={() => setPatternType("button")}
              className={`flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold transition-all duration-500 flex-1 sm:flex-none text-sm sm:text-base ${
                patternType === "button"
                  ? "bg-white/20 text-white shadow-2xl scale-105"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              <MousePointer className="w-4 h-4 sm:w-5 sm:h-5" />
              Buttons
            </button>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-16 px-4">
          <div className="inline-flex flex-wrap gap-3 bg-black/30 backdrop-blur-xl rounded-3xl p-3 border-2 border-white/10 shadow-2xl max-w-4xl">
            <button
              onClick={() => handleCategoryChange(null)}
              className={`px-6 py-3 rounded-2xl font-bold transition-all duration-500 whitespace-nowrap ${
                currentActiveCategory === null
                  ? "bg-white/20 text-white shadow-2xl scale-105"
                  : "text-white/60 hover:text-white hover:bg-white/10 hover:scale-105"
              }`}
            >
              All
            </button>

            {/* Top Liked Button */}
            <button
              onClick={() => handleCategoryChange("favourites")}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-500 whitespace-nowrap ${
                currentActiveCategory === "favourites"
                  ? "bg-gradient-to-r from-yellow-500/30 to-orange-500/30 text-white shadow-2xl scale-105 border-2 border-yellow-400/50"
                  : "text-white/60 hover:text-white hover:bg-white/10 hover:scale-105"
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
                  className={`px-6 py-3 rounded-2xl font-bold transition-all duration-500 whitespace-nowrap ${
                    currentActiveCategory === category.id
                      ? "bg-white/20 text-white shadow-2xl scale-105"
                      : "text-white/60 hover:text-white hover:bg-white/10 hover:scale-105"
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
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPatterns.map((pattern) => {
              const likeData = getLikeData(String(pattern.id));

              return (
                <div
                  key={pattern.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredPattern(String(pattern.id))}
                  onMouseLeave={() => setHoveredPattern(null)}
                >
                  <div
                    className={`aspect-square rounded-3xl cursor-pointer transition-all duration-500 transform relative overflow-hidden border-2 ${
                      getCurrentPattern().id === pattern.id
                        ? "ring-4 ring-white/50 ring-offset-4 ring-offset-transparent scale-105 shadow-2xl border-white/30"
                        : "border-white/10 hover:border-white/30 hover:scale-105 hover:shadow-2xl"
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
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6">
                        <button
                          className={`${extractClassName(
                            pattern.getStartedCode
                          )} pointer-events-none text-sm`}
                          style={{ minWidth: "80px" }}
                        >
                          Get Started
                        </button>
                        <button
                          className={`${extractClassName(
                            pattern.exploreCode
                          )} pointer-events-none text-sm`}
                          style={{ minWidth: "70px" }}
                        >
                          Explore
                        </button>
                      </div>
                    )}

                    {/* Like Badge */}
                    <div className="absolute top-4 left-4 z-30">
                      <button
                        onClick={(e) => handleLikeClick(e, String(pattern.id))}
                        className={`group/like flex items-center gap-2 backdrop-blur-xl rounded-full px-3 py-1.5 transition-all duration-500 border-2 hover:scale-110 ${
                          likeData.isLiked
                            ? "bg-red-500/30 border-red-400/50 shadow-lg shadow-red-500/30"
                            : "bg-white/10 border-white/20 hover:bg-white/20"
                        }`}
                        disabled={likesLoading}
                      >
                        <Heart
                          className={`w-4 h-4 transition-all duration-300 ${
                            likeData.isLiked
                              ? "fill-red-500 text-red-500"
                              : "text-white/90 group-hover/like:text-red-400"
                          }`}
                        />
                        <span
                          className={`text-xs font-bold ${
                            likeData.isLiked ? "text-red-100" : "text-white/90"
                          }`}
                        >
                          {likeData.count}
                        </span>
                      </button>
                    </div>

                    {pattern.isNew && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-xl border-2 border-yellow-400/30 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-xl">
                          ✨ NEW
                        </span>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-3xl flex flex-col items-center justify-center transition-all duration-500 z-20 ${
                        hoveredPattern === String(pattern.id)
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <h3 className="text-white font-bold text-xl mb-6 text-center px-4">
                        {pattern.name}
                      </h3>

                      <div className="flex gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePatternClick(pattern);
                          }}
                          className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-xl text-white px-5 py-3 rounded-2xl transition-all duration-300 font-bold text-sm border-2 border-white/20 hover:scale-110 shadow-xl"
                        >
                          <Eye className="w-4 h-4" />
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
                          className={`flex items-center gap-2 backdrop-blur-xl text-white px-5 py-3 rounded-2xl transition-all duration-300 font-bold text-sm border-2 hover:scale-110 shadow-xl ${
                            copiedId === String(pattern.id)
                              ? "bg-green-500/30 border-green-400/50"
                              : "bg-white/20 border-white/20 hover:bg-white/30"
                          }`}
                        >
                          {copiedId === String(pattern.id) ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                          {copiedId === String(pattern.id) ? "Copied!" : "Copy"}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <h3 className="text-white font-bold text-lg">
                      {pattern.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Code Display */}
        <div className="max-w-4xl mx-auto px-4 pb-24">
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/10 shadow-2xl">
            <SyntaxHighlighter code={getCurrentCode()} language="tsx" />
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-white/70 text-sm">
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
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white px-6 py-3 rounded-2xl transition-all duration-300 font-bold border-2 border-white/20 hover:scale-105 shadow-xl"
              >
                <Copy className="w-4 h-4" />
                Copy Current
              </button>
            </div>
          </div>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-30 p-4 bg-white/20 hover:bg-white/30 backdrop-blur-xl rounded-2xl border-2 border-white/20 shadow-2xl transition-all duration-500 transform hover:scale-110 ${
            showScrollTop
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0 pointer-events-none"
          }`}
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </button>

        <div className="h-24 sm:h-32"></div>
      </div>
      <FeedbackModal
        isOpen={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
      />
      <PatternSubmissionModal
        isOpen={showSubmissionModal}
        onClose={() => setShowSubmissionModal(false)}
      />
    </div>
  );
}
