"use client";

// For this demo, I'll include the component directly
import LuminousIcons, { LuminousIconsItem } from "@/lib/docs/ui/luminous-icon";

// Demo Icons - Replace these with your preferred icon library
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2L13.09 8.26L22 9L17 14L18.18 22L12 19L5.82 22L7 14L2 9L10.91 8.26L12 2Z" />
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 15.5C10.07 15.5 8.5 13.93 8.5 12S10.07 8.5 12 8.5S15.5 10.07 15.5 12S13.93 15.5 12 15.5M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12S19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.5 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.5 2.42L9.13 5.07C8.52 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.73 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.21 8.95 2.27 9.22 2.46 9.37L4.57 11.02C4.53 11.34 4.5 11.67 4.5 12S4.53 12.66 4.57 12.98L2.46 14.63C2.27 14.78 2.21 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.95C7.96 18.35 8.52 18.68 9.13 18.93L9.5 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.5 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.27 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98Z" />
  </svg>
);

const DashboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M13 3V9H21V3M13 21H21V11H13M3 21H11V15H3M3 13H11V3H3V13Z" />
  </svg>
);

const ProfileIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 12C14.21 12 16 10.21 16 8S14.21 4 12 4 8 5.79 8 8 9.79 12 12 12M12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
  </svg>
);

const TasksIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M20 6L9 17L4 12L5.41 10.59L9 14.17L18.59 4.59L20 6Z" />
  </svg>
);

const ProjectsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2L2 7L12 12L22 7L12 2M2 17L12 22L22 17M2 12L12 17L22 12" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M22 21H2V3H4V19H6V17H10V19H12V16H16V19H18V17H22V21Z" />
  </svg>
);

const MessagesIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M20 16H5.17L4 17.17V4H20V16Z" />
  </svg>
);

const LuminousIconsDemo = () => {
  // Sample data for different use cases
  const navigationIcons: LuminousIconsItem[] = [
    {
      icon: <DashboardIcon />,
      color: "emerald",
      label: "Dashboard",
      description: "Main overview",
    },
    {
      icon: <AnalyticsIcon />,
      color: "sapphire",
      label: "Analytics",
      description: "View reports",
    },
    {
      icon: <ProjectsIcon />,
      color: "amethyst",
      label: "Projects",
      description: "Manage work",
    },
    {
      icon: <TasksIcon />,
      color: "amber",
      label: "Tasks",
      description: "To-do items",
    },
  ];

  const userActions: LuminousIconsItem[] = [
    {
      icon: <ProfileIcon />,
      color: "rose",
      label: "Profile",
      description: "Account settings",
    },
    {
      icon: <MessagesIcon />,
      color: "teal",
      label: "Messages",
      description: "Chat & notifications",
    },
    {
      icon: <StarIcon />,
      color: "amber",
      label: "Favorites",
      description: "Saved items",
    },
    {
      icon: <SettingsIcon />,
      color: "slate",
      label: "Settings",
      description: "Preferences",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="space-y-20">
      
          <section className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Navigation Icons
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Perfect for main navigation menus
            </p>
            <div className="bg-white/20 dark:bg-black/20 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <LuminousIcons
                items={navigationIcons}
                variant="default"
                className="max-w-4xl mx-auto"
              />
            </div>
          </section>

 
          <section className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              User Actions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Interactive user interface elements
            </p>
            <div className="bg-white/20 dark:bg-black/20 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <LuminousIcons
                items={userActions}
                variant="large"
                className="max-w-5xl mx-auto"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LuminousIconsDemo;
