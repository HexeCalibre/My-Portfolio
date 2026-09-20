import type { Metadata } from "next";
import { SiteFooter, SiteHeader, SkipLink } from "@/components/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cybersecurity Portfolio",
  description: "Cybersecurity portfolio and project evidence.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
