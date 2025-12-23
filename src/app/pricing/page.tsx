import { Markdown } from "@workspace/ui/components/markdown";
import { Separator } from "@workspace/ui/components/separator";
import { Metadata } from "next";

import { getMarkdownContent } from "@/components/markdown";

import { PricingPlan, siteConfig } from "../../../data/config/site";

/**
 * Metadata for the pricing page
 * @returns Metadata for the pricing page
 */
export const metadata: Metadata = {
  title: `${siteConfig.siteMeta?.title || "App"} - Pricing`,
  description: siteConfig.siteMeta?.description || "Pricing",
};

/**
 * Pricing card component displaying the pricing plan
 * @param plan - The pricing plan
 * @returns Pricing card component
 */
function PricingCard({ plan }: { plan: PricingPlan }) {
  const isFeatured = plan.featured?.enabled;
  const isCustomPricing = plan.price.amount === 0 && plan.title !== "Free";

  const priceDisplay = isCustomPricing
    ? "Custom"
    : plan.price.amount === 0
      ? `${plan.price.currency}0`
      : `${plan.price.currency}${plan.price.amount}`;

  return (
    <div
      className={`flex flex-col p-6 rounded-lg space-y-3 hover:shadow-lg transition-shadow relative ${
        isFeatured ? "border-2 border-primary" : "border"
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
            {plan.price.currency}
            {plan.price.originalAmount}
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
      <ul className="space-y-1.5 grow text-sm">
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

/**
 * Pricing page component displaying the pricing content
 * as configured in the site config.
 * 
 * 1. Pricing content
 * 2. Pricing cards
 * 
 * @returns Pricing page component
 */
export default function PricingPage() {
  const plans = siteConfig.pricing?.plans || [];
  const pricingContent = getMarkdownContent("pricing.md");

  return (
    <div>
      <Markdown content={pricingContent || ""} />
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {plans.map((plan) => (
          <PricingCard key={plan.title.toLowerCase()} plan={plan} />
        ))}
      </div>
    </div>
  );
}
