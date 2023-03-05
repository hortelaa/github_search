<template>
    <nav class="main-nav">
        <router-link to="/" class="nav-logo">GitHub<span>Search</span></router-link>
        <ul class="nav-menu">
            <li class="nav-link">
                <router-link to="/" active-class="active" class="router-link">Ínicio</router-link>
            </li>
            <li class="nav-link">
                <router-link active-class="active" to="/favoritos" class="router-link">Favoritos</router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.main-nav {
    display: flex;
    justify-content: space-between;
    background-color: #D9D9D9;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    padding: 1.5rem;
    position: relative;
    font-family: 'Inter', sans-serif;

    .nav-logo {
        font-weight: 700;
        font-size: 24px;
        color: black;
        text-decoration-line: none;

        span {
            font-weight: 500;
            font-style: italic;
            padding-left: 0.4rem;
        }
    }

    .nav-menu {
        text-transform: uppercase;
        display: flex;
        gap: 2rem;
        font-weight: 700;
        font-size: 16px;

        .nav-link {
            .router-link {
                color: black;
                text-decoration-line: none;
            }
        }
    }

    .active {
        color: red !important;
    }

}
</style>
