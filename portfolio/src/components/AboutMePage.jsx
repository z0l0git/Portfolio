import { Tag } from "@/components/Tag";
import { ImageContainer } from "@/components/ImageContainer";
import { useRef } from "react";

export const AboutMePage = () => {
  const part2Image = {
    image: "/dog1.jpeg",
    width: 500,
    height: 580,
    isProfile: true,
    isProfileDiv: true,
    isProfilePic: true,
  };
  const aboutMe = useRef(null);
  return (
    <div
      ref={aboutMe}
      id="aboutMe"
      className="bg-gray-50 dark:bg-[#111827] w-full h-fit px-[16px] md:px-[80px] py-[64px] md:py-[96px]"
    >
      <div className="flex items-center justify-center w-full mb-[24px] md:mb-[48px]">
        <Tag text="About me"></Tag>
      </div>
      <div className="flex flex-col md:flex-row w-full h-full gap-[48px]">
        <div className="w-full md:w-[50%] md:h-[770px] flex justify-start gap-[48px]">
          <ImageContainer {...part2Image} />
        </div>
        <div className=" w-full md:w-1/2 h-full flex-col gap-[16px]">
          <div className="text-[30px] font-bold mb-[24px]">
            <h2>Curious about me? Here you have it:</h2>
          </div>
          <div className="text-gray-600 dark:text-[#D1D5DB]">
            <p className="mb-[16px]">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p className="mb-[16px]">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p className="mb-[16px]">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p className="mb-[16px]">
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
            <p className="mb-[16px]">Finally, some quick bits about me.</p>
            <div className="mb-[16px] ">
              <ul className="list-disc list-outside flex flex-wrap gap-[10px] items-start text-start ml-[16px]">
                <li className="w-[50%] ">B.E. in Computer Engineering</li>
                <li className="w-[30%]">Avid learner</li>
                <li className="w-[50%]">Full time freelancer</li>
                <li className="w-[30%]">Aspiring indie hacker</li>
              </ul>
            </div>
            <p className="mb-[16px]">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
