<template>
	<div class="flex-center wh-full">
		<a href="https://vitejs.dev" target="_blank">
			<img alt="Vite logo" class="logo h-40 p-6" src="/vite.svg" />
		</a>
		<a-button type="primary">Arco.Design</a-button>
		<a href="https://vuejs.org/" target="_blank">
			<img alt="Vue logo" class="vue h-40 p-6" src="/vue.svg" />
		</a>
	</div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.logo {
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
