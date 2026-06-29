import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  fluid?: boolean;
}

export function Container({ children, className = "", fluid = false }: ContainerProps) {
  const containerClass = fluid
    ? "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    : "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

  return <div className={`${containerClass} ${className}`}>{children}</div>;
}