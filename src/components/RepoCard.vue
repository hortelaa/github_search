<template>
    <li>
        {{ repositorios_data.name }}
    </li>
    <li>
        {{ repositorios_data.description }}
    </li>
    <li>
        {{ repositorios_data.stargazers_count }}
    </li>
    <button @click="adicionarFavorito">{{ checarFavorito ? "Remover dos favoritos" : "Adicionar aos favoritos" }}</button>
</template>


<script>
import { useMainStore } from '@/store/mainStore'

export default {
    props: {
        repositorios_data: {
            type: Object,
            required: true,
        }
    },
    computed: {
        checarFavorito() {
            const mainStore = useMainStore();
            return mainStore.favoritos.some((r) => r.id === this.repositorios_data.id);
        }
    },
    methods: {
        adicionarFavorito() {
            const mainStore = useMainStore();
            if (this.checarFavorito) {
                mainStore.removerFavorito(this.repositorios_data.id);
            } else {
                mainStore.adicionarFavorito(this.repositorios_data);
            }
        }
    },
}
</script>