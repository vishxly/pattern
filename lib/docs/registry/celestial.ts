import { ComponentGroup } from "@/lib/docs/types";
import TimelineDemo from "../components/timeline";
import CelestialDemoPage from "../components/celestial";

export const celestialRegistry: ComponentGroup = {
  name: "celestialRegistry",
  title: "Celestial",
  description:
    "An interactive component system for showcasing features in a space-themed UI.",
  category: "components",
  components: ["CelestialDemoPage"],
  // Installation configuration
  installation: {
    cliCommand: "npx shadcn@latest add timeline",
    dependencies: ["clsx", "tailwind-merge", "lucide-react"],
    componentPath: "components/zeroui/timeline.tsx",
    utilsCode: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
  },
  props: [
    {
      name: "children",
      type: "React.ReactNode",
      description:
        "A list of `TimelineItem` components to be rendered inside the timeline container.",
      required: true,
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes for styling the timeline container.",
      required: false,
    },
    {
      name: "icon",
      type: "React.ReactNode",
      description:
        "The icon to display in the event marker of a timeline item.",
      required: false,
    },
    {
      name: "title",
      type: "string",
      description: "The main heading for the timeline event.",
      required: true,
    },
    {
      name: "description",
      type: "string",
      description: "A detailed description of the timeline event.",
      required: true,
    },
    {
      name: "timestamp",
      type: "string",
      description: "A timestamp or date for the timeline event.",
      required: false,
    },
    {
      name: "isLast",
      type: "boolean",
      description: "Set to true for the last item to hide the connecting line.",
      required: false,
    },
    {
      name: "itemClassName",
      type: "string",
      description:
        "Additional CSS classes for styling individual timeline items.",
      required: false,
    },
  ],

  variants: {
    basic: {
      title: "Celestial",
      description:
        "An interactive component system for showcasing features in a space-themed UI.",
      component: CelestialDemoPage,
      image: "/images/components/timeline-basic.png",
      fallbackImage: "/placeholder.svg?height=400&width=400&text=Timeline",
      code: `"use client";
import { Timeline, TimelineItem } from "../ui/timeline";
import { GitCommit, FileText, UserPlus, Package } from 'lucide-react';

export function TimelineDemo() {
  return (
 <div className="w-full max-w-md m-8 p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">Project Activity</h3>
      <Timeline>
        <TimelineItem
          icon={<Package className="h-4 w-4" />}
          title="New Project Created"
          description="The 'Phoenix' project has been initialized and is ready for development."
          timestamp="2024-08-01 10:00 AM"
        />
        <TimelineItem
          icon={<UserPlus className="h-4 w-4" />}
          title="Team Members Invited"
          description="Alice and Bob have been added to the project."
          timestamp="2024-08-01 11:30 AM"
        />
        <TimelineItem
          icon={<GitCommit className="h-4 w-4" />}
          title="Initial Commit"
          description="First set of files pushed to the repository. Includes baseline structure."
          timestamp="2024-08-02 02:45 PM"
        />
        <TimelineItem
          icon={<FileText className="h-4 w-4" />}
          title="Documentation Drafted"
          description="The initial draft of the project documentation is now available for review."
          timestamp="2024-08-03 09:15 AM"
          isLast
        />
      </Timeline>
    </div>
  );
};

export default TimelineDemo;
`,
      manualCode: `"use client"
import * as React from "react";
import { cn } from "@/lib/utils";



interface TimelineProps extends React.HTMLAttributes<HTMLOListElement> {
  children: React.ReactNode;
}

const Timeline = React.forwardRef<HTMLOListElement, TimelineProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <ol ref={ref} className={cn("relative border-l border-neutral-200 dark:border-neutral-700", className)} {...props}>
        {children}
      </ol>
    );
  }
);
Timeline.displayName = "Timeline";



interface TimelineItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  icon?: React.ReactNode;
  title: string;
  description: string;
  timestamp?: string;
  isLast?: boolean;
}

const TimelineItem = React.forwardRef<HTMLLIElement, TimelineItemProps>(
  ({ className, icon, title, description, timestamp, isLast = false, ...props }, ref) => {
    return (
      <li ref={ref} className={cn("ml-6", !isLast && "mb-10", className)} {...props}>
        <span className="absolute flex items-center justify-center w-6 h-6 bg-neutral-100 rounded-full -left-3 ring-8 ring-white dark:ring-neutral-900 dark:bg-neutral-800">
          {icon || <div className="w-3 h-3 bg-neutral-400 rounded-full" />}
        </span>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <h3 className="flex items-center mb-1 text-base font-semibold text-neutral-900 dark:text-white">
                {title}
            </h3>
            {timestamp && (
                <time className="block mb-2 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500 sm:ml-4">
                    {timestamp}
                </time>
            )}
        </div>
        <p className="mb-4 text-sm font-normal text-neutral-500 dark:text-neutral-400">
          {description}
        </p>
      </li>
    );
  }
);
TimelineItem.displayName = "TimelineItem";

export { Timeline, TimelineItem };
`,
    },
  },
};
