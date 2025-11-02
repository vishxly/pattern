"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Variant types
type AccordionVariant = "default" | "ghost" | "minimal";

interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  variant?: AccordionVariant;
}

interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  variant?: AccordionVariant;
}

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, variant = "default", ...props }, ref) => {
  const baseStyles = {
    default:
      "border border-zinc-200 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/80",
    ghost: "bg-transparent border-none",
    minimal: "border-b border-zinc-200 dark:border-zinc-700 bg-transparent",
  };

  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(
        "group rounded-md transition-shadow duration-300 mb-2 overflow-hidden",
        baseStyles[variant],
        className
      )}
      {...props}
    />
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, variant = "default", ...props }, ref) => {
  const triggerBaseStyles = {
    default:
      "px-5 py-4 rounded-md data-[state=open]:bg-zinc-100 dark:data-[state=open]:bg-zinc-800/70",
    ghost:
      "px-3 py-3 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800/60 data-[state=open]:bg-zinc-100 dark:data-[state=open]:bg-zinc-800/70",
    minimal:
      "px-0 py-3 border-b border-transparent hover:border-zinc-300 dark:hover:border-zinc-600 rounded-none",
  };

  return (
    <AccordionPrimitive.Header className="w-full">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex w-full items-center justify-between text-left font-medium text-zinc-900 dark:text-zinc-100 text-sm md:text-base transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 group",
          triggerBaseStyles[variant],
          className
        )}
        {...props}
      >
        <span className="truncate">{children}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-300 ease-in-out text-zinc-500 dark:text-zinc-400",
            "group-data-[state=open]:rotate-180"
          )}
          aria-hidden="true"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-zinc-700 dark:text-zinc-300 transition-all duration-300",
      className
    )}
    {...props}
  >
    <div className="px-5 pb-5 pt-2 text-sm leading-relaxed space-y-3">
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  type AccordionVariant,
};
