import type { Metadata } from "next";
import "../styles/style.css";
import { getSeoData, getOgImageUrl } from "../lib/getSeo";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getSeoData();
  
  if (!seoData) {
    return {
      title: "Homie Band",
      description: "It's Homie Band",
    };
  }

  const ogImageUrl = seoData.ogImage ? getOgImageUrl(seoData.ogImage) : null;

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    openGraph: {
      title: seoData.ogTitle || seoData.title,
      description: seoData.ogDescription || seoData.description,
      images: ogImageUrl ? [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: seoData.ogImage?.alt || seoData.title,
        }
      ] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData.ogTitle || seoData.title,
      description: seoData.ogDescription || seoData.description,
      images: ogImageUrl ? [ogImageUrl] : [],
    },
    alternates: {
      canonical: seoData.canonicalUrl,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
