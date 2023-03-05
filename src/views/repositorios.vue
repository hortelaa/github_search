<template>
    <RepoCard v-for="repos in reposVisiveis" :repositorios_data="repos"></RepoCard>
    <p v-if="!repositorios.length">Nenhum repositório encontrado.</p>
    <button v-if="!todosVisiveis" @click="mostrarMais">mostrar mais</button>
</template>

<script>
import RepoCard from '@/components/RepoCard.vue';
import { useMainStore } from '@/store/mainStore';

export default {
    data() {
        return {
            qntdVisivel: 4
        }
    },
    components: {
        RepoCard
    },
    computed: {
        repositorios() {
            return useMainStore().repositorios
        },
        reposVisiveis() {
            return this.repositorios.slice(0, this.qntdVisivel)
        },
        todosVisiveis() {
            return this.reposVisiveis.length === this.repositorios.length
        },
    },
    methods: {
        mostrarMais() {
            this.qntdVisivel += 4
        }
    }
}
</script>