import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

//Router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'index', component: index },
    ],
})

//Views
import index from './views/index.vue';

//Arquivos SCSS
import '@/assets/styles/main.scss'
import '@/assets/styles/reset.scss'

import App from './App.vue'


createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
