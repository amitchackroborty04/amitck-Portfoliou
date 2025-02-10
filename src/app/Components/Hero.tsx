import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#04016C]/80 to-[#4A16BD]/80 dark:from-[#1A1A29] dark:to-[#1A1A29]">
      <div className="container flex flex-col lg:flex-row gap-y-10 lg:gap-x-10 items-center pt-[117px] relative">
        {/* Text and buttons container */}
        <div className="w-full lg:w-[50%] text-center lg:text-left">
          <h1 className="text-[32px] text-[#FFFFFF] font-semibold">Hello, I’m</h1>
          <h2 className="text-[40px] lg:text-[52px] text-[#FFFFFF] font-semibold mt-2">
            Amit <span className='text-[#4BE5CA] dark:text-[#FFFFFF]'> Chak</span>raborty
          </h2>
          <p className="text-[18px] text-[#FFFFFF] font-medium mt-2 mx-auto lg:w-[435px]">
            Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences for end-users.
          </p>
          <div className='mt-7 flex justify-center lg:justify-start'>
            <button className="text-base text-[#FFFFFF] font-semibold border-[1px] border-[#7562E0] hover:bg-[#7562E0] py-3 px-6 rounded-[12px] hover:scale-95 duration-300">
              About me
            </button>
            <button className="text-base text-[#FFFFFF] font-semibold border-[1px] border-[#7562E0] hover:bg-[#7562E0] py-3 px-6 rounded-[12px] hover:scale-95 duration-300 ml-5">
              Project
            </button>
          </div>
        </div>
        
        {/* Image container */}
        <div className="w-full lg:w-[50%] flex justify-center sm:w-full mt-5 lg:mt-0">
          <Image 
            src="/imge/hero.png" 
            alt="hero" 
            width={500} 
            height={600} 
            className="w-full sm:w-full object-cover max-w-[500px] mx-auto" 
          />
        </div>
      </div>
    </section>
  )
}

export default Hero;
