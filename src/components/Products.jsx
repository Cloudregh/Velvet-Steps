import React from 'react'
import { Star } from 'lucide-react'
import Block from "../assets/Block.png"
import Espadrilles from "../assets/Espadrilles.png"
import Gladiator from "../assets/Gladiator.png"
import Heeled from "../assets/Heeled.png"
import Knee_high_Boots from "../assets/Knee_high_Boots.png"
import Fuzzy_Slippers from "../assets/Fuzzy_Slippers.png"



const products = [
    { id:1, name:"Block Heels Sandals", price:300, rating:5, image:Block},
    { id:2, name:"Heeled sandals", price:450, rating:5, image:Heeled},
    { id:3, name:"Gladiator Sandals", price:250, rating:5, image:Gladiator},
    { id:4, name:"Knee-high Boots", price:320, rating:5, image:Knee_high_Boots},
    { id:5, name:"Espadrilles", price:280, rating:5, image:Espadrilles},
    { id:6, name:"Fuzzy Slippers", price:380, rating:5, image:Fuzzy_Slippers},

];

export const Products = () => {
  return (
    <section className='py-16 bg-white relative overflow-hidden'>
      <div className='relative w-full py-12 flex items-center justify-center mb-10 overflow-hidden'>
        <div className='absolute inset-0 flex items-center justify-center text-5xl md:text-7xl font-playfair-sc text-[#E7E4E4] select-none tracking-widest pointer-events-none whitespace-nowrap opacity-60'>
          PRODUCTS OF THE SEASON
        </div>
        <h2 className='relative z-10 text-center text-3xl md:text-4xl font-playfair text-[#8B4302]'>
           Step into Style
        </h2>
      </div>

      <div className='container mx-auto px-4 md:px-12 lg:px-20 relative z-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
          {products.map((product) => (
            <div key={product.id} className='group cursor-pointer flex flex-col items-center'>
              <div className='bg-[#FFFBF9] aspect-square w-full mb-4 flex items-center justify-center overflow-hidden rounded-xl'>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className='w-3/5 h-3/5 object-contain transition-transform duration-300 group-hover:scale-110' 
                />
              </div>
              <div className='flex flex-col items-center gap-2 text-center'>
                <h3 className='text-sm md:text-base font-merriweather font-regular text-[#8B4302]'>{product.name}</h3>
                <div className='flex text-[#8B4302]'>
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className={`w-4 h-4 ${index < product.rating ? 'fill-current' : 'text-[#8B4302]'}`} />
                  ))}
                </div>
                <span className='text-sm font-medium font-merriweather text-[#8B4302]'>Ghc {product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Products;