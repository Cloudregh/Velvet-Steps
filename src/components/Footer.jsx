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
                    <ul className="space-y-2 text-sm text-[]"></ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer