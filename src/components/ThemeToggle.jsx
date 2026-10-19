import { useState } from "react";
import { sprites } from "@/data/sprites";
import { applyTheme, setStoredTheme } from "@/lib/theme";
import { PixelSprite } from "./PixelSprite";

export const ThemeToggle = () => {
  // index.html sets the class before first paint; read it back as the source of truth.
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    applyTheme(next);
    setStoredTheme(next);
    setIsDark(!isDark);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid size-11 cursor-pointer place-items-center border-2 border-transparent transition-colors duration-100 hover:border-line"
    >
      <PixelSprite frames={isDark ? sprites.sun : sprites.moon} scale={3} />
    </button>
  );
};
