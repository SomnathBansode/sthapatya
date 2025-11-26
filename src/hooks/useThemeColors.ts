// src/hooks/useThemeColors.ts
"use client";

import { useTheme } from "@/components/ThemeContext";

/**
 * Custom hook to get theme-aware style objects
 */
export function useThemeColors() {
  const { currentTheme } = useTheme();
  const colors = currentTheme.colors;

  // Gradient helpers (used by HomePage headings)
  const gradients = {
    primary: {
      backgroundImage: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 50%, ${colors.secondary} 100%)`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      color: "transparent",
    },
  };

  return {
    colors,
    gradients,

    // Solid color backgrounds
    backgrounds: {
      primary: colors.primary,
      secondary: colors.secondary,
      accent: colors.accent,
      light: colors.backgroundLight,
      cream: "#FFFFFF",
      white: "#FFFFFF",
      card: colors.primary,
    },

    // Text color styles
    text: {
      primary: { color: colors.text },
      secondary: { color: colors.textLight },
      accent: { color: colors.accent },
      blue: { color: colors.primary },
      dark: { color: colors.secondary },
      gradient: gradients.primary, // used as ...themeText.gradient
    },

    // Background styles
    background: {
      primary: { backgroundColor: colors.primary },
      secondary: { backgroundColor: colors.secondary },
      accent: { backgroundColor: colors.accent },
      light: { backgroundColor: colors.backgroundLight },
      cream: { backgroundColor: "#FFFFFF" },
      white: { backgroundColor: "#FFFFFF" },
    },

    // Border styles
    border: {
      primary: { borderColor: colors.primary },
      secondary: { borderColor: colors.secondary },
      accent: { borderColor: colors.accent },
      light: { borderColor: `${colors.primary}33` },
    },

    // Shadows
    shadows: {
      sm: { boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" },
      md: { boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" },
      lg: { boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)" },
      xl: { boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15)" },
      colored: { boxShadow: `0 8px 20px ${colors.primary}20` },
    },

    // Button styles
    button: {
      primary: {
        backgroundColor: colors.primary,
        color: "white",
      },
      secondary: {
        backgroundColor: colors.secondary,
        color: "white",
      },
      accent: {
        backgroundColor: colors.accent,
        color: "white",
      },
      outline: {
        backgroundColor: "transparent",
        border: `2px solid ${colors.primary}`,
        color: colors.primary,
      },
    },
  };
}
