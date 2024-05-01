import Link from 'next/link';
import React from 'react';

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
}


const ApartmentSlide: React.FC<ApartmentCardsProps> = ({ img, location, price, title, agent, like, type, desc, toilet, bedroom, bathroom }) => {
  return (
    <div className='w-full flex'>

      <div className='rounded-[18px]'>
        <img className='rounded-[18px] w-full h-[270px]' src={img} alt={title} />
        <ul>
          <li>{bedroom} Bedroom</li>
          <li>{bathroom} Bathroom</li>
          <li>{toilet} Toilet</li>
        </ul>
      </div>
      <div className='flex flex-col w-full'>
        <div className='flex w-full justify-between items-center'> 
          <p className='font-[500] text-[15px] text-[#2B2A30]'>{title}</p>
          <p className='font-[500] text-[15px] text-[#2B2A30]'>N{price}</p>
        </div>
        <div className='flex flex-col w-full justify-between items-left'>
          <p className='font-[400] text-[14px] text-[#565560]'>{desc}</p>
        </div>
        <div className='flex flex-col w-full justify-between items-center'>
          <p className='font-[400] text-[14px] text-[#565560]'>{location}</p>
          <p className='font-[400] text-[14px] text-[#999999]'>{type}</p>
        </div>
        <div className='flex w-full justify-between items-center'>
          <p className='font-[400] text-[14px] text-[#999999]'>{agent}</p>
          <p className='font-[400] text-[14px] text-[#999999]'>{like}</p>
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
        <div className='flex flex-col w-full justify-between items-center'>
          <p className='font-[500] text-[15px] text-[#2B2A30]'>{title}</p>
          <p className='font-[400] text-[14px] text-[#565560]'>{location}</p>
          <p className='font-[500] text-[15px] text-[#2B2A30]'>Agent: {agent}</p>
        </div>
      
      </div>
    </div>
  );
}
