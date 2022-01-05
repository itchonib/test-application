<template>
  <main>
    <section class="product">
      <div>
        <router-link to="/">back to store</router-link>
        <!-- <p></p> -->
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
    </section>
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
const { items } = dataSet;

export default {
  name: "Product",
  data() {
    return {
      items: items,
      product: null,
      append: "?width=250",
      recommended: [0, 0, 0],
    };
  },
  methods: {
    selectProduct(itemId) {
      this.product = items.find((item) => item.ItemID === itemId);
    },
    createRecommended() {
      this.recommended = this.recommended.map(() => {
        return items[Math.floor(Math.random() * items.length)]
      })
    }
  },
  created() {
    this.selectProduct(this.$route.params.id);
    this.createRecommended()
  },
  watch: {
    $route() {
      this.selectProduct(this.$route.params.id);
    },
  },
  components: { ProductCard },
};
</script>

<style scoped lang="scss">
main {
  padding: 2rem 1rem;

  @include tablet-lg {
    padding: 5rem;
  }
}

.product {
  @include tablet-lg {
    padding-bottom: 4rem;
    max-width: 60.8125rem;
    display: grid;
    grid-template-columns: 1fr 4fr;
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
      max-width: 60.8125rem;
      margin: 0 auto;
      justify-content: center;
    }
  }
}
</style>
