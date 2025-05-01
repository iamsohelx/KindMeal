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


export async function CheckEmailIsUnique(AccountType, Email) {
    try {
      await connDB();
      
      let User = null;
  
      if (AccountType === "NGO") {
        User = await Ngo.findOne({ email: Email });
      } else if (AccountType === "Restaurant") {
        User = await Restro.findOne({ email: Email });
      } else {
        return {
          success: false,
          msg: "first select who you are",
        };
      }
      if (User) {
        return {
          success: false,
          msg: "Email already exists",
        };
      } else {
        return {
          success: true,
          msg: "Email is available",
        };
      }
  
    } catch (err) {
      console.error("Error checking email uniqueness:", err);
      return {
        success: false,
        msg: "Server error, please try again later",
        error: err.message || String(err),
      };
    }
  }