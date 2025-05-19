// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: [
      'devserver-main--ctrlaltrecycle.netlify.app', // Add your Netlify subdomain here
    ],
  },
})
