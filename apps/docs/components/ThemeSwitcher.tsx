"use client";

import { useMounted } from "@/hooks/useMounted";
import { Button } from "@workspace/ui/components/button";
import { MoonStar, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)}
    >
      {mounted && (theme === Theme.DARK ? <SunIcon /> : <MoonStar />)}
    </Button>
  );
}
