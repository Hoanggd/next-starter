import { Button } from "@workspace/ui/components/button";
import {
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { MenuIcon } from "lucide-react";
import { SidebarMenu } from "./SidebarMenu";
import { Logo } from "@/components/Logo";
import { Link } from "@workspace/ui/components/link";
import { GITHUB_URL } from "@/constants/common";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="w-full flex items-center gap-1">
      <DialogTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
        <Button variant="ghost" size="icon" className="size-10 [&>svg]:size-6">
          <MenuIcon />
        </Button>
        <DialogOverlay>
          <DialogContent className="pl-0">
            <div>
              <div className="px-6">
                <Logo showName={false} />
              </div>
              <div className="h-[500px]">
                <SidebarMenu />
              </div>
            </div>
          </DialogContent>
        </DialogOverlay>
      </DialogTrigger>

      <div className="flex items-center gap-1 ml-auto">
        <Link href={GITHUB_URL} target="_blank" variant="ghost" size="icon">
          <GithubIcon />
        </Link>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
