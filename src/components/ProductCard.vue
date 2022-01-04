<template>
  <!-- <div > -->
  <router-link class="product-card" :to="'/products/'+product.ItemID">
    <img
      class="product-card__thumbnail"
      :src=product.PreviewImg
    />
    <div class="product-card__info">
      <h4 class="product-card__name">{{ product.ItemName }}</h4>
      <h5 class="product-card__price">${{ product.FormattedPrice }}</h5>
    </div>
  </router-link>
  <!-- </div> -->
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
  padding: 0.5rem;
  box-sizing: border-box;
  width: 100%;

  &__thumbnail {
    margin: auto auto;
  }

  &__info {
    margin-top: auto;
    display: grid;
    grid-template-columns: 1.2fr 0.5fr;
  }

  &__name {
    font-size: 11px;
    font-weight: 400;
    margin-right: 0.5rem;

    @include tablet {
      font-size: 12px;
    }
  }

  &__price {
    font-size: 12px;
    font-weight: 500;
    justify-self: flex-end;
    align-self: center;
  }
}
</style>
