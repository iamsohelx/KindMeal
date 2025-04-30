"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import { LoginUser } from "@/Actions/loginuser"

function Login() {
     const router = useRouter();
  //which type of entity signing up
    const [AccountType,setAccountType]=useState("");
  
    //email of ngo/restaurent
    const [Email,setEmail]=useState("")
  
    //password 
    const [Password,setPassword]=useState("")

    // Set Loader
    const [loader, setLoader] = useState(false);

  const handleSubmit= async (e)=>{
      setLoader(true)
      e.preventDefault();
      const UserData = {
        AccountType,
        Email,
        Password
      }
    let result = await LoginUser(UserData); 
    if(result?.success && result?.acc == "NGO"){
       router.push("/ngo-dashboard")
    }else if(result?.success && result?.acc == "Restaurant") {
      router.push("/restro-dashboard")
    }else{
      console.log("Error Occure"); 
    } 
    setLoader(false);
  }
  return (
    <div className="flex  h-screen items-center bg-green-50  w-screen  overflow-x-clip font-poppins">

        {/* left side section */}
      <div className="hidden h-screen md:flex w-2/5 bg-primary items-center">
        <div className="text-4xl font-anton text-orange text-center">
          Hey Welcome to KindMeal Community
        </div>
      </div>

       {/* right side part and main form */}
      <div className="mx-10 rounded-sm shadow-sm w-full p-8  md:w-4/5 lg:3/5 bg-white/90 ">
         
         {/* Heading */}
        <h2 className="text-2xl text-black/80 font-semibold mb-6 text-center ">
             Login
        </h2>

        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>

          {/* row1 */}
          <div className="flex sm:gap-5 sm:flex-row flex-col gap-2">

                {/* ngo or restorent */}
                <div className="grid lg:w-[100%] gap-1.5 sm:w-1/2" >
                  <Label >Who You Are</Label>

                  <div>
                  <Select required onValueChange={(value) => setAccountType(value)} >
                    <SelectTrigger className="w-full border-black/20" >
                      <SelectValue placeholder="Sign up As a" />
                    </SelectTrigger>
                    <SelectContent >
                      <SelectItem value="Restaurant">Restaurant</SelectItem>
                      <SelectItem value="NGO">NGO</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-[12px] invisible">{"msg"}</p>
                  </div>
                </div>
              {/* username  */}     
          </div>


          {/* row2 */}
          <div className="flex sm:gap-5 sm:flex-row flex-col gap-2">
             {/* Email  */}
             <div className="grid lg:w-[100%] gap-1.5 sm:w-1/2 w-full">
                <Label>Email</Label>
                <div>
                  <Input required onChange={(e)=>setEmail(e.target.value)} placeholder="abc@gmail.com" className="border-black/20"/>
                  <p className="text-[12px] invisible">{"msg"}</p>
                </div>
              </div>
              </div>
            {/* Password  */}
            <div className="grid lg:w-[100%] gap-1.5 sm:w-1/2 w-full">
              <Label>Password</Label>
              <div>
                <Input required onChange={(e)=>setPassword(e.target.value)} placeholder="password" className="border-black/20 outline-black/70"/>
                  
                <p className="text-[12px] invisible">{"msg"}</p>
              </div>
            </div>
          

          <Button type="submit" size="lg" className="cursor-pointer">
            {loader?<Loader strokeWidth={3} size={100} className="animate-spin"/>:"Login"}
          </Button>
        </form>
        
        <div className="w-full py-3 flex justify-center ">
          <p className="text-black/70 text-center">Dont have an Account?<Link href={"/Signup"} className="text-blue-900 font-semibold">Sign Up</Link></p>
        </div>
        
      </div>
    </div>
  )
}

export default Login