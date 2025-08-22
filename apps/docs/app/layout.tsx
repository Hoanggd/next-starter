import "@workspace/ui/globals.css";
import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { Providers } from "./providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
