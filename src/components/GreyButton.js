export const GreyButton = ({ title }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 py-1 px-5 rounded-xl">
      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
        {title}
      </p>
    </div>
  );
};
