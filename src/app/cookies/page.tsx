import { ContentContainer } from "passport-ui/content-container";
import { Markdown } from "passport-ui/markdown";
import { getMarkdownContent } from "@/lib/markdown";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.siteMeta?.title || 'App'} - Cookie Policy`,
  description: siteConfig.siteMeta?.description || 'Cookie policy',
};

export default function CookiesPage() {
  const cookiesContent = getMarkdownContent("cookies.md");

  return (
    <ContentContainer variant="relaxed">
      <Markdown content={cookiesContent} />
    </ContentContainer>
  );
}

