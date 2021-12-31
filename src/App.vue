<template>
  <Card msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Card from './components/ProductCard.vue'

export default {
  name: 'App',
  components: {
    Card
  }
}
</script>

<style lang="scss">
#app {
  color: $primary;
}
</style>
