<script setup>
	
	import { ref } from 'vue'

	const visible = defineModel()

</script>

<template>
	<!-- @ Dialog -->
	<div :class="visible ? 'fixed' : 'hidden'" class="top-0 bottom-0 left-0 right-0 bg-black/25 flex z-15">
		<div class="w-[84%] p-6 m-auto bg-white shadow-xl/36">
			<!-- @ Dialog/Title -->
			<section class="mb-3">
				<p class="font-bold mb-3">PomboUI</p>
				<p class="font-xs">Komponen masih dalam pengembangan 👋</p>
			</section>
			<!-- % Dialog/Title -->
			<!-- @ Dialog/Button -->
			<section class="flex">
				<button @click="() => { visible = false }" class="text-blue-700 ms-auto">Close</button>
			</section>
			<!-- % Dialog/Button -->
		</div>
	</div>
	<!-- % Dialog -->
</template>