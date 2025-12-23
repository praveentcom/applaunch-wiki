/**
 * Policy Configuration
 *
 * Centralized configuration for all policy documents (Privacy, Terms, Cookies, Refund).
 * These values are automatically substituted in markdown files using placeholders.
 *
 * PLACEHOLDER FORMATS:
 * - {{PLACEHOLDER}} or {{PLACEHOLDER:inline}} → Inline text (arrays joined with ", ")
 * - {{PLACEHOLDER:list}} → Bullet list (each array item on new line with "- ")
 * - __PLACEHOLDER__ → Inline text (double underscores, used in refund.md)
 *
 * HOW TO UPDATE:
 * 1. Edit values in this file
 * 2. Changes automatically apply to all 4 policy documents
 * 3. Update LAST_UPDATED_DATE when making changes
 * 4. Increment POLICY_VERSION for major updates
 *
 * IMPORTANT: After editing, review the rendered policy pages to ensure
 * placeholders are replaced correctly and content makes sense.
 */

export const policyConfig = {
  // Basic App Information
  APP_NAME: "AppLaunch Wiki",
  COMPANY_NAME: "AppLaunch Wiki Inc.",
  EFFECTIVE_DATE: "January 1, 2025",
  LAST_UPDATED_DATE: "January 1, 2025",
  POLICY_VERSION: "2.0",

  // Contact Information
  CONTACT_EMAIL: "support@applaunch.wiki", // General support and inquiries
  DISPUTE_EMAIL: "disputes@applaunch.wiki", // Dispute resolution and chargebacks
  DPO_EMAIL: "dpo@applaunch.wiki", // Data Protection Officer (GDPR)
  TECHNICAL_SUPPORT_EMAIL: "support@applaunch.wiki", // Technical support issues
  FEEDBACK_EMAIL: "feedback@applaunch.wiki", // User feedback and suggestions
  WEBSITE_URL: "https://applaunch.wiki", // Main website URL (without trailing slash)

  // Policy Page URLs (for cross-linking between policies)
  PRIVACY_POLICY_URL: "https://applaunch.wiki/privacy",
  TERMS_URL: "https://applaunch.wiki/terms",
  COOKIE_POLICY_URL: "https://applaunch.wiki/cookies",
  REFUND_POLICY_URL: "https://applaunch.wiki/refund",

  // Support & Help URLs
  SUPPORT_URL: "https://applaunch.wiki", // Help center / support page URL
  COOKIE_SETTINGS_URL: "https://applaunch.wiki", // Cookie preferences page
  PRIVACY_PORTAL_URL: "https://applaunch.wiki/privacy", // Privacy request portal
  REFUND_REQUEST_URL: "https://applaunch.wiki", // Refund request form
  FAQ_URL: "https://applaunch.wiki", // FAQ page
  CONTACT_FORM_URL: "https://applaunch.wiki", // Contact form

  // Legal & Compliance
  JURISDICTION: "State of California",
  MINIMUM_AGE: "13",
  CURRENCY: "USD",
  MINIMUM_LIABILITY_AMOUNT: "$100",
  COMPANY_ADDRESS: "123 Main Street, San Francisco, CA 94102, United States",

  // Privacy Policy Specific
  ADDITIONAL_PERSONAL_INFO: [
    "Payment information",
    "Preferences and settings",
    "User-generated content",
  ],
  ADDITIONAL_USE_CASES: [
    "Personalize your experience",
    "Provide customer support",
    "Send promotional communications (with your consent)",
  ],

  // Terms of Service Specific
  ADDITIONAL_RESTRICTIONS: [
    "Reverse engineer or attempt to extract source code",
    "Use automated systems to scrape or data mine",
    "Resell or redistribute the App or its content",
  ],

  // Third-Party Service Providers (used across multiple policies)
  // These arrays are automatically formatted as comma-separated lists or bullet points

  CLOUD_PROVIDERS: ["AWS", "Google Cloud", "Azure"],

  ANALYTICS_SERVICES: [
    "Google Analytics",
    "Firebase Analytics",
    "Mixpanel",
    "Amplitude",
  ],

  // Core advertising platforms (most commonly used)
  ADVERTISING_PLATFORMS: ["Google Ads", "Facebook Ads / Meta Pixel"],

  // Additional/optional advertising platforms
  // Set to [] (empty array) if you don't use these
  OTHER_AD_PLATFORMS: ["TikTok Ads", "LinkedIn Ads", "Twitter Ads"],

  SOCIAL_MEDIA_PLATFORMS: ["Facebook", "Twitter", "Instagram", "LinkedIn"],

  PAYMENT_PROCESSORS: ["Stripe", "PayPal", "Apple Pay", "Google Pay"],

  SUPPORT_PLATFORMS: ["Intercom", "Zendesk"],

  EMAIL_SERVICE_PROVIDERS: ["SendGrid", "Mailchimp"],

  // Cookie Policy Specific
  ADDITIONAL_THIRD_PARTY_LINKS: [
    "Stripe Privacy Policy: https://stripe.com/privacy",
    "PayPal Privacy Policy: https://www.paypal.com/privacy",
    "Intercom Privacy Policy: https://www.intercom.com/legal/privacy",
  ],
  COOKIE_RETENTION_PERIOD: "Up to 12 months",
  ANALYTICS_RETENTION_PERIOD: "26 months",

  // Refund Policy Specific
  REFUND_WINDOW_DAYS: "30",
  SUBSCRIPTION_REFUND_WINDOW_DAYS: "7",
  TRIAL_CANCELLATION_PERIOD: "24 hours",
  REFUND_REVIEW_DAYS: "3-5",
  REFUND_PROCESSING_DAYS: "5-10",
  APP_STORE_PROCESSING_DAYS: "7-14",
  DIRECT_REFUND_PROCESSING_DAYS: "5-7",
  CARD_REFUND_DAYS: "5-10",
  SUPPORT_RESPONSE_DAYS: "2-3",
} as const;

export type PolicyConfigKey = keyof typeof policyConfig;
export type PolicyConfigValue = string | readonly string[];
