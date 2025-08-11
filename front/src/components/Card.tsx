import type { HTMLAttributes, ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

function Card({ className, children }: Props) {
  return (
    <div
      className={`flex flex-col gap-3 bg-white shadow-lg p-5 rounded-xl justify-between h-fit ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
