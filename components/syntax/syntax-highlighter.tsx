/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { tokenize } from "./tokenizer";
import type { Token } from "./syntax";
import {
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Search,
  Sun,
  Moon,
  Share2,
  Download,
} from "lucide-react";
import { LanguageIcon } from "./language-icon";

import { motion, AnimatePresence } from "framer-motion";

interface SyntaxHighlighterProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  maxLines?: number;
  fileName?: string;
  showSearch?: boolean;
  showShare?: boolean;
  showThemeToggle?: boolean;
  showDownload?: boolean;
  showExpandCollapse?: boolean;
  showLogo?: boolean;
}

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  code,
  language,
  showLineNumbers = false,
  maxLines = 15,
  fileName = "",
  showSearch = false,
  showShare = false,
  showThemeToggle = false,
  showDownload = false,
  showExpandCollapse = false,
  showLogo = false,
}) => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<number[]>([]);
  const [currentSearchIndex, setCurrentSearchIndex] = useState(-1);
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    setTokens(tokenize(code, language));
  }, [code, language]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSearch = useCallback(() => {
    if (!searchTerm) {
      setSearchResults([]);
      setCurrentSearchIndex(-1);
      return;
    }

    const results = code.split("\n").reduce((acc: number[], line, index) => {
      if (line.toLowerCase().includes(searchTerm.toLowerCase())) {
        acc.push(index);
      }
      return acc;
    }, []);

    setSearchResults(results);
    setCurrentSearchIndex(results.length > 0 ? 0 : -1);

    if (results.length > 0 && codeRef.current) {
      const lineElement = codeRef.current.querySelector(
        `[data-line="${results[0]}"]`
      );
      lineElement?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [searchTerm, code]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  const navigateSearch = (direction: "next" | "prev") => {
    if (searchResults.length === 0) return;

    let newIndex;
    if (direction === "next") {
      newIndex = (currentSearchIndex + 1) % searchResults.length;
    } else {
      newIndex =
        (currentSearchIndex - 1 + searchResults.length) % searchResults.length;
    }

    setCurrentSearchIndex(newIndex);

    if (codeRef.current) {
      const lineElement = codeRef.current.querySelector(
        `[data-line="${searchResults[newIndex]}"]`
      );
      lineElement?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const shareCode = async () => {
    try {
      await navigator.share({
        title: `Code Snippet - ${language}`,
        text: code,
        url: window.location.href,
      });
    } catch (err) {
      console.error("Failed to share:", err);
    }
  };

  const downloadCode = () => {
    const element = document.createElement("a");
    const file = new Blob([code], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const codeLines = code.split("\n");
  const isCodeLong = codeLines.length > maxLines;
  const capitalizeFirstLetter = (str: string) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
  return (
    <div
      className={`rounded-[10px] border border-gray-300 dark:border-gray-800  overflow-hidden w-full max-w-full font-sans transition-colors duration-300`}
    >
      <div
        className={`flex items-center justify-between px-4 py-2 bg-[#f6f6fa] dark:bg-[#141414] border-b border-gray-200 dark:border-gray-800`}
      >
        <div className="flex items-center space-x-2 overflow-hidden">
          <div className="flex items-center space-x-1.5 text-neutral-500 dark:text-neutral-400">
            {showLogo && <LanguageIcon language={language} />}
            <span className="text-sm font-normal truncate">
              {capitalizeFirstLetter(language)} {fileName}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2">
          {showThemeToggle && (
            <button
              onClick={() => document.documentElement.classList.toggle("dark")}
              className="text-black dark:text-white  transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              <Sun className="w-5 h-5 block dark:hidden" />
              <Moon className="w-5 h-5 hidden dark:block" />
            </button>
          )}
          {showShare && (
            <button
              onClick={shareCode}
              className="text-black dark:text-white transition-colors duration-200"
              aria-label="Share code"
            >
              <Share2 className="w-5 h-5" />
            </button>
          )}
          {showDownload && (
            <button
              onClick={downloadCode}
              className="text-black dark:text-white transition-colors duration-200"
              aria-label="Download code"
            >
              <Download className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={copyToClipboard}
            className="text-neutral-500 dark:text-neutral-400 transition-colors duration-200"
            aria-label={copied ? "Copied!" : "Copy code"}
          >
            {copied ? (
              <Check className="w-5 h-5" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
      {showSearch && (
        <div className={`p-4 bg-gray-100 dark:bg-gray-950`}>
          <div className="flex items-center space-x-2 w-full">
            <Search
              className={`w-5 h-5 flex-shrink-0 text-gray-600 dark:text-gray-400`}
            />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`flex-grow px-2 py-1 rounded-md text-sm sm:text-base 
                bg-white dark:bg-gray-950 
                text-gray-900 dark:text-white 
                placeholder-gray-500 dark:placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {searchTerm && (
              <>
                <button
                  onClick={() => navigateSearch("prev")}
                  className={`px-2 py-1 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-opacity-80`}
                  disabled={searchResults.length === 0}
                >
                  ↑
                </button>
                <button
                  onClick={() => navigateSearch("next")}
                  className={`px-2 py-1 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-opacity-80`}
                  disabled={searchResults.length === 0}
                >
                  ↓
                </button>
                <span className={`text-sm text-gray-600 dark:text-gray-400`}>
                  {searchResults.length > 0
                    ? `${currentSearchIndex + 1}/${searchResults.length}`
                    : "No results"}
                </span>
              </>
            )}
          </div>
        </div>
      )}
      <div
        className={`relative bg-[#f7f7f7] dark:bg-[#1a1a1a] overflow-hidden`}
      >
        <pre
          ref={codeRef}
          className={`p-2 sm:p-4 text-xs sm:text-sm lg:text-sm leading-relaxed overflow-x-auto font-medium ${
            isCodeLong && !isExpanded && showExpandCollapse
              ? "max-h-[200px] sm:max-h-[300px] md:max-h-[400px]"
              : ""
          }`}
        >
          <code>
            {codeLines.map((line, lineIndex) => (
              <div
                key={lineIndex}
                className={`flex ${
                  searchResults.includes(lineIndex)
                    ? "bg-yellow-100 dark:bg-yellow-900 dark:bg-opacity-50"
                    : ""
                }`}
                data-line={lineIndex}
              >
                {showLineNumbers && (
                  <span
                    className={`select-none mr-2 sm:mr-4 text-gray-400 dark:text-gray-600 text-right w-6 sm:w-8 text-xs sm:text-sm `}
                  >
                    {lineIndex + 1}
                  </span>
                )}
                <span className="w-full">
                  {tokenize(line, language).map((token, tokenIndex) => (
                    <span
                      key={tokenIndex}
                      className={getTokenColor(token.type)}
                    >
                      {token.content}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </code>
        </pre>
        {isCodeLong && !isExpanded && showExpandCollapse && (
          <div
            className={`absolute bottom-0 left-0 right-0 h-24  bg-transparent  dark:bg-transparent pointer-events-none`}
          />
        )}
      </div>
      {isCodeLong && showExpandCollapse && (
        <div
          className={`px-2 sm:px-4 py-2 sm:py-3 bg-[#f1f1f1] dark:bg-[#1a1a1a]  `}
        >
          <motion.button
            onClick={toggleExpand}
            className={`w-full flex items-center justify-center px-2 sm:px-4 py-1 sm:py-2  text-black dark:text-white rounded-lg transition-all duration-300 ease-in-out text-sm sm:text-base`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isExpanded ? (
                <motion.div
                  key="collapse"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-2 "
                >
                  <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-300 " />
                  <span className="font-medium text-sm dark:text-gray-200 text-gray-800">
                    Collapse Code
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="expand"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-2"
                >
                  <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                  <span className="font-medium text-sm dark:text-gray-200 text-gray-800">
                    Expand Code
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      )}
    </div>
  );
};

function getTokenColor(type: string): string {
  const colors = {
    keyword: "text-pink-600 dark:text-pink-400",
    string: "text-blue-600 dark:text-blue-300",
    number: "text-blue-600 dark:text-blue-400",
    boolean: "text-blue-600 dark:text-blue-400",
    comment: "text-gray-500 dark:text-gray-400 italic",
    operator: "text-purple-600 dark:text-purple-400",
    punctuation: "text-gray-600 dark:text-gray-400",
    function: "text-yellow-600 dark:text-yellow-400",
    class: "text-red-600 dark:text-red-400",
    property: "text-indigo-600 dark:text-indigo-400",
    variable: "text-black dark:text-white",
    htmlTag: "text-green-600 dark:text-green-500",
    htmlOpenTag: "text-green-600 dark:text-green-500",
    htmlCloseTag: "text-green-600 dark:text-green-500",
    default: "text-purple-800 dark:text-purple-400",
  };

  return colors[type as keyof typeof colors] || colors.default;
}

export default SyntaxHighlighter;
