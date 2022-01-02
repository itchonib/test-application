<template>
  <div class="product-card">
    <h3> This is the product card component {{msg}} </h3>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    msg: String,
  },
};
</script>

<style scoped>

</style>
