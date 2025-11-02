"use client"
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
        <span className="absolute flex items-center justify-center w-6 h-6 bg-neutral-100 rounded-full -left-3 ring-8 ring-white dark:ring-neutral-900 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
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
