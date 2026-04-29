import { Sun, Moon } from "lucide-react";
import { Button } from "../components/ui/button";
import { useTheme } from "../context/theme-context";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      size="icon"
      variant="default"
      className="w-8 h-8 text-ring flex-shrink-0"
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </Button>
  );
}