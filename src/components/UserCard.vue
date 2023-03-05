<template>
    <li>
        {{ usuarios.login }}
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