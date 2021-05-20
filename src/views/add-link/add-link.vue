<template>
    <div>
        <div class="content-cage w-100">
            <a class="primary-text medium bold black d-flex align-center mb-15 c-pointer" @click="$router.push({name:'linkList'})">
                <span class="material-icons mr-5">west</span>
                Return to List</a>
            <div class="d-flex flex-column align-end">
                <custom-input class="mb-15 w-100" type="text" placeholder="e.g. Alphabet" label="Link Name:"
                              v-model="linkName"/>
                <custom-input class="mb-15 w-100" type="text" placeholder="e.g. http://abc.xyz" label="Link URL:"
                              v-model="linkUrl"/>
                <custom-button text="ADD" custom-class="black" @clicked="createLink"/>
            </div>
        </div>
        <custom-toastr :message="toastrObject.message" :status="toastrObject.status" :show-toastr="showToastr"
                       @timeUp="showToastr= false"/>
    </div>
</template>
<script>
    import customInput from '../../components/atomic/input.vue';
    import customButton from '../../components/atomic/button.vue';
    import customToastr from '../../components/atomic/toastr.vue';
    import {mapActions} from "vuex";

    export default {
        name: 'addLink',
        components: {customInput, customButton, customToastr},
        data() {
            return {
                linkName: '',
                linkUrl: '',
                toastrObject: {},
                showToastr: false
            }
        },
        methods: {
            ...mapActions({
                addLink: 'links/addLink',
            }),
            createLink() {
                const link = {
                    name: this.linkName,
                    link: this.linkUrl,
                    rate: 0,
                    updatedDate: new Date()
                };
                this.addLink(link);
                this.toastrObject = {
                    message: link.name + ' added.',
                    status: 'success'
                };
                this.showToastr = true;
            },
        }
    }
</script>
<style lang="scss"></style>