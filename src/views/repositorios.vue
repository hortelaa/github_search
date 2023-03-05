<template>
    <RepoCard v-for="repos in reposVisiveis" :repositorios_data="repos"></RepoCard>
    <p v-if="!repositorios.length">
        <ErrorModal></ErrorModal>
    </p>
    <button v-if="reposVisiveis.length < repositorios.length" @click="mostrarMais">mostrar mais</button>
</template>

<script>
import ErrorModal from '@/components/ErrorModal.vue';
import RepoCard from '@/components/RepoCard.vue';
import { useMainStore } from '@/store/mainStore';

export default {
    name: 'Repositórios Page',
    data() {
        return {
            qntdVisivel: 4
        }
    },
    components: {
        RepoCard,
        ErrorModal
    },
    computed: {
        repositorios() {
            return useMainStore().repositorios
        },
        reposVisiveis() {
            return this.repositorios.slice(0, this.qntdVisivel)
        },
    },
    methods: {
        mostrarMais() {
            this.qntdVisivel += 4
        }
    }
}
</script>