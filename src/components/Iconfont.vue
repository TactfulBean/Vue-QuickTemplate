<template>
	<n-icon>
		<svg aria-hidden="true">
			<use :xlink:href="`#${iconName}`"></use>
		</svg>
	</n-icon>
</template>

<script lang="ts" setup>
import { computed } from "vue"

const props = withDefaults(
	defineProps<{
		name: string
		prefix: string
	}>(),
	{
		prefix: "icon"
	}
)
const iconName = computed(() => {
	return props.name.indexOf(`${props.prefix}-`) > -1 ? props.name : `${props.prefix}-${props.name}`
})
</script>
<style scoped></style>
