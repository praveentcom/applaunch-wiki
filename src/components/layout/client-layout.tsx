"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "passport-ui/navigation-menu";
import { PageLayout } from "passport-ui/page-layout";
import {
  SidebarProvider,
} from "passport-ui/sidebar";
import { ThemeButton } from "passport-ui/theme-button";
import { siteConfig } from "@/config/site";
import Image from "next/image";

import { Footer } from "./Footer";
import { PrefetchLink } from "passport-ui/prefetch-link";

export function ClientLayoutInner({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout
      header={
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PrefetchLink href="/" className="flex items-center gap-3">
              {siteConfig.siteMeta?.logo && (
                <Image
                  src={siteConfig.siteMeta.logo}
                  alt={`${siteConfig.siteMeta?.title || 'App'} logo`}
                  width={64}
                  height={64}
                  className="size-8 rounded-sm"
                />
              )}
              <h3>{siteConfig.siteMeta?.title || 'App'}</h3>
            </PrefetchLink>
          </div>
          <div className="flex items-center gap-3">
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuLink href="/">Home</NavigationMenuLink>
                </NavigationMenuItem>
                {siteConfig.flags?.privacyPolicy && (
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/privacy">Privacy</NavigationMenuLink>
                  </NavigationMenuItem>
                )}
                {siteConfig.flags?.termsOfService && (
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/terms">Terms</NavigationMenuLink>
                  </NavigationMenuItem>
                )}
                {siteConfig.flags?.cookiePolicy && (
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/cookies">Cookies</NavigationMenuLink>
                  </NavigationMenuItem>
                )}
                {siteConfig.flags?.refundPolicy && (
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/refund">Refund</NavigationMenuLink>
                  </NavigationMenuItem>
                )}
              </NavigationMenuList>
            </NavigationMenu>
            <div className="w-8">
              <ThemeButton minimal variant="ghost" align="end" size="medium" />
            </div>
          </div>
        </div>
      }
      headerOptions={{
        variant: "relaxed",
        sticky: true,
        blurred: true,
        revealStylesOnScroll: true,
      }}
      footer={<Footer />}
      footerOptions={{
        variant: "relaxed",
        sticky: true,
        blurred: true
      }}
    >
      {children}
    </PageLayout>
  );
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <ClientLayoutInner>{children}</ClientLayoutInner>
    </SidebarProvider>
  );
}
