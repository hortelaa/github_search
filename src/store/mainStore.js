import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', {
    state: () => ({
        usuarios: [],
        repositorios: [],
        favoritos: [],
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
        //Método que armazena os repositórios marcados como favoritos
        adicionarFavorito(repositorios_data) {
            this.favoritos.push(repositorios_data);
            console.log(this.favoritos)
        },
        //Método que remove os repositórios marcados como favoritos baseado no ID
        removerFavorito(repoId) {
            this.favoritos = this.favoritos.filter((repositorios_data) => repositorios_data.id !== repoId);
        },
    }
})
