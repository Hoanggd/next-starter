import { DocsLayout } from "@/layouts/Docs/DocsLayout";
import "@workspace/ui/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter, Geist_Mono } from "next/font/google";
import { Toaster as SonnerToaster } from "sonner";
import { Toaster } from "@workspace/ui/components/sonner";

const fontSans = Inter({ subsets: ["latin"] });
const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Sophon",
  description:
    "Sophon is a modern, open-source, and fully customizable UI library for React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.className} ${fontMono.variable}`}
    >
      <body className={`antialiased text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
          enableColorScheme
        >
          <DocsLayout tocs={<div id="toc"></div>}>{children}</DocsLayout>
          <SonnerToaster />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
