// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/user/Desktop/Desktop/programming/coffe/coffe-shop/node_modules/.pnpm/vite@5.3.5_@types+node@20.14.12_terser@5.31.3/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/user/Desktop/Desktop/programming/coffe/coffe-shop/node_modules/.pnpm/@vitejs+plugin-vue@5.1.0_vite@5.3.5_@types+node@20.14.12_terser@5.31.3__vue@3.4.34_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///C:/Users/user/Desktop/Desktop/programming/coffe/coffe-shop/node_modules/.pnpm/vite-plugin-vue-devtools@7.3.7_rollup@2.79.1_vite@5.3.5_@types+node@20.14.12_terser@5.31.3__vue@3.4.34_typescript@5.4.5_/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import { VitePWA } from "file:///C:/Users/user/Desktop/Desktop/programming/coffe/coffe-shop/node_modules/.pnpm/vite-plugin-pwa@0.20.1_vite@5.3.5_@types+node@20.14.12_terser@5.31.3__workbox-build@7.1.1_workbox-window@7.1.0/node_modules/vite-plugin-pwa/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/user/Desktop/Desktop/programming/coffe/coffe-shop/vite.config.ts";
var vite_config_default = defineConfig({
  server: {
    hmr: {
      overlay: false
    }
  },
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Wave Cafe",
        orientation: "any",
        short_name: "Wave Cafe",
        theme_color: "#1e5050",
        background_color: "#1e5050",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/windows11/SmallTile.scale-100.png",
            sizes: "71x71"
          },
          {
            src: "/windows11/SmallTile.scale-125.png",
            sizes: "89x89"
          },
          {
            src: "/windows11/SmallTile.scale-150.png",
            sizes: "107x107"
          },
          {
            src: "/windows11/SmallTile.scale-200.png",
            sizes: "142x142"
          },
          {
            src: "/windows11/SmallTile.scale-400.png",
            sizes: "284x284"
          },
          {
            src: "/windows11/Square150x150Logo.scale-100.png",
            sizes: "150x150"
          },
          {
            src: "/windows11/Square150x150Logo.scale-125.png",
            sizes: "188x188"
          },
          {
            src: "/windows11/Square150x150Logo.scale-150.png",
            sizes: "225x225"
          },
          {
            src: "/windows11/Square150x150Logo.scale-200.png",
            sizes: "300x300"
          },
          {
            src: "/windows11/Square150x150Logo.scale-400.png",
            sizes: "600x600"
          },
          {
            src: "/windows11/Wide310x150Logo.scale-100.png",
            sizes: "310x150"
          },
          {
            src: "/windows11/Wide310x150Logo.scale-125.png",
            sizes: "388x188"
          },
          {
            src: "/windows11/Wide310x150Logo.scale-150.png",
            sizes: "465x225"
          },
          {
            src: "/windows11/Wide310x150Logo.scale-200.png",
            sizes: "620x300"
          },
          {
            src: "/windows11/Wide310x150Logo.scale-400.png",
            sizes: "1240x600"
          },
          {
            src: "/windows11/LargeTile.scale-100.png",
            sizes: "310x310"
          },
          {
            src: "/windows11/LargeTile.scale-125.png",
            sizes: "388x388"
          },
          {
            src: "/windows11/LargeTile.scale-150.png",
            sizes: "465x465"
          },
          {
            src: "/windows11/LargeTile.scale-200.png",
            sizes: "620x620"
          },
          {
            src: "/windows11/LargeTile.scale-400.png",
            sizes: "1240x1240"
          },
          {
            src: "/windows11/Square44x44Logo.scale-100.png",
            sizes: "44x44"
          },
          {
            src: "/windows11/Square44x44Logo.scale-125.png",
            sizes: "55x55"
          },
          {
            src: "/windows11/Square44x44Logo.scale-150.png",
            sizes: "66x66"
          },
          {
            src: "/windows11/Square44x44Logo.scale-200.png",
            sizes: "88x88"
          },
          {
            src: "/windows11/Square44x44Logo.scale-400.png",
            sizes: "176x176"
          },
          {
            src: "/windows11/StoreLogo.scale-100.png",
            sizes: "50x50"
          },
          {
            src: "/windows11/StoreLogo.scale-125.png",
            sizes: "63x63"
          },
          {
            src: "/windows11/StoreLogo.scale-150.png",
            sizes: "75x75"
          },
          {
            src: "/windows11/StoreLogo.scale-200.png",
            sizes: "100x100"
          },
          {
            src: "/windows11/StoreLogo.scale-400.png",
            sizes: "200x200"
          },
          {
            src: "/windows11/SplashScreen.scale-100.png",
            sizes: "620x300"
          },
          {
            src: "/windows11/SplashScreen.scale-125.png",
            sizes: "775x375"
          },
          {
            src: "/windows11/SplashScreen.scale-150.png",
            sizes: "930x450"
          },
          {
            src: "/windows11/SplashScreen.scale-200.png",
            sizes: "1240x600"
          },
          {
            src: "/windows11/SplashScreen.scale-400.png",
            sizes: "2480x1200"
          },
          {
            src: "/windows11/Square44x44Logo.targetsize-16.png",
            sizes: "16x16"
          },
          {
            src: "/windows11/Square44x44Logo.targetsize-20.png",
            sizes: "20x20"
          },
          {
            src: "/windows11/Square44x44Logo.targetsize-24.png",
            sizes: "24x24"
          },
          {
            src: "/windows11/Square44x44Logo.targetsize-30.png",
            sizes: "30x30"
          },
          {
            src: "/windows11/Square44x44Logo.targetsize-32.png",
            sizes: "32x32"
          },
          {
            src: "/windows11/Square44x44Logo.targetsize-36.png",
            sizes: "36x36"
          },
          {
            src: "/windows11/Square44x44Logo.targetsize-40.png",
            sizes: "40x40"
          },
          {
            src: "/windows11/Square44x44Logo.targetsize-44.png",
            sizes: "44x44"
          },
          {
            src: "/windows11/Square44x44Logo.targetsize-48.png",
            sizes: "48x48"
          },
          {
            src: "/windows11/Square44x44Logo.targetsize-60.png",
            sizes: "60x60"
          },
          {
            src: "/windows11/Square44x44Logo.targetsize-64.png",
            sizes: "64x64"
          },
          {
            src: "/windows11/Square44x44Logo.targetsize-72.png",
            sizes: "72x72"
          },
          {
            src: "/windows11/Square44x44Logo.targetsize-80.png",
            sizes: "80x80"
          },
          {
            src: "/windows11/Square44x44Logo.targetsize-96.png",
            sizes: "96x96"
          },
          {
            src: "/windows11/Square44x44Logo.targetsize-256.png",
            sizes: "256x256"
          },
          {
            src: "/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
            sizes: "16x16"
          },
          {
            src: "/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
            sizes: "20x20"
          },
          {
            src: "/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
            sizes: "24x24"
          },
          {
            src: "/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
            sizes: "30x30"
          },
          {
            src: "/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
            sizes: "32x32"
          },
          {
            src: "/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
            sizes: "36x36"
          },
          {
            src: "/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
            sizes: "40x40"
          },
          {
            src: "/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
            sizes: "44x44"
          },
          {
            src: "/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
            sizes: "48x48"
          },
          {
            src: "/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
            sizes: "60x60"
          },
          {
            src: "/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
            sizes: "64x64"
          },
          {
            src: "/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
            sizes: "72x72"
          },
          {
            src: "/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
            sizes: "80x80"
          },
          {
            src: "/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
            sizes: "96x96"
          },
          {
            src: "/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
            sizes: "256x256"
          },
          {
            src: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
            sizes: "16x16"
          },
          {
            src: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
            sizes: "20x20"
          },
          {
            src: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
            sizes: "24x24"
          },
          {
            src: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
            sizes: "30x30"
          },
          {
            src: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
            sizes: "32x32"
          },
          {
            src: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
            sizes: "36x36"
          },
          {
            src: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
            sizes: "40x40"
          },
          {
            src: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
            sizes: "44x44"
          },
          {
            src: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
            sizes: "48x48"
          },
          {
            src: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
            sizes: "60x60"
          },
          {
            src: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
            sizes: "64x64"
          },
          {
            src: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
            sizes: "72x72"
          },
          {
            src: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
            sizes: "80x80"
          },
          {
            src: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
            sizes: "96x96"
          },
          {
            src: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
            sizes: "256x256"
          },
          {
            src: "/android//android-launchericon-512-512.png",
            sizes: "512x512"
          },
          {
            src: "/android//android-launchericon-192-192.png",
            sizes: "192x192"
          },
          {
            src: "/android//android-launchericon-144-144.png",
            sizes: "144x144"
          },
          {
            src: "/android//android-launchericon-96-96.png",
            sizes: "96x96"
          },
          {
            src: "/android//android-launchericon-72-72.png",
            sizes: "72x72"
          },
          {
            src: "/android//android-launchericon-48-48.png",
            sizes: "48x48"
          },
          {
            src: "/ios/16.png",
            sizes: "16x16"
          },
          {
            src: "/ios/20.png",
            sizes: "20x20"
          },
          {
            src: "/ios/29.png",
            sizes: "29x29"
          },
          {
            src: "/ios/32.png",
            sizes: "32x32"
          },
          {
            src: "/ios/40.png",
            sizes: "40x40"
          },
          {
            src: "/ios/50.png",
            sizes: "50x50"
          },
          {
            src: "/ios/57.png",
            sizes: "57x57"
          },
          {
            src: "/ios/58.png",
            sizes: "58x58"
          },
          {
            src: "/ios/60.png",
            sizes: "60x60"
          },
          {
            src: "/ios/64.png",
            sizes: "64x64"
          },
          {
            src: "/ios/72.png",
            sizes: "72x72"
          },
          {
            src: "/ios/76.png",
            sizes: "76x76"
          },
          {
            src: "/ios/80.png",
            sizes: "80x80"
          },
          {
            src: "/ios/87.png",
            sizes: "87x87"
          },
          {
            src: "/ios/100.png",
            sizes: "100x100"
          },
          {
            src: "/ios/114.png",
            sizes: "114x114"
          },
          {
            src: "/ios/120.png",
            sizes: "120x120"
          },
          {
            src: "/ios/128.png",
            sizes: "128x128"
          },
          {
            src: "/ios/144.png",
            sizes: "144x144"
          },
          {
            src: "/ios/152.png",
            sizes: "152x152"
          },
          {
            src: "/ios/167.png",
            sizes: "167x167"
          },
          {
            src: "/ios/180.png",
            sizes: "180x180"
          },
          {
            src: "/ios/192.png",
            sizes: "192x192"
          },
          {
            src: "/ios/256.png",
            sizes: "256x256"
          },
          {
            src: "/ios/512.png",
            sizes: "512x512"
          },
          {
            src: "/ios/1024.png",
            sizes: "1024x1024"
          }
        ],
        screenshots: [
          {
            src: "/screenshots/1.png",
            sizes: "1280x720",
            form_factor: "wide"
          },
          {
            src: "/screenshots/2.png",
            form_factor: "narrow",
            sizes: "375x667"
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "google-fonts",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 365
                // 1 year
              }
            }
          },
          {
            urlPattern: new RegExp("https://cdn.jsdelivr.net/(.*)"),
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "cdn-jsdelivr",
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365
                // 1 year
              }
            }
          },
          {
            urlPattern: new RegExp("https://unpkg.com/(.*)"),
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "unpkg",
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365
                // 1 year
              }
            }
          },
          {
            urlPattern: new RegExp(".(?:css|js|png|mp4|webm)$"),
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "static-resources",
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 365
                // 1 year
              }
            }
          },
          // {
          //   urlPattern: new RegExp('/$'),
          //   handler: 'NetworkFirst',
          //   options: {
          //     cacheName: 'start-url',
          //     expiration: {
          //       maxEntries: 1,
          //       maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
          //     }
          //   }
          // },
          {
            urlPattern: new RegExp(".*/video/.*.mp4$"),
            handler: "CacheFirst",
            options: {
              cacheName: "video-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
                // 1 year
              }
            }
          }
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERlc2t0b3BcXFxcRGVza3RvcFxcXFxwcm9ncmFtbWluZ1xcXFxjb2ZmZVxcXFxjb2ZmZS1zaG9wXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERlc2t0b3BcXFxcRGVza3RvcFxcXFxwcm9ncmFtbWluZ1xcXFxjb2ZmZVxcXFxjb2ZmZS1zaG9wXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy91c2VyL0Rlc2t0b3AvRGVza3RvcC9wcm9ncmFtbWluZy9jb2ZmZS9jb2ZmZS1zaG9wL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHNlcnZlcjoge1xuICAgIGhtcjoge1xuICAgICAgb3ZlcmxheTogZmFsc2VcbiAgICB9XG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICB2dWVEZXZUb29scygpLFxuICAgIFZpdGVQV0Eoe1xuICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiAnV2F2ZSBDYWZlJyxcblxuICAgICAgICBvcmllbnRhdGlvbjogJ2FueScsXG4gICAgICAgIHNob3J0X25hbWU6ICdXYXZlIENhZmUnLFxuICAgICAgICB0aGVtZV9jb2xvcjogJyMxZTUwNTAnLFxuICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiAnIzFlNTA1MCcsXG4gICAgICAgIGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcbiAgICAgICAgc3RhcnRfdXJsOiAnLycsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9TbWFsbFRpbGUuc2NhbGUtMTAwLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzcxeDcxJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9TbWFsbFRpbGUuc2NhbGUtMTI1LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzg5eDg5J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9TbWFsbFRpbGUuc2NhbGUtMTUwLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzEwN3gxMDcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NtYWxsVGlsZS5zY2FsZS0yMDAucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTQyeDE0MidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU21hbGxUaWxlLnNjYWxlLTQwMC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcyODR4Mjg0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9TcXVhcmUxNTB4MTUwTG9nby5zY2FsZS0xMDAucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTUweDE1MCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU3F1YXJlMTUweDE1MExvZ28uc2NhbGUtMTI1LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE4OHgxODgnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTE1MHgxNTBMb2dvLnNjYWxlLTE1MC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcyMjV4MjI1J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9TcXVhcmUxNTB4MTUwTG9nby5zY2FsZS0yMDAucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMzAweDMwMCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU3F1YXJlMTUweDE1MExvZ28uc2NhbGUtNDAwLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzYwMHg2MDAnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1dpZGUzMTB4MTUwTG9nby5zY2FsZS0xMDAucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMzEweDE1MCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvV2lkZTMxMHgxNTBMb2dvLnNjYWxlLTEyNS5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICczODh4MTg4J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9XaWRlMzEweDE1MExvZ28uc2NhbGUtMTUwLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzQ2NXgyMjUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1dpZGUzMTB4MTUwTG9nby5zY2FsZS0yMDAucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNjIweDMwMCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvV2lkZTMxMHgxNTBMb2dvLnNjYWxlLTQwMC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxMjQweDYwMCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvTGFyZ2VUaWxlLnNjYWxlLTEwMC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICczMTB4MzEwJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9MYXJnZVRpbGUuc2NhbGUtMTI1LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzM4OHgzODgnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL0xhcmdlVGlsZS5zY2FsZS0xNTAucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNDY1eDQ2NSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvTGFyZ2VUaWxlLnNjYWxlLTIwMC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc2MjB4NjIwJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9MYXJnZVRpbGUuc2NhbGUtNDAwLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzEyNDB4MTI0MCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnNjYWxlLTEwMC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc0NHg0NCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnNjYWxlLTEyNS5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1NXg1NSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnNjYWxlLTE1MC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc2Nng2NidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnNjYWxlLTIwMC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc4OHg4OCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnNjYWxlLTQwMC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxNzZ4MTc2J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9TdG9yZUxvZ28uc2NhbGUtMTAwLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUweDUwJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9TdG9yZUxvZ28uc2NhbGUtMTI1LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzYzeDYzJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9TdG9yZUxvZ28uc2NhbGUtMTUwLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzc1eDc1J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9TdG9yZUxvZ28uc2NhbGUtMjAwLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzEwMHgxMDAnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1N0b3JlTG9nby5zY2FsZS00MDAucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMjAweDIwMCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU3BsYXNoU2NyZWVuLnNjYWxlLTEwMC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc2MjB4MzAwJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9TcGxhc2hTY3JlZW4uc2NhbGUtMTI1LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzc3NXgzNzUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NwbGFzaFNjcmVlbi5zY2FsZS0xNTAucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnOTMweDQ1MCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU3BsYXNoU2NyZWVuLnNjYWxlLTIwMC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxMjQweDYwMCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU3BsYXNoU2NyZWVuLnNjYWxlLTQwMC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcyNDgweDEyMDAnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby50YXJnZXRzaXplLTE2LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE2eDE2J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28udGFyZ2V0c2l6ZS0yMC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcyMHgyMCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtMjQucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMjR4MjQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby50YXJnZXRzaXplLTMwLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzMweDMwJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28udGFyZ2V0c2l6ZS0zMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICczMngzMidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtMzYucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMzZ4MzYnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby50YXJnZXRzaXplLTQwLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzQweDQwJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28udGFyZ2V0c2l6ZS00NC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc0NHg0NCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtNDgucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNDh4NDgnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby50YXJnZXRzaXplLTYwLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzYweDYwJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28udGFyZ2V0c2l6ZS02NC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc2NHg2NCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtNzIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNzJ4NzInXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby50YXJnZXRzaXplLTgwLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzgweDgwJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28udGFyZ2V0c2l6ZS05Ni5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc5Nng5NidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLnRhcmdldHNpemUtMjU2LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzI1NngyNTYnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtMTYucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTZ4MTYnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtMjAucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMjB4MjAnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtMjQucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMjR4MjQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtMzAucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMzB4MzAnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtMzIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMzJ4MzInXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtMzYucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMzZ4MzYnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtNDAucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNDB4NDAnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtNDQucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNDR4NDQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtNDgucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNDh4NDgnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtNjAucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNjB4NjAnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtNjQucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNjR4NjQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtNzIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNzJ4NzInXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtODAucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnODB4ODAnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtOTYucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnOTZ4OTYnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLXVucGxhdGVkX3RhcmdldHNpemUtMjU2LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzI1NngyNTYnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLWxpZ2h0dW5wbGF0ZWRfdGFyZ2V0c2l6ZS0xNi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxNngxNidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTIwLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzIweDIwJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtMjQucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMjR4MjQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLWxpZ2h0dW5wbGF0ZWRfdGFyZ2V0c2l6ZS0zMC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICczMHgzMCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTMyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzMyeDMyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtMzYucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMzZ4MzYnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLWxpZ2h0dW5wbGF0ZWRfdGFyZ2V0c2l6ZS00MC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc0MHg0MCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTQ0LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzQ0eDQ0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtNDgucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNDh4NDgnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLWxpZ2h0dW5wbGF0ZWRfdGFyZ2V0c2l6ZS02MC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc2MHg2MCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTY0LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzY0eDY0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtNzIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNzJ4NzInXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvd2luZG93czExL1NxdWFyZTQ0eDQ0TG9nby5hbHRmb3JtLWxpZ2h0dW5wbGF0ZWRfdGFyZ2V0c2l6ZS04MC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc4MHg4MCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy93aW5kb3dzMTEvU3F1YXJlNDR4NDRMb2dvLmFsdGZvcm0tbGlnaHR1bnBsYXRlZF90YXJnZXRzaXplLTk2LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzk2eDk2J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3dpbmRvd3MxMS9TcXVhcmU0NHg0NExvZ28uYWx0Zm9ybS1saWdodHVucGxhdGVkX3RhcmdldHNpemUtMjU2LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzI1NngyNTYnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvYW5kcm9pZC8vYW5kcm9pZC1sYXVuY2hlcmljb24tNTEyLTUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2FuZHJvaWQvL2FuZHJvaWQtbGF1bmNoZXJpY29uLTE5Mi0xOTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTkyeDE5MidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9hbmRyb2lkLy9hbmRyb2lkLWxhdW5jaGVyaWNvbi0xNDQtMTQ0LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE0NHgxNDQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvYW5kcm9pZC8vYW5kcm9pZC1sYXVuY2hlcmljb24tOTYtOTYucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnOTZ4OTYnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvYW5kcm9pZC8vYW5kcm9pZC1sYXVuY2hlcmljb24tNzItNzIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNzJ4NzInXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvYW5kcm9pZC8vYW5kcm9pZC1sYXVuY2hlcmljb24tNDgtNDgucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNDh4NDgnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvaW9zLzE2LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE2eDE2J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2lvcy8yMC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcyMHgyMCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9pb3MvMjkucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMjl4MjknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvaW9zLzMyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzMyeDMyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2lvcy80MC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc0MHg0MCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9pb3MvNTAucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTB4NTAnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvaW9zLzU3LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzU3eDU3J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2lvcy81OC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1OHg1OCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9pb3MvNjAucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNjB4NjAnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvaW9zLzY0LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzY0eDY0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2lvcy83Mi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc3Mng3MidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9pb3MvNzYucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNzZ4NzYnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvaW9zLzgwLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzgweDgwJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2lvcy84Ny5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc4N3g4NydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9pb3MvMTAwLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzEwMHgxMDAnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvaW9zLzExNC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxMTR4MTE0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2lvcy8xMjAucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTIweDEyMCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9pb3MvMTI4LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzEyOHgxMjgnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvaW9zLzE0NC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxNDR4MTQ0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2lvcy8xNTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTUyeDE1MidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9pb3MvMTY3LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE2N3gxNjcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvaW9zLzE4MC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxODB4MTgwJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2lvcy8xOTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTkyeDE5MidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9pb3MvMjU2LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzI1NngyNTYnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvaW9zLzUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2lvcy8xMDI0LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzEwMjR4MTAyNCdcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHNjcmVlbnNob3RzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3NjcmVlbnNob3RzLzEucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTI4MHg3MjAnLFxuICAgICAgICAgICAgZm9ybV9mYWN0b3I6ICd3aWRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3NjcmVlbnNob3RzLzIucG5nJyxcbiAgICAgICAgICAgIGZvcm1fZmFjdG9yOiAnbmFycm93JyxcbiAgICAgICAgICAgIHNpemVzOiAnMzc1eDY2NydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB3b3JrYm94OiB7XG4gICAgICAgIHJ1bnRpbWVDYWNoaW5nOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdXJsUGF0dGVybjogbmV3IFJlZ0V4cCgnaHR0cHM6Ly9mb250cy4oPzpnb29nbGVhcGlzfGdzdGF0aWMpLmNvbS8oLiopJyksXG4gICAgICAgICAgICBoYW5kbGVyOiAnU3RhbGVXaGlsZVJldmFsaWRhdGUnLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBjYWNoZU5hbWU6ICdnb29nbGUtZm9udHMnLFxuICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogMjAsXG4gICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0ICogMzY1IC8vIDEgeWVhclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiBuZXcgUmVnRXhwKCdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvKC4qKScpLFxuICAgICAgICAgICAgaGFuZGxlcjogJ1N0YWxlV2hpbGVSZXZhbGlkYXRlJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiAnY2RuLWpzZGVsaXZyJyxcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDMwLFxuICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDM2NSAvLyAxIHllYXJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdXJsUGF0dGVybjogbmV3IFJlZ0V4cCgnaHR0cHM6Ly91bnBrZy5jb20vKC4qKScpLFxuICAgICAgICAgICAgaGFuZGxlcjogJ1N0YWxlV2hpbGVSZXZhbGlkYXRlJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiAndW5wa2cnLFxuICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogMzAsXG4gICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0ICogMzY1IC8vIDEgeWVhclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiBuZXcgUmVnRXhwKCcuKD86Y3NzfGpzfHBuZ3xtcDR8d2VibSkkJyksXG4gICAgICAgICAgICBoYW5kbGVyOiAnU3RhbGVXaGlsZVJldmFsaWRhdGUnLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBjYWNoZU5hbWU6ICdzdGF0aWMtcmVzb3VyY2VzJyxcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDYwLFxuICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDM2NSAvLyAxIHllYXJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8ge1xuICAgICAgICAgIC8vICAgdXJsUGF0dGVybjogbmV3IFJlZ0V4cCgnLyQnKSxcbiAgICAgICAgICAvLyAgIGhhbmRsZXI6ICdOZXR3b3JrRmlyc3QnLFxuICAgICAgICAgIC8vICAgb3B0aW9uczoge1xuICAgICAgICAgIC8vICAgICBjYWNoZU5hbWU6ICdzdGFydC11cmwnLFxuICAgICAgICAgIC8vICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgLy8gICAgICAgbWF4RW50cmllczogMSxcbiAgICAgICAgICAvLyAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgKiAzNjUgLy8gMSB5ZWFyXG4gICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybFBhdHRlcm46IG5ldyBSZWdFeHAoJy4qL3ZpZGVvLy4qLm1wNCQnKSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdDYWNoZUZpcnN0JyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiAndmlkZW8tY2FjaGUnLFxuICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogMTAsXG4gICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0ICogMzY1IC8vIDEgeWVhclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgZGV2T3B0aW9uczoge1xuICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1gsU0FBUyxlQUFlLFdBQVc7QUFDblosU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVMsZUFBZTtBQUptTixJQUFNLDJDQUEyQztBQU81UixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsSUFDTixLQUFLO0FBQUEsTUFDSCxTQUFTO0FBQUEsSUFDWDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFlBQVk7QUFBQSxJQUNaLFFBQVE7QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFVBQVU7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUVOLGFBQWE7QUFBQSxRQUNiLFlBQVk7QUFBQSxRQUNaLGFBQWE7QUFBQSxRQUNiLGtCQUFrQjtBQUFBLFFBQ2xCLFNBQVM7QUFBQSxRQUNULFdBQVc7QUFBQSxRQUNYLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxVQUNU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
