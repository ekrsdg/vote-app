<template>
    <div class="custom-button" :class="customClass && customClass" @click="$emit('clicked')">
        <a>{{text}}</a>
    </div>
</template>
<script>
    export default {
        name: 'customButton',
        props: {
            text: String,
            customClass: String
        }
    }
</script>
<style lang="scss">
    .custom-button {
        cursor:pointer;
        font-size: 20px;
        min-width: 60px;
        max-width: 100px;
        font-weight: 500;
        padding: 5px 25px;
        text-align: center;
        border-radius: 30px;

        &.black {
            background: #000000;

            > a {
                color: #ffffff;
            }
        }

        &.white {
            background: #fff;

            > a {
                color: #000000;
            }
        }
    }
</style>