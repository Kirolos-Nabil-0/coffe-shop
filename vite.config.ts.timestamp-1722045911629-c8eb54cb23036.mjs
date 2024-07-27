// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { VitePWA } from "file:///C:/Users/user/Desktop/Desktop/programming/coffe/coffe-shop/node_modules/.pnpm/vite-plugin-pwa@0.20.1_vite@5.3.5_@types+node@20.14.12_terser@5.31.3__workbox-build@7.1.1_workbox-window@7.1.0/node_modules/vite-plugin-pwa/dist/index.js";
import { defineConfig } from "file:///C:/Users/user/Desktop/Desktop/programming/coffe/coffe-shop/node_modules/.pnpm/vite@5.3.5_@types+node@20.14.12_terser@5.31.3/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/user/Desktop/Desktop/programming/coffe/coffe-shop/node_modules/.pnpm/@vitejs+plugin-vue@5.1.0_vite@5.3.5_@types+node@20.14.12_terser@5.31.3__vue@3.4.34_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///C:/Users/user/Desktop/Desktop/programming/coffe/coffe-shop/node_modules/.pnpm/vite-plugin-vue-devtools@7.3.7_rollup@2.79.1_vite@5.3.5_@types+node@20.14.12_terser@5.31.3__vue@3.4.34_typescript@5.4.5_/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
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
        name: "Wave caffe",
        short_name: "Wave caffe",
        theme_color: "#1e5050",
        background_color: "#1e5050",
        display: "standalone",
        start_url: "/"
      },
      workbox: {
        //cache all the assets
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
          //css js png
          {
            urlPattern: new RegExp(".(?:css|js|png|.mp4|webm)"),
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
          // cache the index.html
          {
            urlPattern: new RegExp("/"),
            handler: "NetworkFirst",
            options: {
              cacheName: "start-url",
              expiration: {
                maxEntries: 1,
                maxAgeSeconds: 60 * 60 * 24 * 365
                // 1 year
              }
            }
          },
          //cache video files
          {
            urlPattern: new RegExp(".*/video/.*.mp4"),
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERlc2t0b3BcXFxcRGVza3RvcFxcXFxwcm9ncmFtbWluZ1xcXFxjb2ZmZVxcXFxjb2ZmZS1zaG9wXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERlc2t0b3BcXFxcRGVza3RvcFxcXFxwcm9ncmFtbWluZ1xcXFxjb2ZmZVxcXFxjb2ZmZS1zaG9wXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy91c2VyL0Rlc2t0b3AvRGVza3RvcC9wcm9ncmFtbWluZy9jb2ZmZS9jb2ZmZS1zaG9wL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2VydmVyOiB7XG4gICAgaG1yOiB7XG4gICAgICBvdmVybGF5OiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHZ1ZURldlRvb2xzKCksXG4gICAgVml0ZVBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6ICdXYXZlIGNhZmZlJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ1dhdmUgY2FmZmUnLFxuICAgICAgICB0aGVtZV9jb2xvcjogJyMxZTUwNTAnLFxuICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiAnIzFlNTA1MCcsXG4gICAgICAgIGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcbiAgICAgICAgc3RhcnRfdXJsOiAnLydcbiAgICAgIH0sXG4gICAgICB3b3JrYm94OiB7XG4gICAgICAgIC8vY2FjaGUgYWxsIHRoZSBhc3NldHNcbiAgICAgICAgcnVudGltZUNhY2hpbmc6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiBuZXcgUmVnRXhwKCdodHRwczovL2ZvbnRzLig/Omdvb2dsZWFwaXN8Z3N0YXRpYykuY29tLyguKiknKSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdTdGFsZVdoaWxlUmV2YWxpZGF0ZScsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIGNhY2hlTmFtZTogJ2dvb2dsZS1mb250cycsXG4gICAgICAgICAgICAgIGV4cGlyYXRpb246IHtcbiAgICAgICAgICAgICAgICBtYXhFbnRyaWVzOiAyMCxcbiAgICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgKiAzNjUgLy8gMSB5ZWFyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybFBhdHRlcm46IG5ldyBSZWdFeHAoJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC8oLiopJyksXG4gICAgICAgICAgICBoYW5kbGVyOiAnU3RhbGVXaGlsZVJldmFsaWRhdGUnLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBjYWNoZU5hbWU6ICdjZG4tanNkZWxpdnInLFxuICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogMzAsXG4gICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0ICogMzY1IC8vIDEgeWVhclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiBuZXcgUmVnRXhwKCdodHRwczovL3VucGtnLmNvbS8oLiopJyksXG4gICAgICAgICAgICBoYW5kbGVyOiAnU3RhbGVXaGlsZVJldmFsaWRhdGUnLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBjYWNoZU5hbWU6ICd1bnBrZycsXG4gICAgICAgICAgICAgIGV4cGlyYXRpb246IHtcbiAgICAgICAgICAgICAgICBtYXhFbnRyaWVzOiAzMCxcbiAgICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgKiAzNjUgLy8gMSB5ZWFyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vY3NzIGpzIHBuZ1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybFBhdHRlcm46IG5ldyBSZWdFeHAoJy4oPzpjc3N8anN8cG5nfC5tcDR8d2VibSknKSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdTdGFsZVdoaWxlUmV2YWxpZGF0ZScsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIGNhY2hlTmFtZTogJ3N0YXRpYy1yZXNvdXJjZXMnLFxuICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogNjAsXG4gICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0ICogMzY1IC8vIDEgeWVhclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyBjYWNoZSB0aGUgaW5kZXguaHRtbFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybFBhdHRlcm46IG5ldyBSZWdFeHAoJy8nKSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdOZXR3b3JrRmlyc3QnLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBjYWNoZU5hbWU6ICdzdGFydC11cmwnLFxuICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogMSxcbiAgICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgKiAzNjUgLy8gMSB5ZWFyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vY2FjaGUgdmlkZW8gZmlsZXNcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiBuZXcgUmVnRXhwKCcuKi92aWRlby8uKi5tcDQnKSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdDYWNoZUZpcnN0JyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiAndmlkZW8tY2FjaGUnLFxuICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogMTAsXG4gICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0ICogMzY1IC8vIDEgeWVhclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgZGV2T3B0aW9uczoge1xuICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxu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
