<script setup>

	import { ref } from 'vue'

	const dialog = ref({
		visible: false
	})

	const snackbar = ref({
		visible: false
	})

	function handleSnackbar() {
		snackbar.value.visible = true
		setTimeout(() => {
			snackbar.value.visible = false
		}, 3000)
	}


</script>

<template>

	<!-- # Dialog -->
	<div :class="dialog.visible ? 'fixed' : 'hidden'" class="top-0 bottom-0 left-0 right-0 bg-black/25 flex z-15">
		<div class="w-[84%] p-6 m-auto bg-white shadow-xl/36">
			<!-- @ Dialog/Title -->
			<section class="mb-3">
				<p class="font-bold mb-3">PomboUI: Dialog</p>
				<p class="font-xs">Komponen masih dalam pengembangan 👋</p>
			</section>
			<!-- % Dialog/Title -->
			<!-- @ Dialog/Button -->
			<section class="flex">
				<button @click="() => { dialog.visible = false }" class="text-blue-700 ms-auto">Close</button>
			</section>
			<!-- % Dialog/Button -->
		</div>
	</div>

	<!-- # Snackbar -->
	<div :class="snackbar.visible ? 'translate-y-0' : 'translate-y-30'" class="w-full h-12 flex items-center p-3 fixed bottom-0 left-0 right-0 transition duration-100 ease-in bg-mist-900 text-white">
		<p class="text-sm">PomboUI: Snackbar 👋</p>
		<svg @click="() => { snackbar.visible = false }" class="active:bg-black/25 ms-auto p-3 rounded-full" width="39" height="39" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
	</div>

	<!-- # Content -->
	<section class="flex flex-col">
		<button @click="() => { dialog.visible = true }" class="active:bg-blue-900 bg-blue-700 text-white px-3 py-2 text-sm shadow-md rounded mb-3">Dialog</button>
		<button @click="handleSnackbar" class="active:bg-teal-900 bg-teal-700 text-white px-3 py-2 text-sm shadow-md rounded">SnackBar</button>
	</section>

</template>