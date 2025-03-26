import { Metadata } from 'next'

export function constructMetadata({
  title = 'Olivier Minani',
  description = "I am an industrial engineering student at concordia and I love anything related to supply chain, process optimisation, quality, and continuous improvement.",
  image = '/olivier.jpg',
  icons = '/avatar.svg', // TODO: Add a custom icon
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@your_min_oli'
    },
    icons,
    metadataBase: new URL('https://www.mrmos.ca'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
