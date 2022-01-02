<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ProductCard msg="Here are the products"/>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Home',
  components: {
    ProductCard
}
}
</script>
