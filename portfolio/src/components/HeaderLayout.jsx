import { FiSun } from "react-icons/fi";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { RiMoonClearFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

export const Header = () => {};

export const HeaderLayout = ({ children }) => {
  const routes = [
    { sectionID: "aboutMe", label: "About" },
    { sectionID: "skills", label: "Skills" },
    { sectionID: "experience", label: "Experience" },
    { sectionID: "work", label: "Work" },
    { sectionID: "contact", label: "Contact" },
  ];

  const [open, setOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setOpen(!open);
  };
  const ref = useRef(null);
  const [selected, setSelected] = useState(routes[0].sectionID);

  const scrollToSection = (element_id) => {
    if (typeof document !== "undefined") {
      const element = document.getElementById(element_id);
      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Trigger when 50% of the element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Check if the entry is intersecting and matches the expected sectionID
        if (
          entry.isIntersecting &&
          routes.some((route) => route.sectionID === entry.target.id)
        ) {
          setSelected(entry.target.id);
        }
      });
    }, options);

    routes.forEach((route) => {
      const element = document.getElementById(route.sectionID);
      if (element) {
        observer.observe(element); // Observe each route element
      }
    });

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, [routes]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent rendering until mounted
  }
  return (
    <>
      <div className="mx-auto max-w-screen-[1440px]">
        <div className=" sticky top-0 z-50 bg-white dark:bg-[#030712] flex justify-between px-[16px] md:px-[80px] items-center py-4 h-[68px]">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">{"<SS />"}</h1>
          </div>
          <div className="gap-10 hidden md:flex-center  dark:gray-dark-default ">
            <div className="flex-center gap-6 h-[176px] text-gray-600 dark:text-[#D1D5DB]">
              {routes.map(({ label, sectionID }, index) => (
                <Chip
                  text={label}
                  id={index}
                  selected={selected === sectionID}
                  setSelected={setSelected}
                  key={index}
                  onClickFunction={() => scrollToSection(sectionID)}
                />
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
                        <div
                          className=" text-gray-600 dark:text-[#D1D5DB] flex items-center  justify-between gap-4 cursor-pointer"
                          onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                          }
                        >
                          <p>Switch Theme</p>
                          <div>
                            {theme === "dark" ? (
                              <RiMoonClearFill
                                size={22}
                                className="text-white"
                              />
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
    </>
  );
};

const Chip = ({ text, selected, setSelected, onClickFunction, id }) => {
  return (
    <button
      id={id}
      onClick={() => {
        setSelected(text);
        if (typeof onClickFunction === "function") {
          onClickFunction(); // Call the function if it's defined
        }
      }}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};
