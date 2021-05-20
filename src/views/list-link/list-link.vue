<template>
    <div class="content-cage">
        <div class="submit-link" @click="$router.push({name:'addLink'})">
            <div class="gray-cage mr-15">
                <span class="material-icons primary-icon black pd-10">add</span>
            </div>
            <p class="primary-text xx-large bold">SUBMIT A LINK</p>
        </div>
        <hr>
        <list-order-filter @filterChange="filterModel= $event"/>
        <link-card v-for="(link,i) in slicedLinkList" :key="i" :link-info="link" @linkUpdate="filterList"
                   @deleteToastr="openToastr($event)"/>
        <custom-toastr :message="toastrObject.message" :status="toastrObject.status" :show-toastr="showToastr"
                       @timeUp="showToastr= false"/>
        <pagination v-if="linkList.length > 5" :total-size="linkList.length" @currentPage="sliceLinkList($event)"
                    :resetParam="filterModel"/>
    </div>
</template>
<script>
    import {mapState} from "vuex";
    import linkCard from '../../components/link-card.vue';
    import listOrderFilter from '../../components/list-order-filter.vue';
    import customToastr from '../../components/atomic/toastr.vue';
    import pagination from '../../components/atomic/pagination.vue';

    export default {
        name: 'linkList',
        components: {linkCard, listOrderFilter, customToastr, pagination},
        data() {
            return {
                filterModel: 'lastUpdate',
                toastrObject: {},
                showToastr: false,
                currentPage: 1,
                slicedLinkList: []
            }
        },
        created() {
            this.filterList();
            this.sliceLinkList();
        },
        methods: {
            filterList() {
                switch (this.filterModel) {
                    case 'lastUpdate':
                        this.linkList.sort(function (a, b) {
                            return new Date(b.updatedDate) - new Date(a.updatedDate);
                        });
                        break;
                    case 'highToLow':
                        this.linkList.sort(function (a, b) {
                            return b.rate === a.rate ? new Date(b.updatedDate) - new Date(a.updatedDate) : b.rate - a.rate;
                        });
                        break;
                    case 'lowToHigh':
                        this.linkList.sort(function (a, b) {
                            return b.rate === a.rate ? new Date(b.updatedDate) - new Date(a.updatedDate) : a.rate - b.rate;
                        });
                        break;
                }
                this.sliceLinkList(this.currentPage);
            },
            openToastr(toastObject) {
                this.toastrObject = toastObject;
                this.showToastr = true;
            },
            sliceLinkList(page) {
                this.currentPage = page || 1;
                this.slicedLinkList = this.linkList.slice((this.currentPage - 1) * 5, this.currentPage * 5);
            }
        },
        computed: {
            ...mapState({
                linkList: (store) => store.links.linkList,
            }),
        },
        watch: {
            filterModel() {
                this.filterList();
            },
            linkList() {
                this.sliceLinkList(this.currentPage);
            },
            slicedLinkList() {
                if (this.slicedLinkList.length === 0) {
                    this.sliceLinkList(1);
                }
            }
        }
    }
</script>
<style lang="scss">
    .submit-link {
        display: flex;
        padding: 10px;
        cursor: pointer;
        border-radius: 5px;
        background: #f2f2f2;
        margin-bottom: 15px;
        align-items: center;
        border: 1px solid #dfdfdf;
    }
</style>