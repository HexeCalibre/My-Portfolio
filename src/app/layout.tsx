import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
