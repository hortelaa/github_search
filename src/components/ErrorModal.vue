<template>
    <div class="modal-main">
        <div class="modal-background"></div>
        <div class="modal-body">
            <div class="modal-card">
                <figure>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M50 75C51.4167 75 52.605 74.52 53.565 73.56C54.5217 72.6033 55 71.4167 55 70C55 68.5833 54.5217 67.395 53.565 66.435C52.605 65.4783 51.4167 65 50 65C48.5833 65 47.3967 65.4783 46.44 66.435C45.48 67.395 45 68.5833 45 70C45 71.4167 45.48 72.6033 46.44 73.56C47.3967 74.52 48.5833 75 50 75ZM50 100C43.0833 100 36.5833 98.6867 30.5 96.06C24.4167 93.4367 19.125 89.875 14.625 85.375C10.125 80.875 6.56333 75.5833 3.94 69.5C1.31333 63.4167 0 56.9167 0 50C0 43.0833 1.31333 36.5833 3.94 30.5C6.56333 24.4167 10.125 19.125 14.625 14.625C19.125 10.125 24.4167 6.56167 30.5 3.935C36.5833 1.31167 43.0833 0 50 0C56.9167 0 63.4167 1.31167 69.5 3.935C75.5833 6.56167 80.875 10.125 85.375 14.625C89.875 19.125 93.4367 24.4167 96.06 30.5C98.6867 36.5833 100 43.0833 100 50C100 56.9167 98.6867 63.4167 96.06 69.5C93.4367 75.5833 89.875 80.875 85.375 85.375C80.875 89.875 75.5833 93.4367 69.5 96.06C63.4167 98.6867 56.9167 100 50 100ZM50 55C51.4167 55 52.605 54.52 53.565 53.56C54.5217 52.6033 55 51.4167 55 50V30C55 28.5833 54.5217 27.395 53.565 26.435C52.605 25.4783 51.4167 25 50 25C48.5833 25 47.3967 25.4783 46.44 26.435C45.48 27.395 45 28.5833 45 30V50C45 51.4167 45.48 52.6033 46.44 53.56C47.3967 54.52 48.5833 55 50 55Z"
                            fill="#FF0000" />
                    </svg>

                </figure>
                <h2 class="modal-title">Desculpe!</h2>
                <p class="modal-description">
                    Não foi possível encontrar o repositório ou usuário desejado!</p>
                <button @click="fecharModal" class="modal-button">Certo</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modal-main {
    font-family: 'Inter', sans-serif;
    text-align: center;

    .modal-background {
        width: 100%;
        top: 0;
        left: 0;
        z-index: 10;
        height: 100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.59);
    }

    .modal-body {
        position: fixed;
        display: flex;
        height: 100%;
        width: 100%;
        left: 0;
        margin-top: -6rem;
        z-index: 20;
        justify-content: center;
        align-items: center;

        .modal-card {
            background-color: white;
            display: flex;
            justify-content: start;
            align-items: center;
            flex-direction: column;
            width: 90%;

            @media screen and (min-width:1024px) {
                width: 20rem;
            }

            border-radius: 15px;
            gap: 3rem;
            padding: 22px;

            .modal-title {
                font-size: 32px;
                font-weight: 500;
            }

            .modal-description {
                font-weight: 400;
            }

            .modal-button {
                font-weight: 700;
                cursor: pointer;
                border-radius: 10px;
                padding: 0.6rem 2.5rem;
                border: none;
                color: white;
                font-size: 24px;
                background-color: #FF0000;
            }
        }
    }
}
</style>
<script>
export default {
    methods: {
        fecharModal() {
            const modal = document.querySelector(".modal-main");
            modal.style.display = "none";
            this.$router.push('/')
        },
    },
};
</script>