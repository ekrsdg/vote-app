<template>
    <select class="my-10 ml-10" name="votes" id="votes" v-model="filterModel">
        <option value="lastUpdate">Last Updated</option>
        <option value="highToLow">Most Voted</option>
        <option value="lowToHigh">Less Voted</option>
    </select>
</template>
<script>
    export default {
        name: 'listOrderFilter',
        data() {
            return {
                filterModel: 'lastUpdate'
            }
        },
        watch: {
            filterModel() {
                this.$emit('filterChange', this.filterModel)
            }
        }
    }
</script>
<style lang="scss"></style>