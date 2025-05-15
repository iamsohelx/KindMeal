'use server'
import connDB from "@/database/dbconnection";
import { cookies } from "next/headers";
import Jwt from 'jsonwebtoken'
import Ngo from "@/database/Models/ngo";
import Restro from "@/database/Models/restro";

export async function GetUserDetails(params) {
    await connDB()
    const cookieStore = cookies();
    const token = (await cookieStore).get('token');
    console.log(token);
    
    const User = Jwt.verify(token.value, 'kindmeal2911');
    if(User.acctype == 'NGO'){
    const UserDetail = await Ngo.findOne({_id:User.userid})
      return {
        success: true,
        data: JSON.parse(JSON.stringify(UserDetail))
     }
    } 

    if(User.acctype == 'Restaurant'){
    const UserDetail = await Restro.findOne({_id:User.userid})
     return {
        success: true,
        data: JSON.parse(JSON.stringify(UserDetail))
     }
    } 

    return {
        success: false,
    }


}