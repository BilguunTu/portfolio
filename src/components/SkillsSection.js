import {
  TypescriptIcon,
  JSIcon,
  ReactIcon,
  NodejsIcon,
  ExpressIcon,
  SocketIcon,
  MongoDBIcon,
  SassIcon,
  FigmaIcon,
  CypressIcon,
  StorybookIcon,
  GitIcon,
} from "@/assets";

import { CardIcon } from "./CardIcon";
import { GreyButton } from "./GreyButton";

const techIcons = [
  {
    svg: <JSIcon />,
    title: "Javascript",
  },
  {
    svg: <TypescriptIcon />,
    title: "Typescript",
  },
  {
    svg: <ReactIcon />,
    title: "React",
  },
  {
    svg: <ReactIcon />,
    title: "Next.js",
  },
  {
    svg: <NodejsIcon />,
    title: "Node.js",
  },
  {
    svg: <ExpressIcon />,
    title: "Express.js",
  },
  {
    svg: <ExpressIcon />,
    title: "Nextjsicon",
  },
  {
    svg: <SocketIcon />,
    title: "Socket.io",
  },
  {
    svg: <SocketIcon />,
    title: "PostgreSQL",
  },
  {
    svg: <MongoDBIcon />,
    title: "MongoDB",
  },
  {
    svg: <SassIcon />,
    title: "Sass/Scss",
  },
  {
    // svg: <TailwindIcon />,
    svg: <SassIcon />,
    title: "Tailwindcss",
  },
  {
    svg: <FigmaIcon />,
    title: "Figma",
  },
  {
    svg: <CypressIcon />,
    title: "Cypress",
  },
  {
    svg: <StorybookIcon />,
    title: "Storybook",
  },
  {
    svg: <GitIcon />,
    title: "Git",
  },
];

export const SkillsSection = () => {
  return (
    <div className="flex p-24 text-gray-600 w-full">
      <div className="flex flex-col gap-12 items-center justify-center w-full">
        <GreyButton title="Skills" />

        <p>The skills, tools and technologies I am really good at:</p>

        <div className="grid grid-cols-8 gap-2 gap-y-12 w-full">
          {techIcons.map((item, index) => {
            return (
              <div key={index} className="grid gap-2">
                <CardIcon svg={item.svg} title={item.title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
