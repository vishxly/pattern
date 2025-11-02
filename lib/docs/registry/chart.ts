import { ComponentGroup } from "@/lib/docs/types";
import AreaChartDemo from "../components/chart";
import {
  BarChartDemo,
  LineChartDemo,
  PieChartDemo,
  RadarChartDemo,
} from "@/lib/docs/components/example/charts";

export const chartRegistry: ComponentGroup = {
  name: "chartRegistry",
  title: "Chart",
  description:
    "Chart components for displaying data in a visually appealing and easy-to-understand format.",
  category: "components",
  components: ["Chart", "ChartContainer", "ChartLegend", "ChartStyles"],
  // Installation configuration
  installation: {
    cliCommand: 'npx shadcn@latest add "https://zeroui.vercel.app/r/chart"',
    dependencies: ["recharts", "lucide-react", "clsx", "tailwind-merge"],
    componentPath: "components/ui/chart.tsx",
    utilsCode: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
  },
  props: [
    {
      name: "data",
      type: "ChartData[]",
      description: "An array of data objects for the chart.",
      required: true,
    },
    {
      name: "type",
      type: '"area" | "bar" | "line" | "pie" | "radar"',
      description: "The type of chart to render.",
      required: true,
    },
    {
      name: "height",
      type: "number | string",
      description: "The height of the chart container.",
      required: false,
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes for the chart container.",
      required: false,
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "Content to be displayed inside the ChartContainer.",
      required: true,
    },
    {
      name: "title",
      type: "string",
      description: "The title to display in the ChartContainer.",
      required: false,
    },
    {
      name: "description",
      type: "string",
      description: "The description to display in the ChartContainer.",
      required: false,
    },
    {
      name: "value",
      type: "string",
      description: "The main value to display in the ChartContainer.",
      required: false,
    },
    {
      name: "trend",
      type: "number",
      description: "A trend percentage to display in the ChartContainer.",
      required: false,
    },
    {
      name: "isPositive",
      type: "boolean",
      description:
        "Determines if the trend is positive (green) or negative (red).",
      required: false,
    },
  ],
  examples: [
    {
      title: "Bar Chart",
      description: "A bar chart for comparing values across categories.",
      component: BarChartDemo,
      code: `
"use client";
import React, { useState } from "react";
import {
  Chart,
  ChartContainer,
  ChartStyles,
  ChartData,
} from "@/lib/docs/ui/chart";

const areaData: ChartData[] = [
  { month: "Jan", value: 245, target: 300 },
  { month: "Feb", value: 654, target: 600 },
  { month: "Mar", value: 387, target: 400 },
  { month: "Apr", value: 521, target: 500 },
  { month: "May", value: 412, target: 450 },
  { month: "Jun", value: 598, target: 550 },
  { month: "Jul", value: 312, target: 350 },
  { month: "Aug", value: 743, target: 700 },
  { month: "Sep", value: 489, target: 500 },
  { month: "Oct", value: 476, target: 480 },
  { month: "Nov", value: 687, target: 650 },
  { month: "Dec", value: 198, target: 250 },
];

export const BarChartDemo = () => {
  const [hoveredData, setHoveredData] = useState<ChartData | null>(null);

  const handleMouseMove = (state: any) => {
    if (state.activePayload?.[0]) {
      setHoveredData(state.activePayload[0].payload);
    }
  };

  const handleMouseLeave = () => setHoveredData(null);

  const metrics = {
    title: "Sales Performance",
    value: hoveredData?.value?.toLocaleString() || "4,892",
    description: "Monthly sales tracking",
    trend: 12.5,
    isPositive: true,
  };

  return (
    <div className="min-h-screen p-8">
      <ChartStyles />
      <div className="max-w-4xl mx-auto">
        <ChartContainer
          title={metrics.title}
          value={metrics.value}
          description={metrics.description}
          trend={metrics.trend}
          isPositive={metrics.isPositive}
          className="bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg rounded-2xl"
        >
          <Chart
            data={areaData}
            type="bar"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            height={320}
          />
        </ChartContainer>
        {hoveredData && (
               <div className="fixed top-32  right-16 rounded-lg p-4 shadow-lg z-50 bg-white dark:bg-black text-gray-900 dark:text-white">
            <div className="font-semibold text-lg">{hoveredData.month}</div>
            <div className=" text-sm">
              Value: <span className=" font-medium">{hoveredData.value}</span>
            </div>
            {hoveredData.target && (
              <div className=" text-sm">
                Target: <span className=" font-medium">{hoveredData.target}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
      `,
    },
    {
      title: "Line Chart",
      description: "A line chart for showing trends over time.",
      component: LineChartDemo,
      code: `
"use client";
import React, { useState } from "react";
import {
  Chart,
  ChartContainer,
  ChartStyles,
  ChartData,
} from "@/lib/docs/ui/chart";

const areaData: ChartData[] = [
  { month: "Jan", value: 245, target: 300 },
  { month: "Feb", value: 654, target: 600 },
  { month: "Mar", value: 387, target: 400 },
  { month: "Apr", value: 521, target: 500 },
  { month: "May", value: 412, target: 450 },
  { month: "Jun", value: 598, target: 550 },
  { month: "Jul", value: 312, target: 350 },
  { month: "Aug", value: 743, target: 700 },
  { month: "Sep", value: 489, target: 500 },
  { month: "Oct", value: 476, target: 480 },
  { month: "Nov", value: 687, target: 650 },
  { month: "Dec", value: 198, target: 250 },
];

export const LineChartDemo = () => {
  const [hoveredData, setHoveredData] = useState<ChartData | null>(null);

  const handleMouseMove = (state: any) => {
    if (state.activePayload?.[0]) {
      setHoveredData(state.activePayload[0].payload);
    }
  };

  const handleMouseLeave = () => setHoveredData(null);

  const metrics = {
    title: "Growth Trends",
    value: hoveredData?.value?.toLocaleString() || "3,421",
    description: "Monthly growth analysis",
    trend: 8.3,
    isPositive: true,
  };

  return (
    <div className="min-h-screen p-8">
      <ChartStyles />
      <div className="max-w-4xl mx-auto">
        <ChartContainer
          title={metrics.title}
          value={metrics.value}
          description={metrics.description}
          trend={metrics.trend}
          isPositive={metrics.isPositive}
          className="bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg rounded-2xl"
        >
          <Chart
            data={areaData}
            type="line"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            height={320}
          />
        </ChartContainer>
        {hoveredData && (
             <div className="fixed top-32  right-16 rounded-lg p-4 shadow-lg z-50 bg-white dark:bg-black text-gray-900 dark:text-white">
            <div className="font-semibold text-lg">{hoveredData.month}</div>
            <div className="text-sm">
              Value: <span className=" font-medium">{hoveredData.value}</span>
            </div>
            {hoveredData.target && (
              <div className=" text-sm">
                Target: <span className="font-medium">{hoveredData.target}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
      `,
    },
    {
      title: "Pie Chart",
      description: "A pie chart for showing proportions of a whole.",
      component: PieChartDemo,
      code: `
"use client";
import React from "react";
import {
  Chart,
  ChartLegend,
  ChartContainer,
  ChartStyles,
  ChartData,
} from "@/lib/docs/ui/chart";

const pieData: ChartData[] = [
  { name: "Desktop", value: 45, fill: "#8b5cf6" },
  { name: "Mobile", value: 35, fill: "#06b6d4" },
  { name: "Tablet", value: 20, fill: "#10b981" },
];

export const PieChartDemo = () => {
  const metrics = {
    title: "Traffic Sources",
    value: "100%",
    description: "Device distribution analytics",
    trend: 2.3,
    isPositive: true,
  };

  return (
    <div className="min-h-screen p-8">
      <ChartStyles />
      <div className="max-w-4xl mx-auto">
        <ChartContainer
          title={metrics.title}
          value={metrics.value}
          description={metrics.description}
          trend={metrics.trend}
          isPositive={metrics.isPositive}
          className="bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg rounded-2xl"
        >
          <Chart data={pieData} type="pie" height={320} />
          <div className="mt-6">
            <ChartLegend data={pieData} type="pie" />
          </div>
        </ChartContainer>
      </div>
    </div>
  );
};
      `,
    },
    {
      title: "Radar Chart",
      description: "A radar chart for comparing multiple variables.",
      component: RadarChartDemo,
      code: `
"use client";
import React from "react";
import {
  Chart,
  ChartLegend,
  ChartContainer,
  ChartStyles,
  ChartData,
} from "@/lib/docs/ui/chart";

const radarData: ChartData[] = [
  { subject: "Performance", A: 120, B: 110, fullMark: 150, value: 120 },
  { subject: "Security", A: 98, B: 130, fullMark: 150, value: 98 },
  { subject: "Usability", A: 86, B: 130, fullMark: 150, value: 86 },
  { subject: "Reliability", A: 99, B: 100, fullMark: 150, value: 99 },
  { subject: "Scalability", A: 85, B: 90, fullMark: 150, value: 85 },
  { subject: "Innovation", A: 65, B: 85, fullMark: 150, value: 65 },
];

export const RadarChartDemo = () => {
  const metrics = {
    title: "System Metrics",
    value: "95.2",
    description: "Overall performance score",
    trend: 8.1,
    isPositive: true,
  };

  return (
    <div className="min-h-screen p-8">
      <ChartStyles />
      <div className="max-w-4xl mx-auto">
        <ChartContainer
          title={metrics.title}
          value={metrics.value}
          description={metrics.description}
          trend={metrics.trend}
          isPositive={metrics.isPositive}
          className="bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg rounded-2xl"
        >
          <Chart data={radarData} type="radar" height={320} />
          <div className="mt-6">
            <ChartLegend data={radarData} type="radar" />
          </div>
        </ChartContainer>
      </div>
    </div>
  );
};
      `,
    },
  ],
  variants: {
    basic: {
      title: "Area Chart",
      description:
        "An area chart for visualizing quantitative data over a continuous interval.",
      component: AreaChartDemo,
      image: "/images/components/chart-area.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Interactive+Chart",
      code: `"use client";
import React, { useState } from "react";
import {
  Chart,
  ChartLegend,
  ChartContainer,
  ChartStyles,
  ChartData,
} from "@/lib/docs/ui/chart";

// Sample data for area chart
const areaData: ChartData[] = [
  { month: "Jan", value: 245, target: 300 },
  { month: "Feb", value: 654, target: 600 },
  { month: "Mar", value: 387, target: 400 },
  { month: "Apr", value: 521, target: 500 },
  { month: "May", value: 412, target: 450 },
  { month: "Jun", value: 598, target: 550 },
  { month: "Jul", value: 312, target: 350 },
  { month: "Aug", value: 743, target: 700 },
  { month: "Sep", value: 489, target: 500 },
  { month: "Oct", value: 476, target: 480 },
  { month: "Nov", value: 687, target: 650 },
  { month: "Dec", value: 198, target: 250 },
];

const AreaChartDemo = () => {
  const [hoveredData, setHoveredData] = useState<ChartData | null>(null);

  const metrics = {
    title: "Revenue Analytics",
    value: hoveredData?.value?.toLocaleString() || "5,267",
    description: "Monthly performance tracking",
    trend: -5.2,
    isPositive: false,
  };

  const handleMouseMove = (state: any) => {
    if (state.activePayload?.[0]) {
      setHoveredData(state.activePayload[0].payload);
    }
  };

  const handleMouseLeave = () => setHoveredData(null);

  return (
    <div className="min-h-screen flex items-center justify-center p-8 transition-colors duration-300">
      <ChartStyles />

      <div className="w-full max-w-4xl">
        {/* Main Chart Card */}
        <ChartContainer
          title={metrics.title}
          value={metrics.value}
          description={metrics.description}
          trend={metrics.trend}
          isPositive={metrics.isPositive}
          className="bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg rounded-2xl"
        >
          <Chart
            data={areaData}
            type="area"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            height={320}
          />
        </ChartContainer>

        {/* Data Preview Tooltip */}
        {hoveredData && (
          <div className="fixed top-32 right-16 rounded-lg p-4 shadow-lg z-50 bg-white dark:bg-black text-gray-900 dark:text-white">
            <div className="font-semibold text-lg">{hoveredData.month}</div>
            <div className="text-sm">
              Value: <span className="font-medium">{hoveredData.value}</span>
            </div>
            {hoveredData.target && (
              <div className="text-sm">
                Target:{" "}
                <span className="font-medium">{hoveredData.target}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AreaChartDemo;
`,
      manualCode: `"use client";
import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

export interface ChartData {
  month?: string;
  subject?: string;
  name?: string;
  value: number;
  target?: number;
  A?: number;
  B?: number;
  fullMark?: number;
  fill?: string;
}

export interface ChartProps {
  data: ChartData[];
  type: "area" | "bar" | "line" | "pie" | "radar";
  onMouseMove?: (state: any) => void;
  onMouseLeave?: () => void;
  height?: number | string;
  className?: string;
}

export const Chart: React.FC<ChartProps> = ({
  data,
  type,
  onMouseMove,
  onMouseLeave,
  height = "100%",
  className = "",
}) => {
  const commonProps = {
    onMouseMove,
    onMouseLeave,
  };

  const renderChart = () => {
    switch (type) {
      case "area":
        return (
          <AreaChart data={data} {...commonProps}>
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#374151"
              opacity={0.3}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <YAxis hide />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#8b5cf6"
              strokeWidth={2}
              fill="url(#areaGradient)"
            />
          </AreaChart>
        );

      case "bar":
        return (
          <BarChart data={data} {...commonProps}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#374151"
              opacity={0.3}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <YAxis hide />
            <Bar dataKey="value" fill="#06b6d4" radius={[4, 4, 0, 0]} />
          </BarChart>
        );

      case "line":
        return (
          <LineChart data={data} {...commonProps}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#374151"
              opacity={0.3}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <YAxis hide />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: "#10b981", strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke="#6b7280"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        );

      case "pie":
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={\`cell-\${index}\`}
                  fill={entry.fill || "#8b5cf6"}
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth={1}
                />
              ))}
            </Pie>
          </PieChart>
        );

      case "radar":
        return (
          <RadarChart data={data}>
            <PolarGrid gridType="polygon" stroke="#374151" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 150]}
              tick={false}
              axisLine={false}
            />
            <Radar
              name="Current"
              dataKey="A"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Radar
              name="Target"
              dataKey="B"
              stroke="#06b6d4"
              fill="transparent"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          </RadarChart>
        );

      default:
        return null;
    }
  };

  return (
    <div className={\`w-full \${className}\`} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        {renderChart() || <div>Unsupported chart type</div>}
      </ResponsiveContainer>
    </div>
  );
};

export interface ChartLegendProps {
  data: ChartData[];
  type: "pie" | "radar";
}

export const ChartLegend: React.FC<ChartLegendProps> = ({ data, type }) => {
  if (type === "pie") {
    return (
      <div className="flex justify-center space-x-6">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.fill }}
            />
            <span className="text-slate-400 text-sm font-medium">
              {entry.name} ({entry.value}%)
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (type === "radar") {
    return (
      <div className="flex justify-center space-x-6">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full" />
          <span className="text-slate-400 text-sm font-medium">Current</span>
        </div>
        <div className="flex items-center space-x-2">
          <div
            className="w-8 h-0.5 bg-cyan-500 opacity-60"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, transparent, transparent 3px, #06b6d4 3px, #06b6d4 8px)",
            }}
          />
          <span className="text-slate-400 text-sm font-medium">Target</span>
        </div>
      </div>
    );
  }

  return null;
};

export interface ChartContainerProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  value?: string;
  trend?: number;
  isPositive?: boolean;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
  children,
  className = "",
  title,
  description,
  value,
  trend,
  isPositive = true,
}) => {
  return (
    <div
      className={\`bg-slate-800/30 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden shadow-2xl \${className}\`}
    >
      {(title || description || value) && (
        <div className="p-8 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                {value && (
                  <h2 className="text-3xl font-bold text-white">{value}</h2>
                )}
                {trend !== undefined && (
                  <div
                    className={\`
                    flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium
                    \${
                      isPositive
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }
                  \`}
                  >
                    <span>{Math.abs(trend)}%</span>
                  </div>
                )}
              </div>
              {description && (
                <p className="text-slate-400 text-lg">{description}</p>
              )}
            </div>
            {title && (
              <div className="text-right">
                <p className="text-slate-500 text-sm uppercase tracking-wider">
                  {title}
                </p>
                <p className="text-slate-400 text-sm">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="p-8">{children}</div>
    </div>
  );
};

// Custom styles component for chart styling
export const ChartStyles: React.FC = () => (
  <style jsx global>{\`
    .recharts-wrapper {
      background: transparent !important;
    }

    .recharts-cartesian-grid-horizontal line,
    .recharts-cartesian-grid-vertical line {
      stroke: #374151;
      stroke-opacity: 0.3;
    }

    .recharts-tooltip-wrapper {
      filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3));
    }

    .recharts-active-dot {
      filter: drop-shadow(0 0 6px currentColor);
    }

    .recharts-bar:hover {
      filter: brightness(1.1);
    }

    .recharts-pie-sector:hover {
      filter: brightness(1.1);
      transform-origin: center;
      transform: scale(1.02);
    }
  \`}</style>
);
`,
    },
  },
};
