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
      className={`flex flex-col p-8 rounded-lg space-y-4 hover:shadow-lg transition-shadow relative ${
        isFeatured ? 'border-2 border-primary' : 'border'
      }`}
    >
      {isFeatured && plan.featured?.label && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
          {plan.featured.label}
        </div>
      )}
      <h3 className="text-2xl font-semibold">{plan.title}</h3>
      <div className="text-4xl font-bold">
        {plan.price.originalAmount && (
          <span className="text-2xl line-through text-muted-foreground mr-2">
            {plan.price.currency}{plan.price.originalAmount}
          </span>
        )}
        {priceDisplay}
        {plan.price.period && !isCustomPricing && (
          <span className="text-lg font-normal text-muted-foreground">
            /{plan.price.period}
          </span>
        )}
      </div>
      <p className="text-muted-foreground">{plan.description}</p>
      <ul className="space-y-2 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full py-8">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </ContentContainer>
  );
}
