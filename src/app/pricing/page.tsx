import { ContentContainer } from "passport-ui/content-container";
import { Markdown } from "passport-ui/markdown";
import { Metadata } from "next";
import { siteConfig, PricingPlan } from "@/config/site";
import { getMarkdownContent } from "@/lib/markdown";
import { Separator } from "passport-ui/separator";

export const metadata: Metadata = {
  title: `${siteConfig.siteMeta?.title || 'App'} - Pricing`,
  description: 'View our pricing plans',
};

function PricingCard({ plan }: { plan: PricingPlan }) {
  const isFeatured = plan.featured?.enabled;
  const isCustomPricing = plan.price.amount === 0 && plan.title !== "Free";

  // Format price display
  const priceDisplay = isCustomPricing
    ? "Custom"
    : plan.price.amount === 0
    ? `${plan.price.currency}0`
    : `${plan.price.currency}${plan.price.amount}`;

  return (
    <div
      className={`flex flex-col p-6 rounded-lg space-y-3 hover:shadow-lg transition-shadow relative ${
        isFeatured ? 'border-2 border-primary' : 'border'
      }`}
    >
      {isFeatured && plan.featured?.label && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-0.5 rounded-full text-xs font-medium">
          {plan.featured.label}
        </div>
      )}
      <h3 className="text-xl font-semibold">{plan.title}</h3>
      <div className="text-3xl font-bold">
        {plan.price.originalAmount && (
          <span className="text-xl line-through text-muted-foreground mr-2">
            {plan.price.currency}{plan.price.originalAmount}
          </span>
        )}
        {priceDisplay}
        {plan.price.period && !isCustomPricing && (
          <span className="text-base font-normal text-muted-foreground">
            /{plan.price.period}
          </span>
        )}
      </div>
      <p className="text-sm text-muted-foreground">{plan.description}</p>
      <ul className="space-y-1.5 flex-grow text-sm">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start">
            <span className="mr-2">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PricingPage() {
  const pricingContent = getMarkdownContent("pricing.md");
  const plans = siteConfig.pricing?.plans || [];

  return (
    <ContentContainer variant="relaxed">
      <Markdown content={pricingContent} />
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full py-6">
        {plans.map((plan) => (
          <PricingCard key={plan.title.toLowerCase()} plan={plan} />
        ))}
      </div>
    </ContentContainer>
  );
}
