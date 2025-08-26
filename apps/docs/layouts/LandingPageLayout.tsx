import { GithubIcon } from "@/components/icons/GithubIcon";
import { Logo } from "@/components/Logo";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { GITHUB_URL } from "@/constants/common";
import { Link } from "@workspace/ui/components/link";
import { DocsSearch } from "./_shared/DocsSearch";

const navLinks = [
  {
    label: "Docs",
    href: "/docs/ui/introduction",
  },
];

export function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="bg-white/70 dark:bg-neutral-950/70 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="h-16 container max-w-screen-xl mx-auto flex items-center">
          <Logo />
          <div className="flex items-center gap-2 ml-4">
            {navLinks.map((link) => (
              <Link variant={"unstyled"} href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="ml-auto flex items-center">
            <DocsSearch className="mr-4" />
            <Link
              href={GITHUB_URL}
              target="_blank"
              className="ml-auto"
              variant="ghost"
              size="icon"
            >
              <GithubIcon />
            </Link>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
