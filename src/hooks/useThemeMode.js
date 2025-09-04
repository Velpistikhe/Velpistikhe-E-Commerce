import { useEffect, useState } from "react";

const THEME_KEY = "darkMode";

const getInitialTheme = () => {
  const stored = localStorage.getItem(THEME_KEY);

  if (stored !== null) return JSON.parse(stored);

  return window.matchMedia("(prefers-color-scheme: dark").matches;
};

const useThemeMode = () => {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, JSON.stringify(darkMode));
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useThemeMode;
