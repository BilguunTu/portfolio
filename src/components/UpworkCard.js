import { UpWorkIcon } from "@/assets/UpWorkIcon";

export const UpworkCard = ({ title, date, list }) => {
  return (
    <div className="bg-white p-8 flex gap-12 rounded-xl">
      <UpWorkIcon />
      <div className="flex flex-col gap-4">
        <p className="text-xl font-semibold">{title}</p>
        {list.map((item) => {
          return (
            <>
              <li>{item.date}</li>
            </>
          );
        })}
      </div>
      <p>{date}</p>
    </div>
  );
};
