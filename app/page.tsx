import { client } from '../sanity/lib/client'
import { Post } from '@/types'
import Link from 'next/link'
import { format } from 'date-fns'
import { PostCard } from './components/PostCard'

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Home({
  searchParams = Promise.resolve({})
}: Props) {
  async function getPosts(categoryParam?: string): Promise<Post[]> {
    const baseQuery = `*[_type == "post"${categoryParam ? ' && category->title == $category' : ''}] | order(_createdAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      author->{
        name,
        image
      },
      category->{
        title
      }
    }`;
    return client.fetch(baseQuery, categoryParam ? { category: categoryParam } : {});
  }

  const searchParamsData = await searchParams;
  
  const category = Array.isArray(searchParamsData.category) 
    ? searchParamsData.category[0] 
    : searchParamsData.category;
  
  const posts = await getPosts(category);
  const [latestPost, ...remainingPosts] = posts;

  // Get related posts from the same category as the latest post
  const relatedPosts = latestPost
    ? posts.filter(
        (post) =>
          post._id !== latestPost._id &&
          post.category?.title === latestPost.category?.title
      ).slice(0, 3)
    : [];

  if (category) {
    return (
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-purple-800 mb-4">
              {category} Stories
            </h1>
            <div className="w-24 h-1 bg-purple-800"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="max-w-5xl pl-4 md:pl-10 pt-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-purple-950 mb-4">
              What We&apos;re Reading
            </h1>
            <div className="w-24 h-1 bg-purple-700"></div>
          </div>
          
          {latestPost && (
            <div className="mb-16 pr-4 md:pr-10">
              <PostCard post={latestPost} isLarge />
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 pr-4 md:pr-10">
            {remainingPosts.slice(0, 4).map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>

        {latestPost && relatedPosts.length > 0 && (
          <div className="hidden md:block w-80 pt-8 pr-4">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-purple-950 mb-4">
                More in {latestPost.category?.title}
              </h2>
              <div className="w-16 h-1 bg-purple-700"></div>
            </div>
            <div className="space-y-6">
              {relatedPosts.map((post, index) => (
                <Link 
                  key={post._id} 
                  href={`/blog/${post.slug.current}`}
                  className={`block group pb-6 ${
                    index !== relatedPosts.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <h3 className="text-base font-medium text-purple-500 group-hover:text-purple-700">
                    {post.title}
                  </h3>
                  <div className="text-sm text-gray-600 mt-1">
                    <span>{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</span>
                    {post.author?.name && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{post.author.name}</span>
                      </>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
