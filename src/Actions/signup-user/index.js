"use server"
import connDB from "@/database/dbconnection";
import Ngo from "@/database/Models/ngo";
import Restro from "@/database/Models/restro";


export async function SignUpUser(UserData){
   try{
      await connDB()
      const { AccountType,Name, Email, Password ,Address,Phone} = UserData;
      
      let NewUser = null

      if(AccountType=="NGO"){
         NewUser=await Ngo.create({
            name:Name,
            email:Email,
            password:Password,
            address:Address,
            phone:Phone
        })
         
      }else if(AccountType=="Restaurant"){
        NewUser=await Restro.create({
            name:Name,
            email:Email,
            password:Password,
            address:Address,
            phone:Phone
        })
      }

      return {
        success:true,
        msg:"User created successfully!"
      }

   }catch(e){
       return {
        success:false,
        msg:"Error Is:"+e
       }
   }
}