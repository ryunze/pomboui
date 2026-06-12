<script setup>
	import AppBar from './components/AppBar.vue'
</script>

<template>
	<main>
		<AppBar/>
		<div class="mt-25 px-6 bg-white">
			<RouterView/>
		</div>
	</main>
</template>