import { ContentContainer } from "passport-ui/content-container";
import { Markdown } from "passport-ui/markdown";
import { getMarkdownContent } from "@/lib/markdown";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.siteMeta?.title || 'App'} - Privacy Policy`,
  description: siteConfig.siteMeta?.description || 'Privacy policy',
};

export default function PrivacyPage() {
  const privacyContent = getMarkdownContent("privacy.md");

  return (
    <ContentContainer variant="relaxed">
      <Markdown content={privacyContent} />
    </ContentContainer>
  );
}
