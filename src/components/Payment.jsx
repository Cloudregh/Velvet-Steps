import React, { useState } from 'react'
import {ChevronLeft} from 'lucide-react'
import top from '../assets/top.png'
import front from '../assets/front.png'
import HeroImage from '../assets/HeroImage.png'

const Payment = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
          {top, front, HeroImage}
  ];
  const nextImage =() => setCurrentImage((prev) => (prev + 1 ) % images.length);
  const prevImage =() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  return (
    <section className="py-16 bg-white relative overflow-hidden" >
      <div className='relative w-full py-12 flex items-center justify-center mb-10 overflow-hidden'>
        <div className='absolute inset-0 flex items-center justify-center text-5xl md:text-7xl font-playfair-sc text-[#E7E4E4] select-none tracking-widest pointer-events-none whitespace-nowrap opacity-60'>
          FAST, EASY & SMART
        </div>
        <h2 className='relative z-10 text-center text-3xl md:text-4xl font-playfair text-[#8B4302]'>
           Pay Now
        </h2>
       </div>
       <div className="flex flex-col lg:flex-row bg-[#FFFBF9] overflow-hidden">
        <div></div>
       </div>
    </section>
  )
}

export default Payment