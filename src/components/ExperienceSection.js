import { GreyButton } from "./GreyButton";
import { UpworkCard } from "./UpworkCard";
const data = [
  {
    title: "Sr. Frontend Developer",
    date: "Nov 2021 - Present",
    list: [
      {
        date: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        date: "Ut pretium arcu et massa semper, id fringilla leo semper.",
      },
      { date: "Sed quis justo ac magna." },
      {
        date: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    title: "Team Lead",
    date: "Jul 2017 - Oct 2021",
    list: [
      {
        date: "Sed quis justo ac magna.",
      },
      {
        date: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        date: "Sed quis justo ac magna.",
      },
      {
        date: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    title: "Full Stack Developer",
    date: "Dec 2015 - May 2017",
    list: [
      {
        date: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <div className="flex p-24 bg-gray-50 text-gray-600 dark:bg-gray-900 dark:text-gray-50">
      <div className="flex flex-1 flex-col gap-8 items-center">
        <GreyButton title="Experience" />
        <p className="text-lg">
          Here is a quick summary of my most recent experiences:
        </p>

        <div className="flex flex-col gap-12">
          {data.map((item) => {
            return (
              <>
                <UpworkCard
                  title={item.title}
                  date={item.date}
                  list={item.list}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
