import React from "react";

type Size = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type FontWeight = "light" | "normal" | "medium" | "semibold" | "bold";

const sizeClasses: Record<Size, string> = {
  h1: "text-5xl",
  h2: "text-4xl",
  h3: "text-3xl",
  h4: "text-2xl",
  h5: "text-xl",
  h6: "text-lg",
};

const weightClasses: Record<FontWeight, string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

interface HeadingProps {
  size?: Size;
  weight?: FontWeight;
  className?: string;
  children: React.ReactNode;
}

export function Label({
  size = "h1",
  weight = "bold",
  className = "",
  children,
}: HeadingProps) {
  const Tag = size as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={`font-heading ${sizeClasses[size]} ${weightClasses[weight]} tracking-tight text-gray-900 mb-1 ${className}`}
    >
      {children}
    </Tag>
  );
}
