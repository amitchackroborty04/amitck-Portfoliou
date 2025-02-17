"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Card from "./Card";
import { motion } from "framer-motion";
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };
  const name = "Amit Chakraborty";
  const highlight = "Cha";
  return (
    <section className="bg-gradient-to-r from-[#04016C]/80 to-[#4A16BD]/80 dark:from-[#1A1A29] dark:to-[#1A1A29]">
      <div className="container flex flex-col lg:flex-row gap-y-10 lg:gap-x-10 items-center pt-[117px] relative">
        {/* Text and buttons container */}
        <div className="w-full lg:w-[50%] text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }} 
           className="text-[32px] text-[#FFFFFF] font-semibold">
            Hello, I’m
          </motion.h1>
          <h2 className="text-[30px] lg:text-[52px] text-[#FFFFFF] font-semibold mt-2">
      {name.split("").map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className={highlight.includes(char) ? "text-[#4BE5CA] dark:text-[#FFFFFF]" : ""}
        >
          {char}
        </motion.span>
      ))}
    </h2>
          <p className="text-[18px] text-[#FFFFFF] font-medium mt-2 w-full   lg:w-[435px]">
            Freelance UI designer, Fullstack developer, & Data Miner. I create
            seamless web experiences for end-users.
          </p>
          <div className="mt-7 flex justify-center lg:justify-start">
            <button className="text-base text-[#FFFFFF] font-semibold border-[1px] border-[#7562E0] hover:bg-[#7562E0] py-3 px-6 rounded-[12px] hover:scale-95 duration-300">
              About me
            </button>
            <button className="text-base text-[#FFFFFF] font-semibold border-[1px] border-[#7562E0] hover:bg-[#7562E0] py-3 px-6 rounded-[12px] hover:scale-95 duration-300 ml-5">
              Project
            </button>
          </div>
          <div className="w-full h-[80px] md:h-[128px] dark:bg-[#181824] bg-[#FFFFFF] absolute bottom-0 left-0 ">
            <div
              ref={marqueeRef}
              className="flex gap-4 min-w-max animate-marquee"
            >
              <Card title="html" src="/imge/react.png" />
              <Card title="css" src="/imge/react.png" />
              <Card title="bootstrap" src="/imge/react.png" />
              <Card title="tailwind" src="/imge/react.png" />
              <Card title="React" src="/imge/react.png" />
              <Card title="nextjs" src="/imge/react.png"/>
            </div>
          </div>
        </div>

        {/* Image container */}
        <motion.div
         initial={{ opacity: 0, x: 50 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.9, ease: "easeOut" }}
         className="w-full lg:w-[50%] flex justify-center sm:w-full mt-5 lg:mt-0">
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
