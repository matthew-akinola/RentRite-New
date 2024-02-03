import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import DashboardIcon from "@/public/icons/dashboard-icon.svg";
// import ExploreIcon from "@/public/icons/explore-icon.svg";
// import NotificationIcon from "@/public/icons/notification-icon.svg";
// import InboxIcon from "@/public/icons/inbox-icon.svg";
// import BookmarkIcon from "@/public/icons/bookmark-icon.svg";
// import TransactionIcon from "@/public/icons/transaction-icon.svg";
// import HelpIcon from "@/public/icons/help-icon.svg";
// import SettingIcon from "@/public/icons/setting-icon.svg";

const SideNav: React.FC = () => {
  const router = usePathname();

  return (
    <nav className="flex flex-col justify-between items-center w-full h-[calc(100vh-96px)] bg-gray-100 py-10 pb-14">
   
    <Link href="/profile">
      <a className="flex items-center gap-8 text-gray-600">
        <div className="bg-gray-300 w-6 h-6 rounded-full"></div>
        John Doe
      </a>
    </Link>
  </nav>
  );
};

export default SideNav;
