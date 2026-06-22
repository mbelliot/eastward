import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from '~/sanity/schemaTypes'

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || '4cflhpla',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  plugins: [structureTool(), visionTool()],
  schema,
})
