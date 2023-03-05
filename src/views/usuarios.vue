<template>
    <UserCard v-for="user in usuarios" :key="user.id" :usuarios="user"></UserCard>
    <p v-if="!usuarios.length">Nenhum repositório encontrado.</p>
</template>


<script>
import UserCard from "@/components/UserCard.vue";
import { useMainStore } from "@/store/mainStore"

export default {
    components: {
        UserCard
    },
    computed: {
        usuarios() {
            return useMainStore().usuarios;
        }
    }
}
</script>