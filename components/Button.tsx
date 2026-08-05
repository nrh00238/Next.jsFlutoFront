import React from "react";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "darkPrimary" | "darkSecondary";
  size?: "default" | "sm" | "md";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = "primary",
  size = "default",
  children,
  className = "",
  onClick,
  type = "button",
}) => {
  const baseStyles =
    "w-full sm:w-auto font-bold transition-all flex items-center justify-center gap-2 group cursor-pointer relative overflow-hidden";

  const sizes = {
    default: "px-8 py-4 rounded-xl text-sm",
    md: "px-6 py-3 rounded-lg text-sm",
    sm: "px-4 py-2 rounded-lg text-xs",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-500 to-purple-500 hover:bg-indigo-700 text-white font-bold shadow-[0_10px_30px_rgba(79,70,229,0.4)] hover:scale-105 active:scale-95",
    secondary:
      "bg-white dark:bg-[#0A0A0A] border border-gray-200/80 dark:border-white/10 text-gray-900 dark:text-white font-bold hover:border-indigo-500/50 shadow-[0_10px_30px_rgba(79,70,229,0.4)] hover:scale-105 active:scale-95",
    darkPrimary: 
      "bg-white text-black font-bold hover:scale-105 active:scale-95 shadow-[0_10px_40px_rgba(0,0,0,0.1)]",
    darkSecondary: 
      "bg-gray-900 dark:bg-white text-white dark:text-black font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2 group relative overflow-hidden",
  };

  const combinedStyles = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {content}
    </button>
  );
};