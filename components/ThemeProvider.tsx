"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = "light",
  attribute = "class",
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
  attribute?: string;
  [key: string]: any;
}) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const storedTheme = (localStorage.getItem("theme") as Theme) || defaultTheme;
    setThemeState(storedTheme);
    applyTheme(storedTheme);
  }, [defaultTheme]);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    let targetTheme = newTheme;

    if (newTheme === "system") {
      targetTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    if (attribute === "class") {
      root.classList.remove("light", "dark");
      root.classList.add(targetTheme);
    } else {
      root.setAttribute(attribute, targetTheme);
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};