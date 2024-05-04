import { DynamicObject } from '@/types';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { formatDate } from '@/lib/utils';

interface ApartmentCardsProps {
  img: string ;
  location: string;
  price: number | string;
  title: string;
  agent: string;
  like: number | boolean;
  type: string;
  desc?: string;
  toilet?: string;
  bathroom?: string;
  bedroom?: string;
  url_id? : string
  specifications?: DynamicObject;
  date: string;
}


const ListSIngleApartment: React.FC<ApartmentCardsProps> = ({ img, location, price, title, agent, like, type, desc, toilet, bedroom, bathroom, url_id, specifications, date }) => {
    console.log(specifications)
  return (

    <div className='mb-5'>
        <Link href={`/propertyView/${url_id}`} >
            <div className='w-full flex flex-col'>

            <div className='rounded-[18px] flex items-center gap-5'>
                <img className='rounded-[18px] w-full h-[270px] lg:w-[40%]' src={img} alt={title} />
                <div className='lg:w-[60%]'>
                {/* <p>{bedroom} Bedroom</p>
                <p>{bathroom} Bathroom</p>
                <p>{toilet} Toilet</p> */}
                <div className='flex w-full justify-between'>
                    <p className='text-2xl font-semibold leading-none tracking-tight flex justify-between mb-5'>{title}</p>
                    <p className='text-xl font-[700] leading-none tracking-tight flex justify-between mb-5 text-primary'>{`N${price}`}</p>
                    
                </div>
                <p className='font-bold mb-3 '>{location}</p>
                <p>{desc}</p>

                <div className='flex justify-between mt-5 item-center'>
                    <span className='flex flex-col'>
                        <p className='font-bold '>Jay Cee  Landmark Network Limited</p>
                        <p className='text-gray-400'>Date Posted: {formatDate(date)}</p>
                    </span>
                    <span>
                        <Button className='bg-primary text-white'>
                            Premium Listing
                        </Button>
                    </span>
                </div>
                </div>
            </div>
            <div className='flex items-center  py-3 flex-wrap'>
                {
                specifications && Object?.values(specifications)?.length > 0 ?(
                        <div className=' flex '>
                            {
                                    Object?.entries(specifications)?.map(([key, value] : any, index : number) => {
                                    
                                        return(
                                            <div className={`flex gap-1 justify-center items-center`} key={index} >
                                                <span className='flex items-center '>
                                                <p className='font-[500] text-[1rem]'>{value}</p>&nbsp;
                                                <p className='capitalize'>{key}</p>
                                                </span> 
                                                {(index !== Object?.entries(specifications)?.length - 1 )? (
                                                    <span>
                                                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="2" cy="2" r="2" fill="black"/>
                                                        </svg>
                                                    </span> 
                                                ) :(
                                                    <span></span>
                                                )}
                                                {index !== Object?.entries(specifications)?.length - 1 ? (
                                                    <span>&nbsp;</span>
                                                ): (
                                                    <span></span>
                                                )}
                                            </div>
                                        )
                                    })

                            }
                            </div>
                    ): (
                        <></>
                    )
                }
                
            </div>
            {/* <div className='flex w-full'>
                <div className='flex w-full justify-between items-center'> 
                <p className='font-[500] text-[15px] text-[#2B2A30]'>{title}</p>
                
                </div>
            
                <div className='flex flex-col w-full justify-between items-center'>
                <p className='font-[400] text-[14px] text-[#565560]'>{location}</p>
                <p className='font-[400] text-[14px] text-[#999999]'>{type}</p>
                </div>
                <div className='flex w-full justify-between items-center'>
                <p className='font-[400] text-[14px] text-[#999999]'>{agent}</p>
                <p className='font-[400] text-[14px] text-[#999999]'>{like}</p>
                </div>
            </div> */}
            </div>
        </Link>
    </div>
  );
}

export default ListSIngleApartment;

export const ApartmentCards: React.FC<ApartmentCardsProps> = ({ img, location, price, title, agent, like, type, url_id }) => {
  return (
    <Link href={`/propertyView/${url_id}`}>
      <div className='w-full space-y-4'>
        <div className='rounded-[18px]'>
          <img className='rounded-[18px] w-full h-[270px]' src={img} alt={title} />
        </div>
        <div className='flex flex-col w-full'>
          <div className='flex w-full justify-between items-center'>
            <p className='font-[500] text-[15px] text-[#2B2A30]'>{title}</p>
            <p className='font-[500] text-[15px] text-[#2B2A30]'>N{price}</p>
          </div>
          <div className='flex w-full justify-between items-center'>
            <p className='font-[400] text-[14px] text-[#565560]'>{location}</p>
            <p className='font-[400] text-[14px] text-[#999999]'>{type}</p>
          </div>
          <div className='flex w-full justify-between items-center'>
            <p className='font-[400] text-[14px] text-[#999999]'>{agent}</p>
            <p className='font-[400] text-[14px] text-[#999999]'>{like}</p>
          </div>
        </div>
      </div>    
    </Link>

  );
}
export const ApartmentShortCards: React.FC<ApartmentCardsProps> = ({ img, location, price, title, agent, like, type }) => {
  return (
    <div className='w-full space-y-4'>
      <div className='rounded-[18px]'>
        <img className='rounded-[18px] w-full h-[270px] object-cover' src={img} alt={title} />
      </div>
      <div className='flex  w-full'>
        <div className='flex flex-col w-full justify-between items-start'>
          <p className='font-[500] text-[15px] text-[#2B2A30]'>{title}</p>
          <p className='font-[400] text-[14px] text-[#565560]'>{location}</p>
          <p className='font-[500] text-[15px] text-[#2B2A30]'>Agent: {agent}</p>
        </div>
      
      </div>
    </div>
  );
}
