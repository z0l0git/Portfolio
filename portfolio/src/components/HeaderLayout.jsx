import { FiSun } from "react-icons/fi";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { useTheme } from "next-themes";
import { RiMoonClearFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

export const Header = () => {};

export const HeaderLayout = ({ children }) => {
  const routes = [
    { sectionID: "aboutMe", label: "About" },
    { sectionID: "work", label: "Work" },
    { sectionID: "testimonials", label: "Testimonials" },
    { sectionID: "contact", label: "Contact" },
  ];

  const [open, setOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setOpen(!open);
  };
  const ref = useRef(null);

  const scrollToSection = (element_id) => {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="mx-auto max-w-screen-[1440px]">
      <div className=" sticky top-0 z-50 bg-white dark:bg-[#030712] flex justify-between px-[16px] md:px-[80px] items-center py-4 h-[68px]">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">{"<SS />"}</h1>
        </div>
        <div className="gap-10 hidden md:flex-center  dark:gray-dark-default ">
          <div className="flex-center gap-6 h-[176px] text-gray-600 dark:text-[#D1D5DB]">
            {routes.map(({ label, sectionID }, index) => (
              <p
                style={{ cursor: "pointer" }}
                id={index}
                key={index}
                onClick={() => scrollToSection(sectionID)}
              >
                {label}
              </p>
            ))}
          </div>
          <div className="border-l-2 rounded-md border-lightgray h-4"></div>
          <div className="flex items-center gap-4">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <RiMoonClearFill size={22} className="text-white" />
              ) : (
                <FiSun size={22} className="text-black" />
              )}
            </div>

            <button className="rounded-xl bg-black dark:bg-[#F9FAFB] text-white dark:text-[#111827] px-4 py-1.5">
              Download CV
            </button>
          </div>
        </div>
        <div className="block md:hidden" onClick={handleClick} ref={ref}>
          {open ? (
            <IoClose size={30} className="flex items-center" />
          ) : (
            <MdOutlineMenu size={30} className="flex items-center" />
          )}
        </div>
      </div>
      <div>
        <div className="fixed z-20 -top-100 right-0 ">
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ right: "-100%" }}
                animate={{
                  right: 0,
                  transition: { duration: 1, ease: "easeInOut" },
                }}
                exit={{ right: "-100%", transition: { duration: 1 } }}
                className="fixed w-4/5 h-full z-20 "
              >
                <div className="justify-center h-[500px] w-3/4 bg-white dark:bg-[#030712] absolute top-15 right-[16px] z-30 ">
                  <div className="w-full  flex-col justify-between gap-4">
                    <div className="flex-col justify-center items-center gap-6 h-[176px] text-gray-600 dark:text-[#D1D5DB] bg-blue p-[16px]">
                      {routes.map(({ label, sectionID }, index) => (
                        <p
                          style={{ cursor: "pointer" }}
                          className="mb-[16px]"
                          id={index}
                          key={index}
                          onClick={() => scrollToSection(sectionID)}
                        >
                          {label}
                        </p>
                      ))}
                    </div>
                    <div className="flex-col items-center gap-4 w-full mt-[32px] p-[16px]">
                      <div className=" text-gray-600 dark:text-[#D1D5DB] flex items-center  justify-between gap-4">
                        <p>Switch Theme</p>
                        <div
                          onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                          }
                        >
                          {theme === "dark" ? (
                            <RiMoonClearFill size={22} className="text-white" />
                          ) : (
                            <FiSun size={22} className="text-black" />
                          )}
                        </div>
                      </div>
                      <button className="rounded-xl bg-black dark:bg-[#F9FAFB] text-white dark:text-[#111827] px-4 py-1.5 w-full mt-[16px]">
                        Download CV
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {children}
    </div>
  );
};
