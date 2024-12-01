import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Change to true to use the Content Delivery Network
  perspective: 'published',
  stega: false, // Disable stega in development
})
