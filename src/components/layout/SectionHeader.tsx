import { ReactNode } from "react";

interface SectionHeaderProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function SectionHeader({
  children,
  className = "",
  as: Component = "h2",
}: SectionHeaderProps) {
  return (
    <Component className={"mb-4 text-2xl font-semibold tracking-tight " + className}>
      {children}
    </Component>
  );
}