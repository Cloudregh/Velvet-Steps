import { ArrowRight } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#FFDAB9] pt-16 pb-8">
        <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between mb-12">
                <div className="mb-8 md:mb-0">
                    <h4 className="font-medium text-poppins text-[#8B4302] mb-4 text-sm tracking-wider">Home</h4>
                    <ul className="space-y-2 text-sm text-[#8B4302]">
                        <li><a href="#" className="hover:text-black">About</a></li>
                        <li><a href="#" className="hover:text-black">Collections</a></li>
                        <li><a href="#" className="hover:text-black">Contact</a></li>
                    </ul>
                </div>
                <div className="mb-8 md:mb-0">
                    <h4 className="font-medium text-[#8B4302] mb-4 tracking-wider">Help</h4>
                    <ul className="space-y-2 text-sm text-[#8B4302]">
                        <li><a href="#" className="hover:text-black">Shipping & Returns</a></li>
                        <li><a href="#" className="hover:text-black">FAQ</a></li>
                    </ul>
                </div>

                <div className="mb-8 md:mb-0">
                    <h4 className="font-medium text-[#8B4302] mb-4 tracking-wider">Contact</h4>
                        <ul className='space-y-2 text-sm text-[#8B4302]'>
                            <li> 123 Fashion Street </li>
                            <li>Accra, Ghana</li>
                            <li>+233 20 000 0000</li>
                            <li>info@velvetsteps.com</li>
                        </ul>
                </div>
                <div className="mb-8 md:mb-0">
                    <h4 className="font-medium text-[#8B4302] mb-4 tracking-wider">Shop Hours</h4>
                    <ul className="space-y-2 text-sm text-[#8B4302]">
                        <li>Mon - Fri 9:00 - 20:00</li>
                        <li>Sat 10:00 - 18:00</li>
                        <li>Sun Closed</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 bg-[#8B4302] p-6 rounded-lg text-white">
                <h4 className="font-regular text-poppins text-[14px] mb-2"> Subscribe to our newsletter</h4>
                <div className="flex">
                    <input 
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-white w-full px-4 py-2 text-[#A9ACB5] rounded-lg focus:outline-none"
                    />
                    <button className="bg-[#6E4101] text-white px-4 py-2 font-regular rounded-r">
                        <ArrowRight/>
                    </button>
                </div>
                <p className="text-sm text-white mt-3"> Get the latest updates on our new products and upcoming sales</p>
                </div>
            </div>
        </div>

        <div></div>
    </footer>
  )
}

export default Footer