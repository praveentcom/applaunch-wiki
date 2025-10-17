"use client";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { Button } from "passport-ui/button";

function isImageAvailable(): boolean {
  if (!siteConfig.heroSection?.screenshot) return false;
  return ['image', 'alt', 'width', 'height'].every(property => {
    return siteConfig.heroSection.screenshot[property as keyof typeof siteConfig.heroSection.screenshot] !== undefined;
  });
}

export const Landing = () => {
  return (
    <div className={`flex flex-col justify-center gap-8 w-full my-3`}>
        {isImageAvailable() && (
          <Image
            src={siteConfig.heroSection.screenshot.image}
            alt={siteConfig.heroSection.screenshot.alt}
            width={siteConfig.heroSection.screenshot.width || 768}
            height={siteConfig.heroSection.screenshot.height || 1024}
            className="max-h-96 w-max"
          />
        )}
        <div>
          <h1>{siteConfig.heroSection.title}</h1>
          <p>{siteConfig.heroSection.description}</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          {siteConfig.appMeta?.ios && (
            <Link href={siteConfig.appMeta.ios} target="_blank" rel="noopener noreferrer">
              <Image 
                src="/apple-app-store.svg" 
                alt="Download on the App Store" 
                width={90} 
                height={30}
                className="h-8 w-auto"
              />
            </Link>
          )}
          {siteConfig.appMeta?.android && (
            <Link href={siteConfig.appMeta.android} target="_blank" rel="noopener noreferrer">
              <Image 
                src="/google-play.svg" 
                alt="Get it on Google Play" 
                width={100} 
                height={30}
                className="h-8 w-auto"
              />
            </Link>
          )}
          {siteConfig.appMeta?.web && (
            <Button asChild>
              <Link href={siteConfig.appMeta.web} target="_blank" rel="noopener noreferrer">
                Learn More →
              </Link>
            </Button>
          )}
          {siteConfig.appMeta?.github && (
            <Button asChild>
              <Link href={siteConfig.appMeta.github} target="_blank" rel="noopener noreferrer">
                GitHub →
              </Link>
            </Button>
          )}
        </div>
      </div>
  );
};
