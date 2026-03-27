import React, { useState } from 'react'
import { ArrowLeft, ArrowRight, ShoppingBag, Share2, Star, StarHalf, X } from 'lucide-react'
import top from '../assets/top.png'
import front from '../assets/front.png'
import HeroImage from '../assets/HeroImage.png'

const Payment = () => {
  const [currentImage, setCurrentImage] = useState(0);
  // Pad images to match the 4 dots in the design
  const images = [top, front, HeroImage, top];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="w-full bg-white font-playfair flex flex-col">
      <div className='relative w-full py-12 flex items-center justify-center mb-4 md:mb-10 overflow-hidden'>
        <div className='absolute inset-0 flex items-center justify-center text-5xl md:text-7xl font-playfair-sc text-[#E7E4E4] select-none tracking-widest pointer-events-none whitespace-nowrap opacity-60'>
          FAST, EASY & SMART
        </div>
        <h2 className='relative z-10 text-center text-3xl md:text-4xl font-playfair text-[#8B4302]'>
           Pay Now
        </h2>
       </div>

      <div className="w-full h-[80vh] min-h-[600px] relative flex items-center justify-center overflow-hidden">
        
        {/* Top Left Content */}
      <div className="absolute top-12 left-12 md:top-20 md:left-24 z-10 flex flex-col items-start">
        <h3 className="text-xl md:text-3xl text-gray-800 tracking-wide mb-2 md:mb-4">Total Payment</h3>
        <h1 className="text-6xl md:text-8xl font-bold text-black tracking-tighter mb-4 md:mb-6">300ghc</h1>
        <p className="text-xs md:text-sm font-bold text-black tracking-wide mb-1">Pointed Stiletto Heel Low-cut High Heels</p>
        <p className="text-xs md:text-sm font-bold text-black tracking-wide mb-3">Size: 30-45</p>
        
        <div className="flex items-center gap-1">
          {[...Array(4)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-[#8B4302] text-[#8B4302]" />
          ))}
          <div className="relative w-3.5 h-3.5 md:w-4 md:h-4">
            <StarHalf className="w-3.5 h-3.5 md:w-4 md:h-4 fill-[#8B4302] text-[#8B4302] absolute inset-0" strokeWidth={0} />
            <Star className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#8B4302] absolute inset-0" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Top Right Icons */}
      <div className="absolute top-12 right-12 md:top-20 md:right-24 flex items-center gap-6 md:gap-8 z-10 text-[#8B4302]">
        <div className="relative cursor-pointer hover:opacity-80 transition">
          <ShoppingBag className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.8} />
          <div className="absolute -bottom-1 -right-1 w-3 md:w-3.5 h-3 md:h-3.5 bg-[#FCD1A6] rounded-full border-2 border-white"></div>
        </div>
        <Share2 className="w-6 h-6 md:w-7 md:h-7 cursor-pointer hover:opacity-80 transition" strokeWidth={1.8} />
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevImage} 
        className="absolute left-8 md:left-24 bottom-[150px] -translate-y-1/2 p-2 text-[#8B4302] hover:scale-110 transition-transform z-10"
      >
        <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2} />
      </button>

      <button 
        onClick={nextImage} 
        className="absolute right-8 md:right-24 bottom-[150px] -translate-y-1/2 p-2 text-[#8B4302] hover:scale-110 transition-transform z-10"
      >
        <ArrowRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2} />
      </button>

      {/* Main Image */}
      <div className="w-full max-w-2xl px-16 md:px-0 flex items-center justify-center">
        <img 
          src={images[currentImage]} 
          alt="Product" 
          className="w-1/2 h-auto object-contain drop-shadow-2xl mix-blend-multiply"
        />
      </div>

      {/* Bottom Pagination Dots */}
      <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-full transition-colors cursor-pointer ${
              currentImage === index ? 'bg-[#8B4302]' : 'bg-[#FCD1A6]'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
    
      {/* Payment Details Form */}
      <div className="w-full bg-white flex items-center justify-center py-24 px-4 font-sans">
        <div className="w-full max-w-[800px] bg-white rounded-md p-8 md:p-12 relative">
          
          <div className="flex justify-between items-center mb-16 font-playfair">
            <h2 className="text-2xl md:text-3xl text-black">Your Payment Details</h2>
            <button className="text-[#8B4302] hover:opacity-70 transition p-1 absolute top-10 right-10">
              <X className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
            </button>
          </div>

          <div className="flex flex-col gap-10 w-full">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm md:text-base text-gray-400 font-poppins font-light mb-3">Name</label>
              <input type="text" defaultValue="Short Cake" className="w-full text-lg md:text-xl outline-none border-b-2 border-[#FCD1A6] pb-3 text-black bg-transparent font-medium" />
            </div>

            {/* Card Number */}
            <div className="flex flex-col">
              <label className="text-sm md:text-base text-gray-400 font-poppins font-light mb-3">Card Number</label>
              <input type="text" defaultValue="1234 5678 9101 1623" className="w-full text-lg md:text-xl outline-none border-b-2 border-[#FCD1A6] pb-3 text-black bg-transparent tracking-widest font-medium" />
            </div>

            {/* Exp and CVC */}
            <div className="flex flex-col md:flex-row gap-10 w-full mt-2">
               <div className="flex flex-col flex-1">
                 <label className="text-sm md:text-base text-gray-400 font-poppins font-light mb-3">Expiration Date</label>
                 <input type="text" defaultValue="03/25" className="w-full text-lg md:text-xl outline-none border-b-2 border-[#FCD1A6] pb-3 text-black bg-transparent tracking-wider font-medium" />
               </div>
               <div className="flex flex-col flex-1">
                 <label className="text-sm md:text-base text-gray-400 font-poppins font-light mb-3 text-lowercase">cvc/cvv</label>
                 <input type="password" defaultValue="123" className="w-full text-2xl md:text-3xl outline-none border-b-2 border-[#FCD1A6] pb-2 pt-1 text-black bg-transparent tracking-[0.2em] font-medium" />
               </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-3 mt-10 mb-8 pl-8">
               <div className="w-4 h-4 border-2 border-[#8B4302] rounded-sm flex items-center justify-center cursor-pointer">
               </div>
               <span className="text-base md:text-lg font-playfair text-black">Save this information for future use</span>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-6">
               <button className="px-16 md:px-24 py-5 bg-[#FCD1A6] text-black font-poppins font-regular rounded-xl text-xl md:text-2xl hover:bg-opacity-80 transition shadow-sm transform hover:-translate-y-1">
                 Buy Now
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Payment