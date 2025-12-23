"use client";
import { siteConfig } from "../../../data/config/site";
import { Card, CardContent } from "@workspace/ui/components/card";
import Image from "next/image";

export const Testimonials = () => {
  if (!siteConfig.testimonials || siteConfig.testimonials.items.length === 0) {
    return null;
  }

  return (
    <div className="w-full my-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        {siteConfig.testimonials.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.testimonials.items.map((testimonial) => (
          <Card key={`${testimonial.reviewerName}-${testimonial.source}`} className="flex flex-col">
            <CardContent className="flex flex-col gap-4 flex-1">
              <p className="text-sm md:text-base italic text-muted-foreground flex-1">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex flex-col mt-auto">
                {testimonial.reviewerPhotoUrl && (
                  <Image
                    src={testimonial.reviewerPhotoUrl}
                    alt={testimonial.reviewerName}
                    width={48}
                    height={48}
                    className="rounded-full w-12 h-12 object-cover mb-3"
                  />
                )}
                <p className="font-semibold text-sm md:text-base">
                  {testimonial.reviewerName}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {testimonial.reviewerPosition}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  {testimonial.source}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
