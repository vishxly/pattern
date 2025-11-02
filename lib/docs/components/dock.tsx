import { Compass, Home, Mail, Settings, BarChart2 } from "lucide-react";
import { Dock, DockIcon } from "../ui/dock";

export const DockDemo = () => {
    return (
      <div className="w-full h-full flex items-center justify-center p-12 rounded-xl">
          <Dock>
            <DockIcon tooltip="Home">
              <Home className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
            </DockIcon>
            <DockIcon tooltip="Explore">
              <Compass className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
            </DockIcon>
            <DockIcon tooltip="Analytics">
              <BarChart2 className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
            </DockIcon>
            <DockIcon tooltip="Messages">
               <Mail className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
            </DockIcon>
            <DockIcon tooltip="Settings">
              <Settings className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
            </DockIcon>
          </Dock>
      </div>
    );
  };
  
  export default DockDemo;
