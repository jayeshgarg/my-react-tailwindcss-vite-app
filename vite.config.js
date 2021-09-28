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
                    //src, vite, jss, material-ui, css-vendor, babel, react
                    if (id.includes('recharts')) {
                        return 'charts'
                    }
                    if (id.includes('material-ui')) {
                        //console.log('material-ui');
                        if (id.includes('icons')) {
                            //console.log('babel');
                            return 'mui-icon'
                        }
                        //console.log(id)
                        return 'mui-other'
                    }
                    if (id.includes('babel')) {
                        return 'babel'
                    }
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                    if (id.includes('src')) {
                        return 'app'
                    }
                }
            }
        }
    }
})
