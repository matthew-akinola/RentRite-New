import React from 'react';

interface ApartmentCardsProps {
  img: string | { image?: string }[];
  location: string;
  price: number | string;
  title: string;
  agent: string;
  like: number | boolean;
  type: string;
}

const ApartmentCards: React.FC<ApartmentCardsProps> = ({ img, location, price, title, agent, like, type }) => {
  return (
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
  );
}

export default ApartmentCards;
