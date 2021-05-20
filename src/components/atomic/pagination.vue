<template>
    <div class="pagination-cage">
        <span class="material-icons mr-5 c-pointer" @click="pageDown()">chevron_left</span>
        <p class="primary-text medium bold mr-5 pd-5 c-pointer" :class="currentPage === page && 'active-page'"
           v-for="(page,i) in totalPage" :key="i" @click="currentPage = page">{{page}}</p>
        <span class="material-icons c-pointer" @click="pageUp()">navigate_next</span>
    </div>
</template>
<script>
    export default {
        name: 'customPagination',
        data() {
            return {
                currentPage: 1,
                totalPage: 1
            }
        },
        props: {
            totalSize: Number,
            resetParam: String
        },
        created() {
            this.calculateTotalPage();
        },
        methods: {
            pageUp() {
                if (this.currentPage < this.totalPage) {
                    this.currentPage += 1;
                }
            },
            pageDown() {
                if (this.currentPage > 1) {
                    this.currentPage -= 1;
                }
            },
            calculateTotalPage() {
                this.totalPage = Math.ceil(this.totalSize / 5);
            }
        },
        watch: {
            totalSize() {
                this.calculateTotalPage();
            },
            currentPage() {
                this.$emit('currentPage', this.currentPage);
            },
            resetParam() {
                this.currentPage = 1;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .pagination-cage {
        display: flex;
        justify-content: center;
    }

    .active-page {
        outline: 1px solid #000000;
    }
</style>