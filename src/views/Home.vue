<template>
  <div class="flex-center wh-full">
    <a href="https://vitejs.dev" target="_blank">
      <img alt="Vite logo" class="logo h-40 p-6" src="/vite.svg" />
    </a>
    <a-button class="m-5" type="outline" @click="darkTheme">DarkTheme</a-button>
    <a-button class="m-5" type="outline" @click="lightTheme">LightTheme</a-button>
    <a href="https://vuejs.org/" target="_blank">
      <img alt="Vue logo" class="vue h-40 p-6" src="/vue.svg" />
    </a>
  </div>
</template>
<script lang="ts" setup>
const darkTheme = () => {
  document.body.setAttribute("arco-theme", "dark")
}
const lightTheme = () => {
  document.body.removeAttribute("arco-theme")
}
</script>
<style lang="scss" scoped>
.logo,
.vue {
  transition: filter 300ms;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
