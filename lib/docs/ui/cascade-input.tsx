"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Check, ArrowLeft } from "lucide-react";

export interface CascadeInputField {
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

export interface CascadeInputStep {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string; // Now used for accent colors only
  fields: CascadeInputField[];
}

export interface CascadeInputProps {
  steps: CascadeInputStep[];
  onComplete?: (data: Record<string, string>) => void;
  onStepChange?: (step: number, data: Record<string, string>) => void;
  className?: string;
  containerHeight?: string;
  cardWidth?: string;
  cardMaxWidth?: string;
  cardMinWidth?: string;
  showProgressDots?: boolean;
}

export interface CascadeInputRef {
  goToStep: (stepIndex: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
  getCurrentData: () => Record<string, string>;
}

export const CascadeInput = React.forwardRef<
  CascadeInputRef,
  CascadeInputProps
>(
  (
    {
      steps,
      onComplete,
      onStepChange,
      className = "",
      containerHeight = "500px",
      cardWidth = "w-full",
      cardMaxWidth = "max-w-md",
      cardMinWidth = "min-w-[320px]",
      showProgressDots = true,
    },
    ref
  ) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [completedSteps, setCompletedSteps] = useState<Set<number>>(
      new Set()
    );
    const [isComplete, setIsComplete] = useState(false);

    const updateFormData = (field: string, value: string) => {
      const newData = { ...formData, [field]: value };
      setFormData(newData);
      onStepChange?.(currentStep, newData);
    };

    const isStepValid = (stepIndex: number) => {
      const step = steps[stepIndex];
      return step.fields
        .filter((field) => field.required)
        .every((field) => formData[field.name]?.trim());
    };

    const nextStep = () => {
      if (isStepValid(currentStep)) {
        setCompletedSteps((prev) => new Set(prev).add(currentStep));
        if (currentStep < steps.length - 1) {
          setCurrentStep((prev) => prev + 1);
        } else {
          setIsComplete(true);
          onComplete?.(formData);
        }
      }
    };

    const prevStep = () => {
      if (currentStep > 0) {
        setCurrentStep((prev) => prev - 1);
      }
    };

    const goToStep = (stepIndex: number) => {
      if (stepIndex < currentStep || completedSteps.has(stepIndex)) {
        setCurrentStep(stepIndex);
      }
    };

    const reset = () => {
      setCurrentStep(0);
      setIsComplete(false);
      setCompletedSteps(new Set());
      setFormData({});
    };

    // Expose methods via ref
    React.useImperativeHandle(ref, () => ({
      goToStep,
      nextStep,
      prevStep,
      reset,
      getCurrentData: () => formData,
    }));

    if (isComplete) {
      return (
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className={`
            relative overflow-hidden rounded-3xl border
            bg-white/80 dark:bg-black/40
            backdrop-blur-xl backdrop-saturate-150
            border-white/30 dark:border-white/10
            shadow-2xl shadow-black/10 dark:shadow-black/40
            p-8 text-center
            ${cardWidth} ${cardMaxWidth} ${cardMinWidth} ${className}
          `}
        >
          {/* Glass overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 dark:from-white/5 dark:via-transparent dark:to-white/10 pointer-events-none" />

          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="relative w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/20"
          >
            <Check className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="relative text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3">
            Perfect!
          </h2>
          <p className="relative text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Your information has been saved successfully.
          </p>

          <motion.button
            onClick={reset}
            className="
              relative w-full overflow-hidden rounded-2xl 
              bg-white/40 dark:bg-white/10 
              backdrop-blur-md backdrop-saturate-150
              border border-white/40 dark:border-white/20
              text-gray-800 dark:text-white py-4 px-6 font-semibold
              shadow-lg hover:shadow-xl 
              transition-all duration-300
              hover:bg-white/60 dark:hover:bg-white/20
            "
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Start Over</span>
          </motion.button>
        </motion.div>
      );
    }

    return (
      <div
        className={`relative ${cardWidth} ${cardMaxWidth} ${cardMinWidth} ${className}`}
      >
        {/* Stack of Cards - Liquid Glass Design */}
        <div className="relative" style={{ height: containerHeight }}>
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = completedSteps.has(index);

            const zIndex =
              index === currentStep
                ? steps.length
                : steps.length - Math.abs(index - currentStep);

            const yOffset = (index - currentStep) * 16;
            const scale =
              index === currentStep
                ? 1
                : 0.94 - Math.abs(index - currentStep) * 0.03;
            const opacity =
              index === currentStep
                ? 1
                : Math.max(0.75, 1 - Math.abs(index - currentStep) * 0.1);

            return (
              <motion.div
                key={step.id}
                className="absolute w-full"
                style={{
                  zIndex,
                  top: 0,
                }}
                initial={false}
                animate={{
                  y: yOffset,
                  scale,
                  opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  opacity: { duration: 0.2 },
                }}
              >
                <motion.div
                  className={`
                    relative overflow-hidden rounded-3xl border
                    ${
                      isActive
                        ? "bg-white/90 dark:bg-black/70"
                        : "bg-white/85 dark:bg-black/60"
                    }
                    backdrop-blur-xl backdrop-saturate-150
                    ${
                      isActive
                        ? "border-white/50 dark:border-white/20"
                        : "border-white/40 dark:border-white/15"
                    }
                    shadow-2xl shadow-black/10 dark:shadow-black/40
                    w-full transition-all duration-300
                    ${
                      isActive
                        ? "ring-2 ring-white/60 dark:ring-white/40 shadow-3xl"
                        : "hover:shadow-xl hover:bg-white/90 dark:hover:bg-black/70"
                    }
                  `}
                  onClick={() =>
                    !isActive &&
                    (index < currentStep || isCompleted) &&
                    goToStep(index)
                  }
                  style={{
                    cursor:
                      !isActive && (index < currentStep || isCompleted)
                        ? "pointer"
                        : "default",
                  }}
                  whileHover={
                    !isActive && (index < currentStep || isCompleted)
                      ? { scale: 1.01 }
                      : {}
                  }
                >
                  {/* Glass overlay effect - Less prominent on background cards */}
                  <div
                    className={`
                    absolute inset-0 pointer-events-none
                    ${
                      isActive
                        ? "bg-gradient-to-br from-white/15 via-transparent to-white/5 dark:from-white/8 dark:via-transparent dark:to-white/5"
                        : "bg-gradient-to-br from-white/10 via-transparent to-white/3 dark:from-white/5 dark:via-transparent dark:to-white/3"
                    }
                  `}
                  />

                  {/* Subtle animated shimmer for active card */}
                  {isActive && (
                    <div className="absolute inset-0 opacity-30">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: [-200, 200],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "easeInOut",
                        }}
                        style={{
                          transform: "skewX(-45deg)",
                        }}
                      />
                    </div>
                  )}

                  {/* Header */}
                  <div
                    className={`
                    relative px-6 py-5 
                    border-b border-white/25 dark:border-white/15
                    ${
                      isActive
                        ? "bg-white/20 dark:bg-black/20"
                        : "bg-white/15 dark:bg-black/15"
                    }
                    backdrop-blur-sm
                  `}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`
                          relative w-12 h-12 rounded-2xl flex items-center justify-center
                          bg-gradient-to-br ${step.color}
                          shadow-lg shadow-black/20 dark:shadow-black/40
                        `}
                        >
                          {/* Glass effect on icon container */}
                          <div className="absolute inset-0 bg-white/15 rounded-2xl backdrop-blur-sm border border-white/20" />
                          <div className="relative text-white">
                            {isCompleted ? (
                              <Check className="w-6 h-6" />
                            ) : (
                              step.icon
                            )}
                          </div>
                        </div>

                        <div>
                          <h2 className="font-bold text-lg bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                            {step.title}
                          </h2>
                          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                            {step.subtitle}
                          </p>
                        </div>
                      </div>

                      {isCompleted && (
                        <motion.div
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg"
                        >
                          <Check className="w-5 h-5 text-white" />
                        </motion.div>
                      )}
                    </div>

                    {/* Step indicator */}
                    <div className="absolute top-3 right-3 text-xs font-bold text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-black/40 px-2 py-1 rounded-full backdrop-blur-md border border-white/30 dark:border-white/20">
                      {index + 1}/{steps.length}
                    </div>
                  </div>

                  {/* Form Content - Only visible for active step */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="relative p-6 space-y-5"
                      >
                        {step.fields.map((field, fieldIndex) => (
                          <motion.div
                            key={field.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: fieldIndex * 0.1 + 0.2 }}
                            className="relative"
                          >
                            <input
                              type={field.type}
                              placeholder={field.placeholder}
                              value={formData[field.name] || ""}
                              onChange={(e) =>
                                updateFormData(field.name, e.target.value)
                              }
                              className="
                                w-full px-4 py-4 rounded-2xl border
                                bg-white/70 dark:bg-black/30
                                backdrop-blur-md backdrop-saturate-150
                                border-white/50 dark:border-white/15
                                text-gray-900 dark:text-white
                                placeholder-gray-500 dark:placeholder-gray-400
                                focus:bg-white/85 dark:focus:bg-black/50
                                focus:border-white/70 dark:focus:border-white/25
                                focus:ring-4 focus:ring-white/25 dark:focus:ring-white/15
                                focus:outline-none
                                transition-all duration-300
                                shadow-inner shadow-black/5 dark:shadow-black/20
                                hover:bg-white/80 dark:hover:bg-black/40
                              "
                            />
                            {field.required && (
                              <span className="absolute right-4 top-4 text-red-400 text-sm font-medium">
                                *
                              </span>
                            )}
                          </motion.div>
                        ))}

                        {/* Navigation */}
                        <div className="flex items-center justify-between pt-6">
                          <motion.button
                            onClick={prevStep}
                            disabled={currentStep === 0}
                            className={`
                              flex items-center space-x-2 px-5 py-3 rounded-2xl font-semibold transition-all duration-200
                              ${
                                currentStep === 0
                                  ? "text-gray-400 dark:text-gray-600 cursor-not-allowed"
                                  : `
                                  bg-white/50 dark:bg-black/30
                                  backdrop-blur-md backdrop-saturate-150
                                  border border-white/40 dark:border-white/10
                                  text-gray-700 dark:text-gray-300
                                  hover:bg-white/70 dark:hover:bg-black/50
                                  hover:text-gray-900 dark:hover:text-white
                                  shadow-lg hover:shadow-xl
                                `
                              }
                            `}
                            whileHover={
                              currentStep > 0 ? { x: -2, scale: 1.02 } : {}
                            }
                            whileTap={currentStep > 0 ? { scale: 0.95 } : {}}
                          >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back</span>
                          </motion.button>

                          <motion.button
                            onClick={nextStep}
                            disabled={!isStepValid(currentStep)}
                            className={`
                              relative overflow-hidden flex items-center space-x-2 px-8 py-4 rounded-2xl font-semibold transition-all duration-200
                              ${
                                isStepValid(currentStep)
                                  ? `
                                  bg-gradient-to-r ${step.color}
                                  text-white shadow-xl hover:shadow-2xl
                                  border border-white/30
                                  backdrop-blur-md backdrop-saturate-150
                                `
                                  : `
                                  bg-white/30 dark:bg-black/20
                                  backdrop-blur-md backdrop-saturate-150
                                  border border-white/20 dark:border-white/10
                                  text-gray-400 dark:text-gray-600 cursor-not-allowed
                                  shadow-inner
                                `
                              }
                            `}
                            whileHover={
                              isStepValid(currentStep)
                                ? { scale: 1.05, x: 2 }
                                : {}
                            }
                            whileTap={
                              isStepValid(currentStep) ? { scale: 0.95 } : {}
                            }
                          >
                            {/* Button glass overlay */}
                            {isStepValid(currentStep) && (
                              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent pointer-events-none" />
                            )}

                            <span className="relative">
                              {currentStep === steps.length - 1
                                ? "Complete"
                                : "Continue"}
                            </span>
                            <ChevronRight className="w-4 h-4 relative" />
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Completed step preview */}
                  {isCompleted && !isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="
                        relative px-6 py-4 
                        bg-white/30 dark:bg-black/20
                        backdrop-blur-sm backdrop-saturate-150
                        border-t border-white/20 dark:border-white/10
                      "
                    >
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {step.fields.map(
                          (field) =>
                            formData[field.name] && (
                              <span
                                key={field.name}
                                className="inline-block mr-3 bg-white/40 dark:bg-black/30 px-2 py-1 rounded-lg backdrop-blur-sm"
                              >
                                {formData[field.name].length > 20
                                  ? `${formData[field.name].substring(
                                      0,
                                      20
                                    )}...`
                                  : formData[field.name]}
                              </span>
                            )
                        )}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress dots - Liquid Glass Style */}
        {showProgressDots && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center space-x-3 mt-8"
          >
            {steps.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToStep(index)}
                disabled={index > currentStep && !completedSteps.has(index)}
                className={`
                  relative w-4 h-4 rounded-full transition-all duration-300 backdrop-blur-md
                  ${
                    index === currentStep
                      ? `
                      bg-white/90 dark:bg-white/80
                      shadow-lg shadow-white/30 dark:shadow-white/20
                      ring-2 ring-white/50 dark:ring-white/40
                      scale-125
                    `
                      : completedSteps.has(index)
                      ? `
                      bg-gradient-to-br from-emerald-400 to-green-500
                      shadow-md shadow-emerald-500/20
                    `
                      : index < currentStep
                      ? "bg-white/60 dark:bg-white/40 shadow-sm"
                      : "bg-white/20 dark:bg-white/10 shadow-inner"
                  } 
                  ${
                    index <= currentStep || completedSteps.has(index)
                      ? "cursor-pointer hover:scale-125"
                      : "cursor-not-allowed"
                  }
                `}
                whileHover={
                  index <= currentStep || completedSteps.has(index)
                    ? { scale: 1.3 }
                    : {}
                }
                whileTap={
                  index <= currentStep || completedSteps.has(index)
                    ? { scale: 1.1 }
                    : {}
                }
              >
                {/* Inner glow effect for active dot */}
                {index === currentStep && (
                  <div className="absolute inset-0 rounded-full bg-white/50 dark:bg-white/30 animate-pulse" />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Floating completed count - Glass Style */}
        <AnimatePresence>
          {completedSteps.size > 0 && (
            <motion.div
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, y: 20 }}
              className="
                absolute top-4 right-4
                bg-white/70 dark:bg-black/50
                backdrop-blur-lg backdrop-saturate-150
                px-4 py-2 rounded-full
                shadow-lg shadow-black/10 dark:shadow-black/30
                border border-white/30 dark:border-white/20
              "
            >
              <span className="text-sm font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {completedSteps.size}/{steps.length} completed
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

CascadeInput.displayName = "CascadeInput";
