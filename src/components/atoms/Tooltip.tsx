import React, { type FC } from "react";

type TooltipPropType = {
  children: React.ReactNode;
};

const Tooltip: FC<TooltipPropType> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default Tooltip;
