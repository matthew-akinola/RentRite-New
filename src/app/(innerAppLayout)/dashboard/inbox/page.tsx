import EmptyState from "@/components/shared/emptyState"
import { FaSearch } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { CiCamera } from "react-icons/ci";

const Inbox = () => {
    return (
        <div>
            <div className="w-full flex ">
                <h2 className="text-3xl font-bold">Inbox</h2>
            </div>
            <div className="flex w-full gap-x-6 mt-5">
                <div className="w-[35%] flex flex-col border  border-[1px] border-gray-200 rounded-lg p-3">
                    <div className="border border-[1px] border-gray-200 rounded-lg  flex items-center p-3">
                        <FaSearch className="text-gray-400 me-3"/>
                        <p className="text-gray-300">Search</p>
                    </div>
                    <div className="px-10">
                        <EmptyState
                            icon={<FaHandshakeAngle className="h-[100px] w-[100px] text-gray-400"/>}
                            label="Start negotiating with consultants to keep your inbox lively!"
                        />
                    </div>
                </div>
                <div className="w-[65%] flex flex-col border  border-[1px] border-gray-200 rounded-lg">
                    <div className="flex justify-between items-center px-5 py-3  border-b-[1px] border-gray-200">
                        <div className="flex gap-x-3 items-center">
                            <FaChevronLeft className="text-gray-500 h-[10px] w-[10px]"/>
                            <div className="flex gap-x-3">
                                <div className="h-[30px] w-[30px] bg-[#E9D4FB] rounded-full"></div>
                                <div className="">
                                    <div className="h-[12px] w-[70px] bg-[#E9D4FB] rounded-sm mb-1"></div>
                                    <div className="h-[12px] w-[50px] bg-[#E9D4FB] rounded-sm"></div>
                                </div>
                            </div> 
                        </div>
                        <div>
                            <BsThreeDotsVertical className="text-gray-400 h-[50px]"/>
                        </div>
                    </div>
                    <div>
                        <EmptyState
                            icon={<FiEdit className="h-[80px] w-[80px] text-gray-400 mb-3"/>}
                            label="Your individual Message contents will appear here."
                        />
                    </div>
                    <div className="flex gap-x-5 px-5 py-3">
                        <div className="border w-[90%] border-[1px] border-gray-200 rounded-[50px] justify-between flex items-center p-3">
                            <div className="flex items-center">
                                <CiFaceSmile className="text-gray-400 me-3"/>
                                <p className="text-gray-300">Type your Message here</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosLink className="text-gray-400 me-3 w-[20px] h-[20px]"/>
                                <CiCamera className="text-gray-400 w-[20px] h-[20px]"/>
                            </div>
                        </div>
                        <div className="border w-[10%] border-[1px] justify-center  border-gray-200 rounded-full  flex items-center p-3">
                            <FaMicrophone className="text-gray-400"/>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Inbox