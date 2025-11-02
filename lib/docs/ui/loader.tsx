import {
    LoaderCircleIcon,
    LoaderIcon,
    LoaderPinwheelIcon,
    type LucideProps,
  } from "lucide-react";
  import { cn } from "@/lib/utils";
  import { forwardRef, type HTMLAttributes } from "react";
  
  // Base loader props with better TypeScript support
  export interface BaseLoaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
    size?: number | string;
    color?: string;
    speed?: 'slow' | 'normal' | 'fast';
    'aria-label'?: string;
  }
  
  // Combined props for the main Loader component
  export interface LoaderProps extends BaseLoaderProps {
    variant?:
      | "default"
      | "circle"
      | "pinwheel"
      | "circle-filled"
      | "ellipsis"
      | "ring"
      | "bars"
      | "infinite"
      | "pulse"
      | "bounce";
  }
  
  // Speed mapping for consistent animation timing
  const SPEED_MAP = {
    slow: '2s',
    normal: '1s',
    fast: '0.5s',
  } as const;
  
  // Individual loader variant props (excluding variant)
  type LoaderVariantProps = Omit<LoaderProps, "variant">;
  
  const Default = forwardRef<HTMLDivElement, LoaderVariantProps>(
    ({ className, size = 24, speed = 'normal', style, 'aria-label': ariaLabel = 'Loading', ...props }, ref) => (
      <div
        ref={ref}
        role="status"
        aria-label={ariaLabel}
        style={{ ...style, width: size, height: size }}
        className={cn("inline-block", className)}
        {...props}
      >
        <LoaderIcon 
          className="animate-spin w-full h-full" 
          style={{ animationDuration: SPEED_MAP[speed] }}
        />
      </div>
    )
  );
  
  const Circle = forwardRef<HTMLDivElement, LoaderVariantProps>(
    ({ className, size = 24, speed = 'normal', style, 'aria-label': ariaLabel = 'Loading', ...props }, ref) => (
      <div
        ref={ref}
        role="status"
        aria-label={ariaLabel}
        style={{ ...style, width: size, height: size }}
        className={cn("inline-block", className)}
        {...props}
      >
        <LoaderCircleIcon 
          className="animate-spin w-full h-full" 
          style={{ animationDuration: SPEED_MAP[speed] }}
        />
      </div>
    )
  );
  
  const Pinwheel = forwardRef<HTMLDivElement, LoaderVariantProps>(
    ({ className, size = 24, speed = 'normal', style, 'aria-label': ariaLabel = 'Loading', ...props }, ref) => (
      <div
        ref={ref}
        role="status"
        aria-label={ariaLabel}
        style={{ ...style, width: size, height: size }}
        className={cn("inline-block", className)}
        {...props}
      >
        <LoaderPinwheelIcon 
          className="animate-spin w-full h-full" 
          style={{ animationDuration: SPEED_MAP[speed] }}
        />
      </div>
    )
  );
  
  const CircleFilled = forwardRef<HTMLDivElement, LoaderVariantProps>(
    ({ className, size = 24, speed = 'normal', style, 'aria-label': ariaLabel = 'Loading', ...props }, ref) => (
      <div
        ref={ref}
        role="status"
        aria-label={ariaLabel}
        style={{ ...style, width: size, height: size }}
        className={cn("relative inline-block", className)}
        {...props}
      >
        <div className="absolute inset-0">
          <LoaderCircleIcon
            className="animate-spin w-full h-full text-current opacity-20"
            style={{ animationDuration: SPEED_MAP[speed] }}
          />
        </div>
        <LoaderCircleIcon
          className="relative animate-spin w-full h-full"
          style={{ animationDuration: SPEED_MAP[speed] }}
        />
      </div>
    )
  );
  
  const Ellipsis = forwardRef<HTMLDivElement, LoaderVariantProps>(
    ({ className, size = 24, speed = 'normal', color = 'currentColor', style, 'aria-label': ariaLabel = 'Loading', ...props }, ref) => {
      const duration = speed === 'slow' ? '1.2s' : speed === 'fast' ? '0.4s' : '0.6s';
      
      return (
        <div
          ref={ref}
          role="status"
          aria-label={ariaLabel}
          style={{ ...style, width: size, height: size }}
          className={cn("inline-block", className)}
          {...props}
        >
          <svg
            height={size}
            viewBox="0 0 24 24"
            width={size}
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <circle cx="4" cy="12" fill={color} r="2">
              <animate
                attributeName="cy"
                begin={`0;ellipsis3.end+0.25s`}
                calcMode="spline"
                dur={duration}
                id="ellipsis1"
                keySplines=".33,.66,.66,1;.33,0,.66,.33"
                values="12;6;12"
              />
            </circle>
            <circle cx="12" cy="12" fill={color} r="2">
              <animate
                attributeName="cy"
                begin="ellipsis1.begin+0.1s"
                calcMode="spline"
                dur={duration}
                keySplines=".33,.66,.66,1;.33,0,.66,.33"
                values="12;6;12"
              />
            </circle>
            <circle cx="20" cy="12" fill={color} r="2">
              <animate
                attributeName="cy"
                begin="ellipsis1.begin+0.2s"
                calcMode="spline"
                dur={duration}
                id="ellipsis3"
                keySplines=".33,.66,.66,1;.33,0,.66,.33"
                values="12;6;12"
              />
            </circle>
          </svg>
        </div>
      );
    }
  );
  
  const Ring = forwardRef<HTMLDivElement, LoaderVariantProps>(
    ({ className, size = 24, speed = 'normal', color = 'currentColor', style, 'aria-label': ariaLabel = 'Loading', ...props }, ref) => {
      const duration = speed === 'slow' ? '3.6s' : speed === 'fast' ? '0.9s' : '1.8s';
      
      return (
        <div
          ref={ref}
          role="status"
          aria-label={ariaLabel}
          style={{ ...style, width: size, height: size }}
          className={cn("inline-block", className)}
          {...props}
        >
          <svg
            height={size}
            stroke={color}
            viewBox="0 0 44 44"
            width={size}
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <g fill="none" fillRule="evenodd" strokeWidth="2">
              <circle cx="22" cy="22" r="1">
                <animate
                  attributeName="r"
                  begin="0s"
                  calcMode="spline"
                  dur={duration}
                  keySplines="0.165, 0.84, 0.44, 1"
                  keyTimes="0; 1"
                  repeatCount="indefinite"
                  values="1; 20"
                />
                <animate
                  attributeName="stroke-opacity"
                  begin="0s"
                  calcMode="spline"
                  dur={duration}
                  keySplines="0.3, 0.61, 0.355, 1"
                  keyTimes="0; 1"
                  repeatCount="indefinite"
                  values="1; 0"
                />
              </circle>
              <circle cx="22" cy="22" r="1">
                <animate
                  attributeName="r"
                  begin={`-${parseFloat(duration) / 2}s`}
                  calcMode="spline"
                  dur={duration}
                  keySplines="0.165, 0.84, 0.44, 1"
                  keyTimes="0; 1"
                  repeatCount="indefinite"
                  values="1; 20"
                />
                <animate
                  attributeName="stroke-opacity"
                  begin={`-${parseFloat(duration) / 2}s`}
                  calcMode="spline"
                  dur={duration}
                  keySplines="0.3, 0.61, 0.355, 1"
                  keyTimes="0; 1"
                  repeatCount="indefinite"
                  values="1; 0"
                />
              </circle>
            </g>
          </svg>
        </div>
      );
    }
  );
  
  const Bars = forwardRef<HTMLDivElement, LoaderVariantProps>(
    ({ className, size = 24, speed = 'normal', color = 'currentColor', style, 'aria-label': ariaLabel = 'Loading', ...props }, ref) => {
      const duration = speed === 'slow' ? '1.6s' : speed === 'fast' ? '0.4s' : '0.8s';
      
      return (
        <div
          ref={ref}
          role="status"
          aria-label={ariaLabel}
          style={{ ...style, width: size, height: size }}
          className={cn("inline-block", className)}
          {...props}
        >
          <svg
            height={size}
            viewBox="0 0 24 24"
            width={size}
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <style>{`
              .loader-bar {
                animation: loader-bars-animation ${duration} linear infinite;
                animation-delay: -${duration};
              }
              .loader-bars-2 {
                animation-delay: -${parseFloat(duration) * 0.8125}s;
              }
              .loader-bars-3 {
                animation-delay: -${parseFloat(duration) * 0.625}s;
              }
              @keyframes loader-bars-animation {
                0% {
                  y: 1px;
                  height: 22px;
                }
                93.75% {
                  y: 5px;
                  height: 14px;
                  opacity: 0.2;
                }
              }
            `}</style>
            <rect
              className="loader-bar"
              fill={color}
              height="22"
              width="6"
              x="1"
              y="1"
            />
            <rect
              className="loader-bar loader-bars-2"
              fill={color}
              height="22"
              width="6"
              x="9"
              y="1"
            />
            <rect
              className="loader-bar loader-bars-3"
              fill={color}
              height="22"
              width="6"
              x="17"
              y="1"
            />
          </svg>
        </div>
      );
    }
  );
  
  const Infinite = forwardRef<HTMLDivElement, LoaderVariantProps>(
    ({ className, size = 24, speed = 'normal', color = 'currentColor', style, 'aria-label': ariaLabel = 'Loading', ...props }, ref) => {
      const duration = speed === 'slow' ? '4s' : speed === 'fast' ? '1s' : '2s';
      
      return (
        <div
          ref={ref}
          role="status"
          aria-label={ariaLabel}
          style={{ ...style, width: size, height: size }}
          className={cn("inline-block", className)}
          {...props}
        >
          <svg
            height={size}
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 100 100"
            width={size}
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
              fill="none"
              stroke={color}
              strokeDasharray="205.271142578125 51.317785644531256"
              strokeLinecap="round"
              strokeWidth="10"
              style={{
                transform: "scale(0.8)",
                transformOrigin: "50px 50px",
              }}
            >
              <animate
                attributeName="stroke-dashoffset"
                dur={duration}
                keyTimes="0;1"
                repeatCount="indefinite"
                values="0;256.58892822265625"
              />
            </path>
          </svg>
        </div>
      );
    }
  );
  
  const Pulse = forwardRef<HTMLDivElement, LoaderVariantProps>(
    ({ className, size = 24, speed = 'normal', style, 'aria-label': ariaLabel = 'Loading', ...props }, ref) => (
      <div
        ref={ref}
        role="status"
        aria-label={ariaLabel}
        style={{ ...style, width: size, height: size }}
        className={cn(
          "inline-block rounded-full bg-current animate-pulse",
          className
        )}
        {...props}
      >
        <div 
          className="w-full h-full rounded-full bg-current animate-pulse"
          style={{ animationDuration: SPEED_MAP[speed], animationDelay: '0.5s' }}
        />
      </div>
    )
  );
  
  const Bounce = forwardRef<HTMLDivElement, LoaderVariantProps>(
    ({ className, size = 24, speed = 'normal', style, 'aria-label': ariaLabel = 'Loading', ...props }, ref) => (
      <div
        ref={ref}
        role="status"
        aria-label={ariaLabel}
        style={{
          ...style,
          width: size,
          height: size,
          animationDuration: SPEED_MAP[speed],
        }}
        className={cn(
          "inline-block rounded-full bg-current animate-bounce",
          className
        )}
        {...props}
      />
    )
  );

  export const Loader = forwardRef<HTMLDivElement, LoaderProps>(
    ({ variant = "default", ...props }, ref) => {
      const variants = {
        default: Default,
        circle: Circle,
        pinwheel: Pinwheel,
        "circle-filled": CircleFilled,
        ellipsis: Ellipsis,
        ring: Ring,
        bars: Bars,
        infinite: Infinite,
        pulse: Pulse,
        bounce: Bounce,
      } as const;
  
      const Component = variants[variant];
      return <Component ref={ref} {...props} />;
    }
  );
  
  // Set display names for better debugging
  Default.displayName = "LoaderDefault";
  Circle.displayName = "LoaderCircle";
  Pinwheel.displayName = "LoaderPinwheel";
  CircleFilled.displayName = "LoaderCircleFilled";
  Ellipsis.displayName = "LoaderEllipsis";
  Ring.displayName = "LoaderRing";
  Bars.displayName = "LoaderBars";
  Infinite.displayName = "LoaderInfinite";
  Pulse.displayName = "LoaderPulse";
  Bounce.displayName = "LoaderBounce";
  Loader.displayName = "Loader";
  
  // Export individual variants for direct use
  export {
    Default as LoaderDefault,
    Circle as LoaderCircle,
    Pinwheel as LoaderPinwheel,
    CircleFilled as LoaderCircleFilled,
    Ellipsis as LoaderEllipsis,
    Ring as LoaderRing,
    Bars as LoaderBars,
    Infinite as LoaderInfinite,
    Pulse as LoaderPulse,
    Bounce as LoaderBounce,
  };
