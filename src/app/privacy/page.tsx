import { Markdown } from "@workspace/ui/components/markdown";
import { Metadata } from "next";

import { getMarkdownContent } from "@/components/markdown";

import { siteConfig } from "../../../data/config/site";

/**
 * Metadata for the privacy policy page
 * @returns Metadata for the privacy policy page
 */
export const metadata: Metadata = {
  title: `${siteConfig.siteMeta?.title || "App"} - Privacy Policy`,
  description: siteConfig.siteMeta?.description || "Privacy policy",
};

/**
 * Privacy policy page component displaying the privacy policy content
 * as configured in the site config.
 * 
 * 1. Privacy policy content
 * 
 * @returns Privacy policy page component
 */
export default function PrivacyPage() {
  const privacyContent = getMarkdownContent("privacy.md");

  return (
    <div>
      <Markdown content={privacyContent || ""} />
    </div>
  );
}
