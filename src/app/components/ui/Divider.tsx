interface DividerProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export function Divider({
  className = "",
  orientation = "horizontal",
}: DividerProps) {
  const baseClasses = "flex items-center justify-center";

  const orientationClasses = {
    horizontal: "w-full flex-col",
    vertical: "h-full flex-row",
  };

  const lineClasses = {
    horizontal: "h-px w-full bg-border",
    vertical: "w-px h-full bg-border",
  };

  return (
    <div className={`${baseClasses} ${orientationClasses[orientation]} ${className}`}>
      <div className={lineClasses[orientation]} />
    </div>
  );
}