import { Tag } from "@/components/Tag";
import { WorkCards } from "@/components/WorkCards";
import { useRef } from "react";

const data = [
  {
    component: "WorkCards",
    params: {
      isEven: false,
      tag: [
        "React",
        "Next.js",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
  },
  {
    component: "WorkCards",
    params: {
      isEven: true,
      tag: [
        "React",
        "Next.js",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
  },
  {
    component: "WorkCards",
    params: {
      isEven: false,
      tag: [
        "React",
        "Next.js",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
  },
];

export const WorkPage = () => {
  const work = useRef(null);

  return (
    <div className="px-[16px] md:px-[80px] py-[64px] md:py-[96px]">
      <div id="work" ref={work}>
        <div className="flex items-center justify-center w-full mb-[16px]">
          <Tag text="Work"></Tag>
        </div>
        <div className="flex items-center justify-center w-full mb-[48px]  text-gray-600">
          <p className="text-[20px] text-center dark:text-[#D1D5DB]">
            Some of the noteworthy projects I have built:
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[48px]">
        {data.map((com, i) => {
          return (
            <WorkCards
              key={i}
              isEven={com.params.isEven}
              tag={com.params.tag}
            />
          );
        })}
      </div>
    </div>
  );
};
