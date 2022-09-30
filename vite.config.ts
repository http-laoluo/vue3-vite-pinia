import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
const { resolve } = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    vueJsx(),
    createStyleImportPlugin({
      resolves: [{
          libraryName: '@nutui/nutui',
          libraryNameChangeCase: 'pascalCase',
          resolveStyle: (name) => {
            return `@nutui/nutui/dist/packages/${name.toLowerCase()}/index.scss`
          },
      }]
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 配置 nutui 全局 scss 变量
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`
      }
    }
  },
  base: './', // 公共基础路径
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'src':resolve(__dirname, './src')
    }
  },
  server: {
    host:'0.0.0.0',
    https:false,
    port:8989,
    open:true,
    proxy: {
      '/api': {
        target: 'http://192.168.50:3333',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
 },
 build: {
    terserOptions: {
      compress: {
        drop_console: true, // 正式环境过滤console.log()
        drop_debugger: true // 正式环境过滤debugger
      }
    }
  }
})
