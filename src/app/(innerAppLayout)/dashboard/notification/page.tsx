import EmptyState from "@/components/shared/emptyState";
import { FaRegBell } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

const Notification = () => {
    return (
        <div>
            <div className="w-full flex justify-between">
                <h2 className="text-3xl font-bold">Notifications</h2>
                <span><FiTrash /></span>
            </div>
            <div className="h-full w-full flex items-center justify-center">
                <EmptyState
                    icon={<FaRegBell className="text-gray-500 h-[50px] w-[50px]"/>}
                    label="Your Notification contents will appear here."
                />
            </div>
        </div>
    )
}

export default Notification