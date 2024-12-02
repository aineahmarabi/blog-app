import React from 'react'
import { client } from '../../sanity/lib/client'
import { urlForImage } from '../../sanity/lib/image'
import ShareButtons from '../components/ShareButtons'
import { PortableText } from '@portabletext/react'
import type { Post } from '@/types'

async function getPost(slug: string): Promise<Post> {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      mainImage,
      author->{
        name,
        image,
        bio,
        slug
      },
      publishedAt,
      body,
      category->{
        title
      }
    }`,
    { slug }
  )
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  const currentUrl = `https://jewelinthemines.com/blogs/${params.slug}`

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-purple-950 mb-4">{post.title}</h1>
      
      {post.mainImage && (
        <div className="relative h-[400px] mb-8">
          <img
            src={urlForImage(post.mainImage).url()}
            alt={post.title}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      )}

      <div className="prose max-w-none mb-8">
        <PortableText value={post.body} />
      </div>

      <ShareButtons 
        title={post.title}
        url={currentUrl}
      />
    </article>
  )
} 