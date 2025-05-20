"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { GetOneFoodItem } from "@/Actions/GetFoodItem";
import SidebarCopm from "../components/SidebarCopm";
import QrCodeDownload from "../components/QrCodeDownload";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [FoodData, setFoodData] = useState(null);
  const [qrDialog, setQrDialog] = useState(false)
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

  const DownloadQr = async ()=> {
   qrDialog? setQrDialog(false): setFoodData(true)
  }

  return (
    <div className="flex">
      <SidebarCopm />

      <div className="m-auto pr-10">
        {FoodData &&
          FoodData.map((food, index) => (
            <section
            key={index}
            className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased"
            >
              <div className="max-w-full 2xl:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                  <div className="shrink-0 w-lg lg:max-w-lg mx-auto">
                    <img
                      className="w-full rounded-sm dark"
                      src={food.imgurl}
                      alt=""
                      />
                  </div>

                  <div className="mt-6 sm:mt-8 lg:mt-0">
                    <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                      {food.foodname}
                    </h1>
                    <p className="text-gray-600">@{food.restroname}</p>
                    <p className="text-gray-400">{food.date}</p>
                    <p className="mt-2">{food.address}</p>
                    <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                      <div className="flex items-center gap-2 mt-2 sm:mt-0">
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                          (5.0)
                        </p>
                        <a
                          href="#"
                          className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                          >
                          345 Reviews
                        </a>
                      </div>
                    </div>

                    <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                      <QrCodeDownload id={food._id}/>
                    </div>

                    <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                    <p className="mb-6 text-gray-500 dark:text-gray-400">
                      {food.description}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
          
      </div>
    </div>
  );
};

export default Page;
