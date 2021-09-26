import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        outDir: './out',
        //assetsDir: './assets',
        minify: false,
        sourcemap: false,
        cssCodeSplit: true,
        assetsInlineLimit: 0,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (!id.includes('material-ui')) {
                        console.log(id)
                    }
                    if (id.includes('material-ui')) {
                        return 'mui'
                    }
                    if (id.includes('recharts')) {
                        return 'charts'
                    }
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                }
            }
        }
    }
})
