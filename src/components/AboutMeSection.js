import { GreyButton } from "./GreyButton";

export const AboutMeSection = () => {
  return (
    <div className="flex p-24 bg-gray-50 text-gray-600 dark:bg-slate-900">
      <div className="flex flex-1 flex-col gap-8 items-center">
        <GreyButton title={"About me"} />
        <div className="flex">
          <div className="flex flex-1">
            <div className=" shadow-[-30px_30px_0px_0px_rgba(55,65,81)]">
              <img
                src="https://images.unsplash.com/photo-1587397845856-e6cf49176c70?q=80&w=2965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={400}
                className="border-4 border-white dark:border-slate-900"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-6">
            <p className="font-semibold text-2xl text-gray-900 dark:text-gray-50">
              Curious about me? Here you have it:
            </p>
            <div>
              <p className="dark:text-gray-50">
                {`I'm a designer turned full stack developer, passionate about
                React.js and Node.js. I excel in blending technical and visual
                aspects to craft exceptional digital products, prioritizing user
                experience, precise design, and optimized code.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
