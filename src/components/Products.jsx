import React from 'react'
import { Star } from 'lucide-react'
import {Block} from "./assets/Block.png"
import {Espadrilles} from "./assets/Espadrilles.png"
import {Gladiator} from "./assets/Gladiator.png"
import {Heeled} from "./assets/Heeled.png"
import {Knee_high_Boots} from "./assets/Knee_high_Boots.png"
import {Fuzzy_Slippers} from "./assets/Fuzzy_Slippers.png"



const products = [
    { id:1, name:"Block Heels Sandals", price:300, rating:5, image:{Block}},
    { id:2, name:"Heeled sandals", price:450, rating:5, image:{Heeled}},
    { id:3, name:"Gladiator Sandals", price:250, rating:5, image:{Gladiator}},
    { id:4, name:"Knee-high Boots", price:320, rating:5, image:{Knee_high_Boots}},
    { id:5, name:"Espadrilles", price:280, rating:5, image:{Espadrilles}},
    { id:6, name:"Fuzzy Slippers", price:380, rating:5, image:{Fuzzy_Slippers}},

];

export const Products = () => {
  return (
    <section className='py-16 bg-white relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full text-center text-8xl font-playfair-sc text-[#E7E4E4] select-none z-0 tracking-widest pointer-events-none'>
          PRODUCTS OF THE SEASON
      </div>
    </section>
  )
}
export default Products;