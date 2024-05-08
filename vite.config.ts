import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    // 默认支持扩展名 ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
    // .vue 不生效，官方说会影响类型解析，不建议添加
    // https://vitejs.dev/config/shared-options.html#resolve-extensions
    // extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
})
