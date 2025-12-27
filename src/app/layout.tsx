import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Google_Sans_Code, Google_Sans_Flex } from "next/font/google";

import { ClientLayout } from "@/components/layout/client-layout";
import { Providers } from "@/components/providers";

import { siteConfig } from "../../data/config/site";

/**
 * Helper function to get the app store ID from the app meta URL
 * @param url - The app meta URL
 * @returns The app store ID
 */
const getAppStoreId = (url: string | undefined | null): string | null => {
  if (!url) return null;
  const match = url.match(/id(\d+)/);
  return match ? match[1] : null;
};

/**
 * Helper function to get the Android package name from the app meta URL
 * @param url - The app meta URL
 * @returns The Android package name
 */
const getAndroidPackageName = (
  url: string | undefined | null,
): string | null => {
  if (!url) return null;
  const match = url.match(/id=([^&]+)/);
  return match ? match[1] : null;
};

const appStoreId = getAppStoreId(siteConfig.appMeta?.ios);
const androidPackageName = getAndroidPackageName(siteConfig.appMeta?.android);

/**
 * Metadata for the website
 * @returns Metadata for the website
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.opengraph?.url || "https://applaunch.wiki"),
  title: siteConfig.siteMeta?.title || "App",
  description: siteConfig.siteMeta?.description || "App description",
  keywords: siteConfig.siteMeta?.keywords,
  authors: siteConfig.siteMeta?.author
    ? [{ name: siteConfig.siteMeta.author }]
    : undefined,
  icons: siteConfig.siteMeta?.favicon
    ? {
        icon: siteConfig.siteMeta.favicon,
      }
    : undefined,
  openGraph: {
    type: (siteConfig.opengraph?.type as "website") || "website",
    title: siteConfig.opengraph?.title || siteConfig.siteMeta?.title || "App",
    description:
      siteConfig.opengraph?.description ||
      siteConfig.siteMeta?.description ||
      "App description",
    url: siteConfig.opengraph?.url,
    siteName: siteConfig.opengraph?.siteName || siteConfig.siteMeta?.title,
    images: siteConfig.opengraph?.image
      ? [
          {
            url: siteConfig.opengraph.image,
            alt:
              siteConfig.opengraph?.title ||
              siteConfig.siteMeta?.title ||
              "App",
          },
        ]
      : undefined,
    locale: siteConfig.opengraph?.locale || "en_US",
  },
  twitter: siteConfig.twitter
    ? {
        card:
          (siteConfig.twitter.card as "summary_large_image") ||
          "summary_large_image",
        title: siteConfig.twitter.title || siteConfig.siteMeta?.title,
        description:
          siteConfig.twitter.description || siteConfig.siteMeta?.description,
        images: siteConfig.twitter.image
          ? [siteConfig.twitter.image]
          : undefined,
        site: siteConfig.twitter.site,
        creator: siteConfig.twitter.creator,
      }
    : undefined,
  // iOS App Store metadata
  ...(appStoreId && {
    itunes: {
      appId: appStoreId,
      appArgument: siteConfig.appMeta?.ios || undefined,
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

export const viewport: Viewport = {
  themeColor: "#D77757", // Theme color for the website
  initialScale: 1,
}

const fontSans = Google_Sans_Flex({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: false,
});

const fontMono = Google_Sans_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  adjustFontFallback: false,
});

/**
 * Root layout component displaying the children components
 * @param children - The children components
 * @returns Root layout component
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased min-h-screen flex flex-col max-w-full overflow-x-hidden`}
      >
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
