import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="px-[80px] py-[24px]">
      <div className="flex gap-[8px] w-full justify-center items-center">
        <FaRegCopyright />
        <p className="text-[14px] leading-[20px] font-[400]">
          2024 | Made by Zolo
        </p>
      </div>
    </div>
  );
};
