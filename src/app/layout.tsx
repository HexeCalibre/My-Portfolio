import type { Metadata } from "next";
import { SkipLink } from "@/components/ui";
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
        {children}
      </body>
    </html>
  );
}
