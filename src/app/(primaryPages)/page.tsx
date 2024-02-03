"use client"
import { Fragment, useState } from "react";
import { ApartmentApi } from "@/hooks/ApartmentApi";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import EasilyNav from "@/components/home/EasilyNav";
import ProperityForSale from "@/components/home/ProperityForSale";
import Hero from "@/components/home/Hero";
import { data } from "@/components/home/data";

const Home = () => {
  const apartmentsApi = ApartmentApi();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [apartmentsToShow, setApartmentsToShow] = useState(8);


  const handleCategoryClick = (category : any) => {
    setSelectedCategory(category);
    setApartmentsToShow(8);
  };

  const subMenu = ["All", ...Array.from(new Set(apartmentsApi.map((apartment) => apartment.category)))];
  const filteredApartments = apartmentsApi.filter(
    (apartment) => selectedCategory === "All" || apartment.category === selectedCategory
  );
  const apartments = filteredApartments.slice(0, apartmentsToShow);

  const handleLoadMore = () => {
    setApartmentsToShow(apartmentsToShow + 8);
  };

  const homeCard = [
    { text: "Search Apartment", bg: "/images/searchApartment.png" },
    { text: "Contact the Agent", bg: "/images/contactAgent.png" },
    { text: "Complete Transaction", bg: "/images/completeTransaction.png" },
  ];

  return (
    <div className="w-full">
      {/* Hero Component */}
      <Hero />

      {/* Easily Navigate Section */}
      <section className="flex justify-center">
        <div className="container px-2 md:px-7 mb-[2rem] ">
          <div className="px-5 py-5 md:py-9 md:px-10 bg-[#FBFBFC] rounded-xl relative flex flex-col justify-center items-center gap-10 -mt-[4.5rem]">
            <h3 className="text-2xl lg:text-4xl text-center font-[700]">
              Easily Navigate Your Housing Search
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {homeCard.map(({ bg, text }, index) => (
                <div
                  key={index}
                  className={`rounded-[30px] group bg-cover bg-no-repeat bg-center relative w-full h-[20rem]
                    bg-gradient-to-b from-[rgba(0, 0, 0, 0.8)] via-[rgba(0, 0, 0, 0)] to-[rgba(0, 0, 0, 0)] rounded-lg overflow-hidden`}
                >
                  <Image
                    alt={text}
                    key={index}
                    height={400}
                    width={400}
                    src={bg}
                    className={`rounded-[30px] object-cover bg-center absolute w-full h-full
                    rounded-lg transition-transform duration-300 group-hover:scale-110
									`}
                  />
                  <div className="w-full h-full backdrop-brightness-75 rounded-3xl ">
                    <h4 className="text-2xl text-white font-medium absolute top-4 left-6">
                      {text}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            <Button className="!py-5 px-12 rounded-lg md:w-full lg:w-48 bg-primary text-white">
              Start Now
            </Button>
          </div>
        </div>
      </section>

      {/* Properties for Sale Section */}
      <section className="flex justify-center">
        <div className="container px-5 md:px-7 mb-[2rem] ">
          <h4 className="text-2xl font-bold">Properties for Sale in Nigeria</h4>
          <div className="flex gap-1 justify-evenly md:justify-start flex-wrap py-3 text-ash-300 mt-8 md:mt-14">
            {subMenu.map((category) => (
              <button
                key={category}
                className={`px-2 md:px-5 pb-2 transition duration-500 ${
                  ((filteredApartments !== apartmentsApi &&
                    category === selectedCategory) ||
                    (filteredApartments === apartmentsApi && category === "All")) &&
                  "border-b-4 border-indigo-200 border-b-primary"
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          {apartments.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 py-3 gap-y-10 gap-x-6 lg:grid-cols-4 sm:content-center">
              {apartments.map((apartment, index) => (
                <div key={index} className="w-full md:max-w-80 group ">
                  <Link href={`/apartment/${apartment.id}`}>
                    <div className="overflow-hidden height-[350px]">
                      <Image
                        className="rounded-xl flex-1 w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                        width={400}
                        height={400}
                        src={apartment.pictures[0]?.image}
                        alt={apartment.title}
                      />
                    </div>
                      <div className="flex justify-between gap-2 mt-4">
                        <div className="text-left">
                          <h3 className="font-medium text-[#2B2A30] text-sm">
                            {apartment?.title}
                          </h3>
                          <h4 className="font-normal text-[#565560] text-sm">
                            {apartment?.short_address}
                          </h4>
                          <h4 className="font-normal text-[#999999] text-sm">
                            {apartment?.agent?.name}
                          </h4>
                        </div>
                        <div className="text-right">
                          <h3 className="font-normal text-[#565560] text-base">
                            ₦{apartment?.price}
                          </h3>
                          <h4 className="font-normal text-[#999999] text-sm">
                            {apartment?.category}
                          </h4>
                          <div className="flex justify-end pt-1 cursor-pointer">
                            <Image src={'/icons/love.svg'} alt="" width={20} height={20}/>
                          </div>
                        </div>
                      </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <h1 className="mt-9 text-center text-xl">Loading...</h1>
          )}
          {apartmentsToShow < filteredApartments.length && (
            <div className="text-left pb-4 md:pb-16 border-b border-[#E4CCE5]">
              <p
                className="text-primary py-2.5 text-lg mt-2 md:mt-8 underline decoration-pur cursor-pointer"
                onClick={handleLoadMore}
              >
                View more
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Properties for sales based on your history section*/}
      <section className="flex justify-center">
        <div className="container pt-2 pb-4 md:pt-8 md:pb-16 px-5 md:px-7">
          <div className="flex justify-between pb-4">
            <h4 className="text-2xl font-bold">
              Properties for sale “Based on your history”
            </h4>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 py-3 gap-y-10 gap-x-6 lg:grid-cols-4 sm:content-center">
            {data.slice(0, 4).map((typ, index) => {
              return (
              <div key={index} className="w-full md:max-w-80 group  ">
                <Link href={`/apartment/${typ.id}`}>
                    <div className="overflow-hidden height-[350px]">
                      <Image
                        className="rounded-xl flex-1 w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                        width={400}
                        height={400}
                        src={typ.img}
                        alt={typ.name}
                      />
                    </div>
                    <div className="flex justify-between gap-2 mt-4">
                      <div className="text-left">
                        <h3 className="font-medium text-[#2B2A30] text-sm">
                          {typ?.name}
                        </h3>
                        <h4 className="font-normal text-[#565560] text-sm">
                          {typ?.location}
                        </h4>
                        <h4 className="font-normal text-[#999999] text-sm">
                          {typ?.agent}
                        </h4>
                      </div>
                      <div className="text-right">
                        <h3 className="font-normal text-[#565560] text-base">
                          ₦{typ?.price}
                        </h3>
                        <h4 className="font-normal text-[#999999] text-sm">
                          {typ?.type}
                        </h4>
                      </div>
                    </div>
                </Link>
              </div>);
              // return <CardTopPick key={index} {...typ} />;
            })}
          </div>
          <p className="text-primary py-2.5 text-lg mt-2 md:mt-8 underline decoration-pur cursor-pointer">
            View all
          </p>
        </div>
      </section>
          
      {/* get started section*/}
      <section className="bg-[#F7F7F7] p-8 md:p-20 relative">
      <Image
        src={'/images/footerImg1.png'}
        alt="house illustration absolute bottom-0"
        className="hidden md:inline absolute bottom-0 left-[16.5rem] z-0"
        width={300}
        height={300}
      />
      <Image 
        className="absolute bottom-0 md:bottom-14 lg:bottom-28 right-0 lg:right-20 z-10 w-[5.5rem]" 
        src={'/images/footerframe2.png'} alt="" 
        width={200}
        height={200}
      />{" "}
      <img
        className="hidden md:inline absolute bottom-0 right-0 w-[13rem] h-[13rem] z-0"
        src={"/images/footerImg2.png"}
        alt=""
        width={200}
        height={200}
      />
      <div className="flex flex-col gap-8">
        <header className="">
          <h1 className="text-4xl font-bold text-[#161518] mb-[0.65rem]  z-20">
            Get the Best Deal for Your Property
          </h1>
          <p className="text-[#2b2a30] text-xl  z-20">
            Maximize your profit with us, sell with confidence, grow your
            reputation
          </p>
        </header>
        <Link href="/agent-signup">
          <button className="py-4 px-14 bg-[#79007B] items-center shadow text-white rounded-lg z-10">
            Be a seller
          </button>
        </Link>
      </div>
      <div></div>
    
    </section>
    </div>
  );
};

export default Home;
