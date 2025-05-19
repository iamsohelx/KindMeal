'use server'

import connDB from "@/database/dbconnection";
import Fooditem from "@/database/Models/fooditem";

export async function DeleteFoodItem(Id) {
    try {

        await connDB()
        const res = await Fooditem.findByIdAndDelete({_id:Id})

        if(res){
            return {
                success: true,
            }
        }

        return{
            success: false,
        }

    } catch (error) {
        console.log(error);
        
    }
}