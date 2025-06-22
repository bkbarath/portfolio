import { type FC } from "react";
import type { IconType } from "react-icons";
import { BiMailSend, BiQuestionMark } from "react-icons/bi";
import { FaGit } from "react-icons/fa";
import { FcGlobe, FcMindMap, FcPhoneAndroid } from "react-icons/fc";
import { FiDownload } from "react-icons/fi";
import { LiaLinkedin } from "react-icons/lia";
import { MdClear, MdWork } from "react-icons/md";
import { PiNotepadLight } from "react-icons/pi";
import { RiExpandUpDownFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { TbChartBar, TbHome } from "react-icons/tb";
import { VscChromeMinimize } from "react-icons/vsc";

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
  android: FcPhoneAndroid,
  web: FcGlobe,
  api: FcMindMap,
  download: FiDownload,
  minimize: VscChromeMinimize,
  cancel: MdClear,
  expand: RiExpandUpDownFill,
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
