import { createApp } from "vue"
import App from "./App.vue"
// 自定义样式文件
import "@/assets/style/main.scss"
// unocss
import "@unocss/reset/tailwind.css"

import "virtual:uno.css"

// Pinia
import { createPinia } from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

const app = createApp(App)

app.config.warnHandler = () => null

app.use(createPinia().use(piniaPluginPersistedstate))
app.mount("#app")
