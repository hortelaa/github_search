<template>
    <div class="card-body">
        <div class="card-details">
            <h2 class="card-title">{{ repositorios_data.name }}</h2>
            <p class="card-description">{{ repositorios_data.description }}</p>
            <div class="card-stars"><svg width="24" height="23" viewBox="0 0 24 23" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6.17022 14.8942L4.794 22.9182L12 19.1298L19.206 22.9182L17.8297 14.8942L23.6595 9.21162L15.603 8.04094L12 0.740479L8.39699 8.04094L0.340454 9.21162L6.17022 14.8942ZM15.6808 14.196L16.5497 19.2622L12 16.8703L7.45026 19.2622L8.31918 14.196L4.63838 10.6081L9.72512 9.86895L12 5.25958L14.2748 9.86895L19.3616 10.6081L15.6808 14.196Z"
                        fill="black" />
                </svg>
                <span> {{ repositorios_data.stargazers_count }}</span>
            </div>
        </div>
        <button class="card-button" @click="adicionarFavorito">
            <svg :class="{ 'favorito': checarFavorito }" width="50" height="50" viewBox="0 0 40 40" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path :fill="checarFavorito ? 'yellow' : 'black'" fill-rule="evenodd" clip-rule="evenodd"
                    d="M6.17022 14.8942L4.794 22.9182L12 19.1298L19.206 22.9182L17.8297 14.8942L23.6595 9.21162L15.603 8.04094L12 0.740479L8.39699 8.04094L0.340454 9.21162L6.17022 14.8942ZM15.6808 14.196L16.5497 19.2622L12 16.8703L7.45026 19.2622L8.31918 14.196L4.63838 10.6081L9.72512 9.86895L12 5.25958L14.2748 9.86895L19.3616 10.6081L15.6808 14.196Z" />
            </svg>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.card-body {
    display: flex;
    width: 100%;
    text-align: left;
    justify-content: space-between;
    font-family: 'Rubik', sans-serif;
    border-bottom: black solid 1px;
    padding-bottom: 2rem;

    .card-details {
        display: flex;
        gap: 1rem;
        flex-direction: column;

        .card-title {
            font-size: 24px;
            font-weight: 400;

            @media screen and (min-width:1024px) {
                font-size: 36px;
            }
        }

        .card-description {
            font-weight: 300;
            font-size: 16px;

            @media screen and (min-width:1024px) {
                font-size: 24px;
            }
        }

        .card-stars {
            display: flex;
            align-items: center;

            span {
                padding-left: 0.3rem;
                font-size: 12px;

                @media screen and (min-width:1024px) {
                    font-size: 20px;
                }
            }
        }
    }

    .card-button {
        background: transparent;
        border: none;
        cursor: pointer;
    }


}
</style>

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