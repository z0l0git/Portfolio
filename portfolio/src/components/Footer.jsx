import { FaRegCopyright } from "react-icons/fa";
import { useRef } from "react";

export const Footer = () => {
  const footer = useRef(null);
  return (
    <div ref={footer} className="px-[80px] py-[24px] dark:bg-[#111827]">
      <div className="flex gap-[8px] w-full justify-center items-center">
        <FaRegCopyright />
        <p className="text-[14px] leading-[20px] font-[400]">
          2024 | Made by Zolo
        </p>
      </div>
    </div>
  );
};
