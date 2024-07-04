import { SharingIcon } from "@/assets/SharingIcon";
import { GreyButton } from "./GreyButton";

export const WorkCard = ({ title, desc, tags, reverse, sizeT, sizeF }) => {
  return (
    <div className={`flex flex-row-${reverse} rounded-xl shadow-md`}>
      <div
        className={`flex flex-1 bg-gray-50 dark:bg-gray-800 p-12 rounded-${sizeT}-xl `}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1666896899625-fc46de2562a7?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full rounded-lg"
        />
      </div>
      <div
        className={`flex flex-1 flex-col p-12 gap-6 bg-white dark:bg-gray-700 rounded-${sizeF}-xl `}
      >
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-base">{desc}</p>
        <div className=" gap-2 flex flex-wrap">
          {tags.map((item, index) => {
            return (
              <div className="w-fit" key={index}>
                <GreyButton title={item.name} />
              </div>
            );
          })}
        </div>
        <SharingIcon />
      </div>
    </div>
  );
};
