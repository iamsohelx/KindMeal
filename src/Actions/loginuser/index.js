"use server"
import connDB from "@/database/dbconnection";
import Ngo from "@/database/Models/ngo";
import Restro from "@/database/Models/restro";
import bcrypt from "bcrypt"
import JWT from "jsonwebtoken"

export async function LoginUser(UserData) {
  try {
     await connDB();
     const { AccountType, Email, Password } = UserData;
     
     if(AccountType==="NGO"){
        const user = await Ngo.findOne({email:Email});
        if(user){
          
        }
     }
     
  } catch (error) {
    
  }
}