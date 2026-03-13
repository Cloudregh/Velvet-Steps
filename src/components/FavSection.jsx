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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[600px]">
            {/*Large Left Item*/}
            <div className="relative h-full group overflow-hidden bg-gray-100 rounded-[45px]">
                <img src={Ankle_Strap_Chunky_Heels} alt="Ankle Strap Chunky Heels"
                className="w-full h-full object-center transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute bottom-6 left-6">
                    <h3 className="font-playfair-sc font-regular text-[#000000] px-4 py-2 inline-block text-[40px]">Ankle Strap <br/>Chunky Heels</h3>
                </div>
            </div>
            {/*Right Column */}
            <div className="grid grid-rows-2 gap-6 h-full">

            {/* Top Right */}
            <div className="relative h-full group overflow-hidden rounded-[45px]">
                <img src={Boots} alt="Punk Stlye Boots" 
                className="w-full h-full object-center transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute bottom-6 left-6">
                    <h3 className="font-playfair-sc font-regular text-[#8B4302] px-4 py-2 inline-block text-[40px]">Punk Style Boots <br/>Faux Suede Lace-up <br/>Front Boots</h3>
                </div>
            </div>

            {/* Bottom Right */}

            <div className="relative h-full group overflow-hidden rounded-[45px]">
                <img src={Cross} alt="Cross"
                className="w-full h-full object-center transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute bottom-6 left-6">
                    <h3 className="font-playfair-sc font-regular text-white px-4 py-2 inline-block text-[40px]">Cross</h3>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default FavSection