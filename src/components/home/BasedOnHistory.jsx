import React, { useEffect, useState } from 'react'
import { HeaderTextSM } from '../shared/typographs/Typo'
import { ApartmentCards } from '../shared/others/cards'
import useFetchApartment from '../../hooks/fetchApartment'
import { Container, GridContainer4 } from '../shared/containers/container'


const BasedOnHistory = () => {
    const {myData} = useFetchApartment()
    const [data, setData] = useState([])
    
    
    useEffect(()=>{
      setData(myData)
    },[myData])


  return (
    <Container>
        <div className='py-3rem space-y-5'>
            <HeaderTextSM align={'left'} text={'Properties for sale “Based on your history”'} />

            {
                  data.length > 0?
                  
                    <GridContainer4>
                    {
                      data.slice(0,4)?.map((apt, ind)=>
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

export default BasedOnHistory


