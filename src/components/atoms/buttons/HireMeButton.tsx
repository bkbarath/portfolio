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
      className="bg-primary-button-bg group border-secondary-border flex justify-center items-center gap-2 rounded-xl border-1 p-3 w-30 h-fit20 hover:cursor-pointer"
    >
      <IconComponent iconName="work" className="text-primary-grey group-hover:text-primary-background group-hover:translate-x-8 group-hover:text-xl transition-all duration-300" />
      <p className="transition-all duration-300 last:group-hover:opacity-0 last:group-hover:translate-x-2">
        {text}
      </p>
    </button>
  );
};

export default Button;
