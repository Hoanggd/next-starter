import { GithubIcon } from "@/components/icons/GithubIcon";
import { Logo } from "@/components/Logo";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Link } from "@workspace/ui/components/link";

export function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="bg-white/70 dark:bg-neutral-950/70 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="h-16 container max-w-screen-xl mx-auto flex items-center">
          <Logo />
          <Link
            href="https://github.com/Hoanggd/next-starter"
            target="_blank"
            className="ml-auto"
            variant="ghost"
            size="icon"
          >
            <GithubIcon />
          </Link>
          <ThemeSwitcher />
        </div>
      </nav>
      {children}
    </div>
  );
}
