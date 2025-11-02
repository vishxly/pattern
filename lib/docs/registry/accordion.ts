import { AccordionDemo } from "../components/accordion";
import { ComponentGroup } from "@/lib/docs/types";
import { AccordionBasicExample , AccordionMultipleExample, AccordionVariantsExample } from "../components/example/accordion";
  
export const accordionRegistry: ComponentGroup = {
  name: "accordionRegistry",
  title: "Accordion",
  description:
    "Displays collapsible content panels for presenting information in a limited amount of space.",
  category: "components",
  components: ["AccordionDemo"],
  installation: {
    cliCommand: "npx shadcn@latest add \"https://zeroui.vercel.app/r/accordion\"",
    dependencies: ["@radix-ui/react-accordion", "clsx", "tailwind-merge", "lucide-react"],
    componentPath: "components/zeroui/accordion.tsx",
    utilsCode: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
  },
  examples: [
    {
      title: "Basic Usage",
      description: "Simple accordion with single collapsible item",
      component: AccordionBasicExample,
      code: `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/zeroui/accordion";

export function AccordionBasicExample() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is this component?</AccordionTrigger>
        <AccordionContent>
          This is a basic accordion implementation using Radix UI primitives.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do I use it?</AccordionTrigger>
        <AccordionContent>
          Simply import the components and use them with your content.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
    },
    {
      title: "Multiple Open Items",
      description: "Allow multiple accordion items to be open simultaneously",
      component: AccordionMultipleExample,
      code: `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/zeroui/accordion";

export function AccordionMultipleExample() {
  return (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>🎨 Customization</AccordionTrigger>
        <AccordionContent>
          You can customize the appearance using Tailwind CSS classes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>⚡ Performance</AccordionTrigger>
        <AccordionContent>
          Built with performance in mind using Radix UI primitives.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>♿ Accessibility</AccordionTrigger>
        <AccordionContent>
          Fully accessible with keyboard navigation and screen reader support.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
    },
    {
      title: "Different Variants",
      description: "Showcase different styling variants available",
      component: AccordionVariantsExample,
      code: `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/zeroui/accordion";

export function AccordionVariantsExample() {
  return (
    <div className="space-y-6">
      {/* Default Variant */}
      <Accordion type="single" collapsible>
        <AccordionItem value="default" variant="default">
          <AccordionTrigger variant="default">Default Style</AccordionTrigger>
          <AccordionContent>
            The default variant with borders and background styling.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Ghost Variant */}
      <Accordion type="single" collapsible>
        <AccordionItem value="ghost" variant="ghost">
          <AccordionTrigger variant="ghost">Ghost Style</AccordionTrigger>
          <AccordionContent>
            Clean ghost variant with no borders or background.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Minimal Variant */}
      <Accordion type="single" collapsible>
        <AccordionItem value="minimal" variant="minimal">
          <AccordionTrigger variant="minimal">Minimal Style</AccordionTrigger>
          <AccordionContent>
            Minimal variant with bottom borders only.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}`,
    },
  ],
  props: [
    {
      name: "type",
      type: '"single" | "multiple"',
      description: "Determines whether one or multiple items can be opened at the same time.",
      default: '"single"',
      required: true,
    },
    {
      name: "collapsible",
      type: "boolean",
      description: "When type is 'single', allows closing content when clicking trigger of an open item.",
      default: "false",
      required: false,
    },
    {
      name: "defaultValue",
      type: "string | string[]",
      description: "The default value(s) for uncontrolled accordions.",
      required: false,
    },
    {
      name: "value",
      type: "string | string[]",
      description: "The controlled value(s) of the accordion.",
      required: false,
    },
    {
      name: "onValueChange",
      type: "(value: string | string[]) => void",
      description: "Event handler called when the expanded state changes.",
      required: false,
    },
    {
      name: "disabled",
      type: "boolean",
      description: "When true, prevents the user from interacting with the accordion.",
      default: "false",
    },
    {
      name: "variant",
      type: '"default" | "ghost" | "minimal"',
      description: "The visual style variant of the accordion item and trigger.",
      default: '"default"',
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the component.",
      required: false,
    },
  ],
  variants: {
    basic: {
      title: "Accordion",
      description: "A modern, responsive accordion with smooth transitions and multiple style variants.",
      component: AccordionDemo,
      image: "/images/components/accordion-basic.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Basic+Accordion",
      code: `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/zeroui/accordion";

export function AccordionDemo() {
  return (
    <div className="max-w-2xl mx-auto py-12 space-y-10">
      {/* Default Variant */}
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1" variant="default">
          <AccordionTrigger variant="default">📦 Product Info</AccordionTrigger>
          <AccordionContent>
            <p>Details about the product go here. This variant has borders and background styling.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Ghost Variant */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-2" variant="ghost">
          <AccordionTrigger variant="ghost">🚚 Shipping Info</AccordionTrigger>
          <AccordionContent>
            <p>Ghost variant is clean with no background or borders for a minimal look.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Minimal Variant */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-3" variant="minimal">
          <AccordionTrigger variant="minimal">🔁 Return Policy</AccordionTrigger>
          <AccordionContent>
            <p>Minimal variant with bottom borders only for a subtle, elegant appearance.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}`,
      manualCode: `"use client";

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
      "border border-zinc-200 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/80 rounded-lg shadow-sm",
    ghost: "bg-transparent border-none",
    minimal: "border-b border-zinc-200 dark:border-zinc-700 bg-transparent rounded-none",
  };

  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(
        "group transition-shadow duration-300 mb-2 overflow-hidden",
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
      "px-5 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 data-[state=open]:bg-zinc-100 dark:data-[state=open]:bg-zinc-800/70 rounded-lg",
    ghost:
      "px-3 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 data-[state=open]:bg-zinc-100 dark:data-[state=open]:bg-zinc-800/70 rounded-md",
    minimal:
      "px-0 py-3 hover:text-zinc-900 dark:hover:text-zinc-100 data-[state=open]:text-zinc-900 dark:data-[state=open]:text-zinc-100",
  };

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between text-left font-medium text-zinc-700 dark:text-zinc-300 text-sm md:text-base transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 group [&[data-state=open]>svg]:rotate-180",
          triggerBaseStyles[variant],
          className
        )}
        {...props}
      >
        <span className="flex-1 text-left">{children}</span>
        <ChevronDown className="h-4 w-4 shrink-0 text-zinc-500 dark:text-zinc-400 transition-transform duration-200" />
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
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("px-5 py-4 pt-0 text-zinc-600 dark:text-zinc-400 leading-relaxed", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };`,
    },
  },
};
