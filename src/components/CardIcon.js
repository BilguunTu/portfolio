export const CardIcon = ({ svg, title }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {svg}
      <p className="text-lg text-gray-600 dark:text-gray-50">{title}</p>
    </div>
  );
};
