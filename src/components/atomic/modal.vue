<template>
    <div class="modal-outer-cage" v-if="showModal">
        <div class="modal-cage">
            <p class="primary-text medium t-center">{{messageText}}</p>
            <p class="primary-text large bold t-center mt-5" v-if="secondaryMessageText">{{secondaryMessageText}}</p>
            <div class="d-flex justify-content-between align-center mt-15">
                <custom-button text="OK" custom-class="black" @clicked="$emit('positiveClick')"/>
                <custom-button text="CANCEL" custom-class="black ml-10" @clicked="$emit('closeModal')"/>
            </div>
        </div>
    </div>
</template>
<script>
    import customButton from './button.vue';

    export default {
        name: 'customModal',
        components: {
            customButton
        },
        props: {
            showModal: Boolean,
            messageText: String,
            secondaryMessageText: String,
        }
    }
</script>
<style lang="scss">
    .modal-cage {
        top: 50%;
        left: 50%;
        z-index: 3;
        padding: 30px;
        border-radius: 5px;
        position: absolute;
        background: #dfdfdf;
        transform: translate(-50%, -50%) !important;
    }
    .modal-outer-cage {
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        background: rgba(0, 0, 0, 0.4);
    }
</style>