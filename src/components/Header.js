import { FiMoon, FiSun } from "react-icons/fi";

export const Header = ({ toggle }) => {
  return (
    <div className="w-screen px-24 bg-white dark:bg-gray-950">
      <div className="flex justify-between py-4">
        <h1 className="text-gray-900 dark:text-gray-50 font-extrabold text-3xl ">
          TOM
        </h1>
        <div className="flex gap-2">
          <div className="flex items-center text-gray-600 dark:text-gray-50 px-1 gap-6 border-r-1">
            <p className="text-base">About</p>
            <p className="text-base">Work</p>
            <p className="text-base">Testimonials</p>
            <p className="text-base">Contact</p>
          </div>
          <div className="flex items-center gap-4">
            {/* {weather !== "sun" ? (
              <FiSun size={24} color="text-gray-600" />
            ) : (
              <FiMoon size={24} color="text-gray-600" />
            )} */}
            <FiSun size={24} onClick={toggle} />
            <button
              onClick={toggle}
              className="py-2 px-5 rounded-lg bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
