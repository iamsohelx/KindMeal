"use client";
import React, { useState, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import SidebarCopm from "./SidebarCopm";
import FoodAddFrom from "./FoodAddForm";
import { BarGraph } from "./BarGraph";
import MyPostedFood from "./MyPostedFood";
import { Separator } from "@/components/ui/separator";
import DashboardUserDetails from "./DashboardUserDetails";
import { RadialChart } from "./RadialChart";
import { RefreshCw } from "lucide-react";

const RestroDashboard = () => {
  return (
    <div className="flex w-screen h-screen relative z-50">
      <SidebarCopm />
      <div className="flex flex-col md:flex-row w-full h-full overflow-hidden">
        <div className="w-full md:w-[65%] flex flex-col justify-between py-5 pr-5 md:p-5 h-full overflow-hidden">
          <div className=" flex justify-between border-2 bg-white rounded-2xl overflow-hidden p-3 h-[24%] md:h-[20%]">
            <div className="hidden md:inline w-full p-1">
              Dashboard
              <DashboardUserDetails />
            </div>
            <Separator className={'hidden md:inline'} orientation="vertical" />
            <div className="w-full px-3 p-1 gap-7 flex items-center justify-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <RefreshCw
                      onClick={() => window.location.reload()}
                      className="text-primary text-xl"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Refresh</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <FoodAddFrom />
            </div>
            <Separator orientation="vertical" />
            <div className="w-full p-1 flex ">
              <RadialChart />
            </div>
          </div>
          <div className=" bg-white border-2 p-2 flex justify-center items-center rounded-2xl overflow-scroll no-scrollbar md:overflow-hidden h-[75%]">
            <BarGraph />
          </div>
        </div>
        <div className="w-full md:w-[35%] pr-5 pb-2.5 md:pb-5 md:p-5 bg-transparent overflow-hidden">
          <div className=" w-full border-2 bg-white rounded-2xl p-2 md:p-5 h-full overflow-scroll no-scrollbar">
            <MyPostedFood />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestroDashboard;
