import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedClient from './components/TrustedClient'
import About from './components/About'
import State from './components/State'
import Packages from './components/Packages'
import  Contact from './components/Contact'
import Footer from './components/Footer'

const page = () => {
  return (
    <div className='bg-black text-white min-h-screen'>
      <Navbar />
      <Hero />
       <About /> 
      <State />
      <Packages/>
      <TrustedClient/> 
      < Contact/>
      <Footer/>


      
    </div>
  )
}

export default page