import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FRACTZ Knowledge Base - AI Assistant for Instant Answers",
  description:
    "Access FRACTZ's AI-powered knowledge base for instant answers and insights. Smart, always-on support tailored for your needs.",
  keywords: [
    "FRACTZ",
    "AI assistant",
    "knowledge base",
    "instant answers",
    "support",
    "insights",
  ],
  openGraph: {
    title: "FRACTZ Knowledge Base - AI Assistant for Instant Answers",
    description:
      "Get instant answers and insights with FRACTZ's AI assistant, your smart, always-on support.",
    url: "https://knowledge-base.fractz.com/",
    type: "website",
    images: [
      {
        url: "https://knowledge-base.fractz.com/_next/image?url=%2Flogo.png&w=384&q=75",
        width: 220,
        height: 24,
        alt: "FRACTZ Knowledge Base AI Assistant",
      },
    ],
  },
  twitter: {
    site: "@fractz_com",
    title: "FRACTZ Knowledge Base - AI Assistant",
    description: "Instant answers and support from FRACTZ's AI assistant.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </head>
      <body className={`${inter.className} flex flex-col h-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "WebSite",
                url: "https://knowledge-base.fractz.com",
                potentialAction: {
                  "@type": "SearchAction",
                  target:
                    "https://knowledge-base.fractz.com/?search={search_term}",
                  "query-input": "required name=search_term",
                },
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
