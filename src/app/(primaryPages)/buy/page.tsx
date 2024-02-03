"use client"
import React, { useEffect, useState } from 'react'
// import MainLayout from '../../layouts/MainLayout'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaBars, FaSearch, FaPlus } from "react-icons/fa";
import ApartmentCards from '@/components/shared/others/cards';
import { Container, GridContainer3 } from '@/components/shared/containers/container';
import useFetchApartment from '@/hooks/fetchApartment';

const Buy = () => {
  const {myData} = useFetchApartment()
  const [data, setData] = useState([])
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(()=>{
    setData((myData))
  },[myData])

  return (
      <Container>
        <div className='flex w-full gap-10'>
          <div className='basis-9/12'>
            {/* active tab */}
            <div className='space-x-4'>
              <span>BUY</span>
              <span>RENT</span>
              <span>CONSULTANT</span>
            </div>

            {/* search box */}
            <form className="bg-white md:pl-3 mb-8 p-3 rounded-lg  w-90vw lg:w-full border border-[#B1B0B9]">
            <div className="flex justify-between w-full gap-8 pl-3">
              <div className="flex flex-row items-center basis-1/2">
                <span>
                  <FaSearch />
                </span>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter a category, eg Apartment, eventcenter etc"
                  className="w-full border-none  focus:outline-none hover:outline-none p-2 placeholder:font-normal placeholder:text-lg placeholder:text-[#D0D0D5]"
                />
              </div>
            </div>
          </form>

            {/* Appartment container */}
            <div>
              <div className='flex justify-between items-center'>
              <h1 className="text-2xl font-bold text-[#161518] mb-7">
              Properties for <span className="text-[#A655A7] ">Rent</span> in
              “Nigeria”
            </h1>
            {/* <button className="cursor-pointer">
              <FaBars size={23} />
            </button> */}
                <div>
                  <button>grid</button>
                  <button>layout</button>
                </div>
              </div>

              <div className=''>
                {
                  data.length > 0?
                    <GridContainer3>
                    {
                      data.slice(0,6)?.map((apt, ind)=>{
                        return(
                          <ApartmentCards 
                          key={ind}
                          img={apt.pictures[0]?.image}
                          location={apt.short_address}
                          price={apt.f_price}
                          title={apt.title}
                          like={apt.like}
                          type={apt.category}
                          agent={apt.agent.name}
                        />
                        )
                      }
                          
                      )}
                    </GridContainer3>
                  :

                  <h1>Loading Apartments....</h1>
                }


                <div className='w-1.4'>

                </div>

              </div>
            </div>

            {/* paginator */}
            <div></div>
          </div>    
          <div className="basis-3/12">
              <h2 className="mb-10 text-[#280029] text-lg flex items-center">
                Filter by
                <MdOutlineKeyboardArrowDown size={20} />
              </h2>

              <div className="mb-10">
                <h2 className="font-semibold text-lg text-[#272A2E]">Location</h2>
                <p className="text-sm text-[#6B7076] font-[300] mb-5">
                  You can select multiple options
                </p>

                <form action="">
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      Abuja
                    </label>
                  </div>
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      Lagos
                    </label>
                  </div>
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      Port Harcourt
                    </label>
                  </div>
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      Kano
                    </label>
                  </div>
                  <div className=" mb-7">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      Enugu
                    </label>
                  </div>

                  <div className="flex border-b pb-3">
                    <span className="border-2 rounded-full text-[#280029] p-[1px] text mr-2">
                      <FaPlus size={13} color="#6B7076" />
                    </span>
                    <input
                      type="search"
                      name=""
                      id=""
                      placeholder="Add a Location"
                      className="font-normal text-sm border-none  focus:outline-none hover:outline-none"
                    />
                  </div>
                </form>
              </div>

              <div className="mb-10">
                <h2 className="font-semibold text-lg text-[#272A2E]">
                  Property type
                </h2>
                <p className="text-sm text-[#6B7076] font-[300] mb-5">
                  You can select multiple options
                </p>

                <form action="">
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      Event Centers
                    </label>
                  </div>
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      Apartments/Flats/Hostels
                    </label>
                  </div>
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      Stand-alone house{" "}
                    </label>
                  </div>
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      Commercial Property
                    </label>
                  </div>
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      Land
                    </label>
                  </div>
                </form>
              </div>

              <div className="mb-10">
                <h2 className="font-semibold text-lg text-[#272A2E]">Bedrooms</h2>
                <p className="text-sm text-[#6B7076] font-[300] mb-5">
                  You can select multiple options
                </p>

                <form action="">
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      1 Bedroom
                    </label>
                  </div>
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      2 Bedrooms
                    </label>
                  </div>
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      3 Bedrooms{" "}
                    </label>
                  </div>
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      4 Bedrooms
                    </label>
                  </div>
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      5+ Bedrooms
                    </label>
                  </div>
                </form>
              </div>

              <div className="mb-10">
                <h2 className="font-semibold text-lg text-[#272A2E]">Furnishing</h2>
                <p className="text-sm text-[#6B7076] font-[300] mb-5">
                  You can select multiple options
                </p>

                <form action="">
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      Furnished
                    </label>
                  </div>
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      No Furnishing
                    </label>
                  </div>
                </form>
              </div>

              <div className="mb-10">
                <h2 className="font-semibold text-lg text-[#272A2E]">
                  Time Added To Site
                </h2>
                <p className="text-sm text-[#6B7076] font-[300] mb-5">
                  You can select multiple options
                </p>

                <form action="">
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      Last 24 hrs
                    </label>
                  </div>
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      This week
                    </label>
                  </div>
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      This Month{" "}
                    </label>
                  </div>
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      During the last three Months
                    </label>
                  </div>
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      During the last six months
                    </label>
                  </div>
                </form>
              </div>

              <div className="mb-10">
                <h2 className="font-semibold text-lg text-[#272A2E]">
                  Verification
                </h2>
                <p className="text-sm text-[#6B7076] font-[300] mb-5">
                  You can select multiple options
                </p>

                <form action="">
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      Verified Posting
                    </label>
                  </div>
                  <div className=" mb-5">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-[#40454C] ml-5">
                      Unverified postings
                    </label>
                  </div>
                </form>
              </div>
          </div>              
        </div>

      </Container>
  )
}

export default Buy