<template>
  <div class="store-info">
    <h2 class="store-info__name">repzio store</h2>
    <div class="store-info__contact">
      <p>email</p>
      <p>email value</p>
      <p>email</p>
      <p>email value</p>
      <p>email</p>
      <p>email value</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
  }
};
</script>

<style scoped lang="scss">
.store-info {
  margin: 1.8rem 0;
  @include tablet-lg {
    width: 20%;
    margin: 0;
  }

  &__name {
    font-weight: 500;
  }

  &__contact {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 10px;
  }
}
</style>
