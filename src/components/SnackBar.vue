<script setup>
	
	import { computed, watch } from 'vue'

	const model = defineModel()
	const timeout = 3000;

	watch(model.value, (val) => {

		if (val.visible) {
			setTimeout(() => {
				model.value.visible = false
			}, timeout)
		}

	})

</script>

<template>
	<!-- @ SnackBar -->
	<div :class="model.visible ? 'translate-y-0' : 'translate-y-30'" class="w-full h-12 flex items-center p-3 fixed bottom-0 left-0 right-0 transition duration-100 ease-in bg-mist-900 text-white">
		<p class="text-sm">PomboUI Snackbar 👋</p>
		<svg @click="() => { model.visible = false }" class="active:bg-black/25 ms-auto p-3 rounded-full" width="39" height="39" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
	</div>
	<!-- % SnackBar -->
</template>