import Image from "next/image";
import Logo from "../../public/Assets/logo.png";
  
export default function Home() {
   
  return (
    <div className="h-screen w-screen flex gap-4 justify-center items-center font-anton text-orange bg-primary text-center text-7xl">
      <div className="img">
      <Image src={Logo} alt={"logo"} height={80}/>
      </div>
       <h1>Hey KindMeal. </h1>
    </div>  
  );
}
