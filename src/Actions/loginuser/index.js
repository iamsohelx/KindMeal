"use server"
import connDB from "@/database/dbconnection";
import Ngo from "@/database/Models/ngo";
import Restro from "@/database/Models/restro";
// import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"
import { cookies } from "next/headers";

export async function LoginUser(UserData) {
  try {
     await connDB();
     const { AccountType, Email, Password } = UserData;
     let user;
     if(AccountType==="NGO"){
        user = await Ngo.findOne({email:Email});
        if(user && (Password == user.password)){
         let token = Jwt.sign({email:user.email,userid:user._id,ngoname:user.name, acctype:AccountType},"kindmeal2911")
         let cookieStore = await cookies()
         cookieStore.set("token",token)           
        }
     }
     if(AccountType==="Restaurant"){
      user = await Restro.findOne({email:Email});
      if(user && (Password == user.password)){
       let token = Jwt.sign({email:user.email,userid:user._id,restroname:user.name, acctype:AccountType},"kindmeal2911")
       let cookieStore = await cookies()
       cookieStore.set("token",token)           
      }
   }

   return {
      success:true,
      msg:"User created successfully!",
      acc: AccountType
    }
     
  } catch (error) {
   return {
      success:false,
      msg:"Error Is:" + error
     }
  }
}