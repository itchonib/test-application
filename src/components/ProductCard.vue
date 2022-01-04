<template>
  <div class="product-card">
    <router-link to="/products/123">
      <img
        src="https://images.repzio.com/productimages/202/f124sdm_lg.jpg?width=130&format=png&quality=100&scale=down"
      />
      <h4 class="">Name of Product</h4>
      <h5 class="product-price">{{ product.BasePrice }}</h5>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
};
</script>

<style scoped lang="scss">
.product-card {
  border: solid 1px $gray-1;
  border-radius: 20px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  box-sizing: border-box;
  width: 100%;
}
</style>
