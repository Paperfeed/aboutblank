<template>
    <div class="team container">
        <h1>About:Our Team</h1>
            <loading-spinner class="black" v-if="this.$apollo.loading" :key="`loading`"/>
            <transition-group appear
                              name="slide-fade"
                              tag="div"
                              class="columns is-multiline"
                              v-bind:css="false"
                              @before-enter="beforeEnter"
                              @enter="enter">
                <div class="column is-one-third-tablet is-one-quarter-desktop"
                     v-for="(employee, index) in employees"
                     :data-index="index"
                     :key="`team-member-${index}`">
                    <author-block v-bind="employee" class="vertical"/>
                </div>
            </transition-group>
    </div>
</template>

<script>
    import TEAM from '@/graphql/Employees.gql';
    import AuthorBlock from "@/components/Author";
    import LoadingSpinner from "@/components/LoadingSpinner";
    import { TweenLite } from "gsap";

    export default {
        components: { LoadingSpinner, AuthorBlock },
        apollo: {
            employees: {
                query: TEAM
            },
        },
        methods: {
            beforeEnter(el) {
                el.style.opacity = 0;
                el.style.transform = 'scale(0.5)';
            },
            enter(el, done) {
                const delay = (el.dataset.index * 100) + 300; // + 300 is page transition delay
                setTimeout(() => {
                    TweenLite.to(el, 0.2, {
                        scaleX: 1,
                        scaleY: 1,
                        opacity: 1
                    })
                }, delay)
            },
        }
    }
</script>
<style scoped lang="scss">
    h1 {
        text-align: center;
    }

    .columns {
        padding: 2rem;
    }

    .author {
        width: 100%;
        height: 100%;
        transform-origin: center;
    }
</style>
