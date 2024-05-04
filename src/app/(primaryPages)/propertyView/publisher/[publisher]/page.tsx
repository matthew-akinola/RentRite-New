"use client"
import React, { useEffect, useState } from 'react'
// import MainLayout from '../../layouts/MainLayout'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaBars, FaSearch, FaPlus } from "react-icons/fa";
import ApartmentSlide, {ApartmentCards} from '@/components/shared/others/cards';
import { Container, GridContainer1, GridContainer3 } from '@/components/shared/containers/container';
import {useFetchApartment} from '@/hooks/useFetchApartment';
import { DynamicObject } from '@/types';
import { BsFillGridFill } from "react-icons/bs";
import Loader from '@/components/shared/horizontalLoader';
import Spinner from '@/components/shared/Spinner';
import BasedOnHistory3 from '@/components/home/BasedOnHistory3';
import FilterComponent from '@/components/innerPages/explore/filterComponent';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import ListSIngleApartment from '@/components/ListSIngleApartment';

const Publisher = () => {
  const router = useRouter();
  const {myData} = useFetchApartment()
  const [layout, setLayout] = useState('grid')
  const [data, setData] = useState<DynamicObject[]>([])
  const [searchQuery, setSearchQuery] = useState("");
  const [userName, setUserName] = useState('');
  
  useEffect(()=>{
    setData((myData))
    console.log(data)

    const currentUrl = window.location.href;  // Get the current URL
    const parts = currentUrl.split('/');
    const lastNameEncoded = parts[parts.length - 1];
    const lastName = decodeURIComponent(lastNameEncoded);

    setUserName(lastName);
  },[myData])

  return (
      <Container>
       <div className='container relative   mb-32 w-full max-w-[1700px] overflow-x-hidden h-min px-[1.5rem] md:px-[3.5rem] lg:px-[5rem] xl:px-[7.5rem]'>
          <div className='w-full justify-start'>
            <div className=' mt-4 px-3 py-2 mb-5 mt-32'>
              <div  onClick={() => {
                  router.back();
              }} className='text-decoration flex gap-x-3'>
                  <ChevronLeft />
                  <p className='text-sm underline'>Back to Property Listing page</p>    
              </div>
            </div>
          </div>
          <div className='flex gap-10'>
            <div className=' w-full lg:w-[75%]'>
              {/* active tab */}
              <div className='space-x-4 mb-3'>
                <span>BUY</span>
                <span>RENT</span>
                <span>CONSULTANT</span>
              </div>             

              {/* Appartment container */}
              <div>
                <div className='flex justify-between items-center'>
                <h1 className="text-lg md:text-2xl font-bold text-[#161518] mb-7">
                Properties listed by"<span className="text-[#A655A7] ">{userName}</span>
                ”
              </h1>
              {/* <button className="cursor-pointer">
                <FaBars size={23} />
              </button> */}
                
                </div>

                <div className='mb-16'>
                  {
                    data.length > 0 ?
                    (
                      <>
                        {
                          data.slice(0,6)?.map((apt, ind)=>{
                            return(
                              <ListSIngleApartment 
                              key={ind}
                              img={apt.pictures[0]?.image}
                              location={apt.short_address}
                              price={apt.f_price}
                              title={apt.title}
                              like={apt.like}
                              type={apt.category}
                              agent={apt.agent.name}
                              url_id={apt.id}
                              desc={apt.descriptions}
                              specifications={apt.specifications}
                              date={apt.created_at}
                            />
                            )
                          })}
                      </>
                      ) :(
                        <div className='w-full flex flex-col justify-center items-center m-24'>
                            <Spinner/>
                            <p className='mt-5'>Loading Apartments....</p>
                        </div>
                      )
                  }


                  <div className='w-1.4'>

                  </div>

                </div>
              </div>

             

            </div>
            <div className=' w-full lg:w-[25%]'>
              <FilterComponent/>
            </div>
          </div>
         
        </div>

      </Container>
  )
}

export default Publisher