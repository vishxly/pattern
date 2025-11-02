import { BasicCard } from "@/lib/docs/components/card";
import { ComponentGroup } from "@/lib/docs/types";

export const cardRegistry: ComponentGroup = {
  name: "cardRegistry",
  title: "Card",
  description: "Displays a card with header, title and description.",
  category: "components",
  components: ["BasicCard"],
  // Installation configuration
  installation: {
    cliCommand: "npx shadcn@latest add card",
    dependencies: ["clsx", "tailwind-merge"],
    componentPath: "components/ui/card.tsx",
    utilsCode: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
  },
  variants: {
    basic: {
      title: "Basic Card",
      description: "A simple card with header and content.",
      component: BasicCard,
      image: "/images/components/card-basic.png",
      fallbackImage: "/placeholder.svg?height=300&width=400&text=Basic+Card",
      code: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function BasicCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Basic Card</CardTitle>
        <CardDescription>A simple card example</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is a basic card content.</p>
      </CardContent>
    </Card>
  )
}`,
      manualCode: `import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }`,
    },
  },
};
