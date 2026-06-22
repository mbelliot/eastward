import { defineCliConfig } from 'sanity/cli'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineCliConfig({
  api: {
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || '4cflhpla',
    dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  },
  schemaExtraction: {
    enabled: true,
    enforceRequiredFields: true,
    watchPatterns: ['./src/sanity/schemaTypes/**/*.ts'],
  },
  typegen: {
    enabled: true,
    path: './src/**/*.{ts,tsx,astro}',
    generates: './sanity.types.ts',
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
  vite: (config) => {
    return { ...config, plugins: [tsconfigPaths()] }
  },
})
