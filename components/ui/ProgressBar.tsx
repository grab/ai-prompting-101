interface ProgressBarProps {
  value: number;
  max?: number;
  variant?: "default" | "success" | "warning" | "gradient";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ProgressBar({
  value,
  max = 100,
  variant = "default",
  size = "md",
  className = "",
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const sizes = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
  };

  const variants = {
    default: "bg-rose-500",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    gradient: "bg-gradient-to-r from-rose-500 via-violet-500 to-amber-400",
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`w-full bg-slate-100 rounded-full overflow-hidden ${sizes[size]}`}
      >
        <div
          className={`${sizes[size]} ${variants[variant]} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
