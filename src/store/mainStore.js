import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', {
    state: () => ({
        usuarios: [],
    }),
    actions: {
        //Método que armazena os dados da busca na API para usuários
        getUsuarios(usuarios) {
            this.usuarios = usuarios
        },
    }
})
