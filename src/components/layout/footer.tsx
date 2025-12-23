"use client";

import { Button } from "@workspace/ui/components/button";
import { PrefetchLink } from "@workspace/ui/components/prefetch-link";

import { siteConfig } from "../../../data/config/site";

/**
 * Footer component displaying the footer label and applicable links
 * as configured in the site config.
 *
 * @returns Footer component
 */
export function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-12 mt-4 mb-12 w-full">
      <div className="grid gap-4">
        <h5 className="text-center md:text-left">
          {siteConfig.siteMeta?.legalEntity ||
            siteConfig.siteMeta?.title ||
            "App"}
        </h5>
        <p className="text-muted-foreground text-center md:text-left">
          {siteConfig.siteMeta?.description}
        </p>
      </div>
      <div className="grid grid-cols-2 items-center justify-between text-center md:text-left">
        {siteConfig.flags?.pricingPage && (
          <PrefetchLink href="/pricing">
            <Button variant="ghost">Pricing</Button>
          </PrefetchLink>
        )}
        {siteConfig.flags?.privacyPolicy && (
          <PrefetchLink href="/privacy">
            <Button variant="ghost">Privacy</Button>
          </PrefetchLink>
        )}
        {siteConfig.flags?.termsOfService && (
          <PrefetchLink href="/terms">
            <Button variant="ghost">Terms</Button>
          </PrefetchLink>
        )}
        {siteConfig.flags?.cookiePolicy && (
          <PrefetchLink href="/cookies">
            <Button variant="ghost">Cookies</Button>
          </PrefetchLink>
        )}
        {siteConfig.flags?.refundPolicy && (
          <PrefetchLink href="/refund">
            <Button variant="ghost">Refund</Button>
          </PrefetchLink>
        )}
        {siteConfig.customLinks?.footer?.map((link, index) =>
          link.external ? (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost">{link.label}</Button>
            </a>
          ) : (
            <PrefetchLink key={index} href={link.href}>
              <Button variant="ghost">{link.label}</Button>
            </PrefetchLink>
          ),
        )}
      </div>
    </div>
  );
}
