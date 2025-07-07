import { client, urlFor } from '../sanity/client'

export interface SeoData {
  title: string
  description: string
  ogImage?: {
    asset: {
      _ref: string
    }
    alt: string
  }
  ogTitle?: string
  ogDescription?: string
  keywords?: string[]
  canonicalUrl?: string
}

export async function getSeoData(): Promise<SeoData | null> {
  try {
    const query = `*[_type == "seo"][0] {
      title,
      description,
      ogImage {
        asset->,
        alt
      },
      ogTitle,
      ogDescription,
      keywords,
      canonicalUrl
    }`

    const seoData = await client.fetch(query)
    return seoData
  } catch (error) {
    console.error('Error fetching SEO data:', error)
    return null
  }
}

export function getOgImageUrl(ogImage: any): string | null {
  if (!ogImage?.asset?._ref) return null
  return urlFor(ogImage).url()
} 