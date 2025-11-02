"use client";
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
