'use client'
import { GetFoodItem } from '@/Actions/GetFoodItem'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import {
  Card,
} from "@/components/ui/card"
import Image from 'next/image'
import SidebarCopm from './SidebarCopm'

const fetchFoodData = async ()=>{
    let res = await GetFoodItem();
    
    if(res?.success){
      // console.log(res?.data);
      
      return res?.data      
    }
  }
  
  const NgoDashboard = () => {
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

    <div className='flex h-screen w-screen'>
      <SidebarCopm/>

      <div className='w-full md:flex md:justify-center font-poppins'>
      <div className='md:w-[90%] py-5'>
        {FoodList?null:<h1 className='text-center font-bold text-2xl text-gray-600 mt-10'> No Food Available </h1>}
      { FoodList && FoodList.map((food, index)=>(

      
     <Card key={index} className="py-0 mx-7 h-[450px] md:h-60 md:mx-20 my-5 bg-white rounded-2xl shadow-lg overflow-hidden flex items-center md:justify-center flex-col md:flex-row">
      {/* Image Section */}
      <div className="h-[200px] w-full md:h-full md:w-1/2">
        <img
          src={food.imgurl}
          alt="Spaghetti"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content Section */}
      <div className="md:w-1/2 px-4 md:p-6 w-full flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{food.foodname}</h3>
          <h4 className="text-sm font-semibold text-gray-500">{food.restroname}</h4>
          <div className='flex justify-between mt-2'>
          <p className="text-xs text-gray-500 mb-2">{food.date}</p>
          <p className="text-xs text-gray-600">Expiry: {food.expiry}hr</p>
          </div>
          <p className="text-gray-700 text-xs mb-1">
            {food.description.slice(0,100)}...
          </p>
          <p className="text-xs text-gray-600">{food.address}</p>
        </div>

        <Button onClick={()=> router.push(`/fooddetails?id=${food._id}`)} className="mt-2 text-white font-poppins font-bold py-2 px-4 rounded-md hover:bg-green-700 transition">
          More
        </Button>
      </div>
    </Card>
    ))
    }
    </div>
    </div>
    </div>
  
  
    
  );
}

export default NgoDashboard
