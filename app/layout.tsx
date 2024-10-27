import React from "react";
import type { Metadata } from "next";
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col h-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
