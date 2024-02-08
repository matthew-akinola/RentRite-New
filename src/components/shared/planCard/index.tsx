import { Button } from "@/components/ui/button";
import { IoIosCheckmark } from "react-icons/io";
import Modal from "../modal";
import Image from "next/image";
import { LuPencilLine } from "react-icons/lu";
import { useState } from "react";


interface iPlanCard {
    name: string;
    price: number;
    features: string[];
    headColor: string;
    handleButton: () => void ;
    handleBankPayment: () => void ;
}

const PlanCard: React.FC<iPlanCard> = ({name, price, features, headColor, handleBankPayment, handleButton}) => {
    return (
        <div className="border border-2 border-gray-300 rounded-[15px] shadow-sm flex flex-col items-center justify-center pb-7">
           
            <div className={`${headColor} h-10 w-full rounded-t-[13px]`}></div>
                <p className='font-bold text-lg mt-5 text-lg'>{name}</p>
                <p className='text-center pt-5 md:text-4xl my-0 mx-auto text-5xl font-outfit font-[700]'>{`₦${price}`}<span className="text-lg">/month</span></p>
                <ul className="flex flex-col gap-y-4 items-center justify-center mt-7">
                    {
                        features && features.map((feature, index) => {
                            return(
                                <li className="flex items-center" key={index}>
                                    <IoIosCheckmark className="text-gray-400 w-7 h-7"/>
                                    <p className="me-2">{feature}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <Button className="bg-primary h-max text-white mt-10" onClick={handleButton}>Pay Online with card</Button>
                <div className="text-blue-500 mt-5 underline underline-offset-2 cursor-pointer" onClick={handleBankPayment}>Pay Now via bank transfer</div>
        </div>
    )
}

export default PlanCard