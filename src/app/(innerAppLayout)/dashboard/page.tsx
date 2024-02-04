"use client"
import React, { useState } from "react";
import GridCard from "@/components/shared/GridCard";
import ListCard from "@/components/shared/ListCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { gridCardsData } from "./data";
import Image from "next/image";

const Dashboard= () => {
  const [type, setType] = useState<string>("Home");

  const subMenu = [
    { name: 'Home', element: '' },
    { name: 'History', element: '' }
  ];

  const handleChange = (item: string) => {
    setType(item);
  };

  return (
    <div>
      <div className="flex flex-row justify-between ">
        <div className="flex gap-1 justify-evenly md:justify-start flex-wrap py-3 text-ash-300">
          {subMenu.map((item, index) => {
            return (
              <button
                className={`px-2 md:px-5 pb-2 transition duration-500 
                  ${type === item.name ? "border-b-4 border-indigo-200 border-b-primary" : ''}
                    `}
                onClick={() => handleChange(item.name)}
                key={index}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>

      {type === 'Home' ?
        <div className="p-4">
          <div className=" relative w-full bg-dashboard-bg bg-cover rounded-2xl">
            <Image
                src="/images/dashboardBanner.png"
                width={900}
                height={400}
                alt="dashboard banner"
                className="w-full"
            />
            <div className="z-[99] absolute top-0 bottom-0 left-0 right-0 m-auto py-5">
              <h3 className="text-center text-2xl text-white font-semibold py-5 tracking-wider">BUY YOUR DREAM HOUSE</h3>
              <h1 className="text-center text-3xl text-white font-bold py-5 tracking-wider">3 BEDROOM FULLY FURNISHED</h1>
              <h4 className="text-lg text-center text-white font-semibold">HOUSTON, TEXAS.</h4>
            </div>
          </div>
          <div className="py-8">
            <h3 className="text-md font-semibold mb-3">Rentals you’ve viewed before</h3>
            <Carousel>
                <CarouselContent>
                    {
                        gridCardsData.map((cardData, index) => (
                            <CarouselItem className="basis-1/3.5" key={index}>
                                <GridCard  {...cardData} />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 bg-primary text-white border-none rounded-md shadow-lg"/>
                <CarouselNext className="absolute right-0 bg-primary text-white border-none rounded-md shadow-lg"/>
            </Carousel>
            
          </div>
          <div className="py-4">
            <h3 className="text-md font-semibold mb-3">Because you saved “Apartments in Lekki”</h3>
            <Carousel>
                <CarouselContent>
                    {
                        gridCardsData.map((cardData, index) => (
                            <CarouselItem className="basis-1/3.5" key={index}>
                                <GridCard  {...cardData} />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 bg-primary text-white border-none rounded-md shadow-lg"/>
                <CarouselNext className="absolute right-0 bg-primary text-white border-none rounded-md shadow-lg"/>
            </Carousel>
          </div>
        </div>
        : type === 'History' ?(
            <div className='pt-4 flex flex-col space-y-4'>
                <ListCard
                    image={"/images/tipsBlog.png"}
                    type={'Event Center'}
                    location={'Lekki, Lagos'}
                    name={"3 BEDROOM CABIN"}
                    price={'$2800/month'}
                    description={'lodiuytretyuio Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, numquam vel quos dolores, asperiores pariatur, '}
                    view={'/details'}
                />
          </div>
        )
        
          : ''}
    </div>
  );
};

export default Dashboard;
