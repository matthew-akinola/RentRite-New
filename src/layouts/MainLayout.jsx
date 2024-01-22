import React from 'react'
import Footer from '../components/common/footer/Footer'
import NavBar from '../components/common/topnav/NavBar'
import Prefooter from '../components/common/prefooter/Prefooter'

const MainLayout = ({children}) => {
  return (
    <>
        <NavBar/>
            {children}
            <Prefooter/>
        <Footer/>
    </>
  )
}

export default MainLayout