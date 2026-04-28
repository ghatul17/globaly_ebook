import { client, urlFor } from './sanity'
import type { PortableTextBlock } from '@portabletext/react'

export interface BlogPost {
  _id: string
  slug: string
  title: string
  date: string
  author: string
  description: string
  cover?: string
  tags: string[]
  body: PortableTextBlock[]
}

const postFields = `
  _id,
  title,
  "slug": slug.current,
  "date": publishedAt,
  author,
  description,
  "cover": cover.asset->url,
  tags,
  body
`

export async function getAllPosts(): Promise<BlogPost[]> {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) { ${postFields} }`
  )
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const result = await client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] { ${postFields} }`,
    { slug }
  )
  return result ?? undefined
}

export { urlFor }
