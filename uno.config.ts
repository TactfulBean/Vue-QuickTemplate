import { defineConfig, presetAttributify, presetIcons, presetWind3 } from "unocss"

export default defineConfig({
  presets: [presetWind3(), presetAttributify(), presetIcons()],
  shortcuts: [
    ["wh-full", "w-full h-full"],
    ["flex-col", "flex flex-col"],
    ["flex-center", "flex justify-center items-center"]
  ],
  rules: [
    [/^hc-(\d+)$/, ([, d]) => ({ height: `calc(100% - ${Number(d) / 4}rem)` })],
    [/^wc-(\d+)$/, ([, d]) => ({ width: `calc(100% - ${Number(d) / 4}rem)` })],
    [/^wh-(\d+)$/, ([, d]) => ({ width: `${Number(d) / 4}rem`, height: `${Number(d) / 4}rem` })]
  ]
})
