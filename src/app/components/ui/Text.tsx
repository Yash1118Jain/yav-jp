import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
  size?: "sm" | "base" | "lg" | "xl";
  color?: "foreground" | "muted" | "muted-foreground";
}

export function Text({
  children,
  className = "",
  as: Component = "p",
  size = "base",
  color = "foreground",
}: TextProps) {
  const sizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const colorClasses = {
    foreground: "text-foreground",
    muted: "text-muted",
    "muted-foreground": "text-muted-foreground",
  };

  return (
    <Component
      className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}
    >
      {children}
    </Component>
  );
}