import React from 'react'
import {ShoppingCart} from 'lucide-react'

const Hero = () => {
  return (
    <section className=' relative w-full h-[600px] bg-[#FFFBF9] overflow-hidden flex items-center justify-center'>

      <div className='relative z-10 container mx-auto px-8 flex flex-col md:flex-row items-center justify-between'> 
       
        {/* Left Container*/}
        {/*Background text */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[15rem] font-montserrat font-bold text-[#8B4302] opacity-11 select-none z-0'>
       PRA <br/>
       DA
      </div>
        <div className='md:w-1/2 flex justify-center mt-10 md:mt-0 relative'>
          <div className='w-[400px] h-[400px] relative '>
             <img src="" alt="" />
          </div>
        </div>

        {/* Right Container*/} 
         <div className='md:w-1/2 space-y-6'>
         <h1 className='text-3xl md:text-5xl font-playfair font-bold text-[#000000] leading-tight'>
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