import React, { type FC } from "react";

type TooltipPropType = {
  children: React.ReactNode;
  text: string;
};

const Tooltip: FC<TooltipPropType> = ({ children, text }) => {
  return (
    <div className="group relative">
      <p className="bg-secondary-background text-nowrap absolute -top-10 translate-y-3 rounded-lg border-1 px-2 opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-100">
        {text}
      </p>
      {children}
    </div>
  );
};

export default Tooltip;
