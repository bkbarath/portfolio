import { motion } from "framer-motion";
import { TamilNadu } from "../../../assets/images";
import { fadeIn } from "../../../styles/variant";
import useActiveSection from "../../../hooks/useActiveSection";
import { HireMeButton } from "../../atoms";

const AppBar = () => {
  const { activeSection } = useActiveSection();

  return (
    <motion.header
      variants={fadeIn("down")}
      animate="animate"
      initial="initial"
      className={`top-0 z-5 flex w-full items-center justify-between p-3 lg:sticky`}
    >
      <div
        className={`flex items-center gap-3 rounded-2xl px-2 transition-all duration-300 ${activeSection !== "hero" ? "border-primary-grey border-1 backdrop-blur-xl" : ""}`}
      >
        <img src={TamilNadu} alt="tamil nadu" className="h-10 rounded-full" />
        <div>
          <p className="font-[tamil]">TWj </p>
          <p>Barath Pandian. K</p>
        </div>
      </div>

      <HireMeButton />
    </motion.header>
  );
};

export default AppBar;
