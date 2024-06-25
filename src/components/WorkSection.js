import { GreyButton } from "./GreyButton";
import { WorkCard } from "./WorkCard";

const data = [
  {
    title: "UBCab",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    tags: [
      {
        name: "React",
      },
      {
        name: "Next.js",
      },
      {
        name: "Typescript",
      },
      {
        name: "Nest.js",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "Tailwindcss",
      },
      {
        name: "Figma",
      },
      {
        name: "Cypress",
      },
      {
        name: "Storybook",
      },
      {
        name: "Git",
      },
    ],
  },
  {
    title: "Mentorhub",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    tags: [
      {
        name: "React",
      },
      {
        name: "Next.js",
      },
      {
        name: "Typescript",
      },
      {
        name: "Nest.js",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "Tailwindcss",
      },
      {
        name: "Figma",
      },
      {
        name: "Cypress",
      },
      {
        name: "Storybook",
      },
      {
        name: "Git",
      },
    ],
  },
  {
    title: "iToim",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    tags: [
      {
        name: "React",
      },
      {
        name: "Next.js",
      },
      {
        name: "Typescript",
      },
      {
        name: "Nest.js",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "Tailwindcss",
      },
      {
        name: "Figma",
      },
      {
        name: "Cypress",
      },
      {
        name: "Storybook",
      },
      {
        name: "Git",
      },
    ],
  },
];

export const WorkSection = () => {
  return (
    <div className="flex p-24 bg-gray-50 text-gray-600">
      <div className="flex flex-1 flex-col gap-12 items-center">
        <GreyButton title="Work" />
        <p className="text-lg">Some of the noteworthy projects I have built:</p>
        {data.map((item, index) => (
          <>
            {index === 1 ? (
              <WorkCard
                title={item.title}
                desc={item.desc}
                tags={item.tags}
                reverse={"reverse"}
                sizeT={"r"}
                sizeF={"l"}
              />
            ) : (
              <WorkCard
                title={item.title}
                desc={item.desc}
                tags={item.tags}
                reverse={""}
                sizeT={"l"}
                sizeF={"r"}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
};
