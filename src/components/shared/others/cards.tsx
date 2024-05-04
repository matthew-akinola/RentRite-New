import { ShortenText } from '@/utils/methods';
import Link from 'next/link';
import React from 'react';

interface ApartmentCardsProps {
  img: string ;
  date?: string
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
}


const ApartmentSlide: React.FC<ApartmentCardsProps> = ({ img, location, price, title, agent, like, type, date, desc, toilet, bedroom, bathroom }) => {
  return (
    <div className='w-full h-full flex flex-col md:flex-row  lg:gap-6 border-b lg:border-0'>

      <div className='rounded-[18px] w-full lg:w-1/3 flex flex-col md:flex-row justify-center lg:justify-normal'>
        <img className='rounded-[18px] w-full h-[270px]' src={img} alt={title} />
        <ul className='flex gap-3 list-circle'>
          <li className='text-[#82808F] text-[14px] font-[400] font-Out'>{bedroom} Bedroom</li>
          <li className='text-[#82808F] text-[14px] font-[400] font-Out'>{bathroom} Bathroom</li>
          <li className='text-[#82808F] text-[14px] font-[400] font-Out'>{toilet} Toilet</li>
        </ul>
      </div>
      <div className='flex flex-col justify-between pt-6 w-full lg:w-2/3'>
        <div className='space-y-1'>
          <div className='flex w-full justify-between items-center'> 
            <p className='font-[700] text-[15px] text-[#161518]'>{title}</p>
            <p className='font-[500] text-[15px] text-[#8F2A91]'>N {price}</p>
          </div>
          <div className='flex flex-col w-full justify-between '>
            <p className='font-[500] text-[16px] text-[#565560]'>{location}</p>
          </div> 
          <div className='flex flex-col w-full justify-between '>
            <ShortenText text={desc?? ''} maxLength={150} textstyle={'font-[400] text-[14px] text-[#565560]'} btnstyle={'underline font-[400] text-[14px] text-[#6666FF]'}  />
          </div>
         
        </div>

        <div className='flex w-full justify-between items-center py-6'>
            <div>
              <p className='font-[700] text-[16px] text-[#565560]'>{agent}</p>
              <p className='font-[400] text-[14px] text-[#999999]'>{date}</p>              
            </div>
            <div className='hidden lg:block'>
              <div className='py-2 px-4 border border-black  rounded-tr-3xl rounded-bl-3xl bg-[#8F2A91] text-[#FBFBFC] '>Premium Listing</div>
            </div>

          </div> 
      </div>
    </div>
  );
}

export default ApartmentSlide;

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
