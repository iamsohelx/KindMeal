import React from 'react'
import Navbar from '../components/Navbar'
import { cn } from '@/lib/utils'

const HowItWorks = () => {
  return (
    <>
    <Navbar/>
    <div>
    <div>
       <div className="relative flex h-screen w-screen items-center justify-center bg-gray-200 dark:bg-black">
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
           <div className='w-full md:w-[50%] flex justify-center relative'>
             
           </div>
    </div>
    </div>
    </div>
</>
  )
}

export default HowItWorks
