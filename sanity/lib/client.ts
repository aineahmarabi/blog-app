import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 's58wcsbp',
  dataset: 'production',
  apiVersion: '2024-03-21',
  useCdn: true
})
