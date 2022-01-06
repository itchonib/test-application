<template>
  <router-link class="product-card" :to="'/products/' + product.ItemID">
    <div
      :class="{ 'no-stock': product.OnHandQuantity <= 0 }"
      v-show="product.OnHandQuantity < 0"
    >
      <p class="no-stock__msg">OUT OF STOCK</p>
    </div>
    <img
      class="product-card__thumbnail"
      :src="formattedImg"
      :alt="'image of the ' + product.ItemName"
      loading="lazy"
    />
    <div class="product-card__info">
      <h4 class="product-card__name">{{ product.ItemName }}</h4>
      <div class="product-card__purchase">
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
  mixins: [productMixin],
  data() {
    return { dimensions: 120 };
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
  max-width: 22rem;
  position: relative;
  overflow: hidden;

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
    font-size: $text-sm;
    font-weight: 500;
  }

  // &__no-stocka {
  //   background: rgba($color: #808080, $alpha: 0.7);
  //   height: 1rem;
  //   // color: red;
  //   height: 200px;
  //   // max-width: 22rem;
  //   position: absolute;
  //   // padding: 0.5rem;
  //   box-sizing: border-box;
  //   border-radius: 20px;
  //   width:inherit;
  //   top: 0;
  //   left: 0;
  //   display: flex;
  //   align-items: center;
  // }

  .no-stock__badges {
    font-size: $text-2xs;
    background: none;
    width: 100%;
    color: $red-1;
  }
}

.no-stock {
  background: rgba($color: #808080, $alpha: 0.8);
  height: 1rem;
  height: 200px;
  position: absolute;
  box-sizing: border-box;
  border-radius: 20px;
  width: inherit;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;

  &__msg {
    background-color: white;
    width: 100%;
    text-align: center;
  }
}
</style>
