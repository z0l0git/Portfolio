import { FiSun } from "react-icons/fi";
import { MdOutlineMenu } from "react-icons/md";

export const HeaderLayout = ({ children }) => {
  const routes = ["About", "Work", "Testimonials", "Contact"];
  return (
    <div className="mx-auto max-w-screen-xl bg-dark-default">
      <div className="flex justify-between px-[80px] items-center py-4 ">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">{"<SS />"}</h1>
        </div>
        <div className="gap-10 hidden md:flex-center ">
          <div className="flex-center gap-6 text-gray-600">
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
        <div className="block md:hidden">
          <MdOutlineMenu size={30} className="flex items-center" />
        </div>
      </div>
      {children}
    </div>
  );
};
