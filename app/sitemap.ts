import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all posts
  const posts = await client.fetch(`*[_type == "post"]{ slug, _updatedAt }`)
  
  const postEntries = posts.map((post) => ({
    url: `https://www.jewelinthemines.com/posts/${post.slug.current}`,
    lastModified: post._updatedAt,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [
    {
      url: 'https://www.jewelinthemines.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...postEntries,
  ]
} 
