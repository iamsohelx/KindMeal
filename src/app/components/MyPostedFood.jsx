"use client";
import React, { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Burger from "../../../public/Assets/hotdog.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { GetMyFoodItem } from "@/Actions/GetMyFoodItem";
import { DeleteFoodItem } from "@/Actions/DeleteFoodItem";

const MyPostedFood = () => {
  const [FoodData, setFoodData] = useState();
  const [Update, setUpdate] = useState(false);

  useEffect(() => {
    toLoadFunc();
  }, []);

  const toLoadFunc = async () => {
    const res = await GetMyFoodItem();

    if (res?.success) {
      setFoodData(res?.data);
      // Update?setUpdate(false):setUpdate(true)
    }
  };

  const handleDelete = async (id) => {
    const res = await DeleteFoodItem(id);

    if (res?.success) {
      console.log("item deleted");
      toLoadFunc();
    }
  };

  return (
    <ScrollArea>
      {!FoodData
        ? "No Food Item Posted"
        : FoodData.map((food, idx) => (
            <div
              key={idx}
              className="flex w-full h-fit border-2 p-2 rounded-sm mb-2"
            >
              <Avatar className={"h-28 w-28 md:h-25 md:w-25 rounded-lg"}>
                <img src={food.imgurl} alt="" />
                <AvatarFallback className="rounded-lg">Kindmeal</AvatarFallback>
              </Avatar>
              <div className="ml-2 w-full p-2">
                <h1 className="font-bold text-primary">{food.foodname}</h1>
                <div className="flex justify-between mb-1">
                  <p className="text-xs text-gray-600">{food.date}</p>
                  <p className="text-xs text-gray-600 mb-2">
                    ID: #{food.foodid}
                  </p>
                </div>
                {/* <p className='text-xs text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing.</p> */}
                <Button
                  onClick={() => handleDelete(food._id)}
                  className={
                    "text-xs text-primary hover:text-green-300 cursor-pointer"
                  }
                  variant="outline"
                  size="icon"
                >
                  <Trash />
                </Button>
              </div>
            </div>
          ))}
    </ScrollArea>
  );
};

export default MyPostedFood;
