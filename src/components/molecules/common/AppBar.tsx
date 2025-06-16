import { TamilNadu } from "../../../assets/images";
import { MenuList } from "../../../lib/data/common.data";
import { Button } from "../../atoms";

const AppBar = () => {
  return (
    <header className="fixed top-0 z-5 flex w-full items-center justify-between p-3">
      <div className="flex items-center gap-3">
        <img src={TamilNadu} alt="tamil nadu" className="h-10 rounded-full" />
        <div>
          <p className="font-[tamil]">TWj </p>
          <p>Barath Pandian. K</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        {MenuList.map((item) => (
          <a
            href={item.path}
            className="group relative h-[40px] w-[100px] cursor-pointer overflow-hidden rounded-[10px] border-none bg-transparent text-[17px] font-semibold uppercase shadow-[0_10px_20px_rgba(51,51,51,0.2)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] focus:outline-none active:scale-[0.95]"
          >
            <span className="pointer-events-none absolute inset-0 z-[2] flex origin-bottom translate-y-[90%] items-center justify-center bg-[linear-gradient(135deg,#fa982c,#f95720)] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0">
              {item.label}
            </span>
          </a>
        ))}
      </div>

      <Button text="Hire Me" />
    </header>
  );
};

export default AppBar;
