import { Markdown } from "@workspace/ui/components/markdown";
import { Metadata } from "next";

import { PricingCards } from "@/components/pricing";
import { getMarkdownContent } from "@/components/markdown";

import { siteConfig } from "../../../data/config/site";

/**
 * Metadata for the pricing page
 * @returns Metadata for the pricing page
 */
export const metadata: Metadata = {
  title: `${siteConfig.siteMeta?.title || "App"} - Pricing`,
  description: siteConfig.siteMeta?.description || "Pricing",
};

/**
 * Pricing page component displaying the pricing content
 * and pricing cards as configured in the site config.
 *
 * 1. Pricing content
 * 2. Pricing cards
 *
 * @returns Pricing page component
 */
export default function PricingPage() {
  const pricingContent = getMarkdownContent("pricing.md");

  return (
    <div>
      <Markdown content={pricingContent || ""} />
      <PricingCards />
    </div>
  );
}
