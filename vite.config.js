import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: 'all', // disables host checking entirely
  },
})
