import React from 'react'
import {ShoppingCart} from 'lucide-react'

const Hero = () => {
  return (
    <section className=' relative w-full h-[600px] bg-[#FFFBF9] overflow-hidden flex items-center justify-center'>
      {/*Background text */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[15rem] font-montserrat font-bold text-[#8B4302] opacity-11 select-none z-0'>
      PRADA
      </div>
      <div className='relative z-10 container mx-auto px-8 flex flex-col md:flex-row items-center justify-between'> </div>
    </section>
  )
}

export default Hero