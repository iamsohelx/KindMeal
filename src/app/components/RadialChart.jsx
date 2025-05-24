"use client"

import { TrendingUp } from "lucide-react"
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { useEffect, useState } from "react"
import { GetMyFoodItem } from "@/Actions/GetMyFoodItem"
const chartData = [
  { browser: "safari", fill: "var(--primary)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--primary))",
  },
} 

export function RadialChart() {

    const [foodCount, setFoodCount] = useState(200);

    useEffect(()=>{
       toLoadFunc();
    },[])

    const toLoadFunc = async ()=>{
        const res = await GetMyFoodItem();

        if(res?.success){
            setFoodCount(res?.data.length);
        }
    }

   const chartData = [
  { browser: "safari",visitors:foodCount, fill: "var(--primary)" },
]

  return (
            
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[100px]"
        >
          <RadialBarChart  
            data={chartData}
            startAngle={0}
            endAngle={250}
            innerRadius={40}
            outerRadius={55}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[43, 37]}
            />
            <RadialBar dataKey="visitors" background cornerRadius={5} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl md:text-xl font-bold"
                        >
                          {chartData[0].visitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 16}
                          className="fill-muted-foreground text-xl md:text-xs"
                        >
                          Food
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
  )
}
