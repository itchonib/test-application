<template>
  <div class="store">
    <div class="store__banner"></div>
    <div class="store__inner-wrapper">
      <div class="store__logo-wrapper">
        <img
          class="store__logo"
          src="http://images.repzio.com/productimages/772/logo772_lg.jpg?width=100"
        />
      </div>
      <main class="store__content">
        <StoreInfo/>
        <div class="store__products-wrapper">
          <div class="store__row">
            <p class="store__label">products</p>
            <p class="store__products-amount">10</p>
          </div>
          <div class="store__products">
            <ProductCard
              v-for="product in products"
              :key="product.BasePrice"
              v-bind:product="product"
            />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import StoreInfo from "../components/StoreInfo.vue";

export default {
  name: "Home",
  components: {
    ProductCard,
    StoreInfo
},
  data() {
    return {
      products: [
        { BasePrice: 12 },
        { BasePrice: 0 },
        { BasePrice: 0 },
        { BasePrice: 0 },
        { BasePrice: 0 },
        { BasePrice: 0 },
        { BasePrice: 0 },
        { BasePrice: 0 },
        { BasePrice: 0 },
        { BasePrice: 0 },
        { BasePrice: 0 },
      ],
    };
  },
};
</script>

<style scope lang="scss">
.store {
  width: 100vw;

  &__banner {
    height: 8rem;
    width: 100%;
    background: linear-gradient(
      88.49deg,
      #edb89d 13.96%,
      rgba(255, 217, 100, 0.69) 69.01%
    );
  }

  &__inner-wrapper {
    padding: 0 0.7rem;
    margin: 0 auto;
    @include tablet-lg {
      max-width: 60.8125rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  &__logo-wrapper {
    height: 4.7rem;
    border-radius: 50px;
    background: white;
    filter: drop-shadow(1px 3px 10px rgba(0, 0, 0, 0.25));
    width: 10.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -32px;
  }

  &__content {
    width: 100%;
    @include tablet-lg {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 3rem 0;
      align-items: baseline;
    }
  }

  &__row {
    display: flex;

    margin: 0.8rem 0;
    @include tablet-lg {
      margin: 0 0rem 1rem 0;
      align-items: flex-start;
    }
  }

  &__label {
    margin-right: 0.5rem;
  }

  &__products-amount {
    border-radius: 10px;
    background: $gray-1;
    color: white;
    border: solid 1px $gray-1;
    width: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
  }

  &__products-wrapper {
    width: 100%;
    @include tablet-lg {
      max-width: 48rem;
    }
  }

  &__products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax($min-card, auto));
    gap: 10px;
    width: 100%;
  }
}
</style>
