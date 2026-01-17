import React from 'react'
import {Search, ShoppingCart, User} from 'lucide-react'
import avatar from '../assets/avatar.jpg'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-2 bg-white shadow-sm relative z-8'>
       <div className='text-[27px] font-aboreto font-regular text-[#8B4302] tracking-wider'>
        VELVET STEPS
    </div>

    <div className='hidden md:flex space-x-4 text-sm font-montserrat-semibold text-[#8B4302]'>
        <a href="#" className='hover:text-[#8A7059] transition-colors'>Home</a>
        <a href="#" className='hover:text-[#8A7059] transition-colors'>Collections</a>
        <a href="#" className='hover:text-[#8A7059] transition-colors'>About</a>
        <a href="#" className='hover:text-[#8A7059] transition-colors'>Contact</a>
    </div>

    <div className='flex items-center space-x-4'>
      <Search className='w-5 h-6 text-[#8B4302] cursor-pointer hover:text-[#8A7059]'/>
      <ShoppingCart className='w-5 h-6 text-[#8B4302] cursor-pointer hover:text-[#BA7059]'/>
      <div className='w-8 h-8 rounded-full bg-[#8B4302] overflow-hidden cursor-pointer'>
        <img src={avatar} alt="User" className='w-full h-full object-cover' />
      </div>
    </div>
    </nav>
  )
}

export default Navbar;