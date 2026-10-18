import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { applyTheme, setStoredTheme } from "@/lib/theme";

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
      className="rounded-md p-2 text-muted transition-colors hover:text-fg"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};
