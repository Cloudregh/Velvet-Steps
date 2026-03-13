import React from 'react'
import Ankle_Strap_Chunky_Heels from "../assets/Ankle_Strap_Chunky_Heels.jpg"
import Boots from "../assets/Boots.jpg"
import Cross from "../assets/Cross.jpg"

const FavSection = () => {
  return (
    <section className='py-16 bg-white relative overflow-hidden'>
      <div className='relative w-full py-12 flex items-center justify-center mb-10 overflow-hidden'>
        <div className='absolute inset-0 flex items-center justify-center text-5xl md:text-7xl font-playfair-sc text-[#E7E4E4] select-none tracking-widest pointer-events-none whitespace-nowrap opacity-60'>
          CUSTOMER FAVORITES
        </div>
        <h2 className='relative z-10 text-center text-3xl md:text-4xl font-playfair text-[#8B4302]'>
           shop the lineup
        </h2>
       </div>
      <div className='max-w-7xl mx-auto px-4 mb-16'>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Top Left: Heels */}
            <div className="relative h-[400px] md:h-[500px] md:col-span-7 group overflow-hidden rounded-[45px]">
                <img src={Ankle_Strap_Chunky_Heels} alt="Ankle Strap Chunky Heels"
                className="w-[699px] h-[506px] object-center transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute bottom-10 left-10 max-w-[80%]">
                    <h3 className="font-playfair text-[#000000] text-[32px] md:text-[45px] leading-tight">Ankle Strap <br/>Chunky Heels</h3>
                </div>
            </div>

            {/* Top Right: Boots */}
            <div className="relative h-[400px] md:h-[500px] md:col-span-5 group overflow-hidden rounded-[45px]">
                <img src={Boots} alt="Punk Style Boots" 
                className="w-full h-full object-cover object-[center_75%] transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute top-10 left-6 max-w-[80%]">
                    <h3 className="font-playfair text-[#8B4302] text-[16px] md:text-[32px] leading-tight flex flex-col gap-1">
                        <span>Punk Style Boots</span>
                        <span className="text-[20px] md:text-[20px]">Faux Suede Lace-up <br/>Front Boots</span>
                    </h3>
                </div>
            </div>

            {/* Bottom: Cross (Full Width) */}
            <div className="relative h-[400px] md:h-[500px] md:col-span-12 group overflow-hidden rounded-[45px]">
                <img src={Cross} alt="Women Criss Cross Tie Leg Flat Sandals"
                className="w-[1344px] h-[496px] object-center transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-10 left-10 max-w-[50%] text-right">
                    <h3 className="font-playfair text-[#8B4302] text-[28px] md:text-[40px] leading-tight">Women Criss Cross Tie <br/>Leg Flat Sandals,</h3>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default FavSection