import { FiSun } from "react-icons/fi";

export const Header = () => {
  return (
    <div className="w-screen px-24">
      <div className="flex justify-between">
        <h1 className="text-gray-900 font-extrabold text-3xl">TOM</h1>
        <div className="flex gap-2">
          <div className="flex items-center text-gray-600 px-1 gap-6 border-r-1">
            <p className="text-base">About</p>
            <p className="text-base">Work</p>
            <p className="text-base">Testimonials</p>
            <p className="text-base">Contact</p>
          </div>
          <div className="flex items-center gap-4">
            <FiSun size={24} color="text-gray-600" />
            <button className="py-2 px-5 rounded-lg bg-gray-900 text-white">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
