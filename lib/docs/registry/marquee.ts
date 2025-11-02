import { ComponentGroup } from "@/lib/docs/types";
import MarqueeDemo from "@/lib/docs/components/marquee";

export const marqueeRegistry: ComponentGroup = {
  name: "marquee",
  title: "Marquee",
  description:
    "An elegant, performant, and highly-customizable marquee component with fading edges and smooth hover interactions.",
  category: "components",
  components: ["MarqueeDemo"],
  installation: {
    cliCommand: "npx shadcn@latest add marquee",
    dependencies: ["lucide-react"], // Only for demo purposes
    componentPath: "components/ui/marquee.tsx",
    utilsCode: `import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`,
  },
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes for styling the container.",
      required: false,
    },
    {
      name: "speed",
      type: "'slow' | 'normal' | 'fast'",
      description: "The speed of the marquee animation.",
      required: false,
      default: "normal",
    },
    {
      name: "direction",
      type: "'left' | 'right' | 'up' | 'down'",
      description: "The direction of the scroll.",
      required: false,
      default: "left",
    },
    {
      name: "pauseOnHover",
      type: "boolean",
      description: "If true, the animation will smoothly slow down on hover.",
      required: false,
      default: "false",
    },
    {
      name: "fadeEdges",
      type: "boolean",
      description: "If true, adds a soft fade effect to the edges.",
      required: false,
      default: "true",
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "The content to be rendered inside the marquee.",
      required: true,
    },
  ],
  variants: {
    basic: {
      title: "Elegant Content Scroller",
      description:
        "A showcase of the Marquee component for testimonials and client logos, featuring fading edges and smooth hover interaction.",
      component: MarqueeDemo,
      image: "/images/components/marquee-basic.png",
      fallbackImage:
        "/placeholder.svg?height=400&width=800&text=Elegant+Marquee",
      code: `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import Marquee from "@/components/ui/marquee";
import { ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    handle: "@alex_codes",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    body: "ZeroUI's Marquee is a game-changer. The fade effect and smooth hover interaction make our client logo reel look incredibly professional.",
  },
  {
    name: "Samantha Lee",
    handle: "@samanthadesigns",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    body: "I was looking for a marquee that didn't feel dated. This is it. Elegant, performant, and ridiculously easy to implement. Highly recommended!",
  },
  {
    name: "Michael Chen",
    handle: "@michael_builds",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    body: "The performance is outstanding. Even with complex components inside, the animation stays buttery smooth. ZeroUI continues to impress.",
  },
  {
    name: "Jessica Martinez",
    handle: "@jess_creates",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    body: "Finally, a marquee that looks like it belongs in 2025. The props are intuitive and it integrated perfectly with our existing design system.",
  },
];

const companies = [
  // Using simple placeholders. Replace with actual SVGs or logos.
  "Stripe", "Netflix", "Google", "Meta", "Amazon", "Microsoft"
]

const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[0] }) => (
  <figure className="relative w-80 cursor-pointer rounded-2xl border border-gray-200/50 bg-white/50 p-6 shadow-lg backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50">
    <blockquote className="text-gray-800 dark:text-gray-200">
      {testimonial.body}
    </blockquote>
    <figcaption className="mt-4 flex items-center gap-3">
      <Avatar>
        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
      </Avatar>
      <div>
        <cite className="font-semibold text-gray-900 dark:text-white not-italic">
          {testimonial.name}
        </cite>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {testimonial.handle}
        </p>
      </div>
    </figcaption>
    <ChevronRight className="absolute bottom-4 right-4 text-gray-300 dark:text-gray-600" />
  </figure>
);

const MarqueeDemo = () => {
  return (
    <div className="w-full py-20">
      <h2 className="text-center text-3xl font-bold mb-4">Loved by Creatives Worldwide</h2>
      <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12">
        Our components are built to be elegant, performant, and a joy to use.
      </p>

      {/* First Marquee for Testimonials */}
      <div className="relative">
        <Marquee pauseOnHover className="[--gap:2rem]">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </Marquee>
        {/* Add a subtle inner shadow */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
      
       {/* Second Marquee for Company Logos */}
      <div className="mt-20">
        <p className="text-center text-gray-500 dark:text-gray-400">
          Trusted by the world's most innovative companies
        </p>
         <Marquee speed="slow" className="[--gap:4rem] mt-4" fadeEdges={false}>
          {companies.map((company, i) => (
              <span key={i} className="text-2xl font-semibold text-gray-400 dark:text-gray-500">{company}</span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeDemo;`,
      manualCode: `'use client'
import React from 'react';

// cn utility for conditional classnames
function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
  direction?: 'left' | 'right' | 'up' | 'down';
  pauseOnHover?: boolean;
  fadeEdges?: boolean;
  children: React.ReactNode;
}

const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      className,
      speed = 'normal',
      direction = 'left',
      pauseOnHover = false,
      fadeEdges = true,
      children,
      ...props
    },
    ref
  ) => {
    // Determine CSS animation duration based on speed prop
    const durationMap = { slow: '40s', normal: '25s', fast: '15s' };
    
    // Determine animation name based on direction
    const animationName = {
      left: 'animate-scroll-left',
      right: 'animate-scroll-right',
      up: 'animate-scroll-up',
      down: 'animate-scroll-down',
    }[direction];

    const isVertical = direction === 'up' || direction === 'down';
    
    // Gradient mask for fading edges
    const maskStyle = fadeEdges 
      ? isVertical
        ? { maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)' }
        : { maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }
      : {};

    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          "group relative flex w-full overflow-hidden",
          className
        )}
        style={maskStyle}
      >
        <div
          className={cn(
            'flex shrink-0 animate-infinite animate-linear',
            isVertical ? 'flex-col' : 'flex-row',
            pauseOnHover && 'group-hover:[animation-play-state:paused]',
            animationName
          )}
          style={{ animationDuration: durationMap[speed] }}
        >
          {/* We render children twice for a seamless loop */}
          {children}
          <div aria-hidden="true" className={cn('flex shrink-0', isVertical ? 'flex-col' : 'flex-row')}>
             {children}
          </div>
        </div>

        {/* CSS Keyframes for animations are defined globally in your globals.css file */}
        {/* Make sure to add the following to your CSS file: */}
        <style>{\`
          @keyframes scroll-left {
            from { transform: translateX(0%); }
            to { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0%); }
          }
          @keyframes scroll-up {
            from { transform: translateY(0%); }
            to { transform: translateY(-50%); }
          }
          @keyframes scroll-down {
            from { transform: translateY(-50%); }
            to { transform: translateY(0%); }
          }
          .animate-scroll-left { animation-name: scroll-left; }
          .animate-scroll-right { animation-name: scroll-right; }
          .animate-scroll-up { animation-name: scroll-up; }
          .animate-scroll-down { animation-name: scroll-down; }
        \`}</style>
      </div>
    );
  }
);

Marquee.displayName = "Marquee";

export default Marquee;
`,
    },
  },
};
