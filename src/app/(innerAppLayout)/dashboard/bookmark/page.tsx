import EmptyState from "@/components/shared/emptyState"
import { CiHeart } from "react-icons/ci"

const BookMark = () => {
    return(
        <div>
            <div className="w-full flex justify-between">
                <h2 className="text-3xl font-bold">Bookmarks</h2>
                {/* <span><FiTrash /></span> */}
            </div>
            <div className="h-full w-full flex items-center justify-center">
                <EmptyState
                    icon={<CiHeart className="text-gray-500 h-[50px] w-[50px]"/>}
                    label="Your Notification contents will appear here."
                />
            </div>
        </div>
    )
}

export default BookMark