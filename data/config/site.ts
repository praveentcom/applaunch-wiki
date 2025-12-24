export const siteConfig: SiteConfig = {
  siteMeta: {
    title: "AppLaunch Wiki",
    description:
      "Template for your mobile app marketing page. Configure the app details and download links to get started.",
    keywords: [
      "mobile app",
      "app marketing",
      "applaunch-wiki",
      "app store",
      "google play",
    ],
    author: "AppLaunch Wiki Team",
    legalEntity: "AppLaunch Wiki Inc.",
    logo: "/logo.png",
    logoDark: "/logo-dark.png",
    favicon: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: "AppLaunch Wiki - Mobile App Marketing Template",
    description:
      "Template for your mobile app marketing page. Configure the app details and download links to get started.",
    image: "/cover-image.png",
    site: "@praveentcom",
    creator: "@praveentcom",
  },
  opengraph: {
    type: "website",
    title: "AppLaunch Wiki - Mobile App Marketing Template",
    description:
      "Template for your mobile app marketing page. Configure the app details and download links to get started.",
    url: "https://applaunch.wiki",
    siteName: "AppLaunch Wiki",
    image: "/cover-image.png",
    locale: "en_US",
  },
  appMeta: {
    ios: "https://apps.apple.com/us/app/applaunch-wiki/id1234567890",
    android:
      "https://play.google.com/store/apps/details?id=android.applaunch.wiki",
    web: "https://example.com",
    github: "https://github.com/example/repo",
  },
  flags: {
    privacyPolicy: true,
    termsOfService: true,
    cookiePolicy: true,
    refundPolicy: true,
    pricingPage: true,
  },
  heroSection: {
    title: "AppLaunch Wiki",
    description:
      "Template for your mobile app marketing page. Configure the app details and download links to get started.",
    screenshot: {
      image: "/hero-image.png",
      alt: "Hero Image",
      width: 800,
      height: 1000,
    },
  },
  customLinks: {
    header: [
      // Example custom header links (uncomment and modify as needed)
      // { label: "Blog", href: "/blog", external: false },
      // { label: "Docs", href: "/docs", external: false },
      // { label: "Support", href: "https://support.example.com", external: true },
    ],
    footer: [
      // Example custom footer links (uncomment and modify as needed)
      // { label: "About", href: "/about", external: false },
      // { label: "Contact", href: "/contact", external: false },
      // { label: "Blog", href: "/blog", external: false },
    ],
  },
  pricing: {
    plans: [
      {
        title: "Free",
        description: "Perfect for getting started",
        price: {
          amount: 0,
          currency: "$",
        },
        features: ["Basic features", "Community support", "Limited usage"],
        ctaLink: { href: "/signup", label: "Start Free" },
      },
      {
        title: "Pro",
        description: "For professionals and teams",
        price: {
          amount: 9.99,
          currency: "$",
          period: "mo",
        },
        featured: {
          enabled: true,
          label: "Popular",
        },
        features: [
          "All Free features",
          "Priority support",
          "Advanced features",
          "Unlimited usage",
        ],
        ctaLink: { href: "/signup?plan=pro", label: "Get Started" },
      },
      {
        title: "Enterprise",
        description: "For large organizations",
        price: {
          amount: 0, // Custom pricing
          currency: "$",
        },
        features: [
          "All Pro features",
          "Dedicated support",
          "Custom integrations",
          "SLA guarantee",
        ],
        ctaLink: {
          href: "mailto:sales@example.com",
          label: "Contact Sales",
          external: true,
        },
      },
    ],
  },
  testimonials: {
    title: "What Our Users Say",
    items: [
      {
        content:
          "This app has completely transformed the way I work. The interface is intuitive and the features are exactly what I needed.",
        reviewerName: "Sarah Johnson",
        reviewerPosition: "Product Manager",
        source: "App Store Review",
      },
      {
        content:
          "I've tried many similar apps, but this one stands out. Great performance and excellent customer support.",
        reviewerName: "Michael Chen",
        reviewerPosition: "Software Engineer",
        source: "Google Play Review",
      },
      {
        content:
          "The best investment for our team. It has improved our productivity significantly and the learning curve was minimal.",
        reviewerName: "Emily Rodriguez",
        reviewerPosition: "Team Lead",
        source: "Enterprise Customer",
      },
    ],
  },
};

export interface CustomLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface PricingPlan {
  title: string;
  description: string;
  price: {
    amount: number;
    currency: string;
    period?: string; // e.g., "mo", "yr", or omit for one-time
    originalAmount?: number; // For showing discounts
  };
  featured?: {
    enabled: boolean;
    label?: string; // e.g., "Popular", "Recommended", "Best Value"
  };
  features: string[];
  ctaLink?: {
    href: string;
    label?: string; // e.g., "Get Started", "Contact Sales" (defaults to "Get Started")
    external?: boolean; // Opens in new tab if true
  };
}

export interface Testimonial {
  content: string;
  reviewerName: string;
  reviewerPosition: string;
  source: string;
  reviewerPhotoUrl?: string;
}

export interface SiteConfig {
  siteMeta: {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    legalEntity: string;
    logo: string;
    logoDark?: string; // Optional: dark mode logo variant (falls back to logo if not set)
    favicon: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
    site: string;
    creator: string;
  };
  opengraph: {
    type: string;
    title: string;
    description: string;
    url: string;
    siteName: string;
    image: string;
    locale: string;
  };
  appMeta: {
    ios?: string | null | undefined;
    android?: string | null | undefined;
    web?: string | null | undefined;
    github?: string | null | undefined;
  };
  flags: {
    privacyPolicy: boolean;
    termsOfService: boolean;
    cookiePolicy: boolean;
    refundPolicy: boolean;
    pricingPage: boolean;
  };
  heroSection: {
    title: string;
    description: string;
    screenshot: {
      image: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  customLinks?: {
    header?: CustomLink[];
    footer?: CustomLink[];
  };
  pricing?: {
    plans: PricingPlan[];
  };
  testimonials?: {
    title: string;
    items: Testimonial[];
  };
}
