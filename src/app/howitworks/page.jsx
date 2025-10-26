import React from 'react'
import Navbar from '../components/Navbar'
import { cn } from '@/lib/utils'
import { CometCard } from '@/components/ui/comet-card'

const HowItWorks = () => {
  return (
    <>
    <Navbar/>
    <div>
    <div>
       <div className="relative flex h-fit py-10 w-screen items-center justify-center bg-gray-200 dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1.5px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */}
           <div className='w-full md:w-[50%] flex justify-center relative font-poppins flex-col md:mt-15'>
             <CometCard className='mt-16 mx-2'>
              <div className='h-52 bg-white flex flex-col justify-center rounded-2xl p-2 md:p-4'>
               <h3 className='text-gray-600 font-bold font-poppins text-sm md:text-[16px]'><span className='text-primary font-bold'>Step1</span> : Sign Up or Login 🙎‍♂️</h3>
               <div className='p-2 font-poppins'>
                 <p className='text-gray-600 font-poppins text-[13px] md:text-[15px]'>Create an account or log in as a <span className='text-primary font-bold'>Restaurant</span> or an <span className='text-primary font-bold'>NGO</span></p>
                 <p className='text-[13px] md:text-[15px] text-gray-600'>Dummy Credentials</p>
                 <div className='flex justify-between my-2 text-gray-500'>
                  <div>
                    <p className='text-xs md:text-[15px]'>For NGO</p>
                    <p className='mx-2 text-xs md:text-[13px]'><span className='text-primary font-bold'>Email</span>: abcd@gmail.com</p>
                    <p className='mx-2 text-xs md:text-[13px]'><span className='text-primary font-bold'>Password</span>: abcd</p>
                  </div>
                  <div>
                    <p className='text-xs md:text-[15px]'>For Restaurant</p>
                     <p className='mx-2 text-xs md:text-[13px]'><span className='text-primary font-bold'>Email</span>: hotel@gmail.com</p>
                    <p className='mx-2 text-xs md:text-[13px]'><span className='text-primary font-bold'>Password</span>: abcd</p>
                  </div>
                 </div>
               </div>
               </div>
             </CometCard>
             <CometCard className='mx-2'>
              <div className='h-52 bg-white flex flex-col justify-center rounded-2xl p-2 md:p-4'>
               <h3 className='text-gray-600 font-bold font-poppins text-sm md:text-[16px]'><span className='text-primary font-bold'>Step2</span> : For Restaurants 🍽️</h3>
               <p className='m-2 font-poppins text-gray-500 text-[13px] md:text-[15px]'>Restaurants can donate their surplus food directly from their <span className='text-primary font-bold'>dashboard </span>
                by adding details of the available food items.
               </p>
               </div>
             </CometCard>
             <CometCard className='mx-2'>
              <div className='h-52 bg-white flex flex-col justify-center rounded-2xl p-2 md:p-4'>
               <h3 className='text-gray-600 font-bold font-poppins text-sm md:text-[16px]'><span className='text-primary font-bold'>Step3</span> : For NGO 💚</h3>
               <p className='m-2 font-poppins text-gray-500 text-[13px] md:text-[15px]'>NGO's can browse a list of donated food items.<br/>Click <span className='text-primary font-bold'>"More"</span>
               to view full details and tap <span className='text-primary font-bold'>"Grab Now"</span> to reserve the food.<br/>A QR Code will appear -Show it at the restaurant.
               </p>
               </div>
             </CometCard>
             <CometCard className='mx-2'>
              <div className='h-52 bg-white flex flex-col justify-center rounded-2xl p-2 md:p-4'>
               <h3 className='text-gray-600 font-bold font-poppins text-sm md:text-[16px]'><span className='text-primary font-bold'>Step4</span> : Handover 🤝</h3>
               <p className='m-2 font-poppins text-gray-500 text-[13px] md:text-[15px]'>The restaurant scans your QR code to verify the food item using a <span className='text-primary font-bold'>unique secret key </span> 
                Once verified, the food is handed over to the NGO for distribution to people in need.
               </p>
               </div>
             </CometCard>
           </div>
    </div>
    </div>
    </div>
</>
  )
}

export default HowItWorks
