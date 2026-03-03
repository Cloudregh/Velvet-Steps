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
      <div className='absolute top-0 left-0 w-full h-full text-center text-7xl font-playfair-sc text-[#E7E4E4] select-none tracking-widest pointer-events-none'>
          PRODUCTS OF THE SEASON
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <h2 className='text-center text-3xl font-playfair text-[#8B4302] mb-10'>
           Step into Style
        </h2>
      

       <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {products.map((product)=>(
          <div key={product.id} className='group cursor-pointer'>
            <div className='bg-[#FFFBF9] h-40 w-40 mb-4 flex items-center justify-center overflow-hidden'>
              <img src={product.image} alt={product.name}
              className='w-full h-full object-fit transition-transform duration-300 group-hover:scale-105' />
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h3 className='text-3 font-merriweather font-regular text-[#8B4302]'>{product.name}</h3>
              <div className='flex text-[#8B4302]'>
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className={`w-4 h-4 ${index < product.rating ? `fill`: 'text-[#8B4302]'}`}/>
                ))}
              </div>
              <span className='text-3 font-bold text-[#8B4302]'> Ghc {product.price}</span>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};
export default Products;