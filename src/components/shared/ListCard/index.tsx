import Link from 'next/link';
import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { IoLocationOutline, IoShareSocialOutline } from 'react-icons/io5';

interface ListCardProps {
  image: string;
  type: string;
  location: string;
  name: string;
  price: string;
  description: string;
  view: string;
  bookmark?: () => void;
  share?: () => void;
}

const ListCard: React.FC<ListCardProps> = ({ image, type, location, name, price, description, view, bookmark, share }) => {
  return (
    <div className="border p-5 pb-4">
      <div className="flex space-x-3">
        <img src={image} alt="" className='h-[170px] w-[155px] object-cover' />
        <div className='w-full'>
          <div className="flex justify-between items-center">
            <div className='flex space-x-2 items-center'>
              <h5 className='text-md text-pur font-bold'>{type} </h5>
              <span className='text-sm flex items-center text-secondary space-x-2'>
                <IoLocationOutline />
                {location}
              </span>
            </div>
            <div className="flex space-x-2">
                <CiBookmark className='w-8 h-8'/>
                <IoShareSocialOutline className='w-8 h-8'/>
            </div>
          </div>
          <h2 className='text-2xl font-bold '>{name}</h2>
          <h4 className='text-sm text-secondary'>Price: {price}</h4>
          <div className="flex justify-between items-end">
            <p className='pt-3 text-secondary line-clamp-2 max-w-sm  md:text-sm'>
              {description}
            </p>
            <Link href={view}>
              <button className='bg-primary text-sm text-white px-5 py-1 rounded-lg shadow-md'>View</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
