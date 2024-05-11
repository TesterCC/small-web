import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import eslint from "vite-plugin-eslint"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // eslint({ lintOnStart: true, cache: false }), // 项目运行时进行eslint检查，初学者可以先禁用，以防因为限制严格，检查不通过导致启动报错。
  ],
})
