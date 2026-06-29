import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "1" | "2" | "3" | "4" | "5" | "6";
}

export function Heading({
  children,
  className = "",
  as: Component = "h2",
  size = "2",
}: HeadingProps) {
  const sizeClasses = {
    1: "text-3xl font-bold tracking-tight leading-none sm:text-4xl",
    2: "text-2xl font-semibold tracking-tight leading-none sm:text-3xl",
    3: "text-xl font-semibold tracking-tight leading-none sm:text-2xl",
    4: "text-lg font-semibold tracking-tight leading-none",
    5: "text-base font-semibold tracking-tight leading-none",
    6: "text-sm font-semibold tracking-tight leading-none",
  };

  return (
    <Component className={`${sizeClasses[size]} ${className}`}>
      {children}
    </Component>
  );
}