import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import IconComponent from "../../../assets/icons/IconComponent";
import { MenuList } from "../../../lib/data/common.data";
import { fadeIn } from "../../../styles/variant";

const BottomBar = () => {
  const [currentLocation, setCurrentLocation] = useState<string>(
    `#${location.href.split("#")[1]}`,
  );
  useEffect(() => {
    console.log(currentLocation, location.href.split("#")[1]);
  }, [currentLocation]);

  console.log(location.href.split("#"));

  return (
    <motion.header
      variants={fadeIn("up")}
      animate="animate"
      initial="initial"
      className="absolute bottom-2 left-[45%] z-999 flex gap-5 rounded-2xl border-1 p-3 backdrop-blur-lg backdrop-brightness-50"
    >
      {MenuList.map((item) => (
        <a
          href={item.path}
          onClick={() => setCurrentLocation(item.path)}
          className={`hover:bg-primary-orange group relative rounded-xl transition-all duration-400 ${currentLocation.includes(item.path) ? "bg-primary-orange" : ""}`}
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
    </motion.header>
  );
};

export default BottomBar;
