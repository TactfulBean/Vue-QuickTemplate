import { vitePluginForArco } from "@arco-plugins/vite-vue"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import UnoCSS from "unocss/vite"
import { defineConfig } from "vite"
import viteCompression from "vite-plugin-compression"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve("./src")
    },
    extensions: [".js", ".json", ".ts"]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/style/global.scss";'
      }
    }
  },
  plugins: [
    vue(),
    UnoCSS(),
    vitePluginForArco({
      style: "css"
    }),
    viteCompression({
      threshold: 10240
    })
  ],
  server: {
    open: false,
    host: "0.0.0.0",
    port: 5143,
    proxy: {}
  }
})
