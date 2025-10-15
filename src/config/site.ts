export interface CustomLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteConfig {
  siteMeta: {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    legalEntity: string;
    logo: string;
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
  };
  flags: {
    privacyPolicy: boolean;
    termsOfService: boolean;
    cookiePolicy: boolean;
    refundPolicy: boolean;
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
}

export const siteConfig: SiteConfig = {
  siteMeta: {
    title: "AppLaunch Wiki",
    description: "Template for your mobile app marketing page. Configure the app details and download links to get started.",
    keywords: ["mobile app", "app marketing", "applaunch-wiki", "app store", "google play"],
    author: "AppLaunch Wiki Team",
    legalEntity: "AppLaunch Wiki Inc.",
    logo: "/logo.png",
    favicon: "/favicon.ico", // URL to your favicon (.ico or .png)
  },
  twitter: {
    card: "summary_large_image",
    title: "AppLaunch Wiki - Mobile App Marketing Template",
    description: "Template for your mobile app marketing page. Configure the app details and download links to get started.",
    image: "/cover-image.png",
    site: "@praveentcom",
    creator: "@praveentcom",
  },
  opengraph: {
    type: "website",
    title: "AppLaunch Wiki - Mobile App Marketing Template",
    description: "Template for your mobile app marketing page. Configure the app details and download links to get started.",
    url: "https://applaunch.wiki",
    siteName: "AppLaunch Wiki",
    image: "/cover-image.png",
    locale: "en_US",
  },
  appMeta: {
    ios: "https://apps.apple.com/us/app/applaunch-wiki/id1234567890",
    android: "https://play.google.com/store/apps/details?id=android.applaunch.wiki",
  },
  flags: {
    privacyPolicy: true,
    termsOfService: true,
    cookiePolicy: true,
    refundPolicy: true,
  },
  heroSection: {
    title: "AppLaunch Wiki",
    description: "Template for your mobile app marketing page. Configure the app details and download links to get started.",
    screenshot: {
      image: "/hero-image.png",
      alt: "Hero Image",
      width: 800,
      height: 1000,
    }
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
};
