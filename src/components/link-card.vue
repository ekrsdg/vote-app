<template>
    <div>
        <div class="card-container" @mouseover="showDeleteAction = true" @mouseleave="showDeleteAction = false">
            <div class="gray-cage mr-10">
                <p class="primary-text x-large bold mb-5">{{linkInfo.rate}}</p>
                <p class="primary-text medium">POINTS</p>
            </div>
            <div class="w-100">
                <div>
                    <p class="primary-text large mb-5">{{linkInfo.name}}</p>
                    <p class="primary-text gray medium">{{linkInfo.link}}</p>
                </div>
                <div class="d-flex mt-10">
                    <a class="primary-text small bold gray d-flex align-center mr-15"
                       @click="voteLink({link:linkInfo,vote: 1})">
                        <span class="material-icons">arrow_upward</span>
                        Up Vote
                    </a>
                    <a class="primary-text small bold gray d-flex align-center"
                       @click="voteLink({link:linkInfo,vote: -1})">
                        <span class="material-icons">arrow_downward</span>
                        Down Vote
                    </a>
                </div>
            </div>
            <div class="delete-dialog" v-show="showDeleteAction">
                <a @click="openDeleteModal">
                    <span class="material-icons primary-icon red">do_disturb_on</span>
                </a>
            </div>
        </div>
        <custom-modal message-text="Do you want to remove"
                      :secondaryMessageText="linkInfo.name"
                      :show-modal="showDeleteModal"
                      @positiveClick="removeLink"
                      @closeModal="showDeleteModal = false"/>
    </div>
</template>
<script>
    import {mapActions} from "vuex";
    import customModal from './atomic/modal.vue';

    export default {
        name: 'linkCard',
        data() {
            return {
                showDeleteAction: false,
                showDeleteModal: false,
            }
        },
        components: {customModal},
        props: {
            linkInfo: Object
        },
        methods: {
            ...mapActions({
                deleteLink: 'links/deleteLink',
                updateLinkRate: 'links/updateLinkRate',
                setToastr: 'toastr/setToastr'
            }),
            voteLink(voteObject) {
                this.updateLinkRate(voteObject);
                this.$emit('linkUpdate');
            },
            openDeleteModal() {
                this.showDeleteModal = true;
            },
            removeLink() {
                this.$emit('deleteToastr', {message: this.linkInfo.name + ' removed', status: 'success'});
                this.deleteLink(this.linkInfo);
                this.showDeleteModal = false;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .card-container {
        width: 100%;
        display: flex;
        cursor: pointer;
        position: relative;
        margin-bottom: 20px;
        justify-content: center;
        padding: 10px 0 10px 10px;

        &:hover {
            background: #f2f2f2;
            outline: 1px solid #dfdfdf;
        }

        &:last-child {
            margin-bottom: 30px;
        }
    }


    .delete-dialog {
        top: -10px;
        right: -10px;
        position: absolute;
    }
</style>