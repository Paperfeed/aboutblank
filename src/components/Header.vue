<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">

            <div class="navbar-brand">
                <a class="navbar-item" to="/">
                    <brand-logo class="nav-logo black"/>
                </a>

                <a role="button"
                   class="navbar-burger burger"
                   aria-label="menu"
                   aria-expanded="false"
                   v-on:click="navOpen = !navOpen"
                   :class="{'is-active': navOpen}">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div class="navbar-menu" :class="{'is-active': navOpen}">
                <div class="navbar-start"></div>

                <div class="navbar-end">
                    <router-link class="navbar-item" to="/">
                        Home
                    </router-link>
                    <router-link class="navbar-item" to="/team">
                        Team
                    </router-link>

                    <router-link class="navbar-item" to="/about">
                        About
                    </router-link>

                    <router-link class="navbar-item" to="/blog">
                        Blog
                    </router-link>
                </div>
            </div>

        </div>
    </nav>
</template>

<script>
    import BrandLogo from "@/components/AboutBlankLogo";
    export default {
        name: "navigation",
        components: {
            BrandLogo
        },
        data() {
            return {
                navOpen: false
            }
        }
    }
</script>

<style scoped lang="scss">
    nav {
        a {

            font-family: monospace;
            color: #2c3e50;

            &.router-link-exact-active {
                //color: #767977;
                text-transform: uppercase;
                margin-bottom: -2px;
                border-bottom: 2px solid black;
            }

            &:hover {
                color: gray;
            }
        }
    }

    .navbar-menu.is-active {

    }
</style>
