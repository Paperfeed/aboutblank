<template>
    <div class="home">
        <section class="hero is-fullheight-with-navbar is-large">

            <div class="hero-body">
                <div class="container has-text-centered">
                    <!--<brand-logo-compact class="black"/>-->
                    <h1 class="title">
                        <brand-logo-compact class="small black centered"/>
                    </h1>
                    <h2 class="subtitle">
                        custom made web applications
                    </h2>
                </div>
            </div>
        </section>

    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import BrandLogoCompact from '@/components/AboutBlankLogoCompact.vue';

    @Component({
        components: {
            BrandLogoCompact,
        },
    })

    export default class Home extends Vue {
    }
</script>

<style scoped lang="scss">
    .subtitle {
        font-family: monospace;
        font-size: 2rem;
    }
</style>
