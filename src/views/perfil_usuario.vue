<template>
    <div>
        <h1>{{ usuario_data.login }}</h1>
        <li v-for="repos in reposVisiveis">
            {{ repos.name }}
        </li>
        <button v-if="reposVisiveis.length < repositorio_data.length" @click="mostrarMais">Mostrar Mais</button>
    </div>
</template>


<script>
export default {
    name: 'Perfil Usuário Page',
    data() {
        return {
            usuario_data: [],
            repositorio_data: [],
            qntdVisivel: 4,
            reposVisiveis: [],
        }
    },
    created() {
        const name = this.$route.params.name
        fetch(`https://api.github.com/users/${name}`)
            .then(response => response.json())
            .then(data => this.usuario_data = data)
            .catch(error => console.log(error))

        fetch(`https://api.github.com/users/${name}/repos?direction=desc`)
            .then(response => response.json())
            .then((data) => {
                this.repositorio_data = data;
                this.reposVisiveis = this.repositorio_data.slice(0, this.qntdVisivel);
            })
            .catch(error => console.log(error))
    },
    methods: {
        mostrarMais() {
            this.qntdVisivel += 4
            this.reposVisiveis = this.repositorio_data.slice(0, this.qntdVisivel);
        }
    }
}
</script>
