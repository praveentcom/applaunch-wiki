import { ContentContainer } from "passport-ui/content-container";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.siteMeta?.title || 'App'} - Pricing`,
  description: 'View our pricing plans',
};

export default function PricingPage() {
  return (
    <ContentContainer variant="relaxed">
      <div className="flex flex-col items-center space-y-12 py-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Pricing</h1>
          <p className="text-muted-foreground text-lg">
            Simple, transparent pricing for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Free Tier */}
          <div className="flex flex-col p-8 border rounded-lg space-y-4 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold">Free</h3>
            <div className="text-4xl font-bold">$0</div>
            <p className="text-muted-foreground">Perfect for getting started</p>
            <ul className="space-y-2 flex-grow">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Basic features</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Community support</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Limited usage</span>
              </li>
            </ul>
          </div>

          {/* Pro Tier */}
          <div className="flex flex-col p-8 border-2 border-primary rounded-lg space-y-4 hover:shadow-lg transition-shadow relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
              Popular
            </div>
            <h3 className="text-2xl font-semibold">Pro</h3>
            <div className="text-4xl font-bold">$9.99<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
            <p className="text-muted-foreground">For professionals and teams</p>
            <ul className="space-y-2 flex-grow">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>All Free features</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Priority support</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Advanced features</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Unlimited usage</span>
              </li>
            </ul>
          </div>

          {/* Enterprise Tier */}
          <div className="flex flex-col p-8 border rounded-lg space-y-4 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold">Enterprise</h3>
            <div className="text-4xl font-bold">Custom</div>
            <p className="text-muted-foreground">For large organizations</p>
            <ul className="space-y-2 flex-grow">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>All Pro features</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Dedicated support</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Custom integrations</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>SLA guarantee</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}
