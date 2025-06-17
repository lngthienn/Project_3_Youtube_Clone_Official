import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api/suggest': {
                target: 'https://clients1.google.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/suggest/, '/complete/search?client=youtube&hl=vi&gl=VN&q='),
            },
        },
    },
});
