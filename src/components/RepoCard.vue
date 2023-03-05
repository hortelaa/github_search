<template>
    <li>
        {{ repositorios.name }}
    </li>
    <li>
        {{ repositorios.description }}
    </li>
    <li>
        {{ repositorios.stargazers_count }}
    </li>
</template>


<script>
export default {
    props: {
        repositorios: {
            type: Object,
            required: true,
        }
    }
}
</script>