'use server'

import connDB from "@/database/dbconnection";
import Fooditem from "@/database/Models/fooditem";

export async function GetFoodItem(params) {
    try{
      await connDB();
      const foodList = await Fooditem.find({})

      if(!foodList){
        return{
            success: false,
            msg: "Something went wrong while fetching Food Item"
        }
      }

      let data = await JSON.parse(JSON.stringify(foodList))
       
       return {
            success: true,
            data,
        }
      
    }catch(err){
      console.log(err);
      
    }
}

export async function GetOneFoodItem(params) {
    try{
      await connDB();
      const id = params
      const foodList = await Fooditem.find({_id:id})

      if(!foodList){
        return{
            success: false,
            msg: "Something went wrong while fetching Food Item"
        }
      }

      let data = await JSON.parse(JSON.stringify(foodList))
       
       return {
            success: true,
            data,
        }
      
    }catch(err){
      console.log(err);
      
    }
}