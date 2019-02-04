<template>
    <div class="author">
        <img v-if="avatar" :src="avatar"/>
        <div class="content">
            <div class="name">{{name}}</div>
            <div class="title">{{title}}</div>
            <div class="date">{{ date }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'author-block',
        props: {
            name: '',
            title: '',
            avatar: '',
            date: ''
        }
    }
</script>

<style scoped lang="scss">
    .author {
        display: flex;
        align-items: center;
        background: black;
        color: white;
        padding: 3px;
        margin-right: 20px;

        .content {
            margin-left: 10px;
        }

        .name {
            font-size: 18px;
        }

        .title {
            font-size: 12px;
            text-transform: uppercase;
            margin-bottom: 5px;
        }

        .date {
            color: #8f888b;
        }

        img {
            align-self: center;
            max-width: 70px;
            border-radius: 50%;
        }
    }
</style>
