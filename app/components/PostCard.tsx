import Link from 'next/link'
import { format } from 'date-fns'
import { Post } from '@/types'
import { urlForImage } from '../../sanity/lib/image'

export const PostCard = ({ post, isLarge = false }: { post: Post, isLarge?: boolean }) => (
  <Link href={`/blog/${post.slug.current}`} className="group block">
    <article>
      {post.mainImage && (
        <div className="relative aspect-[16/9] mb-6">
          <img
            src={urlForImage(post.mainImage).url()}
            alt={post.title}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            {post.category?.title || 'General'}
          </span>
          <div className="uppercase tracking-wider text-sm text-gray-600">
            {format(new Date(post.publishedAt), 'MMMM d, yyyy')} • {post.author?.name}
          </div>
        </div>
        <h2 className={`font-bold text-purple-500 group-hover:text-purple-700 ${isLarge ? 'text-4xl' : 'text-2xl'}`}>
          {post.title}
        </h2>
      </div>
    </article>
  </Link>
)