'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from "@/../public/imge/logo.png"
import { Darkbutton } from './DarkButton'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className='relative'>
        <div className='container flex justify-between items-center bg-[#D9ECFF80] dark:bg-[#181824] py-5'>
          {/* Logo and mobile toggle */}
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center'>
              {/* <Image src={logo} alt="" width={100} height={100} className='w-[80px] h-[80px] object-cover rounded-full bg-transparent' /> */}
              <h2 className='text-xl lg:text-[28px] text-[#1B2336] dark:text-[#7562E0] font-semibold'>Amit <span className='text-[#2AAA94] dark:text-[#7562E0]'>Chakraborty</span> </h2>
            </div>

            {/* Mobile hamburger button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-2xl text-black dark:text-white"
              >
                {isMenuOpen ? 'X' : '☰'}
              </button>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className='hidden md:flex '>
            <ul className='flex  md:gap-[40px] lg:gap-[80px] items-center  cursor-pointer '>
              <li className='text-[18px] dark:text-[#FFFFFF] text-[#1B2336] font-semibold hover:scale-75 duration-300 '>Home</li>
              <li className='text-[18px] dark:text-[#FFFFFF] text-[#1B2336] font-semibold hover:scale-75 duration-300 text-nowrap'>About me</li>
              <li className='text-[18px] dark:text-[#FFFFFF] text-[#1B2336] font-semibold hover:scale-75 duration-300'>Project</li>
              <li className='text-[18px] dark:text-[#FFFFFF] text-[#1B2336] font-semibold hover:scale-75 duration-300'>Contact</li>
              <div>
                <Darkbutton />
              </div>
            </ul>
          </nav>
        </div>

        {/* Mobile Slide-out Menu */}
        <div 
          className={`md:hidden fixed z-50 top-0 right-0 bg-[#c2c2e4] dark:bg-[#181824] w-[250px] h-full transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}
        >
          {/* Cross button to close menu */}
          <div className="absolute top-4 right-4">
            <button 
              onClick={closeMenu} 
              className="text-2xl text-black dark:text-white"
            >
              X
            </button>
          </div>
          <ul className='flex flex-col items-center justify-center gap-8 pt-20 cursor-pointer'>
            <li className='text-[18px] dark:text-[#FFFFFF] text-[#1B2336] font-semibold hover:scale-75 duration-300'>Home</li>
            <li className='text-[18px] dark:text-[#FFFFFF] text-[#1B2336] font-semibold hover:scale-75 duration-300'>About me</li>
            <li className='text-[18px] dark:text-[#FFFFFF] text-[#1B2336] font-semibold hover:scale-75 duration-300'>Project</li>
            <li className='text-[18px] dark:text-[#FFFFFF] text-[#1B2336] font-semibold hover:scale-75 duration-300'>Contact</li>
            <div>
              <Darkbutton />
            </div>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
