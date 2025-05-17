"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, },
  { month: "February", desktop: 305, },
  { month: "March", desktop: 237, },
  { month: "April", desktop: 73, },
  { month: "May", desktop: 209, },
  { month: "June", desktop: 214, },
  { month: "July", desktop: 186 },
  { month: "August", desktop: 305, },
  { month: "September", desktop: 237, },
  { month: "October", desktop: 73, },
  { month: "November", desktop: 209, },
  { month: "December", desktop: 214, },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  }
};

export function BarGraph() {
  return (
    <ChartContainer config={chartConfig} className="min-h-full w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={true} horizontal={true} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} tickMargin={10} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
