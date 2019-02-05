<template>
    <div id="app">
        <navigation/>
        <transition name="slide" mode="out-in">
            <router-view/>
        </transition>
        <footer/>
    </div>
</template>


<script>
    import navigation from '@/components/Header';

    export default ({
        components: {
            navigation,
        }
    })
</script>


<style lang="scss">
    @import "../node_modules/bulma/bulma.sass";

    h1 {
        font-size: 26px;
        margin: 1rem 0;
        font-family: monospace;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .slide-enter-active, .slide-leave-active {
        transition: all .3s ease-out;
    }
    .slide-enter {
        transform: translateX(-25%);
        opacity: 0;
    }

    .slide-leave-to {
        transform: translateX(25%);
        opacity: 0;
    }
</style>
