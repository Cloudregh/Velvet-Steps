import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import FavSection from './components/FavSection'
import Payment from './components/Payment'

function  App (){
  return (
    <div className='min-h-screen text-semibold'>
      <Navbar/>
      <Hero/>
      <Products/>
      <FavSection/>
      <Payment/>
    </div>
  )
}
export default App;