"use client"
import { Container, GridContainer5 } from '@/components/shared/containers/container'
import { PryButton } from '@/components/shared/others/buttons'
import {  ApartmentShortCards } from '@/components/shared/others/cards'
import { HeaderTextSM } from '@/components/shared/typographs/Typo'
import useFetch from '@/hooks/useFetch'
import { useFetchApartment } from '@/hooks/useFetchApartment'
import { formatReadableDate, isEmpty } from '@/lib/utils'
import { DynamicObject } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react'
import Spinner from "@/components/shared/Spinner";
import { ChevronLeft, MapPin } from 'lucide-react'
import ImageGrid from '@/components/shared/ImageGrid'
import { CiDiscount1, CiHeart } from 'react-icons/ci'
import { MdOutlineBedroomChild } from 'react-icons/md'
import { FaBath, FaToilet, FaToiletPaper } from 'react-icons/fa'
import { TbDiscount2 } from 'react-icons/tb'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"


interface pageProp{
    params : {id: string}
}

const PropertyView = ({params}:pageProp) => {
    const apt_id = params.id
    const {myData} = useFetch(`/apartment/${apt_id}`)
    const [data, setData] = useState<any>({})
    const [similar, setSimilar] = useState<any>({})
    // const [similar, setData] = useState<any>({})
    const [showContacts, setShowContacts] = useState<boolean>(false)
    const [selectedTab, setSelectedTab] = useState('Details');

    useEffect(()=>{
      setData((myData))
    },[myData])


    const router = useRouter();


    console.log(data)

      
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
                                                <small className='font-[400] text-[14px] text-gray-500 flex gap-x-3 mb-2'>
                                                    <MapPin />
                                                    {data?.address}, {data?.state}.
                                                </small>
                                                {/* <small>{data?.clicks} clicks | Save | Share</small> */}
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
                                        {/* <ImListNumbered /> */}
                                        {
                                            Object.values(data.specifications).length > 0 && (
                                                <div className='border mt-3 flex '>
                                                    {
                                                            Object.entries(data.specifications).map(([key, value] : any, index : number) => {
                                                                const width = 100/Object.values(data.specifications).length
                                                                const icon = (value: string ) => {
                                                                    const dIcon : Record<string, React.ReactNode> = {
                                                                        size: <TbDiscount2 className='text-[1.5rem] text-gray-500'/>, 
                                                                        toilets: <FaToiletPaper className='text-[1.5rem] text-gray-500' />,
                                                                        bedrooms: <MdOutlineBedroomChild className='text-[1.5rem] text-gray-500' />,
                                                                        bathrooms: <FaBath className='text-[1.5rem] text-gray-500'/>,
                                                                    }
                                                                    return dIcon[value]
                                                                }
                                                                return(
                                                                    <div className={`flex flex-col justify-center items-center py-3 ${index !== Object.entries(data.specifications).length - 1 ? 'border-r' : ''}`} key={index} style={{
                                                                        width: `${width}%`
                                                                    }}>
                                                                        <span>{icon(key)}</span>
                                                                        <span className='flex items-center '>
                                                                            <p className='capitalize'>{key}</p>:<p className='font-[500] text-[1rem] ml-2'>{value}</p>
                                                                        </span>
                                                                    </div>
                                                                )
                                                            })

                                                    }
                                                    </div>

                                            )
                                        }

                                        <div className='border py-3 mt-4 border-[1px] border-gray-300 w-full flex items-center justify-center'>
                                            <span className='flex text-red-400 items-center'>
                                                <CiHeart className='text-[1.3rem] mr-4'/>
                                                <p>Save</p>
                                            </span>
                                        </div>
                                        <div className=' py-3 mt-4 bg-gray-200 w-full flex flex-col items-center justify-center'>
                                            <p>Interested in this Property?</p>
                                                {
                                                    !showContacts ? (
                                                        <span className='flex items-center mt-3'>
                                                            <p>Call <span className='text-[1.4rem] font-[500]'>0805 XXXX</span> </p>
                                                            <Button className='bg-red-600 text-white ml-3' onClick={() => setShowContacts(true)}>
                                                                Show Phone
                                                            </Button>
                                                        </span>

                                                    ): (
                                                        <span className='flex items-center mt-3'>
                                                            <p>
                                                                Call 
                                                            </p> &nbsp;
                                                            <a className="text-[1.4rem] font-[500]" href="tel:+2349033335459">+2349033335459</a>, &nbsp;
                                                            <a className="text-[1.4rem] font-[500]" href="tel:+2349033335459">+2349033335459</a>, &nbsp;
                                                            <a className="text-[1.4rem] font-[500]" href="tel:+2349033335459">+2349033335459</a>, &nbsp;
                                                        </span>
                                                    )
                                                }

                                        </div>
                                        <Tabs defaultValue="Details" className="w-full border mt-4">
                                            <TabsList className="flex w-full justify-start border-b-[1px] rounded-none p-0">
                                                <TabsTrigger value="Details" className={`border-r-[1px] py-5 h-full px-6 ${selectedTab  === 'Details' ? 'bg-primary text-white' : ''}`} onClick={() =>setSelectedTab('Details')}>
                                                    <span>
                                                        <p>Details</p>
                                                    </span>
                                                </TabsTrigger>
                                                <TabsTrigger value="Map" className={`border-r-[1px] py-5 h-full px-6 ${selectedTab  === 'Map' ? 'bg-primary text-white' : ''}` }  onClick={() =>setSelectedTab('Map')}>
                                                    <span>
                                                        <p>Map</p>
                                                    </span>
                                                </TabsTrigger>
                                                <TabsTrigger value="Street View" className={`border-r-[1px] py-5 h-full px-6 ${selectedTab  === 'Street View' ? 'bg-primary text-white' : ''}`}  onClick={() =>setSelectedTab('Street View')}>
                                                    <span>
                                                        <p>Street View</p>
                                                    </span>
                                                </TabsTrigger>
                                               
                                            </TabsList>
                                            <TabsContent value="Details">
                                           
                                                <Card className='border-none'>
                                                <CardHeader>
                                                    <CardTitle>Property Description</CardTitle>
                                                    <CardDescription>
                                                        {data?.descriptions}
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent className="space-y-2">
                                                    <div className='bg-[#F3F3F4] p-3'>
                                                        <div className='flex justify-between items-center'>
                                                            <p className='font-bold mb-3 '>Property Details</p>
                                                        
                                                        </div>
                                                        <div>
                                                        <table className="table-auto w-full">
                                                            <tbody className='border border-[1px]'>
                                                                <tr className='py-3 h-10 bg-gray-300'>
                                                                <td className='text-sm text-muted-foreground px-5 py-2  font-bold'>Property Ref: <span className='font-[400]'>{data.property_ref}</span></td>
                                                                <td className='text-sm text-muted-foreground px-5 py-2  font-bold'>Agent Name: <span className='font-[400]'>{data.agent.name}</span></td>
                                                                <td className='text-sm text-muted-foreground px-5 py-2  font-bold'>Address: <span className='font-[400]'>{data.address}</span></td>
                                                                </tr>
                                                                
                                                                <tr className='py-3 h-10 '>
                                                                <td className='text-sm text-muted-foreground px-5 py-2  font-bold'>Type: <span className='font-[400]'>{data._type}</span></td>
                                                                <td className='text-sm text-muted-foreground px-5 py-2  font-bold'>Date created: <span className='font-[400]'>{formatReadableDate(data.created_at)}</span></td>
                                                                <td className='text-sm text-muted-foreground px-5 py-2  font-bold'>Agent Contact: <span className='font-[400]'>{data?.agent?.phone ? (data?.agent?.phone) : ('N/A')}</span></td>
                                                                </tr>

                                                                <tr className='py-3 h-10 bg-gray-300'>
                                                                <td className='text-sm text-muted-foreground px-5 py-2  font-bold'>Verification Status: <span className='font-[400]'><Link href={'/'}>{data?.agent?.is_verified ? 'Verified agent' : 'Not Verified Agent'}</Link></span></td>
                                                                <td></td>
                                                                <td></td>
                                                                </tr>
                                                                
                                                            
                                                            </tbody>
                                                            </table>
                                                        </div>

                                                        <p className='text-primary text-sm text-muted-foreground'></p>
                                                    </div>
                                                    <div>
                                                        <Link className='text-primary text-sm text-muted-foreground underline' href={'/'}>View More property Listings from this publisher</Link>
                                                    </div>
                                                </CardContent>
                                                </Card>
                                            </TabsContent>
                                            <TabsContent value="Map">
                                                <Card className='border-none'>
                                                    <Image src={"/images/GoogleMapTA.webp"} className='w-full object-cover' height={500} width={500} alt='map'/>
                                                </Card>
                                            </TabsContent>
                                            <TabsContent value="Street View">
                                                <Card className='border-none'>
                                                    <Image src={"/images/street view.jpg"} className='w-full object-cover' height={500} width={500} alt='map'/>
                                                </Card>
                                            </TabsContent>
                                        </Tabs>
                                     

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
