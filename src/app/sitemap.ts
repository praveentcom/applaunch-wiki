import { MetadataRoute } from 'next'
import { siteConfig } from '../../data/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.opengraph?.url || ''

  // Base routes that are always included
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ]

  // Conditionally add pricing page if enabled
  if (siteConfig.flags?.pricingPage) {
    routes.push({
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })
  }

  // Conditionally add privacy policy if enabled
  if (siteConfig.flags?.privacyPolicy) {
    routes.push({
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    })
  }

  // Conditionally add terms of service if enabled
  if (siteConfig.flags?.termsOfService) {
    routes.push({
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    })
  }

  // Conditionally add cookie policy if enabled
  if (siteConfig.flags?.cookiePolicy) {
    routes.push({
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    })
  }

  // Conditionally add refund policy if enabled
  if (siteConfig.flags?.refundPolicy) {
    routes.push({
      url: `${baseUrl}/refund`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    })
  }

  return routes
}

