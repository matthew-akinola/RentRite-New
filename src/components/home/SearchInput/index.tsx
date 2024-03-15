"use client"
import Dropdown from "@/components/shared/dropDown";
import Modal from "@/components/shared/modal";
import { useFetchApartment } from "@/hooks/useFetchApartment";
import { displayType } from "@/types";
import Image from "next/image";
import React, { useState, FormEvent } from "react";
import { FaSearch } from "react-icons/fa";

interface Apartment {
  type: string;
  bedroom: string;
  price: number;
  someFunction: (value: string) => void;
  // Add other properties based on your data structure
}


interface iSearchForm {
  setDisplay: (e: any) => void
  refetchApartment: (queryParameters: { [key: string]: any }) => void
}

const SearchForm: React.FC<iSearchForm> = ({setDisplay, refetchApartment}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [type, setType] = useState<string>("All Types");
  const [bedroom, setBedroom] = useState<string>("Any");
  const [minprice, setMinPrice] = useState<string>("No min price");
  const [maxprice, setMaxPrice] = useState<string>("No max price");
  const [stype, setStype] = useState<boolean>(false);
  const [sBed, setSBed] = useState<boolean>(false);
  const [smin, setSmin] = useState<boolean>(false);
  const [smax, setSmax] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<Apartment[]>([]);
  const [displayType, setDisplayType] = useState<displayType>("RENT")
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  interface iDisplayTypeList {
    name : displayType,
    value: string
  }
  const displayTypeList: iDisplayTypeList[]  = [
    {name : "RENT", value: "Rent"} ,  {name : "BUY", value: "Sale"}, {name : "CONSULTANT", value: "Consultation"}  
  ]

  const typeList: string[] = [
    "All Types",
    "Apartments",
    "Commercial Properties",
    "Event Centers",
    "Flats",
    "Self Contain",
  ];
  const bedList: string[] = ["Any", "1 Bedroom", "2 Bedroom", "3 Bedroom"];
  const minList: string[] = [
    "No Min",
    "₦ 100,000",
    "₦ 250,000",
    "₦ 500,000",
    "₦ 750,000",
    "₦ 1 Million",
    "₦ 2 Million",
  ];
  const maxList: string[] = [
    "No Max",
    "₦ 100,000",
    "₦ 250,000",
    "₦ 500,000",
    "₦ 750,000",
    "₦ 1 Million",
    "₦ 2 Million",
  ];

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    const results: Apartment[] = [];
    setSearchResults(results);
    // const results: Apartment[] = await apartmentsApi.getApartments(
    //   searchQuery,
    //   type,
    //   bedroom,
    //   minprice,
    //   maxprice
    // );
    // setSearchResults(results);
    window.location.href = `/search?q=${encodeURIComponent(
      searchQuery
    )}&type=${type}&bedroom=${bedroom}&minprice=${minprice}&maxprice=${maxprice}`;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filterApartment = (apartment: Apartment) => {
    if (type !== "All Types" && apartment.type !== type) {
      return false;
    }
    if (bedroom !== "Any" && apartment.bedroom !== bedroom) {
      return false;
    }
    if (
      minprice !== "No Min" &&
      apartment.price < parseInt(minprice.slice(1), 10)
    ) {
      return false;
    }
    if (
      maxprice !== "No Max" &&
      apartment.price > parseInt(maxprice.slice(1), 10)
    ) {
      return false;
    }
    return true;
  };

  const filteredResults = searchResults.filter(filterApartment);

  const handleDisplayTypeClicked = (value: iDisplayTypeList) => {
    console.log(value)
    if (value.value !== "Consultation") {
      setDisplayType(value.name)
      refetchApartment({"_type" : value.value});
      setDisplay(value.value)
    }else{
        setIsModalOpen(true)
    }
  }

  return (
    <div className="pb-28 flex flex-col items-center">
        <Modal isOpen={isModalOpen} title={'Service is Coming soon'} setIsOpen={() => setIsModalOpen(false)}>
            <div className="flex justify-center items-center m-10 flex-col ">
               <Image
                    className="hidden md:inline absolute bottom-[-20px] right-0 w-[20rem] h-[8rem] z-0"
                    src={"/images/footerImg1.png"}
                    alt=""
                    width={300}
                    height={200}
                />

            </div>
        </Modal>
        <div className="flex justify-start gap-8 w-90vw lg:w-[769px] mb-4 mx-auto">
          {
            displayTypeList.map((typeName, index) => {
              return (
                <a
                  href={"#apartmentListing"}
                  key={index}
                  onClick={(e) => {
                      e.preventDefault();
                      const apartmentListing = document.getElementById("apartmentListing");
                      if (apartmentListing) {
                        apartmentListing.scrollIntoView({ behavior: "smooth" });
                        handleDisplayTypeClicked(typeName)
                      }
                  }}
                  className={`text-[1.125rem] ${typeName.name === displayType ? "font-bold" : "font-medium"} uppercase text-[#DCDBE0]`}
              >
                  {typeName.name}
              </a>
              )
            })
          }
        </div>


        <form
        onSubmit={handleSearch}
        className="bg-white md:pl-3 mx-4 md:mx-auto p-3 rounded-lg w-90vw lg:w-[769px]"
        >
        <div className="flex justify-between w-full gap-8 pl-3">
            <div className="flex flex-row items-center basis-1/2">
            <span>
                <FaSearch className="text-[#82808F]" />
            </span>
            <input
                type="search"
                value={searchQuery}
                onChange={handleChange}
                placeholder="Enter an address, city, state or landmark"
                className="font-outfit w-full border-none focus:outline-none hover:outline-none p-2 placeholder:font-normal text-lg placeholder:text-[#D0D0D5] caret-[#565560] text-gray-[#565560]"
            />
            </div>

            <div className="basis-1/5">
            <button
                className="flex justify-center items-center gap-4 bg-[#79007b] hover:bg-[#930896] rounded-lg py-3 px-12 text-white"
                type="submit"
            >
                <span className="text-md">Search</span>
            </button>
            </div>
        </div>
        </form>

        <form className="flex flex-col md:flex-row justify-center gap-4 md:gap-0 mx-auto p-3 rounded-lg  w-[95vw] lg:w-[769px]">
        <Dropdown
            name="Property Type"
            value={type}
            setValue={setType}
            toggle={stype}
            setToggle={setStype}
            data={typeList}
            maxWidth={"16rem"}
        />
        <Dropdown
            name="Bedrooms"
            value={bedroom}
            setValue={setBedroom}
            toggle={sBed}
            setToggle={setSBed}
            data={bedList}
            maxWidth={"14rem"}
        />
        <Dropdown
            name="Min Price"
            value={minprice}
            setValue={setMinPrice}
            toggle={smin}
            setToggle={setSmin}
            data={minList}
            maxWidth={"9rem"}
        />
        <Dropdown
            name="Max Price"
            value={maxprice}
            setValue={setMaxPrice}
            toggle={smax}
            setToggle={setSmax}
            data={maxList}
            maxWidth={"9rem"}
        />
        </form>
    </div>
  );
};

export default SearchForm;
