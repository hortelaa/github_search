<template>
    <section class="card-main">
        <div class="card-title">
            <figure><svg width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M25 0.405762C11.1942 0.405762 0 11.4273 0 25.0088C0 35.8804 7.16518 45.0918 17.0982 48.3479C17.2375 48.3769 17.3797 48.3913 17.5223 48.3907C18.4487 48.3907 18.8058 47.7374 18.8058 47.1697C18.8058 46.5806 18.7835 45.0382 18.7723 42.9817C17.9454 43.1678 17.0994 43.2648 16.25 43.2709C11.4397 43.2709 10.346 39.6828 10.346 39.6828C9.20759 36.8444 7.56696 36.0839 7.56696 36.0839C5.39063 34.6165 7.5558 34.5736 7.72321 34.5736H7.73438C10.2455 34.7879 11.5625 37.1228 11.5625 37.1228C12.8125 39.2222 14.4866 39.8113 15.9821 39.8113C16.971 39.7923 17.9446 39.5733 18.8393 39.1686C19.0625 37.5834 19.7098 36.5016 20.4241 35.8804C14.8772 35.2591 9.04018 33.1491 9.04018 23.7235C9.04018 21.035 10.0112 18.8393 11.6071 17.1255C11.3504 16.5043 10.4911 13.9979 11.8527 10.6133C12.0353 10.5713 12.223 10.5533 12.4107 10.5597C13.3147 10.5597 15.3571 10.8918 18.7277 13.1411C22.8231 12.0414 27.1545 12.0414 31.25 13.1411C34.6205 10.8918 36.6629 10.5597 37.567 10.5597C37.7546 10.5533 37.9424 10.5713 38.125 10.6133C39.4866 13.9979 38.6272 16.5043 38.3705 17.1255C39.9665 18.85 40.9375 21.0457 40.9375 23.7235C40.9375 33.1705 35.0893 35.2484 29.5201 35.859C30.4129 36.6194 31.2165 38.119 31.2165 40.4111C31.2165 43.6994 31.183 46.3557 31.183 47.159C31.183 47.7374 31.529 48.3907 32.4554 48.3907C32.6053 48.3914 32.7549 48.377 32.9018 48.3479C42.846 45.0918 50 35.8697 50 25.0088C50 11.4273 38.8058 0.405762 25 0.405762Z"
                        fill="black" />
                </svg>
            </figure>
            <h2>Repositórios Favoritos</h2>
        </div>
        <RepoCard v-for="favs in favoritos" :key="favs.id" :repositorios_data="favs"></RepoCard>
        <p class="sem-favorito" v-if="!favoritos.length">Nenhum favorito encontrado.</p>
    </section>
</template>

<style lang="scss" scoped>
.card-main {
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    margin-top: 3rem;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 3rem;

    .sem-favorito {
        font-family: 'Rubik', sans-serif;
        font-weight: 300;
        font-size: 24px;
        color: #757575;
        ;
    }

    .card-title {
        display: flex;
        gap: 3rem;
        margin-bottom: 2rem;
        align-items: center;

        h2 {
            font-family: 'Roboto Mono', monospace;
            font-weight: 400;
            font-size: 45px;
        }
    }
}
</style>

<script>
import RepoCard from '@/components/RepoCard.vue'
import { useMainStore } from '@/store/mainStore';

export default {
    name: 'Favoritos Page',
    components: {
        RepoCard
    },
    computed: {
        favoritos() {
            return useMainStore().favoritos;
        }
    }
}
</script>

