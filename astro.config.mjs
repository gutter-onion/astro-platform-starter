import { defineConfig } from 'astro/config'
import netlify from '@astrojs/netlify'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  adapter: netlify(),
  vite: {
    server: {
      allowedHosts: ['devserver-main--ctrlaltrecycle.netlify.app'], // ✅ allow Netlify dev server
    },
  },
})
