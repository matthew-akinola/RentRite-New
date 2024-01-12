import React from 'react'
import Footer from '../components/common/footer/Footer'
import NavBar from '../components/common/topnav/NavBar'

const MainLayout = ({children}) => {
  return (
    <>
        <NavBar/>
            {children}
        <Footer/>
    </>
  )
}

export default MainLayout