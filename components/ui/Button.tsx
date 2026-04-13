import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-gradient-to-r from-rose-500 to-violet-500 text-white hover:from-rose-600 hover:to-violet-600 focus:ring-rose-400 shadow-sm",
      secondary:
        "bg-white text-slate-900 border border-slate-200 hover:border-rose-300 hover:text-rose-600 focus:ring-rose-400",
      ghost:
        "bg-transparent text-slate-600 hover:bg-rose-50 hover:text-rose-700 focus:ring-rose-400",
      outline:
        "border-2 border-rose-300 text-rose-700 hover:bg-rose-50 focus:ring-rose-400",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
