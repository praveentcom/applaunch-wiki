"use client";

import { siteConfig } from "../../../data/config/site";
import { PrefetchLink } from "@workspace/ui/components/prefetch-link";

export function Footer() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
    <p className="text-sm text-muted-foreground">
      © {new Date().getFullYear()} {siteConfig.siteMeta?.legalEntity || siteConfig.siteMeta?.title || 'App'}
    </p>

    <div className="flex items-center flex-wrap justify-center gap-4">
      {siteConfig.flags?.pricingPage && (
        <PrefetchLink
          href="/pricing"
          className="text-sm text-muted-foreground hover:underline"
        >
          Pricing
        </PrefetchLink>
      )}
      {siteConfig.flags?.privacyPolicy && (
        <PrefetchLink
          href="/privacy"
          className="text-sm text-muted-foreground hover:underline"
        >
          Privacy
        </PrefetchLink>
      )}
      {siteConfig.flags?.termsOfService && (
        <PrefetchLink
          href="/terms"
          className="text-sm text-muted-foreground hover:underline"
        >
          Terms
        </PrefetchLink>
      )}
      {siteConfig.flags?.cookiePolicy && (
        <PrefetchLink
          href="/cookies"
          className="text-sm text-muted-foreground hover:underline"
        >
          Cookies
        </PrefetchLink>
      )}
      {siteConfig.flags?.refundPolicy && (
        <PrefetchLink
          href="/refund"
          className="text-sm text-muted-foreground hover:underline"
        >
          Refund
        </PrefetchLink>
      )}
      {siteConfig.customLinks?.footer?.map((link, index) => (
        link.external ? (
          <a
            key={index}
            href={link.href}
            className="text-sm text-muted-foreground hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ) : (
          <PrefetchLink
            key={index}
            href={link.href}
            className="text-sm text-muted-foreground hover:underline"
          >
            {link.label}
          </PrefetchLink>
        )
      ))}
    </div>
    </div>
  );
}
