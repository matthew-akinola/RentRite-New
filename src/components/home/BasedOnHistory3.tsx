import React, { useEffect, useState } from 'react'
import { HeaderTextSM } from '../shared/typographs/Typo'
import useFetchApartment from '../../hooks/useFetchApartment'
import { Container, GridContainer3, GridContainer4 } from '../shared/containers/container'
import ApartmentCards from '../shared/others/cards'


const BasedOnHistory3 = () => {
  const { myData } = useFetchApartment();
  const [data, setData] = useState<any[]>([]); 

  useEffect(() => {
    setData(myData);
  }, [myData]);

  return (
    <div className='py-3rem space-y-5'>
      <HeaderTextSM align={'left'} text={'Properties for sale “Based on your history”'} />

      {data.length > 0 ? (
        <GridContainer3>
          {data.slice(0, 3)?.map((apt: any, ind: number) => (
            <ApartmentCards
              key={ind}
              img={apt.pictures[0]?.image}
              location={apt.short_address}
              price={apt.f_price}
              title={apt.title}
              like={apt.like}
              type={apt.category}
              agent={apt.agent.name}
            />
          ))}
        </GridContainer3>
      ) : data.length === 0 ? (
        <h1>No Result Found</h1>
      ) : (
        <h1>Loading Apartments....</h1>
      )}
    </div>
  );
}

export default BasedOnHistory3


