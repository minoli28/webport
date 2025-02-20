import { Metadata } from 'next'

export function constructMetadata({
  title = 'Beaudelaire Tsoungui Nzodoumkouo',
  description = "I am a software engineering student at concordia and i love to build.",
  image = '/beaudelaire.jpeg',
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
      creator: '@beaudelaire001'
    },
    icons,
    metadataBase: new URL('https://www.beaudelaire.ca'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
