// @ts-check

import sanity from '@sanity/astro'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, fontProviders } from 'astro/config'

import react from '@astrojs/react'

import icon from 'astro-icon'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Jost',
      cssVariable: '--font-jost',
      weights: [300, 400, 500],
      styles: ['normal', 'italic'],
    },
    {
      provider: fontProviders.google(),
      name: 'Tenor Sans',
      cssVariable: '--font-tenor',
      weights: [300, 400],
      styles: ['normal'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ['**/sanity.types.ts'],
      },
    },
  },

  integrations: [
    sanity({
      projectId: '4cflhpla',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2026-06-03',
      ...(isProd
        ? {}
        : {
            studioBasePath: '/cms',
          }),
    }),
    ...(isProd ? [] : [react()]),
    icon(),
  ],
})
