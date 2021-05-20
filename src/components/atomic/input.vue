<template>
    <div>
        <p class="primary-text small black bold mb-5" v-if="label">{{label}}</p>
        <input class="custom-input" :type="type" :placeholder="placeholder" @input="$emit('input', $event.target.value)">
    </div>
</template>
<script>
    export default {
        name: 'customInput',
        props: {
            label: String,
            type: String,
            placeholder: String,
        }
    }
</script>
<style lang="scss">
    .custom-input {
        width: 100%;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #dfdfdf;

        &:focus {
            outline: none;
        }
    }
</style>
