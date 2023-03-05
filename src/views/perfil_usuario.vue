<template>
    <section class="profile-main">
        <div class="user-section">
            <img :src="usuario_data.avatar_url">
            <div class="user-details">
                <h2 class="user-title">{{ usuario_data.name }}</h2>
                <h4 class="user-subtitle">{{ usuario_data.login }}</h4>
            </div>
            <ul class="user-icons">
                <li v-if="usuario_data.company">
                    <figure>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M10 3H14C15.1046 3 16 3.89543 16 5V6H20C21.1046 6 22 6.89543 22 8V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V8C2 6.89543 2.89543 6 4 6H8V5C8 3.89543 8.89543 3 10 3ZM4 8H8H16H20V13H13H11H4V8ZM4 19V15H11V16H13V15H20V19H4ZM14 5V6H10V5H14Z"
                                fill="black" />
                        </svg>
                    </figure>
                    <h2>{{ usuario_data.company }}</h2>
                </li>
                <li v-if="usuario_data.location">
                    <figure>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M13 11.9V19H11V11.9C8.71776 11.4367 7 9.41896 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.41896 15.2822 11.4367 13 11.9ZM9 14.1573V16.1844C6.06718 16.5505 4 17.3867 4 18C4 18.807 7.57914 20 12 20C16.4209 20 20 18.807 20 18C20 17.3867 17.9328 16.5505 15 16.1844V14.1573C19.0559 14.6017 22 15.9678 22 18C22 20.5068 17.5203 22 12 22C6.47973 22 2 20.5068 2 18C2 15.9678 4.94412 14.6017 9 14.1573ZM15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7Z"
                                fill="black" />
                        </svg>
                    </figure>
                    <h2>{{ usuario_data.location }}</h2>
                </li>
                <li v-if="usuario_data.public_repos">
                    <figure>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M20 19V9C21.1046 9 22 8.10457 22 7V5C22 3.89543 21.1046 3 20 3H4C2.89543 3 2 3.89543 2 5V7C2 8.10457 2.89543 9 4 9V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19ZM6 19V9H18V19H6ZM9 12V10H15V12H9ZM4 7V5H20V7H4Z"
                                fill="black" />
                        </svg>

                    </figure>
                    <h2>{{ usuario_data.public_repos }}</h2>
                </li>
                <li v-if="usuario_data.followers">
                    <figure>
                        <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M5.92262 10.4286C5.92262 8.50494 7.40504 7 9.67773 7C11.9441 7 13.4328 8.64707 13.4328 10.6C13.4328 13.4111 11.76 14.7143 9.67773 14.7143C7.57568 14.7143 5.92262 13.3663 5.92262 10.4286ZM7.80018 10.4286C7.80018 12.3736 8.56829 13 9.67773 13C10.7833 13 11.5553 12.3986 11.5553 10.6C11.5553 9.52893 10.819 8.71429 9.67773 8.71429C8.48899 8.71429 7.80018 9.41356 7.80018 10.4286ZM2.19043 17.7791C2.66059 18.2309 3.17928 18.6402 3.73888 19H4.04507V18.1429C4.04507 17.1161 6.05799 16.4286 9.67772 16.4286C13.2975 16.4286 15.3104 17.1161 15.3104 18.1429V19H15.6166C16.1762 18.6402 16.6949 18.2309 17.165 17.7791C16.8841 15.6099 14.0378 14.7143 9.67772 14.7143C5.31763 14.7143 2.47139 15.6099 2.19043 17.7791Z"
                                fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M13.616 7.42857C13.616 5.50494 15.0984 4 17.3711 4C19.6375 4 21.1262 5.64707 21.1262 7.6C21.1262 10.4111 19.4534 11.7143 17.3711 11.7143C15.269 11.7143 13.616 10.3663 13.616 7.42857ZM15.4935 7.42857C15.4935 9.37365 16.2617 10 17.3711 10C18.4767 10 19.2486 9.39862 19.2486 7.6C19.2486 6.52893 18.5123 5.71429 17.3711 5.71429C16.1824 5.71429 15.4935 6.41356 15.4935 7.42857ZM9.88379 14.7791C10.3539 15.2309 10.8726 15.6402 11.4322 16H11.7384V15.1429C11.7384 14.1161 13.7513 13.4286 17.3711 13.4286C20.9908 13.4286 23.0037 14.1161 23.0037 15.1429V16H23.3099C23.8695 15.6402 24.3882 15.2309 24.8584 14.7791C24.5774 12.6099 21.7312 11.7143 17.3711 11.7143C13.011 11.7143 10.1648 12.6099 9.88379 14.7791Z"
                                fill="black" />
                        </svg>

                    </figure>
                    <h2>{{ usuario_data.followers }}</h2>
                </li>
            </ul>
        </div>
        <div class="repository-section">
            <RepoCard v-for="repos in reposVisiveis" :repositorios_data="repos"></RepoCard>
            <button class="vermais-button fix-button" v-if="reposVisiveis.length < repositorio_data.length"
                @click="mostrarMais">Mostrar
                Mais</button>
        </div>

    </section>
</template>

<style lang="scss" scoped>
.profile-main {
    display: flex;
    gap: 3rem;
    width: 100%;
    font-family: 'Rubik', sans-serif;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;

    .user-section {
        display: flex;
        width: auto;
        background-color: #D9D9D9;
        flex-direction: column;
        border-radius: 5px;
        filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
        padding: 1rem;

        img {
            width: 300px;
            height: 300px;
            border-radius: 5px;
            filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
        }

        .user-details {
            display: flex;
            gap: 1rem;
            flex-direction: column;
            padding-top: 1rem;

            .user-title {
                font-size: 40px;
                font-weight: 300;
            }

            .user-subtitle {
                font-size: 32px;
                color: #757575;
                font-weight: 300;
            }
        }

        .user-icons {
            display: flex;
            margin-top: 5rem;
            gap: 1rem;
            flex-direction: column;

            li {
                display: flex;
                align-items: center;

                h2 {
                    color: #757575;
                    padding-left: 0.5rem;
                    font-weight: 300;
                    font-size: 20px;
                }
            }
        }
    }

    .repository-section {
        text-align: center;
        width: 100%;
        flex: 1;
    }
}
</style>

<script>
import RepoCard from '@/components/RepoCard.vue'

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
    components: {
        RepoCard
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
