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
        <div class="menu-ativar">
            <button v-click-outside="hideMobileNav" @click="toggleMobileNav" v-show="mobile">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <transition enter-active-class="enter-transition" enter-from-class="from-transition "
            leave-active-class="leave-active-transition" leave-to-class="leave-to-transition">
            <ul v-show="mobileNav" class="mobile-menu">
                <li class="nav-link">
                    <router-link to="/" active-class="active" class="router-link">Ínicio</router-link>
                </li>
                <li class="nav-link">
                    <router-link active-class="active" to="/favoritos" class="router-link">Favoritos</router-link>
                </li>
            </ul>
        </transition>

    </nav>
</template>

<style lang="scss" scoped>
.nav-link {
    .router-link {
        color: black;
        text-decoration-line: none;
    }
}

.enter-transition {
    transition-duration: 700ms;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.from-transition {
    transform: translateX(-16rem);
}

.leave-active-transition {
    transition-duration: 700ms;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}

.leave-to-transition {
    transform: translateX(-16rem);
}

.main-nav {
    display: flex;
    justify-content: space-between;
    background-color: #D9D9D9;
    align-items: center;
    text-transform: uppercase;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    padding: 1.5rem 2rem;
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
        display: none;
        gap: 2rem;
        font-weight: 700;
        font-size: 16px;

        @media screen and (min-width:1024px) {
            display: flex;
        }
    }

    .menu-ativar {
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: initial;

        @media screen and (min-width:1024px) {
            display: none;
        }

        button {
            position: relative;
            width: 48px;
            height: 48px;
            border: none;
            background-color: transparent;

            span {
                background-color: black;
                position: absolute;
                right: 0;
                height: 3px;
                cursor: pointer;

                &:nth-child(1) {
                    top: calc(50% - 6px);
                    width: 48px;
                }

                &:nth-child(2) {
                    top: calc(50% + 6px);
                    width: 32px;
                }
            }

            &:hover span {
                background-color: red;
                transition-duration: 700ms;

                &:nth-child(1) {
                    width: 24px;
                }

                &:nth-child(2) {
                    width: 48px;
                }
            }
        }
    }

    .mobile-menu {
        display: flex;
        position: fixed;
        background-color: #D9D9D9;
        flex-direction: column;
        width: 100%;
        max-width: 250px;
        height: 100vh;
        padding: 2rem;
        gap: 0.5rem;
        font-weight: 700;
        font-size: 16px;
        text-transform: uppercase;
        top: 0;
        z-index: 9999999;
        left: 0;
    }

    .active {
        color: red !important;
    }

}
</style>


<script>
import vClickOutside from 'click-outside-vue3'
export default {
    name: "navigation",
    directives: {
        clickOutside: vClickOutside.directive
    },
    data() {
        return {
            scrollednav: 0,
            windowWidth: 0,
            mobile: null,
            mobileNav: null,
        };
    },
    mounted() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        hideMobileNav() {
            this.mobileNav = false
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 1024) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        }
    },
}
</script>