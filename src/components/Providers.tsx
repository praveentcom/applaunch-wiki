"use client";

import { ThemeProvider } from "passport-ui/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
