import { ContentContainer } from "passport-ui/content-container";
import { Markdown } from "passport-ui/markdown";
import { Landing } from "@/components/landing";
import { Testimonials } from "@/components/testimonials";
import { Separator } from "passport-ui/separator";
import { getMarkdownContent } from "@/lib/markdown";

export default function Home() {
  const homeContent = getMarkdownContent("home.md");

  return (
    <ContentContainer variant="relaxed">
      <Landing />
      <Separator />
      <Markdown content={homeContent} />
      <Testimonials />
    </ContentContainer>
  );
}
