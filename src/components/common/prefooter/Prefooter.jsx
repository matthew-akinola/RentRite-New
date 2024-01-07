import React from 'react'
import { HeaderTextMD } from '../../shared/typographs/Typo'
import { PryButton } from '../../shared/others/buttons'

const Prefooter = () => {
  return (
    <div>
        <div className='container py-12'>
            <HeaderTextMD align={'left'} text={'Get the Best Deal  for Your Property'} />
            
            <p>Maximize your profit with us, sell with confidence, grow your reputation.</p>

            <PryButton name={'Become a seller'}/>
        </div>
    </div>
  )
}

export default Prefooter