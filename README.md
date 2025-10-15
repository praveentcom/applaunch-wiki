# AppLaunch Wiki

A modern, beautiful template for creating mobile app marketing pages. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

✨ **Modern Design** - Clean, responsive UI with light/dark mode support  
🎨 **Fully Customizable** - Easy configuration through a single config file  
🔍 **SEO Ready** - Built-in sitemap, robots.txt, and meta tags  
📄 **Legal Pages** - Pre-configured Privacy, Terms, Cookie, and Refund Policy templates  

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your site.

### Build for Production

```bash
npm run build
npm start
```

## Configuration

All site configuration is managed through `src/config/site.ts`. This is the main file you'll need to customize.

### Site Metadata

Update your site's basic information:

```typescript
siteMeta: {
  title: "Your App Name",
  description: "Your app description",
  keywords: ["keyword1", "keyword2"],
  author: "Your Name or Company",
  logo: "/logo.png", // Optional: 64x64px recommended
  favicon: "/favicon.ico", // URL to your favicon (.ico or .png)
}
```

### App Store Links

Configure your app download links:

```typescript
appMeta: {
  ios: "https://apps.apple.com/...",
  android: "https://play.google.com/store/...",
}
```

### SEO & Social Media

The template automatically generates Open Graph and Twitter Card meta tags:

```typescript
opengraph: {
  type: "website",
  title: "Your App Name",
  description: "Your description",
  url: "https://yourdomain.com", // IMPORTANT: Update this
  siteName: "Your App Name",
  image: "/cover-image.png", // 1200x630px recommended
  locale: "en_US",
}
```

**Important:** The `url` field is used for:
- Open Graph meta tags
- Sitemap generation
- Robots.txt configuration

### Cover Section

Customize the landing page hero section:

```typescript
heroSection: {
  title: "Your App Name",
  description: "Your tagline or description",
  screenshot: {
    image: "/hero-image.png",
    alt: "Hero Image",
    width: 800,
    height: 1000,
  }
}
```

### Feature Flags

Enable or disable optional features. When set to `false`, pages and navigation links will be hidden:

```typescript
flags: {
  privacyPolicy: true,  // Show/hide privacy page and links
  termsOfService: true, // Show/hide terms page and links
  cookiePolicy: true,   // Show/hide cookie page and links
  refundPolicy: true,   // Show/hide refund page and links
}
```

**Note:** Links to policy pages will automatically appear/disappear in both the header navigation (desktop) and footer based on these flags.

## Content Management

### Home Page Content

Edit the main page content in `src/content/home.md`. This file uses Markdown format and supports:

### Legal Pages (Privacy, Terms, Cookies, Refund)

Template files are located in `src/content/`. Before deploying, replace all template variables with your actual information. Each policy includes:

- **Privacy Policy** (`privacy.md`) - Data collection and usage
- **Terms of Service** (`terms.md`) - User agreement and rules
- **Cookie Policy** (`cookies.md`) - Cookie usage and tracking
- **Refund Policy** (`refund.md`) - Refund and cancellation procedures

#### Required Template Variables (Common)

These variables appear across multiple policy documents:

| Variable | Description | Example |
|----------|-------------|---------|
| `__APP_NAME__` | Your application name | "MyApp" |
| `__COMPANY_NAME__` | Your company or entity name | "MyApp Inc." |
| `__EFFECTIVE_DATE__` | Date when the policy becomes effective | "January 1, 2025" |
| `__CONTACT_EMAIL__` | Support/legal contact email | "legal@myapp.com" |
| `__COMPANY_ADDRESS__` | Physical business address | "123 Main St, San Francisco, CA" |
| `__WEBSITE_URL__` | Your website URL | "https://myapp.com" |
| `__MINIMUM_AGE__` | Minimum age requirement | "13" or "16" |
| `__JURISDICTION__` | Governing law jurisdiction | "the State of California" |
| `__CURRENCY__` | Currency for payments | "USD" |
| `__MINIMUM_LIABILITY_AMOUNT__` | Minimum liability cap | "$100" |

#### Policy-Specific Variables

**Refund Policy:**
- `__REFUND_WINDOW_DAYS__` - Days to request refund (e.g., "14")
- `__SUBSCRIPTION_REFUND_WINDOW_DAYS__` - Days for subscription refunds (e.g., "7")
- `__TRIAL_CANCELLATION_PERIOD__` - Notice period for trial cancellation (e.g., "24 hours")
- `__REFUND_REVIEW_DAYS__` - Business days to review requests (e.g., "3-5")
- `__REFUND_PROCESSING_DAYS__` - Days to process refund (e.g., "5-10")
- `__SUPPORT_RESPONSE_DAYS__` - Support response time (e.g., "1-2")

