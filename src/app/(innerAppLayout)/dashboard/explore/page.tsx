'use client'
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ListCard from '@/components/shared/ListCard';
import GridCard from '@/components/shared/GridCard';
import { BsList } from 'react-icons/bs';
import { CiGrid41 } from 'react-icons/ci';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import FilterComponent from '@/components/innerPages/explore/filterComponent';
import SearchInput from '@/components/shared/searchInput';

interface SubMenu {
  name: string;
  element: JSX.Element;
}

const Explore: React.FC = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [type, setType] = useState<string>('BUY')
  const [event, setEvent] = useState<string>('')

  const handleFilter = (bool: boolean) => {
    setShowFilter(bool);
  };

  const subMenu: string[] = [
    'BUY', 'RENT', 'CONSULTANT'
  ];

  const handleChange = (item: string) => {
    setType(item);
  };

  return (
    <div className="px-0 md:px-10 pt-3">
      <div className="flex gap-6">
        <div className={`${!showFilter ? ' w-100 md:w-[80%]' : 'w-full'}`}>
          <div className="flex flex-row justify-between ">
            <div className="flex gap-1 justify-evenly md:justify-start flex-wrap py-3 text-ash-300">
              {subMenu.map((item, index) => {
                return (
                  <button
                    className={`px-2 md:px-5 pb-2 transition duration-500 ${
                      type === item ? 'border-b-4 border-indigo-200 border-b-primary' : ''
                    }`}
                    onClick={() => handleChange(item)}
                    key={index}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="pt-4 flex flex-col space-y-4">
            <form className="bg-white shadow-lg md:pl-3 lg:mx-auto p-1 rounded-lg w-full">
                <SearchInput 
                    className={'basis-4/5'}     
                    icon={<FaSearch className="text-secondary" />}
                    placeholder="Event center"
                    label='Search'
                    handleSubmit={() => ("/")}
                    value={event}
                    setValue={(e) => setEvent(e)}
                />
              
            </form>
          </div>
            <div className="pt-4 flex flex-col space-y-4">
              <ListCard image={'/images/tipsBlog.png'} type={'Event Center'} location={'Lekki, Lagos'} name={'3 BEDROOM CABIN'} price={'$2800/month'} description={'lodiuytretyuio Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, numquam vel quos dolores, asperiores pariatur, '} view={'/details'} />
              <ListCard image={'/images/tipsBlog.png'} type={'Event Center'} location={'Lekki, Lagos'} name={'3 BEDROOM CABIN'} price={'$2800/month'} description={'lodiuytretyuio Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, numquam vel quos dolores, asperiores pariatur, '} view={'/details'} />
              <ListCard image={'/images/tipsBlog.png'} type={'Event Center'} location={'Lekki, Lagos'} name={'3 BEDROOM CABIN'} price={'$2800/month'} description={'lodiuytretyuio Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, numquam vel quos dolores, asperiores pariatur, '} view={'/details'} />
              <ListCard image={'/images/tipsBlog.png'} type={'Event Center'} location={'Lekki, Lagos'} name={'3 BEDROOM CABIN'} price={'$2800/month'} description={'lodiuytretyuio Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, numquam vel quos dolores, asperiores pariatur, '} view={'/details'} />
              <ListCard image={'/images/tipsBlog.png'} type={'Event Center'} location={'Lekki, Lagos'} name={'3 BEDROOM CABIN'} price={'$2800/month'} description={'lodiuytretyuio Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, numquam vel quos dolores, asperiores pariatur, '} view={'/details'} />
              <ListCard image={'/images/tipsBlog.png'} type={'Event Center'} location={'Lekki, Lagos'} name={'3 BEDROOM CABIN'} price={'$2800/month'} description={'lodiuytretyuio Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, numquam vel quos dolores, asperiores pariatur, '} view={'/details'} />
            </div>
        </div>
        <div className="hidden md:flex">
            <FilterComponent />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Explore;
