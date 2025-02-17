import Image from "next/image";
import React from "react";

const Card = ({title,src}:{title:string,src:any}) => {
  return (
    <div className="p-[14px]">
      <div className="border-[1px] border-[#7562E0] w-[50px] md:w-[100px] h-[50px] md:h-[100px] flex flex-col justify-center items-center rounded-tr-[20px] rounded-bl-[20px] py-2 md:py-0 shadow-lg">
        <Image
          src={src}
          alt="react"
          width={50}
          height={50}
          className="w-[20px] md:w-[50px] h-[20px] md:h-[50px]  object-cover rounded-full"
        />
        <p className="text-sm md:text-[20px] text-[#7562E0] dark:text-[#FFFFFF]  font-bold mt-2 uppercase">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Card;
