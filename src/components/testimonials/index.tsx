"use client";
import { siteConfig } from "@/config/site";
import { Card, CardContent } from "passport-ui/card";

export const Testimonials = () => {
  if (!siteConfig.testimonials || siteConfig.testimonials.length === 0) {
    return null;
  }

  return (
    <div className="w-full my-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col">
            <CardContent className="flex flex-col gap-4 p-6 flex-1">
              <p className="text-sm md:text-base italic text-muted-foreground flex-1">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex flex-col gap-1 mt-auto">
                <p className="font-semibold text-sm md:text-base">
                  {testimonial.reviewerName}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {testimonial.reviewerPosition}
                </p>
                <p className="text-xs text-muted-foreground">
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
