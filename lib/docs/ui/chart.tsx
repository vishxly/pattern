"use client";
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
                  key={`cell-${index}`}
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
    <div className={`w-full ${className}`} style={{ height }}>
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
      className={`bg-slate-800/30 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden shadow-2xl ${className}`}
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
                    className={`
                    flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium
                    ${
                      isPositive
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }
                  `}
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
  <style jsx global>{`
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
  `}</style>
);
