'use server'
import connDB from "@/database/dbconnection";
import Fooditem from "@/database/Models/fooditem";
import Jwt from "jsonwebtoken"
import { cookies } from "next/headers";

export async function GetMyFoodItem(params) {
    try{
        const cookieStore = cookies()
        const token = (await cookieStore).get('token')
        const UserData = Jwt.verify(token.value, "kindmeal2911")

        await connDB()
        const foodData = await Fooditem.find({restroid: UserData.userid})

        if(foodData){
            return {
                success: true,
                data: JSON.parse(JSON.stringify(foodData))
            }
        }

        return {
            success: false,
            msg: "No Food Posted Yet"
        }
        

      

    }catch(err){
        console.log(err);
        
    }
}