import { ComponentGroup } from "@/lib/docs/types";
import SlidingNumberDemo from "../components/sliding-number";

export const slidingNumberRegistry: ComponentGroup = {
  name: "slidingNumberRegistry",
  title: "Sliding Number",
  description: "A React component that provides sliding-number functionality.",
  category: "components",
  components: ["Sliding-numberDemo"],
  installation: {
    cliCommand:
      'npx shadcn@latest add "https://zeroui.vercel.app/r/sliding-number"',
    dependencies: ["react", "react-use-measure"],
    componentPath: "components/ui/sliding-number.tsx",
    utilsCode:
      'import { ClassValue, clsx } from "clsx";\nimport { twMerge } from "tailwind-merge";\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}',
  },
  props: [
    {
      name: "value",
      type: "number",
      description: "The numeric value to display.",
      required: true,
    },
    {
      name: "padStart",
      type: "boolean",
      description: "Whether to pad single digits with a leading zero.",
      required: false,
    },
    {
      name: "decimalSeparator",
      type: "string",
      description: "Custom decimal separator. Defaults to '.'.",
      required: false,
    },
    {
      name: "animation",
      type: "'smooth' | 'bouncy' | 'gentle'",
      description: "The animation style preset.",
      required: false,
    },
    {
      name: "size",
      type: "'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'",
      description: "The size variant for the text.",
      required: false,
    },
    {
      name: "font",
      type: "'mono' | 'sans' | 'serif'",
      description: "The font family variant.",
      required: false,
    },
    {
      name: "className",
      type: "string",
      description: "Custom CSS classes for styling the component container.",
      required: false,
    },
    {
      name: "decimalPlaces",
      type: "number",
      description: "The number of decimal places to display.",
      required: false,
    },
    {
      name: "prefix",
      type: "string",
      description:
        "A string to be displayed before the number (e.g., '$', '€').",
      required: false,
    },
    {
      name: "suffix",
      type: "string",
      description:
        "A string to be displayed after the number (e.g., '%', 'ms').",
      required: false,
    },
    {
      name: "variant",
      type: "'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'",
      description: "The color theme for the component.",
      required: false,
    },
  ],
  variants: {
    basic: {
      title: "Basic Sliding-number",
      description: "A basic implementation of the Sliding-number component.",
      component: SlidingNumberDemo,
      image: "/images/components/sliding-number-basic.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Basic%20Sliding-number",
      code: `"use client";
import { useEffect, useState } from "react";
import { SlidingNumber } from "../ui/sliding-number";

export const SlidingNumberDemo = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = date.getHours() >= 12 ? "PM" : "AM";

  return (
    <div className="w-full h-full flex items-center justify-center  p-12 rounded-xl">
      <div className="flex items-center justify-center space-x-1">
        <div className="flex items-baseline space-x-1">
          <SlidingNumber
            value={hours}
            padStart={true}
            size="4xl"
            font="mono"
            className="text-white drop-shadow-lg"
            animation="smooth"
          />

          <span className="text-4xl text-neutral-500 dark:text-neutral-400 font-mono animate-pulse">
            :
          </span>

          <SlidingNumber
            value={minutes}
            padStart={true}
            size="4xl"
            font="mono"
            className="text-white drop-shadow-lg"
            animation="smooth"
          />

          <span className="text-4xl  text-neutral-500 dark:text-neutral-400 font-mono animate-pulse">
            :
          </span>

          <SlidingNumber
            value={seconds}
            padStart={true}
            size="4xl"
            font="mono"
            className="text-white drop-shadow-lg"
            animation="smooth"
          />

          <div className="ml-4 text-2xl text-neutral-500 dark:text-neutral-400 font-mono">
            {ampm}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingNumberDemo;`,
      manualCode: `"use client";
import { useEffect, useId } from "react";
import {
  MotionValue,
  motion,
  useSpring,
  useTransform,
  motionValue,
} from "motion/react";
import useMeasure from "react-use-measure";

const TRANSITIONS = {
  smooth: {
    type: "spring" as const,
    stiffness: 280,
    damping: 18,
    mass: 0.3,
  },
  bouncy: {
    type: "spring" as const,
    stiffness: 400,
    damping: 15,
    mass: 0.2,
  },
  gentle: {
    type: "spring" as const,
    stiffness: 180,
    damping: 25,
    mass: 0.4,
  },
};

const SIZE_VARIANTS = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
};

const FONT_VARIANTS = {
  mono: "font-mono",
  sans: "font-sans",
  serif: "font-serif",
};

function Digit({
  value,
  place,
  transition = TRANSITIONS.smooth,
  className = "",
}: {
  value: number;
  place: number;
  transition?: any;
  className?: string;
}) {
  const valueRoundedToPlace = Math.floor(value / place) % 10;
  const initial = motionValue(valueRoundedToPlace);
  const animatedValue = useSpring(initial, transition);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div
      className={\`relative inline-block w-[1ch] overflow-x-visible overflow-y-clip leading-none tabular-nums \${className}\`}
    >
      <div className="invisible">0</div>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} transition={transition} />
      ))}
    </div>
  );
}

function Number({
  mv,
  number,
  transition,
}: {
  mv: MotionValue<number>;
  number: number;
  transition: any;
}) {
  const uniqueId = useId();
  const [ref, bounds] = useMeasure();

  const y = useTransform(mv, (latest) => {
    if (!bounds.height) return 0;
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * bounds.height;
    if (offset > 5) {
      memo -= 10 * bounds.height;
    }
    return memo;
  });

  if (!bounds.height) {
    return (
      <span ref={ref} className="invisible absolute">
        {number}
      </span>
    );
  }

  return (
    <motion.span
      style={{ y }}
      layoutId={\`\${uniqueId}-\${number}\`}
      className="absolute inset-0 flex items-center justify-center"
      transition={transition}
      ref={ref}
    >
      {number}
    </motion.span>
  );
}

export type SlidingNumberProps = {
  /** The numeric value to display */
  value: number;
  /** Whether to pad single digits with leading zero */
  padStart?: boolean;
  /** Custom decimal separator (default: '.') */
  decimalSeparator?: string;
  /** Animation style preset */
  animation?: keyof typeof TRANSITIONS;
  /** Size variant */
  size?: keyof typeof SIZE_VARIANTS;
  /** Font family variant */
  font?: keyof typeof FONT_VARIANTS;
  /** Custom className for styling */
  className?: string;
  /** Number of decimal places to show */
  decimalPlaces?: number;
  /** Prefix text (e.g., '$', '€') */
  prefix?: string;
  /** Suffix text (e.g., '%', 'ms') */
  suffix?: string;
  /** Color theme */
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error";
};

const VARIANT_STYLES = {
  default: "text-gray-900 dark:text-gray-100",
  primary: "text-blue-600 dark:text-blue-400",
  secondary: "text-gray-600 dark:text-gray-400",
  success: "text-green-600 dark:text-green-400",
  warning: "text-amber-600 dark:text-amber-400",
  error: "text-red-600 dark:text-red-400",
};

export function SlidingNumber({
  value,
  padStart = false,
  decimalSeparator = ".",
  animation = "smooth",
  size = "base",
  font = "mono",
  className = "",
  decimalPlaces,
  prefix,
  suffix,
  variant = "default",
}: SlidingNumberProps) {
  const processedValue =
    decimalPlaces !== undefined
      ? parseFloat(value.toFixed(decimalPlaces))
      : value;

  const absValue = Math.abs(processedValue);
  const [integerPart, decimalPart] = absValue.toString().split(".");
  const integerValue = parseInt(integerPart, 10);

  const paddedInteger =
    padStart && integerValue < 10 ? \`0\${integerPart}\` : integerPart;
  const integerDigits = paddedInteger.split("");
  const integerPlaces = integerDigits.map((_, i) =>
    Math.pow(10, integerDigits.length - i - 1)
  );

  const transition = TRANSITIONS[animation];
  const digitClassName = \`\${SIZE_VARIANTS[size]} \${FONT_VARIANTS[font]} \${VARIANT_STYLES[variant]}\`;

  return (
    <div className={\`flex items-center \${className}\`}>
      {/* Prefix */}
      {prefix && <span className={\`mr-0.5 \${digitClassName}\`}>{prefix}</span>}

      {/* Negative sign */}
      {processedValue < 0 && <span className={digitClassName}>-</span>}

      {/* Integer digits */}
      {integerDigits.map((_, index) => (
        <Digit
          key={\`pos-\${integerPlaces[index]}\`}
          value={integerValue}
          place={integerPlaces[index]}
          transition={transition}
          className={digitClassName}
        />
      ))}

      {/* Decimal part */}
      {(decimalPart || decimalPlaces !== undefined) && (
        <>
          <span className={digitClassName}>{decimalSeparator}</span>
          {(decimalPart || "0")
            .padEnd(decimalPlaces || decimalPart?.length || 0, "0")
            .split("")
            .map((_, index) => {
              const fullDecimalPart = (decimalPart || "0").padEnd(
                decimalPlaces || decimalPart?.length || 0,
                "0"
              );
              return (
                <Digit
                  key={\`decimal-\${index}\`}
                  value={parseInt(fullDecimalPart, 10)}
                  place={Math.pow(10, fullDecimalPart.length - index - 1)}
                  transition={transition}
                  className={digitClassName}
                />
              );
            })}
        </>
      )}

      {/* Suffix */}
      {suffix && <span className={\`ml-0.5 \${digitClassName}\`}>{suffix}</span>}
    </div>
  );
}
`,
    },
  },
};
