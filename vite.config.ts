import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode}) => {
  const env = loadEnv(mode, ".");
  return {
    plugins: [
      vue(),
      VitePWA({
        includeAssets: ['favicon.ico', 'img/icons/apple-touch-icon.png', 'robots.txt'],
        manifest: {
          name: 'Virtual XP',
          short_name: 'VXP',
          description: 'Your mobile, virtual platform for events',
          theme_color: '#FFFFFF',
          icons: [
            {
              src: 'img/icons/android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'img/icons/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      })
    ],
    base: '/sites/',
    build: {
      assetsDir: 'assets'
    }

  }
})
