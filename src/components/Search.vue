<template>
    <input v-model="query" type="text">
    <button @click="buscar">Buscar</button>
</template>

<script>
import { useMainStore } from '@/store/mainStore'
export default {
    data() {
        return {
            query: '',
        }
    },
    methods: {
        async buscar() {
            try {
                const response = await fetch(`https://api.github.com/search/users?q=${this.query}`)
                const data = await response.json()
                useMainStore().getUsuarios(data.items)
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>