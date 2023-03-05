<template>
    <button @click="repositorioAtivo = true">repositorio</button>
    <button @click="repositorioAtivo = false">user</button>
    <input v-model="query" type="text">
    <button @click="buscar">Buscar</button>
</template>

<script>
import { useMainStore } from '@/store/mainStore'
export default {
    data() {
        return {
            query: '',
            repositorioAtivo: true,
        }
    },
    methods: {
        async buscar() {
            try {
                //verifica se a variável repositorioAtivo é verdadeira ou falsa
                const endpoint = this.repositorioAtivo ? 'repositories' : 'users'
                const response = await fetch(`https://api.github.com/search/${endpoint}?q=${this.query}`)
                const data = await response.json()

                if (this.repositorioAtivo) {
                    useMainStore().getRepositorios(data.items)
                    this.$router.push('/repositorios')
                }
                else {
                    useMainStore().getUsuarios(data.items)
                    this.$router.push('/usuarios')
                }

            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>