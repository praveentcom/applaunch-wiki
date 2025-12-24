"use client";

import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu";
import { PrefetchLink } from "@workspace/ui/components/prefetch-link";
import { ThemeSwitcher } from "@workspace/ui/components/theme-switcher";
import { cn } from "@workspace/ui/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useMemo } from "react";

import { siteConfig } from "@/data/config/site";

/**
 * Header component displaying the header label and applicable links
 * as configured in the site config.
 *
 * @returns Header component
 */
export function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const pathname = usePathname();
  const isActive = (href: string) => pathname?.startsWith(href);

  const navItems = useMemo(() => {
    const items: { label: string; href: string; external?: boolean }[] = [];

    if (siteConfig.flags?.pricingPage) {
      items.push({ label: "Pricing", href: "/pricing" });
    }
    if (siteConfig.flags?.privacyPolicy) {
      items.push({ label: "Privacy", href: "/privacy" });
    }
    if (siteConfig.flags?.termsOfService) {
      items.push({ label: "Terms", href: "/terms" });
    }
    if (siteConfig.flags?.cookiePolicy) {
      items.push({ label: "Cookies", href: "/cookies" });
    }
    if (siteConfig.flags?.refundPolicy) {
      items.push({ label: "Refund", href: "/refund" });
    }

    siteConfig.customLinks?.header?.forEach((link) => {
      items.push({
        label: link.label,
        href: link.href,
        external: link.external,
      });
    });

    return items;
  }, []);

  const themeSwitcher = (
    <ThemeSwitcher
      theme={theme}
      resolvedTheme={resolvedTheme}
      setTheme={setTheme}
    />
  );

  return (
    <div className="flex items-center justify-between">
      <PrefetchLink href="/">
        <div className="flex gap-2">
          <Image
            src={siteConfig.siteMeta?.logo}
            alt={siteConfig.siteMeta?.title}
            width={32}
            height={32}
            className="size-8 object-contain"
          />
          <h4>{siteConfig.siteMeta?.title}</h4>
        </div>
      </PrefetchLink>
      <div className="hidden md:flex md:items-center md:gap-2">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive(item.href) && "bg-accent text-accent-foreground",
                  )}
                >
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <PrefetchLink href={item.href}>{item.label}</PrefetchLink>
                  )}
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
            {navItems.map((item) => (
              <DropdownMenuItem
                key={item.href}
                asChild
                className={cn(
                  isActive(item.href) && "bg-accent text-accent-foreground",
                )}
              >
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <PrefetchLink href={item.href}>{item.label}</PrefetchLink>
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
