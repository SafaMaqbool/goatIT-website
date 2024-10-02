import React from "react";

const TailwindCssButtons = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative w-full inline-flex h-12 overflow-hidden rounded-full p-[1px] 
      md:w-60 md:mt-10 focus:outline-none border border-emerald-600 hover:border-emerald-400"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A6DCEF_0%,#005f73_50%,#A6DCEF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-emerald-700 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-4 hover:bg-emerald-600 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default TailwindCssButtons;
