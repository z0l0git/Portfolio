import { CiLocationOn } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { FiGithub, FiTwitter, FiFigma } from "react-icons/fi";
import Image from "next/image";

export const Introduction = () => {
  return (
    <div className="px-[80px] py-[96px] max-w-screen-6xl gap-[48px]  ">
      <div className="px-[32px] flex justify-between gap-[48px] flex-col-reverse md:flex-row">
        <div className="flex flex-col gap-[48px] w-3/4">
          <div>
            <h2 className="text-[60px] font-bold">Hi, I'm Okay 👋</h2>
            <p className="textGray text-[16px]">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>
          <div>
            <div className="flex items-center textGray">
              <CiLocationOn size={25} />
              <p>Ulaanbaatar, Mongolia</p>
            </div>
            <div className="flex items-center textGray">
              <GoDotFill />
              <p>Available for now</p>
            </div>
          </div>
          <div className="flex gap-3">
            <FiGithub size={30} />
            <FiTwitter size={30} />
            <FiFigma size={30} />
          </div>
        </div>
        <div className="w-[400px] h-[360px] pos-relative flex justify-end items-center">
          <Image
            src="/raccon.jpeg"
            width={280}
            height={300}
            className="pos-absolute top-0 left-0 w-[280px] h-[320px]"
          ></Image>
          <div className="w-[280px] h-[320px] bg-gray-200 pos-absolute top--30 z-[2]"></div>
        </div>
      </div>
    </div>
  );
};
