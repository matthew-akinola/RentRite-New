import { CardProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';




const GridCard: React.FC<CardProps> = ({ image, type, location, name, price, view, extraClass }) => {
  return (
    <div className={`border rounded-md ${extraClass}`}>
      <Image src={image} alt="" width={300} height={300} className='h-[140px] object-cover rounded-t-md' />
      <div className="flex justify-between px-2 pt-2 ">
        <h5 className='text-sm text-pur font-bold'>{type} </h5>
        <span className='text-sm flex items-center text-secondary space-x-2'>
          <IoLocationOutline />
          {location}
        </span>
      </div>

      <div className="p-2 flex flex-col mb-2 gap-6">
        <div className='flex justify-between items-center'>
          <span className='text-[12px] font-bold '>{name}</span>
          <span className='text-[12px] text-secondary'>{price}</span>
        </div>
        <div>
          <Link href={view}>
            <button className='bg-pur text-white w-full text-md py-1 text-[14px] rounded-md'>View</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GridCard;
