import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  src: string;
}

const Card: React.FC<CardProps> = ({ title, src }) => {
  return (
    <div className="p-[14px]">
      <div className="border border-[#7562E0] w-[50px] md:w-[150px] h-[50px] md:h-[100px] flex flex-col justify-center items-center rounded-tr-[20px] rounded-bl-[20px] py-2 md:py-0 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <Image
          src={src}
          alt={title}
          width={50}
          height={50}
          className="w-[20px] md:w-[50px] h-[20px] md:h-[50px] object-cover rounded-full"
        />
        <p className="text-sm md:text-[18px] text-[#7562E0] dark:text-white font-medium mt-2 uppercase">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Card;
