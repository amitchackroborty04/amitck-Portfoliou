import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react'; // Import useState and useEffect

export function Darkbutton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(""); // State for current theme

  useEffect(() => {
    setCurrentTheme(resolvedTheme || ""); // Set currentTheme after mount
  }, [resolvedTheme]);

  // Render a placeholder icon initially, then the correct icon
  const iconToRender = currentTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />;

  return (
    <Button
      variant="outline"
      size="icon"
      className="transition-all duration-300"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {iconToRender} {/* Use the iconToRender variable */}
    </Button>
  );
}