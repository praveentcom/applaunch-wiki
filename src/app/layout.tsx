import { ClientLayout } from "@/components/layout/client-layout";
import "./styles/globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "passport-ui/theme-provider";
import { siteConfig } from "@/config/site";

// Extract App Store ID from iOS URL if available
const getAppStoreId = (url: string | undefined): string | null => {
  if (!url) return null;
  const match = url.match(/id(\d+)/);
  return match ? match[1] : null;
};

// Extract Android package name from Play Store URL if available
const getAndroidPackageName = (url: string | undefined): string | null => {
  if (!url) return null;
  const match = url.match(/id=([^&]+)/);
  return match ? match[1] : null;
};

const appStoreId = getAppStoreId(siteConfig.appMeta?.ios);
const androidPackageName = getAndroidPackageName(siteConfig.appMeta?.android);

export const metadata: Metadata = {
  title: siteConfig.siteMeta?.title || 'App',
  description: siteConfig.siteMeta?.description || 'App description',
  keywords: siteConfig.siteMeta?.keywords,
  authors: siteConfig.siteMeta?.author ? [{ name: siteConfig.siteMeta.author }] : undefined,
  icons: siteConfig.siteMeta?.favicon ? {
    icon: siteConfig.siteMeta.favicon,
  } : undefined,
  openGraph: {
    type: (siteConfig.opengraph?.type as "website") || "website",
    title: siteConfig.opengraph?.title || siteConfig.siteMeta?.title || 'App',
    description: siteConfig.opengraph?.description || siteConfig.siteMeta?.description || 'App description',
    url: siteConfig.opengraph?.url,
    siteName: siteConfig.opengraph?.siteName || siteConfig.siteMeta?.title,
    images: siteConfig.opengraph?.image ? [
      {
        url: siteConfig.opengraph.image,
        alt: siteConfig.opengraph?.title || siteConfig.siteMeta?.title || 'App',
      },
    ] : undefined,
    locale: siteConfig.opengraph?.locale || 'en_US',
  },
  twitter: siteConfig.twitter ? {
    card: (siteConfig.twitter.card as "summary_large_image") || "summary_large_image",
    title: siteConfig.twitter.title || siteConfig.siteMeta?.title,
    description: siteConfig.twitter.description || siteConfig.siteMeta?.description,
    images: siteConfig.twitter.image ? [siteConfig.twitter.image] : undefined,
    site: siteConfig.twitter.site,
    creator: siteConfig.twitter.creator,
  } : undefined,
  // iOS App Store metadata
  ...(appStoreId && {
    itunes: {
      appId: appStoreId,
      appArgument: siteConfig.appMeta?.ios,
    },
  }),
  // Additional metadata for app stores
  other: {
    // Safari Smart App Banner for iOS - This will show the download banner at the top in Safari
    ...(appStoreId && {
      "apple-itunes-app": `app-id=${appStoreId}`,
    }),
    // Android app linking
    ...(androidPackageName && {
      "google-play-app": `app-id=${androidPackageName}`,
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen flex flex-col max-w-full overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
