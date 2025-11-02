import { ComponentGroup } from "@/lib/docs/types";

import OTPDemo from "../components/otp-input";
export const otpInputRegistry: ComponentGroup = {
  name: "otpInputRegistry",
  title: "Otp Input",
  description: "An otp input component with animations and validation.",
  category: "components",
  components: ["otpInputDemo"],
  // Installation configuration
  installation: {
    cliCommand: 'npx shadcn@latest add "https://zeroui.vercel.app/r/dock"',
    dependencies: ["clsx", "tailwind-merge", "framer-motion", "lucide-react"],
    componentPath: "components/ui/dock.tsx",
    utilsCode: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
  },
  props: [
    {
      name: "length",
      type: "number",
      description: "The number of OTP input fields to render. Defaults to 6.",
      required: false,
    },
    {
      name: "onComplete",
      type: "(otp: string) => void",
      description: "Callback function triggered when all OTP fields are filled.",
      required: false,
    },
    {
      name: "onValidate",
      type: "(otp: string) => Promise<boolean> | boolean",
      description: "Callback for OTP validation. Can be sync or async.",
      required: false,
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes for styling the container.",
      required: false,
    },
    {
      name: "disabled",
      type: "boolean",
      description: "If true, the input fields will be disabled. Defaults to false.",
      required: false,
    },
    {
      name: "showHeader",
      type: "boolean",
      description: "Determines whether to display the header section. Defaults to true.",
      required: false,
    },
    {
      name: "showIcon",
      type: "boolean",
      description: "Determines whether to show the icon in the header. Defaults to true.",
      required: false,
    },
    {
      name: "showProgress",
      type: "boolean",
      description: "Determines whether to display the progress bar. Defaults to true.",
      required: false,
    },
    {
      name: "headerTitle",
      type: "string",
      description: "Custom title for the header section.",
      required: false,
    },
    {
      name: "headerDescription",
      type: "string",
      description: "Custom description for the header section.",
      required: false,
    },
  ],

  variants: {
    basic: {
      title: "Otp Input",
      description: "An otp input component with animations and validation.",
      component: OTPDemo,
      image: "/images/components/dock-basic.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Interactive+Dock",
      code: `"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import OTPInput from "@/lib/docs/ui/otp-input";

const OTPDemo = () => {
  const [demoResult, setDemoResult] = useState<string>("");

  const handleComplete = (otp: string) => {
    console.log("OTP Complete:", otp);
  };

  // This is where you integrate with your backend
  const handleValidate = async (otp: string): Promise<boolean> => {
    try {
      // 🚀 REPLACE THIS with your actual API call
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          otp: otp,
          sessionId: "your-session-id", // Get this from your auth flow
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Store auth token, redirect user, etc.
        localStorage.setItem("token", result.token);
        setDemoResult("✅ Access Granted! Redirecting...");
        return true;
      } else {
        setDemoResult("❌ Invalid OTP - Try again");
        return false;
      }
    } catch (error) {
      // For demo purposes, simulate validation
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const isValid = otp === "123456";
      setDemoResult(
        isValid
          ? "✅ Access Granted! (Demo Mode)"
          : "❌ Invalid OTP - Try 123456"
      );
      return isValid;
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-500">
      <div className="flex items-center justify-center min-h-screen p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-lg rounded-3xl p-12"
        >
          {/* Your existing OTP component - no changes needed! */}
          <OTPInput
            length={4}
            onComplete={handleComplete}
            onValidate={handleValidate}
            showProgress={false}
            showHeader={false}
          />

          {/* Results */}
          {demoResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center text-xl font-bold text-black dark:text-white"
            >
              {demoResult}
            </motion.div>
          )}

          {/* Simple instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 text-center text-sm text-black/50 dark:text-white/50 space-y-2"
          >
            <p>💡 Demo: Enter "123456" for success</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OTPDemo;
`,
      manualCode: `"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Shield } from "lucide-react";

interface OTPInputProps {
  length?: number;
  onComplete?: (otp: string) => void;
  onValidate?: (otp: string) => Promise<boolean> | boolean;
  className?: string;
  disabled?: boolean;
  // New customization props
  showHeader?: boolean;
  showIcon?: boolean;
  showProgress?: boolean;
  headerTitle?: string;
  headerDescription?: string;
}

type InputState = "default" | "active" | "filled" | "correct" | "incorrect";

const OTPInput: React.FC<OTPInputProps> = ({
  length = 6,
  onComplete,
  onValidate,
  className = "",
  disabled = false,
  showHeader = true,
  showIcon = true,
  showProgress = true,
  headerTitle = "Security Verification",
  headerDescription = "Enter the 6-digit verification code",
}) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const [states, setStates] = useState<InputState[]>(
    Array(length).fill("default")
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isValidating, setIsValidating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [validationResult, setValidationResult] = useState<boolean | null>(
    null
  );
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleInputChange = async (index: number, value: string) => {
    if (disabled || isValidating) return;

    // Only allow single digits
    const digit = value.replace(/\\D/g, "").slice(-1);

    const newValues = [...values];
    newValues[index] = digit;
    setValues(newValues);

    // Update states
    const newStates = [...states];
    newStates[index] = digit ? "filled" : "default";
    setStates(newStates);

    // Move to next input
    if (digit && index < length - 1) {
      setCurrentIndex(index + 1);
      inputRefs.current[index + 1]?.focus();
    }

    // Check if OTP is complete
    const otpString = newValues.join("");
    if (otpString.length === length) {
      setIsComplete(true);
      onComplete?.(otpString);

      if (onValidate) {
        setIsValidating(true);
        try {
          const isValid = await onValidate(otpString);
          setValidationResult(isValid);

          const validationStates = Array(length).fill(
            isValid ? "correct" : "incorrect"
          );
          setStates(validationStates);
        } catch (error) {
          setValidationResult(false);
          setStates(Array(length).fill("incorrect"));
        } finally {
          setIsValidating(false);
        }
      }
    } else {
      setIsComplete(false);
      setValidationResult(null);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace") {
      if (!values[index] && index > 0) {
        setCurrentIndex(index - 1);
        inputRefs.current[index - 1]?.focus();
      } else {
        const newValues = [...values];
        newValues[index] = "";
        setValues(newValues);

        const newStates = [...states];
        newStates[index] = "default";
        setStates(newStates);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      setCurrentIndex(index - 1);
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      setCurrentIndex(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleFocus = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text").replace(/\\D/g, "");

    if (pastedText.length <= length) {
      const newValues = Array(length).fill("");
      for (let i = 0; i < pastedText.length; i++) {
        newValues[i] = pastedText[i];
      }
      setValues(newValues);

      const newStates = newValues.map((val) => (val ? "filled" : "default"));
      setStates(newStates);

      const nextEmptyIndex = newValues.findIndex((val) => !val);
      if (nextEmptyIndex !== -1) {
        setCurrentIndex(nextEmptyIndex);
        inputRefs.current[nextEmptyIndex]?.focus();
      } else {
        setCurrentIndex(length - 1);
        inputRefs.current[length - 1]?.focus();
      }
    }
  };

  const getInputClasses = (state: InputState, index: number) => {
    const baseClasses =
      "w-16 h-16 text-center text-2xl font-bold rounded-2xl border-2 outline-none transition-all duration-300 backdrop-blur-sm";

    switch (state) {
      case "active":
        return \`\${baseClasses} border-blue-500 bg-white/80 dark:bg-black/80 text-blue-600 dark:text-blue-400 shadow-lg shadow-blue-500/20\`;
      case "filled":
        return \`\${baseClasses} border-black/20 dark:border-white/20 bg-white/90 dark:bg-black/90 text-black dark:text-white\`;
      case "correct":
        return \`\${baseClasses} border-green-500 bg-green-50/80 dark:bg-green-950/80 text-green-600 dark:text-green-400 shadow-lg shadow-green-500/20\`;
      case "incorrect":
        return \`\${baseClasses} border-red-500 bg-red-50/80 dark:bg-red-950/80 text-red-600 dark:text-red-400 shadow-lg shadow-red-500/20\`;
      default:
        return \`\${baseClasses} border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 text-black/60 dark:text-white/60 hover:border-black/20 dark:hover:border-white/20\`;
    }
  };

  const getMotionVariants = (state: InputState) => {
    switch (state) {
      case "active":
        return {
          scale: 1.05,
          y: -2,
          transition: { type: "spring" as const, stiffness: 400, damping: 25 },
        };
      case "correct":
        return {
          scale: [1, 1.1, 1],
          y: [0, -4, 0],
          transition: { duration: 0.6, times: [0, 0.5, 1] },
        };
      case "incorrect":
        return {
          x: [-2, 2, -2, 2, 0],
          scale: [1, 0.98, 1],
          transition: { duration: 0.5 },
        };
      default:
        return { scale: 1, y: 0, x: 0 };
    }
  };

  return (
    <div className={\`flex flex-col items-center \${showHeader ? 'space-y-8' : showProgress ? 'space-y-6' : 'space-y-4'} \${className}\`}>
      {/* Header Section */}
      {showHeader && (
        <motion.div
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {showIcon && (
            <motion.div
              className="relative"
              animate={isValidating ? { rotate: 360 } : {}}
              transition={{
                duration: 2,
                repeat: isValidating ? Infinity : 0,
                ease: "linear",
              }}
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl">
                {isValidating ? (
                  <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin" />
                ) : validationResult === true ? (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <CheckCircle className="w-10 h-10 dark:text-white text-black" />
                  </motion.div>
                ) : validationResult === false ? (
                  <motion.div
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <XCircle className="w-10 h-10 text-white" />
                  </motion.div>
                ) : (
                  <Shield className="w-10 h-10 text-black dark:text-white" />
                )}
              </div>
            </motion.div>
          )}

          <div className="text-center">
            <motion.h1
              className="text-3xl font-bold dark:text-white text-black mb-2"
              animate={{
                backgroundImage:
                  validationResult === true
                    ? "linear-gradient(to right, rgb(34, 197, 94), rgb(34, 197, 94))"
                    : validationResult === false
                    ? "linear-gradient(to right, rgb(239, 68, 68), rgb(239, 68, 68))"
                    : "",
              }}
            >
              {validationResult === true
                ? "Access Granted"
                : validationResult === false
                ? "Access Denied"
                : headerTitle}
            </motion.h1>
            <motion.p
              className="text-black/60 dark:text-white/60 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {headerDescription}
            </motion.p>
          </div>
        </motion.div>
      )}

      {/* OTP Input Grid */}
      <div className="flex items-center justify-center gap-4">
        {Array.from({ length }, (_, index) => {
          const state =
            currentIndex === index && !isComplete && !isValidating
              ? "active"
              : states[index];

          return (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <motion.input
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={values[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onFocus={() => handleFocus(index)}
                onPaste={handlePaste}
                disabled={disabled || isValidating}
                className={\`\${getInputClasses(
                  state,
                  index
                )} disabled:opacity-50 disabled:cursor-not-allowed\`}
                animate={getMotionVariants(state)}
              />

              {/* Active state glow */}
              {state === "active" && (
                <motion.div
                  className="absolute inset-0 border-2 border-blue-400 rounded-2xl opacity-50"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.2, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}

              {/* Input indicator dot */}
              <motion.div
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
                animate={{
                  scale: values[index] ? 1 : 0,
                  opacity: values[index] ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-1 h-1 bg-black/20 dark:bg-white/20 rounded-full" />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Progress Section */}
      {showProgress && (
        <motion.div
          className="w-full max-w-sm space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex justify-between items-center text-sm font-medium">
            <span className="text-black/60 dark:text-white/60">Progress</span>
            <motion.span
              className="text-black dark:text-white"
              animate={{
                color:
                  validationResult === true
                    ? "rgb(34, 197, 94)"
                    : validationResult === false
                    ? "rgb(239, 68, 68)"
                    : undefined,
              }}
            >
              {values.filter((v) => v).length} / {length}
            </motion.span>
          </div>

          <div className="relative h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-black dark:bg-gray-200 rounded-full"
              initial={{ width: "0%" }}
              animate={{
                width: \`\${(values.filter((v) => v).length / length) * 100}%\`,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

            {/* Shimmer effect when complete */}
            {isComplete && (
              <motion.div
                className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            )}
          </div>
        </motion.div>
      )}

      {/* Status Messages */}
      <AnimatePresence mode="wait">
        {validationResult !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={\`text-center px-6 py-3 rounded-2xl font-semibold backdrop-blur-sm \${
              validationResult
                ? "text-green-700 dark:text-green-300 bg-green-100/80 dark:bg-green-900/50 border border-green-200 dark:border-green-800"
                : "text-red-700 dark:text-red-300 bg-red-100/80 dark:bg-red-900/50 border border-red-200 dark:border-red-800"
            }\`}
          >
            {validationResult
              ? "🎉 Verification successful! Access granted."
              : "⚠️ Invalid verification code. Please try again."}
          </motion.div>
        )}

        {isValidating && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            className="text-center px-6 py-3 rounded-2xl font-semibold backdrop-blur-sm text-blue-700 dark:text-blue-300 bg-blue-100/80 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-800"
          >
            🔐 Verifying your code...
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OTPInput;
`,
    },
  },
};
