<template>
    <RepoCard v-for="favs in favoritos" :key="favs.id" :repositorios_data="favs"></RepoCard>
</template>


<script>
import RepoCard from '@/components/RepoCard.vue'
import { useMainStore } from '@/store/mainStore';

export default {
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

