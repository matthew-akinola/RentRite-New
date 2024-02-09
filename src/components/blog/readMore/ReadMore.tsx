import React, { useState } from 'react'


interface ReadMoreInterface {
  imgUrl: string,
  tittle: string,
  date: string,
  text: string
} 

const ReadMore = () => {
  const readMoreList:ReadMoreInterface[] = [
    {
      imgUrl : '/images/ReadMoreBlog.png',
      tittle : 'How to be a home owner via Rentrite in 2023',
      date : 'Dec 23rd, 2022',
      text : 'Becoming an home owner is still a possibility in 2023. It is now easier now than ever to own a home and all you have to do is follow the steps we will be giving in this guide. So get your mind prepared, your pockets stacked and be excited as we speak on how you can be a home owner in 2023 without breaking the bank!'
    },
    {
      imgUrl : '/images/ReadMoreBlog.png',
      tittle : 'How to be a home owner via Rentrite in 2023',
      date : 'Dec 23rd, 2022',
      text : 'Becoming an home owner is still a possibility in 2023. It is now easier now than ever to own a home and all you have to do is follow the steps we will be giving in this guide. So get your mind prepared, your pockets stacked and be excited as we speak on how you can be a home owner in 2023 without breaking the bank!'
    },
    {
      imgUrl : '/images/ReadMoreBlog.png',
      tittle : 'How to be a home owner via Rentrite in 2023',
      date : 'Dec 23rd, 2022',
      text : 'Becoming an home owner is still a possibility in 2023. It is now easier now than ever to own a home and all you have to do is follow the steps we will be giving in this guide. So get your mind prepared, your pockets stacked and be excited as we speak on how you can be a home owner in 2023 without breaking the bank!'
    },
    {
      imgUrl : '/images/ReadMoreBlog.png',
      tittle : 'How to be a home owner via Rentrite in 2023',
      date : 'Dec 23rd, 2022',
      text : 'Becoming an home owner is still a possibility in 2023. It is now easier now than ever to own a home and all you have to do is follow the steps we will be giving in this guide. So get your mind prepared, your pockets stacked and be excited as we speak on how you can be a home owner in 2023 without breaking the bank!'
    }

  ]
  return (
    <div className='relative'>
    <div className='hidden xl:block w-[316px] h-[437px] border absolute z-10 right-[0px]'> 
                <form action="">
                  <h3 className='text-center align-middle font-medium text-lg text-[#FBFBFC] bg-[#79007B] h-[48px] pt-3'>Sell, Rent or Buy a property now</h3>
                  <div className='px-5 py-5'>
                    <ul className='flex flex-row w-full justify-between'>
                      <li className='text-[#161518] font-medium text-lg border-b-[#79007B] border-b-2'>Buy</li>
                      <li className='text-[#161518] font-medium text-lg' >Rent</li>
                      <li className='text-[#161518] font-medium text-lg' >Sell</li>
                    </ul>
                  </div>
                  <div className='px-5'>
                    <input className='text-[#B1B0B9] shadow_-1px_-1px_3px_0_rgba(0, 0, 0, 0.25) border-[1px] border-[#B1B0B9] w-full rounded-sm h-[49px] px-3 outline-none focus:border-[#79007B]' type="text" name="" id="" placeholder='Enter city or state' />
                  </div>
                  <div className='px-5 mt-7'>
                    <label className='text-[#161518] text-xs font-semibold block uppercase' htmlFor="propertyType">Property Type</label>
                    <select name="propertyType" id="" className='text-[#B1B0B9] bg-white border rounded-sm w-full h-[39px] px-3 mt-1' >
                    <option value="" disabled selected>Types</option>  
                    <option value="">All</option>
                    <option value="">Commercial Properties</option>
                    <option value="">Apartments/Flats/Hotels</option>
                    <option value="">Houses</option>
                    <option value="">Land</option>
                    <option value="">Event Center</option>
                    </select></div>
                  <div>
                  <div className='px-5 mt-7 flex flex-row justify-between'>
                    <div className='w-[46%]'>
                      <label className='text-[#161518] text-xs font-semibold block uppercase' htmlFor="propertyType">Min Price</label>
                      <select name="propertyType" id="" className='text-[#B1B0B9] bg-white border rounded-sm w-full h-[39px] px-3 mt-1' >
                        <option value="" disabled selected>No Min</option>
                      </select>
                    </div>
                    <div className='w-[46%]'>
                      <label className='text-[#161518] text-xs font-semibold block uppercase' htmlFor="propertyType">Max Price</label>
                      <select name="propertyType" id="" className='text-[#B1B0B9] bg-white border rounded-sm w-full h-[39px] px-3 mt-1' >
                        <option value="" disabled selected>No Max</option>
                      </select>
                    </div>
                    </div>
                  </div>

                  <div className='px-5 w-full mt-4'><input type="submit" value="Seacrh" className=' rounded-lg bg-[#BC80BD] px-4 py-4 w-full cursor-pointer'/></div>
                </form>
    </div>
    
      {readMoreList.map((readMore, index)=>
              <div className='mt-3'>
                <div className='flex flex-row my-10'>
                    <img className='rounded' src={readMore.imgUrl} alt="" />
                    <div className='ml-6 h-[100%] my-auto max-w-[600px]'>
                        <h3 className='font-medium text-[#161518] text-2xl'>{readMore.tittle}</h3>
                        <span className='font-medium text-base text-[#B1B0B9] inline-block mt-2'>{readMore.date}</span>
                        <p className='text-[#82808F] text-xl font-[450px] mt-4'>{readMore.text}</p>
                    </div>
                </div>
              </div>
        )}
<div className='py-20'>
  
          <div className='py-2 w-[80px] mx-auto overflow-x-scroll'>
              <a href="" className="px-2">1</a><a href="" className="px-2">2</a><a href="" className="px-2">3</a><a href="" className="px-2">4</a><a href="" className="px-2">5</a><a href="" className="px-2">6</a><a href="" className="px-2">7</a><a href="" className="px-2">8</a><a href="" className="px-2">9</a><a href="" className="px-2">10</a><a href="" className="px-2">11</a><a href="" className="px-2">12</a>
          </div>
</div>
    </div>
  )
}

export default ReadMore
