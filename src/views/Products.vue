<template>
  <main class="product">
    <div>
      <p>back to store</p>
      <div class="product__image-wrapper">
        <img class="product__image" :src="product.PhotoName + append" />
      </div>
    </div>
    <div class="product__details">
      <h6>{{ product.ItemID }}</h6>
      <h3>{{ product.ItemName }}</h3>
      <!-- update this to formatted price need to extract formatted price to global mixin? or maybe utility class -->
      <h3>${{ product.BasePrice }}</h3>
      <p class="product__label">DESCRIPTION</p>
      <p>{{ product.Description }}</p>
      <p class="product__label">DIMENSIONS:</p>
      <p>{{ product.Dimensions }}</p>
      <p class="product__label">Qty On Hand: {{ product.OnHandQuantity }}</p>
    </div>
  </main>
</template>

<script>
import dataSet from "../data/test.json";
const { items } = dataSet;

export default {
  name: "Product",
  data() {
    return {
      items: items,
      product: null,
      append: "?width=250",
    };
  },
  methods: {
    findItem(itemId) {
      return items.find((item) => item.ItemID === itemId);
    },
  },
  created() {
    this.product = this.findItem(this.$route.params.id);
  },
};
</script>

<style scope lang="scss">
.product {
  padding: 2rem 1rem;

  @include tablet-lg {
    padding: 4rem;
    max-width: 60.8125rem;
    display: grid;
    grid-template-columns: 1fr 4fr ;
    margin: 0 auto;
  }

  &__image-wrapper {
    text-align: center;
    margin: 3rem 0 2rem 0;
  }

  &__details {
    @include tablet-lg {
      margin-left: 3rem;
      align-self: center;
    }
  }

  &__label {
    font-size: 12px;
    margin: 0.8rem 0 0.3rem 0;
  }
}
</style>
