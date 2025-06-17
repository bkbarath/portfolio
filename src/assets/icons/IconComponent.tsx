import { type FC } from "react";
import type { IconType } from "react-icons";
import { BiMailSend, BiQuestionMark } from "react-icons/bi";
import { FaGit } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { MdWork } from "react-icons/md";
import { PiNotepadLight } from "react-icons/pi";
import { SiLeetcode } from "react-icons/si";
import { TbChartBar, TbHome } from "react-icons/tb";

const IconList: { [key: string]: IconType } = {
  work: MdWork,
  question: BiQuestionMark,
  mail: BiMailSend,
  home: TbHome,
  skill: TbChartBar,
  experience: MdWork,
  project: PiNotepadLight,
  git: FaGit,
  linkedin: LiaLinkedin,
  leetcode: SiLeetcode,
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
}) => {
  const Icon = IconList?.[iconName] ?? IconList["question"];
  return <Icon className={`${className} text-2xl`} onClick={onClick} />;
};

export default IconComponent;
