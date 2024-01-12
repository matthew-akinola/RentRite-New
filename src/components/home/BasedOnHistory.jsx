import React from 'react'
import { HeaderTextSM } from '../shared/typographs/Typo'
import { ApartmentCards } from '../shared/others/cards'

const BasedOnHistory = () => {

    const apartmentList = [
        {
            img: '',
            title: 'HMMM',
            price: '100k',
            location: 'Ikeja, Lagos',
            agent: 'Awilo',
            like: true,
            type: 'Hostel'
        },
        {
            img: '',
            title: 'HMMM',
            price: '100k',
            location: 'Ikeja, Lagos',
            agent: 'Awilo',
            like: true,
            type: 'Hostel'
        },
        {
            img: '',
            title: 'HMMM',
            price: '100k',
            location: 'Ikeja, Lagos',
            agent: 'Awilo',
            like: true,
            type: 'Hostel'
        },
        {
            img: '',
            title: 'HMMM',
            price: '100k',
            location: 'Ikeja, Lagos',
            agent: 'Awilo',
            like: true,
            type: 'Hostel'
        },

    ]


  return (
    <div className='container'>
        <HeaderTextSM align={'left'} text={'Properties for Sales "Based on your history"'} />

        <div className='flex g'>
            <button className='border-b border-3 border-primary py-1'>All</button>
            <button className='border-b border-3 border-primary py-1'>Commercial Properties</button>
            <button className='border-b border-3 border-primary py-1'>Apartments/Flats/Hotels</button>
            <button className='border-b border-3 border-primary py-1'>Houses</button>
            <button className='border-b border-3 border-primary py-1'>Land</button>
            <button className='border-b border-3 border-primary py-1'>Event Centers</button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
            {
                apartmentList?.map((item, index)=>
                    <ApartmentCards 
                        img={item.img}
                        location={item.location}
                        price={item.price}
                        title={item.title}
                        like={item.like}
                        type={item.type}
                        agent={item.agent}
                    />
                )
            }
            
        </div>

        <div>
            <Link to={''}>View More</Link>
        </div>
    </div>
  )
}

export default BasedOnHistory


