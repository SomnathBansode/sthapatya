"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export interface ThemeColors {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  accent: string;
  accentLight: string;
  gradient1: string;
  gradient2: string;
  gradient3: string;
  text: string;
  textLight: string;
  background: string;
  backgroundLight: string;
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  colors: ThemeColors;
  preview: string[];
}

export const themes: Theme[] = [
  {
    id: "brand-red",
    name: "Brand Red",
    description: "Bold & Dynamic",
    preview: ["#BF3131", "#FFFFFF", "#7D0A0A", "#000000"],
    colors: {
      primary: "#BF3131", // Bright Red
      primaryLight: "#D84040", // Light Red
      primaryDark: "#7D0A0A", // Dark Red
      secondary: "#000000", // Black
      accent: "#BF3131", // Bright Red
      accentLight: "#E66A6A", // Light Red
      gradient1: "#BF3131", // Bright Red
      gradient2: "#7D0A0A", // Dark Red
      gradient3: "#000000", // Black
      text: "#000000", // Black for text
      textLight: "#7D0A0A", // Dark Red for lighter text
      background: "#FFFFFF", // White
      backgroundLight: "#FFFFFF", // White
    },
  },
];

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeId: string) => void;
  themes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  // Load saved theme (client-side only)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedThemeId = window.localStorage.getItem("sthapathya-theme");
    if (savedThemeId) {
      const theme = themes.find((t) => t.id === savedThemeId);
      if (theme) setCurrentTheme(theme);
    }
  }, []);

  const setTheme = (themeId: string) => {
    const theme = themes.find((t) => t.id === themeId);
    if (!theme) return;

    setCurrentTheme(theme);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("sthapathya-theme", themeId);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
