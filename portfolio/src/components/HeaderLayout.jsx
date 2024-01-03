import { FiSun } from "react-icons/fi";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { useTheme } from "next-themes";
import { RiMoonClearFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {};

export const HeaderLayout = ({ children }) => {
  const routes = ["About", "Work", "Testimonials", "Contact"];

  const [open, setOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="mx-auto max-w-screen-[1440px]">
      <div className=" sticky top-0 z-50 bg-white dark:bg-[#030712] flex justify-between px-[16px] md:px-[80px] items-center py-4 h-[68px]">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">{"<SS />"}</h1>
        </div>
        <div className="gap-10 hidden md:flex-center  dark:gray-dark-default ">
          <div className="flex-center gap-6 h-[176px] text-gray-600 dark:text-[#D1D5DB]">
            {routes.map((route, index) => (
              <p key={index}>{route}</p>
            ))}
          </div>
          <div className="border-l-2 rounded-md border-lightgray h-4"></div>
          <div className="flex items-center gap-4">
            <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
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
        <div className="block md:hidden" onClick={handleClick}>
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
                      {routes.map((route, index) => (
                        <p className="mb-[16px]" key={index}>
                          {route}
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
