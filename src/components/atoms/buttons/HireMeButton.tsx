import { type FC } from "react";
import IconComponent from "../../../assets/icons/IconComponent";

type ButtonProps = {
  text?: string;
  type?: "submit" | "button" | "reset";
  iconOnly?: boolean;
};

const HireMeButton: FC<ButtonProps> = ({
  text = "Hire Me",
  type,
  iconOnly,
}) => {
  const onClick = () => {};
  return (
    <>
      {iconOnly ? (
        <a
          // onClick={() => {
          //   if (onClick) onClick();
          // }}
          href="#contact"
          type={type}
          className="bg-primary-button-bg group border-primary-orange flex w-12 items-center justify-center gap-2 rounded-xl border-1 p-1 hover:cursor-pointer"
        >
          <div className="flex h-full items-center gap-2 p-1">
            <IconComponent
              iconName={"mail"}
              className={`text-primary-background bg-primary-orange group-hover:text-primary-background absolute -left-10 rounded-lg p-1 text-3xl opacity-0 transition-all duration-500 group-hover:left-2.5 group-hover:opacity-100`}
            />
            <IconComponent
              iconName={"work"}
              className={`text-primary-background bg-primary-orange group-hover:text-primary-background rounded-lg p-1 text-3xl transition-all duration-500 group-hover:translate-x-8 group-hover:opacity-0`}
            />
          </div>
        </a>
      ) : (
        <a
          // onClick={() => {
          //   if (onClick) onClick();
          // }}
          href="#contact"
          type={type}
          className="bg-primary-button-bg group border-primary-orange flex w-30 items-center justify-center gap-2 rounded-xl border-1 p-1 hover:cursor-pointer"
        >
          <div className="flex h-full items-center gap-2 p-1">
            <IconComponent
              iconName={"mail"}
              className={`text-primary-background bg-primary-orange group-hover:text-primary-background -translate-x-3 rounded-lg p-1 text-3xl opacity-0 transition-all duration-500 group-hover:w-25 group-hover:translate-x-21 group-hover:opacity-100`}
            />
            <IconComponent
              iconName={"work"}
              className={`text-primary-background bg-primary-orange group-hover:text-primary-background -translate-x-6 rounded-lg p-1 text-3xl transition-all duration-500 group-hover:w-25 group-hover:translate-x-8 group-hover:opacity-0`}
            />
            <p className="-translate-x-6 text-nowrap transition-all duration-500 last:group-hover:translate-x-1 last:group-hover:opacity-0">
              {text}
            </p>
          </div>
        </a>
      )}
    </>
  );
};

export default HireMeButton;
