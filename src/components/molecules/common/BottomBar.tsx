import { useEffect } from "react";
import IconComponent from "../../../assets/icons/IconComponent";
import { MenuList } from "../../../lib/data/common.data";

const BottomBar = () => {
  useEffect(() => {
    console.log(location.href);
  }, []);

  console.log(location.href);

  return (
    <div className="absolute bottom-2 left-[45%] z-999 flex gap-5 rounded-2xl border-1 p-3 backdrop-blur-lg backdrop-brightness-50">
      {MenuList.map((item) => (
        <a
          href={item.path}
          className={`hover:bg-primary-orange group rounded-xl transition-all duration-400 ${location.href.includes(item.path) ? "bg-primary-orange" : ""}`}
        >
          <IconComponent
            iconName={item.icon}
            className="rounded-xl text-4xl transform-3d"
          />
          <p className="bg-secondary-background absolute -top-10 rounded-lg border-1 px-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
            {item.label}
          </p>
        </a>
      ))}
    </div>
  );
};

export default BottomBar;
