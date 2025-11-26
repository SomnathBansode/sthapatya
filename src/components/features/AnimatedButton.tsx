"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useThemeColors } from "@/hooks/useThemeColors";

type Variant = "primary" | "secondary" | "outline";

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
}

export function AnimatedButton({
  children,
  variant = "primary",
  icon,
  className = "",
  type = "button",
  ...rest
}: AnimatedButtonProps) {
  const { colors } = useThemeColors();

  const variantStyles: Record<Variant, { backgroundColor: string; color: string; border?: string }> =
    {
      primary: { backgroundColor: colors.primary, color: "#ffffff" },
      secondary: { backgroundColor: colors.secondary, color: "#ffffff" },
      outline: {
        backgroundColor: "transparent",
        color: colors.primary,
        border: `2px solid ${colors.primary}`,
      },
    };

  const style = variantStyles[variant] ?? variantStyles.primary;

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      type={type}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold shadow-lg transition-colors duration-200 ${className}`}
      style={style}
      {...rest}
    >
      <span className="flex-1 text-left">{children}</span>
      {icon && <span className="inline-flex items-center">{icon}</span>}
    </motion.button>
  );
}

export default AnimatedButton;
