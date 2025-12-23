import { Markdown } from "@workspace/ui/components/markdown";
import { Metadata } from "next";

import { getMarkdownContent } from "@/components/markdown";

import { siteConfig } from "../../../data/config/site";

/**
 * Metadata for the terms of service page
 * @returns Metadata for the terms of service page
 */
export const metadata: Metadata = {
  title: `${siteConfig.siteMeta?.title || "App"} - Terms of Service`,
  description: siteConfig.siteMeta?.description || "Terms of service",
};

/**
 * Terms of service page component displaying the terms of service content
 * as configured in the site config.
 * 
 * 1. Terms of service content
 * 
 * @returns Terms of service page component
 */
export default function TermsPage() {
  const termsContent = getMarkdownContent("terms.md");

  return (
    <Markdown content={termsContent || ""} />
  );
}
