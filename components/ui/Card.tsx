import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated" | "warm";
  padding?: "none" | "sm" | "md" | "lg";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { className = "", variant = "default", padding = "md", children, ...props },
    ref
  ) => {
    const base = "rounded-2xl";

    const variants = {
      default: "bg-white",
      bordered: "bg-white border border-slate-200",
      elevated: "bg-white shadow-lg shadow-rose-100/40",
      warm: "bg-gradient-to-br from-rose-50 via-white to-violet-50 border border-white",
    };

    const paddings = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    };

    return (
      <div
        ref={ref}
        className={`${base} ${variants[variant]} ${paddings[padding]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
