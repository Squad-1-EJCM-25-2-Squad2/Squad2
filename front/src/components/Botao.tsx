import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "danger";

type Props = {
  children?: ReactNode;
  variant?: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Botao({ variant = "primary", className, children, ...rest }: Props) {
  const base =
    "flex flex-row font-semibold items-center justify-center gap-5 p-2 rounded-xl focus:outline-none transition-all duration-200";
  const variants: Record<Variant, string> = {
    primary: "bg-black text-white hover:bg-gray-950",
    secondary:
      "bg-transparent border border-gray-300 text-black hover:bg-gray-100 hover:shadow-sm",
    danger: "bg-red-500 text-white",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Botao;
