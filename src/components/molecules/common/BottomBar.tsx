import { motion } from "framer-motion";
import IconComponent from "../../../assets/icons/IconComponent";
import useActiveSection from "../../../hooks/useActiveSection";
import { MenuList } from "../../../lib/data/common.data";
import { fadeIn } from "../../../styles/variant";
import { DownloadCV, HireMeButton } from "../../atoms";
import Tooltip from "../../atoms/common/Tooltip";

const BottomBar = () => {
  const { activeSection, setActiveSection } = useActiveSection();

  const getPosition = (): string => {
    switch (activeSection) {
      case "home":
        return "left-[0%]";
      case "skill":
        return "left-[21.5%]";
      case "experience":
        return "left-[43%]";
      case "project":
        return "left-[64.5%]";
      case "contact":
        return "left-[86.5%]";
      default:
        break;
    }
    return "left-0";
  };

  return (
    <motion.footer
      variants={fadeIn("up")}
      animate="animate"
      initial="initial"
      className="fixed bottom-2 left-1/2 z-9999 flex -translate-x-1/2 transform gap-5 rounded-2xl border-1 p-3 items-center backdrop-blur-lg backdrop-brightness-50"
    >
      <div
        className={`absolute transition-all duration-300 ${
          activeSection !== "hero" ? "-translate-x-20" : "w-0 opacity-0"
        }`}
      >
        <Tooltip
          className="bg-primary-button-bg h-full w-full rounded-2xl backdrop-blur-2xl"
          text="Download CV"
        >
          <DownloadCV iconOnly={true} />
        </Tooltip>
      </div>

      <div className="relative flex gap-5">
        <div
          className={`bg-primary-orange absolute h-full w-2/14 rounded-lg transition-all duration-300 ease-in-out ${getPosition()}`}
        ></div>
        {MenuList.map((item) => (
          <a
            href={item.path}
            onClick={() => setActiveSection(item.path.replace("#", ""))}
            className={`hover:bg-primary-orange group relative rounded-lg transition-all duration-400`}
          >
            <IconComponent
              iconName={item.icon}
              className="rounded-xl text-4xl transform-3d"
            />
            <p className="bg-secondary-background absolute -top-10 translate-y-3 rounded-lg border-1 px-2 opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-100">
              {item.label}
            </p>
          </a>
        ))}
      </div>

      <div
        className={`absolute transition-all duration-300 ${
          activeSection !== "hero" ? "left-75" : "w-0 opacity-0 -z-0 left-50"
        }`}
      >
        <Tooltip
          className="bg-primary-button-bg h-full w-full rounded-2xl backdrop-blur-2xl"
          text="Hire me"
        >
          <HireMeButton iconOnly={true} />
        </Tooltip>
      </div>
    </motion.footer>
  );
};

export default BottomBar;
