import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import CloudflareWebAnalyticsProvider from 'next-cloudflare-web-analytics'

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontHeading = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oramatel - Professional IT Solutions",
  description: "Elevate your technology stack with Oramatel's professional IT solutions and services.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        {children}
        <CloudflareWebAnalyticsProvider token={'13ec3f46a7ed402e9b3e4f26ebbf69fa'}/>
      </body>
    </html>
  );
}
