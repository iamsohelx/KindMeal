'use client'
import { GetFoodItem } from '@/Actions/GetFoodItem'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import SidebarCopm from '../components/SidebarCopm'

const fetchFoodData = async ()=>{
    let res = await GetFoodItem();
    
    if(res?.success){
      // console.log(res?.data);
      
      return res?.data      
    }
  }
  
  const Page = () => {
  const [FoodList, setFoodList] = useState(null);
  const router = useRouter()

  useEffect(() => {
    const toReloadFunc = async () => {
      const data = await fetchFoodData();
      console.log("Fetched Data:", data);
      
      setFoodList(data);
    };
    toReloadFunc();
  }, []);

  // Use another useEffect to log when FoodList actually updates
  useEffect(() => {
    console.log("FoodList updated:", FoodList);
  }, [FoodList]); // This will run when FoodList changes
  

  return (

    <div className='flex w-screen'>
      <SidebarCopm/>

      <div className='w-full'>
      { FoodList && FoodList.map((food, index)=>(

      
     <Card key={index} className="max-w-5xl max-h-52 mx-auto my-5 bg-white rounded-sm shadow-lg overflow-hidden flex items-center justify-center flex-col md:flex-row">
      {/* Image Section */}
      <div className="md:w-1/2 py-1">
        <img
          src={food.imgurl}
          alt="Spaghetti"
          className="w-full h-full rounded-sm object-cover"
        />
      </div>
      {/* Content Section */}
      <div className="md:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{food.foodname}</h3>
          <h4 className="text-sm font-bold text-gray-700">@{food.restroname}</h4>
          <p className="text-[10px] text-gray-500 mb-2">{food.date}</p>
          <p className="text-gray-700 text-[10px] mb-1">
            {food.description.slice(0,100)}...
          </p>
          <p className="text-[10px] text-gray-600">{food.address}</p>
          <p className="text-[10px] text-gray-600">Expiry:{food.expiry}hr</p>
        </div>

        <Button onClick={()=> router.push(`/fooddetails?id=${food._id}`)} className="mt-2 bg-black text-white py-2 px-4 rounded-sm hover:bg-gray-800 transition">
          Grab Now
        </Button>
      </div>
    </Card>
    ))
    }
    </div>
    </div>
  
  
    
  );
}

export default Page
