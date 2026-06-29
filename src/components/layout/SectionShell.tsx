import { ReactNode } from "react";
import { SectionHeader } from "./SectionHeader";

interface SectionShellProps {
  children: ReactNode;
  header?: ReactNode;
  className?: string;
  headerClassName?: string;
}

export function SectionShell({ children, header, className = "", headerClassName = "" }: SectionShellProps) {
  return (
    <section className={className}>
      {header && <SectionHeader className={headerClassName}>{header}</SectionHeader>}
      <div className="space-y-6">{children}</div>
    </section>
  );
}