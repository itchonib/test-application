<template>
  <main>
    <router-link to="/">back to store</router-link>
    <ProductDetailed v-bind:product="product" />
    <section class="recommended">
      <div class="recommended__banner">
        <h3>check these out</h3>
      </div>
      <div class="recommended__list">
        <ProductCard
          v-for="product in recommended"
          :key="product.ItemID"
          v-bind:product="product"
        />
      </div>
    </section>
  </main>
</template>

<script>
import dataSet from "../data/test.json";
import ProductCard from "../components/ProductCard.vue";
import ProductDetailed from "../components/ProductDetailed.vue";
const { items } = dataSet;

export default {
  name: "Product",
  data() {
    return {
      product: {},
      recommended: [{}, {}, {}],
    };
  },
  methods: {
    selectProduct(itemId) {
      this.product = items.find((item) => item.ItemID === itemId);
    },
    createRecommended() {
      const eligibleItems = items.filter(
        (item) =>
          this.$route.params.id !== item.ItemID && item.OnHandQuantity > 0
      );

      this.recommended = eligibleItems.splice(0, 3);
    },
  },
  async created() {
    this.selectProduct(this.$route.params.id);
    this.createRecommended();
  },
  watch: {
    $route() {
      this.selectProduct(this.$route.params.id);
      this.createRecommended();
    },
  },
  components: { ProductDetailed, ProductCard },
};
</script>

<style scoped lang="scss">
main {
  padding: 2rem 1rem;

  @include tablet-lg {
    padding: 5rem;
    max-width: 60.8125rem;
    margin: 0 auto;
  }
}
.recommended {
  &__banner {
    width: 100%;
    margin: 0 0 1.5rem auto;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;

    @include tablet {
      flex-direction: row;
      margin: 0 auto;
      justify-content: center;
    }
  }
}
</style>
