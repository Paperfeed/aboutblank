<template>
    <div class="nav">
        <brand-logo class="nav-logo black"/>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/blog">Blog</router-link>
    </div>
</template>

<script>
    import BrandLogo from "@/components/AboutBlankLogo";
    export default {
        name: "navigation",
        components: { BrandLogo }
    }
</script>

<style scoped lang="scss">
    .nav {
        display: flex;
        justify-content: center;
        align-items: center;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    a {
        margin: 0 8px;
    }
</style>
