"use client"
import { Container, GridContainer5 } from '@/components/shared/containers/container'
import { PryButton } from '@/components/shared/others/buttons'
import {  ApartmentShortCards } from '@/components/shared/others/cards'
import { HeaderTextSM } from '@/components/shared/typographs/Typo'
import useFetch from '@/hooks/useFetch'
import { useFetchApartment } from '@/hooks/useFetchApartment'
import { formatDate, formatReadableDate, isEmpty } from '@/lib/utils'
import { DynamicObject } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react'
import Spinner from "@/components/shared/Spinner";
import { Bookmark, ChevronLeft, MapPin, Phone, Share2, TicketCheck, UserRound } from 'lucide-react'
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
import MultimediaModal from '@/components/shared/multimediaModal'
import { staticData } from './data'
import MultiMediaGrid from '@/components/shared/MultimediaGrid'
import SocialMediaPopup from '@/components/shared/SocialMediaPopupProps'


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
    const [isMutiMediaModalOpen, setMutiMediaModalOpen] = useState(false)
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => setShowPopup(!showPopup);


    useEffect(()=>{
      // update the media
      let tempData : DynamicObject = []
      if(Object.values(myData).length > 0) {
          tempData = {
           ...myData,
           videos: [
               'https://static.vecteezy.com/system/resources/previews/002/410/964/mp4/several-prismatic-bokeh-flickering-video.mp4'
           ]
         }
      }
      setData(tempData)
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
                        <MultimediaModal isOpen={isMutiMediaModalOpen} onClose={() => setMutiMediaModalOpen(false)} data={data} />

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
                                            <div className='flex justify-between mt-4 md:mt-0 relative items-center mt-3'>
                                                <div className='flex gap-3 '>
                                                    <span className='undeline text-primary'>
                                                        Schedule a tour
                                                    </span>|
                                                    <span className='underline text-[#D97706]'>Report Listing</span>
                                                </div>
                                                
                                                <small className="flex gap-2">
                                                    <p>
                                                        {data?.clicks} clicks
                                                    </p>
                                                    |<p className='flex gap-2 items-center'> <Bookmark className='text-sm h-4 w-4' /> <span className="underline">Save</span> </p>
                                                    |<p className='flex gap-2 items-center cursor-pointer'  onClick={togglePopup}> <Share2 className='text-sm h-4 w-4' /> <span className="underline">Share</span> </p>
                                                    {showPopup && <SocialMediaPopup closePopup={togglePopup} />}
                                                </small>
                                            </div>
                                        </div>
                                        <div className='flex flex-col lg:flex-row gap-1 w-full '>
                                            {/* <ImageGrid
                                                data={data}
                                                isMutiMediaModalOpen={isMutiMediaModalOpen}
                                                setMutiMediaModalOpen={setMutiMediaModalOpen}
                                            /> */}
                                            <MultiMediaGrid
                                                data={data}
                                                isMutiMediaModalOpen={isMutiMediaModalOpen}
                                                setMutiMediaModalOpen={setMutiMediaModalOpen}
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
                                        <div className='flex items-center  py-3 flex-wrap'>
                                            {
                                                Object.values(data.specifications).length > 0 && (
                                                    <div className=' flex '>
                                                        {
                                                                Object.entries(data.specifications).map(([key, value] : any, index : number) => {
                                                                    const width = 100/Object.values(data.specifications).length
                                                                
                                                                    return(
                                                                        <div className={`flex gap-1 justify-center items-center`} key={index} >
                                                                            <span className='flex items-center '>
                                                                            <p className='font-[500] text-[1rem]'>{value}</p>&nbsp;
                                                                            <p className='capitalize'>{key}</p>
                                                                            </span> 
                                                                            {(index !== Object.entries(data.specifications).length - 1 )? (
                                                                                <span>
                                                                                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="black"/>
                                                                                    </svg>
                                                                                </span> 
                                                                            ) :(
                                                                                <span></span>
                                                                            )}
                                                                            {index !== Object.entries(data.specifications).length - 1 ? (
                                                                                <span>&nbsp;</span>
                                                                            ): (
                                                                                <span></span>
                                                                            )}
                                                                        </div>
                                                                    )
                                                                })

                                                        }
                                                        </div>

                                                )
                                            }
                                            <span className='gap-1 flex items-center flex-wrap'>
                                                | 
                                                <p className='font-bold'>Serviced</p>
                                                |
                                                <p className='font-bold'>Not Furnished</p>
                                            </span>
                                        </div>
                                        <div className='flex items-center gap-2 flex-wrap'>
                                           <span className="flex items-center">
                                                <p className='font-bold'>Property Type: </p>&nbsp;
                                                <p>{data.category}</p>
                                           </span>
                                           <span className="flex items-center">
                                                <p className='font-bold'>Date Created: </p>&nbsp;
                                                <p>{formatDate(data.created_at)}</p>
                                           </span>
                                           <span className="flex items-center">
                                                <p className='font-bold'>Date Updated: </p>&nbsp;
                                                <p>{formatDate(data.updated_at)}</p>
                                           </span>
                                          
                                        </div>

                                       
                                        {/* <div className=' py-3 mt-4 bg-gray-200 w-full flex flex-col items-center justify-center'>
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

                                        </div> */}
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
                                                    <CardTitle className='flex justify-between mb-5'>
                                                        <span>Property Details</span>
                                                        
                                                    </CardTitle>
                                                    <CardDescription>
                                                        {data?.descriptions}
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent className="space-y-2">
                                                   
                                                    <div className='bg-[#F3F3F4] p-3'>
                                                        <div className='flex justify-between items-center'>
                                                            <p className='font-bold mb-3 '>Listed by</p>
                                                            <Link className='text-primary text-sm text-muted-foreground underline' href={`/propertyView/publisher/${data.agent.name}`}>View More property Listings from this publisher</Link>
                                                        </div>
                                                        <p><span className='font-[700] text-sm'>{}</span></p>
                                                        <p className='flex gap-2 mt-2'><MapPin className='w-4 h-4' /><span className='font-[400] text-sm'>{data.address}</span></p>
                                                        <p className='flex gap-2 mt-2 items-center'><Phone className='w-4 h-4' /><span className='font-[400] text-sm flex items-center'>
                                                        {
                                                            !showContacts ? (
                                                                <span className='flex items-center'>
                                                                    <p>Call <span className='font-[500]'>0805 XXXX</span> </p>
                                                                    <Button className='bg-red-600 !py-1 h-8 text-white ml-3 text-sm' onClick={() => setShowContacts(true)}>
                                                                        Show Phone
                                                                    </Button>
                                                                </span>

                                                            ): (
                                                                <span className='flex items-center'>
                                                                    <p>
                                                                        Call 
                                                                    </p> &nbsp;
                                                                    <a className=" font-[500]" href="tel:+2349033335459">+2349033335459</a>, &nbsp;
                                                                    <a className=" font-[500]" href="tel:+2349033335459">+2349033335459</a>, &nbsp;
                                                                    <a className=" font-[500]" href="tel:+2349033335459">+2349033335459</a>, &nbsp;
                                                                </span>
                                                            )
                                                        }    
                                                        </span></p>
                                                        <p className='flex gap-2 mt-2'><UserRound className='w-4 h-4' /><span className='font-[400] text-sm'>{formatDate(data.created_at)}</span></p>
                                                        <p className={`flex gap-2 mt-2 items-center ${data?.agent?.is_verified ? 'text-primary' : 'text-gray-400'}`}><TicketCheck className='w-4 h-4' /><span className='font-[400] text-sm'>{data?.agent?.is_verified ? 'Verified agent' : 'Not Verified Agent'}</span></p>
                                                        <div>
                                                        {/* <table className="table-auto w-full">
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
                                                            </table> */}
                                                        </div>

                                                        <p className='text-primary text-sm text-muted-foreground'></p>
                                                    </div>
                                                    <div>

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
                                        
                                        <div className='border mt-4 bg-[#FCDFC4] w-full px-6 py-10 flex flex-col items-start justify-center'>
                                           <h3 className='text-2xl font-semibold leading-none tracking-tight mb-6'>
                                                Disclaimer
                                           </h3>
                                           <p className='text-black'>
                                                All information displayed about this property is termed simply as a property advertisement. Rentrite and the rentrite team does not give any guarantee as to the accuracy advertisement or any linked or associated information with it. Rentrite and the Rentrite team has no control over the content posted. The property information is provided exclusively for personal, non-commercial use, and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. The information posted can be termed reliable, but it is not 100% guaranteed that listings will be exactly what you want. Rentrite shall not in any way be held liable for the actions of any agent and/or property owner/landlord on or off this website.
                                           </p>
                                        </div>

                                </div>
                                <div className='w-full' >
                                    <div className='hidden md:block shadow-xl'>
                                    <div>
                                        <div className='bg-[#79007B] p-3 '>
                                            <p className='text-[#FBFBFC] text-center'>Sell, Rent or Buy a property now</p>
                                        </div>
                                        <div className='p-6 space-y-6'>
                                            <div className='flex justify-around items-center'>
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
                                                        <option value="">BUY</option>
                                                        <option value="">RENT</option>
                                                        <option value="">SALE</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <p className='font-[700] text-[12px] '>BEDROOM</p>
                                                    <select className='p-2 border w-full rounded-md outline-none' name="" id="">
                                                        <option value="">1 bedroom</option>
                                                        <option value="">2 bedroom</option>
                                                        <option value="">3 bedroom</option>
                                                        <option value="">4 bedroom</option>
                                                        <option value="">5 bedroom</option>
                                                        <option value="">6 bedroom</option>
                                                        <option value="">7 bedroom</option>
                                                        <option value="">8 bedroom</option>
                                                        <option value="">9 bedroom</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <p className='font-[700] text-[12px] '>SERVICED</p>
                                                    <select className='p-2 border w-full rounded-md outline-none' name="" id="">
                                                        <option value="">Any</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <p className='font-[700] text-[12px] '>FURNISHED</p>
                                                    <select className='p-2 border w-full rounded-md outline-none' name="" id="">
                                                        <option value="">Any</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <p className='font-[700] text-[12px] '>SHARED</p>
                                                    <select className='p-2 border w-full rounded-md outline-none' name="" id="">
                                                        <option value="">Any</option>
\                                                    </select>
                                                </div>

                                                <div className='flex gap-4 w-full'>
                                                    <div className='w-full'>
                                                        <p className='font-[700] text-[12px] '>ENTER KEYWORDS</p>
                                                        <input className='p-2 border w-full rounded-md outline-none' type="text" placeholder='e.g “airport”, “gym” or “shop”' />
                                                    </div>            
                                                </div>

                                                <div className='flex gap-4 w-full'>
                                                    <div className='w-[50%]'>
                                                        <p className='font-[700] text-[12px] '>MIN PRICE</p>
                                                        <input className='p-2 border w-full rounded-md outline-none' type="text" placeholder='Enter Amount' />
                                                    </div>            
                                                    <div className='w-[50%]'>
                                                        <p className='font-[700] text-[12px] '>MAX PRICE</p>
                                                        <input className='p-2 border w-full rounded-md outline-none' type="text" placeholder='Enter Amount' />
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

                                    {/* {data.length > 0 ? ( */}
                                    {staticData.length > 0 ? (
                                        <GridContainer5>
                                        {staticData.slice(0, 5)?.map((apt: any, ind: number) => (
                                            <ApartmentShortCards
                                            key={ind}
                                            img={apt.image}
                                            location={apt.location}
                                            price={apt.price}
                                            title={apt.title}
                                            like={apt.like}
                                            type={apt.category}
                                            agent={apt.agent}
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

                                    {staticData.length > 0 ? (
                                        <GridContainer5>
                                        {staticData.slice(0, 5)?.map((apt: any, ind: number) => (
                                            <ApartmentShortCards
                                            key={ind}
                                            img={apt.image}
                                            location={apt.location}
                                            price={apt.price}
                                            title={apt.title}
                                            like={apt.like}
                                            type={apt.category}
                                            agent={apt.agent}
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
