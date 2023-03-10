import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

//Router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'index', component: index },
        { path: '/usuarios', name: 'usuarios', component: usuarios },
        { path: '/usuarios/:name', name: 'perfil_usuario', component: perfil_usuario },
        { path: '/repositorios', name: 'repositorios', component: repositorios },
        { path: '/favoritos', name: 'favoritos', component: favoritos },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    ],
})


//Views
import index from '@/views/index.vue';
import usuarios from '@/views/usuarios.vue';
import perfil_usuario from '@/views/perfil_usuario.vue';
import repositorios from '@/views/repositorios.vue';
import favoritos from '@/views/favoritos.vue';
import NotFound from '@/views/NotFound.vue';

//Arquivos SCSS
import '@/assets/styles/main.scss'
import '@/assets/styles/reset.scss'

import App from './App.vue'


createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
