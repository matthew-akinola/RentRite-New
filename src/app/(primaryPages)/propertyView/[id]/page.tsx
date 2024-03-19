"use client"
import { Container, GridContainer5 } from '@/components/shared/containers/container'
import { PryButton } from '@/components/shared/others/buttons'
import {  ApartmentShortCards } from '@/components/shared/others/cards'
import { HeaderTextSM } from '@/components/shared/typographs/Typo'
import useFetch from '@/hooks/useFetch'
import { useFetchApartment } from '@/hooks/useFetchApartment'
import { isEmpty } from '@/lib/utils'
import { DynamicObject } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Spinner from "@/components/shared/Spinner";

interface pageProp{
    params : {id: string}
}

const PropertyView = ({params}:pageProp) => {
    const apt_id = params.id
    const {myData} = useFetch(`/apartment/${apt_id}`)
    const [data, setData] = useState<any>({})
    const [similar, setSimilar] = useState<any>({})
    // const [similar, setData] = useState<any>({})

    useEffect(()=>{
      setData((myData))
    },[myData])


      
  return (
    <div className='pt-[7rem] font-outfit container mx-auto'>
        <Container>
            {
                isEmpty(data) ? (
                    <div className="w-full flex flex-col justify-center items-center p-20">
                        <Spinner/>
                        <p className="mt-5">loading...</p>
                    </div> 
                ): (
                    <div className='space-y-6'>
                        <div className="py-3 ">
                        <Link href={'/'} className="text-[#79007B] mt-3">
                    <span className="mr-3 inline-flex bg-[url('/icons/back-arrow-icon.svg')] w-4 h-3" ></span> <span className="inline-flex">Back to property listings</span>
                     </Link>
                      </div>
                        
                        <div>
                            <div className='flex flex-col md:flex-row justify-between md:items-center'>
                                <p className='text-[18px] md:text-[24px] font-[700] text-[#161518]'>{data?.title}</p>
                                <p className='text-[#8F2A91] text-[20px] font-[700]'>₦ {data?.f_price}</p>
                            </div>
                            <div className='flex flex-col md:flex-row justify-between md:items-center mt-4 md:mt-3'>
                                <small className='font-[400] text-[14px] text-[#6666FF]'>
                            <img src={'/icons/location-icon.svg'} alt="location_icon" className='inline-block' />
                                    {"  "}{data?.address}, {data?.state}. <Link href={'/'} className='underline'>Open Street View</Link></small>
                                <small><span className="inline-block mx-2">{data?.clicks} clicks</span> | {"  "}<span className="inline-block cursor-pointer"><span className="inline-block bg-[url('/icons/save-icon.svg')] w-[14px] h-[18px] -mb-1 ml-2 mr-1"></span> <span className="inline-block mr-2">Save</span></span> {" "}| <span className="inline-block cursor-pointer"><span className="inline-block ml-2 mr-1 bg-[url('/icons/share-icon.svg')] w-[18px] h-[20px] -mb-1"></span><span className="inline-block mx-2">Share</span></span></small>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-1 w-full h-[300px] overflow-x-scroll md:h-[450px]'>
                            <div className='flex md:flex-col flex-row gap-1 md:w-[30%] h-full'>
                                {
                                    data?.pictures[0] && (
                                        <div className='w-full md:h-[50%]'><img src={data?.pictures[0].image} className='w-full h-full' alt=''/></div>
                                    )
                                }
                                {
                                    data?.pictures[1] && (
                                        <div className='w-full md:h-[50%]'><img src={data?.pictures[1].image} className='w-full h-full' alt=''/></div>
                                    )
                                }
                            </div>
                            <div className='w-full sm:w-[40%] h-full'>
                                {
                                    data?.videos[0] ? (<video width='100%' height='100%' controls>
                                        <source src={data?.videos[0].video} type='video/mp4' />
                                        <source src={data?.videos[0].video} type='video/mkv' />
                                         </video>): (<div className="flex h-full w-full items-center justify-center ">
                                             <p>Apartment Video is currently not available  </p>
                                         </div>
                                         )
                                }
                            </div>
                            <div className='flex lg:flex-col gap-1 lg:w-[30%] h-full'>
                                {
                                    data?.pictures[2] && (
                                        <div className='w-full lg:h-[50%]'><img src={data?.pictures[2].image} className='w-full h-full' alt=''/></div>
                                    )
                                }
                                {
                                    data?.pictures[3] && (
                                        <div className='w-full lg:h-[50%]'><img src={data?.pictures[3].image} className='w-full h-full' alt=''/></div>
                                    )
                                }
                            </div>
                        </div>

                        <div className=' mt-5'>
                            <div className='flex flex-row justify-between'>
                                <div>{data?.specifications && (<div><span className='inline-block mx-2 text-lg'>{data.specifications.bedrooms} {" "} Bedrooms</span> &#x2022; <span className='inline-block mx-2 text-lg'>{data.specifications.bathrooms} {" "} Bathrooms</span> &#x2022; <span className='inline-block mx-2 text-lg'>{data.specifications.toilets} {" "} Toilets</span> | <span className='inline-block mx-2 text-lg'>Serviced</span> | <span className='inline-block mx-2 text-lg'>Not Furnished</span> </div>)}</div>
                                <div><span className='inline-block border-b border-[#6666FF] text-lg text-[#6666FF] cursor-pointer mx-2'>Schedule a tour</span> | <span className='cursor-pointer'><span className="inline-block ml-2 mr-1 bg-[url('/icons/report-icon.svg')] w-5 h-5"></span> <span className='inline-block text-lg text-[#D97706]'><Link href="/reportListing">Report Listing</Link></span></span></div>
                            </div>
                        </div>

                        <div className='flex gap-10'>

                            <div className='w-full md:w-3/4 space-y-6 border-t pt-8'>
                                <div>
                                    <p>Property Details</p>
                                    <p className='text-[#565560]'>{data?.descriptions}</p>
                                </div>
                                <div className='bg-[#F3F3F4] p-3'>
                                    <div className='flex justify-between items-center'>
                                        <p>Property Details</p>
                                        <Link href={'/'}>View More property Listings from this publisher</Link>
                                    </div>
                                    <div>
                                        <p className='text-[#565560]'>{data?.agent?.name}</p>
                                        <p className='text-[#565560]'>2204 kado bimko estate, gwarimpa, Abuja.</p>
                                        <p className='text-[#565560]'><span>08011223344</span> <button></button></p>
                                        <p className='text-[#565560]'>Registered 09 - 11 - 2020</p>
                                        <p className='text-[#565560]'><Link href={'/'}>{data?.agent?.is_verified ? 'Verified agent' : 'Not Verified Agent'}</Link> </p>
                                    </div>

                                    <p className='text-[#565560]'></p>
                                </div>
                                <div className='bg-[#FCDFC4] p-3 space-y-4'>
                                    <p>Disclaimer</p>
                                    <p className='text-[#565560]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facere error harum saepe at non, sit esse. Voluptatibus, vero ipsa. Reiciendis, temporibus autem. Deserunt aperiam sequi voluptatum quaerat est reiciendis vitae sunt modi obcaecati facere quae vel accusamus praesentium ipsa hic corporis nisi ad, laudantium eligendi. Repudiandae minus, facilis similique quia, ipsum dicta dolorum debitis non adipisci consequuntur ut aperiam!</p>
                                </div>
                            </div>
                            <div className='hidden md:block w-1/4 shadow-xl pt-8'>
                                <div>
                                    <div className='bg-[#79007B] p-3 '>
                                        <p className='text-[#FBFBFC] text-center'>Sell, Rent or Buy a property now</p>
                                    </div>
                                    <div className='p-6 space-y-6'>
                                        <div className='flex justify-between items-center'>
                                            <button>Buy</button>
                                            <button>Rent</button>
                                            <button>Sell</button>
                                        </div>

                                        <div>
                                            <input className='p-2 border w-full rounded-md outline-none' type="text" placeholder='Enter a location' />
                                        </div>

                                        <div className='space-y-4'>
                                            <div>
                                                <p className='font-[700] text-[12px] '>PROPERTY TYPE</p>
                                                <select className='p-2 border w-full rounded-md outline-none' name="" id="">
                                                    <option value="">Hello</option>
                                                    <option value="">Hello</option>
                                                    <option value="">Hello</option>
                                                </select>
                                            </div>
                                            <div>
                                                <p className='font-[700] text-[12px] '>PROPERTY TYPE</p>
                                                <select className='p-2 border w-full rounded-md outline-none' name="" id="">
                                                    <option value="">Hello</option>
                                                    <option value="">Hello</option>
                                                    <option value="">Hello</option>
                                                </select>
                                            </div>
                                            <div>
                                                <p className='font-[700] text-[12px] '>PROPERTY TYPE</p>
                                                <select className='p-2 border w-full rounded-md outline-none' name="" id="">
                                                    <option value="">Hello</option>
                                                    <option value="">Hello</option>
                                                    <option value="">Hello</option>
                                                </select>
                                            </div>
                                            <div>
                                                <p className='font-[700] text-[12px] '>PROPERTY TYPE</p>
                                                <select className='p-2 border w-full rounded-md outline-none' name="" id="">
                                                    <option value="">Hello</option>
                                                    <option value="">Hello</option>
                                                    <option value="">Hello</option>
                                                </select>
                                            </div>
                                            <div>
                                                <p className='font-[700] text-[12px] '>PROPERTY TYPE</p>
                                                <select className='p-2 border w-full rounded-md outline-none' name="" id="">
                                                    <option value="">Hello</option>
                                                    <option value="">Hello</option>
                                                    <option value="">Hello</option>
                                                </select>
                                            </div>

                                            <div className='flex gap-4 w-full'>
                                                <div className='flex-1'>
                                                    <p className='font-[700] text-[12px] '>PROPERTY TYPE</p>
                                                    <select className='p-2 border w-full rounded-md outline-none' name="" id="">
                                                        <option value="">Hello</option>
                                                        <option value="">Hello</option>
                                                        <option value="">Hello</option>
                                                    </select>
                                                </div>                                    
                                                <div className='flex-1'>
                                                    <p className='font-[700] text-[12px] '>PROPERTY TYPE</p>
                                                    <select className='p-2 border w-full rounded-md outline-none' name="" id="">
                                                        <option value="">Hello</option>
                                                        <option value="">Hello</option>
                                                        <option value="">Hello</option>
                                                    </select>
                                                </div>                                    
                                            </div>

                                            <PryButton type='submit' width={'100%'} name={'Search'} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SIMILAR PROPERTIES */}
                        <div className='pt-10 pb-6'>
                            <div className='py-3rem space-y-5'>
                                <HeaderTextSM align={'left'} text={'Similar Properties'} />

                                {data.length > 0 ? (
                                    <GridContainer5>
                                    {data.slice(0, 5)?.map((apt: any, ind: number) => (
                                        <ApartmentShortCards
                                        key={ind}
                                        img={apt.pictures}
                                        location={apt.short_address}
                                        price={apt.f_price}
                                        title={apt.title}
                                        like={apt.like}
                                        type={apt.category}
                                        agent={apt.agent.name}
                                        />
                                    ))}
                                    </GridContainer5>
                                ) : data.length === 0 ? (
                                    <h1>No Result Found</h1>
                                ) : (
                                    <h1>Loading Apartments....</h1>
                                )}
                                </div>
                        </div>

                        {/* PROPERTIES AROUND LOCATION*/}
                        <div className='pt-10 pb-6'>
                            <div className='py-3rem space-y-5'>
                                <HeaderTextSM align={'left'} text={'Properties in and around the same location.'} />

                                {data.length > 0 ? (
                                    <GridContainer5>
                                    {data.slice(0, 5)?.map((apt: any, ind: number) => (
                                        <ApartmentShortCards
                                        key={ind}
                                        img={apt.pictures}
                                        location={apt.short_address}
                                        price={apt.f_price}
                                        title={apt.title}
                                        like={apt.like}
                                        type={apt.category}
                                        agent={apt.agent.name}
                                        />
                                    ))}
                                    </GridContainer5>
                                ) : data.length === 0 ? (
                                    <h1>No Result Found</h1>
                                ) : (
                                    <h1>Loading Apartments....</h1>
                                )}
                                </div>
                        </div>
                    </div>  
                )
                

                
            }
        
            
        </Container>        
    </div>



  )
}

export default PropertyView
