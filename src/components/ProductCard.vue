<template>
  <router-link class="product-card" :to="'/products/' + product.ItemID">
    <img class="product-card__thumbnail" :src="formattedImg" :alt="'image of the ' + product.ItemName"  loading="lazy" />
    <div class="product-card__info">
      <h4 class="product-card__name">{{ product.ItemName }}</h4>
      <div class="product-card__purchase">
        <p class="no-stock__badges" v-if="product.OnHandQuantity < 0">
          Out Of Stock
        </p>
        <h5 class="product-card__price">${{ formatPrice }}</h5>
      </div>
    </div>
  </router-link>
</template>

<script>
import { productMixin } from "@/mixins/productMixin.js";

export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
  data() {
    return { dimensions: 120 };
  },
  mixins: [productMixin],
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
  max-width: 22rem;

  @include tablet {
    max-width: 13rem;
  }

  &__thumbnail {
    margin: auto auto;
  }

  &__info {
    margin-top: auto;
    display: grid;
    grid-template-columns: 1.4fr 0.6fr;
    align-items: flex-end;
  }

  &__purchase {
    justify-self: flex-end;
  }

  &__name {
    font-size: $text-sm;
    font-weight: 400;
    margin-right: 0.5rem;
  }

  &__price {
    font-size:  $text-sm;
    font-weight: 500;
  }

  .no-stock__badges {
    font-size: $text-2xs;
    background: none;
    width: 100%;
    color: $red-1;
  }
}
</style>
