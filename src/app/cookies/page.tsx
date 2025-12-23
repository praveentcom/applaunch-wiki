import { Markdown } from "@workspace/ui/components/markdown";
import { Metadata } from "next";

import { getMarkdownContent } from "@/components/markdown";

import { siteConfig } from "../../../data/config/site";

/**
 * Metadata for the cookie policy page
 * @returns Metadata for the cookie policy page
 */
export const metadata: Metadata = {
  title: `${siteConfig.siteMeta?.title || "App"} - Cookie Policy`,
  description: siteConfig.siteMeta?.description || "Cookie policy",
};

/**
 * Cookie policy page component displaying the cookie policy content
 * as configured in the site config.
 * 
 * 1. Cookie policy content
 * 
 * @returns Cookie policy page component
 */
export default function CookiesPage() {
  const cookiesContent = getMarkdownContent("cookies.md");

  return (
    <div>
      <Markdown content={cookiesContent || ""} />
    </div>
  );
}
