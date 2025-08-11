import type { HTMLAttributes, ReactNode } from "react";

type Types = "password" | "text" | "email";

type Props = {
  children?: ReactNode;
  type?: Types;
} & HTMLAttributes<HTMLInputElement>;

function Input({ type = "text", className, children, ...rest }: Props) {
  const base =
    "flex flex-row font-semibold items-center justify-center gap-5 p-2 rounded-xl focus:outline-none transition-all duration-200";
  const types: Record<Types, string> = {
    password: "bg-black text-white hover:bg-gray-950",
    text: "bg-transparent border border-gray-300 text-black hover:bg-gray-100 hover:shadow-sm",
    email: "bg-red-500 text-white",
  };

  return (
    <div className={`${base} ${className ?? ""}`} {...rest}>
      {children}
      <input type={types[type]} />
    </div>
  );
}

export default Input;
