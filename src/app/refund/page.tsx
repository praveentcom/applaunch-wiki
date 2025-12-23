import { Markdown } from "@workspace/ui/components/markdown";
import { Metadata } from "next";

import { getMarkdownContent } from "@/components/markdown";

import { siteConfig } from "../../../data/config/site";

/**
 * Metadata for the refund policy page
 * @returns Metadata for the refund policy page
 */
export const metadata: Metadata = {
  title: `${siteConfig.siteMeta?.title || "App"} - Refund Policy`,
  description: siteConfig.siteMeta?.description || "Refund policy",
};

/**
 * Refund policy page component displaying the refund policy content
 * as configured in the site config.
 * 
 * 1. Refund policy content
 * 
 * @returns Refund policy page component
 */
export default function RefundPage() {
  const refundContent = getMarkdownContent("refund.md");

  return (
    <Markdown content={refundContent || ""} />
  );
}
