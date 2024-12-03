'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemas } from './sanity/schemas'

export default defineConfig({
  projectId: 's58wcsbp',
  dataset: 'production',
  title: 'Jewel in the Mines Blog',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
})
