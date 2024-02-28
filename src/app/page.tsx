import bgImg from "@/assets/images/pattern-background-desktop.svg";
import bgMobImg from "@/assets/images//pattern-background-mobile.svg";
import heroImg from "@/assets/images//illustration-hero.svg";
import music from "@/assets/images//icon-music.svg";
import Image from "next/image";

export default function Home() {
  return (
  <div className="bg-[hsl(225,100%,94%)] min-h-screen w-full relative flex items-center justify-center">
    {/* background image */}
    <div className="absolute z-10 top-0 w-full">
      <Image className="hidden sm:flex" src={bgImg} alt="bg-image"/>
      <Image className="sm:hidden w-full h-auto" src={bgMobImg} alt="bg-mobile-image"/>
    </div>

    {/*  */}
    <main className="z-50 max-w-[350px] rounded-xl overflow-hidden bg-white">
      <Image src={heroImg} alt="hero-image" />
      
      <div className="flex flex-col items-center text-center px-5 gap-3 pt-6 pb-8">
      <h2 className="text-3xl font-bold">Order Summary</h2>
      <p className="text-gray-500 leading-5"> You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

      {/* icon and pricing */}
      <div className="flex bg-[hsl(225,100%,96%)] justify-between w-full rounded-xl px-4 py-2 text-sm items-center ">
        <div className="flex gap-2">
          <Image src={music} alt="music-icon" />
           <div className="flex flex-col h-fit ">
            <h3 className="font-bold ">Annual Plan</h3>
            <p className="text-gray-500">&#8377;999/year</p>
           </div>
        </div>
        <button className="text-blue-800 text-bold underline hover:opacity-80 hover:no-underline">Change</button>
      </div>

      {/* button */}
      <button className="bg-blue-700 font-bold text-white py-3 w-full rounded-2xl  text-sm hover:opacity-85">Proceed to Payment</button>
      <button className="text-sm font-bold text-gray-600 hover:text-black">Cancel Order</button>
      </div>

    </main>
  </div>
  );
}
