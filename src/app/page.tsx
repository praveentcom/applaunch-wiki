import { Landing } from "@/components/landing";
import { Testimonials } from "@/components/testimonials";
import { Separator } from "@workspace/ui/components/separator";
import { Markdown } from "@workspace/ui/components/markdown";
import { getMarkdownContent } from "@/components/markdown";


export default function HomePage() {
  const homeContent = getMarkdownContent("home.md");

  return (
    <div>
      <Landing />
      <Separator />
      <Markdown content={homeContent || ""} />
      <Testimonials />
    </div>
  );
}
