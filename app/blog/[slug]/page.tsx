import React from 'react'
import { client } from '../../../sanity/lib/client'
import { urlForImage } from '../../../sanity/lib/image'
import { PortableText } from '@portabletext/react'
import type { Post } from '@/types'
import { format } from 'date-fns'

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

export async function generateStaticParams() {
  const posts = await client.fetch(`
    *[_type == "post"]{
      slug {
        current
      }
    }
  `)
  
  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  return (
    <article className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              {post.category?.title || 'General'}
            </span>
            <div className="uppercase tracking-wider text-sm text-gray-600">
              {format(new Date(post.publishedAt), 'MMMM d, yyyy')} • {post.author?.name}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-purple-950 mb-8 leading-tight">
            {post.title}
          </h1>
        </header>

        {post.mainImage && (
          <div className="relative aspect-[16/9] mb-12">
            <img
              src={urlForImage(post.mainImage).url()}
              alt={post.title}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <PortableText
            value={post.body}
            components={{
              block: {
                normal: ({children}) => <p className="text-lg leading-relaxed tracking-wide text-gray-700 mb-6 text-justify">{children}</p>,
                h2: ({children}) => <h2 className="text-3xl font-bold text-purple-950 mt-12 mb-6">{children}</h2>,
                h3: ({children}) => <h3 className="text-2xl font-bold text-purple-950 mt-8 mb-4">{children}</h3>,
              },
              list: {
                bullet: ({children}) => <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">{children}</ul>,
                number: ({children}) => <ol className="list-decimal pl-6 mb-6 text-lg text-gray-700 space-y-2">{children}</ol>,
              },
              listItem: {
                bullet: ({children}) => <li className="leading-relaxed tracking-wide">{children}</li>,
              },
            }}
          />
        </div>
      </div>
    </article>
  )
} 