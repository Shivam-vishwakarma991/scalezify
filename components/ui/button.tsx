import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[var(--accent)] text-[#050505] hover:bg-[#c6ef22] shadow-[0_12px_30px_rgba(214,255,47,0.18)]": variant === "default",
            "border border-[rgba(214,255,47,0.45)] text-[var(--copy-strong)] bg-transparent hover:bg-[rgba(214,255,47,0.08)] hover:border-[var(--accent)]": variant === "outline",
            "hover:bg-white/8 text-[var(--copy-strong)]": variant === "ghost",
            "text-[var(--accent)] underline-offset-4 hover:underline": variant === "link",
            "h-9 px-4 py-2": size === "default",
            "h-8 rounded-full px-3 text-xs": size === "sm",
            "h-12 rounded-full px-8 text-base": size === "lg",
            "h-9 w-9": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
