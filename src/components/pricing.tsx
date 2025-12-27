import { Button } from "@workspace/ui/components/button";
import { Separator } from "@workspace/ui/components/separator";
import Link from "next/link";

import { PricingPlan, siteConfig } from "@/data/config/site";

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
      {plan.ctaLink && (
        <Button
          asChild
          variant={isFeatured ? "default" : "secondary"}
          className="w-full mt-4"
        >
          <Link
            href={plan.ctaLink.href}
            {...(plan.ctaLink.external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
          >
            {plan.ctaLink.label || "Get Started"}
          </Link>
        </Button>
      )}
    </div>
  );
}

/**
 * Pricing cards section displaying pricing plans configured in the site config.
 *
 * Renders nothing if pricing is disabled or no plans are configured.
 *
 * @returns Pricing cards section or null
 */
export function PricingCards() {
  const plans = siteConfig.pricing?.plans || [];

  if (!siteConfig.flags?.pricingPage || plans.length === 0) {
    return null;
  }

  return (
    <>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {plans.map((plan) => (
          <PricingCard key={plan.title.toLowerCase()} plan={plan} />
        ))}
      </div>
    </>
  );
}