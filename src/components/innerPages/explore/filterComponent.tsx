import SearchInput from '@/components/shared/searchInput';
import React, { useState } from 'react';
import { AiOutlineCheck, AiOutlinePlusCircle } from 'react-icons/ai';

function FilterComponent() {
  const [check, setCheck] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string[]>([])
  const [selectedFurnishing, setSelectedFurnishing] = useState<string[]>([])
  const [selectedTimeAdded, setSelectedTimeAdded] = useState<string[]>([])
  const [selectedVerification, setSelectedVerification] = useState<string[]>([])
  const [searchLocationValue, setSearchLocationValue] = useState('')

  const handleCheckboxClick = (location: string, value: string[], setValue: ([]) => void) => {
    if (value.includes(location)){
      setValue(value.filter(x => x !== location))
    }else{
      setValue([...value , location])
    }
  }

  return (
    <div className="">
      <div className="flex justify-between p-4">
        <h4>Filter by </h4>
      </div>

      <div className="location-search mt-4">
        <h3 className="text-md font-bold">Location</h3>
        <span className="text-gray-400 text-xs">You can select multiple options</span>

        <div className="mt-4">
            {
              ['Kubwa', 'Bwari', 'Wuse', 'Maitama', 'Ikeja'].map((location, index) => (
                <div className={`flex space-x-3 items-center mb-2 py-2 px-4 ${selectedLocation.includes(location)  ? "bg-purple-200 text-primary fill-primary rounded-md" : ""}`} onClick={() =>  handleCheckboxClick(location, selectedLocation, setSelectedLocation)} key={index}>
                  <input type="checkbox" checked={selectedLocation.includes(location) ? true : false} name="" id="" className="w-4 h-4 accent-pur" />
                  <label htmlFor="">{location}</label>
                </div>
              ))
            }
          <div className="p-1 flex shadow-lg items-center mt-4">
           <SearchInput
              className='!gap-x-3'
              placeholder='Add a Location'
              value={searchLocationValue}
              setValue={(e) => setSearchLocationValue(e)}
              label='Add'
              handleSubmit={() => ("/")}
              icon = {<AiOutlinePlusCircle className='text-gray-400' />}
              inputClassName=' min-w-[70px] placeholder:text-sm text-sm'
           />
          </div>
        </div>
      </div>

      <div className="location-search mt-5">
        <h3 className="text-md font-bold">Property type</h3>
        <span className="text-gray-400 text-xs">You can select multiple options</span>

        <div className="mt-4">
          {
              ['Event Center', 'Apartment', 'Self Contain', 'Hostel', 'Flat'].map((category, index) => (
                <div className={`flex space-x-3 items-center mb-2 py-2 px-4 ${selectedCategory.includes(category)  ? "bg-purple-200 text-primary fill-primary rounded-md" : ""}`} onClick={() => handleCheckboxClick(category, selectedCategory, setSelectedCategory)} key={index}>
                  <input type="checkbox" checked={selectedCategory.includes(category) ? true : false} name="" id="" className="w-4 h-4 accent-pur" />
                  <label htmlFor="">{category}</label>
                </div>
              ))
            }
        </div>
      </div>
      <div className="location-search mt-5">
        <h3 className="text-md font-bold">Furnishing</h3>
        <span className="text-gray-400 text-xs">You can select multiple options</span>

        <div className="mt-4">
          {
              ['Furnished', 'No Furnishing'].map((furnishing, index) => (
                <div className={`flex space-x-3 items-center mb-2 py-2 px-4 ${selectedFurnishing.includes(furnishing)  ? "bg-purple-200 text-primary fill-primary rounded-md" : ""}`} onClick={() => handleCheckboxClick(furnishing, selectedFurnishing, setSelectedFurnishing)} key={index}>
                  <input type="checkbox" checked={selectedFurnishing.includes(furnishing) ? true : false} name="" id="" className="w-4 h-4 accent-pur" />
                  <label htmlFor="">{furnishing}</label>
                </div>
              ))
            }
        </div>
      </div>
      <div className="location-search mt-5">
        <h3 className="text-md font-bold">Time Added To Site</h3>
        <span className="text-gray-400 text-xs">You can select multiple options</span>

        <div className="mt-4">
          {
              ['Last 24 hrs', 'This week', 'This Month', 'Last three Months', 'Last six months'].map((timeAdded, index) => (
                <div className={`flex space-x-3 items-center mb-2 py-2 px-4 ${selectedTimeAdded.includes(timeAdded)  ? "bg-purple-200 text-primary fill-primary rounded-md" : ""}`} onClick={() => handleCheckboxClick(timeAdded, selectedTimeAdded, setSelectedTimeAdded)} key={index}>
                  <input type="checkbox" checked={selectedTimeAdded.includes(timeAdded) ? true : false} name="" id="" className="w-4 h-4 accent-pur" />
                  <label htmlFor="">{timeAdded}</label>
                </div>
              ))
            }
        </div>
      </div>
      <div className="location-search mt-5">
        <h3 className="text-md font-bold">Verification</h3>
        <span className="text-gray-400 text-xs">You can select multiple options</span>

        <div className="mt-4">
          {
              ['Verified Posting', 'Unverified postings'].map((verification, index) => (
                <div className={`flex space-x-3 items-center mb-2 py-2 px-4 ${selectedVerification.includes(verification)  ? "bg-purple-200 text-primary fill-primary rounded-md" : ""}`} onClick={() => handleCheckboxClick(verification, selectedVerification, setSelectedVerification)} key={index}>
                  <input type="checkbox" checked={selectedVerification.includes(verification) ? true : false} name="" id="" className="w-4 h-4 accent-pur" />
                  <label htmlFor="">{verification}</label>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  );
}

export default FilterComponent;
