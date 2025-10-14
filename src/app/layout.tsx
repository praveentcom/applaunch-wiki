import { ClientLayout } from "@/components/layout/client-layout";
import "./styles/globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "passport-ui/theme-provider";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.siteMeta.title,
  description: siteConfig.siteMeta.description,
  keywords: siteConfig.siteMeta.keywords,
  authors: [{ name: siteConfig.siteMeta.author }],
  openGraph: {
    type: siteConfig.opengraph.type as "website",
    title: siteConfig.opengraph.title,
    description: siteConfig.opengraph.description,
    url: siteConfig.opengraph.url,
    siteName: siteConfig.opengraph.siteName,
    images: [
      {
        url: siteConfig.opengraph.image,
        alt: siteConfig.opengraph.title,
      },
    ],
    locale: siteConfig.opengraph.locale,
  },
  twitter: {
    card: siteConfig.twitter.card as "summary_large_image",
    title: siteConfig.twitter.title,
    description: siteConfig.twitter.description,
    images: [siteConfig.twitter.image],
    site: siteConfig.twitter.site,
    creator: siteConfig.twitter.creator,
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
