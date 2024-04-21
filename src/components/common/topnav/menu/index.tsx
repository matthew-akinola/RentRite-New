"use client";
import { useState } from "react";

import { createPortal } from "react-dom";

import { ArrowRight, X } from "lucide-react";
import { AlignJustify  } from 'lucide-react';
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import Image from "next/image";
import { dashboardPaths } from "../../dashboard/sideNav/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface INavDrop {}

const Menu = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   useLockBodyScroll(menuOpen);
  
   const router = usePathname();
   return (
      <>
         <div
            onClick={() => setMenuOpen(true)}
            className="relative z-[100] grid cursor-pointer place-items-center rounded-[3.5rem]  transition-colors duration-300 ease-in-out active:bg-transparent
      "
         >
            {/* <img src={url(menuIcon?.src)} alt="" /> */}
            <AlignJustify  />
         </div>
        
            <div
               className={`fixed z-[100] h-full ${
                  menuOpen ? `translate-x-0` : `!-translate-x-full`
               } bottom-0 left-0 right-0  top-0 z-10 flex w-[100vw] flex-col overflow-auto bg-white  transition-transform duration-300 ease-in-out`}
            >
               <div className="flex px-8 w-full items-center justify-between border-b border-b-gray-300 bg-primary-1 px-container-base py-[1.4rem] lg:border-b-secondary-1">
                  <a href="/" className="flex items-center gap-4">
                    <Image src={"/logo.svg"} alt="rentrite" height={50} width={50}  />
                  </a>


                  <X onClick={() => setMenuOpen(false)}/> 
               </div>
               <div className="flex flex-col gap-[1.5rem] px-container-base py-[2rem]">
                  <div className="flex flex-col gap-[1.3rem]">
                  <ul className="w-full flex flex-col relative overflow-y-scroll">
                     {
                    dashboardPaths.map((dashboardPath, index) => (
                        <li className="font-Outfit font-normal text-base text-gray-600" key={index}>
                        <Link href={dashboardPath.path} onClick={() => setMenuOpen(false)} className={`flex items-center gap-4 py-5 ps-10 font-[500] ${router === dashboardPath.path ? "bg-purple-200 text-primary fill-primary rounded-md" : "text-gray-800"}`}>
                            {dashboardPath.icon}
                            <p>{dashboardPath.name}</p>
                        </Link>
                        </li>
                    ))
                    }

                {/* Add similar list items for other navigation items */}
                </ul>
                  </div>
               </div>
            </div>
      </>
   );
};

export default Menu;
