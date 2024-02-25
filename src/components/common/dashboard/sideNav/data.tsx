import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { MdNotificationsNone, MdOutlineForwardToInbox } from "react-icons/md";
import { RiCompassDiscoverLine } from "react-icons/ri";


export const dashboardPaths = [
    {
        path: '/dashboard',
        name: "Dashboard",
        icon: <BsFillGrid1X2Fill className="w-6 h-6"/>
    },
    {
        path: '/dashboard/explore',
        name: "Explore",
        icon: <RiCompassDiscoverLine className="w-6 h-6"/>
    },
    {
        path: '/dashboard/notification',
        name: "Notification",
        icon: <MdNotificationsNone className="w-6 h-6"/>
    },
    {
        path: '/dashboard/inbox',
        name: "Inbox",
        icon: <MdOutlineForwardToInbox className="w-6 h-6"/>
    },
    {
        path: '/dashboard/bookmark',
        name: "Bookmark",
        icon: <FaRegBookmark className="w-6 h-6"/>
    },
    {
        path: '/dashboard/transactions',
        name: "Transactions",
        icon: <GrTransaction className="w-6 h-6"/>
    },
    {
        path: '/dashboard/help-desk',
        name: "Help Desk",
        icon: <GoQuestion className="w-6 h-6"/>
    },
    {
        path: '/dashboard/settings',
        name: "Settings",
        icon: <IoSettingsOutline className="w-6 h-6"/>
    },
]