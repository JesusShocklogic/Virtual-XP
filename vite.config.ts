import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from "vite-plugin-pwa";
import {createHtmlPlugin} from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig(({ mode}) => {
  const env = loadEnv(mode, process.cwd()),
        dynamicCss = `${env.VITE_API_BASE}/dynamic/style.css`;
  return {
    plugins: [
      vue(),
      createHtmlPlugin({
        inject: {
          data: {
            DYNAMIC_CSS: dynamicCss
          }
        }
      }),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'img/icons/apple-touch-icon.png', 'robots.txt', 'fonts/**.ttf'],
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
        },
        workbox: {
          sourcemap: true,
          globPatterns: ['**/*.{css,js,html,ttf}'],
          runtimeCaching: [
            {
              urlPattern: dynamicCss,
              handler: 'StaleWhileRevalidate',
              options: {
                expiration: {
                  maxAgeSeconds: 120,
                  purgeOnQuotaError: true
                },
                cacheableResponse: {
                  statuses: [0, 200]
                },
                cacheName: 'styling-from-wordpress',
              }
            }
          ]
        }
      })
    ],
    base: env.VITE_BASE_PATH,
    build: {
      assetsDir: 'assets',
      rollupOptions: {
        external: ['/dynamicStyling.css']
      }
    }
  }
})
