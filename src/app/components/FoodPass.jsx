"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { GetOneFoodItem } from "@/Actions/GetFoodItem";
import { Suspense } from "react";

// Acernity Ui
import { cn } from "@/lib/utils";

export const FoodPass = () => {
  const [FoodData, setFoodData] = useState(null);
  
  const param = useSearchParams();
  const id = param.get("id");

  useEffect(() => {
    toReloadFunc();
  }, []);

  const toReloadFunc = async () => {
    let res = await GetOneFoodItem(id);
    if (res?.success) {
      setFoodData(res?.data);
    }
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        {FoodData && (
          <div
            className="p-8 max-w-lg border bg-white relative border-primary rounded-2xl hover:shadow-xl hover:shadow-green-200 ease-in flex flex-col items-center"
            href="#"
          >
            <img
              src="https://loremflickr.com/800/600/girl"
              className="shadow rounded-lg overflow-hidden border"
            />
            <div className="mt-8">
              <div className="flex justify-between">
                <div>
                <h4 className="font-bold text-xl">{FoodData[0].foodname}</h4>
                <h3>{FoodData[0].restroname}</h3>
                </div>
              <div className="mt-2">
              <p className="text-gray-500 text-xs">{FoodData[0].date}</p>
              <p className="text-gray-500 text-xs">Expire in: 2h</p>
              </div>
              </div>
              <div>
              <p className="mt-2 text-gray-600">
                Create Exercises for any subject with the topics you and your
                students care about.
              </p>
              </div>
              <div className="mt-5">
                <div
                  className="inline-flex text-gray-600 w-full items-center justify-center rounded-md border px-3 py-2 text-sm font-bold shadow-sm"
                >
                  #ABC786
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
  );
};

