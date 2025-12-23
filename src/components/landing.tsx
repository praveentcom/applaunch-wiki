"use client";
import { Button } from "@workspace/ui/components/button";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "../../data/config/site";

/**
 * Checks if the hero section screenshot is available
 * @returns True if the screenshot is available, false otherwise
 */
function isImageAvailable(): boolean {
  if (!siteConfig.heroSection?.screenshot) return false;
  return ["image", "alt", "width", "height"].every((property) => {
    return (
      siteConfig.heroSection.screenshot[
        property as keyof typeof siteConfig.heroSection.screenshot
      ] !== undefined
    );
  });
}

/**
 * Landing component displaying the hero section
 * @returns Landing component
 */
export const Landing = () => {
  return (
    <div className={`flex flex-col justify-center gap-8 w-full my-3`}>
      {isImageAvailable() && (
        <Image
          src={siteConfig.heroSection.screenshot.image}
          alt={siteConfig.heroSection.screenshot.alt}
          width={siteConfig.heroSection.screenshot.width || 768}
          height={siteConfig.heroSection.screenshot.height || 1024}
          className="w-full h-auto max-h-[320px] object-contain object-left"
        />
      )}
      <div className="flex flex-col gap-2">
        <h2>{siteConfig.heroSection.title}</h2>
        <p>{siteConfig.heroSection.description}</p>
      </div>
      <div className="flex flex-row flex-wrap items-center gap-3">
        {siteConfig.appMeta?.ios && (
          <Link
            href={siteConfig.appMeta.ios}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/apple-app-store.svg"
              alt="Download on the App Store"
              width={90}
              height={30}
              className="h-9 w-auto"
            />
          </Link>
        )}
        {siteConfig.appMeta?.android && (
          <Link
            href={siteConfig.appMeta.android}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/google-play.svg"
              alt="Get it on Google Play"
              width={100}
              height={30}
              className="h-9 w-auto"
            />
          </Link>
        )}
        {siteConfig.appMeta?.web && (
          <Button asChild>
            <Link
              href={siteConfig.appMeta.web}
              target="_blank"
              rel="noopener noreferrer"
            >
              Know More →
            </Link>
          </Button>
        )}
        {siteConfig.appMeta?.github && (
          <Button asChild>
            <Link
              href={siteConfig.appMeta.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};
