"use client";
import React, { useState, useEffect } from "react";

import SidebarCopm from "../components/SidebarCopm";
import FoodAddFrom from "../components/FoodAddForm";
import { BarGraph } from "../components/BarGraph";
import MyPostedFood from "../components/MyPostedFood";
import { Separator } from "@/components/ui/separator";
import DashboardUserDetails from "../components/DashboardUserDetails";
import { RadialChart } from "../components/RadialChart";

const Page = () => {
  return (
    <div className="flex w-screen h-screen">
      <SidebarCopm/>
      <div className="flex w-full h-full overflow-hidden">
        <div className="w-[65%] flex flex-col justify-between p-5 h-full overflow-hidden">
          <div className=" flex justify-between border-2 rounded-sm overflow-hidden p-3 h-[20%]">
            <div className="w-full p-1">
             Dashboard
             <DashboardUserDetails/>
            </div>
            <Separator orientation="vertical"/>
             <div className="w-full p-1 flex items-center justify-center">
            <FoodAddFrom/>
             </div>
             <Separator orientation="vertical"/>
            <div className="w-full p-1 flex ">
              <RadialChart/>
            </div>
          </div>
          <div className="border-2 p-2 flex justify-center items-center rounded-sm overflow-hidden h-[75%]">
            <BarGraph/>
          </div>
        </div>
        <div className="w-[35%] p-5 overflow-hidden rounded-sm">
          <div className=" w-full border-2 rounded-md p-5 h-full overflow-scroll no-scrollbar">
            <MyPostedFood/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;
