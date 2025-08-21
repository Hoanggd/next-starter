"use client";

import { DarkModeIcon } from "@/components/icons/DarkMode";
import { LightModeIcon } from "@/components/icons/LightMode";
import { Button } from "@workspace/ui/components/button";
import { useTheme } from "next-themes";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)}
    >
      {theme === Theme.DARK ? <LightModeIcon /> : <DarkModeIcon />}
    </Button>
  );
}
