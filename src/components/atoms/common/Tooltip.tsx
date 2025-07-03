import React, { type FC } from "react";

type TooltipPropType = {
  children: React.ReactNode;
  text: string;
  className?: string;
};

const Tooltip: FC<TooltipPropType> = ({ children, text, className }) => {
  return (
    <div className={`group relative ${className}`}>
      <p className="bg-secondary-background absolute -top-10 translate-y-3 rounded-lg border-1 px-2 text-nowrap opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-100">
        {text}
      </p>
      {children}
    </div>
  );
};

export default Tooltip;
