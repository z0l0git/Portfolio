import { Tag } from "@/components/Tag";
import { IoCopyOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FiGithub, FiTwitter, FiFigma } from "react-icons/fi";
import { useCopyToClipboard } from "usehooks-ts";
import { useState } from "react";
import { useRef } from "react";

export const ContactPage = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };
  const [value, copy] = useCopyToClipboard();
  const contact = useRef(null);

  return (
    <div
      ref={contact}
      id="contact"
      className="px-[16px] md:px-[80px] py-[64px] md:py-[96px] flex flex-col gap-[24px] md:gap-[48px]"
    >
      <div>
        <div className="flex items-center justify-center w-full mb-[16px]">
          <Tag text="Get in touch"></Tag>
        </div>
        <div className="flex items-center justify-center w-full mb-[48px] text-gray-600">
          <p className="text-[20px] text-center dark:text-[#D1D5DB]">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[16px]">
        <div className="flex items-end justify-center gap-[16px] md:gap-[20px]">
          <CiMail size={32} />
          <p className="text-[18px] md:text-[36px] font-[600] leading-[40px]">
            zolbayar.in@gmail.com
          </p>

          <IoCopyOutline
            size={32}
            onClick={() => {
              copy("zolbayar.in@gmail.com");
              handleClick();
            }}
            cursor={"pointer"}
          />
        </div>

        <div className="flex items-end justify-center gap-[16px] md:gap-[20px]">
          <FiPhone size={32} data-tooltip-id="my-tooltip-click" />
          <p className="text-[18px] md:text-[36px] font-[600] leading-[40px]">
            +976 80052392
          </p>
          <IoCopyOutline
            size={32}
            onClick={() => {
              copy("+976 80052392");
              handleClick();
            }}
            cursor={"pointer"}
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[8px] ">
        <p className="text-gray-600 dark:text-[#D1D5DB]">
          You may also find me on these platforms!
        </p>
        <div className="flex gap-3">
          <FiGithub size={24} />
          <FiTwitter size={24} />
          <FiFigma size={24} />
        </div>
        {open && (
          <p className="fixed bottom-20 w-[70px] h-[30px] bg-black dark:bg-white text-white dark:text-black flex items-center justify-center rounded-xl">
            Copied!
          </p>
        )}
      </div>
    </div>
  );
};
