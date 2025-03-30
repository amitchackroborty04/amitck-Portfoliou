"use client";

import { motion } from "framer-motion";

const Overveiw = () => {
  return (
    <section className="bg-gradient-to-r from-[#04016C]/80 to-[#4A16BD]/80 dark:from-[#1A1A29] dark:to-[#1A1A29] pt-[80px]">
      <div className="container">
        <motion.h2 
         initial={{ opacity: 0, x: -50 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[32px]  text-white font-semibold text-center md:text-left">
          Over<span className="text-[#4BE5CA]">view</span> :
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-white font-medium mt-6 text-center md:text-left leading-relaxed text-justify"
        >
          {/* <AuroraText> */}
          Hello, I&apos;m a passionate MERN Stack Developer. I specialize in
          building dynamic, responsive, and performant web applications. My
          focus is on writing clean, efficient code and delivering delightful
          user experiences. I enjoy solving problems and am constantly learning
          to improve my skills.
          {/* </AuroraText> */}
        </motion.p>
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
         className="flex flex-col md:flex-row items-center  gap-4 mt-6">
          <div className="  flex justify-between ">
            <h3 className="text-[70px] md:text-[96px] text-[#FFFFFF] dark:text-[#4BE5CA]">
              2+
            </h3>
          </div>
          <div className=" flex justify-center ">
            <p className="text-xl  md:text-[24px] text-white text-center md:text-left font-medium">
              Years of experience. Specialised in building apps, while ensuring
              a seamless web experience for end users.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Overveiw;