**Cookie Policy:**
- `__OTHER_AD_PLATFORMS__` - Additional advertising platforms
- `__SUPPORT_PLATFORM__` - Customer support tool (e.g., "Intercom")
- `__PAYMENT_PROCESSOR__` - Payment service (e.g., "Stripe")
- `__COOKIE_RETENTION_PERIOD__` - How long cookies last (e.g., "90 days")
- `__ANALYTICS_RETENTION_PERIOD__` - Analytics data retention (e.g., "26 months")

#### Optional Template Variables

| Variable | Description |
|----------|-------------|
| `__ADDITIONAL_PERSONAL_INFO__` | Additional personal information you collect |
| `__ADDITIONAL_USE_CASES__` | Additional ways you use user information |
| `__ADDITIONAL_RESTRICTIONS__` | Additional usage restrictions |

#### How to Update Legal Documents

1. Open the policy files in `src/content/`:
   - `privacy.md` - Privacy Policy
   - `terms.md` - Terms of Service
   - `cookies.md` - Cookie Policy
   - `refund.md` - Refund Policy
2. Use Find & Replace to substitute all template variables (search for `__`)
3. Review content to ensure it reflects your app's actual practices
4. Remove any sections that don't apply to your app
5. **Consult with a legal professional** before publishing
6. Update `__EFFECTIVE_DATE__` whenever you modify these documents

**Legal Disclaimer:** These templates are starting points only and are not legal advice. Consult a legal professional to ensure compliance with GDPR, CCPA, COPPA, App Store requirements, and other applicable laws and regulations.

## SEO Features

### Sitemap

The template automatically generates a sitemap at `/sitemap.xml`. It includes:
- Your home page
- Privacy page (if enabled)
- Terms page (if enabled)
- Cookie page (if enabled)
- Refund page (if enabled)

The sitemap uses the URL from `siteConfig.opengraph.url`.

### Robots.txt

Located at `public/robots.txt`, the robots.txt file references your sitemap. The sitemap URL is pulled from your site configuration.

### Meta Tags

All pages include:
- SEO meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card tags
- Proper canonical URLs

## Customization

### Favicon

Place your favicon file in the `public/` folder and configure it in `src/config/site.ts`:

```typescript
siteMeta: {
  favicon: "/favicon.ico", // or "/favicon.png"
}
```

**Recommended formats:**
- `.ico` format (supports multiple sizes: 16x16, 32x32, 48x48)
- `.png` format (32x32px or 64x64px recommended)

### Adding App Store Badges

The template includes official App Store and Google Play badges in `public/`:
- `apple-app-store.svg`
- `google-play.svg`

To use different badges, replace these files with your own.

### Screenshots

Add your app screenshots to the `public` folder and update the `heroSection` in `src/config/site.ts`.

### Styling

Global styles are in `src/app/styles/globals.css`. The project uses Tailwind CSS for styling.

### Adding More Pages

1. Create a new folder in `src/app/` (e.g., `src/app/about/`)
2. Add a `page.tsx` file in that folder
3. Add a corresponding content file in `src/content/` if needed
4. Update navigation in `src/components/layout/client-layout.tsx`

## Deployment Checklist

Before deploying your site, make sure you've:

- [ ] Updated all fields in `src/config/site.ts`
- [ ] Set the correct domain in `opengraph.url`
- [ ] Configured feature flags for needed policies (privacy, terms, cookies, refund)
- [ ] Replaced all template variables in policy files (search for `__` in all `.md` files)
- [ ] Removed unused policy pages or set their flags to `false`
- [ ] Added your app logo (if using one)
- [ ] Added your favicon to `public/` and configured it in `siteMeta.favicon`
- [ ] Added app screenshots
- [ ] Updated `src/content/home.md` with your app's content
- [ ] Tested all app store links
- [ ] Reviewed the site on mobile and desktop
- [ ] Had legal documents reviewed by a professional
- [ ] Tested the site in both light and dark modes
- [ ] Verified all meta tags and social sharing previews
- [ ] Tested navigation links appear/disappear based on flags

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** passport-ui
- **Deployment:** Vercel (recommended) or any Node.js hosting

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to get started.

### Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🔧 Submit pull requests

## Support

If you have questions or need help:
- 📫 [Open an issue](https://github.com/praveentcom/applaunch-wiki/issues)
- 💬 Start a [discussion](https://github.com/praveentcom/applaunch-wiki/discussions) (if enabled)
- ⭐ Star the repo if you find it helpful!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Built with:
- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [passport-ui](https://www.npmjs.com/package/passport-ui) - UI component library

---

Made with ❤️ by [Praveen Thirumurugan](https://github.com/praveentcom)

If you find this template helpful, please consider giving it a ⭐️!
