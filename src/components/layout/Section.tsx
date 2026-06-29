import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  padding?: {
    x?: string;
    y?: string;
  };
}

export function Section({
  children,
  className = "",
  padding = { x: "6", y: "12" },
}: SectionProps) {
  const { x, y } = padding;
  return (
    <section className={`px-${x} py-${y} ${className}`}>
      {children}
    </section>
  );
}