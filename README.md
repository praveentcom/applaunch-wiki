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
  web: "https://your-web-app.com", // Optional: Link to your web app
  github: "https://github.com/username/repo", // Optional: Link to your GitHub repository
}
```

You can use any combination of these links. The template will automatically display the appropriate buttons based on the links you provide.

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

### Custom Links

Add custom navigation links to your header and footer:

```typescript
customLinks: {
  header: [
    { label: "Blog", href: "/blog", external: false },
    { label: "Docs", href: "/docs", external: false },
    { label: "Support", href: "https://support.example.com", external: true },
  ],
  footer: [
    { label: "About", href: "/about", external: false },
    { label: "Contact", href: "/contact", external: false },
    { label: "Blog", href: "/blog", external: false },
  ],
}
```

## Content Management

### Home Page Content

Edit the main page content in `src/content/home.md`. This file uses Markdown format and supports:

### Legal Pages (Privacy, Terms, Cookies, Refund)

The template includes comprehensive, legally-tested policy documents that are automatically generated from a centralized configuration file. Each policy includes:

- **Privacy Policy** (`privacy.md`) - GDPR, CCPA, and international compliance
- **Terms of Service** (`terms.md`) - User agreements, liability, and arbitration
- **Cookie Policy** (`cookies.md`) - Cookie consent and tracking technologies
- **Refund Policy** (`refund.md`) - Refund procedures and regional laws

#### Centralized Configuration

**All policy documents are configured in one place: `src/config/policy.ts`**

This file contains all the variables that populate your legal documents. Simply edit the values in `policy.ts` and they'll automatically update across all 4 policy documents.

#### Key Configuration Variables

**Basic Information:**

```typescript
APP_NAME: "Your App Name",
COMPANY_NAME: "Your Company Inc.",
EFFECTIVE_DATE: "January 1, 2025",
LAST_UPDATED_DATE: "January 1, 2025",
POLICY_VERSION: "1.0",
```

**Contact & Legal:**

```typescript
CONTACT_EMAIL: "support@yourapp.com",
DISPUTE_EMAIL: "disputes@yourapp.com",
COMPANY_ADDRESS: "123 Main St, City, State ZIP",
WEBSITE_URL: "https://yourapp.com",
JURISDICTION: "State of California",
MINIMUM_AGE: "13",
```

**Third-Party Services:**

```typescript
ANALYTICS_SERVICES: ["Google Analytics", "Firebase", "Mixpanel"],
ADVERTISING_PLATFORMS: ["Google Ads", "Facebook Ads"],
PAYMENT_PROCESSORS: ["Stripe", "PayPal", "Apple Pay"],
SOCIAL_MEDIA_PLATFORMS: ["Facebook", "Twitter", "Instagram"],
// ... and more
```

**Policy-Specific Settings:**

```typescript
REFUND_WINDOW_DAYS: "30",
SUBSCRIPTION_REFUND_WINDOW_DAYS: "7",
COOKIE_RETENTION_PERIOD: "Up to 12 months",
ANALYTICS_RETENTION_PERIOD: "26 months",
```

#### How to Customize Legal Documents

1. **Edit Configuration:**
   - Open `src/config/policy.ts`
   - Update all values to match your app and business
   - Save the file

2. **Review Generated Content:**
   - Visit `/privacy`, `/terms`, `/cookies`, and `/refund` pages
   - Verify all placeholders are replaced correctly
   - Ensure content accurately reflects your practices

3. **Customize as Needed:**
   - If you need to modify the actual policy text, edit the markdown files in `src/content/`
   - Add or remove service providers from the arrays in `policy.ts`
   - Adjust retention periods, timeframes, and other specifics

4. **Update Dates:**
   - When making changes, update `LAST_UPDATED_DATE` in `policy.ts`
   - Increment `POLICY_VERSION` for major updates
   - Keep `EFFECTIVE_DATE` as the original date your policies took effect

5. **Legal Review:**
   - **Consult with a legal professional** before publishing
   - Ensure compliance with applicable laws (GDPR, CCPA, etc.)
   - Review with counsel after any significant changes

#### Advanced: Array Variables

Service provider arrays (like `ANALYTICS_SERVICES`) support two formats:

- **Inline:** `{{ANALYTICS_SERVICES}}` → "Google Analytics, Firebase, Mixpanel"
- **List:** `{{ANALYTICS_SERVICES:list}}` → Bullet-pointed list

To add or remove services, simply edit the arrays in `policy.ts`:

```typescript
ANALYTICS_SERVICES: [
  "Google Analytics",
  "Firebase",
  "Mixpanel",
  "Your Custom Service" // Add your own
],
```

**Legal Disclaimer:** These comprehensive templates are starting points and are not legal advice. They've been enhanced with legally-tested language and international compliance provisions, but you must still consult a legal professional to ensure they meet your specific requirements and comply with GDPR, CCPA, COPPA, App Store requirements, and other applicable laws.

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
- [ ] Added any custom header/footer links (if needed)
- [ ] Replaced all template variables in policy files (search for `{{` in all `.md` files)
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
