import { TamilNadu } from "../../../assets/images";
import { MenuList } from "../../../lib/data/common.data";
import { Button } from "../../atoms";

const AppBar = () => {
  return (
    <header className="sticky top-0 z-5 flex w-full p-3 justify-between items-center">
      <div className="flex gap-3 items-center">
        <img src={TamilNadu} alt="tamil nadu" className="h-10 rounded-full" />
        <div>
        <p className="font-[tamil]">TWj Ti¥Vu </p>
          <p>Barath Pandian. K</p>
        </div>
      </div>
      <div>
        {MenuList.map((item) => (
          <a href={item.path}>{item.label}</a>
        ))}
      </div>

      <Button text="Hire Me" />
    </header>
  );
};

export default AppBar;
