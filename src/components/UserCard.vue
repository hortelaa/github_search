<template>
    <div class="card-body">
        <img class="card-img" :src="usuarios.avatar_url" :alt="usuarios.login">
        <router-link class="router-link" :to="{ name: 'perfil_usuario', params: { name: usuarios.login } }">
            <h3 class="card-title">{{ usuarios.login }}</h3>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.card-body {
    display: flex;
    padding: 14px;
    justify-content: start;
    box-shadow: 0px 0px 10px 10px #0000001A;
    border-radius: 1rem;

    .card-img {
        width: 144px;
        height: 144px;
        border-radius: 1rem;
    }


    .router-link {
        color: black;
    }

    .card-title {
        font-family: 'Rubik', sans-serif;
        font-size: 24px;
        font-weight: 300;
        padding-left: 1rem;
    }
}
</style>

<script>
export default {
    props: {
        usuarios: {
            type: Object,
            required: true,
        },
    },
}
</script>