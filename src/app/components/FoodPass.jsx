"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { GetOneFoodItem } from "@/Actions/GetFoodItem";

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
     <div>
        {FoodData && (
          <div
            className="mt-36 mx-5 p-5 max-w-lg max-h-[70%] border bg-white shadow-sm relative rounded-2xl ease-in flex flex-col items-center"
            href="#"
          >
            <img
              src={FoodData[0].imgurl}
              className="shadow rounded-lg w-full overflow-hidden border"
            />
            <div className="mt-8">
              <div className="flex justify-between">
                <div>
                <h4 className="font-bold text-gray-700 text-xl">{FoodData[0].foodname}</h4>
                <h3 className="text-gray-600">{FoodData[0].restroname}</h3>
                </div>
              <div className="mt-2">
              <p className="text-gray-500 text-xs">{FoodData[0].date}</p>
              <p className="text-gray-500 text-xs">Expire in: {FoodData[0].expiry}h</p>
              </div>
              </div>
              <div>
              <p className="text-gray-600 mt-2">{FoodData[0].address}</p>
              <p className="mt-2 text-gray-500">
                {FoodData[0].description.slice(0, 100)}...
              </p>
              </div>
              <div className="mt-5">
                <div
                  className="inline-flex text-gray-600 w-full items-center justify-center rounded-md border px-3 py-2 text-sm font-bold shadow-sm"
                >
                  #{FoodData[0].foodid}
                </div>
              </div>
            </div>
          </div>
        )}
</div>
  );
};

