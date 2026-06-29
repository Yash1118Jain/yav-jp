import { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

export function GlassPanel({ children, className = "" }: GlassPanelProps) {
  return (
    <div
      className={`bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-white/20 dark:border-white/30 rounded-xl ${className}`}
    >
      {children}
    </div>
  );
}