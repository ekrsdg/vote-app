<template>
    <div class="custom-toastr-outer" v-if="showToastr">
        <div class="custom-toastr cage success" :class="status && status">
            <p>{{message}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'customToastr',
        data() {
            return {
                timer: ''
            }
        },
        props: {
            showToastr: {
                type: Boolean,
                default: false
            },
            message: String,
            status: String
        },
        watch: {
            showToastr() {
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    this.$emit('timeUp')
                }, 2000)
            }
        }
    }
</script>
<style lang="scss">
    .custom-toastr-outer {
        top: 0;
        left: 0;
        z-index: 5;
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .custom-toastr {
        &.cage {
            top: 20%;
            left: 50%;
            z-index: 6;
            font-size: 25px;
            border-radius: 5px;
            padding: 10px 30px;
            position: absolute;
            transform: translate(-50%, -50%) !important;

            &.success {
                color: #0cb706;
                background: #c4ecae;
                border: 1px solid #0cb706;
            }
        }
    }
</style>