<template>
  <section class="product">
    <div class="product__image-wrapper">
      <img class="product__image" :src="formattedImg" />
    </div>
    <div class="product__details">
      <h6>ID: {{ product.ItemID }}</h6>
      <h3 class="product__name">{{ product.ItemName }}</h3>
      <div class="product__row">
        <h3
          class="product__price"
          v-bind:class="{ strike: product.OnHandQuantity <= 0 }"
        >
          ${{ formatPrice }}
        </h3>
        <span class="no-stock__badge" v-if="product.OnHandQuantity <= 0">
          Out of stock
        </span>
      </div>
      <div v-if="product.Description">
        <p class="product__label">DESCRIPTION</p>
        <p class="product__information">{{ product.Description }}</p>
      </div>
      <p class="product__label">DIMENSIONS:</p>
      <p class="product__information">{{ product.Dimensions }}</p>
      <p class="product__label" v-if="product.OnHandQuantity > 0">
        QTY ON HAND: {{ product.OnHandQuantity }}
      </p>
    </div>
  </section>
</template>

<script>
import { myMixin } from "@/mixins/ProductsMixin.js";

export default {
  name: "DetailedProduct",
  props: {
    product: Object,
  },
  mixins: [myMixin],
  data() {
    return {
      dimensions: "275",
    };
  },
};
</script>

<style scoped lang="scss">
.product {
  margin-bottom: 2rem;
  @include tablet-lg {
    margin-bottom: 4rem;
    display: grid;
    grid-template-columns: 1fr 4fr;
    margin: 0 auto;
    min-height: 335px;
    width: 75%;
  }

  &__image-wrapper {
    text-align: center;
    margin: 3rem 0 2rem 0;
  }

  &__details {
    @include tablet-lg {
      margin-left: 3rem;
      margin-top: 3rem;
    }
  }

  &__row {
    display: flex;
    align-items: center;
    width: 9.5rem;
  }

  &__label {
    font-size: $text-sm;
    margin: 0.8rem 0 0.3rem 0;
  }

  &__information {
    font-size: $text-md;
  }
}
.strike {
  color: $gray-1;
}
.no-stock {
  &__badge {
    font-size: $text-xs;
    background: $red-1;
    color: white;
    border-radius: 20px;
    padding: 0.25rem;
    margin-left: auto;
  }
}
</style>
