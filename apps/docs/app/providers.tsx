"use client";

import { ThemeProvider } from "next-themes";
import { useRouter } from "next/navigation";
import { RouterProvider } from "react-aria-components";
import { Toaster as SonnerToaster } from "sonner";
import { Toaster } from "@workspace/ui/components/sonner";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  let router = useRouter();

  return (
    <RouterProvider navigate={router.push}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange
        enableColorScheme
      >
        {children}
        <SonnerToaster />
        <Toaster />
      </ThemeProvider>
    </RouterProvider>
  );
}
