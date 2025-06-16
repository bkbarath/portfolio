import type { FC } from "react";
import IconComponent from "../../../assets/icons/IconComponent";

type ButtonProps = {
  text: string;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ text, type, onClick }) => {
  return (
    <button
      onClick={() => {
        if (onClick) onClick();
      }}
      type={type}
      className="bg-primary-button-bg group border-primary-orange flex w-30 items-center justify-center gap-2 rounded-xl border-1 p-1 hover:cursor-pointer"
    >
      <div className="flex h-full items-center gap-2 p-1">
        <IconComponent
          iconName="work"
          className="text-primary-background bg-primary-orange group-hover:text-primary-background rounded-lg p-1 text-3xl transition-all duration-300 group-hover:w-25 group-hover:translate-x-8"
        />
        <p className="text-nowrap transition-all duration-300 last:group-hover:translate-x-1 last:group-hover:opacity-0">
          {text}
        </p>
      </div>
    </button>
  );
};

export default Button;
