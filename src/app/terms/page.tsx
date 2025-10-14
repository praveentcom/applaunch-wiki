import { ContentContainer } from "passport-ui/content-container";
import { Markdown } from "passport-ui/markdown";
import { getMarkdownContent } from "@/lib/markdown";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.siteMeta.title} - Terms of Service`,
  description: siteConfig.siteMeta.description,
};

export default function TermsPage() {
  const termsContent = getMarkdownContent("terms.md");

  return (
    <ContentContainer variant="relaxed">
      <Markdown content={termsContent} />
    </ContentContainer>
  );
}
