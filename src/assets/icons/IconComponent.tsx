import { type FC } from "react";
import type { IconType } from "react-icons";
import { MdWork } from "react-icons/md";

const IconList: { [key: string]: IconType } = {
  work: MdWork,
};

type IconComponentProps = {
  iconName: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  shape?: string;
  style?: "filled" | "outlined";
};

const IconComponent: FC<IconComponentProps> = ({
  iconName,
  className,
  onClick,
  disabled,
  shape,
  style,
}) => {
  const Icon = IconList[iconName] ?? IconList["question"];
  return <Icon className={className} onClick={onClick} />;
};

export default IconComponent;
