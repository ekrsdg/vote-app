<template>
  <div id="app" class="main-cage">
    <Header/>
    <section>
      <router-view/>
    </section>
  </div>
</template>

<script>
  import Header from './components/shared/header.vue'

export default {
  name: 'mainApp',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
  .main-cage{
    max-width: 960px;
    padding: 1rem 3rem;
    display: block;
    margin: 0 auto;
  }
</style>
