<template>
    <li v-for="repos in repositorios">
        {{ repos.name }}
    </li>
</template>

<script>
import { useMainStore } from '@/store/mainStore';

export default {
    computed: {
        repositorios() {
            return useMainStore().repositorios
        }
    }
}
</script>