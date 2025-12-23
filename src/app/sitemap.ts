import { MetadataRoute } from "next";

import { siteConfig } from "../../data/config/site";

/**
 * Sitemap component generating the sitemap for the website. The list of
 * routes is generated based on the flags configured in the site config.
 *
 * 1. Home page
 * 2. Pricing page (if enabled)
 * 3. Privacy page (if enabled)
 * 4. Terms page (if enabled)
 * 5. Cookie page (if enabled)
 * 6. Refund page (if enabled)
 *
 * @returns Sitemap component
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.opengraph?.url || "";

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
  ];

  if (siteConfig.flags?.pricingPage) {
    routes.push({
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    });
  }

  if (siteConfig.flags?.privacyPolicy) {
    routes.push({
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    });
  }

  if (siteConfig.flags?.termsOfService) {
    routes.push({
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    });
  }

  if (siteConfig.flags?.cookiePolicy) {
    routes.push({
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    });
  }

  if (siteConfig.flags?.refundPolicy) {
    routes.push({
      url: `${baseUrl}/refund`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    });
  }

  return routes;
}
