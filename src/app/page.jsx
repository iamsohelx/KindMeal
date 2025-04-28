import Image from "next/image";
import Grocery from "../../public/Assets/grocery.png"
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
     <Navbar/>
    <div className="bg-gradient-to-b from-green-50 to-green-100">
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                Reduce food waste, Save
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>

                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    Environment.
                  </h1>
                </div>
              </h1>

              <p className="mt-8 text-base text-black sm:text-xl">
              Bridge the gap between surplus food and hunger in real-time. Empower businesses and communities to reduce waste, track impact, and ensure secure pickups turning excess into opportunity for a greener planet.
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <Link
                  href={"/Signup"}
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                  role="button"
                >
                  {" "}
                  Get Started{" "}
                </Link>
              </div>
            </div>

            <div>
              <Image
                className="w-full"
                src={Grocery}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
