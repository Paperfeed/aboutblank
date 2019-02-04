<template>
    <div class="blog-post">
        <h2><a :href="slug">{{title}}</a></h2>
        <div style="float: left">
            <Author v-bind="author" :date="date"/>
        </div>
        <p>{{content}}</p>
    </div>
</template>

<script>
    import Author from "@/components/Author";

    export default {
        name: "blog-post",
        components: { Author },
        props: {
            title: String,
            slug: String,
            content: String,
            author: Object,
            createdOn: String
        },
        computed: {
            date() {
                const date = new Date(parseInt(this.createdOn));
                return date.toLocaleString();
            }
        }
    }
</script>

<style scoped lang="scss">
    .blog-post {
        position: relative;
        margin-bottom: 30px;
        padding: 15px;
        border-radius: 4px;
        overflow: auto;
        background: black;
        color: white;
        box-shadow: 0 6px 25px 0 rgba(0,0,0, 0.3), 0 6px 6px 0 rgba(0,0,0, 0.1);

        h2 a {
            color: white;
        }
    }
</style>
