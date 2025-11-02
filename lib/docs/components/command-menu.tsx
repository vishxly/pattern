"use client";
import { useState, useEffect } from "react";
import { CommandMenu } from "@/lib/docs/ui/command-menu";
import { Home, Settings, Code, Mail, CircleUser } from "lucide-react";

export default function CommandMenuDemo() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      category: "Navigation",
      items: [
        {
          icon: <Home />,
          label: "Home",
          action: () => console.log("Navigating to Home"),
        },
        {
          icon: <Settings />,
          label: "Settings",
          action: () => console.log("Navigating to Settings"),
        },
        {
          icon: <Code />,
          label: "Projects",
          action: () => console.log("Navigating to Projects"),
        },
      ],
    },
    {
      category: "Actions",
      items: [
        {
          icon: <Mail />,
          label: "Send Email",
          action: () => alert("Email Sent!"),
        },
        {
          icon: <CircleUser />,
          label: "Update Profile",
          action: () => alert("Profile Updated!"),
        },
      ],
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((currentOpen) => !currentOpen);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="p-8 min-h-screen flex flex-col items-center justify-center text-center  text-black  dark:text-white transition-colors duration-300">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold mb-4">Command Menu</h1>
        <p className="text-lg mb-6">
          A beautifully designed, keyboard-accessible command palette to
          supercharge your app's user experience.
        </p>
        <button
          onClick={() => setOpen(true)}
          className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black dark:focus-visible:ring-white transition-all duration-200"
        >
          Open Menu
          <span className="ml-2 text-sm font-mono px-2 py-1 rounded-md bg-white text-black dark:bg-black dark:text-white border border-black dark:border-white">
            ⌘K
          </span>
        </button>
      </div>

      <CommandMenu open={open} setOpen={setOpen} items={menuItems} />
    </div>
  );
}
