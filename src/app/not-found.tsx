import { ContentContainer } from "passport-ui/content-container";
import { Button } from "passport-ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <ContentContainer variant="relaxed">
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground max-w-md">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
          </p>
        </div>
        <Link href="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    </ContentContainer>
  );
}

