"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"

function Signup() {

  const handleSubmit=(data)=>{
     console.log(data)
  }
  return (
    <div className="flex  h-auto  w-screen  overflow-x-clip font-poppins">

        {/* left side section */}
      <div className="hidden md:flex w-2/5 bg-primary items-center">
        <div className="text-4xl font-anton text-orange text-center">
          Hey Welcome to KindMeal Community
        </div>
      </div>

       {/* right side part and main form */}
      <div className="shadow-2xl   w-full p-8  md:w-4/5 lg:3/5 bg-white/90 ">
         
         {/* Heading */}
        <h2 className="text-2xl text-black/80 font-semibold mb-6 text-center ">
          Resistration
        </h2>

        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>

          {/* row1 */}
          <div className="flex sm:gap-5 sm:flex-row flex-col gap-2">

                {/* ngo or restorent */}
                <div className="grid gap-1.5 sm:w-1/2 w-full" >
                  <Label >Who You Are</Label>

                  <div>
                  <Select >
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
              <div className="grid gap-1.5 sm:w-1/2 w-full">
                <Label>Restraunt/NGO name</Label>
                <div>
                  <Input placeholder="username" className="border-black/20"/>
                  <p className="text-[12px] invisible">{"msg"}</p>
                </div>
              </div>      
          </div>


          {/* row2 */}
          <div className="flex sm:gap-5 sm:flex-row flex-col gap-2">
             {/* Email  */}
             <div className="grid gap-1.5 sm:w-1/2 w-full">
                <Label>Email</Label>
                <div>
                  <Input placeholder="abc@gmail.com" className="border-black/20"/>
                  <p className="text-[12px] invisible">{"msg"}</p>
                </div>
              </div>
          
            {/* Password  */}
            <div className="grid gap-1.5 sm:w-1/2 w-full">
              <Label>Password</Label>
              <div>
                <Input placeholder="password" className="border-black/20 outline-black/70"/>
                <p className="text-[12px] invisible">{"msg"}</p>
              </div>
            </div>
          </div>

          {/* row3 */}
           {/* Address  */}
           <div className="grid gap-1.5">
            <Label>Address</Label>
            <div>
              <textarea rows={3} placeholder="Address" className="w-full p-2 border-[1px] border-black/20 rounded-sm" />
              <p className="text-[12px] invisible">{"msg"}</p>
            </div>
          </div>
         
           {/* mobile  */}
           <div className="grid gap-1.5 sm:w-1/2 w-full">
              <Label>Mobile</Label>
              <div>
                 <div className="flex gap-2">
                    <Input placeholder="mobile" className="border-black/20"/>
                    <Button variant="ghost" className="cursor-pointer">Verify</Button>
                 </div>
                <p className="text-[12px] invisible">{"msg"}</p>
              </div>
          </div>

          <Button type="submit" size="lg" className="cursor-pointer">Sign Up</Button>
        </form>
        
        <div className="w-full py-3 flex justify-center ">
          <p className="text-black/70 text-center">Already have an Account?<Link href={"#"} className="text-blue-900 font-semibold">Log In</Link></p>
        </div>
        
      </div>
    </div>
  )
}

export default Signup