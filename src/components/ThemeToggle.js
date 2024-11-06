"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export  function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="theme-toggle-button"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  )
}