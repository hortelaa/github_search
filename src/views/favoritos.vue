<template>
    <RepoCard v-for="favs in favoritos" :key="favs.id" :repositorios_data="favs"></RepoCard>
    <p v-if="!favoritos.length">Nenhum favorito encontrado.</p>
</template>


<script>
import RepoCard from '@/components/RepoCard.vue'
import { useMainStore } from '@/store/mainStore';

export default {
    name: 'Favoritos Page',
    components: {
        RepoCard
    },
    computed: {
        favoritos() {
            return useMainStore().favoritos;
        }
    }
}
</script>

