import { Tag } from "@/components/Tag";
import { IoCopyOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FiGithub, FiTwitter, FiFigma } from "react-icons/fi";

export const ContactPage = () => {
  return (
    <div className="px-[16px] md:px-[80px] py-[64px] md:py-[96px] flex flex-col gap-[24px] md:gap-[48px]">
      <div>
        <div className="flex items-center justify-center w-full mb-[16px]">
          <Tag text="Get in touch"></Tag>
        </div>
        <div className="flex items-center justify-center w-full mb-[48px] text-gray-600">
          <p className="text-[20px] text-center">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[16px]">
        <div className="flex items-end justify-center gap-[16px] md:gap-[20px]">
          <CiMail size={32} />
          <p className="text-[18px] md:text-[36px] font-[600] leading-[40px]">
            reachsagarshah@gmail.com
          </p>
          <IoCopyOutline size={32} />
        </div>
        <div className="flex items-end justify-center gap-[16px] md:gap-[20px]">
          <FiPhone size={32} />
          <p className="text-[18px] md:text-[36px] font-[600] leading-[40px]">
            80052392
          </p>
          <IoCopyOutline size={32} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[8px] ">
        <p className="text-gray-600">
          You may also find me on these platforms!
        </p>
        <div className="flex gap-3">
          <FiGithub size={24} />
          <FiTwitter size={24} />
          <FiFigma size={24} />
        </div>
      </div>
    </div>
  );
};
