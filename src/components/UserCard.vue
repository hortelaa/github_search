<template>
    <li>
        <router-link :to="{ name: 'perfil_usuario', params: { name: usuarios.login } }">
            <h3 class="card-title">{{ usuarios.login }}</h3>
        </router-link>
    </li>
    <li>
        <img :src="usuarios.avatar_url" :alt="usuarios.login">
    </li>
</template>

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