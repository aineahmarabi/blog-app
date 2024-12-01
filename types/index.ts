import type { Image } from 'sanity'

export interface Author {
  name: string
  image: Image
  bio: string
  slug: {
    current: string
  }
}

export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  mainImage: Image
  author: Author
  publishedAt: string
  body: any
  category: {
    title: string
  }
} 