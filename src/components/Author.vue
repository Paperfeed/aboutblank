<template>
    <div class="author">
        <img v-if="avatar" :src="avatar"/>
        <div class="content">
            <div class="name">{{name}}</div>
            <div class="function">{{title}}</div>
            <div v-if="date" class="date">{{ date }}</div>
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
        padding: 3px;
        margin-right: 20px;

        .content {
            margin-left: .625rem;
        }

        .name {
            font-size: 18px;
        }

        .function {
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

        &.black {
            background: black;
            color: white;
        }

        &.vertical {
            flex-direction: column;
            text-align: center;

            .content {
                margin: .625rem 0 0 0;
            }
        }
    }
</style>
