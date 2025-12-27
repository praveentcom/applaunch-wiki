import { Markdown } from "@workspace/ui/components/markdown";
import { Separator } from "@workspace/ui/components/separator";

import { Landing } from "@/components/landing";
import { getMarkdownContent } from "@/components/markdown";
import { PricingCards } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";

/**
 * Home page component displaying the landing section, home content,
 * pricing cards (if available), and testimonials as configured in the site config.
 *
 * 1. Landing section
 * 2. Home content
 * 3. Pricing cards (if available)
 * 4. Testimonials
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
      <PricingCards />
      <Testimonials />
    </div>
  );
}
