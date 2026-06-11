<script setup>

	import { ref } from 'vue'

	import AppBar from '@/components/AppBar.vue'
	import Card from '@/components/Card.vue'
	import Button from '@/components/Button.vue'
	import ButtonFloating from '@/components/ButtonFloating.vue'
	import Dialog from '@/components/Dialog.vue'
	import TextField from '@/components/TextField.vue'
	import SnackBar from '@/components/SnackBar.vue'

	const dialog = ref({
		visible: false
	})

	const snackbar = ref({
		visible: false
	})

	const handleDialog = () => {
		dialog.value.visible = true
	}

	const handleSave = () => {
		snackbar.value.visible = true
	}

</script>

<template>
 	<AppBar/>
 	<main class="mt-15 p-3">
 		<TextField class="mb-4"/>
 		<TextField class="mb-2"/>
 		<Dialog v-model="dialog"/>
 		<Card class="mb-6"/>
 		<Button @click="handleDialog" text="Show Dialog" class="me-3"/>
 		<Button @click="handleSave" text="Save" class="mb-100"/>
 		<ButtonFloating/>
 		<SnackBar v-model="snackbar"/>
 	</main>
</template>