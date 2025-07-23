import type { Primitive } from "../../../lib/type/common.type";

type InputProps = {
  placeholder?: string;
  value?: Primitive;
  onChange?: () => void;
  name?: string;
  type?: string;
};

const Input = ({
  placeholder,
  type = "text",
  value,
  onChange,
  name,
}: InputProps) => {
  return (
    <input
      type={type}
      required
      className="placeholder:text-primary-orange/20 text-primary-orange h-full w-full p-1 outline-none"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default Input;
