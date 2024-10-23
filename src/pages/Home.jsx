import React from 'react'
import Headerdropdown from '../components/Header/Headerdropdown'
import Navbar from '../components/Header/Navbar'
import Start from '../components/Start/Start'
import ShoesList from '../components/Card/ShoeList'
import Footer from '../components/Footer/Footer'


const Home = () => {
  return (
    <>
    <Headerdropdown />
    <Navbar/>
    <Start/>
    <ShoesList/>
    <Footer/>
    </>
  )
}

export default Home
