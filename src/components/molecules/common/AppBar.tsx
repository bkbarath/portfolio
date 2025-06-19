import { motion } from "framer-motion";
import { TamilNadu } from "../../../assets/images";
import { fadeIn } from "../../../styles/variant";
import { Button } from "../../atoms";

const AppBar = () => {
  return (
    <motion.header
      variants={fadeIn("down")}
      animate="animate"
      initial="initial"
      className="fixed top-0 z-5 flex w-full items-center justify-between p-3"
    >
      <div className="flex items-center gap-3">
        <img src={TamilNadu} alt="tamil nadu" className="h-10 rounded-full" />
        <div>
          <p className="font-[tamil]">TWj </p>
          <p>Barath Pandian. K</p>
        </div>
      </div>

      <Button text="Hire Me" />
    </motion.header>
  );
};

export default AppBar;
