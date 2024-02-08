import EasilyNav from "@/components/home/EasilyNav";
import Hero from "@/components/home/Hero";
import ProperityForSale from "@/components/home/ProperityForSale";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <div className="container">
       <Hero/>
      <div className='w-full flex justify-center items-center mt-[-30px]'>
        <EasilyNav/>
      </div>
        
        <ProperityForSale/>
    </div>
  );
}
