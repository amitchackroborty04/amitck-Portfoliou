"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { FlipText } from "@/components/magicui/flip-text";
import { Particles } from "@/components/magicui/particles";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

// import reacticon from "@/../public/imge/react.png"
// import icon from "../../../public/imge/react.png"

const Hero = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const clone = marquee.innerHTML;
      marquee.innerHTML += clone; // Duplicate cards for seareactmless effect
    }
  }, []);

 
  
 
  return (
    <section className="bg-gradient-to-r from-[#04016C]/80 to-[#4A16BD]/80 dark:from-[#1A1A29] dark:to-[#1A1A29]">
      <div className="container flex flex-col lg:flex-row gap-y-10 lg:gap-x-10 items-center pt-[117px] relative">
        {/* Text and buttons container */}
        <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={10}
        color={"#7562E0"}
        refresh
      />
        <div className="w-full lg:w-[50%] text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[32px] text-[#FFFFFF] font-semibold"
          >
            Hello, I’m
          </motion.h1>
          <FlipText className=" !text-[25px] lg:!text-[52px] text-[#FFFFFF] font-semibold mt-2">
            Amit Chakraborty
          </FlipText>
          <p className="text-[18px] text-[#FFFFFF] font-medium mt-2 w-full   lg:w-[435px]">
            Freelance UI designer, Fullstack developer, & Data Miner. I create
            seamless web experiences for end-users.
          </p>
          <div className="mt-7 flex justify-center lg:justify-start">
            <ShimmerButton className="text-base !text-black  dark:text-[#FFFFFF]  font-semibold border-[1px] border-[#7562E0]  py-3 px-6 rounded-[12px] ">
              About me
            </ShimmerButton>
            <ShimmerButton className="text-base !text-black dark:text-[#FFFFFF] font-semibold border-[1px] border-[#7562E0]  py-3 px-6 rounded-[12px]  ml-5">
              Project
            </ShimmerButton>
          </div>
          <div className="w-full h-[80px] md:h-[128px] dark:bg-[#181824] bg-[#FFFFFF] absolute bottom-0 left-0 overflow-x-hidden ">
            {/* <div
              ref={marqueeRef}
              className="flex gap-4 min-w-max animate-marquee"
            >
              <Card title="html" src="/imge/react.png" />
              <Card title="css" src="/imge/react.png" />
              <Card title="bootstrap" src="/imge/react.png" />
              <Card title="tailwind" src="/imge/react.png" />
              <Card title="React" src="/imge/react.png" />
              <Card title="nextjs" src="/imge/react.png" />
            </div> */}
          </div>
        </div>

        {/* Image container */}
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full lg:w-[50%] flex justify-center sm:w-full mt-5 lg:mt-0 "
        >
          <Image
            src="/imge/hero.png"
            alt="hero"
            width={500}
            height={600}
            className="w-full sm:w-full object-cover max-w-[500px] mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
