'use client'
import React, { useEffect, useState } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Burger from "../../../public/Assets/hotdog.jpg"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import { GetMyFoodItem } from '@/Actions/GetMyFoodItem'


const MyPostedFood = () => {

    const [FoodData, setFoodData] = useState(null);

    useEffect(()=>{
        toLoadFunc();
    },[])

    const toLoadFunc = async ()=> {
        const res = await GetMyFoodItem();

        if(res?.success){
          setFoodData(res?.data)
        }
    }

  return (
    <ScrollArea>
        { !FoodData ? "No Food Item Posted" :
        FoodData.map((food, idx)=>(

       
        <div key={idx} className='flex w-full h-fit border-2 p-2 rounded-sm mb-2'>
            <Avatar className={"h-25 w-25 rounded-lg"}>
                <img src={food.imgurl} alt="CN" />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className='ml-2 w-full p-2'>
               <h1 className='font-bold text-primary'>{food.foodname}</h1>
               <div className='flex justify-between mb-1'>
               <p className='text-xs text-gray-600'>{food.date}</p>
               <p className='text-xs text-gray-600 mb-2'>ID: #ABC6543</p>
               </div>
               {/* <p className='text-xs text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing.</p> */}
               <Button className={'text-xs text-primary hover:text-green-300 cursor-pointer'} variant="outline" size="icon"><Trash/></Button>
            </div>
        </div>
         ))
}
    </ScrollArea>
  )
}

export default MyPostedFood
