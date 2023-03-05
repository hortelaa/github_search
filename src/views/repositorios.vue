<template>
    <section class="card-main">
        <RepoCard v-for="repos in reposVisiveis" :repositorios_data="repos"></RepoCard>
        <p v-if="!repositorios.length">
            <ErrorModal></ErrorModal>
        </p>
        <button class="vermais-button" v-if="reposVisiveis.length < repositorios.length" @click="mostrarMais">Ver Mais
        </button>
    </section>
</template>

<style lang="scss" scoped>
.card-main {
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    margin-top: 3rem;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 3rem;

    .vermais-button {
        margin-left: auto;
        margin-right: auto;
        margin-top: 2rem;
        background-color: white;
        color: black;
        cursor: pointer;
        width: 10rem;
        font-family: 'Inter', sans-serif;
        padding: 0.4rem 1rem;
        border-radius: 0.5rem;
        font-size: 16px;
        font-weight: 700;
    }
}
</style>
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