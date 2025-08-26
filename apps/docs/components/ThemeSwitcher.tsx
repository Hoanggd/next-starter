"use client";

import { Button } from "@workspace/ui/components/button";
import { MoonStar, SunIcon } from "lucide-react";
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
      {theme === Theme.DARK ? <SunIcon /> : <MoonStar />}
    </Button>
  );
}
