<template>
    <div id="app">
        <navigation/>
        <router-view/>
        <footer/>
    </div>
</template>

<script>
    import navigation from "@/components/Header";

    export default ({
        components: {
            navigation,
        },
    })
</script>
<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
