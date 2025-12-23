import { Home, Newspaper } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { PrefetchLink } from "@workspace/ui/components/prefetch-link";
import { plural } from "pluralize";

export default function NotFound() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Card className="w-full">
          <CardContent className="grid gap-6">
            <div className="flex flex-col text-center">
              <h2>404</h2>
              <h4>You&apos;re lost in space.</h4>
              <p className="text-muted-foreground">
                The page you&apos;re looking for doesn&apos;t exist or has been
                moved.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row mx-auto gap-3 justify-center w-full">
              <PrefetchLink href="/">
                <Button>
                  <Home />
                  Home
                </Button>
              </PrefetchLink>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
