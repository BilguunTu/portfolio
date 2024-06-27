import { FigmaBlackIcon } from "@/assets/FigmaBlackIcon";
import { GithubIcon } from "@/assets/GithubIcon";
import { LocationIcon } from "@/assets/LocationIcon";
import { TwitterIcon } from "@/assets/TwitterIcon";

export const MainSection = () => {
  return (
    <div className="flex p-24">
      <div className="flex flex-1 flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-gray-900 text-6xl">{`Hi, I'm Tom 👋`}</h1>
          <p className="">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center pl-1">
            <LocationIcon />
            <p>Ulaanbaatar, Mongolia</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="p-2 h-2 m-2 bg-green-500 rounded-full"></div>
            <p>Available for new projects</p>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="p-2">
            <GithubIcon className="text-2xl" />
          </div>
          <div className="p-2">
            <TwitterIcon />
          </div>
          <div className="p-2">
            <FigmaBlackIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-end pr-8">
        <div className="shadow-[30px_30px_0px_0px_rgba(192,192,192)]">
          <img
            className="border-4 border-white"
            src="https://images.unsplash.com/photo-1712857329031-eecb5980eec7?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={280}
            height={320}
          />
        </div>
      </div>
    </div>
  );
};
