
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundWithBeam";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/moving-borderBtn";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
      <div className="relative flex h-screen w-full items-center justify-center bg-gray-200 dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
     <BackgroundBeamsWithCollision className={'bg-transparent'}>  
      <div className=" p-2 flex flex-col items-center">
        <h1 className="text-5xl font-bold md:text-7xl text-center">Help the <span className="text-primary">Environment</span><br/>By reducing food waste</h1>  
        <p className="my-5 text-gray-700 text-center">Kindmeal is a social impact company on a mission to inspire and empower everyone to fight food waste together.</p>
        <Link className="w-[90%] md:w-50" href={'/login'}>
         <Button
        className=" flex gap-1 bg-white font-bold dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Get Started <ArrowRight strokeWidth={3} className="text-primary"/>
      </Button>
        </Link>
      </div>   
    </BackgroundBeamsWithCollision>
    </div>
    </>
    
  );
}
