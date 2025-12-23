"use client";

import { Card, CardContent } from "@workspace/ui/components/card";
import { Separator } from "@workspace/ui/components/separator";
import Image from "next/image";

import { siteConfig } from "../../data/config/site";

export const Testimonials = () => {
  if (!siteConfig.testimonials || siteConfig.testimonials.items.length === 0) {
    return null;
  }

  return (
    <>
      <Separator />
      <div className="w-full grid gap-5">
        <h4>{siteConfig.testimonials.title}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.testimonials.items.map((testimonial) => (
            <Card key={`${testimonial.reviewerName}-${testimonial.source}`}>
              <CardContent className="grid gap-6">
                <p>&ldquo;{testimonial.content}&rdquo;</p>
                <div className="grid gap-4">
                  {testimonial.reviewerPhotoUrl && (
                    <Image
                      src={testimonial.reviewerPhotoUrl}
                      alt={testimonial.reviewerName}
                      width={48}
                      height={48}
                      className="rounded-full size-12 object-cover"
                    />
                  )}
                  <div>
                    <h5>{testimonial.reviewerName}</h5>
                    <p className="text-muted-foreground">
                      {testimonial.reviewerPosition}
                    </p>
                  </div>
                  <p className="text-muted-foreground">{testimonial.source}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
