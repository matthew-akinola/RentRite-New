import React, { useEffect, useState } from 'react'
import { HeaderTextSM } from '../shared/typographs/Typo'
import { ApartmentCards } from '../shared/others/cards'
import HOME from '../../assets/images/about1.jpg'
import Container from '../../layouts/Container'
import useFetchApartment from '../../hooks/fetchApartment'
import { GridContainer4 } from '../shared/containers/container'

const ProperityForSale = () => {

    const {myData} = useFetchApartment()
    const [data, setData] = useState([])
    const [apartments, setApartments] = useState([])
    const [tab, setTab] = useState('all')
    const [searchQuery, setSearchQuery] = useState("");
    
    useEffect(()=>{
      setApartments(myData)
    },[myData])

    useEffect(()=>{
        if (apartments){
            if (tab !== 'all'){
                const new_data = apartments.filter((item)=> item.category.includes(tab))
                console.log('new',new_data)
                setData(new_data)                
            }else{
                setData(apartments)
            }

        }
        
    },[tab])

  return (
    <Container >
        <div className='py-3rem space-y-5'>
            <HeaderTextSM align={'left'} text={'Properties for Sales in Nigeria'} />

            <div className='flex space-x-4 py-4'>
                <button onClick={()=>setTab('all')} className={`${tab==='all' && 'border-b border-3 border-primary'} py-1`}>All</button>
                <button onClick={()=>setTab('Commercial')} className={`${tab==='Commercial' && 'border-b border-3 border-primary'} py-1`}>Commercial Properties</button>
                <button onClick={()=>setTab('Apartment')} className={`${tab==='Apartment' && 'border-b border-3 border-primary'} py-1`}>Apartments/Flats/Hotels</button>
                <button onClick={()=>setTab('Houses')} className={`${tab==='Houses' && 'border-b border-3 border-primary'} py-1`}>Houses</button>
                <button onClick={()=>setTab('Land')} className={`${tab==='Land' && 'border-b border-3 border-primary'} py-1`}>Land</button>
                <button onClick={()=>setTab('Event')} className={`${tab==='Event' && 'border-b border-3 border-primary'} py-1`}>Event Centers</button>
            </div>

            {
                  data.length > 0?
                    <GridContainer4>
                    {
                      data.slice(0,8)?.map((apt, ind)=>
                          <ApartmentCards 
                          key={ind}
                          img={apt.pictures[0]?.image}
                          location={apt.short_address}
                          price={apt.f_price}
                          title={apt.title}
                          like={apt.like}
                          type={apt.category}
                          agent={apt.agent.name}
                      />)
                    }
                    </GridContainer4>
                  : data.length === 0? <h1>No Result Found</h1> :
                  <h1>Loading Apartments....</h1>
                }
        </div>

    </Container>
  )
}

export default ProperityForSale


