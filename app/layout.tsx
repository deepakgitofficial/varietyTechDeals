import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tech Variety Deals — Best Tech & Gaming Deals on Amazon",
    template: "%s | Tech Variety Deals",
  },
  description:
    "Discover the best deals on laptops, smartphones, gaming gear, headphones, and more. Expert reviews and curated Amazon deals for tech enthusiasts.",
  keywords: [
    "tech deals",
    "amazon affiliate",
    "gaming gear",
    "laptop deals",
    "best headphones",
    "smartphone reviews",
  ],
  openGraph: {
    title: "Tech Variety Deals",
    description:
      "Your trusted source for the best Amazon tech deals, reviews, and buying guides.",
    url: "https://techvarietydeals.com",
    siteName: "Tech Variety Deals",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Variety Deals",
    description:
      "Discover the best deals on laptops, smartphones, gaming gear, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
