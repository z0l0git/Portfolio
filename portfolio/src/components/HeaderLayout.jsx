import { FiSun } from "react-icons/fi";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export const HeaderLayout = ({ children }) => {
  const routes = ["About", "Work", "Testimonials", "Contact"];

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="mx-auto max-w-screen-xl bg-dark-default">
      <div className="flex justify-between px-[16px] md:px-[80px] items-center py-4 ">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">{"<SS />"}</h1>
        </div>
        <div className="gap-10 hidden md:flex-center  ">
          <div className="flex-center gap-6 h-[176px] text-gray-600">
            {routes.map((route, index) => (
              <p key={index}>{route}</p>
            ))}
          </div>
          <div class="border-l-2 rounded-md border-lightgray h-4"></div>
          <div className="flex items-center gap-4">
            <FiSun size={22} />
            <button className="rounded-xl bg-black text-white px-4 py-1.5">
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
      {open && (
        <div className="justify-center h-[500px] w-3/4 bg-black absolute top-15 right-[16px] z-30">
          <div className="w-1/2  flex-col justify-between gap-4">
            <div className="flex-col justify-center items-center gap-6 h-[176px] text-gray-600 bg-blue">
              {routes.map((route, index) => (
                <p className="mb-3" key={index}>
                  {route}
                </p>
              ))}
            </div>
            <div className="flex-col items-center gap-4">
              <FiSun size={22} />
              <button className="rounded-xl bg-black text-white px-4 py-1.5">
                Download CV
              </button>
            </div>
          </div>
        </div>
      )}

      {children}
    </div>
  );
};
