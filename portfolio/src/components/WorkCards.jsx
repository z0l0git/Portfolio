import Image from "next/image";
import { Tag } from "@/components/Tag";
import { RiShareBoxLine } from "react-icons/ri";

export const WorkCards = (props) => {
  const {
    isEven = false,
    tag = [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "Figma",
      "Tailwindcss",
      "Git",
      "Cypress",
    ],
  } = props;

  const EvenStyle = "flex flex-col md:flex-row-reverse imageShadow";
  const OddStyle = "flex flex-col md:flex-row imageShadow";

  return (
    <div className={isEven ? EvenStyle : OddStyle}>
      <div className="p-[32px] md:p-[48px] w-full md:w-1/2 flex items-center justify-center">
        <Image src="/picture.png" width={480} height={384} />
      </div>
      <div className="p-[32px] md:p-[48px] w-full md:w-1/2 flex flex-col justify-start gap-[24px] text-gray-600 ">
        <h2 className=" text-[20px] font-bold text-gray-900">Fiskill</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="flex flex-wrap gap-[8px] w-full">
          {tag.map((com, i) => {
            return <Tag key={i} text={com}></Tag>;
          })}
        </div>
        <RiShareBoxLine size={24} />
      </div>
    </div>
  );
};
