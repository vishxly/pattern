"use client";
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
          <div className="fixed top-32  right-16 rounded-lg p-4 shadow-lg z-50 bg-white dark:bg-black text-gray-900 dark:text-white">
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
