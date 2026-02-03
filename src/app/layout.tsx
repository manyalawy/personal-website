import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { portfolio } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const { name, title, tagline, siteUrl, ogImage } = portfolio.personalInfo;

export const metadata: Metadata = {
  title: `${name} | ${title}`,
  description: tagline,
  keywords: [
    "software engineer",
    "full stack developer",
    "portfolio",
    "web developer",
    "React",
    "Next.js",
    "TypeScript",
  ],

  // Open Graph for Facebook, LinkedIn, etc.
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: name,
    title: `${name} | ${title}`,
    description: tagline,
    images: [
      {
        url: `${siteUrl}${ogImage}`,
        width: 1200,
        height: 630,
        alt: `${name} - ${title}`,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: `${name} | ${title}`,
    description: tagline,
    images: [`${siteUrl}${ogImage}`],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Canonical URL
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.personalInfo.name,
    jobTitle: portfolio.personalInfo.title,
    description: portfolio.personalInfo.tagline,
    url: portfolio.personalInfo.siteUrl,
    sameAs: [
      portfolio.contact.github,
      portfolio.contact.linkedin,
    ],
    knowsAbout: portfolio.skills.map((s) => s.name),
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-surface text-text-primary`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <SkipLink />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
