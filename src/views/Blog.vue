<template>
    <div class="blog">
        <h1>About:Blog</h1>
        <loading-spinner class="black" v-if="this.$apollo.loading" :key="`loading`"/>
        <transition-group appear
                          name="slide-fade"
                          tag="div"
                          class="blog-post-list"
                          v-bind:css="false"
                          @before-enter="beforeEnter"
                          @enter="enter">
            <blog-post v-for="(post, index) in blogposts" :data-index="index" :key="`post-${index}`" v-bind="post"></blog-post>
        </transition-group>
    </div>
</template>

<script>
    import BlogPost from '@/components/BlogPost';
    import LoadingSpinner from "@/components/LoadingSpinner";
    import { TweenLite } from "gsap";
    import BLOG_POSTS from '@/graphql/BlogPosts.gql';

    const pageSize = 10;

    export default {
        name: 'Blog',
        components: {
            BlogPost,
            LoadingSpinner
        },
        data() {
            return {
                page: 0,
            }
        },
        apollo: {
            blogposts: {
                query: BLOG_POSTS
            },
        },
        methods: {
            beforeEnter(el) {
                el.style.opacity = 0;
                el.style.top = "100px";
            },
            enter(el, done) {
                const delay = (el.dataset.index * 100) + 300; // + 300 is page transition delay
                setTimeout(() => {
                    TweenLite.to(el, 0.2, {
                        opacity: 1,
                        top: 0
                    })
                }, delay)
            },
        }
    }
</script>

<style scoped>
    h1 {
        text-align: center;
    }
    .blog-post-list {
        margin: 0 auto;
        max-width: 600px;
    }
</style>
