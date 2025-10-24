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
           <div className='w-full md:w-[50%] flex justify-center relative flex-col md:mt-15'>
             <CometCard>
              <div className='h-52 bg-white flex flex-col justify-center rounded-2xl p-4'>
               <h3 className='text-gray-600 font-bold font-poppins'>Step1 : Sign Up or Login</h3>
               <div className='p-2 font-poppins'>
                 <p className='text-gray-600 font-poppins'>Create an account or log in as a Restaurant or an NGO</p>
                 <p className='text-[15px] text-gray-600'>Dummy Credentials</p>
                 <div className='flex justify-between my-2 text-gray-500'>
                  <div>
                    <p>For NGO</p>
                    <p className='mx-2 text-[13px]'>Email: abcd@gmail.com</p>
                    <p className='mx-2 text-[13px]'>Password: abcd</p>
                  </div>
                  <div>
                    <p>For Restaurant</p>
                     <p className='mx-2 text-[13px]'>Email: hotel@gmail.com</p>
                    <p className='mx-2 text-[13px]'>Password: abcd</p>
                  </div>
                 </div>
               </div>
               </div>
             </CometCard>
             <CometCard>
              <div className='h-52 bg-white flex flex-col justify-center rounded-2xl p-4'>
               <h3 className='text-gray-600 font-bold font-poppins'>Step1 : Sign Up or Login</h3>
               <div className='p-2 font-poppins'>
                 <p className='text-gray-600 font-poppins'>Create an account or log in as a Restaurant or an NGO</p>
                 <p className='text-[15px] text-gray-600'>Dummy Credentials</p>
                 <div className='flex justify-between my-2 text-gray-500'>
                  <div>
                    <p>For NGO</p>
                    <p className='mx-2 text-[13px]'>Email: abcd@gmail.com</p>
                    <p className='mx-2 text-[13px]'>Password: abcd</p>
                  </div>
                  <div>
                    <p>For Restaurant</p>
                     <p className='mx-2 text-[13px]'>Email: hotel@gmail.com</p>
                    <p className='mx-2 text-[13px]'>Password: abcd</p>
                  </div>
                 </div>
               </div>
               </div>
             </CometCard>
             <CometCard>
              <div className='h-52 bg-white flex flex-col justify-center rounded-2xl p-4'>
               <h3 className='text-gray-600 font-bold font-poppins'>Step1 : Sign Up or Login</h3>
               <div className='p-2 font-poppins'>
                 <p className='text-gray-600 font-poppins'>Create an account or log in as a Restaurant or an NGO</p>
                 <p className='text-[15px] text-gray-600'>Dummy Credentials</p>
                 <div className='flex justify-between my-2 text-gray-500'>
                  <div>
                    <p>For NGO</p>
                    <p className='mx-2 text-[13px]'>Email: abcd@gmail.com</p>
                    <p className='mx-2 text-[13px]'>Password: abcd</p>
                  </div>
                  <div>
                    <p>For Restaurant</p>
                     <p className='mx-2 text-[13px]'>Email: hotel@gmail.com</p>
                    <p className='mx-2 text-[13px]'>Password: abcd</p>
                  </div>
                 </div>
               </div>
               </div>
             </CometCard>
             <CometCard>
              <div className='h-52 bg-white flex flex-col justify-center rounded-2xl p-4'>
               <h3 className='text-gray-600 font-bold font-poppins'>Step1 : Sign Up or Login</h3>
               <div className='p-2 font-poppins'>
                 <p className='text-gray-600 font-poppins'>Create an account or log in as a Restaurant or an NGO</p>
                 <p className='text-[15px] text-gray-600'>Dummy Credentials</p>
                 <div className='flex justify-between my-2 text-gray-500'>
                  <div>
                    <p>For NGO</p>
                    <p className='mx-2 text-[13px]'>Email: abcd@gmail.com</p>
                    <p className='mx-2 text-[13px]'>Password: abcd</p>
                  </div>
                  <div>
                    <p>For Restaurant</p>
                     <p className='mx-2 text-[13px]'>Email: hotel@gmail.com</p>
                    <p className='mx-2 text-[13px]'>Password: abcd</p>
                  </div>
                 </div>
               </div>
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
