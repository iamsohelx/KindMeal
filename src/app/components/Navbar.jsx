import React from 'react'
import Logo from "../../../public/Assets/logo.png";
import Image from "next/image";
import Link from 'next/link';


const Navbar = () => {
  return (
     <header className="bg-[#4ADE80] px-10 relative z-50 w-screen">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16 lg:h-20">
                <div className="flex-shrink-0">
                  <a href="#" title="" className="flex">
                    <Image
                      className="w-auto h-8"
                      src={Logo}
                      alt=""
                    />
                  </a>
                </div>
                <button
                  type="button"
                  className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                >
                </button>
    
                <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                  <a
                    href="#"
                    title=""
                    className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                  >
                    Features{" "}
                  </a>
                  <a
                    href="#"
                    title=""
                    className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                  >
                    Solutions{" "}
                  </a>
                  <a
                    href="#"
                    title=""
                    className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                  >
                    Resources{" "}
                  </a>
                  <a
                    href="#"
                    title=""
                    className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                  >
                    Pricing{" "}
                  </a>
                  <div className="w-px h-5 bg-black/20"></div>
                  <Link
                    href={"/login"}
                    title=""
                    className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                  >
                    Log in{" "}
                  </Link>
                  <Link
                    href={"/Signup"}
                    title=""
                    className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
                    role="button"
                  >
                    {" "}
                    Sign Up{" "}
                  </Link>
                </div>
              </div>
            </div>
          </header>
  )
}

export default Navbar
