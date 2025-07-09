"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useState, useEffect } from "react"
import { GetMyFoodItem } from "@/Actions/GetMyFoodItem";

const chartConfig = {
  desktop: {
    label: "Food",
    color: "var(--chart-1)",
  }
};

export function TempBar() {
    const [ChartData, setChartData] = useState(null);
    
      useEffect(()=>{
        toLoadFunc();
      },[])
    
      const toLoadFunc = async ()=> {
        const res = await GetMyFoodItem();
    
        if(res?.success){
          
        const chartData = [
          { month: "January", desktop: res?.monthFrequency.jan || 0 , },
          { month: "February", desktop: res?.monthFrequency.feb || 0 , },
          { month: "March", desktop: res?.monthFrequency.march || 0 , },
          { month: "April", desktop: res?.monthFrequency.april || 0, },
          { month: "May", desktop: res?.monthFrequency.may || 0, },
          { month: "June", desktop: res?.monthFrequency.jun || 0, },
          { month: "July", desktop: res?.monthFrequency.july || 0, },
          { month: "August", desktop: res?.monthFrequency.aug || 0, },
          { month: "September", desktop: res?.monthFrequency.sept || 0 , },
          { month: "October", desktop: res?.monthFrequency.oct || 0, },
          { month: "November", desktop: res?.monthFrequency.nov || 0, },
          { month: "December", desktop: res?.monthFrequency.dec || 0, },
        ];      
      
          setChartData(chartData)
          console.log(ChartData);
          
          
          
      
        }
      }
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={ChartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
