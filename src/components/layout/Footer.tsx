"use client";

import { siteConfig } from "@/config/site";
import { PrefetchLink } from "passport-ui/prefetch-link";

export function Footer() {
  return (
    <div className="flex items-center justify-between">
    <p className="text-sm text-muted-foreground">
      © {new Date().getFullYear()} {siteConfig.siteMeta.title}
    </p>

    <div className="flex items-center gap-4">
      {siteConfig.flags.privacyPolicy && (
        <PrefetchLink
          href="/privacy"
          className="text-sm text-muted-foreground hover:underline"
        >
          Privacy
        </PrefetchLink>
      )}
      {siteConfig.flags.termsOfService && (
        <PrefetchLink
          href="/terms"
          className="text-sm text-muted-foreground hover:underline"
        >
          Terms
        </PrefetchLink>
      )}
      {siteConfig.flags.cookiePolicy && (
        <PrefetchLink
          href="/cookies"
          className="text-sm text-muted-foreground hover:underline"
        >
          Cookies
        </PrefetchLink>
      )}
      {siteConfig.flags.refundPolicy && (
        <PrefetchLink
          href="/refund"
          className="text-sm text-muted-foreground hover:underline"
        >
          Refund
        </PrefetchLink>
      )}
    </div>
    </div>
  );
}
