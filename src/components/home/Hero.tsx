import React from 'react';
import SearchForm from './SearchInput';

interface iHero {
  setDisplayType: (e: any) => void
  refetchApartment: (queryParameters: { [key: string]: any }) => void
}
const Hero: React.FC<iHero> = ({setDisplayType, refetchApartment}) => {
  return (
    <section className="bg-hero-bg bg-cover bg-center " style={{ backgroundImage: `url(${"images/about1.jpg"})` }}>
      <div className="flex pt-[6rem]  min-h-screen gap-8 flex-col items-center justify-center px-10 md:px-0" style={{backgroundColor:'rgba(0,0,0,0.7)'}}>
        <h1 className="font-bold text-white text-center pt-10 md:text-5xl max-w-[36.875rem] my-0 mx-auto text-3xl font-outfit">
          Discover Your Perfect Place to Live
        </h1>
        <p className="text-white text-center mb-8 font-normal text-lg">
          Hassle-Free Home Finding Experience
        </p>
        <SearchForm setDisplay={setDisplayType} refetchApartment={refetchApartment}/>
      </div>
    </section>
  );
}

export default Hero;
