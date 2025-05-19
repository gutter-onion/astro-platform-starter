import { defineConfig from 'vite';
export default defineConfig({
    server: {
        allowedHosts: ['localhost', '127.0.0.1', 'devserver-main--ctrlaltrecycle.netlify.app'],
    },
});
