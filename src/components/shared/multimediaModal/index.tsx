"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DynamicObject } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface iProps {
    isOpen: boolean;
    onClose: () => void;
    data: DynamicObject;
}

const MultimediaModal: React.FC<iProps> = ({ isOpen, onClose, data }) => {
        console.log(data)
        const [selectedTab, setSelectedTab] = useState('Photos');

        console.log(selectedTab)

        if (!isOpen) return null;
    
        return (
            <div className="absolute top-0 h-auto max-w-[100vw] z-50 flex items-center justify-center  bg-black bg-opacity-50 transition-opacity duration-300 ease-out"
                style={{ animation: 'fadeIn 300ms ease-out' }}>
                <div className="bg-white p-4 flex justify-center w-[100vw]  mx-auto rounded-lg shadow-lg space-y-4 ">
                    <div className="container  w-full max-w-[1700px] pt-[7rem] min-h-[100vh] px-[1.5rem] md:px-[3.5rem] lg:px-[5rem] xl:px-[7.5rem]">
                        <div className="w-full flex justify-between min-h-[40px]">
                            <div className='flex '>
                                <p className='text-[18px] md:text-[24px] font-[700] text-[#161518]'>{data?.title}</p>
                            </div>
                            <button onClick={onClose} className=" right-2 top-2 text-black text-xl">
                                ✕
                            </button>
                        </div>
                        <Tabs defaultValue="Photos" className="w-full border-t-[1px] mt-6">
                            <TabsList className="flex w-full justify-start border-b-[1px] rounded-none p-0">
                                <TabsTrigger value="Photos" className={`border-r-[1px] py-5 h-full px-6 ${selectedTab  === 'Photos' ? 'bg-primary text-white' : ''}`} onClick={() =>setSelectedTab('Photos')}>
                                    <span>
                                        <p>Photos</p>
                                    </span>
                                </TabsTrigger>
                                <TabsTrigger value="Videos" className={`border-r-[1px] py-5 h-full px-6 ${selectedTab  === 'Videos' ? 'bg-primary text-white' : ''}` }  onClick={() =>setSelectedTab('Videos')}>
                                    <span>
                                        <p>Videos</p>
                                    </span>
                                </TabsTrigger>
                                <TabsTrigger value="Virtual tour" className={`border-r-[1px] py-5 h-full px-6 ${selectedTab  === 'Virtual tour' ? 'bg-primary text-white' : ''}`}  onClick={() =>setSelectedTab('Virtual tour')}>
                                    <span>
                                        <p>Virtual tour</p>
                                    </span>
                                </TabsTrigger>
                                
                            </TabsList>
                            <TabsContent value="Photos">
                                    {
                                        data.pictures.map((pic : DynamicObject, index : number) => {
                                            return(
                                                <Image key={index} src={pic.image} alt={pic.image} height={500} width={500} className="w-full mb-10"/>
                                            )
                                        })
                                    }
                            </TabsContent>
                            <TabsContent value="Videos">
                                <Card className='border-none'>
                                    <Image src={"/images/GoogleMapTA.webp"} className='w-full object-cover' height={500} width={500} alt='map'/>
                                </Card>
                            </TabsContent>
                            <TabsContent value="Virtual tour">
                                <Card className='border-none'>
                                    <Image src={"/images/street view.jpg"} className='w-full object-cover' height={500} width={500} alt='map'/>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                  
                </div>
            </div>
        );
};

export default MultimediaModal
    