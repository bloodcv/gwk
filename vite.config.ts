import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({importStyle:"sass"})],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@com': fileURLToPath(new URL('./src/components', import.meta.url))
    },
    extensions: ['.js', '.json', '.ts', '.vue'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  //新增三: 使用 scss.additionalData 来编译应用 scss 变量的组件
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/base.scss" as *;`,
        // api: 'modern' // or "modern"
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://39.106.229.200/console/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    },
  },
})
