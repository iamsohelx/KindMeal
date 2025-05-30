import React from 'react'
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { BirdIcon } from 'lucide-react';


const Navbar = () => {
  return (
      <header className="fixed top-2 md:top-5 w-full px-2 md:px-5 z-50">
      <div className="border border-border/80 rounded-xl bg-card/80 backdrop-blur-md h-12 md:h-16 flex justify-between items-center gap-2 px-4 shadow-lg/2">
        {/* Left area */}
        <div className="flex-1 flex items-center">
          <Link className="inline-flex" href="/">
           <h1 className='font-bold text-xl'><span className='text-primary'>K</span>indmeal.</h1>
          </Link>
        </div>
        {/* Center area */}
    
        {/* Right area */}
        <div className="flex-1 flex justify-end items-center gap-4">
          {/* <Button href={'/login'} className="text-xs md:text-sm font-bold px-5 rounded-md">
            Login <LogIn strokeWidth={3}/>
          </Button> */}
          <BirdIcon strokeWidth={2} className=' text-primary'/>
          <Separator orientation="vertical" className="min-h-6 max-sm:hidden" />
        </div>
      </div>
    </header>
  )
}

export default Navbar
