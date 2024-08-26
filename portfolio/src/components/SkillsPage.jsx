import { Tag } from "@/components/Tag";
import { IconContent } from "@/components/IconContent";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
    params: { image: "/icon-socket.png", text: "Socket.io" },
  },
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
    params: { image: "/icon-git.png", text: "Git" },
  },
];

// Helper function to generate random initial positions

export const SkillsPage = () => {
  const skillsRef = useRef(null);
  const getRandomDirection = () => {
    const directions = [
      { x: -100, y: 0 }, // Left
      { x: 100, y: 0 }, // Right
      { x: 0, y: -100 }, // Up
      { x: 0, y: 100 }, // Down
    ];
    return directions[Math.floor(Math.random() * directions.length)];
  };
  return (
    <div
      id="skills"
      ref={skillsRef}
      className="w-full h-fit px-[80px] py-[96px] flex flex-col items-center"
    >
      <div className="flex items-center justify-center w-full mb-[16px]">
        <Tag text="Skills" />
      </div>
      <div className="flex items-center justify-center w-full mb-[48px] text-gray-600 dark:text-[#D1D5DB]">
        <p className="text-[20px]">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="w-[343px] md:w-full mx-[32px] px-[16px] md:px-[32px] flex flex-col flex-wrap gap-[16px] md:gap-[48px] items-center justify-center">
        <div className="flex w-[300px] md:w-full justify-between flex-wrap gap-y-[48px] gap-x-[20px] md:gap-x-[100px] dark:text-[#D1D5DB]">
          {coms.map((com, i) => {
            const initialPosition = getRandomDirection(); // Get random initial position
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, ...initialPosition }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }} // Add a slight delay for each element
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }} // Trigger when the element is close to the viewport
              >
                <IconContent
                  width={com.params.width}
                  image={com.params.image}
                  text={com.params.text}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
