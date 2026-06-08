<template>

<!-- @ Appbar -->
<div class="w-full h-15 flex items-center p-3 bg-slate-900 text-white select-none">

	<!-- @ Sidebar -->
	<div id="appbar-sidenav">
		
		<!-- Sidebar/Button -->
		<svg @click="handleSidebar" class="active:bg-black/25 p-2 rounded-full" width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4 6H20M4 12H20M4 18H20" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		<!-- % Sidebar/Button -->

		<!-- @ Sidebar/ListOverlay -->
		<div @click="handleSidebar" :class="sidebarIsActive ? '' : 'hidden'" class="fixed left-0 top-0 bottom-0 right-0 z-1 bg-black/25"></div>
		<!-- % Sidebar/ListOverlay -->

		<!-- @ Sidebar/List -->
		<div :class="sidebarIsActive ? 'fixed' : 'hidden'" class="w-90 left-0 top-0 bottom-0 z-15 bg-white text-black">
			<ul class="p-3 flex flex-col">
				<li class="active:bg-gray-100 p-3 flex items-center gap-3">
					<svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#000000"/>
					</svg>
					<span>Dashboard</span>
				</li>

				<li class="active:bg-gray-100 p-3 flex items-center gap-3">
					<svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M16 2H0V14H16V2ZM5 10.5C6.38071 10.5 7.5 9.38071 7.5 8C7.5 6.61929 6.38071 5.5 5 5.5C3.61929 5.5 2.5 6.61929 2.5 8C2.5 9.38071 3.61929 10.5 5 10.5ZM10 5H14V7H10V5ZM14 9H10V11H14V9Z" fill="#000000"/>
					<span>Contacts</span>
					</svg>
				</li>
			</ul>
		</div>
		<!-- % Sidebar/List -->

	</div>
	<!-- % Sidebar -->
	
	<!-- @ Title -->
	<h1 class="font-bold text-xl ms-6">PomboUI</h1>
	<!-- % Title -->

	<!-- @ Menu -->
	<div id="appbar-menu" class="flex items-center ms-auto relative">

		<!-- @ Menu/Button -->
		<svg @click="handleMenu" class="active:bg-black/25 p-2 rounded-full" width="39" height="39" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		<!-- % Menu/Button -->

		<!-- @ Menu/ListOverlay -->
		<div @click="handleMenu" id="appbar-menu-overlay" :class="menuIsActive ? 'fixed' : ''" class="left-0 top-0 bottom-0 right-0"></div>
		<!-- % Menu/ListOverlay -->

		<!-- @ Menu/List -->
		<div  id="appbar-menu-list" :class="menuIsActive ? '' : 'hidden'" class="min-w-3 min-h-3 bg-white shadow absolute top-15 right-3 text-black z-9">
			<ul class="flex flex-col gap-2">
				<li class="active:bg-black/25 p-3 cursor-pointer hover:bg-gray-100">Profile</li>
				<li class="active:bg-black/25 p-3 cursor-pointer hover:bg-gray-100">Logout</li>
			</ul>
		</div>
		<!-- % Menu/List -->

	</div>
	<!-- % Menu -->

</div>
<!-- % AppBar -->

</template>


<script setup>

	import { ref } from 'vue'

	/* Menu */
	const menuIsActive = ref(false)
	const handleMenu = () => {
		menuIsActive.value = !menuIsActive.value
	}

	/* Sidebar */
	const sidebarIsActive = ref(true)
	const handleSidebar = () => {
		sidebarIsActive.value = !sidebarIsActive.value
	}

</script>