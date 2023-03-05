import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', {
    state: () => ({
        usuarios: [],
        repositorios: [],
    }),
    actions: {
        //Método que armazena os dados da busca na API para usuários
        getUsuarios(usuarios) {
            this.usuarios = usuarios
        },
        //Método que armazena os dados da busca na API para repositórios
        getRepositorios(repositorios) {
            this.repositorios = repositorios
        },
    }
})
