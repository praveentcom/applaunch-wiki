import { Markdown } from "@workspace/ui/components/markdown";
import { Separator } from "@workspace/ui/components/separator";

import { Landing } from "@/components/landing";
import { getMarkdownContent } from "@/components/markdown";
import { Testimonials } from "@/components/testimonials";

/**
 * Home page component displaying the landing section, home content, and testimonials
 * as configured in the site config.
 * 
 * 1. Landing section
 * 2. Home content
 * 3. Testimonials
 * 
 * @returns Home page component
 */
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
