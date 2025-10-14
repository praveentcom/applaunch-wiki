import { ContentContainer } from "passport-ui/content-container";
import { Markdown } from "passport-ui/markdown";
import { getMarkdownContent } from "@/lib/markdown";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.siteMeta?.title || 'App'} - Refund Policy`,
  description: siteConfig.siteMeta?.description || 'Refund policy',
};

export default function RefundPage() {
  const refundContent = getMarkdownContent("refund.md");

  return (
    <ContentContainer variant="relaxed">
      <Markdown content={refundContent} />
    </ContentContainer>
  );
}

