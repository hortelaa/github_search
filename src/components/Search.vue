<template>
    <!--Opções de Busca-->
    <div class="application-buttons">
        <button class="button-primary" :class="{ 'button-active': !repositorioAtivo }" @click="repositorioAtivo = true">
            Repositório
        </button>
        <button class="button-primary" :class="{ 'button-active': repositorioAtivo }" @click="repositorioAtivo = false">
            Usuário
        </button>
    </div>

    <!--Input de Busca-->
    <div class="application-search">
        <input v-on:keyup.enter="buscar" v-model="query" placeholder="Buscar..." class="search-input" type="text">
        <button @click="buscar" class="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="search-icon">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.application-buttons {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (min-width:1024px) {
        flex-direction: row;
    }

    .button-primary {
        background-color: black;
        color: white;
        font-family: 'Inter', sans-serif;
        border-radius: 0.5rem;
        width: 20rem;
        padding: 0.7rem 2rem;
        font-size: 20px;
        cursor: pointer;
        font-weight: 700;

        @media screen and (min-width:1024px) {
            width: 12rem;
        }
    }


    .button-active {
        background-color: white;
        color: black;
    }
}

.application-search {
    width: 20rem;
    display: flex;
    position: relative;
    justify-content: center;

    @media screen and (min-width:1024px) {
        width: 50%;
    }

    .search-input {
        width: 100%;
        padding: 1rem;
        font-family: 'Inter', sans-serif;
        border-radius: 0.5rem;
        font-weight: 400;
        font-size: 20px;
    }

    .search-button {
        position: absolute;
        display: flex;
        background-color: transparent;
        align-items: center;
        top: 0px;
        bottom: 0px;
        right: 0px;
        border: none;
        cursor: pointer;
        padding-right: 0.5rem;

        .search-icon {
            width: 2rem;
            height: 2rem;
        }
    }
}
</style>

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
                //verifica se a variável repositorioAtivo é verdadeira ou falsa e  altera o parametro da busca de acordo
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