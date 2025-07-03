import type { FC } from "react";
import IconComponent from "../../../assets/icons/IconComponent";

type DownloadCVProps = {
  iconOnly?: boolean;
};
const DownloadCV: FC<DownloadCVProps> = ({ iconOnly }) => {
  return (
    <div
      className={`group border-primary-orange relative flex items-center gap-5 rounded-xl border-1`}
    >
      <IconComponent
        iconName="download"
        className={`absolute left-[25%] transition-all duration-300 group-hover:translate-y-2`}
      />
      <button
        className={`relative h-[40px] w-[50px] cursor-pointer overflow-hidden rounded-[10px] border-none bg-transparent text-[17px] font-semibold uppercase shadow-[0_10px_20px_rgba(51,51,51,0.2)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${!iconOnly ? "group-hover:w-[120px]" : ""} focus:outline-none active:scale-[0.95]`}
      >
        <span className="pointer-events-none absolute inset-0 z-[2] flex origin-bottom translate-y-[90%] items-center justify-center bg-[linear-gradient(135deg,#fa982c,#f95720)] text-nowrap transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0">
          {iconOnly ? (
            <IconComponent
              iconName="download"
              className={`absolute left-[25%] transition-all duration-300`}
            />
          ) : (
            "Download CV"
          )}
        </span>
      </button>
    </div>
  );
};

export default DownloadCV;
