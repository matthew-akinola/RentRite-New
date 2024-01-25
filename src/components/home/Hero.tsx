import React from 'react';

const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${"images/about1.jpg"})` }} className='bg-cover bg-no-repeat h-[100vh] w-full relative z-[-1]'>
      <div style={{backgroundColor:'rgba(0,0,0,0.7)'}} className='w-full h-full absolute top-0 left-0 z-[-1]'></div>
    </div>
  );
}

export default Hero;
