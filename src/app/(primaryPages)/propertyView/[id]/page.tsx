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
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react'
import Spinner from "@/components/shared/Spinner";
import { ChevronLeft, MapPin } from 'lucide-react'
import ImageGrid from '@/components/shared/ImageGrid'


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


    const router = useRouter();



      
  return (
    <div className='pt-[7rem]'>
        <div className="flex w-full justify-center">
            {
                isEmpty(data) ? (
                    <div className="w-full flex flex-col justify-center items-center p-20">
                        <Spinner/>
                        <p className="mt-5">loading...</p>
                    </div> 
                ): (
                    <div className='w-full flex justify-center flex-col items-center'>
                        <div className='bg-gray-200 w-full flex justify-center'>
                            <div className='container relative w-full py-2 max-w-[1700px] overflow-x-hidden px-[1.5rem] md:px-[3.5rem] lg:px-[5rem] xl:px-[7.5rem]'>
                                <p className='text-[1.5rem] font-[500]'>
                                    {data.category}
                                </p>
                            </div>
                        </div>
                        <div className='container relative  mb-32 w-full max-w-[1700px] overflow-x-hidden h-min px-[1.5rem] md:px-[3.5rem] lg:px-[5rem] xl:px-[7.5rem]'>
                            <div className='border-[1px] mt-4 px-3 py-2 mb-5'>
                                <div  onClick={() => {
                                    router.back();
                                }} className='text-decoration flex gap-x-3'>
                                    <ChevronLeft />
                                    <p className='text-sm underline'>Back to Property Listing page</p>    
                                </div>
                            </div>
                            <div className="grid-col-1 container relative grid w-full max-w-[1700px] grid-rows-2  justify-between px-container-base py-[1rem] md:grid-cols-[0.7fr_0.3fr] lg:grid-rows-1 lg:px-container-lg xl:px-container-xl gap-x-7">
                                <div>
                                        <div>
                                            <div className='flex flex-col md:flex-row justify-between md:items-center'>
                                                <p className='text-[18px] md:text-[24px] font-[700] text-[#161518]'>{data?.title}</p>
                                                <p className='text-[#8F2A91] text-[20px] font-[700]'>₦ {data?.f_price}</p>
                                            </div>
                                            <div className='flex flex-col md:flex-row justify-between md:items-center mt-4 md:mt-0'>
                                                <small className='font-[400] text-[14px] text-[#6666FF] flex gap-x-3 mb-2'>
                                                    <MapPin />
                                                    {data?.address}, {data?.state}. <Link href={'/'} className='underline'>Open Street View</Link>
                                                </small>
                                                <small>{data?.clicks} clicks | Save | Share</small>
                                            </div>
                                        </div>
                                        <div className='flex flex-col lg:flex-row gap-1 w-full '>
                                            <ImageGrid
                                                data={
                                                    {
                                                        pictures: [
                                                            // data.pictures.map((image : string) => {
                                                            //     {images: image}
                                                            // })
                                                            {images: data?.pictures[0].image},
                                                            {images: data?.pictures[1].image},
                                                            {images: data?.pictures[2].image},
                                                            {images: data?.pictures[3].image},
                                                        ]
                                                    }
                                                } 
                                            />
                                            {/* <div className='flex md:flex-col flex-row gap-1 md:w-[30%] h-full'>
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
                                            <div className='w-[40%] h-full'>

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
                                            </div> */}
                                        </div>
                                            {
                                                Object.values(data.specifications).length > 0 && (
                                                    <div className='border mt-3 flex '>
                                                        {
                                                                Object.entries(data.specifications).map(([key, value] : any, index : number) => {
                                                                    const width = 100/Object.values(data.specifications).length
                                                                    return(
                                                                        <span className={`flex justify-center items-center py-3 ${index !== Object.entries(data.specifications).length - 1 ? 'border-r' : ''}`} key={index} style={{
                                                                            width: `${width}%`
                                                                        }}>
                                                                            <p className='capitalize'>{key}</p>:<p className='font-[800] text-[1.3rem] ml-2'>{value}</p>
                                                                        </span>
                                                                    )
                                                                })

                                                        }
                                                     </div>

                                                )
                                            }
                                        <div className='flex '>
                                            <div className='w-full space-y-6 border-t pt-8'>
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
                                        </div>

                                </div>
                                <div className='w-full' >
                                    <div className='hidden md:block shadow-xl'>
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
                    </div>  
                )
                

                
            }
        
            
        </div>        
    </div>



  )
}

export default PropertyView
