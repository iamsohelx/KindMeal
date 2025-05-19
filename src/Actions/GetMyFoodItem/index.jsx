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
        const monthFrequency = {};

       await foodData.forEach(item => {
            const month = item.month.toLowerCase();
            monthFrequency[month] = (monthFrequency[month] || 0) + 1;
        });
        console.log("month Servr");
        
        console.log(monthFrequency);
        


        if(foodData){
            return {
                success: true,
                data: JSON.parse(JSON.stringify(foodData)),
                monthFrequency: JSON.parse(JSON.stringify(monthFrequency))
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