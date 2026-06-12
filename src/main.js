import { createApp } from 'vue'
import App from './App.vue'
import './main.css'

import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './pages/HomeView.vue'
import ButtonView from './pages/ButtonView.vue'
import NotifsView from './pages/NotifsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/button', component: ButtonView },
  { path: '/notifs', component: NotifsView }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')