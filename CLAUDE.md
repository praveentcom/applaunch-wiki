# CLAUDE.md

This file provides guidance for AI assistants working with the AppLaunch Wiki codebase.

## Project Overview

AppLaunch Wiki is a mobile app landing page template built with **Next.js 16** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS 4**. It provides a configurable marketing page with legal policy pages, SEO, pricing, testimonials, and app store download links.

## Tech Stack

- **Framework:** Next.js 16.1.0 with App Router
- **Language:** TypeScript 5.9 (strict mode)
- **Styling:** Tailwind CSS 4 with PostCSS, OKLch color space
- **UI Components:** Radix UI primitives + class-variance-authority (CVA)
- **Package Manager:** pnpm (v10.26+)
- **Fonts:** Google Sans Flex (sans) and Google Sans Code (mono)
- **Theme:** next-themes (light/dark mode)

## Common Commands

```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Auto-fix ESLint issues
pnpm typecheck    # TypeScript type checking (tsc --noEmit)
pnpm format       # ESLint fix + Prettier format
pnpm analyze      # Bundle analysis build
```

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout (metadata, fonts, providers)
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Tailwind CSS + theme variables
│   │   ├── sitemap.ts          # Dynamic sitemap generation
│   │   ├── error.tsx           # Error boundary
│   │   ├── not-found.tsx       # 404 page
│   │   ├── pricing/page.tsx    # Pricing page
│   │   ├── privacy/page.tsx    # Privacy policy
│   │   ├── terms/page.tsx      # Terms of service
│   │   ├── cookies/page.tsx    # Cookie policy
│   │   └── refund/page.tsx     # Refund policy
│   └── components/
│       ├── layout/             # Layout components (header, footer, client-layout)
│       ├── landing.tsx         # Hero section
│       ├── pricing.tsx         # Pricing cards
│       ├── testimonials.tsx    # Testimonials section
│       ├── providers.tsx       # Theme provider wrapper
│       └── markdown.ts         # Markdown loader with placeholder substitution
├── components/ui/              # Reusable UI component library (~57 components)
├── layouts/                    # Layout containers (header, content, footer wrappers)
├── lib/
│   ├── utils.ts                # cn() utility (clsx + tailwind-merge)
│   └── markdown/               # Custom markdown-to-HTML parser
├── data/
│   ├── config/
│   │   ├── site.ts             # Main site configuration (SiteConfig)
│   │   └── policy.ts           # Legal policy placeholder values
│   └── content/                # Markdown content files (home, privacy, terms, etc.)
├── public/                     # Static assets (logos, badges, hero image, robots.txt)
```

## Path Aliases (tsconfig.json)

```
@/*                          → ./src/*
@/data/*                     → ./data/*
@workspace/ui/components/*   → ./components/ui/*
@workspace/ui/lib/*          → ./lib/*
@workspace/ui/hooks/*        → ./hooks/*
@workspace/ui/layouts/*      → ./layouts/*
```

## Architecture & Key Patterns

### Configuration-Driven Design

The site is driven by two config files — most customization requires no code changes:

- **`data/config/site.ts`** — Central site configuration (`SiteConfig` interface). Controls metadata, SEO tags, Open Graph, Twitter cards, app store links, hero section, feature flags, custom links, pricing plans, and testimonials.
- **`data/config/policy.ts`** — Legal policy configuration (`policyConfig`). Controls all placeholder values substituted into markdown policy documents.

### Feature Flags

`siteConfig.flags` controls which pages are enabled. These flags affect navigation links, the sitemap, and route availability:

```typescript
flags: {
  privacyPolicy: boolean;
  termsOfService: boolean;
  cookiePolicy: boolean;
  refundPolicy: boolean;
  pricingPage: boolean;
}
```

### Markdown Content with Placeholder Substitution

Policy pages use markdown files in `data/content/` with template variables from `policyConfig`:

- `{{PLACEHOLDER}}` or `{{PLACEHOLDER:inline}}` — Inline substitution (arrays joined with ", ")
- `{{PLACEHOLDER:list}}` — Bullet list substitution (each array item as `- item`)
- `__PLACEHOLDER__` — Alternative inline format (used in refund.md)

The substitution is handled by `getMarkdownContent()` in `src/components/markdown.ts`.

### Component Patterns

- **UI components** (`components/ui/`): Radix UI-based, styled with Tailwind + CVA for variant management. Imported via `@workspace/ui/components/*`.
- **Layout containers** (`layouts/`): CVA-based wrappers with `compact`, `relaxed`, `broad`, `full` width variants and optional `sticky`/`blur` props.
- **Client components**: Must include `"use client"` directive at the top of the file.
- **Server components**: Default for pages; load markdown content at build/request time.

### Styling

- Tailwind CSS 4 with `@tailwindcss/postcss`
- OKLch color space for theme variables (defined in `globals.css`)
- Light/dark mode via CSS custom properties and `.dark` class
- `cn()` utility from `lib/utils.ts` for conditional className merging

## Code Conventions

### Naming

- **Components/Types/Interfaces:** PascalCase (`PricingCards`, `SiteConfig`)
- **Functions/variables:** camelCase (`getMarkdownContent`, `siteConfig`)
- **Directories/files:** kebab-case (`client-layout.tsx`, `header-container.tsx`)

### Imports

- ESLint enforces **simple-import-sort** — imports must be sorted automatically
- Run `pnpm lint:fix` to auto-sort imports after changes

### TypeScript

- Strict mode is enabled
- Use the path aliases defined above, not relative paths crossing boundaries
- No `any` types without justification

## Adding a New Page

1. Create `src/app/<route>/page.tsx`
2. If it's a policy/content page, add corresponding markdown in `data/content/`
3. If it needs a feature flag, add it to `SiteConfig.flags` and update `sitemap.ts`
4. Add navigation links via `siteConfig.customLinks` or update header/footer components

## Adding a New UI Component

UI components live in `components/ui/` and follow the Radix UI + CVA pattern:

1. Create `components/ui/<component-name>.tsx`
2. Use CVA for variant definitions
3. Use `cn()` for className merging
4. Import in consuming code via `@workspace/ui/components/<component-name>`

## Troubleshooting

- **Import sort errors:** Run `pnpm lint:fix`
- **Type errors:** Run `pnpm typecheck` to see all issues
- **Dark mode issues:** Check that components use CSS custom properties from `globals.css`, not hardcoded colors
- **Policy content not updating:** Ensure placeholder keys in markdown match `policyConfig` keys exactly
