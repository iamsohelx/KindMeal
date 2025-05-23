"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import { useEffect, useState } from "react"
import { SignUpUser,CheckEmailIsUnique} from "@/Actions/signup-user"
import { useRouter } from "next/navigation"
import { Loader,Loader2 } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"


function Signup() {
  const router = useRouter()
  
  const [IsSubmitting,setIsSubmitting]=useState(false)
  //which type of entity signing up
  const [AccountType,setAccountType]=useState("")

  //name of ngo/restaurent
  const [Name,setName]=useState("")

  //email of ngo/restaurent
  const [Email,SetEmail]=useState("")

  //password 
  const [Password,setPassword]=useState("")
 
  //address
  const [Address,setAddress]=useState("")

  //phone number
  const [Phone,setPhone]=useState("")


  ////Error msg variables
  // const [AccountTypeErrMsg,setAccountTypeErrMsg]=useState("")
  const [NameErrMsg,setNameErrMsg]=useState("")
  const [EmailErrMsg,setEmailErrMsg]=useState("")
  const [PasswordErrMsg,setPasswordErrMsg]=useState("")
  // const [AddressErrMsg,setAddressErrMsg]=useState("")
  const [PhoneErrMsg,setPhoneErrMsg]=useState("")

  //show password 
  const [showPassword,setShowPassword]=useState(false)
  
 //handling user submit data
 const handleSubmit=async (e)=>{

      e.preventDefault()
      setIsSubmitting(true)

      const UserData={
        AccountType,
        Name,
        Email,
        Password,
        Address,
        Phone
      }
      
      const result = await SignUpUser(UserData)

      if(result.success){

        setIsSubmitting(false)
        router.push("/login")

      }else{

        setIsSubmitting(false)
        console.log(result.error)

      }
   
  }
  
  // check email input box function
  const [EmailLoader,setEmailLoader]=useState(false)
  const [IsTextGreen,setIsTextGreen]=useState(false)
  
  function ValidEmail(Email){
      const regex = /^\S+@\S+\.\S+$/;
      return regex.test(Email);
  }
  

  async function  EmailValidationFunction(emailValue){
    if(emailValue){
      // checks the format of email
      if(!(ValidEmail(emailValue))){
        //for red color text
        setIsTextGreen(false)
        //for stoping loader
        setEmailLoader(false)
        //for sending msg 
        setEmailErrMsg("Invalid email format");
        return;
      }
      //check email is already present in database or not
       const IsEmailUnique = await CheckEmailIsUnique(AccountType,emailValue)
       if(IsEmailUnique)
        { 
          //msg color
          setIsTextGreen(IsEmailUnique.success)
          //for stopping loading
          setEmailLoader(false)
        }
       //setting error msg
       setEmailErrMsg(IsEmailUnique.msg)
       return IsEmailUnique;
    }else{
      setEmailErrMsg("")
    }
  }
  
  //triggers when email or accounttype changes
  useEffect(()=>{
    EmailValidationFunction(Email)
  },[AccountType,Email])


  //check mobile number is valid or not
  function validMobileNumber(MobileNumber){
    const regex = /^[6-9]\d{9}$/;
    return regex.test(parseInt(MobileNumber))
  }
  
  
  //check user can sign up or not if he filled all values properly allow him to signup
  const [IsAllFieldsFilledResult, setIsAllFieldsFilledResult] = useState(false);

function IsAllFieldsFilled() {
  // Make sure all fields are filled and have no error messages
  const allFieldsFilled =
    Name && Phone && Password && Email && Address && AccountType;

  const noErrors =
    !NameErrMsg && !PhoneErrMsg && !PasswordErrMsg && IsTextGreen;

  return allFieldsFilled && noErrors;
}

useEffect(() => {
  setIsAllFieldsFilledResult(IsAllFieldsFilled());
}, [AccountType, Name, Email, Address, Phone, Password, NameErrMsg, PhoneErrMsg, PasswordErrMsg,IsTextGreen]);



  return (

      <div className=" rounded-2xl shadow-sm w-full p-8 pb-2 bg-white/90 ">
         
         {/* Heading */}
        <h2 className="text-2xl text-gray-700 font-bold mb-6 text-center ">
          Resistration
        </h2>

        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>

          {/* row1 */}
          <div className="flex sm:gap-5 sm:flex-row flex-col gap-2">

                {/* ngo or restorent */}
                <div className="grid gap-1.5 sm:w-1/2 w-full" >
                  <Label className={'font-bold text-gray-700'}>Who You Are *</Label>

                  <div className="grid gap-1">
                  <Select required onValueChange={(value) => {
                     setAccountType(value)
                     setNameErrMsg("")
                    }
                  } 
                   >
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
                <Label className={'font-bold text-gray-700'}>Restraunt/NGO name *</Label>
                <div className="grid gap-1">
                  <Input required placeholder="YourName" value={Name}
                  className={`${NameErrMsg?"border-red-500 ":"border-black/20"}`} 
                  onChange={(e)=>{
                    if(AccountType){
                      setName(e.target.value)
                    }else{
                      setNameErrMsg("Please First choose Who you are")
                    }
                  }}/>
                  <p className={`text-[12px] font-semibold text-red-600/80 ${NameErrMsg?"visible":"invisible"}`}>   {
                        NameErrMsg?NameErrMsg:"errMsg"
                      }
                  </p>
                </div>
              </div>      
          </div>
       

          {/* row2 */}
          <div className="flex sm:gap-5 sm:flex-row flex-col gap-2">
             {/* Email  */}
             <div className="grid gap-1.5 sm:w-1/2 w-full">
                <Label className={'font-bold text-gray-700'}>Email *</Label>
                <div className="grid gap-1">
                  <Input required placeholder="Enter your email"   value={Email}  onChange={async(e)=>{
                    if(AccountType){
                      const emailValue = e.target.value
                      SetEmail(e.target.value)
                      setEmailLoader(true)
                      EmailValidationFunction(emailValue)
                    }else{
                      setEmailLoader(false)
                      setEmailErrMsg("first select who you are")
                    }
                    
                  }} />
                  <p className={`text-[12px] font-semibold ${IsTextGreen?"text-green-600/80":"text-red-600/80"}  ${EmailErrMsg?"visible":"invisible"}`}>   {
                        EmailLoader?<Loader2 className="animate-spin text-black/70 font-bold" size={"18px"} />: EmailErrMsg?EmailErrMsg:"errMsg"
                       
                      }
                  </p>
                </div>
              </div>
          
            {/* Password  */}
            <div className="grid gap-1.5 sm:w-1/2 w-full">

              <Label className={'font-bold text-gray-700'}>Password *</Label>
              <div className="grid gap-1 relative">
                <Input placeholder="password" value={Password} className="border-black/20 outline-black/70 relative" onChange={(e)=>{
                   setPassword(e.target.value)
                   if(Password.length<8){
                    setPasswordErrMsg("Minimum length must 8 character")
                   }else{
                    setPasswordErrMsg("")
                   }
                }           
                } type={showPassword?"text":"password"}/> 
               {/* show button  */}
               <div className="absolute right-0 top-0">
                  <Button className="cursor-pointer bg-transparent text-gray-700 hover:bg-transparent" onClick={()=>{
                    setShowPassword(!showPassword)
                  }} type="button">
                     <Eye strokeWidth={3}/>
                  </Button>
               </div>
                <p className={`text-[12px] font-semibold text-red-600/80 ${PasswordErrMsg?"visible":"invisible"}`}>   {
                        PasswordErrMsg?PasswordErrMsg:"errMsg"
                      }
                </p>             
            </div>
          </div>
          </div>
          
          {/* row3 */}
           {/* Address  */}
           <div className="grid gap-1.5">
            <Label className={'font-bold text-gray-700'}>Address *</Label>
            <div className="grid gap-1">
              <Textarea rows={3} placeholder="Address" className="w-full p-2 resize-none border-[1px] border-black/20 rounded-sm" onChange={(e)=>setAddress(e.target.value)}/>
              <p className="text-[12px] invisible">{"msg"}</p>
            </div>
          </div>
         
           {/* mobile  */}
           <div className="grid gap-1.5 sm:w-1/2 w-full">
              <Label className={'font-bold text-gray-700'}>Mobile *</Label>
              <div className="grid gap-1">
                 <div className="flex gap-2">
                    <Input placeholder="mobile" className="border-black/20" 
                    onChange={(e)=>{
                      const PhoneNumber = e.target.value
                      setPhone(PhoneNumber)
                      if(PhoneNumber.length!=10){
                        setPhoneErrMsg("Length must be 10 digits")
                       }else{
                        if(!(validMobileNumber(PhoneNumber))){
                          setPhoneErrMsg("Invalid Mobile Number")
                          return;
                        }
                         setPhoneErrMsg("")
                       }
                      
                    }}/>
                    <Button variant="ghost" className="cursor-pointer" type="button" disabled>Verify</Button>
                 </div>
                 <p className={`text-[12px] font-semibold text-red-600/80 ${PhoneErrMsg?"visible":"invisible"}`}>   {
                        PhoneErrMsg?PhoneErrMsg:"errMsg"
                      }
                  </p>
              </div>
          </div>

          <Button  
           size="lg" 
           className="cursor-pointer " 
           type="submit" 
           disabled={!IsAllFieldsFilledResult} >
            {
              IsSubmitting?<Loader strokeWidth={3} size={100} className="animate-spin"/>:"Sign Up"
            }
           </Button>
        </form>
        
        <div className="w-full py-3 flex justify-center ">
          <p className="text-black/70 text-center">Already have an Account?<Link href={"/login"} className="text-blue-900 font-semibold">Log In</Link></p>
        </div>
        
    </div>
    
  )
}

export default Signup