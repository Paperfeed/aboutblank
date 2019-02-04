<template>
    <div class="home">
        <brand-logo-compact class="black full-screen"/>
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
