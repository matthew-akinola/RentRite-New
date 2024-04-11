import EmptyState from "@/components/shared/emptyState"
import {TbCloudX} from "react-icons/tb"

const Transactions = () => {
    return(
        <div>
            <div className="w-full flex justify-between">
                <h2 className="text-3xl font-bold">Transactions</h2>
                {/* <span><FiTrash /></span> */}
            </div>
            <div className="h-full w-full flex items-center justify-center">
                <EmptyState
                    icon={<TbCloudX className="text-gray-500 h-[50px] w-[50px]"/>}
                    label="Your Notification contents will appear here."
                />
            </div>
        </div>
    )
}

export default Transactions