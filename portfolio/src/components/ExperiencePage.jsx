import { Tag } from "@/components/Tag";
import { Experiences } from "@/components/Experiences";

const data = [
  {
    component: "Experiences",
    params: {
      title: "Sr. Frontend Developer",
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "Nov 2021 - Present",
    },
  },
  {
    component: "Experiences",
    params: {
      title: "Team Lead",
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "Jul 2017 - Oct 2021",
    },
  },
  {
    component: "Experiences",
    params: {
      title: "Full Stack Developer",
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "Dec 2015 - May 2017",
    },
  },
];
export const ExperiencePage = () => {
  return (
    <div className="bg-gray-50 w-full h-fit px-[16px] md:px-[80px] py-[64px] md:py-[96px] flex flex-col items-center gap-[48px]">
      <div>
        <div className="flex items-center justify-center w-full mb-[16px]">
          <Tag text="Experience"></Tag>
        </div>
        <div className="flex items-center justify-center w-full mb-[48px]  text-gray-600">
          <p className="text-[20px]">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
      </div>
      {data.map((com, i) => {
        return (
          <Experiences
            key={i}
            title={com.params.title}
            text={com.params.text}
            date={com.params.date}
          />
        );
      })}
    </div>
  );
};
