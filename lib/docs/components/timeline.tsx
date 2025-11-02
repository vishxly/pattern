"use client";
import { Timeline, TimelineItem } from "@/lib/docs/ui/timeline"; 
import { GitCommit, FileText, UserPlus, Package } from 'lucide-react';

export const TimelineDemo = () => {
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
          isLast // This prop removes the bottom margin
        />
      </Timeline>
    </div>
  );
};

export default TimelineDemo;
