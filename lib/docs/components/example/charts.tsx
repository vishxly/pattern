"use client";
import React, { useState } from "react";
import {
  Chart,
  ChartLegend,
  ChartContainer,
  ChartStyles,
  ChartData,
} from "@/lib/docs/ui/chart";

// Sample data for different chart types
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

const pieData: ChartData[] = [
  { name: "Desktop", value: 45, fill: "#8b5cf6" },
  { name: "Mobile", value: 35, fill: "#06b6d4" },
  { name: "Tablet", value: 20, fill: "#10b981" },
];

const radarData: ChartData[] = [
  { subject: "Performance", A: 120, B: 110, fullMark: 150, value: 120 },
  { subject: "Security", A: 98, B: 130, fullMark: 150, value: 98 },
  { subject: "Usability", A: 86, B: 130, fullMark: 150, value: 86 },
  { subject: "Reliability", A: 99, B: 100, fullMark: 150, value: 99 },
  { subject: "Scalability", A: 85, B: 90, fullMark: 150, value: 85 },
  { subject: "Innovation", A: 65, B: 85, fullMark: 150, value: 65 },
];

// Bar Chart Demo Component
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
    <div className="min-h-screen  p-8">
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
            <div className=" font-semibold text-lg">
              {hoveredData.month}
            </div>
            <div className="text-sm">
              Value:{" "}
              <span className=" font-medium">
                {hoveredData.value}
              </span>
            </div>
            {hoveredData.target && (
              <div className=" text-sm">
                Target:{" "}
                <span className=" font-medium">
                  {hoveredData.target}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Line Chart Demo Component
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
    <div className="min-h-screen   p-8">
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
            <div className="font-semibold text-lg">
              {hoveredData.month}
            </div>
            <div className=" text-sm">
              Value:{" "}
              <span className=" font-medium">
                {hoveredData.value}
              </span>
            </div>
            {hoveredData.target && (
              <div className="text-sm">
                Target:{" "}
                <span className=" font-medium">
                  {hoveredData.target}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Pie Chart Demo Component
export const PieChartDemo = () => {
  const metrics = {
    title: "Traffic Sources",
    value: "100%",
    description: "Device distribution analytics",
    trend: 2.3,
    isPositive: true,
  };

  return (
    <div className="min-h-screen  p-8">
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

// Radar Chart Demo Component
export const RadarChartDemo = () => {
  const metrics = {
    title: "System Metrics",
    value: "95.2",
    description: "Overall performance score",
    trend: 8.1,
    isPositive: true,
  };

  return (
    <div className="min-h-screen  p-8">
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
