<script setup>

	import { ref } from 'vue'

	import AppBar from '@/components/AppBar.vue'
	import Card from '@/components/Card.vue'
	import Button from '@/components/Button.vue'
	import ButtonFloating from '@/components/ButtonFloating.vue'
	import Dialog from '@/components/Dialog.vue'
	import TextField from '@/components/TextField.vue'

	const dialogVisible = ref(false)

	const handleDialog = () => {
		dialogVisible.value = true
	}

</script>

<template>
 	<AppBar/>
 	<main class="mt-15 p-3">
 		<TextField class="mb-4"/>
 		<TextField class="mb-2"/>
 		<Dialog v-model="dialogVisible"/>
 		<Card class="mb-6"/>
 		<Button @click="handleDialog"/>
 		<ButtonFloating/>
 	</main>
</template>