import { MsgIcon } from "@/assets/MsgIcon";
import { GreyButton } from "./GreyButton";
import {
  CIcon,
  CallIcon,
  CopyIcon,
  FigmaBlackIcon,
  FigmaIcon,
  GitIcon,
  GithubIcon,
  TwitterIcon,
} from "@/assets";

export const Footer = () => {
  return (
    <>
      <div className="flex p-2 text-gray-600 ">
        <div className="flex flex-1 flex-col gap-12 items-center">
          <GreyButton title="Get in touch" />
          <p className="w-2/4 text-xl text-center">
            {` What's next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.`}
          </p>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center gap-5">
              <MsgIcon size={32} />
              <p className="text-4xl font-semibold text-black">
                tom@pinecone.mn
              </p>
              <CopyIcon />
            </div>
            <div className="flex items-center gap-5">
              <CallIcon />
              <p className="text-4xl font-semibold text-black">+976 88112233</p>
              <CopyIcon />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p>You may also find me on these platforms!</p>
            <div className="flex justify-center gap-2">
              <GithubIcon />
              <TwitterIcon />
              <FigmaBlackIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-gray-50 py-6">
        <CIcon />
        <p>2024 | Greetings with ❤️️ from Ulaanbaatar</p>
      </div>
    </>
  );
};
