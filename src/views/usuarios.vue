<template>
    <section class="card-main">
        <UserCard v-for="user in usuariosVisiveis" :key="user.id" :usuarios="user"></UserCard>
        <p v-if="!usuarios.length">
            <ErrorModal></ErrorModal>
        </p>
        <button class="vermais-button" v-if="!todosVisiveis" @click="verMais">Ver Mais</button>
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
}
</style>

<script>
import UserCard from "@/components/UserCard.vue";
import { useMainStore } from "@/store/mainStore"
import ErrorModal from "@/components/ErrorModal.vue";

export default {
    name: 'Usuários Page',
    data() {
        return {
            qntdVisivel: 3
        }
    },
    components: {
        UserCard,
        ErrorModal
    },
    computed: {
        usuarios() {
            return useMainStore().usuarios;
        },
        usuariosVisiveis() {
            return this.usuarios.slice(0, this.qntdVisivel)
        },
        todosVisiveis() {
            return this.usuariosVisiveis.length === this.usuarios.length
        }
    },
    methods: {
        verMais() {
            this.qntdVisivel += 3
        }
    }
}
</script>