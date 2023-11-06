import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import { presetAttributify, presetIcons, presetUno } from "unocss"
import UnoCSS from "unocss/vite"
import { ArcoResolver } from "unplugin-vue-components/resolvers"
import Components from "unplugin-vue-components/vite"
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
				additionalData: '@import "@/assets/style/global.scss";'
			}
		}
	},
	plugins: [
		vue(),
		UnoCSS({
			presets: [presetUno(), presetAttributify(), presetIcons()]
		}),
		Components({
			resolvers: [ArcoResolver()]
		}),
		viteCompression({
			threshold: 0
		})
	]
})
