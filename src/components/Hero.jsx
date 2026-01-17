import React from 'react'
import {ShoppingCart} from 'lucide-react'
import HeroImage from '../assets/HeroImage.png'

const Hero = () => {
  return (
    <section className=' relative w-full h-[600px] bg-[#FFFBF9] overflow-hidden flex items-center justify-center'>

      <div className='relative z-10 container mx-auto px-8 flex flex-col md:flex-row items-center justify-between'> 
       
        {/* Left Container*/}
        <div className='md:w-[60%] flex justify-center mt-10 md:mt-0 relative'>
          <div className='w-[990px] h-[990px]  relative z-20 mt-[450px]'>
            <img src={HeroImage} alt="Pointed Stiletto Heel Low-Cut High Heels"/>
          </div>
        </div>
        {/*Background text */}
       <div className='absolute top-1/2 left-1/8 transform -translate-x-1/2 -translate-y-1/2 text-[200px] font-montserrat font-bold text-[#8B4302] opacity-11 select-none z-10 leading-[0.8]'>
       PRA <br/>
       DA
       </div>
          

        {/* Right Container*/} 
         <div className='md:w-1/2 space-y-8 px-[50px]'>
         <h1 className='text-32xl md:text-5xl font-playfair font-bold text-[#000000] leading-normal'>
          Pointed Stiletto <br/>
          Heel Low-Cut <br/>
          High Heels
         </h1>
         <div className='flex space-x-4 pt-4'>
          <button className='bg-[#FFDAB9] text-[#8B4302] font-montserrat-semibold px-8 py-3 rounded-xl hover:bg-opacity-90 transition'>
            Shop Now
          </button>
          <button className='bg-[#FFDAB9] text-[#8B4302] font-montserrat-semibold px-8 py-3 rounded-xl hover:bg-opacity-90 transition flex items-center'>
            <ShoppingCart className='w-5 h-5 mr-2'/>
            Add to Cart 
          </button>
         </div>
         </div>
      </div>
    </section>
  )
}

export default Hero