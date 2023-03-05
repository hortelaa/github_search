import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

//Router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'index', component: index },
        { path: '/usuarios', name: 'usuarios', component: usuarios },
        { path: '/repositorios', name: 'repositorios', component: repositorios },
    ],
})

//Views
import index from '@/views/index.vue';
import usuarios from '@/views/usuarios.vue';
import repositorios from '@/views/repositorios.vue';

//Arquivos SCSS
import '@/assets/styles/main.scss'
import '@/assets/styles/reset.scss'

import App from './App.vue'


createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
