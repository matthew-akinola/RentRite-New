"use client"
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { dashboardPaths } from "./data";

const SideNav: React.FC = () => {
  const router = usePathname();

  return (
    <nav className="flex flex-col justify-between items-center w-full h-[calc(100vh-96px)] bg-gray-50 py-10 pb-14 relative">
      <ul className="w-full flex flex-col relative overflow-y-scroll">
        {
          dashboardPaths.map((dashboardPath, index) => (
            <li className="font-Outfit font-normal text-base text-gray-600" key={index}>
              <Link href={dashboardPath.path} className={`flex items-center gap-4 py-5 ps-10 font-[500] ${router === dashboardPath.path ? "bg-purple-200 text-primary fill-primary rounded-md" : "text-gray-800"}`}>
                  {dashboardPath.icon}
                  <p>{dashboardPath.name}</p>
              </Link>
            </li>
          ))
        }

      {/* Add similar list items for other navigation items */}
      </ul>
      <Link href="/profile" className="absolute bottom-0 flex items-center gap-4 text-gray-600 py-3 w-full ps-10">
        <div className="bg-gray-300 w-6 h-6 rounded-full"></div>
        <p>
          John Doe
        </p>
      </Link>
    </nav>
  );
};

export default SideNav;


{/* <ul className="w-full flex flex-col">
<li className="font-Outfit font-normal text-base text-gray-600 py-4">
  <Link href="/dashboard">
    <a className={`flex items-center gap-11 ${router === "/dashboard" ? "bg-[rgba(253, 146, 255, 0.2)] text-purple-600" : "text-gray-800"}`}>
      <DashboardIcon className="text-gray-600" /> Dashboard
    </a>
  </Link>
</li>
<li className="font-Outfit font-normal text-base text-gray-600 py-4">
  <Link href="/explore">
    <a className={`flex items-center gap-11 ${router === "/explore" ? "bg-[rgba(253, 146, 255, 0.2)] text-purple-600" : "text-gray-800"}`}>
      <ExploreIcon className="text-gray-600" /> Explore
    </a>
  </Link>
</li>
{/* Add similar list items for other navigation items */}
{/*</ul> */}