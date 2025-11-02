//lib/docs/ui/dock.tsx
"use client"
import React, { useRef } from 'react';
import { motion, MotionValue, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Home, Compass, BarChart2, Settings, Mail } from 'lucide-react';
import { cn } from "@/lib/utils"; 



interface DockProps {
  className?: string;
  children: React.ReactNode;
}

export const Dock: React.FC<DockProps> = ({
  className,
  children,
}) => {
  const mouseX = useMotionValue(Infinity);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.pageX);
  };

  const handleMouseLeave = () => {
    mouseX.set(Infinity);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "flex items-end h-16 pb-2.5 px-4 bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-2xl border border-white/30 dark:border-black/30 shadow-lg",
        className
      )}
    >
      <div className="flex space-x-3">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            // Injects the mouseX motion value into each child
            return React.cloneElement(child, { mouseX } as any);
          }
          return child;
        })}
      </div>
    </div>
  );
};




interface DockIconProps {
  mouseX?: ReturnType<typeof useMotionValue>;
  className?: string;
  children: React.ReactNode;
  tooltip?: string;
}

export const DockIcon: React.FC<DockIconProps> = ({
  mouseX,
  className,
  children,
  tooltip,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Calculate distance from the icon to the mouse pointer
  const distance = useTransform((mouseX as MotionValue<number>) || useMotionValue(Infinity), (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return (val as number) - bounds.x - bounds.width / 2;
  });

  // Animate width and scale based on distance
  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const scaleSync = useTransform(distance, [-150, 0, 150], [1, 1.8, 1]);

  // Use spring for a smoother, more natural animation
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
  const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <div className="group relative">
      <motion.div
        ref={ref}
        style={{ width, scale }}
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-full cursor-pointer",
          "bg-neutral-100 dark:bg-neutral-800",
          "border border-neutral-200 dark:border-neutral-700",
          "transition-colors duration-200 ease-out",
          "group-hover:bg-white group-hover:dark:bg-neutral-700",
          className
        )}
      >
        {children}
      </motion.div>
      {tooltip && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2">
          <div className="px-3 py-1.5 text-xs font-medium text-white bg-black/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {tooltip}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] w-2 h-2 bg-black/80 rotate-45" />
          </div>
        </div>
      )}
    </div>
  );
};
