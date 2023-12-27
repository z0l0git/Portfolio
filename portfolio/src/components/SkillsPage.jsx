import { Tag } from "@/components/Tag";
import { IconContent } from "@/components/IconContent";

const coms = [
  {
    component: "IconContent",
    params: { image: "/icon-javscript.png", text: "Javascript" },
  },
  {
    component: "IconContent",
    params: { image: "/icon-typescript.png", text: "Typescript" },
  },
  {
    component: "IconContent",
    params: { image: "/icon-react.png", text: "React" },
  },
  {
    component: "IconContent",
    params: { image: "/icon-nextjs.png", text: "Next.js" },
  },
  {
    component: "IconContent",
    params: { image: "/icon-nodejs.png", text: "Node.js" },
  },
  {
    component: "IconContent",
    params: { image: "/icon-express.png", text: "Express" },
  },
  {
    component: "IconContent",
    params: { image: "/icon-nest.png", text: "Nest.js" },
  },
  {
    component: "IconContent",
    params: { image: "/icon-socket.png", text: "Socket.io" },
  },
];
const coms2 = [
  {
    component: "IconContent",
    params: { image: "/icon-postgresql.png", text: "PostgreSQL" },
  },
  {
    component: "IconContent",
    params: { image: "/icon-mongodb.png", text: "MongoDB", width: "29px" },
  },
  {
    component: "IconContent",
    params: { image: "/icon-sass.png", text: "Sass/Scss" },
  },
  {
    component: "IconContent",
    params: { image: "/icon-tailwindcss.png", text: "Tailwind" },
  },
  {
    component: "IconContent",
    params: { image: "/icon-figma.png", text: "Figma" },
  },
  {
    component: "IconContent",
    params: { image: "/icon-cypress.png", text: "Cypress" },
  },
  {
    component: "IconContent",
    params: { image: "/icon-storybook.png", text: "Storybook" },
  },
  {
    component: "IconContent",
    params: { image: "/icon-git.png", text: "Git" },
  },
];

export const SkillsPage = () => {
  return (
    <div className="w-full h-fit px-[80px] py-[96px]">
      <div className="flex items-center justify-center w-full mb-[16px]">
        <Tag text="Skills"></Tag>
      </div>
      <div className="flex items-center justify-center w-full mb-[48px]  text-gray-600">
        <p className="text-[20px]">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="mx-[32px] flex flex-col gap-[48px]">
        <div className="flex w-full justify-between ">
          {coms.map((com, i) => {
            return (
              <IconContent
                key={i}
                image={com.params.image}
                text={com.params.text}
              />
            );
          })}
        </div>
        <div className="flex w-full justify-between ">
          {coms2.map((com, i) => {
            return (
              <IconContent
                key={i}
                width={com.params.width}
                image={com.params.image}
                text={com.params.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
