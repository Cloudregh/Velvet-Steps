import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#FFDAB9] pt-16 pb-8">
        <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between mb-12">
                <div className="mb-8 md:mb-0">
                    <h4 className="font-medium text-poppins text-[#8B4302] mb-4 text-sm tracking-wider">Home</h4>
                    <ul>
                        <li><a href="#" className="hover:text-[#8B4302]">About</a></li>
                        <li><a href="#" className="hover:text-[#8B4302]">Collections</a></li>
                        <li><a href="#" className="hover:text-[#8B4302]">Contact</a></li>
                    </ul>
                </div>
                <div></div>
            </div>
        </div>
    </footer>
  )
}

export default Footer