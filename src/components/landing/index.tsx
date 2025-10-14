"use client";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

function isImageAvailable(): boolean {
  if (!siteConfig.coverSectionMeta?.screenshot) return false;
  return ['image', 'alt', 'width', 'height'].every(property => {
    return siteConfig.coverSectionMeta.screenshot[property as keyof typeof siteConfig.coverSectionMeta.screenshot] !== undefined;
  });
}

export const Landing = () => {
  return (
    <div className={`flex flex-col justify-center gap-8 w-full my-3 md:my-6`}>
        {isImageAvailable() && (
          <Image
            src={siteConfig.coverSectionMeta.screenshot.image}
            alt={siteConfig.coverSectionMeta.screenshot.alt}
            width={siteConfig.coverSectionMeta.screenshot.width || 768}
            height={siteConfig.coverSectionMeta.screenshot.height || 1024}
            className="max-h-96 w-max"
          />
        )}
        <div>
          <h1>{siteConfig.coverSectionMeta.title}</h1>
          <p>{siteConfig.coverSectionMeta.description}</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          {siteConfig.appMeta?.ios && (
            <Link href={siteConfig.appMeta.ios} target="_blank" rel="noopener noreferrer">
              <Image 
                src="/Apple App Store.svg" 
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
                src="/Google Play.svg" 
                alt="Get it on Google Play" 
                width={100} 
                height={30}
                className="h-8 w-auto"
              />
            </Link>
          )}
        </div>
      </div>
  );
};
