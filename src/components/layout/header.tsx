"use client";

import { Menu } from "lucide-react";
import { Button } from "@workspace/ui/components/button";

import { PrefetchLink } from "@workspace/ui/components/prefetch-link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@workspace/ui/components/dropdown-menu";
import { ThemeSwitcher } from "@workspace/ui/components/theme-switcher";

import { usePathname } from "next/navigation";
import { cn } from "@workspace/ui/lib/utils";
import { useTheme } from "next-themes";
import { siteConfig } from "@/data/config/site";

const NAV_ITEMS = [
  { label: "Articles", href: "/articles" },
  { label: "Projects", href: "/projects" },
  { label: "Community", href: "/community" },
];

export function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const pathname = usePathname();
  const isActive = (href: string) => pathname?.startsWith(href);

  const themeSwitcher = (
    <ThemeSwitcher
      theme={theme}
      resolvedTheme={resolvedTheme}
      setTheme={setTheme}
    />
  );

  return (
    <div className="flex items-center justify-between">
      <PrefetchLink
          href={pathname === "/" ? "/about" : "/"}
      >
        <h4>
            {siteConfig.siteMeta?.title}
        </h4>
      </PrefetchLink>
      <div className="hidden md:flex md:items-center md:gap-2">
        <NavigationMenu>
          <NavigationMenuList>
            {NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive(item.href) && "bg-accent text-accent-foreground",
                  )}
                >
                  <PrefetchLink href={item.href}>{item.label}</PrefetchLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        {themeSwitcher}
      </div>
      <div className="flex items-center gap-1 md:hidden">
        {themeSwitcher}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {NAV_ITEMS.map((item) => (
              <DropdownMenuItem
                key={item.href}
                asChild
                className={cn(
                  isActive(item.href) && "bg-accent text-accent-foreground",
                )}
              >
                <PrefetchLink href={item.href}>{item.label}</PrefetchLink>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
